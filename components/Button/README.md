# Button Component

A button component built using the Tailor Hub design system tokens.

## Usage

\`\`\`tsx
import { Button } from './components/Button';

function MyComponent() {
  return (
    <Button variant="primary" onClick={() => console.log('clicked')}>
      BUTTON
    </Button>
  );
}
\`\`\`

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

### Component Tokens (Button Primary)
- `--button-primary-bg` - Background color (references `color.background.surface`)
- `--button-primary-bg-hover` - Hover background color (references `color.background.hover`)
- `--button-primary-bg-active` - Active background color (references `color.neutral.300`)
- `--button-primary-text` - Text color (references `color.text.secondary`)
- `--button-primary-text-hover` - Hover text color (references `color.text.primary`)
- `--button-primary-text-active` - Active text color (references `color.text.primary`)
- `--button-primary-padding` - Internal padding (references `spacing.xs`)
- `--button-primary-text-size` - Font size (references `text.size.xsmall`)
- `--button-primary-font` - Font family (references `text.font.tech`)

### Primitive Tokens
- `spacing.xsm` - Gap between elements (10px)
- `radius.xs` - Border radius (8px)
- `text.line.xsmall` - Line height (17px)

### Token Hierarchy
- **Component tokens** → **Semantic tokens** → **Primitive tokens**
- Example: `--button-primary-bg` → `--color-background-surface` → `--color-neutral-100`

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
\`\`\`tsx
<Button variant="primary">BUTTON</Button>
\`\`\`

### Disabled Button
\`\`\`tsx
<Button variant="primary" disabled>
  BUTTON
</Button>
\`\`\`

### Interactive Button
\`\`\`tsx
<Button variant="primary" onClick={() => console.log('clicked')}>
  CLICK ME
</Button>
\`\`\`
