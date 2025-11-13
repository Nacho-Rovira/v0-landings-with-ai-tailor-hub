# Proposal Template System Guide

## Overview

This system provides a flexible, type-safe way to create new client proposals using a JSON configuration file and reusable React components following Tailor Hub's design system.

## Quick Start

To create a new proposal:

1. **Create a JSON configuration file** in `config/proposals/[client-name]-proposal.json`
2. **Copy the template structure** from `tailor-hub-proposal.json` as a base reference
3. **Fill in your client-specific content**
4. **Create a new page** at `app/[client-name]-proposal/page.tsx` that imports and uses the config
5. **Preview** at `/[client-name]-proposal`

## Available Placeholder Images

Use these image paths in your configurations (located in `/images/design-mode/`):

- `HERO.png` - Generic hero/header images
- `desarrollo%20de%20software(2).jpeg` - Software development services
- `auditoria%20y%20formacion(2).jpeg` - AI/auditing services
- `VRAI(1).jpeg` - E-commerce/luxury product imagery
- `Desarrollor%20accesible(1).jpeg` - Accessibility/inclusive design
- `Design%20systems.png` - Design systems services
- `ISO(2).png` - ISO certification imagery
- `Modo_de_aislamiento.webp` - ISO badge/icon
- `Cargill.png` - Client case study example
- `Dormakaba.png` - Client case study example

For team member photos, use: `/placeholder.svg?height=400&width=400&query=professional portrait`

## Design System Tokens

All components use semantic design tokens from `/tokens/tokens.css`:

### Spacing
- `--spacing-xs` (8px) through `--spacing-9xl` (124px)
- Section gaps: `--spacing-9xl` (124px between major sections)
- Content spacing: `--spacing-xl`, `--spacing-2xl`

### Colors
- Text: `--color-text-primary`, `--color-text-secondary`, `--color-text-invert`
- Backgrounds: `--color-neutral-00` (white) through `--color-neutral-900` (black)
- Borders: `--color-neutral-200`, `--color-neutral-300`

### Typography
- Font families: `--font-default` (PP Mori), `--font-mono` (PP Neue Montreal Mono)
- Sizes: `--text-size-xsmall`, `--text-size-small`, `--text-size-large`
- Line heights: `--text-line-xsmall`, `--text-line-small`, `--text-line-large`

### Layout
- Max content width: `--layout-content-max` (1432px)
- Page padding: `--spacing-page-x`, `--spacing-page-y` (40px)
- Border radius: `--radius-card`, `--radius-s`

## Configuration Structure

### Required Sections

1. **Header & Hero** - Client name, headline, CTA
2. **Menu Items** - Sidebar navigation structure
3. **Body Sections** - Main proposal content (Challenge, Objectives, Approach)
4. **Phases** - Project roadmap and timeline
5. **Budget** - Pricing breakdown and payment terms
6. **Team** - Team member cards with modal details
7. **Case Studies** - Relevant project examples
8. **FAQ** - Common questions and answers

### Optional Sections

- **Technology** - Tech stack (chips or categorized boxes)
- **Services** - Tailor Hub service offerings
- **Infrastructure & Maintenance** - Ongoing support details
- **Partners** - Official partner logos/names
- **ISO Certification** - Security certification showcase

## Components Used

- `HighlightSection` - Hero header with animated concepts
- `HeaderBox` - Proposal title and CTA button
- `MenuSidebar` - Sticky navigation menu
- `TitleSection` - Section headers with overheaders
- `BodyText` - Formatted paragraph content
- `BoxSection` - Image + content boxes for services
- `TimelineSection` - Phase/roadmap visualization
- `BudgetSection` - Budget table with totals
- `TechBox` - Categorized technology display
- `Chip` - Individual technology tags
- `TeamSection` - Team member grid with modals
- `CaseStudiesSection` - Project showcase with modals
- `FAQ` - Accordion-style Q&A
- `Highlight2Section` - Partners/certification display

## Best Practices

1. **Keep it Consistent** - Use the same structure across all proposals
2. **Use Semantic Tokens** - Never hardcode colors, spacing, or fonts
3. **Optimize Images** - Compress images before adding to `/images/design-mode/`
4. **Write Clear Content** - Focus on client value, not technical jargon
5. **Test Responsiveness** - Preview on mobile, tablet, and desktop
6. **Version Control** - Keep config files in Git for change tracking

## Example Workflow

1. Sales team wins a new client (e.g., "Acme Corp")
2. Create `config/proposals/acme-proposal.json`
3. Fill in client details, project scope, phases, budget
4. Select relevant case studies and team members
5. Create `app/acme-proposal/page.tsx` importing the config
6. Review with stakeholders at `/acme-proposal`
7. Export to PDF or share live link with client
8. Iterate based on client feedback

## Support

For questions or assistance with the proposal system:
- Review existing proposals: `clikalia-proposal`, `vrai-proposal`, `proposal-template`
- Reference the base template: `tailor-hub-proposal.json`
- Check component documentation in `/components/*/README.md`
- Reference design tokens in `/tokens/tokens.css`
