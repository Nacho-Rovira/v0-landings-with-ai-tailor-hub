# BoxSection Component

A content section component with image, overheader, header, body text, secondary text, and a button. Built using design tokens for consistency.

## Usage

\`\`\`tsx
import { BoxSection } from './components/BoxSection';

function App() {
  return (
    <BoxSection 
      overheader="S/ 01"
      header="PROJECT NAME"
      bodyText="Transform raw and hardly accesible data into actionable intelligence..."
      secondaryText="With advanced AI models, we help you uncover patterns..."
      buttonLabel="LEARN MORE"
      imageSrc="/path/to/image.jpg"
      onButtonClick={() => console.log('Button clicked')}
    />
  );
}
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'mobile'` | `'default'` | Box section variant |
| `overheader` | `string` | `'S/ 01'` | Overheader text (e.g., section number) |
| `header` | `string` | `'PROJECT NAME'` | Header/title text |
| `bodyText` | `string` | Default text | Main body text content |
| `secondaryText` | `string` | Default text | Secondary text in bottom section |
| `buttonLabel` | `string` | `'BUTTON'` | Button label text |
| `onButtonClick` | `() => void` | `undefined` | Button click handler |
| `imageSrc` | `string` | `undefined` | Image source URL |
| `imageAlt` | `string` | `'Section image'` | Image alt text |

## Variants

- **default**: Horizontal desktop layout with image on left (468px width), content on right
- **mobile**: Vertical compact layout with full-width image on top, content below

## Structure

The box section consists of:

1. **Image Section**
   - Fixed width (468px) in default variant
   - Full width in mobile variant
   - Rounded corners matching design tokens

2. **Content Section**
   - **Header + Body**: Overheader, header, and main body text
   - **Bottom Section**: Secondary text and button

## Examples

### Default Box Section
\`\`\`tsx
<BoxSection 
  overheader="S/ 01"
  header="DATA INTELLIGENCE"
  bodyText="Transform raw and hardly accesible data into actionable intelligence."
  secondaryText="With advanced AI models, we help you uncover patterns."
  buttonLabel="LEARN MORE"
  imageSrc="https://example.com/image.jpg"
/>
\`\`\`

### Mobile Variant
\`\`\`tsx
<BoxSection 
  variant="mobile"
  overheader="S/ 02"
  header="AI SOLUTIONS"
  bodyText="Build intelligent systems that learn and adapt."
  secondaryText="Powered by cutting-edge machine learning."
  buttonLabel="GET STARTED"
  imageSrc="https://example.com/image.jpg"
/>
\`\`\`

### With Button Handler
\`\`\`tsx
<BoxSection 
  overheader="S/ 03"
  header="CONSULTING"
  bodyText="Expert guidance for your digital transformation."
  secondaryText="Strategic planning and implementation support."
  buttonLabel="CONTACT US"
  imageSrc="https://example.com/image.jpg"
  onButtonClick={() => window.location.href = '/contact'}
/>
\`\`\`

## Design Tokens Used

### Spacing & Gaps
- `--spacing-5xl` (60px): Horizontal gap between image and content
- `--gap-overheader-header-2` (16px): Gap between overheader and header
- `--gap-header-2-body` (32px): Gap between header section and body text
- `--gap-paragraph-middle` (16px): Gap between secondary text and button
- `--spacing-l` (24px): Mobile content gap
- `--spacing-xs` (8px): Mobile title gap, mobile component gap

### Typography
- **Overheader:**
  - Desktop: `--text-size-xsmall` (14px), `--text-line-xsmall` (17px)
  - Mobile: 12px / 14px
  - Font: `--font-tech` (PP Neue Montreal Mono)

- **Header:**
  - Desktop: `--text-size-large` (40px), `--text-line-large` (48px)
  - Mobile: 28px / 29px
  - Font: `--font-default` (PP Mori)

- **Body & Secondary Text:**
  - Size: `--text-size-small` (16px), `--text-line-small` (22px)
  - Font: `--font-default` (PP Mori)

### Border Radius
- `--radius-s` (16px): Image corner radius

### Colors
- `--color-text-primary` (#362C2C): Main text color
- `--color-text-secondary` (#828086): Secondary text color

## Dimensions

- **Max Width**: 1248px (default layout)
- **Image Width**: 468px (default), 100% (mobile)
- **Image Height**: 532px (default), 410px (mobile)
- **Content Max Width**: 576px for body text and bottom section

## Responsive Behavior

### Desktop (> 768px)
- Horizontal layout
- Fixed image width (468px)
- 60px gap between image and content
- Large typography
- Content max-width: 576px

### Mobile (< 768px) or Mobile Variant
- Vertical layout
- Full-width image
- Content below image
- Smaller typography
- 8px gap between image and content
- 24px gap within content sections

### Very Small Screens (< 480px)
- 100% width
- Maintains layout integrity
- Full-width content
