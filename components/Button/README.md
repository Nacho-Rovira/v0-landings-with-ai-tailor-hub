# Button Component

A button component built using the Tailor Hub design system tokens.

## Usage

```tsx
import { Button } from './components/Button';

function MyComponent() {
  return (
    <Button variant="primary" onClick={() => console.log('clicked')}>
      BUTTON
    </Button>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | The button content |
| `variant` | `'primary'` | `'primary'` | Button variant style |
| `disabled` | `boolean` | `false` | Disables the button |
| `onClick` | `function` | - | Click handler |

All standard HTML button attributes are also supported.

## Design Tokens Used

The button uses the following design tokens from the system:

### From Primitives
- `color.neutral.100` - Background color (#F5F5F5)
- `color.neutral.200` - Hover background color (#E5E5E5)
- `color.neutral.600` - Text color (#828086)
- `color.neutral.900` - Hover text color (#362C2C)
- `text.size.xsmall` - Font size (14px)
- `text.font.tech` - Font family (PP Neue Montreal Mono, monospace)
- `spacing.xs` - Padding (8px)
- `spacing.xsm` - Gap between elements (10px)
- `radius.xs` - Border radius (8px)

### From Semantics
- `color.background.surface` → `color.neutral.100`
- `color.background.hover` → `color.neutral.200`
- `color.text.secondary` → `color.neutral.600`
- `color.text.primary` → `color.neutral.900`

### From Components
- `component.button.primary.padding` → `spacing.xs`
- `component.button.primary.text.size` → `text.size.xsmall`
- `component.button.primary.text.font` → `text.font.tech`
- `component.button.primary.color.background` → `color.background.surface`
- `component.button.primary.color.hover` → `color.background.hover`
- `component.button.primary.color.text` → `color.text.secondary`
- `component.button.primary.color.textHover` → `color.text.primary`

## States

- **Default**: Light gray background with medium gray text
- **Hover**: Slightly darker gray background with dark text
- **Active**: Even darker background for click feedback
- **Disabled**: Reduced opacity, cursor not-allowed

## Examples

### Primary Button
```tsx
<Button variant="primary">BUTTON</Button>
```

### Disabled Button
```tsx
<Button variant="primary" disabled>
  BUTTON
</Button>
```

### Interactive Button
```tsx
<Button variant="primary" onClick={() => console.log('clicked')}>
  CLICK ME
</Button>
```

