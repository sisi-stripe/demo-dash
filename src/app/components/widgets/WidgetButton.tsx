import { Icon } from '../../../SailIcons';

interface WidgetButtonProps {
  onClick?: () => void;
  icon: string;
}

export default function WidgetButton({ onClick, icon }: WidgetButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        width: '32px',
        height: '32px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '4px',
        background: 'var(--brand-25, #F7F5FD)',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--icon-primary, #675DFF)',
      }}
    >
      <Icon name={icon} size="xsmall" />
    </button>
  );
}
