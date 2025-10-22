# Logo Components

Tailor Hub logo components with support for different sizes and colors using design tokens.

## Components

### TailorHubLogo
The Tailor Hub logo mark (icon only).

### TailorHubLogoWithName
The Tailor Hub logo with company name.

## Usage

```tsx
import { TailorHubLogo, TailorHubLogoWithName } from '@/assets/logos';

// Logo mark
<TailorHubLogo size="small" />
<TailorHubLogo size="large" />

// Logo with name
<TailorHubLogoWithName size="small" />
<TailorHubLogoWithName size="large" />

// Custom color override
<TailorHubLogo color="#2C54FF" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'small' \| 'large'` | `'large'` (TailorHubLogo)<br>`'small'` (TailorHubLogoWithName) | Size variant |
| `color` | `string` | `var(--logo-color-primary)` | Custom color (optional) |

All standard SVG attributes are also supported.

## Design Tokens Used

The logo components use the following design tokens:

### From Components
- `component.logo.size.small` → **49px**
- `component.logo.size.large` → **201px**
- `component.logo.color.primary` → `{component.menu.color.text}` → **#362C2C**

The logo color is linked to the menu text color (`component.menu.color.text`) for consistency when logos appear in navigation contexts.

### Token Chain
```
component.logo.color.primary
  → component.menu.color.text
    → color.text.primary
      → color.neutral.900
        → #362C2C
```

## Sizes

- **Small**: 49px (typically used in headers/navigation)
- **Large**: 201px (typically used in hero sections)

## Color Behavior

By default, the logo uses `var(--logo-color-primary)` which is linked to the menu text color. This ensures:
- Logos in navigation match the menu text color
- Consistent theming across components
- Easy customization via CSS variables

You can override the color by passing a custom `color` prop:

```tsx
<TailorHubLogo color="var(--color-blue-500)" />
<TailorHubLogo color="#FF0000" />
```

## Examples

### In Navigation/Menu
```tsx
<Menu variant="starter">
  <TailorHubLogo size="small" />
  <MenuItem href="#home" isSelected>Home</MenuItem>
  <MenuItem href="#about">About</MenuItem>
</Menu>
```

### Hero Section
```tsx
<div className="hero">
  <TailorHubLogo size="large" />
  <h1>Welcome to Tailor Hub</h1>
</div>
```

### With Custom Brand Color
```tsx
<TailorHubLogo 
  size="small" 
  color="var(--color-brand-primary)"
/>
```
