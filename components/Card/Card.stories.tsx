import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'mobile'],
      description: 'Card variant',
    },
    category: {
      control: 'text',
      description: 'Category/overheader text',
    },
    title: {
      control: 'text',
      description: 'Card title',
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
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    category: 'SOFTWARE AND AI',
    title: 'PROJECT NAME',
    imageSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=440&fit=crop',
  },
}

export const Mobile: Story = {
  args: {
    variant: 'mobile',
    category: 'SOFTWARE AND AI',
    title: 'PROJECT NAME',
    imageSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=440&fit=crop',
  },
}

export const WithoutImage: Story = {
  args: {
    variant: 'default',
    category: 'SOFTWARE AND AI',
    title: 'PROJECT NAME',
  },
}

export const CustomContent: Story = {
  args: {
    variant: 'default',
    category: 'WEB DEVELOPMENT',
    title: 'E-COMMERCE PLATFORM',
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=440&fit=crop',
  },
}

