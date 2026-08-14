# WILDKID VLOGS Website

A premium static creator website for Kartik Bhumij / WILDKID VLOGS.

This repository contains a simple static site (index.html, style.css, script.js) you can host on GitHub Pages.

## Files
- `index.html` — website structure
- `style.css` — design and responsive styling
- `script.js` — animations, mobile menu and gallery lightbox

## Deploy on GitHub Pages
The site is static and can be served directly by GitHub Pages.

Option A — Use the included GitHub Actions workflow (recommended):
1. Commit these files to the `main` branch (they're already in the repo).
2. The workflow at `.github/workflows/pages.yml` will automatically build and publish the site to GitHub Pages whenever you push to the repository.

Option B — Enable Pages from the repository settings:
1. Go to Settings → Pages.
2. Under "Deploy from", choose `Deploy from a branch` → `main` → `/ (root)`.
3. Save. The site will be published to `https://<your-username>.github.io/<repo-name>/` (may take a minute).

## Contact form
The contact form in the site is front-end only. Connect it to Formspree, Netlify Forms, EmailJS, or your own backend before using it for production.

## Replace placeholder images
The image URLs in the site are demo/placeholder images from Unsplash. Replace them with your own photos for the final site.

## Local testing
You can test the site locally by opening `index.html` in your browser. For a local server (recommended):

- Python 3: `python -m http.server 8000` then open `http://localhost:8000/`.

## License
Add a license file if you want to publish this publicly (MIT is common for static sites).
