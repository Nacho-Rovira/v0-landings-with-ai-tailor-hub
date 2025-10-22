# Tailor Hub Logos

This folder contains the official Tailor Hub brand logos and marks.

## Files

- `tailor-hub-logo.svg` - Primary Tailor Hub logo mark

## Usage

### In React/Next.js Components

\`\`\`tsx
import Image from 'next/image'
import TailorHubLogo from '@/assets/logos/tailor-hub-logo.jpg'

export function Header() {
  return (
    <div>
      <Image src={TailorHubLogo || "/placeholder.svg"} alt="Tailor Hub" width={225} height={201} />
    </div>
  )
}
\`\`\`

### As Inline SVG

\`\`\`tsx
export function Logo({ className }: { className?: string }) {
  return (
    <svg 
      className={className}
      width="225" 
      height="201" 
      viewBox="0 0 225 201" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M225 201V167.499H174.07C168.749 167.499 162.668 164.522 158.108 159.31L136.064 133.999H225V100.5H162.668L206.757 49.1331L180.152 27.5443L129.223 86.3551V0H95.0166V86.3551L44.8478 27.5443L18.2432 49.1331L62.3308 100.5H0V133.999H88.9355L66.8917 159.31C62.3308 164.522 56.2498 167.499 50.929 167.499H0V201H53.2094C66.8917 201 80.5741 195.788 88.1753 186.854L112.5 158.566L136.824 186.854C144.425 195.044 158.108 201 171.79 201H225Z" 
        fill="currentColor"
      />
    </svg>
  )
}
\`\`\`

## Design Specifications

- **Dimensions**: 225px × 201px
- **Color**: Uses `currentColor` to inherit text color from parent
- **Format**: SVG (vector, infinitely scalable)

## Brand Guidelines

The Tailor Hub logo should maintain proper spacing and not be distorted. Always preserve the aspect ratio when scaling.
