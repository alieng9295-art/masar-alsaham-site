# Masar Al-Saham Company — Website

A free, bilingual (Arabic/English) website for **Masar Al-Saham Company** (شركة مسار السهم للمقاولات العامة والاستشارات الهندسية), a Grade-1 classified general contracting and engineering consultancy company based in Baghdad, Iraq.

- **Live site:** https://alieng9295-art.github.io/masar-alsaham-site/
- **GitHub repo:** https://github.com/alieng9295-art/masar-alsaham-site
- **Hosting:** Free, via GitHub Pages (branch: `main`, root folder)

## What's here
- `index.html`, `about.html`, `services.html`, `projects.html`, `contact.html` — the 5 pages
- `css/style.css` — all styling
- `js/i18n.js` — **all Arabic/English text lives here.** Edit this file to change any wording, stats, or project descriptions on the site (each page reads its text from this file at load time).
- `js/main.js` — language toggle, mobile menu, contact form behavior
- `assets/logo_new.png` — the real company logo (transparent background)
- `assets/proj1–proj7-*.jpg` — real project photos, pulled from the company profile PDF (Karbala Gate residential complex, Shanashil Baghdad, Bidour Al-Najaf, gas storage tanks, TBI bank renovation, Al-Nahrain University, Ministry of Interior stairs)

## Real content already in place
Phone: 07745000864 / 07764181492 · Email: masar.al_saham@yahoo.com · Address: Baghdad – Al-Khadra District · Hours: Sat–Thu 8am–5pm · Classification: Grade 1 (تصنيف اول انشائي) · 25+ years experience · 78+ staff.

## How to make future edits
The easiest way: come back to this conversation (or start a new one and share this repo link — `https://github.com/alieng9295-art/masar-alsaham-site`) and describe what you want changed. Claude can read the live repo, edit the files, and re-publish directly.

To edit by hand instead:
1. Go to the repo on GitHub, open the file you want to change (e.g. `js/i18n.js` for text, `projects.html` for the projects grid layout).
2. Click the pencil (edit) icon, make your change, and commit directly to `main`.
3. GitHub Pages rebuilds automatically within a minute or two — refresh the live site to see it.
4. To add a new photo: **Add file → Upload files**, choose the target folder (e.g. `assets`), upload, and commit.

## Contact form
The form on `contact.html` currently just shows a "thank you" confirmation — it doesn't send anywhere yet, since GitHub Pages only hosts static files. To receive real messages, either:
- Connect a free service like [Formspree](https://formspree.io) (point the form's `action` at your Formspree endpoint), or
- Replace the submit button with a `mailto:` or WhatsApp link.
