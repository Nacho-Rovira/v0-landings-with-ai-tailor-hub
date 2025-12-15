# Proposal Template System - Component Reference

Complete reference for all components available in the Tailor Hub proposal system.

---

## Overview

The proposal system uses a modular component architecture with:
- **Design tokens** for consistent spacing, typography, and colors
- **Reusable components** for common UI patterns
- **Semantic HTML** for accessibility
- **Responsive layouts** that adapt to all screen sizes

---

## Core Components

### HeaderBox

Hero CTA section with title, description, and action button.

**Props:**
```typescript
{
  overheader: string;          // Small uppercase text (e.g., "A PROPOSAL FOR")
  header: string;              // Main headline
  bodyText: string;            // Description paragraph
  buttonLabel: string;         // CTA button text
  onButtonClick?: () => void;  // Button click handler
}
```

**Usage:**
```tsx
<HeaderBox
  overheader="A PROPOSAL FOR SANTANDER"
  header="Transforming Banking Operations"
  bodyText="Strategic partnership for digital innovation"
  buttonLabel="View Proposal"
  onButtonClick={() => {
    document.getElementById('proposal-content')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  }}
/>
```

**Styling:**
- Uses PP Neue Montreal Mono for overheader
- Large headline with PP Mori
- Semantic color tokens
- Button with hover states

---

### HighlightSection

Hero image display with optional concept labels.

**Props:**
```typescript
{
  concepts: string[];     // Label text (e.g., ["DIGITAL", "TRANSFORMATION"])
  imageSrc: string;       // Image path
  imageAlt: string;       // Alt text for accessibility
}
```

**Usage:**
```tsx
<HighlightSection
  concepts={["BANKING", "PLATFORM"]}
  imageSrc="/images/design-mode/HERO.png"
  imageAlt="Banking platform interface"
/>
```

---

### TitleSection

Section header with optional overheader, title, and paragraph.

**Props:**
```typescript
{
  overheader?: string;    // Small uppercase label
  title?: string;         // Section title
  paragraph?: string;     // Optional description
}
```

**Usage:**
```tsx
// With overheader only (FAQ, Team, Services, ISO)
<TitleSection overheader="FAQ" />

// With both overheader and title
<TitleSection 
  overheader="ROADMAP" 
  title="Project Timeline & Milestones" 
/>

// With all props
<TitleSection 
  overheader="CHALLENGE" 
  title="The Digital Banking Challenge"
  paragraph="Understanding the current landscape"
/>
```

**Display Rules:**
- **FAQ** - overheader only
- **Team** - overheader only
- **ISO** - overheader only
- **Services** - overheader only
- Other sections - can use overheader + title

**Spacing:**
- Internal gap between overheader and title: `--gap-header-1` (56px)
- Content after TitleSection should use `marginTop: "var(--gap-header-1)"`

---

### MenuSidebar

Sticky navigation menu with scroll detection.

**Props:**
```typescript
{
  autoDetectActive?: boolean;  // Enable scroll-based active detection
  style?: React.CSSProperties; // Custom styles
  children: React.ReactNode;   // MenuSidebarItem components
}
```

**Usage:**
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

**Features:**
- Automatically highlights active section on scroll
- Smooth scroll to section on click
- Sticky positioning
- Responsive (becomes mobile menu on small screens)

---

### BodyText

Multi-section text content component.

**Props:**
```typescript
{
  sections: Array<{
    title?: string;           // Section heading
    paragraphs: string[];     // Array of paragraph text
  }>;
}
```

**Usage:**
```tsx
<BodyText
  sections={[
    {
      title: "The Challenge",
      paragraphs: [
        "Banks face increasing pressure to modernize their infrastructure...",
        "Legacy systems create operational bottlenecks and security risks..."
      ]
    },
    {
      title: "Our Solution",
      paragraphs: [
        "We propose a cloud-native architecture..."
      ]
    }
  ]}
/>
```

**Typography:**
- Section titles: Medium size, semibold
- Paragraphs: Body text with relaxed line-height
- Supports `<strong>` tags for emphasis (weight 500)

---

### TechBox

Technology category display box.

**Props:**
```typescript
{
  title: string;              // Category name
  technologies: string[];     // List of technologies
  fullWidth?: boolean;        // Fill container width
}
```

**Usage:**
```tsx
// Grid layout (3 columns)
<div style={{ 
  display: "grid", 
  gridTemplateColumns: "repeat(3, 1fr)", 
  gap: "var(--spacing-l)" 
}}>
  <TechBox
    title="Front-end & Mobile"
    technologies={["React 18+", "Next.js 15", "TypeScript", "Tailwind CSS"]}
  />
  <TechBox
    title="Back-end"
    technologies={["Node.js", "Express", "PostgreSQL", "Redis"]}
  />
  <TechBox
    title="Infrastructure"
    technologies={["AWS", "Docker", "Kubernetes"]}
  />
</div>

// Full width variant
<div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-m)" }}>
  <TechBox
    fullWidth
    title="Platform Services"
    technologies={["Authentication", "API Gateway", "Monitoring"]}
  />
</div>
```

