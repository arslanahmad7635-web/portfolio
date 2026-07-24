# Arslan Ahmad — Data Science Portfolio (React)

A React + Vite rebuild of the original single-file portfolio, with the same dark/teal/amber
visual identity, heavier motion throughout (Framer Motion), and a professionally framed
profile photo in the hero section.

## Run it

```bash
npm install
npm run dev       # local dev server, usually http://localhost:5173
```

## Build for production

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally to double-check it
```

`dist/` is what you deploy — drag it into Netlify/Vercel/GitHub Pages, or serve it from
any static host.

## Project structure

```
public/
  profile.jpg          ← your photo, served as-is
src/
  data/content.js       ← all copy: headline, projects, tools, education — edit text here
  components/
    Header.jsx          ← nav bar, scroll-shrink, mobile menu
    Hero.jsx             ← headline word-stagger animation + intro
    ProfilePhoto.jsx     ← the framed photo card (ring, tilt, badge)
    SignalWidget.jsx      ← churn chart with animated count-up bars
    Work.jsx              ← project list
    Toolkit.jsx           ← tool grid
    Education.jsx        ← education/certifications list
    About.jsx
    Contact.jsx           ← CTA + footer
    Reveal.jsx            ← reusable scroll-reveal wrapper
    CursorGlow.jsx        ← ambient cursor-follow glow (desktop only)
    ScrollProgress.jsx    ← top progress bar
  App.jsx                 ← assembles all sections
  index.css               ← design tokens (colors, fonts) + base styles
```

## Editing content

Almost everything text-based (headline words, project descriptions, tool list, education
history) lives in `src/data/content.js` — change it there rather than hunting through
components.

## Photo notes

`ProfilePhoto.jsx` crops your photo into a circle purely with CSS (`border-radius: 50%` +
`object-fit: cover` + `object-position`) — no pixels are altered. If you want to reframe
it (e.g. show more shoulder, shift left/right), adjust the `objectPosition` value on the
`<img>` tag in that file. To swap in a different photo, just replace `public/profile.jpg`
and keep the same filename (or update the `src="/profile.jpg"` path).

## Motion notes

All animation is done with [Framer Motion](https://www.framer.com/motion/) and respects
`prefers-reduced-motion` (reduced-motion users get instant, static states — see the
media query at the bottom of `src/index.css`). If you want less motion overall, the
easiest dial is `src/components/Reveal.jsx` (controls every scroll-reveal) and
`ProfilePhoto.jsx` (controls the tilt/ring/badge animations).
