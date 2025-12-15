# How to Create New Proposals - Prompt Guide

This guide helps designers create new proposals efficiently using this chat. Follow these best practices to ensure consistency with the Tailor Hub design system.

---

## Essential Information to Provide

When requesting a new proposal, always include:

### 1. **Client Name & Industry**
- Company name and sector
- Examples: "Santander - Banking", "Marriott - Hospitality", "Zara - Fashion Retail"

### 2. **Project Focus**
What type of project are you proposing?
- Digital transformation
- Internal tools & employee platforms
- Customer-facing applications
- E-commerce platform
- Mobile app development
- AI/ML solutions
- Cloud migration

### 3. **Proposal Type**
- **Full proposal with budget** - Complete development project with pricing
- **Introduction proposal** - First contact, no budget (showcase capabilities)
- **Audit/Consulting proposal** - Assessment and recommendations
- **Support/Maintenance proposal** - Ongoing services

### 4. **Sections to Include**
Specify which sections you need:

**Standard Sections** (recommended for all proposals):
- Challenge/Context
- Our Approach/Capabilities
- Technology & Architecture
- Roadmap/Phases

**Optional Sections** (choose based on proposal type):
- Budget (with itemized breakdown)
- Team (specify number of members)
- Case Studies (mention relevant industries)
- Services Overview
- Partners
- ISO Certification
- Infrastructure & Support
- FAQ
- Next Steps

---

## Example Prompts

### Example 1: Full Development Proposal

```
Create a new proposal for Zara (fashion retail e-commerce).

Project: Omnichannel e-commerce platform with inventory management 
and POS integration across 500+ stores.

Include:
- Challenge section (fragmented systems, poor customer experience)
- Our approach (cloud-native, microservices architecture)
- Technology stack (React, Next.js, Node.js, PostgreSQL, AWS)
- 6-month roadmap with 4 phases
- Detailed budget around €350,000
- Team of 5 (2 frontend, 2 backend, 1 DevOps)
- 2-3 e-commerce case studies
- Services section
- Partners section
- ISO certification
- FAQ with 5-6 questions
```

### Example 2: Introduction Proposal (No Budget)

```
Create an introduction proposal for BBVA Bank.

Focus: Internal tools and employee platforms for their operations team.
This is our first contact, so no budget needed.

Include:
- Context/Opportunity (banking digital transformation challenges)
- Our Capabilities (security, scalability, financial services experience)
- How We Work (agile methodology, ISO 27001 compliance)
- Technology & Architecture (describe our tech stack)
- Services overview
- Team presentation (6 members with banking experience)
- Banking/fintech case studies
- Next Steps (horizontal flow component)
- Get in touch CTA
- FAQ

Emphasize: ISO 27001 certification, security, and banking expertise.
```

### Example 3: Hospitality Industry

```
Create a proposal for Marriott Hotels.

Project: Guest experience platform with mobile check-in, 
room service ordering, and loyalty program integration.

Timeline: 8 months, 5 phases
Budget: €420,000

Include:
- Challenge (outdated guest systems, low digital adoption)
- Solution approach (mobile-first, cloud-native)
- Technology with categorized boxes (Frontend, Backend, Data, Infrastructure)
- Detailed roadmap with deliverables per phase
- Budget breakdown by phase
- Team of 6 (mention hospitality experience)
- Hospitality case studies
- Infrastructure & Support section (ongoing managed services)
- Partners
- ISO
- FAQ
```

### Example 4: AI/ML Project

```
Create a proposal for Carrefour (retail).

Project: AI-powered inventory optimization and demand forecasting 
system for 200+ supermarkets.

Include:
- Challenge section (inventory waste, stockouts, poor forecasting)
- Our AI/ML capabilities
- Technology stack (emphasize Python, TensorFlow, Azure OpenAI, Data pipelines)
- 4-phase roadmap over 6 months
- Budget: €280,000
- Team with data scientists and ML engineers
- Retail/AI case studies
- Services
- ISO certification
- FAQ

Emphasize: AI SDK, machine learning expertise, and data security.
```

---

## What Gets Generated Automatically

When you request a proposal, the system creates:

### Files Created
- **Page component**: `app/[client-name]-proposal/page.tsx`
- **Configuration**: `config/proposals/[client-name]-proposal.json`

