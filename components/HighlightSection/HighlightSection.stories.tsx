import type { Meta, StoryObj } from '@storybook/react'
import { HighlightSection } from './HighlightSection'

const meta = {
  title: 'Components/HighlightSection',
  component: HighlightSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    concepts: {
      control: 'object',
      description: 'Array of concept items to display',
    },
    header: {
      control: 'text',
      description: 'Main header text',
    },
  },
} satisfies Meta<typeof HighlightSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    concepts: ['MENDESALTAREN', 'MINIMUNRUN', 'NO CODE HACKERS', 'MITO'],
    header: 'We build advanced tech solutions to accelerate and optimize your business needs.',
  },
}

export const ThreeConcepts: Story = {
  args: {
    concepts: ['AI POWERED', 'SCALABLE', 'SECURE'],
    header: 'Building the future of enterprise software with cutting-edge technology.',
  },
}

export const FiveConcepts: Story = {
  args: {
    concepts: ['INNOVATION', 'RELIABILITY', 'PERFORMANCE', 'SECURITY', 'SCALABILITY'],
    header: 'Comprehensive solutions designed to meet your most demanding requirements.',
  },
}
