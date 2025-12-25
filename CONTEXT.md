# FORRO Landing Page - Context File

## Project Overview

**Project Name:** ForroVivo Landing Page  
**Company Structure:** 
  - **Umbrella Company:** Livlu Technologies Ltd
  - **Product Brand:** ForroVivo (standalone product brand under Livlu Technologies Ltd)
**Type:** React + TypeScript Landing Page  
**Framework:** Vite + React 18  
**Build Tool:** Vite 6.3.5  
**Language:** TypeScript  
**Styling:** Tailwind CSS + shadcn/ui components

## Project Structure

```
/Users/dev/Developer/FORRO Landing Page/
├── src/
│   ├── App.tsx                    # Main application component with routing
│   ├── main.tsx                   # Application entry point
│   ├── index.css                  # Global styles
│   ├── translations.ts            # Internationalization (EN/PT)
│   ├── components/
│   │   ├── ForroHeader.tsx        # Main header with navigation
│   │   ├── ForroHeroSection.tsx   # Hero section with main CTA
│   │   ├── ForroFeaturesSection.tsx # Features showcase
│   │   ├── ForroAITutorSection.tsx  # AI Tutor "Nón Sabi" section
│   │   ├── ForroMissionSection.tsx  # Mission and why section
│   │   ├── ForroCTASection.tsx      # Call-to-action section
│   │   ├── ForroFooter.tsx          # Footer with links
│   │   ├── PrivacyPage.tsx          # Privacy Policy page
│   │   ├── TermsPage.tsx            # Terms of Service page
│   │   ├── ContactPage.tsx          # Contact page
│   │   ├── LearnMorePage.tsx        # About Forro languages page
│   │   └── ui/                      # shadcn/ui component library
│   └── styles/
│       └── globals.css              # Global CSS variables
├── ICON/                            # Static assets (icon.png)
├── LEGAL/                           # Legal documents
│   ├── PRIVACY_POLICY.md
│   ├── TERMS_OF_SERVICE.md
│   ├── DATA_RETENTION_POLICY.md
│   └── YOUR_DATA_RIGHTS.md
├── vite.config.ts                   # Vite configuration
├── package.json                     # Dependencies and scripts
└── index.html                       # HTML entry point
```

## Technology Stack

### Core
- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Vite 6.3.5** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### UI Components
- **shadcn/ui** - Component library (Radix UI primitives)
- **Lucide React** - Icon library (no emojis, icons only)
- **Radix UI** - Headless UI primitives

### Key Dependencies
- `@vitejs/plugin-react-swc` - Fast React compiler
- `lucide-react` - Icon library
- `tailwind-merge` - Tailwind class merging utility
- `class-variance-authority` - Component variant management

## Application Architecture

### Routing System
The app uses client-side routing with React state management:

```typescript
const [currentPage, setCurrentPage] = useState('home');
```

**Available Routes:**
- `'home'` - Main landing page
- `'learn-more'` - About Forro languages page
- `'privacy'` - Privacy Policy page
- `'terms'` - Terms of Service page
- `'contact'` - Contact page

**Navigation Handler:**
```typescript
const handleNavigate = (page: string) => {
  setCurrentPage(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
```

### Internationalization (i18n)

**Languages Supported:**
- English (`en`)
- Portuguese (`pt`)

**Translation Structure:**
```typescript
export const translations = {
  en: { /* English translations */ },
  pt: { /* Portuguese translations */ }
}
```

**Language Switcher:**
- Located in `ForroHeader`
- Toggles between EN/PT
- All content updates dynamically

## Component Details

### Active Components (ForroVivo)

1. **ForroHeader**
   - Sticky navigation header
   - Logo (uses `/ICON/icon.png`)
   - Language switcher (EN/PT)
   - "Download App" button
   - Responsive design

2. **ForroHeroSection**
   - Main hero section with title and CTA
   - Three feature cards with icons:
     - Dictionary (BookOpen icon)
     - Culture (Music icon)
     - Nón Sabi AI Tutor (Bot icon)
   - Background gradients and animations

3. **ForroFeaturesSection**
   - Grid of features with icons
   - Features: Dictionary, Lessons, AI Tutor, Culture, Gamification, Community

4. **ForroAITutorSection**
   - Showcases "Nón Sabi" AI assistant
   - Four feature cards:
     - Cultural Knowledge
     - Real-Time Information
     - Multiple Languages
     - Authentic Sources
   - Background gradient accents

5. **ForroMissionSection**
   - Explains why ForroVivo matters
   - Cultural preservation messaging
   - Globe icon for visual enhancement

