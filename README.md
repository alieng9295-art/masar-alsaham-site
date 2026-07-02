# Masar Al-Saham Company — Website

A free, bilingual (Arabic/English) website for **Masar Al-Saham Company** (شركة مسار السهم للمقاولات العامة والاستشارات الهندسية), a Grade-1 classified general contracting and engineering consultancy company based in Baghdad, Iraq.

- **Live site:** https://alieng9295-art.github.io/masar-alsaham-site/
- **Short link:** https://tinyurl.com/26ok2jbp
- **GitHub repo:** https://github.com/alieng9295-art/masar-alsaham-site
- **Hosting:** Free forever via GitHub Pages (branch: `main`, root folder) — no expiration date, no credit card, works as long as the GitHub account stays active.

## What's here
- `index.html`, `about.html`, `services.html`, `projects.html`, `contact.html` — the 5 pages
- `css/style.css` — all styling
- `js/i18n.js` — **all Arabic/English text lives here.** Edit this file to change any wording, stats, or project descriptions on the site (each page reads its text from this file at load time).
- `js/main.js` — language toggle, mobile menu, About page image carousel, contact form submission
- `assets/logo_new.png` — the real company logo (transparent background)
- `assets/proj1–proj7-*.jpg` — real project photos, pulled from the company profile PDF (Karbala Gate residential complex, Shanashil Baghdad, Bidour Al-Najaf, gas storage tanks, TBI bank renovation, Al-Nahrain University, Ministry of Interior stairs)
- `robots.txt`, `sitemap.xml` — help search engines find and index the site

## Real content already in place
Phone: 07745000864 / 07764181492 · Email: masar.al_saham@yahoo.com · Address: Baghdad – Al-Khadra District · Hours: Sat–Thu 8am–5pm · Classification: Grade 1 (تصنيف اول انشائي) · 25+ years experience · 78+ staff.

## Contact form
The form on `contact.html` sends real emails to masar.al_saham@yahoo.com via FormSubmit.co (a free service, no account needed). The first time someone submits the form, FormSubmit sends a one-time confirmation email to masar.al_saham@yahoo.com — that confirmation link must be clicked once to activate delivery; after that, every submission arrives by email automatically.

## Search engine visibility (SEO)
`robots.txt` and `sitemap.xml` were added to help Google discover and index the site faster. New websites still typically take anywhere from a couple of weeks to a few months to start appearing in search results — this is normal and not something any technical fix can bypass immediately.

## About page photo carousel
The image on `about.html` automatically rotates through 6 real project photos every 4 seconds (controlled by `initAboutCarousel()` in `js/main.js`, styled in `css/style.css` under `.about-carousel`).

## How to make future edits
The easiest way: come back to this conversation (or start a new one and share this repo link — `https://github.com/alieng9295-art/masar-alsaham-site`) and describe what you want changed. Claude can read the live repo, edit the files, and re-publish directly.

To edit by hand instead:
1. Go to the repo on GitHub, open the file you want to change (e.g. `js/i18n.js` for text, `projects.html` for the projects grid layout).
2. Click the pencil (edit) icon, make your change, and commit directly to `main`.
3. GitHub Pages rebuilds automatically within a minute or two — refresh the live site to see it.
4. To add a new photo: **Add file → Upload files**, choose the target folder (e.g. `assets`), upload, and commit.
