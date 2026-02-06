import { WelcomeCard, UtilityCard, InsightsCard } from '../components/widgets';
import { Icon } from '../../SailIcons';

function HomeContentCards() {
  return (
    <div style={{ padding: '24px' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
        {/* Card Slot 1 - Takes up 2/3 width on desktop, full width on mobile */}
        <div className="md:col-span-2">
          <WelcomeCard
            eyebrowTitle="Getting Started"
            ctaButton={{
              icon: "arrowRight",
              onClick: () => console.log("Set up payments clicked")
            }}
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Welcome to Stripe</h2>
            <p style={{ color: 'var(--text-subdued, #596171)' }}>Complete your account setup to activate your first payment method.</p>
          </WelcomeCard>
        </div>

        {/* Card Slot 2 - Takes up 1/3 width */}
        <div>
          <UtilityCard
            eyebrowTitle="API Keys"
            ctaButton={{
              icon: "arrowRight",
              onClick: () => console.log("View all clicked")
            }}
          >
            <div className="flex flex-col gap-4">
              {/* Publishable key */}
              <div>
                <h3 style={{
                  color: 'var(--text-subdued, #596171)',
                  fontSize: '14px',
                  fontWeight: 500,
                  marginBottom: '8px'
                }}>
                  Publishable key
                </h3>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  backgroundColor: 'var(--background-offset, #F5F6F8)',
                  borderRadius: '8px',
                  fontFamily: 'monospace',
                  fontSize: '14px',
                  color: 'var(--text-default, #1A1F36)'
                }}>
                  <span>pk_test_51SZy1bQ5F1kNqNL0Mf••••••••</span>
                  <Icon name="clipboard" size="small" style={{ color: 'var(--icon-subdued, #6C7688)', cursor: 'pointer' }} />
                </div>
              </div>

              {/* Secret key */}
              <div>
                <h3 style={{
                  color: 'var(--text-subdued, #596171)',
                  fontSize: '14px',
                  fontWeight: 500,
                  marginBottom: '8px'
                }}>
                  Secret key
                </h3>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  backgroundColor: 'var(--background-offset, #F5F6F8)',
                  borderRadius: '8px',
                  fontFamily: 'monospace',
                  fontSize: '14px',
                  color: 'var(--text-default, #1A1F36)'
                }}>
                  <span>sk_test_51SZy1bQ5F1kNqNL0wR••••••••</span>
                  <Icon name="clipboard" size="small" style={{ color: 'var(--icon-subdued, #6C7688)', cursor: 'pointer' }} />
                </div>
              </div>
            </div>
          </UtilityCard>
        </div>

        {/* Card Slot 3 - Wraps to second row */}
        <div>
          <InsightsCard
            eyebrowTitle="Analytics"
            ctaButton={{
              icon: "arrowRight",
              onClick: () => console.log("See details clicked")
            }}
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Business Insights</h2>
            <p style={{ color: 'var(--text-subdued, #596171)' }}>Track your key metrics and performance.</p>
          </InsightsCard>
        </div>
      </div>
    </div>
  );
}

export default function HomeContent() {
  return (
    <div style={{ background: 'var(--background-offset, #F5F6F8)', height: '100%' }}>
      <HomeContentCards />
    </div>
  );
}
