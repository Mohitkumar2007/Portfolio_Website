# Mohit Portfolio — Design Specification

## Product intent

A cinematic, single-page portfolio for an AI and data science developer. The public experience prioritises project credibility, technical range, and a direct route to contact. A separate local CMS manages the dynamic content.

## Information architecture

The public site is a one-page, anchor-based experience:

1. Sticky navigation
2. Hero
3. Selected work (featured bento grid)
4. Core Strengths
5. Skills
6. About and timeline
7. Contact CTA
8. Footer

The CMS is a separate application with Dashboard, Projects, Skills, About, and Contact sections.

## Visual language

- Background: deep navy `#07111f` with fixed blurred blue and violet light fields.
- Primary text: pale blue-white `#edf5ff`.
- Accent: sky blue (`#96ceff` / `#a8d8ff`) for calls to action and links.
- Surface: translucent blue-black panels with low-contrast blue borders.
- CMS sidebar: slate `#1e293b`; CMS content area: white / slate-50.
- Style: technical, restrained, high contrast, and editorial rather than ornamental.

## Typography

- Display and UI: **Manrope**.
- Technical labels, dates, and tags: **DM Mono**.
- Hero emphasis: Georgia serif italic.
- Headings use tight tracking and large scale; supporting copy has generous line height.

## Navigation

The sticky translucent header remains visible while scrolling. It uses the full name **Mohit Kumar A** as the primary visual anchor, plus in-page links to Work, Skills, About, and Contact. The header is intentionally compact on mobile while retaining access to every section.

## Public components

### CinematicCanvas

A fixed background layer made from blurred radial colour fields. It does not contain interactive content and stays behind the application.

### Navbar

Compact top navigation with anchor links to Work, Skills, About, and Contact.

### Hero

Communicates the current positioning with a fade/slide entrance:

- `B.E. Data Science · Bengaluru`
- Availability pill: `Open to Internships · AI / Data Science / Full Stack`
- Heading: `Building AI Products with Data, Design & Code`
- Supporting copy focused on machine learning, full-stack, and analytics work
- Primary action: scroll to projects
- Secondary action: open the Supabase-provided resume link in a new tab

### Projects

Responsive bento grid. The first featured project is a wide, larger card; the remaining projects use balanced smaller cards. Each card can show an image, description, stack tags, inferred category badges, GitHub link, and live demo link. Cards lift, glow subtly, and scale their image on hover. Content comes from Supabase `projects`.

Project images belong in `portfolio/public/images/` and are referenced as `/images/<file-name>`.

### Core Strengths

A compact static summary before the dynamic skills list:

- AI / ML
- Full Stack
- Database
- Tools

### Skills

Skills are grouped by category and rendered as technical chips. Content comes from Supabase `skills`.

### About and timeline

Two-column desktop layout: a professional personal introduction and biography on the left; a structured vertical timeline on the right. Timeline entries have a year badge, title, description, gradient marker, and connecting line. Content comes from Supabase `about`.

### Contact CTA

An action-focused card for internships, projects, and collaboration. Email uses a `mailto:` action; LinkedIn, GitHub, and résumé links open in a new tab. All contact destinations come from Supabase `contact`.

## CMS interaction design

- Persistent 240px dark sidebar on desktop.
- Clear active navigation state.
- White content workspace with simple cards and tables.
- Project editing uses a right-side drawer.
- Destructive project deletion requires confirmation.
- Contact save displays a temporary success message.

## Motion, accessibility, and performance

- Hero and section content use lightweight Framer Motion reveal effects.
- Motion is suppressed when `prefers-reduced-motion` is enabled.
- Project images use lazy loading, descriptive alt text, fixed aspect ratios, and `object-fit: cover`.
- Keyboard focus uses a visible sky-blue outline.
- Interactive controls have hover and focus states with comfortable mobile tap targets.
- Background blur is reduced on small screens.

## Responsive behaviour

- Desktop: wide hero typography, featured bento project card, two-column About layout, and four Core Strength cards.
- Tablet: balanced two-column project and strength grids.
- Mobile: single-column project, Core Strength, and skill layouts; full-width hero actions; compact sticky navigation; reduced background blur.
- All layouts preserve readable line lengths and adequate tap targets.

## Content rules

- `projects.visible` controls public visibility.
- `projects.order_index` controls project order.
- `projects.featured` identifies highlighted work for future presentation changes.
- `about.timeline` is stored as JSON text containing `year`, `title`, and `description`.
- Do not use placeholder contact links or image paths in a production deployment.

## Security boundary

The public app uses an anonymous Supabase client for read-only data. The current CMS is intended for local/private use only. A service-role key must not be exposed in a publicly deployed browser application; move writes to a server-side API or Supabase Edge Function before public deployment.

## Local sharing via ngrok

The portfolio dev server allows the current ngrok hostname `breathable-felicita-godly.ngrok-free.dev` and listens on all local interfaces. Use ngrok only for the public portfolio port (`5173`); do not expose the private CMS port (`5174`).
