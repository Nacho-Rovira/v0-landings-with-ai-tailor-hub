# Creating a New Proposal - Step by Step

## Step 1: Gather Information

Before creating the configuration, collect:

- [ ] Client name and project title
- [ ] Project description and key concepts (3-5 words/phrases)
- [ ] Challenge/context background
- [ ] Project objectives (3-5 bullet points)
- [ ] Approach/methodology description
- [ ] Technology stack requirements
- [ ] Project phases (typically 3-7 phases)
- [ ] Budget breakdown
- [ ] Team members (typically 4-10 people)
- [ ] Relevant case studies (3-5 projects)
- [ ] FAQ content (5-10 questions)
- [ ] Client logo or hero image

## Step 2: Create Configuration File

1. Copy `config/proposals/tailor-hub-proposal.json` to `config/proposals/[client-name]-proposal.json`
2. Replace all template content with your client's information
3. Update the `slug` field to match your URL structure (e.g., "acme-proposal")
4. Update the `clientName` field with the client's name
5. Adjust the number of phases, team members, and budget items as needed

## Step 3: Select Images

Choose appropriate placeholder images from `/images/design-mode/`:

**Hero Image** - Main proposal header:
- Use `HERO.png` for generic/tech projects
- Use `VRAI(1).jpeg` for e-commerce/luxury
- Use `Dormakaba.png` for enterprise/B2B

**Services Images** (if including services section):
- `desarrollo%20de%20software(2).jpeg` - Development services
- `auditoria%20y%20formacion(2).jpeg` - AI/auditing services
- `Design%20systems.png` - Design services
- `Desarrollor%20accesible(1).jpeg` - Accessibility services

**Team Photos**:
- Use `/placeholder.svg?height=400&width=400&query=professional [role] portrait`
- Replace `[role]` with: "tech lead", "designer", "developer", etc.

**Case Study Images**:
- Use client-specific images if available
- Use `Dormakaba.png` or `Cargill.png` as placeholders

## Step 4: Write Content

### Hero Section
- **Concepts**: 3-5 key technology/business concepts (e.g., "AI-POWERED", "CLOUD-NATIVE")
- **Header**: One-line project description (50-80 characters)
- **Overheader**: "A PROPOSAL FOR [CLIENT NAME]"

### Body Sections

**Challenge/Context** (2-3 paragraphs):
- Describe the client's current situation
- Explain market challenges or business needs
- Set the stage for why this project matters

**Objectives** (1 intro paragraph + 3-5 numbered objectives):
- Lead with overall goal
- List specific, measurable objectives
- Focus on business value, not technical details

**Our Approach** (1 intro paragraph + 3-5 methodology points):
- Explain Tailor Hub's process
- Highlight differentiators (agile, design-first, quality, etc.)
- Build confidence in your capability

### Technology Section

Choose format based on project complexity:

**Simple Project** - Use chips:
\`\`\`json
"technology": {
  "description": "Brief tech stack overview...",
  "chips": ["React 18", "Next.js 15", "TypeScript", "Node.js", "PostgreSQL"]
}
\`\`\`

**Complex Project** - Use categories:
\`\`\`json
"technology": {
  "description": "Detailed stack explanation...",
  "categories": [
    {
      "title": "Front-end & Mobile",
      "technologies": ["REACT JS", "NEXT JS", "TYPESCRIPT", "TAILWIND CSS"]
    },
    {
      "title": "Back-end",
      "technologies": ["NODE", "EXPRESS", "POSTGRESQL", "NESTJS"]
    }
  ]
}
\`\`\`

### Phases

Structure each phase with:
- **Number**: "01", "02", etc.
- **Title**: Clear phase name (e.g., "DISCOVERY & PLANNING")
- **Description**: 1-sentence summary
- **Duration**: Weeks or months (e.g., "4 WEEKS")
- **Deliverables**: 3-7 specific outputs

Typical phase structure:
1. Discovery/Planning (2-4 weeks)
2. Design (3-6 weeks)
3. Development (6-12 weeks)
4. Testing/QA (2-4 weeks)
5. Launch/Support (1-3 weeks)

### Budget

Break down by phase or service type:
- Discovery & Planning: 10-15%
- Design & UX: 15-20%
- Development: 50-60%
- Testing & QA: 10-15%
- Deployment & Support: 5-10%

Include payment terms in notes:
- Payment schedule (e.g., 30/40/30 split)
- Validity period
- What's included (support, revisions)
- What's extra (additional features, ongoing maintenance)

### Team

For each member include:
- Name and title
- Photo (400x400 card, 600x600 modal)
- Bio (2-3 paragraphs in modal)
- Languages (with proficiency levels)
- Skills (comma-separated technology list)

Choose team size based on project:
- Small projects (€30-60K): 4-6 members
- Medium projects (€60-150K): 6-8 members
- Large projects (€150K+): 8-12 members

### Case Studies

Select 3-5 relevant projects:
- At least one from same industry
- At least one with similar tech stack
- At least one with similar scale
- Include metrics (users, revenue, performance)
- Include client quote if available

### FAQ

Cover common concerns:
1. Timeline/delivery schedule
2. Post-launch support
3. Scalability/future growth
4. Data security/compliance
5. Team involvement/communication
6. Payment terms/flexibility
7. Change requests/scope changes
8. Technology choices/rationale

## Step 5: Create Page Component

Create `app/[client-name]-proposal/page.tsx`:

\`\`\`tsx
import proposalConfig from "@/config/proposals/[client-name]-proposal.json"
// Import and use components based on your config structure
// Reference tailor-hub-proposal/page.tsx as a complete example
\`\`\`

## Step 6: Review & Refine

- [ ] Preview on desktop, tablet, mobile
- [ ] Check all links and anchors work
- [ ] Verify all images load correctly
- [ ] Read through all content for typos
- [ ] Ensure budget calculations are correct
- [ ] Validate timeline adds up properly
- [ ] Test modal interactions (team, case studies)
- [ ] Check FAQ accordion functionality
- [ ] Review with stakeholders

## Step 7: Share with Client

Options:
1. **Live Link**: Share `https://yoursite.com/[client-name]-proposal`
2. **PDF Export**: Use browser print to PDF (Cmd/Ctrl+P)
3. **Video Walkthrough**: Record Loom explaining key sections

## Common Pitches

**Audit/Review Projects** (like VRAI):
- Focus on analysis, assessment, recommendations
- 3-5 phases: Audit → Analysis → Planning → Implementation → Support
- Smaller team (4-6 people)
- Include security/performance focus

**New Software Development** (like Tailor Hub):
- Full product development lifecycle
- 5-7 phases: Discovery → Design → Core Dev → Advanced Features → Launch
- Larger team (8-12 people)
- Emphasize scalability and future growth

**Website/Landing Pages**:
- Fast turnaround (4-8 weeks)
- 3-4 phases: Discovery → Design → Development → Launch
- Small team (3-5 people)
- Focus on conversion, SEO, performance

**AI/Innovation Projects**:
- Experimental/exploratory phase upfront
- 4-6 phases: Research → POC → Development → Integration → Optimization
- Specialized team (AI engineers, data scientists)
- Highlight cutting-edge technology
