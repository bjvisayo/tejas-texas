/**
 * Tejas Trucking & Construction — Backend Server
 * Stack: Node.js · Express · sql.js (SQLite) · Nodemailer
 * Run:   node server.js
 */

require('dotenv').config();
const express    = require('express');
const cors       = require('cors');
const nodemailer = require('nodemailer');
const initSqlJs  = require('sql.js');
const path       = require('path');
const fs         = require('fs');

const app  = express();
const PORT = process.env.PORT || 3001;
const DB_PATH = path.join(__dirname, 'data', 'tejas.db');

// ─── Middleware ────────────────────────────────────────────────────────────
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Database setup ────────────────────────────────────────────────────────
let db;

async function initDatabase() {
  const SQL = await initSqlJs();

  // Ensure data directory exists
  if (!fs.existsSync(path.join(__dirname, 'data'))) {
    fs.mkdirSync(path.join(__dirname, 'data'));
  }

  // Load existing DB from disk or create new
  if (fs.existsSync(DB_PATH)) {
    const fileBuffer = fs.readFileSync(DB_PATH);
    db = new SQL.Database(fileBuffer);
  } else {
    db = new SQL.Database();
  }

  // Create leads table
  db.run(`
    CREATE TABLE IF NOT EXISTS leads (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      first_name  TEXT    NOT NULL,
      last_name   TEXT    NOT NULL,
      phone       TEXT    NOT NULL,
      email       TEXT,
      company     TEXT,
      service     TEXT,
      location    TEXT,
      message     TEXT,
      source      TEXT,
      status      TEXT    DEFAULT 'new',
      created_at  TEXT    DEFAULT (datetime('now'))
    )
  `);

  // Create admin_sessions table (simple token-based auth)
  db.run(`
    CREATE TABLE IF NOT EXISTS admin_sessions (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      token      TEXT NOT NULL UNIQUE,
      created_at TEXT DEFAULT (datetime('now'))
    )
  `);

  saveDb();
  console.log('✅ Database ready');
}

// Persist DB to disk after every write
function saveDb() {
  const data = db.export();
  fs.writeFileSync(DB_PATH, Buffer.from(data));
}

// ─── Email transporter ─────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST   || 'smtp.gmail.com',
  port:   parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendLeadEmail(lead) {
  if (!process.env.SMTP_USER) return; // Skip if email not configured

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#0d1f3c;padding:24px;border-bottom:4px solid #e85d1a;">
        <h2 style="color:#fff;margin:0;font-size:22px;">🚛 New Lead — Tejas Trucking</h2>
      </div>
      <div style="padding:24px;background:#f5f6f8;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;font-weight:700;color:#0d1f3c;width:140px;">Name</td><td>${lead.first_name} ${lead.last_name}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;color:#0d1f3c;">Phone</td><td><a href="tel:${lead.phone}">${lead.phone}</a></td></tr>
          <tr><td style="padding:8px 0;font-weight:700;color:#0d1f3c;">Email</td><td>${lead.email || '—'}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;color:#0d1f3c;">Company</td><td>${lead.company || '—'}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;color:#0d1f3c;">Service</td><td>${lead.service || '—'}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;color:#0d1f3c;">Location</td><td>${lead.location || '—'}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;color:#0d1f3c;">Source</td><td>${lead.source || '—'}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;color:#0d1f3c;vertical-align:top;">Message</td><td>${lead.message || '—'}</td></tr>
        </table>
      </div>
      <div style="padding:16px 24px;background:#0d1f3c;text-align:center;">
        <a href="${process.env.ADMIN_URL || 'http://localhost:3001/admin'}" style="background:#e85d1a;color:#fff;padding:10px 24px;text-decoration:none;border-radius:3px;font-weight:700;">View in Dashboard →</a>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from:    `"Tejas Trucking Site" <${process.env.SMTP_USER}>`,
    to:      process.env.NOTIFY_EMAIL || process.env.SMTP_USER,
    subject: `🚛 New Quote Request — ${lead.first_name} ${lead.last_name} (${lead.service || 'General'})`,
    html,
  });
}

// ─── Middleware: Admin auth ────────────────────────────────────────────────
function requireAdmin(req, res, next) {
  const token = req.headers['x-admin-token'] || req.query.token;
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  const result = db.exec(`SELECT id FROM admin_sessions WHERE token = '${token.replace(/'/g,"''")}'`);
  if (!result.length || !result[0].values.length) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
  next();
}

