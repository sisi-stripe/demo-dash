import { WelcomeCard, QuickActionsCard, InsightsCard } from '../components/widgets';
import { Icon, BrandIcon, FlagIcon } from '../../../SailIcons';

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
            <p className="text-gray-600">Complete your account setup to activate your first payment method.</p>
          </WelcomeCard>
        </div>

        {/* Card Slot 2 - Takes up 1/3 width */}
        <div>
          <QuickActionsCard
            eyebrowTitle="Quick Access"
            ctaButton={{
              icon: "arrowRight",
              onClick: () => console.log("View all clicked")
            }}
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Quick Actions</h2>
            <p className="text-gray-600">Access your most used features quickly.</p>
          </QuickActionsCard>
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
            <p className="text-gray-600">Track your key metrics and performance.</p>
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
