# Mohamed Nashaat — Portfolio

Personal portfolio website for a frontend developer focused on React.js.
Dark luxury design (black and gold) with an optional light mode (soft sage and deep teal) and scroll-triggered animations.

**Live demo:** _add your deployed URL here_

## Tech stack

- React 19 + Vite
- GSAP (ScrollTrigger) for scroll animations
- lucide-react for icons
- Plain CSS (design tokens in `src/index.css`)

## Sections

Hero · Things I've built (project cards with a screenshot viewer and lightbox) · About · What I use (skills) · Contact

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build in /dist
npm run preview  # preview the production build
npm run lint     # run oxlint
```

## Project structure

```
src/
├── components/
│   ├── common/      # SectionHeader, Icons (+ .css files)
│   ├── layout/      # Navbar, Footer (+ .css files)
│   └── sections/    # Hero, SelectedWork, ProjectShowcase, About, Skills, Contact (+ .css files)
├── data/portfolioData.js   # all text, links, projects, and skills live here
├── hooks/                  # usePrefersReducedMotion, useTheme
├── lib/animation.js        # GSAP + ScrollTrigger registered once
└── index.css               # design tokens (colors, fonts) and shared utilities
```

Every component has its own `.css` file next to it, so there are no inline styles in the JSX.

## Dark and light mode

The sun/moon button in the header switches themes and remembers the choice in the browser.
The site starts in dark mode.

All colors are CSS variables at the top of `src/index.css`:

- `:root` holds the dark theme (black and gold).
- `:root[data-theme='light']` holds the light theme (Soft Sage `#D4ECDD` and Deep Teal `#152D35`).

To change a color, edit its variable in the matching block. Components never hard-code colors.

## Updating the content

Everything is in `src/data/portfolioData.js`.

**Add a project:** add one object to the `projects` array (copy `shopstreamProject` as a template).
It appears in the Projects section, and its `techStack` is added to the Skills section automatically.
You never edit the Skills section by hand. Technologies that are not listed in `techCategory`
go into a "More tools" card. To list something you are learning, edit `learningNow`.

## Contact form

The form works in two modes:

1. **With Formspree (recommended):** create a free form at [formspree.io](https://formspree.io),
   copy `.env.example` to `.env`, and set `VITE_FORMSPREE_ID` to your form ID.
   On Vercel, add the same variable in *Project Settings → Environment Variables*.
2. **Without it:** the form opens the visitor's email app with the message pre-filled.

## Before you deploy

In `index.html`, replace `https://your-portfolio.vercel.app` (Open Graph / Twitter tags)
with your real site URL so link previews show the image in `public/og-image.png`.

## Accessibility & performance

- Respects `prefers-reduced-motion`
- Images are served as WebP
- GSAP is split into its own chunk
