# Theme Configuration Usage Guide

## Overview
All background colors, text colors, and theme-related styles are centralized in `src/lib/theme.ts`. This makes it easy to change colors across the entire application from one place.

## How to Use

### Page Backgrounds

```tsx
import { getPageBackground } from '@/lib/theme';

// Default white background
<div className={getPageBackground()}>
  {/* or */}
<div className={getPageBackground('default')}>

// Light gray background (for blog, etc.)
<div className={getPageBackground('light')}>

// Dark background
<div className={getPageBackground('dark')}>

// Gradient background
<div className={getPageBackground('gradient')}>
```

### Header Backgrounds

```tsx
import { getHeaderBackground } from '@/lib/theme';

<header className={getHeaderBackground()}>
  {/* or */}
<header className={getHeaderBackground('default')}>  // white
<header className={getHeaderBackground('dark')}>     // dark
<header className={getHeaderBackground('transparent')}>  // transparent
```

### Footer Backgrounds

```tsx
import { getFooterBackground } from '@/lib/theme';

<footer className={getFooterBackground()}>
  {/* or */}
<footer className={getFooterBackground('default')}>  // transparent with gradient
<footer className={getFooterBackground('light')}>    // white
<footer className={getFooterBackground('dark')}>     // dark
```

### Text Colors

```tsx
import { getTextColor } from '@/lib/theme';

<p className={getTextColor()}>Default text</p>
<p className={getTextColor('primary')}>Primary text</p>
<p className={getTextColor('secondary')}>Secondary text</p>
<p className={getTextColor('muted')}>Muted text</p>
<p className={getTextColor('white')}>White text</p>
```

### Footer-Specific Text Colors

**Important:** Footer text colors are scoped to footer only. Use these classes directly in footer components:

- `text-gray-700` - Default footer text
- `text-gray-600` - Footer link text
- `text-gray-900` - Footer link hover / heading
- `text-gray-500` - Footer muted text

These are defined in the theme but should be used as static classes in footer to ensure Tailwind includes them.

## Changing Colors

To change colors globally, edit `src/lib/theme.ts`:

```typescript
export const theme = {
  page: {
    default: "bg-white",           // Change this to update default page background
    light: "bg-[#F9FAFB]",         // Change this to update light page background
    // ...
  },
  // ...
};
```

## Current Color Scheme

- **Page Default**: White (`bg-white`)
- **Page Light**: Light Gray (`bg-[#F9FAFB]`)
- **Page Dark**: Dark Gray (`bg-gray-900`)
- **Header Default**: White (`bg-white`)
- **Header Dark**: Dark Gray (`bg-gray-900`) - Auto-applied on dark theme pages
- **Footer Default**: Transparent with gradient overlay
- **Footer Dark**: Dark Gray (`bg-gray-900`) - Auto-applied on dark theme pages
- **Text Default**: Black (`text-black`)
- **Footer Text**: Gray scale (700, 600, 500, 900)
- **Footer Text Dark**: Light gray scale (400, 300, white) - Auto-applied on dark theme pages

## Dark Theme Pages

Pages that automatically use dark theme (black background, white text):
- `/ai` - AI Solution page

To add more pages to dark theme, update `DARK_THEME_PAGES` array in `src/lib/theme.ts`:

```typescript
export const DARK_THEME_PAGES = ['/ai', '/your-new-page'] as const;
```

When a page is in the dark theme list:
- Page background becomes black
- Header background becomes black with white text
- Footer background becomes black with light gray text
- All navigation links use white/light gray colors

## Examples

### Blog Page (Light Background)
```tsx
import { getPageBackground } from '@/lib/theme';

<div className={getPageBackground('light')}>
  {/* Blog content */}
</div>
```

### Dark Page
```tsx
import { getPageBackground, getTextColor } from '@/lib/theme';

<div className={`${getPageBackground('dark')} ${getTextColor('white')}`}>
  {/* Dark page content */}
</div>
```

## Notes

- Footer text colors use static Tailwind classes to ensure proper CSS generation
- All theme functions return Tailwind class strings
- Colors can be changed globally by updating `theme.ts`
- Footer-specific colors are intentionally scoped to prevent global conflicts

