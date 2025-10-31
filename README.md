
# BuilderAssist — Construction VA Mini‑Site

Static site generated from a PRD. Includes:
- `index.html` (landing), `positions.html`, `pricing.html`, `why-now.html`, `case-study-template.html`
- Minimal CSS embedded inline
- Ready for GitHub → Vercel deploy

## 1) Local preview
Just open `index.html` in your browser.

## 2) Push to your GitHub repo
Replace the repo URL with yours if different.

```bash
# Clone your empty repo
git clone https://github.com/george550/constructionVA
cd constructionVA

# Copy site files into the repo (adjust the path to your download location)
# On macOS after downloading/unzipping, e.g.:
cp -R ~/Downloads/construction_va_site/* .

# Optional: add a simple vercel.json (already included here)
git add .
git commit -m "Initial commit: construction VA mini-site"
git push origin main  # or 'master' if that's your default
```

If the repo has no default branch yet:
```bash
git checkout -b main
git push -u origin main
```

## 3) Deploy on Vercel
1. Go to https://vercel.com/new
2. Import the GitHub repo `george550/constructionVA`
3. Framework Preset: **Other**
4. Build Command: _None_ (leave empty)
5. Output Directory: **/**
6. Deploy

## 4) Connect your domain (optional)
- In Vercel → Project → Settings → Domains
- Add `builder.integrated.tech` (or any subdomain) and follow the DNS instructions

## 5) Customize content
Edit these in the HTML:
- Email: search for `hello@example.com` and replace
- Calendly: search for `Open Calendly` link and replace `href="#"` with your scheduling link
- Brand name: search for `BuilderAssist` to rename
- Pricing: `pricing.html`
- Proof points (stats): `why-now.html`
- Roles/Tasks: `positions.html`

## 6) Recommended next tweaks
- Add Open Graph tags, favicon
- Hook up analytics (PostHog/GA4 snippet)
- Add a contact form (Formspree / Netlify Forms / Vercel serverless function)
