# Enroz Financial Solution — Website
### Production-Ready Package · v2.0

---

## Project Structure

```
enroz_project/
│
├── index.html              ← MAIN FILE — edit everything here
├── robots.txt              ← Search engine crawler instructions
├── sitemap.xml             ← Site map for Google indexing
├── tailwind.config.js      ← Tailwind config (for production build)
├── README.md               ← This file
│
├── assets/
│   ├── logo.jpeg           ← Company logo
│   ├── favicon.ico         ← Browser tab icon
│   ├── favicon.svg         ← SVG favicon (modern browsers)
│   ├── favicon-32x32.png   ← PNG favicon
│   ├── favicon-192x192.png ← PWA / Android icon
│   └── og-image.svg        ← Social share image (1200×630)
│
├── css/
│   ├── styles.css          ← All custom animations & styles
│   └── input.css           ← Tailwind input (for production build)
│
├── js/
│   ├── router.js           ← SPA page navigation
│   ├── animations.js       ← Scroll reveal & counters
│   ├── forms.js            ← Contact form & FAQ
│   ├── navbar.js           ← Mobile drawer & dropdown
│   └── main.js             ← App bootstrap
│
└── pages/
    ├── home.html           ← Home content (reference only)
    ├── about.html          ← About content (reference only)
    ├── services.html       ← Services content (reference only)
    ├── portfolio.html      ← Packages content (reference only)
    └── contact.html        ← Contact content (reference only)
```

> All page content lives inside **index.html**.
> The pages/ files are reference copies only — do not edit them.

---

## How to Run Locally

**Option A — VS Code Live Server (recommended)**
1. Open VS Code
2. Install "Live Server" extension by Ritwick Dey
3. Right-click `index.html` → "Open with Live Server"
4. Changes save and refresh automatically ✓

**Option B — Python server**
```bash
python3 -m http.server 3000
# Open http://localhost:3000
```

---

## ✅ WEEK 1 CHECKLIST — Before Launch

### 1. Replace Tailwind CDN (for performance)
```bash
# In the project folder:
npm install -D tailwindcss
npx tailwindcss -i css/input.css -o css/tailwind.min.css --minify
```
Then in `index.html`, find:
```html
<script src="https://cdn.tailwindcss.com"></script>
```
Replace with:
```html
<link rel="stylesheet" href="css/tailwind.min.css">
```
And delete the `<script>tailwind.config = {...}</script>` block below it.

---

### 2. Update Your Domain
Search `index.html` for `www.enrozfinancial.com` and replace with your real domain.
Also update `sitemap.xml` with your real domain.

---

### 3. Connect Formspree (Contact Form)
1. Go to **https://formspree.io** → sign up (free)
2. Click **New Form** → name it "Enroz Contact"
3. Copy your form ID (e.g. `xrgvkpzd`)
4. In `index.html`, find:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   Replace `YOUR_FORM_ID` with your real ID.
5. Test by submitting the form — you'll get an email ✓

---

### 4. Update Contact Details
Search `index.html` for these and replace:

| Search for | Replace with |
|---|---|
| `977XXXXXXXXXX` | Your real WhatsApp number (no + sign) |
| `info@enrozfinancial.com` | Your real email |
| `Mon–Fri 9–6 PM · Sat 10–3 PM` | Your real hours |
| `/company/enroz-financial-solution` | Your real LinkedIn path |
| `/enrozfinancial` | Your real Facebook page |

---

### 5. OG Image (Social Share Image)
`assets/og-image.svg` is ready to use.
For best results on all platforms, convert it to JPG (1200×630):
1. Open `og-image.svg` in a browser
2. Screenshot at 1200×630
3. Save as `assets/og-image.jpg`
4. Update `index.html`: change `og-image.svg` → `og-image.jpg`

Or use **Canva** / **Figma** to create a custom one.

---

### 6. Favicon
Already generated and linked. If you want a custom design:
1. Go to **https://realfavicongenerator.net**
2. Upload your `assets/logo.jpeg`
3. Replace the generated files in `assets/`

---

### 7. robots.txt & sitemap.xml
Already created. Just update the domain name inside `sitemap.xml`.

---

## 🚀 Deployment

### Netlify (Easiest — Recommended)
1. Go to **https://netlify.com**
2. Drag and drop the entire `enroz_project` folder
3. Your site is live in 30 seconds ✓
4. Get a free `xxx.netlify.app` domain, or connect your own

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
1. Push folder to GitHub repo
2. Settings → Pages → Deploy from main branch
3. Site live at `yourusername.github.io/repo-name`

### cPanel (Shared Hosting)
1. Log into cPanel → File Manager
2. Navigate to `public_html/`
3. Upload all files (maintain folder structure)

---

## Common Edits

### Colors
Edit the Tailwind config block in `index.html` `<head>`:
```js
colors: {
  navy:    '#1565c0',   // → your primary blue
  sage:    '#5cb85c',   // → your accent green
  ink:     '#0d1b2a',   // → dark background
}
```

### Pricing
Search `index.html` for `NPR 7,500`, `NPR 12,500`, `NPR 20,000`

### Logo
Replace `assets/logo.jpeg` with your file.
Search `index.html` for `src="assets/logo.jpeg"` if you rename it.

### Add a New Page
1. Add `'newpage'` to `PAGES` array in the `router.js` section of `index.html`
2. Add `<div id="page-newpage" class="page">` to the main content area
3. Add a nav link: `<a onclick="navigate('newpage')">New Page</a>`

---

## SEO Checklist
- [ ] Update `<link rel="canonical">` with real domain
- [ ] Update all `www.enrozfinancial.com` references
- [ ] Create real `assets/og-image.jpg` (1200×630px)
- [ ] Update Schema.org telephone number
- [ ] Update sitemap.xml with real domain
- [ ] Submit to Google Search Console after launch
- [ ] Submit to Bing Webmaster Tools after launch

---

## Performance Checklist
- [ ] Replace Tailwind CDN with compiled CSS (see step 1 above)
- [ ] Compress images using https://squoosh.app
- [ ] Enable Gzip/Brotli on your hosting
- [ ] Test score at https://pagespeed.web.dev after launch

