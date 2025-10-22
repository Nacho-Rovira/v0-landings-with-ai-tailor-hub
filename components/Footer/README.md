# Footer Component

A comprehensive footer component featuring contact information, social links, legal links, and the Tailor Hub logo. Built using design tokens for consistency.

## Usage

```tsx
import { Footer } from './components/Footer';

function App() {
  return (
    <Footer />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default'` | `'default'` | Footer variant |
| `contactInfo` | `ContactInfo` | Default values | Custom contact information |
| `socialLinks` | `Array<SocialLink>` | Default links | Custom social media links |
| `legalLinks` | `Array<LegalLink>` | Default links | Custom legal links |

### ContactInfo Type

```tsx
{
  email?: string;
  phone?: string;
  address?: {
    line1: string;
    line2: string;
  };
}
```

### SocialLink & LegalLink Type

```tsx
{
  label: string;
  href: string;
}
```

## Default Values

### Contact Information
- **Email**: SALES@TAILOR-HUB.COM
- **Phone**: +34 682 270 526
- **Address**: 
  - CALLE HERMANOS ÁLVAREZ QUINTERO, 2,
  - SEMISÓTANO A, 28004 MADRID

### Social Links
- **LinkedIn** → https://linkedin.com/company/tailor-hub
- **Spotify** → https://spotify.com
- **Instagram** → https://instagram.com/tailor_hub

### Legal Links
- **Policy & Legal** → /legal
- **Collaboration Lines** → /collaboration

## Structure

The footer is organized into three main sections:

1. **Contact Section**
   - Section title with "/" separator
   - Company info: "PROUDLY PART OF MODULOS STUDIO GROUP"
   - Contact details: email, phone, and address

2. **Logo Section**
   - TailorHub logo with name (large size)
   - Background surface color

3. **Links Section**
   - **Social Links**: LinkedIn, Spotify, Instagram
   - **Legal Links**: Policy & Legal, Collaboration Lines

## Design Tokens Used

### From Typography
- `--font-tech` → **PP Neue Montreal Mono** (section titles, links)
- `--font-default` → **PP Mori** (contact information)
- `--text-size-xsmall` → **14px** (section titles, links)
- `--text-size-large` → **40px** (contact information)
- `--text-line-large` → **48px** (contact line height)

### From Spacing
- `--spacing-xs` → **8px** (contact gap)
- `--spacing-s` → **12px** (mobile link gaps)
- `--spacing-m` → **16px** (link group gaps)
- `--spacing-l` → **24px** (links section gap)
- `--spacing-xl` → **32px** (tablet section title gap)
- `--spacing-xxxl` → **48px** (contact section gap)
- `--spacing-4xl` → **56px** (tablet contact padding)
- `--spacing-6xl` → **64px** (tablet section title gap)
- `--spacing-8xl` → **80px** (tablet contact padding)

### From Colors
- `--color-text-primary` → **#362C2C** (main text)
- `--color-text-hover` → **#D4D4D4** (link hover)
- `--color-background-surface` → **#F5F5F5** (logo background)

### Layout Measurements
- Section title gap: **112px** between "/" and section name
- Contact line gap: **86px** between email and phone
- Link group gap: **16px** between links
- Link width: **225px** per link
- Logo dimensions: **606px × 136px**
- Footer max-width: **1304px**

## Examples

### Basic Footer
```tsx
<Footer />
```

### Custom Contact Information
```tsx
<Footer 
  contactInfo={{
    email: "HELLO@EXAMPLE.COM",
    phone: "+1 555 123 4567",
    address: {
      line1: "123 EXAMPLE STREET,",
      line2: "SUITE 100, 12345 CITY"
    }
  }}
/>
```

### Custom Social Links
```tsx
<Footer 
  socialLinks={[
    { label: "TWITTER", href: "https://twitter.com/example" },
    { label: "GITHUB", href: "https://github.com/example" },
    { label: "DRIBBBLE", href: "https://dribbble.com/example" }
  ]}
/>
```

### Custom Legal Links
```tsx
<Footer 
  legalLinks={[
    { label: "TERMS OF SERVICE", href: "/terms" },
    { label: "PRIVACY POLICY", href: "/privacy" },
    { label: "COOKIE POLICY", href: "/cookies" }
  ]}
/>
```

## Responsive Behavior

### Desktop (> 1400px)
- Full layout with all spacing and measurements
- Horizontal contact line layout
- Horizontal link groups

### Tablet (1024px - 1400px)
- Reduced padding and gaps
- Maintains horizontal layout
- Responsive logo width

### Mobile (768px - 1024px)
- Stacked contact information
- Vertical link groups
- Reduced font sizes

### Small Mobile (< 768px)
- Stacked header layout
- Vertical link rows
- Minimal padding
- Compact typography

## Accessibility

- Uses semantic `<footer>` element
- All links are keyboard navigable
- Proper heading hierarchy
- Text maintains readability at all sizes
- Color contrast meets WCAG guidelines

## Integration with Other Components

The Footer component integrates:
- **TailorHubLogoWithName** - For brand identity
- **Design Tokens** - For consistent styling

All components share the same design tokens for consistency.
