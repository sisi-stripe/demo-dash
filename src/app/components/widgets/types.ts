import { ReactNode } from 'react';

export interface CardProps {
  eyebrowTitle?: string;
  ctaButton?: {
    icon: string;
    onClick: () => void;
  };
  children: ReactNode;
}
