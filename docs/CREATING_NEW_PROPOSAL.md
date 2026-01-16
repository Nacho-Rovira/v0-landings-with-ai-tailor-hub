# Creating New Proposals - Complete Guide

This document provides a comprehensive guide for creating new client proposals using the Tailor Hub design system.

---

## Quick Start

To create a new proposal, provide these key details:
1. **Client name & industry** (e.g., "Santander - Banking")
2. **Project type** (Development, Audit, Introduction, Support)
3. **Sections needed** (Challenge, Technology, Budget, Team, etc.)
4. **Key requirements** (Timeline, budget range, team size)

---

## Proposal Structure

### Standard File Organization

Each proposal consists of:
- **Page component**: `app/[client-name]-proposal/page.tsx`
- **Config file** (optional): `config/proposals/[client-name]-proposal.json`

### Required Sections (All Proposals)

1. **Hero Section**
   - HeaderBox with overheader, header, body text, and CTA button
   - HighlightSection with hero image

2. **Proposal Content** (with MenuSidebar)
   - Challenge/Context/Opportunity
   - Our Approach/Capabilities
   - Technology & Architecture
   - Additional sections as needed

3. **Footer**
   - Automatically included via LandingLayout
   - Contains Tailor Hub links (LinkedIn, Instagram, Spotify, Policy, Collaboration)

### Optional Sections

- **Roadmap/Phases** - TimelineSection with project phases
- **Budget** - BudgetSection with itemized breakdown
- **Services** - BoxSection components with modal bios
- **Team** - TeamCard components with modal bios
- **Case Studies** - ProjectCard components with modal details
- **Partners** - Highlight2Section with partner logos
- **ISO Certification** - BoxSection highlighting ISO 27001
- **Infrastructure & Support** - BoxSection (compact) for ongoing services
- **Next Steps** - StepsFlow component (horizontal layout)
- **Get in Touch** - HeaderBox CTA
- **FAQ** - Accordion component

---

## Section Display Rules

### Sections with Overheader Only (No Title)

These sections **always** use TitleSection with overheader only:
- ✅ **FAQ**
- ✅ **Team**
- ✅ **ISO Certification**
- ✅ **Services**

```tsx
// Correct - Overheader only
<TitleSection overheader="FAQ" />

// Incorrect - Don't add title
<TitleSection overheader="FAQ" title="Common Questions" />
```

### Sections with Overheader + Title

Other sections can use both when needed:
- Challenge/Context
- Our Approach
- Technology & Architecture
- Roadmap
- Budget
- Partners
- Next Steps

---

## Spacing Guidelines

### Section-to-Section Spacing

Use `--spacing-9xl` (124px) between major sections:

```tsx
<section style={{ marginBottom: "var(--spacing-9xl)" }}>
  <TitleSection overheader="SERVICES" />
  {/* Section content */}
</section>

<section style={{ marginBottom: "var(--spacing-9xl)" }}>
  <TitleSection overheader="TEAM" />
  {/* Section content */}
</section>
```

### Content After TitleSection

Use `--gap-header-1` (56px) for content immediately after TitleSection:

```tsx
<TitleSection overheader="FAQ" />
<div style={{ marginTop: "var(--gap-header-1)" }}>
  <FAQ items={faqItems} />
</div>
```

This matches the internal gap between overheader and title in TitleSection.

### MenuSidebar Top Padding

Sticky sidebar should have `--spacing-9xl` top padding:

```tsx
<MenuSidebar style={{ paddingTop: "var(--spacing-9xl)" }}>
  {/* Menu items */}
</MenuSidebar>
```

---

## Component Usage

### HeaderBox

Hero section with CTA button:

```tsx
<HeaderBox
  overheader="A PROPOSAL FOR SANTANDER"
  header="Transforming Banking Operations Through Modern Technology"
  bodyText="Strategic partnership for internal tools and customer experience innovation."
  buttonLabel="View Proposal"
  onButtonClick={() => {
    document.getElementById('proposal-content')?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  }}
/>
```

### HighlightSection

Hero image display:

```tsx
<HighlightSection
  concepts={["DIGITAL", "TRANSFORMATION"]}
  imageSrc="/images/design-mode/HERO.png"
  imageAlt="Santander Banking Platform"
/>
```

### MenuSidebar with Items

Sticky navigation with auto-scroll detection:

