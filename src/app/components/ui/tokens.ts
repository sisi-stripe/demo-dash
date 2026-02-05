// Design tokens for the UI system

export const colors = {
  // Primary colors
  primary: '#675DFF',
  primaryHover: '#5547E6',

  // Neutral colors
  dark: '#2D3748',
  darkHover: '#1A202C',
  text: '#1F2937',
  gray: '#6B7280',
  lightGray: '#9CA3AF',
  subdued: '#6B7280',
  border: '#E5E7EB',

  // Background colors
  white: '#FFFFFF',
  lightBackground: '#F9FAFB',
} as const;

export const spacing = {
  small: '8px',
  medium: '16px',
  large: '24px',
} as const;

export type ColorToken = keyof typeof colors;
export type SpacingToken = keyof typeof spacing;
