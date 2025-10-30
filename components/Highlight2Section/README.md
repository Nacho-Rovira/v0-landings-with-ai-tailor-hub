# Highlight2Section

A section component that displays two overheaders with content arranged in a 3-column by 2-row grid layout. Perfect for showcasing partners, technologies, or other categorized content.

## Usage

\`\`\`tsx
import { Highlight2Section } from '@/components/Highlight2Section'

export default function Page() {
  return (
    <Highlight2Section
      overheaderLeft="OFICIAL"
      overheaderRight="PARTNERS"
      items={[
        'CONTENTFUL',
        'AWS',
        'MICROSOFT AI CLOUD PARTNER',
        'SHOPIFY PARTNERS',
        'NETLIFY',
        ''
      ]}
    />
  )
}
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `overheaderLeft` | `string` | `'OFICIAL'` | Left overheader text |
| `overheaderRight` | `string` | `'PARTNERS'` | Right overheader text |
| `items` | `string[]` | Default items array | Content items displayed in 3x2 grid |
| `className` | `string` | `''` | Additional CSS classes |

## Design Tokens

This component uses the following semantic tokens:

### Typography
- `--font-tech`: Overheader font (PP Neue Montreal Mono)
- `--font-default`: Content font (PP Mori)
- `--text-size-xsmall`: Overheader size (14px)
- `--text-size-xxlarge`: Content size (66px)
- `--text-line-xsmall`: Overheader line height (17px)
- `--text-line-xxlarge`: Content line height (62px)

### Spacing
- `--gap-header-1`: Main vertical gap (56px)
- `--gap-header-2-body`: Mobile vertical gap (32px)
- `--spacing-m`: Mobile padding (16px)
- `--spacing-l`: Small screen gap (24px)
- `--spacing-xl`: Mobile grid gap (32px)

### Colors
- `--color-text-primary`: Text color (#362C2C)

## Responsive Behavior

- **Desktop (>1280px)**: Full 3-column grid with large text (66px)
- **Tablet (768px-1280px)**: 3-column grid with medium text (48px)
- **Mobile (480px-768px)**: 2-column grid with smaller text (32px)
- **Small Mobile (<480px)**: 1-column stack with smallest text (24px)

## Examples

### Default Partners Layout
\`\`\`tsx
<Highlight2Section />
\`\`\`

### Custom Technology Stack
\`\`\`tsx
<Highlight2Section
  overheaderLeft="FRONTEND"
  overheaderRight="BACKEND"
  items={[
    'REACT',
    'NODE.JS',
    'GRAPHQL',
    'NEXT.JS',
    'EXPRESS',
    'POSTGRESQL'
  ]}
/>
\`\`\`

### With Empty Cells
\`\`\`tsx
<Highlight2Section
  overheaderLeft="CATEGORY A"
  overheaderRight="CATEGORY B"
  items={[
    'ITEM 1',
    'ITEM 2',
    'ITEM 3',
    'ITEM 4',
    '', // Empty cell
    '' // Empty cell
  ]}
/>
\`\`\`

## Accessibility

- Uses semantic HTML structure
- Maintains proper heading hierarchy
- Responsive text sizing for readability
- High contrast text colors

## Notes

- The grid automatically adjusts from 3 columns to 2 columns to 1 column based on screen size
- Empty strings in the items array create empty grid cells
- All text is automatically uppercased via CSS
- Component follows Tailor-Hub's minimal, editorial design aesthetic
