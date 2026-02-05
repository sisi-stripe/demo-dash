import { ForwardRefExoticComponent, SVGProps, RefAttributes } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: string;
  size?: 'xsmall' | 'small' | 'medium' | 'large';
}

export interface BrandIconProps extends SVGProps<SVGSVGElement> {
  name: string;
  size?: 'xsmall' | 'small' | 'medium' | 'large';
}

export interface FlagIconProps extends SVGProps<SVGSVGElement> {
  name: string;
  size?: 'xsmall' | 'small' | 'medium' | 'large';
}

export const Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
export const BrandIcon: ForwardRefExoticComponent<BrandIconProps & RefAttributes<SVGSVGElement>>;
export const FlagIcon: ForwardRefExoticComponent<FlagIconProps & RefAttributes<SVGSVGElement>>;