6. **ForroCTASection**
   - Download app call-to-action
   - iOS and Android download buttons
   - "Free forever" messaging

7. **ForroFooter**
   - Brand logo (icon.png)
   - Social media links (Facebook, Instagram, Twitter, Mail)
   - Navigation links (Learn More, Privacy, Terms, Contact)
   - Copyright notice
   - Globe icon with tagline

### Legal Pages

8. **PrivacyPage**
   - Comprehensive privacy policy
   - Sections:
     - Introduction
     - Information We Collect
     - How We Use Your Information
     - Data Sharing
     - Your Rights
     - Data Security
     - Data Retention
     - Children's Privacy
     - International Data Transfers
     - Changes to This Policy
     - Contact Us
   - GDPR/CCPA compliant content

9. **TermsPage**
   - Terms of Service
   - Sections:
     - Agreement to Terms
     - Description of Service
     - Use of Service
     - User Accounts
     - Intellectual Property
     - User-Generated Content
     - Subscriptions and Payments
     - User Conduct
     - AI-Powered Features
     - Disclaimer of Warranties
     - Limitation of Liability
     - Dispute Resolution
     - Changes to Terms
     - Contact

10. **ContactPage**
    - Contact form and information
    - Email addresses for different inquiries
    - Community links

11. **LearnMorePage**
    - Educational content about Forro languages
    - Simple "What is Forro?" section
    - Language family information
    - Cultural context

### Unused/Legacy Components

These components exist but are NOT used in the current ForroVivo site:
- `HeroSection.tsx` - Legacy hero component
- `Header.tsx` - Legacy header component
- `Footer.tsx` - Legacy footer component
- `FeaturesSection.tsx` - Legacy features component
- `PricingSection.tsx` - Legacy pricing component
- `TestimonialsSection.tsx` - Legacy testimonials component

## Design System

### Color Palette

**Brand Colors:**
- Green: `#12AD2B` (Primary - cultural preservation)
- Yellow: `#FFCE00` (Secondary - culture/vibrancy)
- Red: `#D21034` (Accent - passion/energy)

**Neutral Colors:**
- Background: `#fefefe` / `white`
- Text: `stone-900` (dark text)
- Muted: `stone-600` / `stone-500`
- Borders: `stone-200`

### Typography

- Headings: Large, bold, tracking-tight
- Body: Regular weight, leading-relaxed
- Font stack: System fonts (Tailwind defaults)

### Design Principles

1. **No Emojis** - All icons use Lucide React icons
2. **Clean & Simple** - Minimalist design approach
3. **Cultural Respect** - Authentic representation of São Tomé and Príncipe
4. **Accessibility** - Semantic HTML, proper contrast
5. **Responsive** - Mobile-first design

## Static Assets

### Icon System

**Location:** `/ICON/icon.png`

**Custom Vite Plugin:**
- Serves `/ICON` folder in development
- Copies to `build/ICON` in production
- Security checks prevent path traversal
- Used for favicon and brand logo

**Implementation:**
- Favicon: `<link rel="icon" href="/ICON/icon.png">`
- Apple Touch Icon: `<link rel="apple-touch-icon" href="/ICON/icon.png">`
- Header logo: `<img src="/ICON/icon.png">`
- Footer logo: `<img src="/ICON/icon.png">`

## Build Configuration

### Vite Config

**Port:** 3000  
**Build Output:** `build/`  
**Entry Point:** `index.html`

**Custom Plugin:**
- `iconPlugin()` - Handles ICON folder serving and copying

**Aliases:**
- `@/` → `./src/`

### Build Commands

```bash
npm run dev    # Start development server (port 3000)
npm run build  # Build for production
```

## Key Features

### Company Structure
- **Livlu Technologies Ltd** - Umbrella company (parent company)
- **ForroVivo** - Standalone product brand under Livlu Technologies Ltd
- Copyright: "© 2025 Livlu Technologies Ltd. All rights reserved. ForroVivo is a product of Livlu Technologies Ltd."

**Company Registration Details:**
- **Company Number:** 16799761
- **Incorporation Date:** 21st October 2025
- **Company Type:** Private company limited by shares
- **Registered Office:** 
- **Jurisdiction:** England and Wales
- **Registered in:** Companies House, Cardiff
- **Director:** HENRIQUES PONTES
- **Share Capital:** 100 ordinary shares @ £1 each = £100 total

### Cultural Focus
- Dedicated to Forro languages of São Tomé and Príncipe
- Cultural preservation mission
- Authentic content and sources

