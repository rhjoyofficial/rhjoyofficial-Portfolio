# Personal Brand Portfolio — Full Specification
> Rakibul Hasan Joy | rakibulhasanjoy.com
> Modern Developer Portfolio with SEO + AEO + AI Recommendation Optimization
> Stack: Next.js 15 + TypeScript + Tailwind v4 + Framer Motion

---

## Who This Is For

**Owner:** Rakibul Hasan Joy (@rhjoyofficial)
**Identity:** Full Stack Developer & AI Automation Engineer
**Tagline:** "I build web apps and AI systems that make businesses run faster."
**Target Audiences:**
1. International freelance clients (Upwork/Fiverr)
2. Remote-first tech companies hiring developers
3. Local Bangladesh businesses needing web/software solutions

**Domain:** rakibulhasanjoy.com (deploy here after build)
**Temporary deploy:** portfolio.endbrackets.com (Vercel — free)

---

## Identity & Positioning (Important — Follow This Exactly)

Joy is NOT a generic developer. He is positioned as:

> "A Full Stack Developer & AI Automation Engineer from Bangladesh who helps businesses build web applications and automate their operations using modern tools like Laravel, React, and AI APIs."

This positioning:
- Appeals to Upwork clients (web dev)
- Appeals to remote companies (full stack + AI)
- Appeals to local businesses (automation)
- Commands premium rates (AI = higher billing)

Every page, every section must reinforce this identity consistently.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Blog/Content | MDX + Contentlayer (or Velite) |
| Contact Form | React Hook Form + Resend API |
| Icons | Lucide React + React Icons |
| Fonts | Inter (body) + JetBrains Mono (code elements) |
| Schema/SEO | Next.js Metadata API + JSON-LD (server-rendered) |
| Analytics | Vercel Analytics + Umami (self-hosted later) |
| Deployment | Vercel (free tier) |
| Dark/Light Mode | next-themes |

---

## Design System

### Colors
```
Background (dark):   #0D0D0D
Background (light):  #FAFAFA
Surface (dark):      #141414
Surface (light):     #F4F4F5
Primary accent:      #6366F1  (Indigo)
Primary hover:       #4F46E5
Terminal green:      #22C55E  (for code elements)
Text primary:        #F8FAFC (dark) / #0F172A (light)
Text muted:          #94A3B8
Border:              #1E293B (dark) / #E2E8F0 (light)
```

### Typography
```
Headings:    Inter, font-bold
Body:        Inter, font-normal
Code/mono:   JetBrains Mono (terminal elements, skill tags, hero typing)
```

### Design Language
- Dark mode default, light mode toggle (top right)
- Subtle dot grid background on hero section
- Terminal/code aesthetic mixed with clean professional layout
- Smooth scroll animations (Framer Motion fade-in-up on scroll)
- Typing animation in hero (shows code identity)
- Glassmorphism cards for projects and services
- Gradient text for headings (Indigo → Violet)
- Green terminal cursor blinking effect
- Hover micro-interactions on all cards and buttons

---

## Site Architecture

```
/                   → Homepage (all sections)
/about              → Full about page (detailed story)
/projects           → All projects grid
/projects/[slug]    → Individual project case study
/services           → Services page
/blog               → Blog index
/blog/[slug]        → Individual blog post
/contact            → Contact page
/uses               → Tools & stack I use (SEO + AEO page)
```

---

## Page Sections — Homepage

Build sections in this exact order:

### 1. NAVBAR
- Logo: `rhjoy.` (JetBrains Mono, Indigo color)
- Links: About, Projects, Services, Blog, Contact
- Dark/Light mode toggle
- "Hire Me" CTA button (Indigo, filled)
- Sticky on scroll with blur backdrop

### 2. HERO SECTION
- Left side:
  - Small badge: `Available for Work ✓` (green dot, animated pulse)
  - Heading: `Hi, I'm Rakibul Hasan Joy`
  - Subheading (gradient text): `Full Stack Developer & AI Automation Engineer`
  - Tagline: `I build web apps and AI systems that make businesses run faster.`
  - Two CTA buttons: `View My Work` (primary) + `Let's Talk` (outlined)
  - Social icons row: GitHub, LinkedIn, Facebook, Email
- Right side:
  - Animated code block (terminal style, JetBrains Mono):
    ```
    const developer = {
      name: "Rakibul Hasan Joy",
      role: "Full Stack Developer",
      skills: ["Laravel", "React", "AI"],
      status: "open_to_work",
      location: "Bangladesh 🇧🇩",
    }
    ```
  - Lines appear one by one with typing animation (Framer Motion)
