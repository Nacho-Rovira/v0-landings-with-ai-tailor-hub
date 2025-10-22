# v0 landings with AI tailor hub

Repository to host the V0 landing pages and integration with the AI Tailor Hub, including a comprehensive design system with tokens and reusable components.

## Project Structure

```
v0-landings-with-ai-tailor-hub/
├── tokens/              # Design tokens
│   ├── primitives.json  # Base values (colors, spacing, typography)
│   ├── semantics.json   # Semantic mappings
│   ├── components.json  # Component-specific tokens
│   └── tokens.css       # CSS custom properties
├── components/          # Reusable UI components
│   ├── Button/          # Button component
│   └── README.md        # Components documentation
├── examples/            # Demo files and examples
│   └── button-demo.html # Button component demo
├── package.json         # Project dependencies
└── tsconfig.json        # TypeScript configuration
```

## Design System

### Design Tokens

The design system uses a three-tier token structure:

1. **Primitives** (`tokens/primitives.json`) - Base values
   - Colors (neutral palette, blue accent)
   - Typography (sizes, line heights, font families)
   - Spacing scale (xxs to 8xl)
   - Border radius

2. **Semantics** (`tokens/semantics.json`) - Semantic mappings
   - Background colors (default, surface, hover)
   - Text colors (primary, secondary, accent)
   - Typography styles (headers, body, overheader)
   - Layout tokens (gaps, padding)

3. **Components** (`tokens/components.json`) - Component-specific tokens
   - Button styles
   - Tab styles
   - Menu styles
   - Logo styles

### Components

All components are built using React + TypeScript and reference the design tokens.

#### Available Components

- **Button** - Primary button with hover states and variants
  - [View Documentation](./components/Button/README.md)
  - [View Demo](./examples/button-demo.html)

- **Menu** - Responsive navigation menu with starter and scrolling variants
  - [View Documentation](./components/Menu/README.md)
  - [View Demo](./examples/menu-demo.html)

- **MenuItem** - Navigation menu items with multiple states
  - [View Documentation](./components/MenuItem/README.md)
  - [View Demo](./examples/menu-demo.html)

## Getting Started

### Installation

```bash
npm install
```

### Using Components

```tsx
import { Button } from './components';
import './tokens/tokens.css'; // Import design tokens

function App() {
  return (
    <Button variant="primary" onClick={() => console.log('clicked')}>
      Click me
    </Button>
  );
}
```

### Viewing Examples

Open `examples/button-demo.html` in your browser to see the button component in action.

## Quickstart

1. This repository uses a branch named Main as the default branch.
2. Create feature branches from Main (example: Link/V0).
3. Open a PR to merge Link/V0 into Main when ready.

## Goals

- Integrate V0 landing pages
- Build a comprehensive design system with tokens
- Create reusable, accessible components
- Provide CI and deployment workflow
- Keep repository structure minimal and well documented

## Development

### Adding New Components

1. Create a new folder under `/components`
2. Use design tokens from the token files
3. Follow the existing component structure (tsx, css, stories, README)
4. Export the component in `/components/index.ts`
5. Add documentation and examples

### Modifying Tokens

1. Update the appropriate token file in `/tokens`
2. Regenerate CSS variables in `tokens/tokens.css` if needed
3. Document any breaking changes

## Tech Stack

- **React** 18+ for components
- **TypeScript** for type safety
- **CSS Custom Properties** for token management
- **Design Tokens** following W3C DTCG format
