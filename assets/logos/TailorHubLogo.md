# TailorHubLogo Component

The official Tailor Hub logo component for use across the design system.

## Usage

\`\`\`tsx
import { TailorHubLogo } from '@/assets/logos';

// Default usage (large size - 201px)
<TailorHubLogo />

// Small size (49px)
<TailorHubLogo size="small" />

// Large size (201px)
<TailorHubLogo size="large" />

// Custom color
<TailorHubLogo color="#362C2C" />

// Inherits text color from parent
<div className="text-blue-600">
  <TailorHubLogo />
</div>

// With additional props
<TailorHubLogo 
  size="small" 
  className="hover:opacity-80 transition-opacity"
  aria-label="Tailor Hub"
/>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"small" \| "large"` | `"large"` | Size variant using design tokens (small: 49px, large: 201px) |
| `color` | `string` | `'currentColor'` | Color of the logo (use hex, rgb, or currentColor) |
| `className` | `string` | `''` | Additional CSS classes |
| `...props` | `SVGProps` | - | All standard SVG element props are supported |

## Design Tokens

The logo sizes are defined in the design system tokens:

- **Small**: `--logo-size-small` (49px)
- **Large**: `--logo-size-large` (201px)
- **Color**: `--logo-color-primary` (inherits from text primary)

## Design Specifications

- **Aspect Ratio**: 225:201 (width:height)
- **Default Color**: `#362C2C` (dark brown)
- **Viewbox**: `0 0 225 201`
- **Format**: Vector SVG

## Accessibility

Always include an `aria-label` when the logo is used as a standalone element:

\`\`\`tsx
<TailorHubLogo aria-label="Tailor Hub" />
\`\`\`

## Examples

### Navigation Header
\`\`\`tsx
<header className="flex items-center gap-4">
  <TailorHubLogo size="small" />
  <span className="text-xl font-semibold">Tailor Hub</span>
</header>
\`\`\`

### Footer
\`\`\`tsx
<footer className="text-gray-600">
  <TailorHubLogo size="small" />
</footer>
\`\`\`

### Hero Section
\`\`\`tsx
<div className="text-center">
  <TailorHubLogo size="large" />
</div>
\`\`\`

### Dark Mode
\`\`\`tsx
<div className="dark:text-white">
  <TailorHubLogo size="large" />
</div>