```tsx
<MenuSidebar autoDetectActive style={{ paddingTop: "var(--spacing-9xl)" }}>
  <MenuSidebarItem href="#context" number={1}>
    CONTEXT / OPPORTUNITY
  </MenuSidebarItem>
  <MenuSidebarItem href="#capabilities" number={2}>
    OUR CAPABILITIES
  </MenuSidebarItem>
  <MenuSidebarItem href="#technology" number={3}>
    TECHNOLOGY & ARCHITECTURE
  </MenuSidebarItem>
</MenuSidebar>
```

### BodyText

Text content with sections:

```tsx
<BodyText
  sections={[
    {
      title: "The Digital Banking Challenge",
      paragraphs: [
        "Banks face increasing pressure to modernize...",
        "Legacy systems create operational inefficiencies..."
      ]
    }
  ]}
/>
```

### TechBox (Grid Layout)

Technology categories in grid:

```tsx
<div style={{ 
  display: "grid", 
  gridTemplateColumns: "repeat(3, 1fr)", 
  gap: "var(--spacing-l)" 
}}>
  <TechBox
    title="Front-end & Mobile"
    technologies={["React", "Next.js", "TypeScript"]}
  />
  <TechBox
    title="Back-end"
    technologies={["Node.js", "Express", "PostgreSQL"]}
  />
</div>
```

### TimelineSection

Project phases/roadmap:

```tsx
<TimelineSection
  phases={[
    {
      number: "01",
      title: "Discovery & Planning",
      description: "Requirements gathering and architecture design",
      duration: "4 WEEKS",
      deliverables: ["Technical specification", "Project roadmap"]
    }
  ]}
/>
```

### BudgetSection

Pricing breakdown:

```tsx
<BudgetSection
  items={[
    {
      category: "DISCOVERY & PLANNING",
      description: "Requirements analysis and design",
      amount: "€25,000"
    }
  ]}
  total="€350,000"
  notes={[
    "Payment terms: 30% upfront, 40% mid-project, 30% on delivery",
    "Includes 3 months post-launch support"
  ]}
/>
```

### BoxSection (Services, ISO)

Content with image:

```tsx
<BoxSection
  overheader="SOFTWARE DEVELOPMENT"
  header="Custom Software Solutions"
  bodyText="We build scalable applications..."
  imageSrc="/images/design-mode/desarrollo de software(2).jpeg"
  imageAlt="Software Development"
/>

// Compact variant for infrastructure services
<BoxSection
  variant="compact"
  overheader="24/7 MONITORING"
  header="System Health Monitoring"
  bodyText="Proactive monitoring and alerts"
  imageSrc="/images/design-mode/HERO.png"
  imageAlt="Monitoring"
/>
```

### StickyServicesSection (NEW)

Wrap BoxSection components for sticky stacking effect on scroll:

```tsx
import { StickyServicesSection } from "@/components/StickyServicesSection/StickyServicesSection"

<StickyServicesSection>
  <BoxSection
    overheader="S/ 01"
    header="CUSTOM SOFTWARE DEVELOPMENT"
    bodyText="We design and build enterprise applications..."
    imageSrc="/images/design-mode/desarrollo de software(2).jpeg"
    imageAlt="Software Development"
  />
  <BoxSection
    overheader="S/ 02"
    header="AI & DATA"
    bodyText="Machine learning solutions..."
    imageSrc="/images/design-mode/auditoria y formacion(2).jpeg"
    imageAlt="AI & Data"
  />
  <BoxSection
    overheader="S/ 03"
    header="TECH AUDITS & TRAINING"
    bodyText="Comprehensive technical audits..."
    imageSrc="/images/design-mode/Design systems.png"
    imageAlt="Tech Audits"
  />
</StickyServicesSection>
```

**Behavior:**
- Each service card sticks at the top of the viewport as you scroll
- Cards stack on top of each other with smooth opacity transitions
- Previous cards fade from 50% to 0% opacity when overlapped
- No shadows between cards for a clean, minimal look

### TeamCard + TeamMemberModal

Team presentation:

```tsx
<div style={{ display: "flex", gap: "var(--spacing-l)" }}>
  <TeamCard
    name="Giorgio G"
    title="Tech Lead"
    imageSrc="/images/team/giorgio.jpg"
    imageAlt="Giorgio"
    onClick={() => setModalOpen(true)}
  />
</div>

<TeamMemberModal
  isOpen={modalOpen}
  onClose={() => setModalOpen(false)}
  name="GIORGIO G"
  title="TECH LEAD"
  imageSrc="/images/team/giorgio-large.jpg"
  imageAlt="Giorgio"
  bio={["10+ years experience...", "Led 50+ projects..."]}
  languages="ITALIAN (NATIVE), SPANISH (ADVANCED)"
  skills="React, Node.js, AWS, System Architecture"
/>
```