### AI Integration
- "Nón Sabi" AI tutor section
- Cultural AI assistant features
- Multi-language support (Forro, Portuguese, English)

### Legal Compliance
- Comprehensive Privacy Policy
- Terms of Service
- GDPR/CCPA compliant
- Data rights information

### Internationalization
- Full English and Portuguese support
- Language switcher in header
- All content translated

## Content Strategy

### Messaging Themes
1. **Cultural Preservation** - Main mission
2. **Endangered Languages** - Urgency and importance
3. **Free Access** - No barriers to learning
4. **Authenticity** - Real cultural content
5. **Community** - Global learner network

### Content Guidelines
- No specific numbers that become outdated
- Professional, evergreen language
- Respectful cultural representation
- Clear, accessible language

## Development Guidelines

### Component Structure
- Functional components with TypeScript
- Props interface definitions
- Translation prop: `t: any` (from translations object)
- Navigation prop: `onNavigate: (page: string) => void`

### Styling Approach
- Tailwind utility classes
- Consistent spacing and colors
- Responsive breakpoints (md:, lg:)
- Animation classes (animate-fade-in, animate-fade-in-up)

### Icon Usage
- **Always use Lucide React icons** - No emojis
- Import from `lucide-react`
- Consistent sizing (h-4 w-4, h-5 w-5, h-16 w-16)
- Color coding with brand colors

## Legal Documents

Located in `/LEGAL/`:
- `PRIVACY_POLICY.md` - Full privacy policy
- `TERMS_OF_SERVICE.md` - Complete terms
- `DATA_RETENTION_POLICY.md` - Data retention details
- `YOUR_DATA_RIGHTS.md` - User rights information
- `LEGAL_COMPLIANCE_SUMMARY.md` - Compliance overview

These documents are integrated into the Privacy and Terms pages.

## Navigation Flow

```
Home Page
├── Hero Section → CTA buttons
├── Features Section
├── AI Tutor Section
├── Mission Section
└── CTA Section

Footer Links:
├── Learn More → LearnMorePage
├── Privacy → PrivacyPage
├── Terms → TermsPage
└── Contact → ContactPage

Header:
├── Logo → Home
└── Download App → (External)
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ features
- CSS Grid and Flexbox
- CSS animations

## Performance Considerations

- Vite fast refresh in development
- Production build optimized
- Static asset optimization
- Lazy loading ready (if needed)

## Contact Information

### Registered Office Address

**LIVLU TECHNOLOGIES LTD**

**Company Registration:**
- Company Number: 16799761
- Incorporated: 21st October 2025
- Registered in: England and Wales
- Companies House, Cardiff

### Email Addresses

**General/Public:**
- `hello@forrovivo.com` - General inquiries (shown in footer and contact page)

**Legal & Privacy:**
- `privacy@forrovivo.com` - Privacy questions (48 hour response)
- `legal@forrovivo.com` - Legal inquiries and Terms questions (5 business days)
- `dpo@forrovivo.com` - Data Protection Officer for GDPR requests (5 business days)

**Support & Operations:**
- `support@forrovivo.com` - Customer support (24-48 hour response)
- `billing@forrovivo.com` - Billing and payment questions

**Security:**
- `security@forrovivo.com` - Security issues, vulnerabilities, breaches (24 hour response)

### Contact Locations in Code
- Footer: `hello@forrovivo.com` (mail link)
- Contact Page: General contact information
- Privacy Page: Privacy, DPO, and Security emails
- Terms Page: Legal, Support, and Billing emails

## Translation System

### Translation Key Structure

The `translations.ts` file exports a single object with language keys:

```typescript
export const translations = {
  en: { /* all English keys */ },
  pt: { /* all Portuguese keys */ }
}
```

### Translation Key Naming Convention

**Pattern:** `[section][element][description]`

Examples:
- `heroTitle` - Hero section title
- `privacyIntroTitle` - Privacy page introduction title
- `termsContactEmail` - Terms page contact email
- `footerTagline` - Footer tagline text

### Translation Categories

1. **Header** - Navigation and header content
2. **Hero Section** - Main hero section content
3. **Features Section** - Feature descriptions
4. **AI Tutor Section** - Nón Sabi AI assistant content
5. **Mission Section** - Mission and why content
6. **CTA Section** - Call-to-action content
7. **Footer** - Footer links and copyright
8. **Privacy Page** - All privacy policy sections
9. **Terms Page** - All terms of service sections
10. **Contact Page** - Contact form and information
11. **Learn More Page** - Educational content about Forro languages

### Using Translations

```typescript
// In component
interface ComponentProps {
  t: any; // Translation object
}

