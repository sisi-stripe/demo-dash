import { useState } from 'react';
import HeroHeader from '../components/ui/HeroHeader';
import HomeContent from './HomePage';
import InputBox from '../components/ui/InputBox';

export default function DashHome() {
  const [showInputBox, setShowInputBox] = useState(false);

  const handleSetupPayments = () => {
    console.log('Set up payments clicked');
  };

  const toggleInputBox = () => {
    setShowInputBox(prev => !prev);
  };

  return (
    <div data-name="NewUserHomePage" style={{ height: '100svh', position: 'relative' }}>
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

      <HeroHeader
        greeting="Good morning, Sisi"
        headingPrimary="Welcome to Stripe."
        headingSecondary="Complete your account setup to activate your first payment method."
        buttonText="Set up payments"
        insightLabel="Daily insight"
        insightValue="$3.34M"
        onButtonClick={handleSetupPayments}
      />
      <HomeContent onWelcomeCardClick={toggleInputBox} />
    </div>
  );
}
