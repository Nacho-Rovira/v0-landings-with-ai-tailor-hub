# TitleSection Component

A section component for displaying a title with optional overheader and paragraph. Perfect for page headers and section introductions. Built using design tokens for consistency.

## Usage

```tsx
import { TitleSection } from './components/TitleSection';

function App() {
  return (
    <TitleSection 
      overheader="ABOUT US"
      title="WE BUILD THE FUTURE"
      paragraph="Our team of expert engineers and data scientists work with you to create custom solutions."
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `overheader` | `string` | `undefined` | Small label text above the title |
| `title` | `string` | `undefined` | Main title/header (h1) text |
| `paragraph` | `string` | `undefined` | Paragraph text below the title |

## Structure

The title section consists of:

1. **Overheader** (optional)
   - Small label text using tech font
   - Full width

2. **Title** (required for meaningful use)
   - Large h1 heading using default font
   - Full width

3. **Paragraph** (optional)
   - Body text using default font
   - Max-width: 816px (left-aligned)

## Examples

### Complete Title Section
```tsx
<TitleSection 
  overheader="SERVICES"
  title="WE BUILD INTELLIGENT SYSTEMS"
  paragraph="Our team works with you to create custom AI solutions that drive real business value."
/>
```

### Title with Paragraph Only
```tsx
<TitleSection 
  title="SIMPLE TITLE"
  paragraph="Just a title and description, no overheader needed."
/>
```

### Title Only
```tsx
<TitleSection 
  title="STANDALONE TITLE"
/>
```

## Design Tokens Used

### Spacing & Gaps
- `--gap-header-1` (56px): Vertical gap between all elements (overheader, title, paragraph)

### Typography
- **Overheader:**
  - Size: `--text-size-xsmall` (14px)
  - Line height: `--text-line-xsmall` (17px)
  - Font: `--font-tech` (PP Neue Montreal Mono)

- **Title:**
  - Size: `--text-size-xxlarge` (66px)
  - Line height: `--text-line-xxlarge` (62px)
  - Font: `--font-default` (PP Mori)
  - Weight: 400

- **Paragraph:**
  - Size: `--text-size-small` (16px)
  - Line height: `--text-line-small` (22px)
  - Font: `--font-default` (PP Mori)

### Colors
- `--color-text-primary` (#362C2C): Text color for all elements

## Dimensions

- **Container Max Width**: 1432px
- **Paragraph Max Width**: 816px (left-aligned)
- **Vertical Gap**: 56px between elements

## Responsive Behavior

### Desktop (> 768px)
- Full max-width (1432px)
- Large title (66px)
- Paragraph constrained to 816px

### Tablet/Mobile (< 768px)
- 100% width with 16px padding
- Medium title (40px)
- Full-width paragraph

### Very Small Screens (< 480px)
- Smaller title (28px)
- Maintains readability
- Full-width paragraph

