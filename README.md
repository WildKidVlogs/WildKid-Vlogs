# WILDKID VLOGS PRO 3.0 — AUTO CONTENT

This build is designed for GitHub Pages and includes the 10 WILDKID VLOGS photos already available from the previous project.

## YouTube automatic sync
The site uses the official YouTube Data API v3. It reads the channel's uploads playlist and displays the latest videos automatically.

1. Create a YouTube Data API v3 API key in Google Cloud.
2. Enable YouTube Data API v3.
3. Open `config.js`.
4. Replace:
   `PASTE_YOUR_YOUTUBE_DATA_API_KEY_HERE`
   with your key.
5. Commit/push the files to GitHub Pages.
6. Restrict the API key to your GitHub Pages domain.

The browser will refresh the YouTube content every 30 minutes (change `refreshMinutes` in `config.js` if desired).

## Categories
The filters are:
All / Vlogs / Shorts / Travel / Moto / Adventure / Music

Without playlists, categories are inferred from video titles/descriptions. For exact categorization later, put playlist IDs into `config.js`.

## Photos
The current 10 real photos are in `assets/gallery/`.

For future photos, add them to that folder and update the gallery list in `index.html` (or later we can add a GitHub Actions gallery manifest so new files are picked up automatically).

## Important
Do NOT paste an OAuth secret or private credential into the website. A browser API key is the intended credential for public read-only API calls, and it should be restricted in Google Cloud.
