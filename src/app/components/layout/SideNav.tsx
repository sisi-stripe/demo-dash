import { Icon, BrandIcon, FlagIcon } from '../../../SailIcons';

interface Frame3Props {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

function Frame3({ onNavigate, currentPage }: Frame3Props) {
  const isHomeActive = currentPage === 'home';

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <button
        onClick={() => onNavigate?.('home')}
        className="relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity flex items-center justify-center"
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '4px',
          background: isHomeActive ? 'var(--brand-50, #EFECFC)' : 'transparent',
          color: isHomeActive ? 'var(--icon-primary, rgba(103, 93, 255, 1))' : 'var(--icon-subdued, #6C7688)',
        }}
      >
        <Icon name="home" size="small" />
      </button>
      <button
        className="relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity flex items-center justify-center"
        style={{
          width: '24px',
          height: '24px',
          color: 'var(--icon-subdued, #6C7688)',
        }}
      >
        <Icon name="balance" size="small" />
      </button>
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F5F6F8)" id="Ellipse 1870" r="12" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F5F6F8)" id="Ellipse 1870" r="12" />
        </svg>
      </div>
      <button
        onClick={() => onNavigate?.('settings')}
        className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-70 transition-opacity"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F5F6F8)" id="Ellipse 1870" r="12" />
        </svg>
      </button>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F5F6F8)" id="Ellipse 1870" r="12" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F5F6F8)" id="Ellipse 1870" r="12" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F5F6F8)" id="Ellipse 1870" r="12" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F5F6F8)" id="Ellipse 1870" r="12" />
        </svg>
      </div>
    </div>
  );
}

interface Frame5Props {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

function Frame5({ onNavigate, currentPage }: Frame5Props) {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start relative shrink-0 w-[24px]">
      <button
        onClick={() => onNavigate?.('home')}
        className="bg-[#f5f6f8] h-[22.857px] rounded-[3.038px] shrink-0 w-full cursor-pointer hover:opacity-70 transition-opacity"
      />
      <Frame3 onNavigate={onNavigate} currentPage={currentPage} />
      <Frame4 />
    </div>
  );
}

interface Frame6Props {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

function Frame6({ onNavigate, currentPage }: Frame6Props) {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0">
      <Frame5 onNavigate={onNavigate} currentPage={currentPage} />
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F5F6F8)" id="Ellipse 1883" r="12" />
        </svg>
      </div>
    </div>
  );
}

interface SideNavProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

export default function SideNav({ onNavigate, currentPage }: SideNavProps) {
  return (
    <div className="bg-white h-full relative shrink-0 w-[56px]" data-name="Nav">
      <div className="content-stretch flex h-full items-start overflow-clip px-[16px] py-[20px] relative rounded-[inherit]">
        <Frame6 onNavigate={onNavigate} currentPage={currentPage} />
      </div>
      <div aria-hidden="true" className="absolute border-[#d8dee4] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}