- Background: Subtle dot grid, faint gradient orb behind text

### 3. STATS BAR (thin section below hero)
- 3+ Years Experience
- 10+ Projects Delivered
- 3 Tech Domains (Web, AI, Automation)
- Available Worldwide
(Animate numbers counting up when in viewport)

### 4. ABOUT (Brief — homepage version)
- Photo (professional or clean headshot)
- 3–4 sentence intro paragraph
- What makes me different: 3 bullet points
- Link: "Read full story →"

### 5. SERVICES
Three service cards (glassmorphism style):

**Card 1: Web Application Development**
- Icon: Code2
- Description: Custom web apps built with Laravel + React. Clean code, fast delivery, scalable architecture.
- Tags: Laravel, React, MySQL, REST API

**Card 2: AI Integration & Automation**
- Icon: Bot
- Description: Connect your business to AI. Automate workflows using n8n, Claude API, and custom integrations.
- Tags: Claude API, n8n, Automation, AI Agents

**Card 3: SaaS Development**
- Icon: LayoutDashboard
- Description: Build your SaaS product from scratch — multi-tenant, billing, authentication, dashboard.
- Tags: SaaS, Stripe, Laravel, React

### 6. SKILLS / TECH STACK
Two tabs: "Languages & Frameworks" | "Tools & Platforms"

**Languages & Frameworks:**
- PHP / Laravel, JavaScript / TypeScript, React / Next.js, Vue / Nuxt, HTML/CSS, Tailwind CSS

**Tools & Platforms:**
- MySQL, Git / GitHub, Docker (basic), n8n, Claude API, Postman, VS Code, Linux/Ubuntu

Display as icon grid with skill name below. Subtle hover animation (scale up).

### 7. FEATURED PROJECTS (3 cards)
Show top 3 projects. Each card:
- Project thumbnail/screenshot
- Project name
- One-line description
- Tech tags
- Links: Live Demo + GitHub
- Hover: card lifts, overlay shows "View Project →"

Projects to show (update as they get built):
1. InvoiceAI — AI Invoice & Proposal Generator (Laravel 13 + React + Claude API)
2. tycoonbd.com — Business platform (2,500 Google clicks in 28 days)
3. [Third project — add when ready]

"View All Projects →" link at bottom

### 8. HOW I WORK (Process)
4 steps, horizontal timeline:

1. **Discover** — We talk about your project, goals, and timeline. I ask the right questions.
2. **Plan** — I map out the architecture, scope, and delivery schedule before writing a single line.
3. **Build** — Clean, well-structured code. Regular updates. No disappearing acts.
4. **Deliver** — Tested, deployed, documented. I stay available post-launch.

### 9. FAQ (Critical for AEO)
Questions must be written so AI engines can extract answers directly.
Use FAQPage JSON-LD schema on this section.

Include these questions:
- Where are you located and do you work with international clients?
- What technologies do you specialize in?
- How much do you charge for a web application project?
- How long does it take to build a web app?
- Do you work on existing projects or only new ones?
- What is AI automation and how can it help my business?
- How do I hire you?
- Do you offer ongoing maintenance after delivery?

Each answer: 40–60 words, direct, plain language.

### 10. BLOG PREVIEW (Latest 3 Posts)
Show 3 most recent blog posts as cards:
- Thumbnail image
- Category tag
- Title
- Read time
- Date
- "Read More →" link

Blog is key for SEO/AEO. First 5 articles to write (after launch):
1. "How I Built an AI Proposal Generator with Laravel and Claude API"
2. "n8n vs Zapier: Which Automation Tool Should Your Business Use in 2026?"
3. "Full Stack Laravel + React: My Development Process Explained"
4. "What is AI Automation and Why Every Small Business Needs It"
5. "How to Hire a Laravel Developer: What to Look For"

### 11. TESTIMONIALS
For now: 1–2 placeholder cards with a "More coming soon" note.
When real testimonials exist, replace placeholders.

### 12. CONTACT SECTION
- Heading: "Let's Build Something Together"
- Subheading: "Available for freelance projects, full-time remote roles, and consulting."
- Availability badge: `Currently Available ✓`
- Left side: Contact form
  - Name, Email, Project Type (dropdown), Budget Range (dropdown), Message
  - Submit via Resend API
