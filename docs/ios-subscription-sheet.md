# iOS App Store Subscription Sheet

## Overview
This implementation provides a 100% native iOS-style subscription sheet component, inspired by the App Store modal design.

## Features

✅ **iOS Native Styling**
- Apple typography (-apple-system, SF Pro)
- HIG spacing and design guidelines
- Native iOS button press effects
- Sheet handle and rounded corners

✅ **Dark Mode Support**
- Automatic dark mode using `prefers-color-scheme`
- iOS-native color palette
- Seamless light/dark transitions

✅ **PWA Support**
- Manifest.json for standalone app mode
- Apple-specific meta tags
- Safe area support for notched devices
- Can be installed as a native-like app

✅ **Native Interactions**
- Haptic feedback on button press
- iOS press state animations
- Disabled tap highlight

## Files

- `/src/components/subscription-sheet.tsx` - Main subscription sheet component
- `/src/app/globals.css` - iOS-native styles
- `/public/manifest.json` - PWA manifest
- `/src/app/layout.tsx` - Updated with PWA meta tags
- `/src/app/subscription-demo/page.tsx` - Demo page

## Usage

### Basic Usage

```tsx
import SubscriptionSheet from '@/components/subscription-sheet';

export default function MyPage() {
  return <SubscriptionSheet />;
}
```

### View the Demo

Visit `/subscription-demo` to see the subscription sheet in action.

### Customization

You can customize the component by editing:

1. **Content**: Edit the text, pricing, and images in `subscription-sheet.tsx`
2. **Colors**: Modify the CSS variables in `globals.css`
3. **Layout**: Adjust spacing and sizing in the `.sheet` classes

## PWA Installation

To use as a standalone app on iOS:

1. Open the site in Safari on iOS
2. Tap the Share button
3. Select "Add to Home Screen"
4. Open from home screen for full-screen experience

## iOS-Native Features

### Typography
- Uses Apple's system fonts: `-apple-system`, `BlinkMacSystemFont`, `SF Pro`
- HIG-compliant font sizes and weights

### Safe Area
- Respects iOS safe area insets
- Works properly on devices with notches
- Uses `env(safe-area-inset-bottom)`

### Dark Mode
- Automatically switches based on system preference
- Uses iOS-native color palette:
  - Light: `#ffffff` background
  - Dark: `#1c1c1e` background
  - Accent: `#0a84ff` (iOS blue)

### Interactions
- Button press scales to 98% on active
- Opacity reduces to 0.85 on press
- Haptic feedback (10ms vibration)
- No tap highlight color

## Browser Support

- ✅ iOS Safari (recommended)
- ✅ iOS Chrome
- ✅ iOS Firefox
- ⚠️ Desktop browsers (works but optimized for mobile)

## Notes

- Optimized for iPhone display sizes (max-width: 430px)
- Works in both portrait and landscape
- Fully accessible with semantic HTML
- No external dependencies (pure CSS + React)
