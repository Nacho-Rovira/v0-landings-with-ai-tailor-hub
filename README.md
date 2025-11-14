# Tailor Hub Proposal Generator

This workspace is designed to create professional, on-brand proposals for Tailor Hub clients.

## 🚀 Quick Start

1. **Duplicate this chat** to start fresh
2. **Use a prompt** to create your proposal (see examples on home page)
3. **Publish** only your new proposal to production

## 📝 Creating Your Proposal

Visit the home page to see example prompts for:
- Full development proposals with budget
- Introduction proposals without budget  
- Custom hospitality, banking, or e-commerce proposals

## 📚 Documentation

- **[HOW_TO_CREATE_PROPOSALS.md](docs/HOW_TO_CREATE_PROPOSALS.md)** - Prompt examples and best practices
- **[CREATING_NEW_PROPOSAL.md](docs/CREATING_NEW_PROPOSAL.md)** - Step-by-step creation guide  
- **[PROPOSAL_TEMPLATE_GUIDE.md](docs/PROPOSAL_TEMPLATE_GUIDE.md)** - Component reference

## 🎨 Design System

The workspace includes:
- **Components** - Pre-built React components (`/components`)
- **Tokens** - Semantic design tokens (`/tokens`)
- **Layouts** - Proposal layouts and structures
- **Examples** - Reference proposals (barcelo, clikalia, santander, vrai)

## 📁 What's Included

### Active Files (Publish These)
- Your new proposal: `/app/[client-name]-proposal/`
- Config: `/config/proposals/[client-name]-proposal.json`

### Reference Only (Do Not Publish)
- `/app/barcelo-proposal/` - Hospitality example
- `/app/clikalia-proposal/` - Real estate example
- `/app/santander-proposal/` - Banking example
- `/app/vrai-proposal/` - Luxury e-commerce example

### Design System (Keep)
- `/components/` - Reusable React components
- `/tokens/` - Design tokens (colors, spacing, typography)
- `/docs/` - Complete documentation

## 🎯 Workflow

1. **Create** - Use a prompt to generate your proposal
2. **Review** - Check spacing, sections, content
3. **Refine** - Make adjustments with follow-up prompts
4. **Publish** - Deploy only your new proposal route

## 🔧 Tech Stack

- **Next.js 16** - App Router with Server Components
- **TypeScript** - Type-safe development
- **Design Tokens** - Semantic CSS variables
- **Components** - Modular, reusable React components

## 📦 Deployment

When publishing, only deploy:
- Your new proposal page
- Design system components
- Shared layouts and utilities

Example proposals are for reference and should not be published to production.

## Section Display Rules

All proposals follow these TitleSection rules:
- **FAQ Section** - Display overheader only, no title
- **Team Section** - Display overheader only, no title
- **ISO Section** - Display overheader only, no title
- **Services Section** - Display overheader only, no title

## Spacing Guidelines

- Section gaps: `var(--spacing-9xl)` (124px)
- Content after TitleSection: `var(--gap-header-1)` (56px)
- This ensures consistent spacing whether TitleSection has both overheader + title or just overheader

---

**Tailor Hub** - Part of Modulor Group  
Minimal. Precise. Elegant. Editorial.
\`\`\`

\`\`\`plaintext file=".vercelignore"
# Example proposals - reference only, do not deploy
app/barcelo-proposal/
app/clikalia-proposal/
app/santander-proposal/
app/vrai-proposal/
app/tailor-hub-proposal/
app/fintech-proposal/
app/proposal/
app/proposal-template/
app/tailor-hub-overview/

# Keep design system and infrastructure
!components/
!tokens/
!config/
!docs/