- Right side:
  - Email: endbrackets.rhjoy@gmail.com
  - Response time: "Usually within 24 hours"
  - Social links (GitHub, LinkedIn, Facebook)
  - Location: Bangladesh (UTC+6)

### 13. FOOTER
- Logo + tagline
- Nav links
- Social icons
- Copyright: © 2026 Rakibul Hasan Joy. All rights reserved.
- Built with: Next.js + Vercel

---

## SEO — Every Page Must Have

```typescript
// app/layout.tsx — base metadata
export const metadata: Metadata = {
  title: {
    default: 'Rakibul Hasan Joy — Full Stack Developer & AI Automation Engineer',
    template: '%s | Rakibul Hasan Joy',
  },
  description: 'Full Stack Developer & AI Automation Engineer from Bangladesh. I build Laravel, React, and AI-powered web applications for businesses worldwide.',
  keywords: ['Laravel developer', 'React developer', 'AI automation', 'Full stack developer Bangladesh', 'hire Laravel developer', 'n8n automation'],
  authors: [{ name: 'Rakibul Hasan Joy', url: 'https://rakibulhasanjoy.com' }],
  creator: 'Rakibul Hasan Joy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rakibulhasanjoy.com',
    siteName: 'Rakibul Hasan Joy',
    title: 'Rakibul Hasan Joy — Full Stack Developer & AI Automation Engineer',
    description: 'I build web apps and AI systems that make businesses run faster.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rakibul Hasan Joy — Full Stack Developer & AI Automation Engineer',
    description: 'I build web apps and AI systems that make businesses run faster.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://rakibulhasanjoy.com'),
}
```

---

## AEO — JSON-LD Schema (Server-Rendered, NOT client-side)

### Person Schema (place in layout.tsx or homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://rakibulhasanjoy.com/#person",
  "name": "Rakibul Hasan Joy",
  "url": "https://rakibulhasanjoy.com",
  "image": "https://rakibulhasanjoy.com/photo.jpg",
  "jobTitle": "Full Stack Developer & AI Automation Engineer",
  "description": "Full Stack Developer and AI Automation Engineer from Bangladesh specializing in Laravel, React, and AI-powered web applications.",
  "email": "endbrackets.rhjoy@gmail.com",
  "nationality": "Bangladeshi",
  "knowsAbout": ["Laravel", "React", "Next.js", "AI Automation", "n8n", "PHP", "TypeScript"],
  "sameAs": [
    "https://github.com/rhjoyofficial",
    "https://linkedin.com/in/rhjoyofficial",
    "https://facebook.com/rhjoyofficial"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "End Brackets",
    "url": "https://endbrackets.com"
  }
}
```

### WebSite Schema
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://rakibulhasanjoy.com/#website",
  "url": "https://rakibulhasanjoy.com",
  "name": "Rakibul Hasan Joy",
  "description": "Full Stack Developer & AI Automation Engineer portfolio",
  "author": { "@id": "https://rakibulhasanjoy.com/#person" }
}
```

### FAQPage Schema (for FAQ section)
Generate dynamically from FAQ array — each question/answer pair maps to FAQPage schema.

### Article Schema (for each blog post)
Each MDX blog post generates Article schema automatically via Contentlayer.

---

## File & Folder Structure

```
portfolio/
├── app/
│   ├── layout.tsx              (global layout, metadata, JSON-LD schemas)
│   ├── page.tsx                (homepage — all sections)
│   ├── about/page.tsx
│   ├── projects/
│   │   ├── page.tsx            (all projects grid)
│   │   └── [slug]/page.tsx     (project case study)
│   ├── services/page.tsx
│   ├── blog/
│   │   ├── page.tsx            (blog index)
│   │   └── [slug]/page.tsx     (blog post)
│   ├── contact/page.tsx
│   ├── uses/page.tsx
│   └── api/
│       └── contact/route.ts    (Resend email API)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Process.tsx
│   │   ├── FAQ.tsx
│   │   ├── Blog.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── ProjectCard.tsx
│       ├── ServiceCard.tsx
│       ├── BlogCard.tsx
│       ├── SkillIcon.tsx
│       ├── ThemeToggle.tsx
│       └── AnimatedSection.tsx (Framer Motion wrapper)
├── content/
│   └── blog/
│       └── *.mdx               (blog posts)
├── data/
│   ├── projects.ts             (projects data)
│   ├── skills.ts               (skills data)
│   ├── services.ts             (services data)
│   └── faq.ts                  (FAQ questions/answers)
├── lib/
│   ├── schemas.ts              (JSON-LD schema generators)
│   └── utils.ts
├── public/
│   ├── og-image.png            (1200x630 OG image)
│   ├── photo.jpg               (professional photo)
│   └── projects/               (project screenshots)
├── content.config.ts           (Contentlayer/Velite config)
└── next.config.ts
```

