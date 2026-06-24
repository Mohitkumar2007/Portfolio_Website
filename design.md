# Mohit Portfolio - Design Specification

## Product intent

A cinematic, single-page portfolio for an AI and data science developer. The public experience foregrounds project credibility, technical range, and direct contact routes. A separate local CMS manages dynamic content.

## Information architecture

The public site is an anchor-based experience:

1. Fixed navigation
2. Hero
3. Selected work
4. Core Strengths
5. Skills
6. About and timeline
7. Contact CTA
8. Footer

The CMS is a separate application with Dashboard, Projects, Skills, About, and Contact sections.

## Visual language

- Background: deep navy `#07111f` with fixed, blurred blue and violet light fields.
- Primary text: pale blue-white `#edf5ff`.
- Accent: sky blue (`#96ceff` / `#a8d8ff`) for calls to action, links, and focus states.
- Surfaces: translucent blue-black panels with subtle blue borders.
- CMS sidebar: slate `#1e293b`; CMS workspace: white / slate-50.
- Style: technical, restrained, high contrast, and editorial rather than ornamental.

## Typography

- Display and UI: **Manrope**.
- Technical labels, dates, and tags: **DM Mono**.
- Hero emphasis: Georgia serif italic.
- Large headings use tight tracking; supporting copy uses generous line height.

## Navigation

The header is fixed at the top of the viewport with a translucent, blurred background. It uses **Mohit Kumar A** as the primary visual anchor and links to Projects, Skills, About, and Contact.

- Desktop navigation shows the section links inline.
- At widths below 768px, inline links are replaced by a labeled icon-only menu control.
- The expanded mobile menu appears directly beneath the header and closes after a section is selected.
- Main content includes top offset spacing so it is not obscured by the fixed header.

## Public components

### CinematicCanvas

A fixed background layer composed of a navy base and blurred blue/violet radial light fields. It is decorative only and remains behind the application.

### Hero

The opening section communicates the current positioning with a staggered fade/slide reveal:

- `B.E. Data Science · Bengaluru`
- Availability pill: `Open to Internships · AI / Data Science / Full Stack`
- Heading: `Building AI Products with Data, Design & Code`
- Supporting copy focused on machine learning, full-stack, and analytics work
- Primary action: scroll to projects
- Secondary action: open the Supabase-provided resume link in a new tab

On smaller screens, hero content is centered and both actions become full-width controls.

### Selected work

Projects are displayed in a responsive bento grid:

- The first project spans both desktop columns and uses a wide media ratio.
- Remaining projects use balanced cards.
- Cards can show an image, project order, inferred category badge, description, stack tags, GitHub link, and live demo link.
- Cards lift on hover, gain a brighter border and shadow, and scale their media slightly.
- Images use fixed aspect ratios, `object-fit: cover`, descriptive alt text, and lazy loading.
- Content comes from Supabase `projects`.

Project images belong in `portfolio/public/images/` and are referenced as `/images/<file-name>`.

### Core Strengths

A static four-item summary before the dynamic skills list:

- AI / ML
- Full Stack
- Database
- Tools

Each strength is a compact framed panel with an icon, title, and supporting text. The desktop layout has four columns, tablet has two, and mobile has one.

### Skills

Skills are grouped by category and rendered as technical chips. Content comes from Supabase `skills`.

The desktop layout uses three groups across. On mobile, each group is placed in its own subtle surface for clearer scanning.

### About and timeline

Desktop uses a two-column layout:

- Left: personal introduction and Supabase-provided biography.
- Right: a framed vertical timeline with year badges, title, description, blue markers, and connecting lines.

Timeline content comes from Supabase `about`. On smaller screens, the columns stack.

### Contact CTA

A centered framed call to action for internships, projects, and collaboration:

- Email uses a `mailto:` action.
- LinkedIn, GitHub, and resume destinations open in new tabs.
- All destinations come from Supabase `contact`.
- Actions stack as full-width controls on mobile.

## CMS interaction design

- Persistent 240px dark sidebar on desktop.
- Clear active navigation state.
- White content workspace with simple cards and tables.
- Project editing uses a right-side drawer.
- Destructive project deletion requires confirmation.
- Contact save displays a temporary success message.

## Motion, accessibility, and performance

- Hero and section content use lightweight Framer Motion reveals.
- Motion is suppressed when `prefers-reduced-motion` is enabled.
- Hover movement is disabled for reduced-motion users.
- Keyboard focus uses a visible sky-blue outline.
- Buttons and links have explicit hover and focus states.
- Mobile controls maintain comfortable tap targets, generally at least 44px high.
- Background blur is reduced or hidden on smaller and reduced-motion views.

## Responsive behavior

- Desktop: fixed 92px header, wide hero typography, two-column bento grid, four Core Strength cards, and two-column About layout.
- Tablet: balanced two-column strength grid, reduced content width, and tighter layout gaps.
- Mobile (below 768px): fixed 68px header, hamburger menu, centered hero, single-column projects and skills, stacked About layout, and full-width actions.
- Narrow mobile: reduced typography and spacing while preserving readable line lengths and stable tap targets.

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
