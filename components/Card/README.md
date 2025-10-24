# Card Component

A project card component with image, category, and title. Built using design tokens for consistency.

## Usage

\`\`\`tsx
import { Card } from './components/Card';

function App() {
  return (
    <Card 
      category="SOFTWARE AND AI"
      title="PROJECT NAME"
      imageSrc="/path/to/image.jpg"
    />
  );
}
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'mobile'` | `'default'` | Card variant |
| `category` | `string` | `'SOFTWARE AND AI'` | Category/overheader text |
| `title` | `string` | `'PROJECT NAME'` | Card title |
| `imageSrc` | `string` | `undefined` | Image source URL |
| `imageAlt` | `string` | `'Project image'` | Image alt text |

## Variants

- **default**: Standard desktop card with larger typography (40px title, 14px category)
- **mobile**: Compact mobile card with smaller typography (28px title, 12px category)

## Structure

The card consists of:

1. **Image Section**
   - Absolute positioned background image
   - Full card coverage with `object-fit: cover`
   - Rounded corners matching card border radius

2. **Content Section**
   - Category (overheader) in tech font
   - Title in default font
   - Positioned above the image with z-index

## Examples

### Default Card
\`\`\`tsx
<Card 
  category="SOFTWARE AND AI"
  title="PROJECT NAME"
  imageSrc="https://example.com/image.jpg"
/>
\`\`\`

### Mobile Variant
\`\`\`tsx
<Card 
  variant="mobile"
  category="WEB DEVELOPMENT"
  title="E-COMMERCE PLATFORM"
  imageSrc="https://example.com/image.jpg"
/>
\`\`\`

### Without Image
\`\`\`tsx
<Card 
  category="DESIGN"
  title="BRAND IDENTITY"
/>
\`\`\`

## Design Tokens Used

### Spacing & Gaps
- `--padding-card` (16px): Card padding (top and left)
- `--gap-overheader-header-2` (16px): Gap between category and title in default variant
- `--spacing-xs` (8px): Mobile content gap

### Typography
- **Category:**
  - Desktop: `--text-size-xsmall` (14px), `--text-line-xsmall` (17px)
  - Mobile: 12px / 14px
  - Font: `--font-tech` (PP Neue Montreal Mono)

- **Title:**
  - Desktop: `--text-size-large` (40px), `--text-line-large` (48px)
  - Mobile: 28px / 29px
  - Font: `--font-default` (PP Mori)

### Border Radius
- `--radius-s` (16px): Card corner radius

### Colors
- `--color-text-invert` (#FFFFFF): Text color for content over images

## Dimensions

- **Width**: 589px
- **Height**: 440px
- **Responsive**: Adapts to 100% width on small screens

## Responsive Behavior

### Desktop (> 768px)
- Full card size (589px × 440px)
- Large typography
- 16px content gap

### Mobile (< 768px)
- Full width (max 589px)
- Smaller typography
- 8px content gap
- Applies mobile styles to default variant

### Very Small Screens (< 480px)
- 100% width
- Maintains layout integrity
