import svgPaths from "./svg-r3lovs252m";

function Button() {
  return (
    <div className="bg-[#596171] content-stretch flex gap-[6px] h-[28px] isolate items-center justify-center min-h-[28px] px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.15px] whitespace-nowrap z-[3]">
        <p className="leading-[20px]">Switch to live account</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#353a44] content-stretch flex h-[40px] items-center justify-between px-[16px] py-[12px] relative shrink-0 w-[1280px]" data-name="Header">
      <div className="flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-justify text-white tracking-[-0.15px] whitespace-nowrap">
        <p className="leading-[20px]">Sandbox</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-236px)] not-italic text-[12px] text-justify text-white top-[20.2px] tracking-[-0.15px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[20px]" style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--font-weight-normal)' }}>Set up your account here then verify your business before going live.</p>
      </div>
      <Button />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="aspect-[16/16] relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F5F6F8)" id="Ellipse 1870" r="12" />
        </svg>
      </div>
      <div className="aspect-[16/16] relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F5F6F8)" id="Ellipse 1870" r="12" />
        </svg>
      </div>
      <div className="aspect-[16/16] relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F5F6F8)" id="Ellipse 1870" r="12" />
        </svg>
      </div>
      <div className="aspect-[16/16] relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F5F6F8)" id="Ellipse 1870" r="12" />
        </svg>
      </div>
      <div className="aspect-[16/16] relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F5F6F8)" id="Ellipse 1870" r="12" />
        </svg>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="aspect-[16/16] relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F5F6F8)" id="Ellipse 1870" r="12" />
        </svg>
      </div>
      <div className="aspect-[16/16] relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F5F6F8)" id="Ellipse 1870" r="12" />
        </svg>
      </div>
      <div className="aspect-[16/16] relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F5F6F8)" id="Ellipse 1870" r="12" />
        </svg>
      </div>
      <div className="aspect-[16/16] relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F5F6F8)" id="Ellipse 1870" r="12" />
        </svg>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start relative shrink-0 w-[24px]">
      <div className="bg-[#f5f6f8] h-[22.857px] rounded-[3.038px] shrink-0 w-full" />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0">
      <Frame5 />
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F5F6F8)" id="Ellipse 1883" r="12" />
        </svg>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="bg-white h-full relative shrink-0" data-name="Nav">
      <div className="content-stretch flex h-full items-start overflow-clip px-[16px] py-[20px] relative rounded-[inherit]">
        <Frame6 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d8dee4] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Search1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="NextIcon__xsmall--search">
          <path clipRule="evenodd" d={svgPaths.p381bdf80} fill="var(--fill-0, #99A5B8)" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function SearchField() {
  return (
    <div className="bg-[#ebeef1] content-stretch flex gap-[8px] items-center opacity-80 overflow-clip p-[8px] relative rounded-[8px] shrink-0 w-[360px]" data-name="Search field">
      <Search1 />
    </div>
  );
}

function Search() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative rounded-[8px]" data-name="Search">
      <SearchField />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="absolute left-0 size-[24px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #E6EAF3)" id="Ellipse 895" r="12" />
        </svg>
      </div>
    </div>
  );
}

function Tools() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Tools">
      <Frame />
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #E6EAF3)" id="Ellipse 893" r="12" />
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[24px] relative shrink-0 w-[24.382px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.3818 24">
        <g id="Group 1073714514">
          <circle cx="11.9576" cy="12.0006" fill="var(--fill-0, #F5F6F8)" id="Ellipse 1879" r="11.9576" />
          <circle cx="12.3818" cy="12" fill="var(--fill-0, #323232)" id="Ellipse 1925" r="12" />
          <g id="Group 1073714510">
            <line id="Line 1060" stroke="var(--stroke-0, white)" strokeWidth="1.5" x1="12.6318" x2="12.6318" y1="6.5" y2="17.5" />
            <line id="Line 1061" stroke="var(--stroke-0, white)" strokeWidth="1.5" x1="6.88184" x2="17.8818" y1="11.75" y2="11.75" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex gap-[16px] h-[36px] items-center justify-end relative shrink-0" data-name="Right side">
      <Tools />
      <Group />
    </div>
  );
}

function TopbarAbsolutelyPositionedForGradientToFadeBehind() {
  return (
    <div className="backdrop-blur-[25px] bg-white content-stretch flex gap-[10px] h-[60px] items-center justify-center px-[24px] py-[8px] shrink-0 sticky top-0 w-[1224px]" data-name="Topbar (absolutely positioned for gradient to fade behind)">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <Search />
      <RightSide />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-full items-end min-h-px min-w-px relative">
      <TopbarAbsolutelyPositionedForGradientToFadeBehind />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative rounded-[12px] w-full">
      <Nav />
      <Frame1 />
    </div>
  );
}

export default function DashboardBase() {
  return (
    <div className="bg-[#353a44] content-stretch flex flex-col items-start overflow-clip relative rounded-bl-[16px] rounded-br-[16px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.04),0px_10px_18px_0px_rgba(0,0,0,0.05),0px_18px_56px_0px_rgba(0,0,0,0.1)] size-full" data-name="Dashboard Base">
      <Header />
      <Frame2 />
    </div>
  );
}