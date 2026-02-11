import { useState } from 'react';
import { Icon } from '../../SailIcons';
import { UtilityCard, InsightsCard } from '../components/widgets';
import InputBox from '../components/ui/InputBox';

export default function ActiveDashHome() {
  const [showInputBox, setShowInputBox] = useState(false);

  const toggleInputBox = () => {
    setShowInputBox(prev => !prev);
  };

  const quickActions = [
    { icon: 'invoice', label: 'Create invoice', onClick: () => console.log('Create invoice') },
    { icon: 'subscription', label: 'Create subscription', onClick: () => console.log('Create subscription') },
    { icon: 'link', label: 'Create a Payment link', onClick: () => console.log('Create payment link') },
    { icon: 'payment', label: 'Create a payment', onClick: () => console.log('Create payment') },
  ];

  return (
    <div data-name="ActiveUserHomePage" style={{ height: '100svh', position: 'relative' }}>
      <style>
        {`
          @keyframes slideUpIn {
            from {
              transform: translate(-50%, calc(100% + 20px));
              opacity: 0;
            }
            to {
              transform: translate(-50%, 0);
              opacity: 1;
            }
          }
        `}
      </style>
      {/* Input Box positioned above dashboard */}
      {showInputBox && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          animation: 'slideUpIn 0.3s ease-out forwards',
        }}>
          <InputBox onClose={toggleInputBox} />
        </div>
      )}

      {/* Active User Header */}
      <div className="border-b border-[#E5E7EB]" style={{ background: 'var(--background-surface, #FFFFFF)', padding: '24px' }}>
        <div style={{
          fontFamily: '"SF Pro Text"',
          fontSize: '14px',
          fontWeight: 600,
          lineHeight: '20px',
          letterSpacing: '-0.15px',
          color: 'var(--text-subdued, #596171)',
          marginBottom: '12px',
        }}>
          Stripe Slab Gym
        </div>

        <div style={{
          fontFamily: '"SF Pro Display"',
          fontSize: '32px',
          fontWeight: 600,
          lineHeight: '40px',
          letterSpacing: '-0.5px',
          color: 'var(--text-default, #1A1F36)',
          marginBottom: '24px',
        }}>
          $1,240 walk-in revenue{' '}
          <span style={{ color: 'var(--text-subdued, #596171)' }}>
            (up 18% from week)
          </span>
        </div>

        {/* Quick Actions */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              style={{
                display: 'flex',
                padding: '8px 16px',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '6px',
                border: '1px solid var(--border-default, #E3E8EF)',
                background: 'white',
                cursor: 'pointer',
                fontFamily: '"SF Pro Text"',
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '20px',
                letterSpacing: '-0.15px',
                color: 'var(--text-default, #1A1F36)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--background-offset, #F5F6F8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
              }}
            >
              <Icon name={action.icon} size="small" />
              {action.label}
            </button>
          ))}
          <button
            style={{
              display: 'flex',
              width: '36px',
              height: '36px',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '6px',
              border: '1px solid var(--border-default, #E3E8EF)',
              background: 'white',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--background-offset, #F5F6F8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
            }}
          >
            <Icon name="settings" size="small" />
          </button>
        </div>
      </div>

      {/* Dashboard Content */}
      <div>
        {/* Insights Section */}
        <div>
          <div style={{
            display: 'flex',
            padding: '12px 20px',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            alignSelf: 'stretch',
            borderTop: '1px solid var(--border-default, #D8DEE4)',
            borderBottom: '1px solid var(--border-default, #D8DEE4)',
            background: 'var(--background-surface, #FFFFFF)',
          }}>
            <h2 style={{
              fontFamily: '"SF Pro Text"',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '24px',
              letterSpacing: '-0.15px',
              color: 'var(--text-default, #1A1F36)',
            }}>
              Insights
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 'var(--card-spacing, 20px)', padding: 'var(--container-padding, 24px)', background: 'var(--background-offset, #F5F6F8)' }}>
            <InsightsCard
              eyebrowTitle="Daily insight"
              ctaButton={{
                icon: "arrowRight",
                onClick: () => console.log("See details clicked")
              }}
            >
              <div className="flex flex-col gap-2">
                <div className="text-d2">+6.72M USD</div>
                <div style={{ color: 'var(--text-subdued, #596171)' }}>
                  Increase your authorization rate by replacing numbers with secure tokens.
                </div>
              </div>
            </InsightsCard>

            <div className="md:col-span-2">
              <UtilityCard eyebrowTitle="What we know about your business">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', }}>
                <div>
                  <div style={{ marginBottom: '8px' }}>
                    <Icon name="location" size="small" />
                  </div>
                  <div style={{
                    fontFamily: '"SF Pro Text"',
                    fontSize: '14px',
                    fontWeight: 600,
                    lineHeight: '20px',
                    letterSpacing: '-0.15px',
                    color: 'var(--text-default, #1A1F36)',
                    marginBottom: '4px',
                  }}>
                    Growing members fast
                  </div>
                  <div style={{
                    fontFamily: '"SF Pro Text"',
                    fontSize: '13px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    letterSpacing: '-0.15px',
                    color: 'var(--text-subdued, #596171)',
                  }}>
                    Signups and check-ins are growing
                  </div>
                </div>

                <div>
                  <div style={{ marginBottom: '8px' }}>
                    <Icon name="location" size="small" />
                  </div>
                  <div style={{
                    fontFamily: '"SF Pro Text"',
                    fontSize: '14px',
                    fontWeight: 600,
                    lineHeight: '20px',
                    letterSpacing: '-0.15px',
                    color: 'var(--text-default, #1A1F36)',
                    marginBottom: '4px',
                  }}>
                    Localized user base
                  </div>
                  <div style={{
                    fontFamily: '"SF Pro Text"',
                    fontSize: '13px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    letterSpacing: '-0.15px',
                    color: 'var(--text-subdued, #596171)',
                  }}>
                    Most members live within a 5 mile radius
                  </div>
                </div>

                <div>
                  <div style={{ marginBottom: '8px' }}>
                    <Icon name="device" size="small" />
                  </div>
                  <div style={{
                    fontFamily: '"SF Pro Text"',
                    fontSize: '14px',
                    fontWeight: 600,
                    lineHeight: '20px',
                    letterSpacing: '-0.15px',
                    color: 'var(--text-default, #1A1F36)',
                    marginBottom: '4px',
                  }}>
                    In-person purchases matter
                  </div>
                  <div style={{
                    fontFamily: '"SF Pro Text"',
                    fontSize: '13px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    letterSpacing: '-0.15px',
                    color: 'var(--text-subdued, #596171)',
                  }}>
                    Terminal drive meaningful spend
                  </div>
                </div>

                <div>
                  <div style={{ marginBottom: '8px' }}>
                    <Icon name="refresh" size="small" />
                  </div>
                  <div style={{
                    fontFamily: '"SF Pro Text"',
                    fontSize: '14px',
                    fontWeight: 600,
                    lineHeight: '20px',
                    letterSpacing: '-0.15px',
                    color: 'var(--text-default, #1A1F36)',
                    marginBottom: '4px',
                  }}>
                    Strong recurring revenue
                  </div>
                  <div style={{
                    fontFamily: '"SF Pro Text"',
                    fontSize: '13px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    letterSpacing: '-0.15px',
                    color: 'var(--text-subdued, #596171)',
                  }}>
                    Monthly subscriptions form your revenue backbone
                  </div>
                </div>
              </div>
            </UtilityCard>
            </div>
          </div>
        </div>

        {/* Dashboard Section */}
        <div>
          <div style={{
            display: 'flex',
            padding: '12px 20px',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            alignSelf: 'stretch',
            borderTop: '1px solid var(--border-default, #D8DEE4)',
            borderBottom: '1px solid var(--border-default, #D8DEE4)',
            background: 'var(--background-surface, #FFFFFF)',
          }}>
            <h2 style={{
              fontFamily: '"SF Pro Text"',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '24px',
              letterSpacing: '-0.15px',
              color: 'var(--text-default, #1A1F36)',
            }}>
              Dashboard
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 'var(--card-spacing, 20px)', padding: 'var(--container-padding, 24px)', background: 'var(--background-offset, #F5F6F8)', height: '620px' }}>
            {/* Left Column - Large Chart */}
            <div style={{ flex: '2', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <UtilityCard
                eyebrowTitle="Today"
                ctaButton={{
                  icon: "arrowRight",
                  onClick: () => console.log("View chart details")
                }}
              >
                <div style={{
                  height: '312px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-subdued, #596171)',
                }}>
                  [Line Chart Placeholder]
                </div>
              </UtilityCard>
            </div>

            {/* Right Column - Metrics */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: '1 0 0' }}>
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <UtilityCard
                  eyebrowTitle="USD balance"
                  ctaButton={{
                    icon: "arrowRight",
                    onClick: () => console.log("View USD balance details")
                  }}
                >
                <div style={{
                  fontFamily: '"SF Pro Display"',
                  fontSize: '32px',
                  fontWeight: 600,
                  lineHeight: '40px',
                  letterSpacing: '-0.5px',
                  color: 'var(--text-default, #1A1F36)',
                  marginBottom: '12px',
                }}>
                  $255,000
                </div>
                <div style={{
                  height: '8px',
                  borderRadius: '4px',
                  background: 'linear-gradient(to right, #1A1F36 0%, #1A1F36 70%, #635BFF 70%, #635BFF 80%, #C3B6FB 80%, #C3B6FB 90%, #E55B9A 90%, #E55B9A 95%, #FF6B35 95%, #FF6B35 100%)',
                }}>
                </div>
              </UtilityCard>
              </div>

              <div style={{ flex: '1', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <UtilityCard
                  eyebrowTitle="Payouts"
                  ctaButton={{
                    icon: "arrowRight",
                    onClick: () => console.log("View payouts details")
                  }}
                >
                <div style={{
                  fontFamily: '"SF Pro Display"',
                  fontSize: '32px',
                  fontWeight: 600,
                  lineHeight: '40px',
                  letterSpacing: '-0.5px',
                  color: 'var(--text-default, #1A1F36)',
                  marginBottom: '12px',
                }}>
                  $40
                </div>
                <div style={{
                  height: '8px',
                  borderRadius: '4px',
                  background: 'linear-gradient(to right, #1A1F36 0%, #1A1F36 85%, #635BFF 85%, #635BFF 100%)',
                }}>
                </div>
              </UtilityCard>
              </div>
            </div>
          </div>

          {/* Bottom Row - Small Charts */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 'var(--card-spacing, 20px)', padding: '0 var(--container-padding, 24px) var(--container-padding, 24px)', background: 'var(--background-offset, #F5F6F8)' }}>
            <UtilityCard
              eyebrowTitle="Widget title"
              ctaButton={{
                icon: "arrowRight",
                onClick: () => console.log("View widget details")
              }}
            >
              <div style={{
                height: '180px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-subdued, #596171)',
              }}>
                [Bar Chart Placeholder]
              </div>
            </UtilityCard>

            <UtilityCard
              eyebrowTitle="Widget title"
              ctaButton={{
                icon: "arrowRight",
                onClick: () => console.log("View widget details")
              }}
            >
              <div style={{
                height: '180px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-subdued, #596171)',
              }}>
                [Line Chart Placeholder]
              </div>
            </UtilityCard>

            <UtilityCard
              eyebrowTitle="Widget title"
              ctaButton={{
                icon: "arrowRight",
                onClick: () => console.log("View widget details")
              }}
            >
              <div style={{
                height: '180px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-subdued, #596171)',
              }}>
                [Line Chart Placeholder]
              </div>
            </UtilityCard>
          </div>
        </div>
      </div>
    </div>
  );
}
