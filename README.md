# Geothermal Networks Education Website

This repository now hosts a single merged geothermal learning portal at the repository root.

## Repository structure

- `src/`: the merged React/Vite application that will be deployed to GitHub Pages
- `legacy-sources/`: archived source material from the two original portal builds, kept for reference only

## Running locally

Run `npm install` to install dependencies.

Run `npm run dev` to start the development server.

Run `npm run build` to produce the static site output in `build/`.

## Deploying to GitHub Pages

GitHub Pages deployment is configured through [deploy.yml](/Users/billchen/Documents/geothermal-merge/.github/workflows/deploy.yml).

After pushing to the `main` branch:

1. Open the repository settings in GitHub.
2. Go to `Settings > Pages`.
3. Set `Source` to `GitHub Actions`.

The Vite `base` path is derived automatically from the GitHub repository name during the Pages build, so the same configuration works for both project pages and `username.github.io` repositories.
