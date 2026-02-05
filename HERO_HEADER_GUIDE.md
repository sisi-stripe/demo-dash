# Hero Header Component System

## Overview
The HeroHeader component is a reusable component built with a text hierarchy system and modular UI components.

## Components Created

### 1. Text Hierarchy System (`src/app/components/ui/typography.ts`)
Defines standardized text styles:
- `greeting` - Small gray text for greetings (14px)
- `headingLarge` - Large dark heading text (48px)
- `headingMuted` - Large muted/gray heading text (48px)
- `label` - Small labels (14px)
- `displayLarge` - Extra large display numbers (80px)

### 2. Text Component (`src/app/components/ui/Text.tsx`)
Reusable text component that uses the typography system.

**Props:**
- `variant: TextStyle` - The text style to use
- `children: React.ReactNode` - The text content
- `className?: string` - Optional additional classes

**Example:**
```tsx
<Text variant="greeting">Good morning, Sisi</Text>
<Text variant="headingLarge">Welcome to Stripe.</Text>
```

### 3. HeroButton Component (`src/app/components/ui/HeroButton.tsx`)
Reusable button component with variants.

**Props:**
- `children: React.ReactNode` - Button text
- `onClick?: () => void` - Click handler
- `variant?: 'primary' | 'secondary'` - Button style (default: 'primary')
- `className?: string` - Optional additional classes

**Example:**
```tsx
<HeroButton onClick={handleClick}>Set up payments</HeroButton>
```

### 4. HeroHeader Component (`src/app/components/ui/HeroHeader.tsx`)
Main component that combines all elements.

**Props:**
- `greeting: string` - The greeting text (e.g., "Good morning, Sisi")
- `headingPrimary: string` - First part of heading (e.g., "Welcome to Stripe.")
- `headingSecondary: string` - Second part of heading in muted color
- `buttonText: string` - Text for the button
- `insightLabel: string` - Label for the insight (e.g., "Daily insight")
- `insightValue: string` - The insight value (e.g., "$3.34M")
- `onButtonClick?: () => void` - Button click handler

## Usage Example

```tsx
import HeroHeader from '../components/ui/HeroHeader';

export default function HomePage() {
  const handleSetupPayments = () => {
    console.log('Set up payments clicked');
  };

  return (
    <div>
      <HeroHeader
        greeting="Good morning, Sisi"
        headingPrimary="Welcome to Stripe."
        headingSecondary="Complete your account setup to activate your first payment method."
        buttonText="Set up payments"
        insightLabel="Daily insight"
        insightValue="$3.34M"
        onButtonClick={handleSetupPayments}
      />
      {/* Rest of your content */}
    </div>
  );
}
```

## Customization

### Changing Text Styles
Edit `src/app/components/ui/typography.ts` to modify the text hierarchy:

```ts
export const textStyles = {
  greeting: 'text-[14px] text-[#6B7280] font-normal leading-[20px]',
  // Add more styles or modify existing ones
} as const;
```

### Changing Button Styles
Edit `src/app/components/ui/HeroButton.tsx` to modify button appearance:

```ts
const buttonStyles = {
  primary: 'bg-[#2D3748] text-white hover:bg-[#1A202C]',
  secondary: 'bg-white text-[#2D3748] border border-[#E5E7EB] hover:bg-[#F9FAFB]',
} as const;
```

## Design Specifications
- Component padding: 24px
- Bottom border: 1px solid #E5E7EB
- Greeting text: 14px, #6B7280
- Heading text: 48px, #1F2937 (primary), #9CA3AF (secondary)
- Button: 8px border radius, 20px horizontal padding, 12px vertical padding
- Display value: 80px, #4B5563, semibold
