# Component Structure

This dashboard has been refactored into reusable React components.

## Layout Components

All layout components are located in `src/app/components/layout/`:

### `DashboardLayout`
The main layout wrapper that includes the header, side navigation, and top bar.

**Usage:**
```tsx
import DashboardLayout from './components/layout/DashboardLayout';

function App() {
  return (
    <DashboardLayout>
      {/* Your page content goes here */}
    </DashboardLayout>
  );
}
```

### `Header`
The top banner that displays "Sandbox" and the "Switch to live account" button.

### `SideNav`
The left sidebar navigation component with icons/menu items.

### `TopBar`
The sticky top bar with search field and tools/actions.

## Page Components

Page components are located in `src/app/pages/`:

- `HomePage.tsx` - Example home page with cards
- `SettingsPage.tsx` - Example settings page with form

## How to Add a New Page

1. Create a new component in `src/app/pages/`:

```tsx
// src/app/pages/MyNewPage.tsx
export default function MyNewPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">My New Page</h1>
      <p>Content goes here</p>
    </div>
  );
}
```

2. Import and use it in `App.tsx`:

```tsx
import MyNewPage from './pages/MyNewPage';

// Then render it inside DashboardLayout:
<DashboardLayout>
  <MyNewPage />
</DashboardLayout>
```

## Using with React Router

For production apps, replace the simple state-based page switcher with React Router:

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';

export default function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}
```

## Directory Structure

```
src/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── DashboardLayout.tsx  # Main layout wrapper
│   │   │   ├── Header.tsx            # Sandbox banner
│   │   │   ├── SideNav.tsx           # Left sidebar
│   │   │   ├── TopBar.tsx            # Search & tools bar
│   │   │   └── index.ts              # Exports
│   │   └── ui/                       # UI components (shadcn/ui)
│   ├── pages/
│   │   ├── HomePage.tsx              # Home page
│   │   └── SettingsPage.tsx          # Settings page
│   └── App.tsx                       # Main app component
├── imports/
│   └── svg-r3lovs252m.ts            # SVG path definitions
└── styles/
    └── index.css                     # Global styles
```

## Customizing Layout Components

Each layout component can be customized independently:

- **Header**: Modify `src/app/components/layout/Header.tsx` to change the banner
- **SideNav**: Modify `src/app/components/layout/SideNav.tsx` to add/remove nav items
- **TopBar**: Modify `src/app/components/layout/TopBar.tsx` to customize search and tools

All styling uses Tailwind CSS classes for easy customization.
