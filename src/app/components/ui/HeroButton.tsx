import { colors, spacing } from './tokens';

interface HeroButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const buttonTypeClasses = {
  primary: 'text-white',
  secondary: 'bg-white border',
} as const;

const buttonTypeColors = {
  primary: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    color: colors.dark,
  },
} as const;

const buttonSizeStyles = {
  small: 'h-[32px] min-h-[32px] text-[13px]',
  medium: 'h-[36px] min-h-[36px] text-[15px]',
  large: 'h-[40px] min-h-[40px] text-[16px]',
} as const;

export default function HeroButton({
  children,
  onClick,
  type = 'primary',
  size = 'large',
  className = ''
}: HeroButtonProps) {
  return (
    <button
      onClick={onClick}
      style={buttonTypeColors[type]}
      className={`
        flex
        py-[8px]
        px-[16px]
        gap-[8px]
        justify-center
        items-center
        rounded-[4px]
        font-medium
        transition-all
        hover:opacity-90
        ${buttonTypeClasses[type]}
        ${buttonSizeStyles[size]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
