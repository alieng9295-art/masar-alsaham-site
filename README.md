# Masar Al-Saham Company — Website

A free, bilingual (Arabic/English) website for Masar Al-Saham Company, a general contracting business serving all cities of Iraq.

## What's here
- `index.html`, `about.html`, `services.html`, `projects.html`, `contact.html` — the 5 pages
- `css/style.css` — all styling
- `js/i18n.js` — Arabic/English text (edit this to change any wording)
- `js/main.js` — language toggle, mobile menu, contact form behavior
- `assets/logo.svg` — placeholder logo

Everything is **placeholder content** (marked with the yellow banner at the top of each page). Replace phone, email, address, project photos, and company story text in `js/i18n.js` before sharing this publicly, then delete the placeholder banner from each HTML file.

## Free hosting with GitHub Pages
1. Create a free account at github.com if you don't have one.
2. Create a new repository (e.g. `masar-alsaham-site`).
3. Upload all the files in this folder to the repository (keep the folder structure).
4. In the repo, go to **Settings → Pages**, set the source branch to `main` (root folder), and save.
5. Your site will be live in a minute or two at:
   `https://<your-github-username>.github.io/masar-alsaham-site/`

## Contact form
The contact form on `contact.html` currently just shows a "thank you" confirmation — it doesn't actually send anywhere, since GitHub Pages only hosts static files. To receive real messages, either:
- Connect a free service like [Formspree](https://formspree.io) (point the form's `action` at your Formspree endpoint), or
- Replace the submit button with a `mailto:` or WhatsApp link.
