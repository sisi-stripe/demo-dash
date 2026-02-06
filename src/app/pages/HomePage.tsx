import { useState } from 'react';
import { WelcomeCard, UtilityCard, InsightsCard, DiscoveryCard, ProductCard } from '../components/widgets';
import { Icon } from '../../SailIcons';
import DensityControl from '../components/ui/DensityControl';

const productData = [
  {
    title: "In-person payments",
    description: "Build your ideal point of sale with Terminal.",
    image: "/src/assets/terminal.png"
  },
  {
    title: "Add a tax registration",
    description: "Use Stripe to register with local tax authorities.",
    image: "/src/assets/taxregistration.png"
  },
  {
    title: "Send invoices",
    description: "Create test invoices for your customers.",
    image: "/src/assets/invoice.png"
  },
  {
    title: "Payment Links",
    description: "Create and share payment links with your customers.",
    image: "/src/assets/terminal.png"
  },
  {
    title: "Subscriptions",
    description: "Set up recurring billing for your customers.",
    image: "/src/assets/taxregistration.png"
  },
  {
    title: "Connect",
    description: "Build a marketplace or platform with Stripe Connect.",
    image: "/src/assets/invoice.png"
  }
];

function HomeContentCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + visibleCards >= productData.length ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, productData.length - visibleCards) : prev - 1
    );
  };

  const visibleProducts = productData.slice(currentIndex, currentIndex + visibleCards);

  // If we're at the end and need to wrap, add cards from the beginning
  if (visibleProducts.length < visibleCards) {
    visibleProducts.push(...productData.slice(0, visibleCards - visibleProducts.length));
  }

  return (
    <>
      <DensityControl />
      <div style={{ padding: 'var(--container-padding, 24px)' }}>
        <div
          className="HomeContentCardsContainer grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 'var(--card-spacing, 20px)' }}
        >
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
                  color: 'var(--text-default, #1A1F36)',
                  gap: '8px'
                }}>
                  <span style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    minWidth: 0,
                    flex: 1
                  }}>pk_test_51SZy1bQ5F1kNqNL0Mf••••••••</span>
                  <Icon name="clipboard" size="small" style={{ color: 'var(--icon-subdued, #6C7688)', cursor: 'pointer', flexShrink: 0 }} />
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
                  color: 'var(--text-default, #1A1F36)',
                  gap: '8px'
                }}>
                  <span style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    minWidth: 0,
                    flex: 1
                  }}>sk_test_51SZy1bQ5F1kNqNL0wR••••••••</span>
                  <Icon name="clipboard" size="small" style={{ color: 'var(--icon-subdued, #6C7688)', cursor: 'pointer', flexShrink: 0 }} />
                </div>
              </div>
            </div>
          </UtilityCard>
        </div>

        {/* Card Slot 3 - Wraps to second row, takes up 2/3 width */}
        <div className="md:col-span-2">
          <DiscoveryCard
            eyebrowTitle="Discover more"
            secondaryCtaButton={{
              icon: "arrowLeft",
              onClick: handlePrev
            }}
            ctaButton={{
              icon: "arrowRight",
              onClick: handleNext
            }}
          >
            <div
              className="carousel-container flex gap-2 h-full"
              style={{
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              {visibleProducts.map((product, index) => (
                <ProductCard
                  key={`${currentIndex}-${index}`}
                  title={product.title}
                  description={product.description}
                  image={product.image}
                />
              ))}
            </div>
          </DiscoveryCard>
        </div>

        {/* Card Slot 4 - Takes up 1/3 width on second row */}
        <div>
          <InsightsCard
            eyebrowTitle="Daily insight"
            ctaButton={{
              icon: "arrowRight",
              onClick: () => console.log("See details clicked")
            }}
          >
            <div className="flex flex-col gap-2">
              <div className="text-d2">+6.34M</div>
              <div style={{ color: 'var(--text-subdued, #596171)' }}>Increase your authorization rate by replacing numbers with secure tokens.</div>
            </div>
          </InsightsCard>
        </div>
      </div>
      </div>
    </>
  );
}

export default function HomeContent() {
  return (
    <div style={{ background: 'var(--background-offset, #F5F6F8)', height: '100%' }}>
      <HomeContentCards />
    </div>
  );
}
