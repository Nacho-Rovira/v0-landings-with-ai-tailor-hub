# Components

This directory contains all reusable UI components for the Tailor Hub design system.

## Available Components

### Button
A versatile button component with support for different variants and states.

[View Button Documentation](./Button/README.md)

### Menu
A responsive navigation menu component with starter and scrolling variants.

[View Menu Documentation](./Menu/README.md)

### MenuItem
Navigation menu item component with default, hover, and selected states.

[View MenuItem Documentation](./MenuItem/README.md)

## Usage

### With React/TypeScript

\`\`\`tsx
import { Button } from '@tailorhub/design-system';

function App() {
  return (
    <Button variant="primary" onClick={() => console.log('clicked')}>
      Click me
    </Button>
  );
}
\`\`\`

### Setup

1. Import the CSS tokens in your app:
\`\`\`tsx
import '../tokens/tokens.css';
\`\`\`

2. Import components as needed:
\`\`\`tsx
import { Button } from './components';
\`\`\`

## Design Token Integration

All components use design tokens defined in the `/tokens` directory:
- **primitives.json** - Base values (colors, spacing, typography)
- **semantics.json** - Semantic mappings (text.primary, background.default)
- **components.json** - Component-specific tokens

The tokens are converted to CSS custom properties in `/tokens/tokens.css`.

## Component Structure

Each component follows this structure:
\`\`\`
ComponentName/
├── ComponentName.tsx      # Main component file
├── ComponentName.css      # Component styles
├── ComponentName.stories.tsx  # Examples/stories
├── index.ts              # Exports
└── README.md             # Documentation
\`\`\`

## Development Guidelines

1. **Use Design Tokens**: Always reference tokens instead of hard-coded values
2. **TypeScript**: All components are written in TypeScript with proper type definitions
3. **Accessibility**: Ensure components follow WCAG guidelines
4. **Documentation**: Include comprehensive README and examples for each component
5. **Consistency**: Follow existing patterns and naming conventions

## Adding New Components

1. Create a new folder under `/components`
2. Follow the component structure outlined above
3. Use existing tokens or propose new ones in the token files
4. Export the component in `/components/index.ts`
5. Add documentation and examples
