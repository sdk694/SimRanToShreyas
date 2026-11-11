# Shreyas & Simran Wedding Invitation

A premium botanical luxury static wedding invitation for Shreyas Kulkarni and Simran Bhambhani, designed for GitHub Pages and delivered as a no-build static site.

## Included URLs

- `/day1-day2/` – Day 1 + Day 2 invitation
- `/day2/` – Day 2-only invitation

## Run locally

From the project root, run:

```bash
python -m http.server 8000
```

Then open:

- http://localhost:8000/day1-day2/
- http://localhost:8000/day2/

## Content configuration

The main content and metadata are configured in:

- `data/wedding-config.js`
- `js/translations.js`

Update names, dates, venue information, and event labels there.

## Translation updates

All visible text is stored in `js/translations.js` under the `en`, `hi`, and `mr` objects. Add or edit keys to update English, Hindi, and Marathi copy.

## Logo replacement

The supplied logo is kept at:

- `assets/logo/ss-logo.png`

The continuous wedding artwork is kept at:

- `assets/images/wedding-background.png`

Both files are used as supplied. The social preview generator uses these files and never recreates or overwrites the logo.

To regenerate the Open Graph preview images, run `python generate_assets.py` in an environment with Pillow installed. This optional step is not part of the static site build or deployment.

## Event timing updates

Update event names, times, and day-specific content in:

- `js/events.js`
- `data/wedding-config.js`

## GitHub Pages setup

1. Push this repository to GitHub.
2. Open the repository settings.
3. Navigate to Pages.
4. Set the source to GitHub Actions.
5. The included workflow will publish automatically on pushes to `main` or `master`.

## Deployment using GitHub Actions

The workflow is in:

- `.github/workflows/deploy.yml`

This uses the official GitHub Pages deployment actions and deploys the static site without npm or a build pipeline.

## WhatsApp preview testing

Each invitation page includes its own Open Graph metadata in the initial HTML. To test locally, open the page and inspect the metadata in the browser dev tools or use a preview tool.

For production, the planned live URLs are:

- `https://sdk694.github.io/SimRanToShreyas/day1-day2/`
- `https://sdk694.github.io/SimRanToShreyas/day2/`

## Notes

This project uses only static HTML, CSS, JavaScript, SVG, and image assets. It does not require backend services or a package manager.
