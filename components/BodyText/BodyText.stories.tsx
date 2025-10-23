import type { Meta, StoryObj } from '@storybook/react'
import { BodyText } from './BodyText'

const meta = {
  title: 'Components/BodyText',
  component: BodyText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    sections: {
      control: 'object',
      description: 'Array of text sections',
    },
  },
} satisfies Meta<typeof BodyText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    sections: [
      {
        title: 'THE CHALLENGE',
        paragraphs: [
          'Transform raw and hardly accesible data into actionable intelligence. With advanced AI models, we help you uncover patterns, predict outcomes, and drive smarter decision-making at every level of your organization.',
          'Transform raw and hardly accesible data into actionable intelligence. With advanced AI models, we help you uncover patterns, predict outcomes, and drive smarter decision-making at every level of your organization.'
        ]
      }
    ]
  },
}

export const WithQuote: Story = {
  args: {
    sections: [
      {
        title: 'THE CHALLENGE',
        paragraphs: [
          'Transform raw and hardly accesible data into actionable intelligence. With advanced AI models, we help you uncover patterns, predict outcomes, and drive smarter decision-making at every level of your organization.',
          'Transform raw and hardly accesible data into actionable intelligence. With advanced AI models, we help you uncover patterns, predict outcomes, and drive smarter decision-making at every level of your organization.'
        ],
        quote: {
          text: 'Transform raw and hardly accesible data into actionable intelligence. With advanced AI models, we help you uncover patterns, predict outcomes, and drive smarter decision-making at every level of your organization.',
          author: 'JOHN DOE'
        }
      }
    ]
  },
}

export const MultipleSections: Story = {
  args: {
    sections: [
      {
        title: 'THE CHALLENGE',
        paragraphs: [
          'Our client needed to process massive amounts of unstructured data from multiple sources.',
          'The existing system was slow and couldn\'t handle the volume of information.'
        ]
      },
      {
        title: 'THE SOLUTION',
        paragraphs: [
          'We built a custom AI-powered data pipeline that processes and analyzes information in real-time.',
          'The new system increased processing speed by 10x while reducing costs.'
        ],
        quote: {
          text: 'The solution transformed our entire data operation. We can now make decisions in minutes instead of days.',
          author: 'CTO, TECH COMPANY'
        }
      }
    ]
  },
}

