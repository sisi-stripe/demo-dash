import Text from './Text';
import HeroButton from './HeroButton';
import ShimmerWave from './ShimmerWave';

interface HeroHeaderProps {
  greeting: string;
  headingPrimary: string;
  headingSecondary: string;
  buttonText: string;
  insightLabel: string;
  insightValue: string;
  onButtonClick?: () => void;
}

export default function HeroHeader({
  greeting,
  headingPrimary,
  headingSecondary,
  buttonText,
  insightLabel,
  insightValue,
  onButtonClick
}: HeroHeaderProps) {
  return (
    <div className="border-b border-[#E5E7EB]" style={{ background: 'var(--background-surface, #FFFFFF)' }}>
      <div className="flex items-start justify-between">
        {/* Left content container */}
        <div
          className="flex flex-col items-start gap-[32px] shrink-0"
          style={{
            width: '760px',
            height: '278px',
            padding: '24px',
          }}
        >
          {/* Greeting */}
          <Text variant="greeting">{greeting}</Text>

          {/* Main heading */}
          <Text variant="h1" as="h1">
            {headingPrimary} {headingSecondary}
          </Text>

          {/* Button */}
          <HeroButton type="primary" size="large" onClick={onButtonClick}>
            {buttonText}
          </HeroButton>
        </div>

        {/* Right content - Daily insight */}
        <div
          className="relative flex flex-col justify-end items-start gap-[10px] shrink-0 self-stretch"
          style={{
            width: '300px',
            padding: '24px',
          }}
        >
          <ShimmerWave />
          <Text variant="label" className="relative z-10">{insightLabel}</Text>
          <Text variant="d1" className="relative z-10">{insightValue}</Text>
        </div>
      </div>
    </div>
  );
}
