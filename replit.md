# St. Pat's Scout Troop 168 Chili Cook-Off Event Website

## Overview

This is a community event landing page for St. Pat's Scout Troop 168's annual Chili Cook-Off fundraiser. The application serves as an informational website and ticket purchasing platform for a local charity event scheduled for January 31, 2026. The event supports both the scout troop's activities and the La Crosse Warming Shelter through Catholic Charities.

The website provides event details, competition information, and integrates with Google Forms for ticket registration and competitor sign-ups.

## Recent Changes (October 2024)

- Added Troop 168 official logo to header and Why Join section
- Implemented countdown timer in header (shows on medium+ screens) counting down to January 31, 2026 at 4:30 PM CT with UTC timezone handling
- Simplified ticket purchase flow to use Google Form (Stripe integration deferred for future implementation)
- Updated all dates to January 31, 2026 (Saturday)
- Corrected event day from Friday to Saturday
- Corrected competitor registration deadline to November 15, 2025
- Streamlined contact section to show competitor registration deadline with Google Form link
- Removed personal contact information per user request
- Set ticket price to $10 per person
- Added donation section with three preset amounts ($50, $100, $200) and custom donation option featuring flame icons in scout branding colors
- Implemented promo code tracking system for both donations and ticket purchases to track scout affiliations

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool and development server.

**UI Component Library**: Shadcn/ui (New York style variant) built on Radix UI primitives, providing accessible, customizable components with Tailwind CSS styling.

**Routing**: Wouter for lightweight client-side routing (currently single-page application with home route and 404 fallback).

**State Management**: TanStack Query (React Query) for server state management with custom query client configuration. No complex global state needed for this event landing page.

**Styling Approach**: 
- Tailwind CSS with custom design system based on scout branding (green, cream, red color palette)
- Custom HSL color variables defined for theming
- Component-scoped styles using Tailwind utility classes
- Light-mode only design optimized for community event pages

**Design System**:
- Primary colors: Scout Green (155 65% 20%), Cream/Beige (40 45% 92%), Deep Forest (155 70% 15%)
- Accent colors: Chili Red (0 75% 50%), Warm Gold (45 80% 55%)
- Typography: Google Fonts - Oswald/Bebas Neue for headlines, Open Sans/Lato for body text
- Spacing follows Tailwind's standard scale (4, 6, 8, 12, 16, 20 units)

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**API Pattern**: RESTful API design with routes prefixed under `/api` (routes currently minimal as the site primarily links to external Google Forms).

**Session Management**: Currently configured with `connect-pg-simple` for PostgreSQL-backed sessions (infrastructure in place but not actively used for this simple landing page).

**Development Setup**: 
- Vite middleware integration for HMR during development
- Production build creates static assets served by Express
- Custom logging middleware for API request tracking

### Data Storage

**Database**: PostgreSQL via Neon serverless platform (@neondatabase/serverless).

**ORM**: Drizzle ORM for type-safe database queries with schema-first approach.

**Database Schema**:
- `users` table: Basic user authentication structure (id, username, password) - infrastructure in place but not currently used
- `tickets` table: Ticket purchase records with buyer information (email, name, quantity, amount, affiliate group, Stripe session ID, status, created timestamp)

**Migration Strategy**: Drizzle Kit for schema migrations stored in `/migrations` directory.

**Storage Interface**: 
- Abstract `IStorage` interface defines CRUD operations
- `MemStorage` class provides in-memory storage implementation (currently used)
- Designed to be swappable with database-backed implementation when needed

### External Dependencies

**Payment Processing**: Stripe integration (@stripe/stripe-js, @stripe/react-stripe-js) configured but not actively implemented - ticket sales currently handled via external Google Forms.

**Form Handling**: React Hook Form with Zod validation (@hookform/resolvers) for type-safe form validation.

**External Services**:
- Google Forms: Primary registration and ticket purchasing interface (links to `https://forms.gle/QghAykWBEzkyAPpH9`)
- Google Fonts: Oswald and Open Sans font families loaded from CDN

**Build and Development Tools**:
- esbuild: Production server bundling
- tsx: TypeScript execution for development server
- Replit-specific plugins: Cartographer, dev banner, runtime error modal (development only)

**Key Architectural Decisions**:

1. **Static Landing Page Approach**: Despite having database infrastructure, the current implementation prioritizes simplicity by using external Google Forms for registrations, reducing backend complexity for a single-event website.

2. **Shadcn/ui Component System**: Chosen for accessible, customizable components that can be easily themed to match scout branding while maintaining modern UI patterns.

3. **Future Stripe Integration**: Payment processing infrastructure is prepared but not active, allowing for future migration from Google Forms to native checkout if needed.

4. **Serverless Database**: Neon PostgreSQL provides scalable, low-maintenance database with WebSocket support for efficient connections.

5. **Component Organization**: Landing page divided into semantic section components (Header, Hero, Prizes, Requirements, Tickets, Contact, Footer) for maintainability and potential reuse.