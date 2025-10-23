# HighlightSection Component

A section component for highlighting key concepts with a large header. Features center-aligned concept tags and a prominent statement. Built using design tokens for consistency.

## Usage

```tsx
import { HighlightSection } from './components/HighlightSection';

function App() {
  return (
    <HighlightSection 
      concepts={['MENDESALTAREN', 'MINIMUNRUN', 'NO CODE HACKERS', 'MITO']}
      header="We build advanced tech solutions to accelerate and optimize your business needs."
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `concepts` | `string[]` | Default concepts | Array of concept items to display |
| `header` | `string` | Default text | Main header text (h2, uppercase) |

## Structure

The highlight section consists of:

1. **Concepts Row**
   - Center-aligned on desktop
   - Left-aligned on mobile (< 768px)
   - Each concept is 225px width
   - 16px gap between items

2. **Header**
   - Large uppercase text (66px)
   - Full width
   - 56px gap from concepts row

## Examples

### Default Highlight
```tsx
<HighlightSection 
  concepts={['MENDESALTAREN', 'MINIMUNRUN', 'NO CODE HACKERS', 'MITO']}
  header="We build advanced tech solutions to accelerate and optimize your business needs."
/>
```

### Three Concepts
```tsx
<HighlightSection 
  concepts={['AI POWERED', 'SCALABLE', 'SECURE']}
  header="Building the future of enterprise software with cutting-edge technology."
/>
```

### Custom Header
```tsx
<HighlightSection 
  concepts={['INNOVATION', 'RELIABILITY', 'PERFORMANCE']}
  header="Comprehensive solutions designed to meet your most demanding requirements."
/>
```

## Design Tokens Used

### Spacing & Gaps
- `--gap-header-1` (56px): Vertical gap between concepts and header
- `--spacing-m` (16px): Gap between concept items

### Typography
- **Concepts:**
  - Size: `--text-size-xsmall` (14px)
  - Font: `--font-tech` (PP Neue Montreal Mono)
  - Line height: normal

- **Header:**
  - Size: `--text-size-xxlarge` (66px)
  - Line height: `--text-line-xxlarge` (62px)
  - Font: `--font-default` (PP Mori)
  - Weight: 400
  - Transform: uppercase

### Colors
- `--color-text-primary` (#362C2C): Text color for all elements

## Dimensions

- **Container Max Width**: 1432px
- **Concept Width**: 225px (desktop), auto (mobile)
- **Vertical Gap**: 56px

## Responsive Behavior

### Desktop (> 768px)
- Concepts center-aligned
- Each concept: 225px width
- Large header: 66px
- Full max-width: 1432px

### Mobile (≤ 768px)
- Concepts left-aligned
- Concepts wrap if needed
- Concept width: auto
- Header: 40px font size
- Container padding: 16px

### Very Small Screens (≤ 480px)
- Header: 28px font size
- Concepts can wrap to multiple lines
- Maintains readability