### Design System (Applied Automatically)
- **Colors**: Semantic tokens from design system
- **Typography**: 
  - Body text: PP Mori
  - Monospace: PP Neue Montreal Mono
- **Spacing**:
  - Section-to-section gap: `--spacing-9xl` (124px)
  - Content after TitleSection: `--gap-header-1` (56px)
- **Layout**: Max width 1432px, centered with 40px padding

### Components Used
- `HeaderBox` - Hero CTA section
- `HighlightSection` - Hero image
- `MenuSidebar` - Sticky navigation with scroll detection
- `TitleSection` - Section headers
- `BodyText` - Text content
- `TechBox` - Technology categorization
- `TimelineSection` - Project phases/roadmap
- `BudgetSection` - Pricing breakdown
- `BoxSection` - Services, ISO certification
- `TeamCard` + `TeamMemberModal` - Team presentation
- `ProjectCard` + `ProjectModal` - Case studies
- `Highlight2Section` - Partners
- `FAQ` - Accordion for questions
- `StepsFlow` - Next steps (horizontal flow)
- `Footer` - Contact links

### Section Display Rules (Automatic)

These sections **always** display overheader only (no title):
- FAQ
- Team
- ISO Certification
- Services

Other sections can have both overheader and title based on content needs.

---

## Tips for Better Results

### 1. Be Specific About Budget
❌ "Include budget"
✅ "Budget around €350,000 with itemized breakdown by phase"

### 2. Describe Team Composition
❌ "Include team section"
✅ "Team of 5: 2 senior frontend developers, 2 backend engineers, 1 DevOps specialist with banking experience"

### 3. Reference Similar Proposals
❌ "Make it nice"
✅ "Follow the Barceló proposal structure but focus on banking"

### 4. Specify Timeline Details
❌ "Add roadmap"
✅ "5 phases over 8 months: Discovery (4 weeks), MVP (8 weeks), Development (12 weeks), Testing (4 weeks), Launch (2 weeks)"

### 5. Note Special Requirements
- "Emphasize ISO 27001 security certification"
- "Focus on scalability to handle 1M+ users"
- "Highlight PMS and CRM integrations"
- "Include sustainability/green tech messaging"

### 6. Provide Context About Client
- "They currently use legacy systems from 2010"
- "Main competitor is using modern React stack"
- "They care deeply about accessibility and WCAG compliance"

---

## Follow-Up Refinements

After the initial proposal is generated, you can refine it with follow-up prompts:

### Content Changes
```
"Add a sustainability section after Technology"
"Update the challenge section to emphasize data privacy concerns"
"Add 2 more team members (1 QA engineer, 1 UX designer)"
```

### Structure Changes
```
"Change the roadmap from 5 phases to 4 phases"
"Split the Technology section to show Frontend and Backend separately"
"Move the Partners section before the Team section"
```

### Budget Adjustments
```
"Increase the total budget to €400,000"
"Add a monthly support budget of €15,000"
"Break down the budget by functional area instead of by phase"
```

### Case Studies
```
"Replace one case study with a banking project example"
"Add a case study about a scalability challenge we solved"
```

### Spacing/Design Tweaks
```
"Increase the gap between sections"
"Make the hero image taller"
"Use compact BoxSection variant for services"
```

---

## Common Scenarios & Templates

### Scenario 1: Banking/Financial Services
**Key points to emphasize:**
- ISO 27001 certification
- Security and compliance
- Data encryption
- PCI DSS compliance
- Real-time transaction processing
- Regulatory reporting

**Example prompt:**
```
Create a proposal for [Bank Name]. Focus on security, 
compliance, and scalability. Include ISO certification 
section prominently. Team should have fintech experience.
```

### Scenario 2: E-commerce/Retail
**Key points to emphasize:**
- Omnichannel experience
- Inventory management
- Payment integrations
- High performance/scalability
- Mobile-first approach
- Analytics and reporting

**Example prompt:**
```
Create a proposal for [Retail Brand]. Emphasize 
mobile-first design, payment integrations (Stripe), 
and scalability for Black Friday traffic spikes.
```

### Scenario 3: Hospitality/Travel
**Key points to emphasize:**
- Guest experience
- Multi-property management
- PMS integration
- Mobile apps
- Loyalty programs
- Real-time inventory

