// Text hierarchy system - uses CSS classes from typography.css
export const textStyles = {
  // Heading styles (from typography.css)
  h1: 'text-h1',
  h2: 'text-h2',
  h3: 'text-h3',
  h4: 'text-h4',
  h5: 'text-h5',
  h6: 'text-h6',

  // Body text styles
  body: 'text-body',
  bodySmall: 'text-body-small',

  // Label and caption styles
  label: 'text-label',
  caption: 'text-caption',

  // Display styles
  displayLarge: 'text-display-large',
  displayMedium: 'text-display-medium',
  d1: 'text-d1',

  // Legacy styles (for backwards compatibility)
  greeting: 'text-label',
  headingLarge: 'text-display-medium',
  headingMuted: 'text-display-medium opacity-60',
} as const;

// No inline styles needed - all styles are in typography.css
export const textInlineStyles = {} as const;

export type TextStyle = keyof typeof textStyles;
