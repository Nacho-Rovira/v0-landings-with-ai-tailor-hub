import type React from "react"
export interface ProposalConfig {
  // Basic identification
  slug: string // URL slug for the proposal (e.g., "clikalia-proposal")
  clientName: string // Client company name

  // Header & Hero Section
  highlight: {
    concepts: string[] // e.g., ["REAL ESTATE <span> PLATFORM", "CLOUD-NATIVE <span> ARCHITECTURE"]
    header: string // Main headline
  }
  headerBox: {
    overheader: string // e.g., "A PROPOSAL FOR CLIKALIA"
    header: string // Subtitle/description
    buttonLabel: string // CTA button text
  }
  heroImage: {
    src: string // Image URL or path
    alt: string // Alt text
  }

  // Menu sidebar navigation
  menuItems: Array<{
    href: string // anchor link (e.g., "#challenge")
    number: number // Menu item number
    label: string // Display text (e.g., "CHALLENGE / CONTEXT")
  }>

  // Proposal body content sections
  bodySections: Array<{
    id: string // anchor id (e.g., "challenge")
    title: string // Section title for sidebar
    paragraphs: string[] // Array of paragraph texts (can include HTML)
    image?: {
      src: string
      alt: string
    }
  }>

  // Technology & Architecture
  technology?: {
    description?: string // Optional description text
    // Option A: Simple chip list
    chips?: string[]
    // Option B: Categorized boxes (TechBox component)
    categories?: Array<{
      title: string
      technologies: string[]
    }>
  }

  // Roadmap & Phases
  phases: Array<{
    number: string // e.g., "01"
    title: string
    description: string
    duration: string // e.g., "3 WEEKS"
    deliverables: string[]
  }>

  // Budget & Conditions
  budget: {
    items: Array<{
      category: string
      description: string
      amount: string
    }>
    total: string
    notes: string[]
  }

  // Infrastructure & Maintenance (Optional)
  infraMaintenance?: {
    description: string
    table: {
      columns: string[]
      rows: Array<{
        label: string
        tooltip?: string
        content: React.ReactNode
      }>
    }
    footerText?: string
    monthlySupportBudget?: {
      items: Array<{
        category: string
        description: string
        amount: string
      }>
      notes: string[]
    }
  }

  // Services Section (Optional)
  services?: Array<{
    overheader: string
    header: string
    bodyText: string
    imageSrc: string
    imageAlt: string
  }>

  // Team Section
  team: {
    overheader: string
    title?: string
    members: Array<{
      name: string
      title: string
      imageSrc: string
      imageAlt: string
      modalData: {
        name: string
        title: string
        imageSrc: string
        imageAlt: string
        bio: string[]
        languages: string
        skills: string
      }
    }>
  }

  // Case Studies
  caseStudies: Array<{
    category: string
    title: string
    imageSrc: string
    imageAlt: string
    modalData: {
      title: string
      category: string
      imageSrc: string
      imageAlt: string
      sections: Array<{
        title: string
        paragraphs: string[]
      }>
      insights: Array<{
        value: string
        label: string
      }>
      quotes: Array<{
        text: string
        author: string
      }>
    }
  }>

  // FAQ Section
  faq: Array<{
    question: string
    answer: string
  }>

  // Partners Section (Optional)
  partners?: {
    concepts: string[]
    items: string[]
  }

  // ISO Certification (Optional)
  isoCertification?: {
    overheader: string
    header: string
    bodyText: string
    imageSrc: string
    imageAlt: string
    certificationBadgeSrc?: string
    certificationBadgeAlt?: string
  }
}