**Styling:**
- Default width: 260px
- Full width: 100%
- Border, background, rounded corners
- Monospace font for title
- List layout for technologies

---

### TimelineSection

Project phases and roadmap display.

**Props:**
```typescript
{
  phases: Array<{
    number: string;           // Phase number (e.g., "01")
    title: string;            // Phase name
    description: string;      // Phase description
    duration: string;         // Time estimate (e.g., "4 WEEKS")
    deliverables: string[];   // List of deliverables
  }>;
}
```

**Usage:**
```tsx
<TimelineSection
  phases={[
    {
      number: "01",
      title: "Discovery & Planning",
      description: "Requirements gathering, stakeholder interviews, and technical assessment",
      duration: "4 WEEKS",
      deliverables: [
        "Technical specification document",
        "Project roadmap and timeline",
        "Architecture design diagrams"
      ]
    },
    {
      number: "02",
      title: "MVP Development",
      description: "Core features implementation and testing",
      duration: "8 WEEKS",
      deliverables: [
        "Working MVP application",
        "API documentation",
        "User testing results"
      ]
    }
  ]}
/>
```

**Visual Design:**
- Vertical timeline with connecting lines
- Phase numbers in circles
- Clear duration badges
- Bulleted deliverables

---

### BudgetSection

Pricing breakdown and payment terms.

**Props:**
```typescript
{
  items: Array<{
    category: string;         // Budget category name
    description: string;      // What's included
    amount: string;          // Price (e.g., "€25,000")
  }>;
  total: string;             // Total amount
  notes: string[];           // Payment terms and conditions
}
```

**Usage:**
```tsx
<BudgetSection
  items={[
    {
      category: "DISCOVERY & PLANNING",
      description: "Requirements analysis, technical design, and project planning",
      amount: "€25,000"
    },
    {
      category: "DEVELOPMENT",
      description: "Frontend, backend, and API development",
      amount: "€180,000"
    },
    {
      category: "TESTING & QA",
      description: "Quality assurance, testing, and bug fixes",
      amount: "€35,000"
    }
  ]}
  total="€350,000"
  notes={[
    "Payment terms: 30% upfront, 40% mid-project, 30% on delivery",
    "Includes 3 months post-launch support and maintenance",
    "Additional features can be added via change requests"
  ]}
/>
```

**Styling:**
- Table layout with clean separators
- Monospace font for amounts
- Highlighted total row
- Bulleted notes section
- Smaller font size for notes (--text-size-xsmall)

---

### BoxSection

Content section with image and text.

**Props:**
```typescript
{
  variant?: "default" | "compact";  // Size variant
  overheader: string;               // Section label
  header: string;                   // Title
  bodyText: string;                 // Description
  imageSrc?: string;                // Image path (optional)
  imageAlt: string;                 // Alt text
}
```

**Usage:**
```tsx
// Default variant (Services, ISO)
<BoxSection
  overheader="SOFTWARE DEVELOPMENT"
  header="Custom Software Solutions"
  bodyText="We design and build custom software applications tailored to your business needs."
  imageSrc="/images/design-mode/desarrollo de software(2).jpeg"
  imageAlt="Software Development"
/>

// Compact variant (Infrastructure services)
<BoxSection
  variant="compact"
  overheader="24/7 MONITORING"
  header="System Health Monitoring"
  bodyText="Proactive monitoring with real-time alerts"
  imageSrc="/images/design-mode/HERO.png"
  imageAlt="Monitoring Dashboard"
/>
```

**Variants:**
- **Default**: 468x532px image, full layout
- **Compact**: 250x250px image, smaller layout with monospace header

---

### TeamCard

Team member card with click-to-view-bio.

**Props:**
```typescript
{
  name: string;              // Member name
  title: string;             // Job title
  imageSrc: string;          // Photo path
  imageAlt: string;          // Alt text
  onClick?: () => void;      // Click handler for modal
}
```

**Usage:**
```tsx
const [selectedMember, setSelectedMember] = useState(null);

<div style={{ display: "flex", gap: "var(--spacing-l)", flexWrap: "wrap" }}>
  <TeamCard
    name="Giorgio G"
    title="Tech Lead"
    imageSrc="/placeholder.svg?height=300&width=300"
    imageAlt="Giorgio G"
    onClick={() => setSelectedMember(0)}
  />
  <TeamCard
    name="Maria S"
    title="Senior Developer"
    imageSrc="/placeholder.svg?height=300&width=300"
    imageAlt="Maria S"
    onClick={() => setSelectedMember(1)}
  />
</div>
```

