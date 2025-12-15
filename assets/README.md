# Tailor Hub Assets

This directory contains brand assets for the Tailor Hub design system.

## Structure

```
assets/
├── logos/          # Brand logos and marks
│   ├── tailor-hub-logo.svg
│   └── README.md
└── README.md       # This file
```

## Adding New Assets

When adding new assets:

1. Organize by type (logos, icons, illustrations, etc.)
2. Use descriptive, kebab-case filenames
3. Include a README.md in each subdirectory
4. Prefer SVG format for vector graphics
5. Optimize file sizes before committing

## Usage in Code

Assets can be imported directly in Next.js components:

```tsx
import Logo from '@/assets/logos/tailor-hub-logo.jpg'
```

Or referenced from the public folder if moved there for static serving.
