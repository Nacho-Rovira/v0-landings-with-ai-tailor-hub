# Landing Layout Component

A reusable layout component that provides consistent structure for all Tailor Hub landing pages.

## Features

- **Fixed Header**: Automatically switches between "starter" and "scrolling" variants based on scroll position
- **Centered Container**: Max-width of 1432px, centered on larger screens
- **Consistent Padding**: 40px left-right padding using design tokens
- **Responsive**: Adjusts padding for smaller screens
- **Footer**: Automatically includes the footer component

## Usage

\`\`\`tsx
import { LandingLayout } from "@/components/LandingLayout"

export default function MyLandingPage() {
  return (
    <LandingLayout>
      {/* Your page content goes here */}
      <section>
        <h1>My Landing Page</h1>
      </section>
    </LandingLayout>
  )
}
\`\`\`

## Structure

The layout provides three main areas:

1. **Header**: Fixed at the top, switches variants on scroll
2. **Main Content**: Your page content wrapped in a centered container with consistent padding
3. **Footer**: Automatically included at the bottom

## Design Tokens Used

- `--width-header-max`: 1432px (max container width)
- `--spacing-xxl`: 40px (left-right padding)
- `--spacing-l`: 24px (mobile padding)

## Responsive Behavior

- **Desktop (>768px)**: 40px left-right padding
- **Mobile (≤768px)**: 24px left-right padding
- **Large screens (>1432px)**: Container is centered with max-width of 1432px
