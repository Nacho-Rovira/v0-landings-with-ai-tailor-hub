import type { Meta, StoryObj } from '@storybook/react'
import { BoxSection } from './BoxSection'

const meta = {
  title: 'Components/BoxSection',
  component: BoxSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'mobile'],
      description: 'Box section variant',
    },
    overheader: {
      control: 'text',
      description: 'Overheader text',
    },
    header: {
      control: 'text',
      description: 'Header/title text',
    },
    bodyText: {
      control: 'text',
      description: 'Main body text',
    },
    secondaryText: {
      control: 'text',
      description: 'Secondary text (bottom section)',
    },
    buttonLabel: {
      control: 'text',
      description: 'Button label',
    },
    imageSrc: {
      control: 'text',
      description: 'Image source URL',
    },
    imageAlt: {
      control: 'text',
      description: 'Image alt text',
    },
  },
} satisfies Meta<typeof BoxSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    overheader: 'S/ 01',
    header: 'PROJECT NAME',
    bodyText: 'Transform raw and hardly accesible data into actionable intelligence. With advanced AI models, we help you uncover patterns, predict outcomes, and drive smarter decision-making at every level of your organization.',
    secondaryText: 'Transform raw and hardly accesible data into actionable intelligence. With advanced AI models, we help you uncover patterns, predict outcomes, and drive smarter decision-making at every level of your organization.',
    buttonLabel: 'BUTTON',
    imageSrc: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=468&h=532&fit=crop',
  },
}

export const Mobile: Story = {
  args: {
    variant: 'mobile',
    overheader: 'S/ 01',
    header: 'PROJECT NAME',
    bodyText: 'Transform raw and hardly accesible data into actionable intelligence. With advanced AI models, we help you uncover patterns, predict outcomes, and drive smarter decision-making at every level of your organization.',
    secondaryText: 'Transform raw and hardly accesible data into actionable intelligence. With advanced AI models, we help you uncover patterns, predict outcomes, and drive smarter decision-making at every level of your organization.',
    buttonLabel: 'BUTTON',
    imageSrc: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=361&h=410&fit=crop',
  },
}

export const WithoutImage: Story = {
  args: {
    variant: 'default',
    overheader: 'S/ 02',
    header: 'ANOTHER PROJECT',
    bodyText: 'Transform raw and hardly accesible data into actionable intelligence.',
    secondaryText: 'With advanced AI models, we help you uncover patterns.',
    buttonLabel: 'LEARN MORE',
  },
}