// ─── ROUTES ───────────────────────────────────────────────────────────────

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── POST /api/leads — Submit a quote request
app.post('/api/leads', async (req, res) => {
  try {
    const {
      first_name, last_name, phone, email,
      company, service, location, message, source
    } = req.body;

    // Basic validation
    if (!first_name || !last_name || !phone) {
      return res.status(400).json({ error: 'First name, last name, and phone are required.' });
    }

    // Sanitize inputs
    const safe = (v) => (v || '').toString().replace(/'/g, "''").slice(0, 500);

    db.run(`
      INSERT INTO leads (first_name, last_name, phone, email, company, service, location, message, source)
      VALUES ('${safe(first_name)}','${safe(last_name)}','${safe(phone)}',
              '${safe(email)}','${safe(company)}','${safe(service)}',
              '${safe(location)}','${safe(message)}','${safe(source)}')
    `);
    saveDb();

    // Send email notification (non-blocking)
    sendLeadEmail({ first_name, last_name, phone, email, company, service, location, message, source })
      .catch(err => console.error('Email error:', err.message));

    res.status(201).json({ success: true, message: 'Quote request received! We\'ll be in touch within 24 hours.' });

  } catch (err) {
    console.error('Lead submission error:', err);
    res.status(500).json({ error: 'Server error. Please try again or call us directly.' });
  }
});

// ── POST /api/admin/login — Get auth token
app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  const adminPass = process.env.ADMIN_PASSWORD || 'tejas2024';

  if (password !== adminPass) {
    return res.status(401).json({ error: 'Incorrect password' });
  }

  const token = require('crypto').randomBytes(32).toString('hex');
  db.run(`INSERT INTO admin_sessions (token) VALUES ('${token}')`);
  saveDb();

  res.json({ token });
});

// ── GET /api/admin/leads — Fetch all leads (paginated)
app.get('/api/admin/leads', requireAdmin, (req, res) => {
  try {
    const page   = parseInt(req.query.page  || '1');
    const limit  = parseInt(req.query.limit || '20');
    const status = req.query.status || '';
    const search = (req.query.search || '').replace(/'/g, "''");
    const offset = (page - 1) * limit;

    let where = '1=1';
    if (status) where += ` AND status = '${status}'`;
    if (search) where += ` AND (first_name LIKE '%${search}%' OR last_name LIKE '%${search}%' OR phone LIKE '%${search}%' OR email LIKE '%${search}%')`;

    const rows   = db.exec(`SELECT * FROM leads WHERE ${where} ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`);
    const counts = db.exec(`SELECT COUNT(*) as total FROM leads WHERE ${where}`);
    const stats  = db.exec(`SELECT status, COUNT(*) as count FROM leads GROUP BY status`);

    const leads = rows.length ? rows[0].values.map(r => ({
      id: r[0], first_name: r[1], last_name: r[2], phone: r[3],
      email: r[4], company: r[5], service: r[6], location: r[7],
      message: r[8], source: r[9], status: r[10], created_at: r[11]
    })) : [];

    const total = counts[0]?.values[0][0] || 0;

    const statusMap = {};
    if (stats.length) stats[0].values.forEach(([s, c]) => { statusMap[s] = c; });

    res.json({ leads, total, page, limit, stats: statusMap });

  } catch (err) {
    console.error('Fetch leads error:', err);
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
});

// ── PATCH /api/admin/leads/:id — Update lead status
app.patch('/api/admin/leads/:id', requireAdmin, (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const allowed = ['new', 'contacted', 'quoted', 'won', 'lost'];
    if (!allowed.includes(status)) return res.status(400).json({ error: 'Invalid status' });

    db.run(`UPDATE leads SET status = '${status}' WHERE id = ${parseInt(id)}`);
    saveDb();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update lead' });
  }
});

// ── DELETE /api/admin/leads/:id — Delete a lead
app.delete('/api/admin/leads/:id', requireAdmin, (req, res) => {
  try {
    db.run(`DELETE FROM leads WHERE id = ${parseInt(req.params.id)}`);
    saveDb();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete lead' });
  }
});

// ── GET /api/admin/stats — Dashboard stats
app.get('/api/admin/stats', requireAdmin, (req, res) => {
  try {
    const total    = db.exec(`SELECT COUNT(*) FROM leads`)[0]?.values[0][0] || 0;
    const thisWeek = db.exec(`SELECT COUNT(*) FROM leads WHERE created_at >= datetime('now','-7 days')`)[0]?.values[0][0] || 0;
    const byStatus = db.exec(`SELECT status, COUNT(*) FROM leads GROUP BY status`);
    const byService= db.exec(`SELECT service, COUNT(*) FROM leads WHERE service != '' GROUP BY service ORDER BY COUNT(*) DESC LIMIT 6`);
    const recent   = db.exec(`SELECT first_name, last_name, service, status, created_at FROM leads ORDER BY created_at DESC LIMIT 5`);

    const statusMap  = {};
    if (byStatus.length)  byStatus[0].values.forEach(([s,c])  => { statusMap[s]  = c; });
    const serviceMap = {};
    if (byService.length) byService[0].values.forEach(([s,c]) => { serviceMap[s] = c; });

    const recentLeads = recent.length ? recent[0].values.map(r => ({
      first_name: r[0], last_name: r[1], service: r[2], status: r[3], created_at: r[4]
    })) : [];

    res.json({ total, thisWeek, byStatus: statusMap, byService: serviceMap, recent: recentLeads });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

// ─── Start ─────────────────────────────────────────────────────────────────
initDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`\n🚛 Tejas Trucking Backend running on http://localhost:${PORT}`);
    console.log(`📊 Admin dashboard:  http://localhost:${PORT}/api/admin/leads`);
    console.log(`📬 Submit lead:      POST http://localhost:${PORT}/api/leads\n`);
  });
});
