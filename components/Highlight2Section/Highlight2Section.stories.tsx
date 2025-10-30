import type { Meta, StoryObj } from "@storybook/react"
import { Highlight2Section } from "./Highlight2Section"

const meta = {
  title: "Components/Highlight2Section",
  component: Highlight2Section,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Highlight2Section>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    overheaderLeft: "OFICIAL",
    overheaderRight: "PARTNERS",
    items: ["CONTENTFUL", "AWS", "MICROSOFT AI CLOUD PARTNER", "SHOPIFY PARTNERS", "NETLIFY", ""],
  },
}

export const CustomContent: Story = {
  args: {
    overheaderLeft: "TECHNOLOGY",
    overheaderRight: "PLATFORMS",
    items: ["REACT", "NEXT.JS", "TYPESCRIPT", "NODE.JS", "VERCEL", "TAILWIND CSS"],
  },
}