**Example prompt:**
```
Create a proposal for [Hotel Chain]. Focus on guest 
experience platforms, PMS integration, and mobile apps 
for contactless check-in/checkout.
```

### Scenario 4: Healthcare/MedTech
**Key points to emphasize:**
- HIPAA compliance
- Data security
- Patient privacy
- EHR integration
- Telemedicine capabilities
- ISO 27001 certification

**Example prompt:**
```
Create a proposal for [Healthcare Provider]. Emphasize 
HIPAA compliance, patient data security, and EHR integration. 
Team should mention healthcare experience.
```

---

## Design System Reference

### Typography
- **Headings**: Large, PP Mori, tight line-height
- **Body text**: Medium, PP Mori, relaxed line-height (1.5-1.6)
- **Overheaders**: Small, PP Neue Montreal Mono, uppercase, letter-spacing
- **Use `<strong>`** for weight 500 (medium emphasis)

### Colors
- Use semantic tokens only (no hard-coded hex values)
- `--color-text-primary` - Main body text
- `--color-text-secondary` - Supporting text
- `--color-neutral-*` - Backgrounds, borders

### Spacing Tokens
- `--spacing-9xl` (124px) - Section-to-section gaps
- `--gap-header-1` (56px) - Content after TitleSection
- `--spacing-xl` - Large internal spacing
- `--spacing-l` - Medium internal spacing
- `--spacing-m` - Base rhythm (24px)

### Corner Radius
- `--radius-s` (16px) - Cards, boxes, containers
- `--radius-card` - Alternative card radius

### Images
Available placeholder images in `/images/design-mode/`:
- `HERO.png` - Generic hero
- `desarrollo de software(2).jpeg` - Software development
- `auditoria y formacion(2).jpeg` - AI/Auditing
- `VRAI(1).jpeg` - E-commerce/Luxury
- `Desarrollor accesible(1).jpeg` - Accessibility
- `Design systems.png` - Design systems
- `ISO(2).png` - ISO certification

---

## Quality Checklist

Before finalizing a proposal, verify:

✅ **Content**
- [ ] Client name and industry context are accurate
- [ ] Challenge/opportunity is specific to their business
- [ ] Technology stack matches project requirements
- [ ] Budget aligns with project scope
- [ ] Team composition makes sense for project
- [ ] Case studies are relevant to client's industry

✅ **Structure**
- [ ] Hero section with HeaderBox and image
- [ ] Sidebar menu with all sections
- [ ] Consistent section spacing (--spacing-9xl)
- [ ] FAQ is last section before footer
- [ ] Footer includes all Tailor Hub links

✅ **Design System**
- [ ] No hard-coded colors (use tokens)
- [ ] Spacing uses tokens, not arbitrary values
- [ ] Typography follows PP Mori / PP Neue Montreal Mono
- [ ] TitleSection spacing is consistent (--gap-header-1)
- [ ] FAQ, Team, Services, ISO use overheader only

✅ **Components**
- [ ] All images have alt text
- [ ] Buttons have proper hover states
- [ ] Menu sidebar highlights active section
- [ ] Modals work for team and case studies
- [ ] FAQ accordion expands/collapses properly

---

## Troubleshooting

### Issue: Sections look too cramped
**Solution:** Check that section gaps use `--spacing-9xl` (124px)

### Issue: TitleSection spacing is inconsistent
**Solution:** Content after TitleSection should use `marginTop: "var(--gap-header-1)"`

### Issue: Menu sidebar not highlighting
**Solution:** Ensure sections have proper `id` attributes matching menu hrefs

### Issue: Images not displaying
**Solution:** Verify image paths use `/images/design-mode/` prefix

### Issue: Spacing doesn't match design system
**Solution:** Use tokens from `tokens/tokens.css`, avoid arbitrary values

---

## Need Help?

- **Documentation**: Check `/docs/CREATING_NEW_PROPOSAL.md` for detailed guide
- **Components**: See `/docs/PROPOSAL_TEMPLATE_GUIDE.md` for component reference
- **Examples**: Review existing proposals in `/app/*-proposal/page.tsx`
- **Config**: Check `/config/proposals/*.json` for structure examples

---

**Remember**: The system handles design system consistency automatically. Focus on providing clear, specific content requirements for the best results.
