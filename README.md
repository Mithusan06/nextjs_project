# Customer Dashboard - Mobile WebView

A modern, mobile-first customer dashboard UI designed to be loaded inside a mobile app via WebView. Built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

### Core Sections

1. **Customer Profile Summary**
   - Customer name display
   - Loyalty tier badge (Bronze, Silver, Gold, Platinum)
   - Total loyalty points with elegant gradient background

2. **Current Booking**
   - Active or upcoming booking display
   - Service name with date and time
   - Clear status indicators with color coding
   - Empty state for no bookings

3. **Past Bookings**
   - Scrollable list of completed bookings
   - Minimal card-based layout
   - Date, time, and service information
   - Completion status with checkmark

4. **Loyalty & Rewards**
   - Progress bar toward next tier
   - Current points and next tier goal
   - Rewards history with earned points
   - Visual progress indicators

## Design System

### Colors
- **Primary**: `#FF5CD5` (Pink)
- **Secondary**: White
- **Background**: Light grey (`#fafafa`)
- **Text**: Dark grey hierarchy
- **Status Colors**: Blue (Upcoming), Green (Active), Grey (Completed)

### Typography
- Font: Inter (Google Fonts)
- Clear hierarchy with appropriate weights
- Mobile-optimized sizes

### UI Elements
- Rounded corners: 8-12px
- Soft shadows for depth
- Touch-friendly tap targets
- Smooth transitions

## Architecture

```
app/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── Card.tsx          # Card container with header/content
│   │   ├── Badge.tsx         # Loyalty tier badges
│   │   ├── StatusIndicator.tsx
│   │   └── ProgressBar.tsx
│   └── sections/              # Dashboard sections
│       ├── CustomerProfile.tsx
│       ├── CurrentBooking.tsx
│       ├── PastBookings.tsx
│       └── LoyaltyRewards.tsx
├── types/
│   └── dashboard.ts          # TypeScript interfaces
├── data/
│   └── mockData.ts           # Sample data (replace with API)
├── layout.tsx                # WebView-optimized layout
├── page.tsx                  # Main dashboard page
└── globals.css               # Global styles
```

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## WebView Integration

### iOS (React Native)

```jsx
import { WebView } from 'react-native-webview';

<WebView
  source={{ uri: 'https://your-domain.com' }}
  style={{ flex: 1 }}
  scrollEnabled={true}
  bounces={false}
  overScrollMode="never"
/>
```

### Android (React Native)

```jsx
import { WebView } from 'react-native-webview';

<WebView
  source={{ uri: 'https://your-domain.com' }}
  style={{ flex: 1 }}
  androidLayerType="hardware"
  overScrollMode="never"
/>
```

## WebView Optimizations

The dashboard includes several WebView-specific optimizations:

- **No zoom**: `user-scalable=false` prevents unwanted zooming
- **Viewport fit**: Safe area support for notched devices
- **Touch manipulation**: Optimized for touch interactions
- **Smooth scrolling**: `-webkit-overflow-scrolling: touch`
- **No overscroll**: Prevents rubber-band effect
- **No tap highlight**: Clean touch feedback

## Customization

### Replace Mock Data with API

Update `app/page.tsx` to fetch real data:

```typescript
'use client';

import { useEffect, useState } from 'react';
import { Customer, Booking } from '@/app/types/dashboard';

export default function Home() {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [currentBooking, setCurrentBooking] = useState<Booking | null>(null);

  useEffect(() => {
    // Fetch from your API
    fetch('/api/customer')
      .then(res => res.json())
      .then(data => setCustomer(data));
  }, []);

  // ... rest of your component
}
```

### Update Brand Colors

Modify colors in components to match your brand:

```typescript
// app/components/sections/CustomerProfile.tsx
// Change gradient colors
className="bg-gradient-to-br from-[#YOUR_COLOR] to-[#YOUR_COLOR]"

// app/components/ui/ProgressBar.tsx
// Update progress bar gradient
className="bg-gradient-to-r from-[#YOUR_COLOR] to-[#YOUR_COLOR]"
```

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Inter (Google Fonts)
- **Build Tool**: Turbopack

## Browser Support

Optimized for modern WebView engines:
- iOS 12+ (WKWebView)
- Android 5+ (Chrome WebView)

## License

MIT
