# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a French taxi service website for "Taxi Les Sables d'Olonne" built with Nuxt 3. The site provides information about taxi services, medical transport, airport/train station transfers, pricing, and includes a contact form with email functionality.

## Development Commands

**Start development server:**

```bash
npm run dev
# or
pnpm dev
```

**Build for production:**

```bash
npm run build
# or
pnpm build
```

**Preview production build:**

```bash
npm run preview
# or
pnpm preview
```

**Generate static site:**

```bash
npm run generate
# or
pnpm generate
```

## Architecture & Tech Stack

- **Framework:** Nuxt 3 with SSR enabled
- **Styling:** Tailwind CSS with custom taxi-themed colors
- **Icons:** Heroicons Vue
- **Email:** Server-side with Nodemailer (Gmail SMTP)
- **SEO:** @nuxtjs/seo module with comprehensive Schema.org markup
- **Images:** @nuxt/image for optimization
- **Fonts:** Google Fonts (Inter, Poppins)

## Key Configuration

**Environment Variables Required:**

- `NUXT_EMAIL_SMTP_HOST` - Gmail SMTP host
- `NUXT_EMAIL_SMTP_PORT` - SMTP port
- `NUXT_EMAIL_SMTP_USER` - Gmail address
- `NUXT_EMAIL_SMTP_PASSWORD` - Gmail app password
- `NUXT_PUBLIC_EMAIL_SENDER` - Public sender email
- `EMAIL_RECIPIENT` - Email recipient for contact form

**Color Palette:**

- Primary blue: `#2563eb` (primary-600)
- Taxi yellow: `#f59e0b` (taxi-yellow)
- Custom Tailwind color scales defined in `tailwind.config.js`

## Core Features

**Pages:**

- `/` - Homepage with hero section and service overview
- `/services` - Main services page
- `/transport-medical` - Medical transport (CPAM conventional)
- `/navette-aeroport-gare` - Airport/train station shuttles
- `/tarifs` - Pricing information
- `/contact` - Contact form with email integration
- Legal pages: `/confidentialite`, `/mentions-legales`

**Components:**

- `Header.vue` - Responsive navigation with mobile menu and phone CTA
- `Footer.vue` - Site footer
- Email contact form with server-side processing

**Email System:**

- Server API endpoint: `/server/api/send-email.ts`
- Uses Nodemailer with Gmail SMTP
- HTML email templates with French formatting
- Form validation and error handling

## SEO Configuration

The site has comprehensive SEO setup:

- Schema.org organization markup
- French locale configuration
- Automatic sitemap and robots.txt generation
- Link checker enabled
- Site URL: `https://www.taxi-les-sables-olonne.fr`

## Development Guidelines

**Code Style:**

- Use French for user-facing content and comments
- Follow Vue 3 Composition API patterns
- Use Tailwind utility classes
- Implement responsive design (mobile-first)
- Include proper accessibility attributes (aria-labels, etc.)

**Navigation Structure:**

- Main navigation defined in `Header.vue` component
- Services have dropdown submenu with descriptions
- Mobile-responsive hamburger menu
- Phone number CTA prominently displayed

**Email Documentation:**
See `docs/EMAILJS_SETUP.md` for alternative EmailJS setup instructions (though current implementation uses server-side Nodemailer).

## Local Business Context

This is a taxi service website for Les Sables d'Olonne, France specializing in:

- Local taxi services
- Medical transport (CPAM conventional)
- Airport/train station transfers
- Long-distance transport

Phone number: 06 68 31 46 90
Service area: Les Sables d'Olonne and Vendée region
