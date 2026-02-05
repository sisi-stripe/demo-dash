import HeroHeader from '../components/ui/HeroHeader';
import HomeContent from './HomePage';

export default function DashHome() {
  const handleSetupPayments = () => {
    console.log('Set up payments clicked');
  };

  return (
    <div data-name="NewUserHomePage" style={{ height: '100%' }}>
      <HeroHeader
        greeting="Good morning, Sisi"
        headingPrimary="Welcome to Stripe."
        headingSecondary="Complete your account setup to activate your first payment method."
        buttonText="Set up payments"
        insightLabel="Daily insight"
        insightValue="$3.34M"
        onButtonClick={handleSetupPayments}
      />
      <HomeContent />
    </div>
  );
}
