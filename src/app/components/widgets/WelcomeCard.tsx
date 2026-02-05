import { CardProps } from './types';
import WidgetButton from './WidgetButton';

export default function WelcomeCard({ eyebrowTitle, ctaButton, children }: CardProps) {
  return (
    <div
      className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col transition-shadow duration-200"
      style={{
        minHeight: '272px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 15px 35px 0 rgba(48, 49, 61, 0.08), 0 5px 15px 0 rgba(0, 0, 0, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* WidgetCardHeader */}
      <div
        data-name="WidgetCardHeader"
        style={{
          display: 'flex',
          height: '32px',
          alignItems: 'center',
          gap: '24px',
          flexShrink: 0,
          alignSelf: 'stretch',
        }}
      >
        {eyebrowTitle && (
          <div
            style={{
              fontFamily: '"SF Pro Text"',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '20px',
              letterSpacing: '-0.15px',
              color: 'var(--text-subdued, #596171)',
            }}
          >
            {eyebrowTitle}
          </div>
        )}

        {ctaButton && (
          <div className="ml-auto">
            <WidgetButton onClick={ctaButton.onClick} icon={ctaButton.icon} />
          </div>
        )}
      </div>

      <div className="flex-1 mt-4">
        {children}
      </div>
    </div>
  );
}
