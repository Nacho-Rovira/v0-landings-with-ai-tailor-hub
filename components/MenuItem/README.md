# MenuItem Component

A menu item component for navigation with support for default, hover, and selected states.

## Usage

```tsx
import { MenuItem } from './components/MenuItem';

function Navigation() {
  return (
    <div>
      <MenuItem href="#services">SERVICES</MenuItem>
      <MenuItem href="#about" isSelected>ABOUT</MenuItem>
      <MenuItem href="#contact">CONTACT</MenuItem>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | The menu item content (text) |
| `isSelected` | `boolean` | `false` | Whether the menu item is currently selected/active |
| `href` | `string` | `'#'` | The link destination |
| `onClick` | `function` | - | Click handler |

All standard HTML anchor attributes are also supported.

## Design Tokens Used

The menu item uses the following design tokens from the system:

### From Primitives
- `text.size.xsmall` - Font size (14px)
- `text.line.xsmall` - Line height (17px)
- `text.font.tech` - Font family (PP Neue Montreal Mono, monospace)
- `color.neutral.900` - Default text color (#362C2C)
- `color.neutral.300` - Hover text color (#D4D4D4)
- `color.blue.500` - Selected text color (#2C54FF)

### From Semantics
- `color.text.primary` → `color.neutral.900`
- `color.text.hover` → `color.neutral.300`
- `color.text.accent` → `color.blue.500`

### From Components
- `component.menu.text.font` → `text.font.tech`
- `component.menu.color.text` → `color.text.primary`
- `component.menu.color.textHover` → `color.text.hover`
- `component.menu.color.textSelected` → `color.text.accent`

## States

- **Default**: Dark text (#362C2C)
- **Hover**: Light gray text (#D4D4D4)
- **Selected**: Blue accent text (#2C54FF)

## Examples

### Default Menu Item
```tsx
<MenuItem href="#services">SERVICES</MenuItem>
```

### Selected Menu Item
```tsx
<MenuItem href="#about" isSelected>ABOUT</MenuItem>
```

### With Click Handler
```tsx
<MenuItem 
  href="#contact" 
  onClick={(e) => {
    e.preventDefault();
    console.log('Contact clicked');
  }}
>
  CONTACT
</MenuItem>
```

## Accessibility

- Uses semantic `<a>` element for proper keyboard navigation
- Supports all standard link attributes (`href`, `target`, `rel`, etc.)
- Text is uppercase for visual consistency
- Color contrast meets WCAG AA standards for all states
