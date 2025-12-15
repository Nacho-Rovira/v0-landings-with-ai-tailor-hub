# BodyText Component

A content component for displaying structured body text with titles, paragraphs, and optional quote cards. Perfect for article content, case studies, and detailed descriptions. Built using design tokens for consistency.

## Usage

```tsx
import { BodyText } from './components/BodyText';

function App() {
  return (
    <BodyText 
      sections={[
        {
          title: 'THE CHALLENGE',
          paragraphs: [
            'First paragraph of content...',
            'Second paragraph of content...'
          ],
          quote: {
            text: 'A relevant quote...',
            author: 'AUTHOR NAME'
          }
        }
      ]}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sections` | `BodyTextSection[]` | Default sections | Array of text sections |

### BodyTextSection Type

```tsx
interface BodyTextSection {
  title: string           // Section title
  paragraphs: string[]    // Array of paragraph texts
  quote?: {               // Optional quote card
    text: string
    author: string
  }
}
```

## Structure

Each section consists of:

1. **Title** (h3)
   - Uppercase text
   - 40px font size
   - Full width

2. **Paragraphs**
   - Multiple paragraphs with 16px gap
   - 16px font size
   - Full width

3. **Quote Card** (optional)
   - Background card with quote text and author
   - Secondary color for quote text
   - Tech font for author name
   - 16px padding, 16px border radius

## Examples

### Single Section
```tsx
<BodyText 
  sections={[
    {
      title: 'THE CHALLENGE',
      paragraphs: [
        'First paragraph...',
        'Second paragraph...'
      ]
    }
  ]}
/>
```

### Section with Quote
```tsx
<BodyText 
  sections={[
    {
      title: 'THE SOLUTION',
      paragraphs: [
        'We implemented a custom AI solution...',
        'The results exceeded expectations...'
      ],
      quote: {
        text: 'This solution transformed our business.',
        author: 'CEO, CLIENT COMPANY'
      }
    }
  ]}
/>
```

### Multiple Sections
```tsx
<BodyText 
  sections={[
    {
      title: 'THE CHALLENGE',
      paragraphs: ['Problem description...']
    },
    {
      title: 'THE SOLUTION',
      paragraphs: ['Solution description...'],
      quote: {
        text: 'Client testimonial...',
        author: 'CLIENT NAME'
      }
    }
  ]}
/>
```

## Design Tokens Used

### Spacing & Gaps
- `--gap-section-section` (80px): Gap between multiple sections
- `--gap-paragraph-middle` (16px): Gap between title and content, paragraphs, and quote elements
- `--padding-card` (16px): Quote card padding

### Typography
- **Title:**
  - Size: `--text-size-large` (40px)
  - Line height: `--text-line-large` (48px)
  - Font: `--font-default` (PP Mori)
  - Weight: 400
  - Transform: uppercase

- **Paragraph:**
  - Size: `--text-size-small` (16px)
  - Line height: `--text-line-small` (22px)
  - Font: `--font-default` (PP Mori)

- **Quote Text:**
  - Size: `--text-size-small` (16px)
  - Line height: `--text-line-small` (22px)
  - Font: `--font-default` (PP Mori)
  - Color: Secondary

- **Quote Author:**
  - Size: `--text-size-small` (16px)
  - Line height: `--text-line-small` (22px)
  - Font: `--font-tech` (PP Neue Montreal Mono)

### Border Radius
- `--radius-s` (16px): Quote card corner radius

### Colors
- `--color-text-primary` (#362C2C): Main text and author
- `--color-text-secondary` (#828086): Quote text
- `--color-background-surface` (#F5F5F5): Quote card background

## Dimensions

- **Max Width**: 702px
- **Section Gap**: 80px between sections
- **Content Gap**: 16px between elements within a section

## Responsive Behavior

### Desktop (> 768px)
- Max-width: 702px
- Title: 40px font size
- Full typography

### Mobile (≤ 768px)
- 100% width with 16px padding
- Title: 28px font size
- Maintains all gaps and spacing

### Very Small Screens (≤ 480px)
- Title: 24px font size
- Maintains readability
- Quote cards scale properly