---

## Build Order (Follow This Exactly)

### Day 1: Project Setup
1. `npx create-next-app@latest portfolio --typescript --tailwind --app --src-dir=false`
2. Install dependencies:
   ```
   npm install framer-motion lucide-react react-icons next-themes
   npm install @hookform/resolvers react-hook-form zod
   npm install resend
   npm install -D @tailwindcss/typography
   ```
3. Set up color system in tailwind.config.ts
4. Set up global fonts (Inter + JetBrains Mono via next/font)
5. Set up dark/light mode with next-themes
6. Build Navbar component
7. Build Footer component

### Day 2: Hero + Stats + About
1. Hero section with typing animation (Framer Motion)
2. Animated code block (right side of hero)
3. Stats bar with count-up animation
4. About section (homepage version)
5. AnimatedSection wrapper component (fade-in-up on scroll)

### Day 3: Services + Skills
1. Services section (3 glassmorphism cards)
2. Skills section (icon grid with tabs)
3. Both sections animated on scroll

### Day 4: Projects + Process
1. ProjectCard component
2. Featured Projects section (3 cards)
3. Process section (4-step timeline)

### Day 5: FAQ + Blog + Testimonials + Contact
1. FAQ section with FAQPage JSON-LD schema
2. Blog preview section (static data for now)
3. Testimonials section (placeholder)
4. Contact form (React Hook Form + Resend API)

### Day 6: Inner Pages
1. /about (full story page)
2. /projects (all projects grid)
3. /services (detailed services page)
4. /contact (full contact page)
5. /uses (tools page — great for SEO)

### Day 7: SEO + AEO + Blog Setup
1. JSON-LD schemas in layout.tsx (Person + WebSite)
2. Sitemap.xml (Next.js generateSitemap)
3. Robots.txt
4. OG image (1200x630) using Next.js OG image generation
5. Set up Contentlayer for MDX blog
6. Write first blog post
7. Deploy to Vercel

---

## Environment Variables

```
RESEND_API_KEY=re_...
NEXT_PUBLIC_SITE_URL=https://rakibulhasanjoy.com
```

---

## Performance Targets (Must Hit These)

- Lighthouse Performance: 95+
- Lighthouse SEO: 100
- Lighthouse Accessibility: 95+
- Core Web Vitals: All green
- First Contentful Paint: < 1.5s
- LCP: < 2.5s

Use `next/image` for ALL images. No unoptimized images.
Use `next/font` for ALL fonts. No Google Fonts CDN links.

---

## /uses Page — Tools I Use (Important for SEO + AEO)

This page gets traffic from devs and clients searching "what tools do developers use."
Organize by category:

- **Editor:** VS Code + Claude Code extension
- **Backend:** Laravel 13, PHP 8.3, Composer
- **Frontend:** React 18, Next.js 15, TypeScript, Tailwind CSS
- **AI Tools:** Claude API (Anthropic), n8n (self-hosted)
- **Database:** MySQL, PostgreSQL
- **DevOps:** Git, GitHub, Vercel, Hostinger VPS, Ubuntu
- **Design:** Figma (basic), shadcn/ui
- **Testing & API:** Postman
- **Communication:** Slack, Discord, Email

---

## Notes for Claude Code (When Building)

- Use App Router ONLY — no Pages Router
- All components in TypeScript, never .js or .jsx
- Framer Motion animations: always wrap with `AnimatedSection` component so animations are consistent
- JSON-LD schemas MUST be rendered server-side (in server components or layout.tsx) — never in client components
- All images use `next/image` with proper width, height, alt text
- Contact form submits to `/api/contact` route (uses Resend)
- Dark mode: class strategy (`darkMode: 'class'` in tailwind config)
- All data (projects, skills, FAQ) lives in `/data/*.ts` files — never hardcoded in components
- Mobile-first responsive design — test every section at 375px, 768px, 1280px
- No placeholder/lorem ipsum text in final build — use real content from this spec
- Blog posts in MDX format under `/content/blog/`
