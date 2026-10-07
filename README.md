# Nadia Maria — Portfolio

Personal portfolio site for Nadia Maria, a software developer based in Nairobi, Kenya. The site is intended for professional software development applications, with an honest trajectory toward secure software and cybersecurity.

## Overview

This is a single-page React portfolio. Content lives in data files so projects, skills, experience and profile links can be updated without rewriting layout code.

The design is a custom dark/light system with editorial typography. It does not use stock template kits, fake metrics, or invented experience.

## Features

- Sticky, accessible navigation with smooth section scrolling
- Responsive layout for mobile, tablet and desktop
- Dark and light themes, with a saved preference
- Project cards driven by `src/data/projects.js`
- Links to GitHub, LinkedIn, and this repository
- Contact form handled by Netlify Forms, with email as a backup
- Semantic HTML, skip link, visible focus states, and reduced-motion support
- SEO metadata and an SVG favicon

## Tech Stack

- React 19
- Vite
- JavaScript
- Tailwind CSS 4
- Lucide React (icons)

## Project Structure

```text
src/
  assets/          # Optional images (project screenshots, etc.)
  components/      # Reusable UI (nav, cards, form, theme toggle)
  data/            # Profile, experience, projects, skills
  hooks/           # Theme and active-section behaviour
  pages/           # Home composition
  sections/        # Page sections
  utils/           # Small helpers
  App.jsx
  main.jsx
  index.css
public/            # Favicon, robots.txt
```

Content you are most likely to edit:

- `src/data/site.js` — name, role, email, social URLs
- `src/data/experience.js` — work history
- `src/data/projects.js` — project cards
- `src/data/skills.js` — skill groups and security-direction topics

## Running Locally

Prerequisites: Node.js 20+ and npm.

```bash
cp .env.example .env
npm install
npm run dev
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env`. Never commit secrets; this project only uses public profile URLs.

| Variable | Purpose |
| --- | --- |
| `VITE_EMAIL` | Public contact email |
| `VITE_GITHUB_URL` | Public GitHub profile |
| `VITE_LINKEDIN_URL` | Public LinkedIn profile |
| `VITE_PORTFOLIO_REPO_URL` | GitHub repo for this website |

`VITE_EMAIL` is the public address shown on the site (`otienonadiamaria@gmail.com`). It is used for `mailto:` links. Form submissions on the live site go through Netlify Forms, not through this variable.

## Deployment

This is a static Vite app. Any static host works.

### Vercel

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Framework preset: Vite.
4. Add the `VITE_*` environment variables.
5. Deploy.

### Netlify

1. Import the GitHub repository.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add the `VITE_*` environment variables if you want to override the defaults.

After the first deploy that includes the contact form, enable email alerts:

1. Site configuration → Forms
2. Form notifications → Add notification
3. Email to `otienonadiamaria@gmail.com`

Submissions also appear in the Netlify Forms inbox. Local `npm run dev` cannot deliver those messages; only the published site can.

### GitHub Pages

Set `base` in `vite.config.js` to the repository name if the site is not on a custom domain, then use the `dist` output with GitHub Pages (or the official Vite GitHub Pages guide).

After deploy, add the live URL to Open Graph tags in `index.html` if you want link previews to point at a canonical domain.

## Future Improvements

- Replace abstract project previews with real screenshots (`image` on each project)
- Publish repositories for the finance and farm systems when they are ready to share
- Optional case-study pages when a project is complete enough to describe in depth
- Custom domain and Open Graph image

## Screenshots

Capture the homepage in dark and light themes after the first local run or deploy, then add them here:

- `docs/screenshots/home-dark.png`
- `docs/screenshots/home-light.png`
- `docs/screenshots/projects.png`