export function Component({ t }: ComponentProps) {
  return <h1>{t.heroTitle}</h1>;
}

// In App.tsx
const t = translations[language]; // 'en' or 'pt'
<Component t={t} />
```

## Component Patterns

### Standard Component Structure

```typescript
// 1. Import statements
import { Icon } from "lucide-react";

// 2. Props interface
interface ComponentNameProps {
  t: any;
  onNavigate?: (page: string) => void;
  // other props
}

// 3. Component function
export function ComponentName({ t, onNavigate }: ComponentNameProps) {
  return (
    <section className="py-24 bg-white">
      {/* Content */}
    </section>
  );
}
```

### Common Props Patterns

- `t: any` - Translation object (required for all content components)
- `onNavigate: (page: string) => void` - Navigation handler (for interactive components)
- `language: Language` - Current language ('en' | 'pt') (header only)
- `onLanguageChange: (lang: Language) => void` - Language switcher handler (header only)

### Component Styling Patterns

**Container Pattern:**
```typescript
<div className="container mx-auto px-4 max-w-3xl">
  {/* Content */}
</div>
```

**Section Pattern:**
```typescript
<section className="py-24 bg-white">
  <div className="container mx-auto px-4">
    {/* Content */}
  </div>
</section>
```

**Card Pattern:**
```typescript
<div className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8">
  {/* Card content */}
</div>
```

## Animation Patterns

### Fade-In Animations

**Standard fade-in:**
```typescript
<div className="animate-fade-in">
  {/* Content */}
</div>
```

**Fade-in with delay:**
```typescript
<div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
  {/* Content */}
</div>
```

### Animation Delays

Delays are typically incremented by 50-100ms per section:
- First section: `100ms`
- Second section: `200ms`
- Third section: `300ms`
- etc.

### Hover Effects

**Icon hover:**
```typescript
<div className="group-hover:scale-110 transition-transform">
  <Icon className="h-16 w-16" />
</div>
```

**Button hover:**
```typescript
<button className="hover:text-[#12AD2B] transition-colors">
  {/* Button content */}
</button>
```

**Card hover:**
```typescript
<div className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
  {/* Card content */}
