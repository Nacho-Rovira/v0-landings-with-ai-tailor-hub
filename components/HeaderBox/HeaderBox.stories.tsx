import type { Meta, StoryObj } from '@storybook/react'
import { HeaderBox } from './HeaderBox'

const meta = {
  title: 'Components/HeaderBox',
  component: HeaderBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    overheader: {
      control: 'text',
      description: 'Overheader text (label)',
    },
    header: {
      control: 'text',
      description: 'Header text (h2)',
    },
    buttonLabel: {
      control: 'text',
      description: 'Button label',
    },
  },
} satisfies Meta<typeof HeaderBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    overheader: 'WORK WITH TAILOR',
    header: 'We are a Madrid-based global company. We believe giving our teams the autonomy to work wherever they want delivers the best outcomes.',
    buttonLabel: 'SEND YOUR CV',
  },
}

export const CustomCTA: Story = {
  args: {
    overheader: 'GET IN TOUCH',
    header: 'Ready to transform your business with cutting-edge AI and software solutions?',
    buttonLabel: 'CONTACT US',
  },
}

export const JoinTeam: Story = {
  args: {
    overheader: 'JOIN OUR TEAM',
    header: 'We are always looking for talented engineers, designers, and data scientists to join our growing team.',
    buttonLabel: 'VIEW OPPORTUNITIES',
  },
}