### ProjectCard + ProjectModal

Case studies:

```tsx
<ProjectCard
  category="BANKING"
  title="Digital Banking Platform"
  imageSrc="/images/cases/banking.jpg"
  imageAlt="Banking Platform"
  onClick={() => setModalOpen(true)}
/>

<ProjectModal
  isOpen={modalOpen}
  onClose={() => setModalOpen(false)}
  title="DIGITAL BANKING PLATFORM"
  category="BANKING"
  imageSrc="/images/cases/banking-large.jpg"
  imageAlt="Banking Platform"
  sections={[
    {
      title: "THE CHALLENGE",
      paragraphs: ["Legacy systems...", "Poor UX..."]
    }
  ]}
  insights={[
    { value: "2M+", label: "ACTIVE USERS" },
    { value: "99.9%", label: "UPTIME" }
  ]}
/>
```

### StepsFlow (Next Steps)

Horizontal step flow:

```tsx
<StepsFlow
  direction="horizontal"
  steps={[
    {
      title: "Initial Consultation",
      description: "30-minute discovery call to understand your needs"
    },
    {
      title: "Proposal Refinement",
      description: "Detailed technical proposal and timeline"
    },
    {
      title: "Kickoff",
      description: "Team introduction and project launch"
    }
  ]}
/>
```

### FAQ

Accordion for questions:

```tsx
<FAQ
  items={[
    {
      question: "What is your development process?",
      answer: "We follow Agile methodology with 2-week sprints..."
    }
  ]}
/>
```

---

## Design System Tokens

### Typography

```css
/* Fonts */
--font-default: 'PP Mori';
--font-mono: 'PP Neue Montreal Mono';

/* Sizes */
--text-size-large: 40px;
--text-size-medium: 24px;
--text-size-small: 16px;
--text-size-xsmall: 14px;
```

### Spacing

```css
/* Section Gaps */
--spacing-9xl: 124px;  /* Between sections */
--gap-header-1: 56px;  /* Content after TitleSection */

/* Internal Spacing */
--spacing-xl: 80px;
--spacing-l: 56px;
--spacing-m: 24px;
--spacing-s: 16px;
--spacing-xs: 8px;
```

### Layout

```css
--layout-content-max: 1432px;  /* Max content width */
--spacing-page-x: 40px;        /* Horizontal padding */
--spacing-page-y: 40px;        /* Vertical padding */
```

### Colors

```css
--color-text-primary: #000;
--color-text-secondary: #666;
--color-bg-primary: #fff;
--color-neutral-100: #f5f5f5;
--color-neutral-200: #e5e5e5;
```

### Border Radius

```css
--radius-s: 16px;      /* Cards, boxes */
--radius-card: 16px;   /* Alternative */
```

---

## Placeholder Images

Available in `/images/design-mode/`:

- `HERO.png` - Generic hero image
- `desarrollo de software(2).jpeg` - Software development
- `auditoria y formacion(2).jpeg` - AI/Auditing
- `VRAI(1).jpeg` - E-commerce/Luxury
- `Desarrollor accesible(1).jpeg` - Accessibility
- `Design systems.png` - Design systems
- `ISO(2).png` - ISO certification
- `Modo_de_aislamiento.webp` - ISO badge

---

## Section Order Best Practices

### Recommended Order

1. HeaderBox (Hero CTA)
2. HighlightSection (Hero image)
3. **Proposal Content Section** (with MenuSidebar)
   - Challenge/Context
   - Our Capabilities
   - How We Work
   - Technology & Architecture
4. Roadmap/Phases (if applicable)
5. Budget (if applicable)
6. Services
7. Team
8. Case Studies
9. Next Steps
10. Get in Touch (HeaderBox CTA)
11. Partners
12. ISO Certification
13. **FAQ** (always last before footer)
14. Footer (automatic)

### Section Order Rule

**FAQ must always be the last section before the footer.**

---

## Common Patterns

### Pattern 1: Full Development Proposal

Sections: Hero → Proposal Content → Roadmap → Budget → Services → Team → Cases → Next Steps → Get in Touch → Partners → ISO → FAQ

### Pattern 2: Introduction Proposal (No Budget)

Sections: Hero → Proposal Content → Services → Team → Cases → Next Steps → Get in Touch → Partners → ISO → FAQ

### Pattern 3: Audit/Consulting Proposal

Sections: Hero → Proposal Content → Our Methodology → Services → Team → Cases → Next Steps → Get in Touch → ISO → FAQ

---

## Accessibility

