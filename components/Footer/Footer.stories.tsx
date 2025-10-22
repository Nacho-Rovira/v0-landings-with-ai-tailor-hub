import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const CustomContact: Story = {
  args: {
    contactInfo: {
      email: "HELLO@EXAMPLE.COM",
      phone: "+1 555 123 4567",
      address: {
        line1: "123 EXAMPLE STREET,",
        line2: "SUITE 100, 12345 CITY"
      }
    }
  }
}

export const CustomSocial: Story = {
  args: {
    socialLinks: [
      { label: "TWITTER", href: "https://twitter.com/example" },
      { label: "GITHUB", href: "https://github.com/example" },
      { label: "DRIBBBLE", href: "https://dribbble.com/example" }
    ]
  }
}

export const CustomLegal: Story = {
  args: {
    legalLinks: [
      { label: "TERMS OF SERVICE", href: "/terms" },
      { label: "PRIVACY POLICY", href: "/privacy" },
      { label: "COOKIE POLICY", href: "/cookies" }
    ]
  }
}
