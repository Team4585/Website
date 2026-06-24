# Husky Robotics Team 4585 Website

Static, deploy-ready website for FRC Team 4585. It uses public team/FIRST media, optimized WebP images, semantic HTML, a Netlify-ready team contact form, and no build step.

## Recommended free deployment

Use Netlify Drop for the fastest free launch:

1. Go to `https://app.netlify.com/drop`.
2. Drag this project folder into the drop area.
3. Netlify will publish the static site and give you a temporary URL.
4. Form submissions from the team contact form will appear in the site's Netlify Forms dashboard.
5. If the team wants updates through Git later, connect this folder as a GitHub repository to Netlify.

Cloudflare Pages and GitHub Pages also work because this is plain static HTML.

## Local preview

Open `index.html` directly in a browser, or run a tiny static server:

```sh
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Media notes

The photos are public team/FIRST archive images converted to WebP for performance. Before publishing broadly, get final approval from the team or school for student likeness and sponsor/logo usage.
