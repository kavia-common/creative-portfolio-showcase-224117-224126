# Ocean Professional Portfolio (Playful Theme)

A single-page portfolio built with React and lightweight utility CSS. It includes sections for About, Projects, Skills, and Contact with smooth scrolling, responsive design, and accessible components.

## Features

- Sticky navbar with section links (About, Projects, Skills, Contact)
- Smooth scrolling and animated gradient background with optional waves
- Projects grid (6 sample projects), Skills badges, and Contact form (demo)
- Lightweight utility CSS (no external UI frameworks)
- Feature flags via `REACT_APP_FEATURE_FLAGS` JSON
- Accessible components with keyboard focus rings and ARIA attributes
- Mobile-first, responsive layout

## Getting Started

Install and run locally:

- npm install
- npm start

Open http://localhost:3000

## Environment Variables

Create a `.env` file at the project root (do not commit secrets). See `.env.example` below:

```
REACT_APP_API_BASE=http://localhost:4000
REACT_APP_BACKEND_URL=
REACT_APP_FRONTEND_URL=http://localhost:3000
REACT_APP_WS_URL=
REACT_APP_NODE_ENV=development
REACT_APP_ENABLE_SOURCE_MAPS=true
REACT_APP_PORT=3000
REACT_APP_TRUST_PROXY=false
REACT_APP_LOG_LEVEL=info
REACT_APP_HEALTHCHECK_PATH=/health
REACT_APP_FEATURE_FLAGS={"enableContact":true,"showWaves":true}
REACT_APP_EXPERIMENTS_ENABLED=false
```

- If `REACT_APP_API_BASE` is not set, the app will fallback to `REACT_APP_BACKEND_URL` or `http://localhost:4000`.
- `REACT_APP_FEATURE_FLAGS` accepts a JSON string. Example:
  - {"enableContact": true, "showWaves": true}

## Theme

Ocean Professional — Playful
- Primary: #EC4899
- Secondary: #8B5CF6
- Success: #10B981
- Error: #EF4444
- Background: #FDF2F8
- Surface: #FFFFFF
- Text: #374151

Global styles live in:
- src/styles/utilities.css (spacing, buttons, cards, forms, badges)
- src/styles/theme.css (background gradients, waves, layout helpers)

## Architecture

Components:
- Navbar: Sticky top navigation with accessible links.
- HeroAbout: Intro with CTA buttons.
- ProjectsGrid: 6-card grid of sample projects.
- SkillsCloud: Tag-style badges.
- ContactForm: Client-side validation; demo only (no backend request).
- Footer: Section links and copyright.

Feature Flags:
- Read from `REACT_APP_FEATURE_FLAGS` JSON. Defaults:
  - enableContact: true
  - showWaves: true

## Accessibility

- Semantic landmarks (header, main, footer)
- Skip to content link
- Focus-visible outlines
- ARIA attributes for form validation and navigation

## Deployment

Build:
- npm run build

The output is generated in `build/`. Configure your host to serve it as static files.

## Notes

- No secrets are hard-coded.
- The app compiles and runs without external services; contact submission is a placeholder.

