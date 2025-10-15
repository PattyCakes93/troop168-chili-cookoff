# St. Pat's Scout Troop 168 Chili Cook-Off - Design Guidelines

## Design Approach
**Selected Approach:** Custom Community Event Design with Material Design form components
- **Rationale:** This is a local community fundraiser with strong brand colors (scout green, cream, red) requiring a warm, approachable aesthetic that builds trust and excitement
- **Key Principles:** Community warmth, scout heritage, charitable impact, easy ticket purchasing

## Core Design Elements

### A. Color Palette

**Primary Colors:**
- Scout Green: 155 65% 20% (main brand - headers, CTAs, accents)
- Cream/Beige: 40 45% 92% (backgrounds, text on dark)
- Deep Forest: 155 70% 15% (darker green for depth)

**Accent Colors:**
- Chili Red: 0 75% 50% (sparingly for urgency, sold by indicators)
- Warm Gold: 45 80% 55% (trophy icons, achievement highlights)

**Neutrals:**
- Charcoal: 0 0% 20% (body text)
- Soft Gray: 0 0% 95% (section backgrounds)

**Dark Mode:** Not required - event landing pages work best in light mode with high contrast

### B. Typography

**Font Families:**
- Headlines: 'Bebas Neue' or 'Oswald' (bold, energetic, scout-camp feel) - Google Fonts
- Body: 'Open Sans' or 'Lato' (clean, readable) - Google Fonts
- Accents: 'Permanent Marker' for hand-drawn chili/scout elements (optional decorative)

**Scale:**
- Hero Headline: text-5xl md:text-7xl font-bold
- Section Headers: text-3xl md:text-4xl font-bold
- Subheaders: text-xl md:text-2xl font-semibold
- Body: text-base md:text-lg
- Small Print: text-sm

### C. Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20
- Component padding: p-6 md:p-8
- Section spacing: py-16 md:py-24
- Element gaps: gap-6 md:gap-8
- Container max-width: max-w-7xl

**Grid System:**
- Hero: Full-width with centered content
- Event Details: 2-column on desktop (md:grid-cols-2)
- Prizes: 3-column cards (grid-cols-1 md:grid-cols-3)
- Ticket Selection: Single column form with affiliate dropdown

### D. Component Library

**Navigation:** 
- Sticky header with scout troop logo, event date countdown, "Buy Tickets" CTA
- Background: Scout green with cream text
- Height: h-20

**Hero Section (80vh):**
- Background: Diagonal split - scout green left 60%, cream right 40%
- Large hero image: Steaming chili in cast iron pot with scout neckerchief visible
- Overlay headline: "Turn Up The Heat" in cream text
- Event date/location in gold badge
- Primary CTA: "Get Your Tickets" (chili red button)

**Event Details Cards:**
- White cards with subtle shadow (shadow-lg)
- Icons: Heroicons (calendar, clock, map-pin, trophy)
- Rounded corners: rounded-xl
- Border: 2px scout green border on hover

**Prize Categories:**
- Badge-style cards with gold borders
- Trophy icons from Heroicons
- Cream background with scout green text

**Ticket Purchase Form:**
- Material Design influenced inputs
- Affiliate selector: Prominent dropdown "Who referred you?"
- Stripe checkout integration
- Success state: Green checkmark with confetti animation
- Quantity selector with visual +/- buttons

**Why Participate Section:**
- Checklist style with chili pepper bullets (• replaced with 🌶️ emoji or red dots)
- Two-column: Benefits left, Impact right
- Background: Soft gray with scout green accents

**Contact/Register CTA:**
- Full-width section with scout green background
- White text with phone and email prominently displayed
- Secondary action: "Questions? Contact Patrick"

**Footer:**
- Scout green background
- Cream text with social links
- Scout troop info, Catholic Charities partnership badge
- Copyright and event year

### E. Images

**Hero Image:** 
- Large, appetizing chili photograph (cast iron pot, steam rising, warm lighting)
- Positioned right 40% of hero section
- Aspect ratio: 3:4 portrait orientation

**Section Backgrounds:**
- Subtle chili pepper pattern watermark (10% opacity) on cream sections
- Scout fleur-de-lis subtle watermark on green sections

**Icon Strategy:**
- Heroicons for functional elements (calendar, location, trophy)
- Custom chili pepper SVG for decorative bullets
- Scout badge/patch graphics as trust indicators

### F. Interaction Patterns

**Buttons:**
- Primary: Chili red with white text, rounded-lg, shadow-md
- Secondary: Scout green outline with green text
- Hover: Lift effect (translate-y-1) with increased shadow

**Cards:**
- Hover: Subtle lift and border color change
- Click: Gentle scale animation (scale-95)

**Form Inputs:**
- Focus: Scout green border with subtle glow
- Error: Chili red border with shake animation
- Success: Green checkmark with slide-in

**Affiliate Tracking:**
- Dropdown: Large, friendly selector
- Visual confirmation: Selected group shows in colored badge
- Thank you message: "Your purchase supports [Group Name]!"

### G. Responsive Behavior

**Mobile (< 768px):**
- Single column layouts
- Hero: Stacked text over image
- Reduced padding: py-12
- Larger touch targets: min-h-12 for buttons

**Desktop (≥ 768px):**
- Multi-column grids
- Side-by-side hero layout
- Generous spacing: py-20

**Critical:** Never force content into single viewport - let sections breathe with natural heights

---

## Key Visual Moments

1. **Hero Impact:** Diagonal color split with mouth-watering chili image creates immediate warmth
2. **Affiliate Pride:** Prominent group selector with visual confirmation builds community ownership
3. **Charity Connection:** Warming shelter donation callout in dedicated badge/banner
4. **Scout Heritage:** Subtle troop branding without overwhelming the community message
5. **Urgency:** January 31 countdown timer in header drives registration

**Overall Tone:** Warm, community-focused, appetizing, trustworthy, with scout values of service and leadership subtly woven throughout