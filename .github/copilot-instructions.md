# Copilot Instructions

## Project
- This is a React 19, TypeScript, and Vite website for the Church of Saint Barnabas in Kyiv.
- The UI copy is Ukrainian. Preserve the existing language and factual church details when changing content.
- The site uses Tailwind CSS 4 through `@import "tailwindcss"` in `src/index.css`, plus Lucide icons and Motion where already used.
- Sanity is the CMS. Data types live in `src/types/sanity.ts`, client setup in `src/sanity/client.ts`, and GROQ queries/data loading in `src/sanity/queries.ts`. Keep local demo content working when Sanity is not configured.

## Code Changes
- Keep changes focused and follow nearby React/TypeScript patterns. Prefer typed props and existing data models over introducing duplicate structures.
- Reuse the existing components, utilities, and dependencies before adding abstractions or packages.
- Preserve the established Byzantine-inspired visual language: Cormorant Garamond and Manrope, mosaic blues, parchment, cream, and muted gold. Prefer existing Tailwind utilities and CSS variables in `src/index.css`.
- Keep responsive behavior and semantic, accessible markup intact. Use Lucide icons for interface icons when appropriate.
- Do not put secrets in source files. Follow `.env.example` and keep local environment values out of commits.

## Validation
- Run `npm run lint` for the TypeScript check.
- Run `npm run build` to verify the production build.
- Start the local site with `npm run dev` (Vite serves on port 3000).
- There is no test script currently defined in `package.json`; do not claim tests were run unless a test runner is added and used.
