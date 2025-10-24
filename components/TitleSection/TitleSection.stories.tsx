import type { Meta, StoryObj } from '@storybook/react'
import { TitleSection } from './TitleSection'

const meta = {
  title: 'Components/TitleSection',
  component: TitleSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    overheader: {
      control: 'text',
      description: 'Overheader text (small label above title)',
    },
    title: {
      control: 'text',
      description: 'Main title/header text',
    },
    paragraph: {
      control: 'text',
      description: 'Paragraph text',
    },
  },
} satisfies Meta<typeof TitleSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    overheader: 'OVERHEADER',
    title: 'MAIN TITLE',
    paragraph: 'This is a paragraph that provides additional context and information about the section. It has a maximum width of 816px and is left-aligned.',
  },
}

export const WithLongTitle: Story = {
  args: {
    overheader: 'SERVICES',
    title: 'WE BUILD INTELLIGENT SYSTEMS THAT TRANSFORM YOUR BUSINESS',
    paragraph: 'Our team of expert engineers and data scientists work with you to create custom AI solutions that drive real business value and competitive advantage.',
  },
}

export const WithoutOverheader: Story = {
  args: {
    title: 'SIMPLE TITLE SECTION',
    paragraph: 'Sometimes you don\'t need an overheader, just a clean title and description.',
  },
}

export const WithoutParagraph: Story = {
  args: {
    overheader: 'SECTION 01',
    title: 'TITLE ONLY',
  },
}
