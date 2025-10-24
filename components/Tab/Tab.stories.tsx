import type { Meta, StoryObj } from '@storybook/react'
import { Tab } from './Tab'

const meta = {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Tab label text',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'selected'],
      description: 'Tab state',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
    },
  },
} satisfies Meta<typeof Tab>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'TAB',
    state: 'default',
  },
}

export const Hover: Story = {
  args: {
    label: 'TAB',
    state: 'hover',
  },
}

export const Selected: Story = {
  args: {
    label: 'TAB',
    state: 'selected',
  },
}

export const CustomLabel: Story = {
  args: {
    label: 'CUSTOM TAB',
    state: 'default',
  },
}

export const Interactive: Story = {
  args: {
    label: 'CLICK ME',
    state: 'default',
    onClick: () => alert('Tab clicked!'),
  },
}
