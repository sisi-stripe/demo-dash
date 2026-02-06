import { textStyles, TextStyle } from './typography';
import { CSSProperties } from 'react';

interface TextProps {
  variant: TextStyle;
  children: React.ReactNode;
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
  style?: CSSProperties;
}

export default function Text({ variant, children, className = '', as = 'span', style }: TextProps) {
  const Component = as;

  return (
    <Component className={`${textStyles[variant]} ${className}`} style={style}>
      {children}
    </Component>
  );
}