</div>
```

## State Management

### Application State

All state is managed using React hooks in `App.tsx`:

```typescript
const [currentPage, setCurrentPage] = useState('home');
const [language, setLanguage] = useState<Language>('en');
```

### State Flow

1. **Current Page State** - Controls which page component renders
   - Updated via `handleNavigate(page: string)`
   - Triggers scroll to top
   - Passed down to components that need navigation

2. **Language State** - Controls translation language
   - Updated via `handleLanguageChange(lang: Language)`
   - Used to select translation object: `translations[language]`
   - Passed down as `t` prop to all components

### No Global State Management

- No Redux, Zustand, or Context API needed
- All state is local to `App.tsx`
- Components receive data via props

## Styling Conventions

### Color Usage

**Brand Colors:**
- Primary actions: `bg-[#12AD2B] hover:bg-[#0f9124]`
- Secondary accents: `text-[#FFCE00]` or `bg-[#FFCE00]/5`
- Accent highlights: `text-[#D21034]`

**Neutral Colors:**
- Background: `bg-white` or `bg-[#fefefe]`
- Text primary: `text-stone-900`
- Text secondary: `text-stone-600`
- Text muted: `text-stone-500`
- Borders: `border-stone-200`
- Light backgrounds: `bg-stone-100`

### Spacing System

- Container padding: `px-4`
- Section padding: `py-24` or `py-20`
- Gap between elements: `gap-8`, `gap-4`, `gap-2`
- Margin bottom: `mb-12`, `mb-8`, `mb-4`

### Typography Scale

- Page titles: `text-5xl` or `text-4xl`
- Section titles: `text-3xl` or `text-2xl`
- Card titles: `text-xl`
- Body text: `text-lg` or `text-base`
- Small text: `text-sm` or `text-xs`

### Responsive Breakpoints

- Mobile: Default (no prefix)
- Tablet: `md:` prefix (768px+)
- Desktop: `lg:` prefix (1024px+)

Common patterns:
```typescript
className="text-3xl md:text-4xl lg:text-5xl"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

## Code Organization

### File Naming

- Components: PascalCase (e.g., `ForroHeader.tsx`)
- Utilities: kebab-case or camelCase (e.g., `utils.ts`, `use-mobile.ts`)
- Pages: PascalCase with "Page" suffix (e.g., `PrivacyPage.tsx`)

### Component Organization

**Active Components (ForroVivo):**
- All start with "Forro" prefix
- Located in `src/components/`
- Exported as named exports

**Legacy Components:**
- No "Forro" prefix
- Not used in current implementation
- Kept for reference

**UI Components:**
- Located in `src/components/ui/`
- shadcn/ui components
- Reusable primitive components

### Import Organization

1. React imports
2. Third-party library imports (lucide-react, etc.)
3. Local component imports
4. Type imports (if separate)

## Known Limitations & Considerations

### Current Limitations

1. **No Backend Integration**
   - Contact form is not functional (UI only)
   - No form submission handling

2. **No Download Links**
   - "Download App" buttons are placeholders
   - No actual App Store/Play Store links

3. **Static Site**
   - No server-side rendering
   - No API calls
   - All content is static

4. **No Analytics**
   - No tracking implementation
   - No user behavior analytics

5. **No SEO Optimization**
   - Basic HTML structure
   - No meta tags optimization
   - No structured data

### Technical Considerations

1. **Icon System**
   - Uses custom Vite plugin for ICON folder
   - Must ensure icon.png exists in ICON folder
   - Plugin handles both dev and production

2. **Translation Completeness**
   - All keys must exist in both EN and PT
   - Missing keys will cause runtime errors
   - Translation keys must match exactly

3. **Browser Compatibility**
   - Uses modern CSS features (backdrop-filter, etc.)
   - May not work in older browsers
   - Tested in modern browsers only

## Development Workflow

### Adding New Components

1. Create component file in `src/components/`
2. Use standard component structure
3. Add translations to `translations.ts` (both EN and PT)
4. Import and use in `App.tsx` or parent component
5. Follow naming conventions and styling patterns

### Adding New Translations

1. Add key to English (`en`) section
2. Add same key to Portuguese (`pt`) section
3. Use descriptive, hierarchical naming
4. Test both languages after changes

### Making Style Changes

1. Use Tailwind utility classes (preferred)
2. Maintain brand color consistency
3. Follow responsive design patterns
4. Test on mobile and desktop

## Testing Considerations

### Manual Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works between pages
- [ ] Language switcher updates all content
- [ ] All links work (email links, navigation)
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Icons display correctly
- [ ] Animations work smoothly
- [ ] No console errors

### Browser Testing

Test in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Build Process

```bash
npm run build
```

**Output:**
- `build/` directory contains all static files
- `build/index.html` - Main HTML file
- `build/assets/` - JavaScript and CSS bundles
- `build/ICON/` - Icon assets (copied by plugin)

### Deployment Considerations

1. **Static Hosting**
   - Can be deployed to any static host
   - Examples: Vercel, Netlify, GitHub Pages, AWS S3

2. **Routing**
   - Uses client-side routing
   - Must configure server for SPA routing
   - All routes should serve `index.html`

3. **Asset Paths**
   - All paths are relative
   - No absolute paths required
   - ICON folder must be accessible

4. **Environment Variables**
   - No environment variables currently used
   - Can be added via `import.meta.env` in Vite

## Future Enhancements (Not Implemented)

### High Priority
- Actual download links (App Store/Play Store)
- Contact form functionality with backend
- SEO meta tags optimization
- Analytics integration (Google Analytics, etc.)

### Medium Priority
- Progressive Web App (PWA) features
- Service worker for offline support
- Performance optimizations (lazy loading, code splitting)
- Enhanced animations and transitions

### Low Priority
- Dark mode support
- Additional language support
- Blog/news section
- User testimonials section
- Newsletter signup
- Social media feed integration

---

## Legal Entity Information

### Company Registration

**LIVLU TECHNOLOGIES LTD**
- **Company Number:** 16799761
- **Incorporation Date:** 21st October 2025
- **Company Type:** Private company limited by shares
- **Registered Office:** 
- **Jurisdiction:** England and Wales
- **Registrar:** Companies House, Cardiff
- **Director:** HENRIQUES PONTES
- **Share Capital:** 100 ordinary shares @ £1 each = £100 total
- **SIC Codes:** 58290, 62012, 63120, 58190

**Note:** Legal documents (Privacy Policy, Terms of Service) currently contain placeholder addresses and should be updated with the registered office address above.

---

**Last Updated:** Based on current codebase analysis  
**Maintained By:** Development team  
**Project Status:** Active development  
**Company:** Livlu Technologies Ltd (umbrella company)  
**Product:** ForroVivo (standalone product brand)  
**Company Registration:** 16799761 (England and Wales)

