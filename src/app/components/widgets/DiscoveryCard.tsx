import { CardProps } from './types';
import WidgetButton from './WidgetButton';

export default function DiscoveryCard({ eyebrowTitle, ctaButton, secondaryCtaButton, children }: CardProps) {
  return (
    <div
      className="bg-white border border-gray-200 p-6 flex flex-col transition-shadow duration-200 h-full"
      style={{
        height: '340px',
        borderRadius: 'var(--radius-card, 8px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 12px 0 rgba(48, 49, 61, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.08)';
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

        {(secondaryCtaButton || ctaButton) && (
          <div className="ml-auto" style={{ display: 'flex', gap: '4px' }}>
            {secondaryCtaButton && (
              <WidgetButton onClick={secondaryCtaButton.onClick} icon={secondaryCtaButton.icon} />
            )}
            {ctaButton && (
              <WidgetButton onClick={ctaButton.onClick} icon={ctaButton.icon} />
            )}
          </div>
        )}
      </div>

      <div className="flex-1 mt-4">
        {children}
      </div>
    </div>
  );
}
