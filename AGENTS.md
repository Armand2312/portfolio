<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
# Portfolio Project Instructions

## Tech Stack
- Next.js App Router
- React with JavaScript
- Tailwind CSS
- Lucide React for icons

## Architecture
- Prefer Server Components unless client-side interactivity is required.
- Keep components reusable and easy to understand.
- Store portfolio content in local JavaScript data files.
- Do not introduce databases, authentication, or unnecessary dependencies.

## Design
- Follow the approved desktop and mobile portfolio mockups.
- Use a dark navy palette with restrained electric-blue accents.
- Use elegant serif headings and clean sans-serif body text.
- Keep animations subtle, accessible, and performant.
- Ensure the layout works on mobile, tablet, and desktop.

## Quality
- Use semantic HTML and accessible interactive elements.
- Avoid unnecessary abstractions or premature optimizations.
- Run lint and build checks after significant changes.
- Explain important changes and architectural decisions.