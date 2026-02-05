# Typography System Guide

All heading and text styles are now defined in **`src/styles/typography.css`** for easy editing.

## Editing Typography Styles

To change any heading or text style, edit the CSS file:
**`src/styles/typography.css`**

### Available Style Classes

#### Headings
- `.text-h1` - Main heading (36px)
- `.text-h2` - Secondary heading (30px)
- `.text-h3` - Tertiary heading (24px)
- `.text-h4` - Small heading (20px)
- `.text-h5` - Extra small heading (18px)
- `.text-h6` - Smallest heading (16px)

#### Body Text
- `.text-body` - Regular body text (15px)
- `.text-body-small` - Small body text (13px)

#### Labels & Captions
- `.text-label` - Labels (14px)
- `.text-caption` - Captions (12px)

#### Display Text
- `.text-display-large` - Large display text (80px)
- `.text-display-medium` - Medium display text (48px)

## Using in Components

### With Text Component
```tsx
import Text from '../components/ui/Text';

<Text variant="h1" as="h1">Main Heading</Text>
<Text variant="h2" as="h2">Secondary Heading</Text>
<Text variant="body">Regular text</Text>
<Text variant="label">Label text</Text>
```

### Direct CSS Classes
You can also use the classes directly in your HTML:
```tsx
<h1 className="text-h1">Main Heading</h1>
<h2 className="text-h2">Secondary Heading</h2>
<p className="text-body">Regular paragraph text</p>
<span className="text-label">Label text</span>
```

## Customizing Styles

### Example: Changing H1 Properties
Edit `src/styles/typography.css`:

```css
/* H1 - Main heading */
.text-h1 {
  color: var(--text-default, #1F2937);
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 36px;          /* Change this */
  font-weight: 400;         /* Change this */
  line-height: 120%;        /* Change this */
}
```

### Adding Custom CSS Variables
You can use CSS variables in the styles:

```css
:root {
  --text-default: #1F2937;
  --text-subdued: #6B7280;
}

.text-h1 {
  color: var(--text-default);
}
```

## Current H1 Properties
```css
color: #1F2937
font-variant-numeric: lining-nums proportional-nums
font-family: "SF Pro Display"
font-size: 36px
font-weight: 400
line-height: 120% (43.2px)
```

## Files Reference
- **CSS Styles**: `src/styles/typography.css`
- **TypeScript Mapping**: `src/app/components/ui/typography.ts`
- **Text Component**: `src/app/components/ui/Text.tsx`
- **Import Location**: `src/main.tsx`