---

### TeamMemberModal

Full bio modal for team members.

**Props:**
```typescript
{
  isOpen: boolean;           // Modal visibility
  onClose: () => void;       // Close handler
  name: string;              // Member name (uppercase)
  title: string;             // Job title (uppercase)
  imageSrc: string;          // Large photo
  imageAlt: string;          // Alt text
  bio: string[];             // Biography paragraphs
  languages: string;         // Language skills
  skills: string;            // Technical skills
}
```

**Usage:**
```tsx
<TeamMemberModal
  isOpen={selectedMember === 0}
  onClose={() => setSelectedMember(null)}
  name="GIORGIO G"
  title="TECH LEAD"
  imageSrc="/placeholder.svg?height=600&width=600"
  imageAlt="Giorgio G"
  bio={[
    "Giorgio has over 10 years of experience in full-stack development...",
    "He has led the technical architecture for 50+ projects..."
  ]}
  languages="ITALIAN (NATIVE), SPANISH (ADVANCED), ENGLISH (FLUENT)"
  skills="React, Node.js, AWS, System Architecture, Team Leadership"
/>
```

---

### ProjectCard

Case study card with click-to-view-details.

**Props:**
```typescript
{
  category: string;          // Project category
  title: string;             // Project name
  imageSrc: string;          // Thumbnail image
  imageAlt: string;          // Alt text
  onClick?: () => void;      // Click handler for modal
}
```

**Usage:**
```tsx
<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--spacing-l)" }}>
  <ProjectCard
    category="BANKING"
    title="Digital Banking Platform"
    imageSrc="/images/cases/banking.jpg"
    imageAlt="Banking Platform"
    onClick={() => setSelectedProject(0)}
  />
</div>
```

---

### ProjectModal

Case study details modal.

**Props:**
```typescript
{
  isOpen: boolean;                    // Modal visibility
  onClose: () => void;                // Close handler
  title: string;                      // Project title
  category: string;                   // Project category
  imageSrc: string;                   // Large image
  imageAlt: string;                   // Alt text
  sections: Array<{                   // Content sections
    title: string;
    paragraphs: string[];
  }>;
  insights?: Array<{                  // Key metrics
    value: string;
    label: string;
  }>;
  quotes?: Array<{                    // Client testimonials
    text: string;
    author: string;
  }>;
}
```

**Usage:**
```tsx
<ProjectModal
  isOpen={selectedProject === 0}
  onClose={() => setSelectedProject(null)}
  title="DIGITAL BANKING PLATFORM"
  category="BANKING"
  imageSrc="/images/cases/banking-large.jpg"
  imageAlt="Banking Platform"
  sections={[
    {
      title: "THE CHALLENGE",
      paragraphs: [
        "The bank's legacy systems were creating bottlenecks...",
        "Customer satisfaction was declining due to poor UX..."
      ]
    },
    {
      title: "OUR SOLUTION",
      paragraphs: [
        "We designed a modern, cloud-native architecture..."
      ]
    }
  ]}
  insights={[
    { value: "2M+", label: "ACTIVE USERS" },
    { value: "99.9%", label: "UPTIME" },
    { value: "40%", label: "FASTER TRANSACTIONS" }
  ]}
  quotes={[
    {
      text: "The new platform transformed our customer experience",
      author: "CTO, Major Bank"
    }
  ]}
/>
```

---

### Highlight2Section

Partners or client logos section.

**Props:**
```typescript
{
  concepts: string[];        // Section labels
  items: string[];           // Partner/client names
}
```

**Usage:**
```tsx
<Highlight2Section
  concepts={["OFFICIAL", "PARTNERS"]}
  items={["Contentful", "AWS", "Shopify", "Microsoft AI", "Netlify"]}
/>
```

---

### StepsFlow

Sequential steps display (horizontal or vertical).

**Props:**
```typescript
{
  direction?: "horizontal" | "vertical";  // Layout direction
  steps: Array<{
    title: string;           // Step name
    description: string;     // Step details
  }>;
}
```

**Usage:**
```tsx
<StepsFlow
  direction="horizontal"
  steps={[
    {
      title: "Initial Consultation",
      description: "30-minute discovery call to understand your needs and objectives"
    },
    {
      title: "Proposal Refinement",
      description: "Detailed technical proposal with timeline and cost breakdown"
    },
    {
      title: "Kickoff",
      description: "Team introduction and project launch meeting"
    }
  ]}
/>
```