- Use semantic HTML (`<section>`, `<header>`, `<nav>`)
- All images must have descriptive `alt` text
- Buttons must have clear labels
- Ensure sufficient color contrast (follow WCAG 2.1 AA)
- Support keyboard navigation

---

## Responsive Behavior

### Desktop (>1024px)
- Max content width: 1432px (centered)
- MenuSidebar visible and sticky on the left
- Full navigation menu in header
- Large logo in header

### Tablet & Mobile (≤1024px)
- **MenuSidebar is hidden** - navigation is simplified for smaller screens
- Mobile header with small logo (sticky) and hamburger menu
- Concepts displayed below logo, scrollable with page content
- Grid layouts collapse:
  - TechStackSection: 3 columns → 2 columns → 1 column
  - Service boxes wrap to fit screen
- StepsFlow switches from horizontal to vertical

### Mobile Concepts Behavior
On mobile, pass concepts to LandingLayout for proper responsive display:

```tsx
<LandingLayout
  variant="starter"
  concepts={["LUXURY E-COMMERCE", "LAB-GROWN DIAMONDS", "DIGITAL EXCELLENCE"]}
>
  <HighlightSection
    concepts={["LUXURY E-COMMERCE", "LAB-GROWN DIAMONDS", "DIGITAL EXCELLENCE"]}
    imageSrc="/images/hero.png"
    imageAlt="Hero image"
  />
  {/* rest of content */}
</LandingLayout>
```

The same concepts array is passed to both:
- `LandingLayout` - renders concepts in mobile header (scrollable)
- `HighlightSection` - renders concepts on desktop (hidden on mobile)

---

## Testing Checklist

Before finalizing a proposal:

✅ **Navigation**
- [ ] MenuSidebar highlights active section on scroll (desktop only)
- [ ] MenuSidebar hidden on tablet/mobile (≤1024px)
- [ ] All menu items link to correct sections
- [ ] Smooth scroll behavior works

✅ **Spacing**
- [ ] Section gaps are consistent (--spacing-9xl)
- [ ] TitleSection spacing is correct (--gap-header-1)
- [ ] No arbitrary spacing values

✅ **Content**
- [ ] All text is readable and professional
- [ ] No lorem ipsum placeholder text
- [ ] Budget numbers are accurate
- [ ] Team member info is complete

✅ **Images**
- [ ] All images have alt text
- [ ] Hero image displays correctly
- [ ] Case study images load
- [ ] Team photos are professional

✅ **Interactions**
- [ ] CTA buttons scroll to correct sections
- [ ] Modals open and close properly
- [ ] FAQ accordion expands/collapses
- [ ] Hover states work

✅ **Footer**
- [ ] All links work (LinkedIn, Instagram, etc.)
- [ ] Links open in new tabs

✅ **Responsive**
- [ ] Mobile header displays correctly (small logo, hamburger menu)
- [ ] Concepts display in horizontal row on mobile
- [ ] No horizontal scrolling on any screen size
- [ ] TechStackSection boxes wrap properly
- [ ] StickyServicesSection stacking works on scroll

---

## Troubleshooting

### Issue: Inconsistent spacing
**Solution:** Use spacing tokens, not arbitrary values. Section gaps = `--spacing-9xl`, content after TitleSection = `--gap-header-1`.

### Issue: MenuSidebar not highlighting
**Solution:** Ensure sections have `id` attributes matching menu `href` values, and `autoDetectActive` prop is set.

### Issue: Images not loading
**Solution:** Check image paths use `/images/design-mode/` prefix and files exist.

### Issue: Modal not displaying
**Solution:** Verify state management for `isOpen` and `onClose` props.

### Issue: Horizontal scrolling on mobile
**Solution:** Check that TechStackSection grid uses responsive columns (3 → 2 → 1). Ensure concepts in header don't overflow.

### Issue: Duplicate concepts on mobile
**Solution:** Pass the same concepts array to both `LandingLayout` (for mobile header) and `HighlightSection` (for desktop). HighlightSection auto-hides on mobile.

### Issue: Services not stacking properly
**Solution:** Wrap BoxSection components in `StickyServicesSection` component for sticky stacking effect.

---

## Additional Resources

- **Component Reference**: See `PROPOSAL_TEMPLATE_GUIDE.md`
- **Prompt Guide**: See `HOW_TO_CREATE_PROPOSALS.md`
- **Example Configs**: Check `/config/proposals/*.json`
- **Existing Proposals**: Review `/app/*-proposal/page.tsx`

---

**Last Updated**: Based on latest spacing guidelines and section display rules
