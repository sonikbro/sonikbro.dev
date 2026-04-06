# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start dev server with Turbopack (http://localhost:3000)
- `npm run build` - Production build with Turbopack
- `npm run lint` - Run ESLint (flat config, next/core-web-vitals + next/typescript)

No test framework is configured.

## Architecture

Next.js 15 App Router personal blog/portfolio site (sonikbro.dev), deployed on Vercel. Uses React 19, TypeScript, SCSS modules, and Pico CSS as the base styling framework.

### Content System

Markdown files in `content/` are the content source (not a CMS or database). Each content type has its own subdirectory (`content/posts/`, `content/contacts/`). Files use gray-matter frontmatter for metadata (title, date, description, type).

The content pipeline:
- `src/types/content.ts` - `ContentType` enum (`POST`, `CONTACTS`) and interfaces (`ContentItem`, `ContentMetadata`)
- `src/utils/content.ts` - Generic content reader: reads markdown from `content/` directory, parses frontmatter with gray-matter, calculates read time
- `src/api/posts.ts` / `src/api/contacts.ts` - Type-specific wrappers around the generic content utils
- `src/components/MarkdownView/` - Renders markdown content via react-markdown

To add a new content type: add enum value to `ContentType`, add config to `CONTENT_CONFIGS` in `src/utils/content.ts`, create a directory in `content/`, and add an API wrapper in `src/api/`.

### Path Aliases

Defined in `tsconfig.json`:
- `@api/*`, `@app/*`, `@components/*`, `@styles/*`, `@utils/*`, `@type/*` all map to `src/` subdirectories

### Styling

Pico CSS configured via SCSS (`src/styles/globals.scss`) with pumpkin theme color, semantic containers enabled, and custom breakpoints. Component-level styles use SCSS modules (`.module.scss`). CSS custom properties are prefixed with `--dev-`.

### Theming

Dark/light mode via `next-themes` (`ThemeProvider` + `ThemeToggle` components).
