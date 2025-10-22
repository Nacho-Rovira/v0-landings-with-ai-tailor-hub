# Header Component

A comprehensive header component featuring the Tailor Hub logo, navigation menu, and company information. Built using the Menu, MenuItem, and TailorHubLogo components.

## Usage

```tsx
import { Header } from './components/Header';

function App() {
  return (
    <Header variant="starter" />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'starter' \| 'scrolling'` | `'starter'` | Header variant - affects menu background |
| `menuItems` | `Array<MenuItem>` | Default items | Custom menu items configuration |

### MenuItem Type

```tsx
{
  label: string;
  href: string;
  isSelected?: boolean;
}
```

Default menu items:
- services → `/services`
- projects → `/projects`
- about → `/about`
- contact → `https://tally.so/r/wopD8P`

## Variants

### Starter (Default)
- **Logo**: Large size (201px)
- **Menu**: Transparent background
- **Info blocks**: Visible - three text blocks at bottom
- Used for initial page state before scrolling

### Scrolling
- **Logo**: Small size (49px)
- **Menu**: Surface background (#F5F5F5)
- **Info blocks**: Hidden for compact layout
- **Height**: Reduced to 49px
- Activated when page is scrolled

## Structure

### Starter Variant Layout

1. **Menu Section** - Positioned absolutely in top-right corner
   - Navigation menu with customizable items
   - Floats above other content
   
2. **Main Content** - Contains logo and info sections
   - **Logo Section** - TailorHub logo (large, 201px) on the left
   - **Info Section** - Three text blocks at the bottom:
     - "AN ELITE TEAM OF SOFTWARE ENGINEERS"
     - "DEVELOPMENT LABS"
     - "ARTIFICIAL INTELLIGENCE & DEV"

### Scrolling Variant Layout

1. **Menu Section** - Positioned absolutely in top-right corner
   - Navigation menu with background
   
2. **Main Content** - Simplified layout
   - **Logo Section** - TailorHub logo (small, 49px) on the left
   - **Info Section** - Hidden for compact header

## Design Tokens Used

### From Logo Component
- `--logo-size-large` → **201px** (large logo and starter variant height)
- `--logo-size-small` → **49px** (small logo and scrolling variant height)
- `--logo-color-primary` → menu text color

### From Menu Component
- `--menu-padding` → **16px**
- `--menu-gap` → **32px**
- `--menu-color-background` → **#F5F5F5** (scrolling variant)
- `--radius-s` → **16px** (menu border radius)

### From Typography
- `--font-tech` → **PP Neue Montreal Mono**
- `--text-size-xsmall` → **14px** (info text)

### From Spacing
- `--spacing-m` → **16px** (menu padding)
- `--spacing-xl` → **32px** (menu gap)
- `--spacing-l` → **24px** (responsive gaps)
- `--spacing-6xl` → **64px** (tablet gaps)

### Layout Measurements
- Info gap: **140px** between text blocks
- First info item left margin: **225px** (aligns with logo width)
- Container padding: **80px** top/bottom, **104px** left/right (in demos)

## Examples

### Basic Header
```tsx
<Header variant="starter" />
```

### Header with Scrolling Variant
```tsx
<Header variant="scrolling" />
```

### Custom Menu Items
```tsx
const menuItems = [
  { label: 'HOME', href: '#home', isSelected: true },
  { label: 'ABOUT', href: '#about' },
  { label: 'TEAM', href: '#team' },
  { label: 'CONTACT', href: '#contact' },
];

<Header variant="starter" menuItems={menuItems} />
```

### Interactive with Scroll Detection
```tsx
function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0">
      <Header variant={isScrolled ? 'scrolling' : 'starter'} />
    </div>
  );
}
```

## Responsive Behavior

### Desktop (> 1280px)
- Full layout with 192px gap between info items
- Logo on left, menu on right
- Info section below in horizontal layout

### Tablet (1024px - 1280px)
- Reduced gap (64px) between info items
- Logo and menu remain horizontal

### Mobile (< 1024px)
- Logo and menu stack vertically
- Info items stack vertically
- Centered layout for better mobile experience

### Small Mobile (< 768px)
- Logo centered
- Menu centered
- Full-width info items

## Accessibility

- Logo has proper `aria-label`
- Uses semantic `<header>` element
- Menu items are keyboard navigable
- Maintains proper heading hierarchy
- Text maintains readability at all sizes

## Integration with Other Components

The Header component integrates:
- **TailorHubLogo** - For brand identity
- **Menu** - For navigation with variant support
- **MenuItem** - For individual navigation links

All components share the same design tokens for consistency.

