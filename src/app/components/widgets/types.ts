import { ReactNode } from 'react';

export interface CardProps {
  eyebrowTitle?: string;
  ctaButton?: {
    icon: string;
    onClick: () => void;
  };
  secondaryCtaButton?: {
    icon: string;
    onClick: () => void;
  };
  onClick?: () => void;
  children: ReactNode;
}
