# HeaderBox Component

A call-to-action section component with overheader, large header text, and a button. Perfect for CTAs and promotional sections. Built using design tokens for consistency.

## Usage

```tsx
import { HeaderBox } from './components/HeaderBox';

function App() {
  return (
    <HeaderBox 
      overheader="WORK WITH TAILOR"
      header="We are a Madrid-based global company."
      buttonLabel="SEND YOUR CV"
      onButtonClick={() => window.location.href = '/careers'}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `overheader` | `string` | `'WORK WITH TAILOR'` | Overheader text (small label) |
| `header` | `string` | Default text | Header/title text (h2, uppercase) |
| `buttonLabel` | `string` | `'SEND YOUR CV'` | Button label text |
| `onButtonClick` | `() => void` | `undefined` | Button click handler |

## Structure

The header box consists of:

1. **Overheader Section**
   - "/" symbol with 112px gap
   - Label text using tech font
   - 121px left padding (aligns with TitleSection)

2. **Content Section**
   - Large header text (h2, uppercase)
   - Call-to-action button
   - 121px left padding (matches overheader)
   - 48px gap between header and button

## Examples

### Default Header Box
```tsx
<HeaderBox 
  overheader="WORK WITH TAILOR"
  header="We are a Madrid-based global company. We believe giving our teams the autonomy to work wherever they want delivers the best outcomes."
  buttonLabel="SEND YOUR CV"
/>
```

### Custom CTA
```tsx
<HeaderBox 
  overheader="GET IN TOUCH"
  header="Ready to transform your business with cutting-edge AI and software solutions?"
  buttonLabel="CONTACT US"
  onButtonClick={() => navigate('/contact')}
/>
```

### Join Team CTA
```tsx
<HeaderBox 
  overheader="JOIN OUR TEAM"
  header="We are always looking for talented engineers, designers, and data scientists."
  buttonLabel="VIEW OPPORTUNITIES"
/>
```

## Design Tokens Used

### Spacing & Gaps
- `--spacing-xxxl` (48px): Vertical gap between overheader and content, and between header and button
- Overheader gap: 112px (desktop), 24px (< 992px)
- Overheader/Content padding-left: 121px (desktop), 60px (< 1279px), 0px (< 992px)

### Typography
- **Overheader:**
  - Size: `--text-size-xsmall` (14px)
  - Line height: `--text-line-xsmall` (17px)
  - Font: `--font-tech` (PP Neue Montreal Mono)

- **Header:**
  - Size: `--text-size-large` (40px)
  - Line height: `--text-line-large` (48px)
  - Font: `--font-default` (PP Mori)
  - Weight: 400
  - Transform: uppercase

### Colors
- `--color-text-primary` (#362C2C): Text color

## Dimensions

- **Container Max Width**: 1432px
- **Vertical Gap**: 48px between sections and elements

## Responsive Behavior

### Desktop (> 1279px)
- Overheader/Content padding-left: 121px
- Overheader gap: 112px
- Full typography sizes

### Large Tablet (≤ 1279px)
- Overheader/Content padding-left: 60px
- Overheader gap: 112px (maintained)

### Tablet (≤ 992px)
- Overheader/Content padding-left: 0px
- Overheader gap: 24px
- Container adds horizontal padding

### Mobile (≤ 768px)
- Container padding: 16px
- Header: 28px font size

### Very Small Screens (≤ 480px)
- Header: 24px font size
- Maintains readability

