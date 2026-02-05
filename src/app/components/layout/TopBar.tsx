import svgPaths from "../../../imports/svg-r3lovs252m";

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

export default function TopBar() {
  return (
    <div className="backdrop-blur-[25px] bg-white content-stretch flex gap-[10px] h-[60px] items-center justify-center px-[24px] py-[8px] shrink-0 sticky top-0 w-full rounded-tr-[12px]" data-name="Topbar">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <Search />
      <RightSide />
    </div>
  );
}
