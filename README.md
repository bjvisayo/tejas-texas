# Tejas Trucking & Construction L.L.C. — Website

Full website with frontend, admin dashboard, and Node.js backend.

---

## Project Structure

```
tejas-trucking-website/
├── frontend/
│   ├── index.html              ← Main website (6-page SPA)
│   ├── admin.html              ← Admin dashboard (leads management)
│   └── assets/
│       ├── css/
│       │   └── styles.css      ← All styles
│       └── js/
│           ├── main.js         ← Page routing, form API calls, animations
│           └── icons.js        ← Flat colored SVG icon library
│
└── backend/
    ├── server.js               ← Express API server
    ├── package.json            ← Dependencies
    ├── .env.example            ← Environment variables template
    └── data/
        └── tejas.db            ← SQLite database (auto-created on first run)
```

---

## Quick Start

### 1. Backend

```bash
cd backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your SMTP credentials and admin password

# Start the server
node server.js
# → Running on http://localhost:3001
```

### 2. Frontend

Open `frontend/index.html` in a browser directly, or serve it with any static file server:

```bash
# Option A — VS Code Live Server (recommended during development)
# Right-click index.html → Open with Live Server

# Option B — quick Python server
cd frontend
python3 -m http.server 5500
# → http://localhost:5500

# Option C — Node static server
npx serve frontend
```

### 3. Admin Dashboard

Open `frontend/admin.html` in a browser.
Default password: `tejas2024` (change in `.env` → `ADMIN_PASSWORD`)

---

## API Endpoints

| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| GET | `/api/health` | Server health check | — |
| POST | `/api/leads` | Submit a quote request | — |
| POST | `/api/admin/login` | Get admin token | — |
| GET | `/api/admin/leads` | List leads (paginated, filterable) | ✅ |
| PATCH | `/api/admin/leads/:id` | Update lead status | ✅ |
| DELETE | `/api/admin/leads/:id` | Delete a lead | ✅ |
| GET | `/api/admin/stats` | Dashboard statistics | ✅ |

---

## Email Notifications

When a quote form is submitted, the server sends an email notification.
Configure in `.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your_app_password   # Gmail → Settings → App Passwords
NOTIFY_EMAIL=alerts@yourdomain.com
```

> Gmail requires a 16-character **App Password** (not your regular password).
> Enable it at: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)

---

## Lead Statuses

| Status | Meaning |
|--------|---------|
| `new` | Just submitted — needs follow-up |
| `contacted` | Called or emailed the client |
| `quoted` | Quote sent |
| `won` | Job secured |
| `lost` | Did not convert |

---

## Deployment

**Frontend** → Deploy the `frontend/` folder to any static host:
- Netlify / Vercel (drag & drop)
- GitHub Pages
- Cloudflare Pages

**Backend** → Deploy to any Node.js host:
- Railway (`railway up`)
- Render (connect GitHub repo)
- DigitalOcean App Platform
- VPS with `pm2 start server.js`

After deploying the backend, update `API_BASE` in `frontend/assets/js/main.js`:
```js
const API_BASE = 'https://your-backend-url.com/api';
```
And update it in `frontend/admin.html`:
```js
const API = 'https://your-backend-url.com/api';
```

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | HTML5, CSS3, Vanilla JS |
| Fonts | Rajdhani + Source Sans 3 (Google Fonts) |
| Icons | Custom flat SVG library (icons.js) |
| Backend | Node.js + Express |
| Database | SQLite via sql.js (pure JS — no native build) |
| Email | Nodemailer |

---

**Tejas Trucking & Construction L.L.C.**
719 W 27th St, Houston, TX 77008 · (832) 283-7084