**Behavior:**
- **Horizontal**: Steps flow left-to-right in cards
- **Vertical**: Steps stack vertically (automatic on mobile)
- Numbered steps with consistent spacing
- Rounded corners using `--radius-s`

---

### FAQ

Accordion component for frequently asked questions.

**Props:**
```typescript
{
  items: Array<{
    question: string;        // Question text
    answer: string;          // Answer text
  }>;
}
```

**Usage:**
```tsx
<FAQ
  items={[
    {
      question: "What is your development process?",
      answer: "We follow Agile methodology with 2-week sprints, daily standups, and regular client demos."
    },
    {
      question: "How do you ensure code quality?",
      answer: "We use automated testing, code reviews, and continuous integration to maintain high quality standards."
    },
    {
      question: "What happens after project completion?",
      answer: "We provide 3 months of post-launch support including bug fixes, performance monitoring, and minor updates."
    }
  ]}
/>
```

**Styling:**
- Clean accordion with expand/collapse
- No plus icons (per design system rules)
- Reduced padding and no borders
- Answer text uses secondary color

---

## Layout Components

### LandingLayout

Page wrapper that includes header and footer.

**Props:**
```typescript
{
  children: React.ReactNode;   // Page content
}
```

**Usage:**
```tsx
export default function ProposalPage() {
  return (
    <LandingLayout>
      {/* All proposal content */}
    </LandingLayout>
  );
}
```

**Includes:**
- Automatic footer with Tailor Hub links
- Consistent page structure
- Responsive behavior

---

## Design System Reference

### Spacing Tokens

```css
/* Section Spacing */
--spacing-9xl: 124px;        /* Between major sections */
--gap-header-1: 56px;        /* Content after TitleSection */

/* Component Spacing */
--spacing-xl: 80px;
--spacing-l: 56px;
--spacing-m: 24px;
--spacing-s: 16px;
--spacing-xs: 8px;
```

### Typography Tokens

```css
/* Font Families */
--font-default: 'PP Mori';
--font-mono: 'PP Neue Montreal Mono';

/* Font Sizes */
--text-size-large: 40px;     /* Headlines */
--text-size-medium: 24px;    /* Section titles */
--text-size-small: 16px;     /* Body text */
--text-size-xsmall: 14px;    /* Small text, notes */

/* Line Heights */
--text-line-tight: 1.2;
--text-line-normal: 1.5;
--text-line-relaxed: 1.6;
```

### Color Tokens

```css
/* Text Colors */
--color-text-primary: #000;
--color-text-secondary: #666;
--color-text-invert: #fff;

/* Background Colors */
--color-bg-primary: #fff;
--color-neutral-100: #f5f5f5;
--color-neutral-200: #e5e5e5;
```

### Layout Tokens

```css
--layout-content-max: 1432px;
--spacing-page-x: 40px;
--spacing-page-y: 40px;
```

### Border Radius Tokens

```css
--radius-s: 16px;
--radius-card: 16px;
```

---

## Common Patterns

### Pattern 1: Proposal Content with Sidebar

```tsx
<div style={{ 
  display: "flex", 
  gap: "var(--spacing-xl)", 
  position: "relative" 
}}>
  <MenuSidebar autoDetectActive style={{ paddingTop: "var(--spacing-9xl)" }}>
    {/* Menu items */}
  </MenuSidebar>
  
  <div style={{ flex: 1 }}>
    {/* Content sections */}
  </div>
</div>
```

### Pattern 2: Section with Title

```tsx
<section id="technology" style={{ marginBottom: "var(--spacing-9xl)" }}>
  <TitleSection overheader="TECHNOLOGY" title="Our Tech Stack" />
  <div style={{ marginTop: "var(--gap-header-1)" }}>
    {/* Section content */}
  </div>
</section>
```

### Pattern 3: Grid of Cards

```tsx
<div style={{ 
  display: "grid", 
  gridTemplateColumns: "repeat(3, 1fr)", 
  gap: "var(--spacing-l)" 
}}>
  {items.map((item, index) => (
    <Card key={index} {...item} />
  ))}
</div>
```

---

## Accessibility Guidelines

- Always provide `alt` text for images
- Use semantic HTML (`<section>`, `<header>`, `<nav>`)
- Ensure sufficient color contrast
- Support keyboard navigation
- Include ARIA labels where needed
- Test with screen readers

---

## Responsive Behavior

- Content max-width: 1432px (centered)
- Grids collapse to single column on mobile
- MenuSidebar becomes mobile menu
- StepsFlow switches from horizontal to vertical
- Images scale proportionally

---

**For creating new proposals, see `HOW_TO_CREATE_PROPOSALS.md` and `CREATING_NEW_PROPOSAL.md`**
