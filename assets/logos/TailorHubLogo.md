# TailorHubLogo Component

The official Tailor Hub logo component for use across the design system.

## Usage

\`\`\`tsx
import { TailorHubLogo } from '@/assets/logos';

// Default usage (225px width)
<TailorHubLogo />

// Custom size
<TailorHubLogo size={150} />

// Custom color
<TailorHubLogo color="#362C2C" />

// Inherits text color from parent
<div className="text-blue-600">
  <TailorHubLogo />
</div>

// With additional props
<TailorHubLogo 
  size={100} 
  className="hover:opacity-80 transition-opacity"
  aria-label="Tailor Hub"
/>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `225` | Width of the logo in pixels (height scales proportionally) |
| `color` | `string` | `'currentColor'` | Color of the logo (use hex, rgb, or currentColor) |
| `className` | `string` | `''` | Additional CSS classes |
| `...props` | `SVGProps` | - | All standard SVG element props are supported |

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
  <TailorHubLogo size={40} />
  <span className="text-xl font-semibold">Tailor Hub</span>
</header>
\`\`\`

### Footer
\`\`\`tsx
<footer className="text-gray-600">
  <TailorHubLogo size={60} />
</footer>
\`\`\`

### Dark Mode
\`\`\`tsx
<div className="dark:text-white">
  <TailorHubLogo size={100} />
</div>
