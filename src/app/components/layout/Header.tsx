function Button() {
  return (
    <div className="bg-[#596171] content-stretch flex gap-[6px] h-[28px] isolate items-center justify-center min-h-[28px] px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.15px] whitespace-nowrap z-[3]">
        <p className="leading-[20px]">Switch to live account</p>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-[#353a44] content-stretch flex h-[40px] items-center justify-between px-[16px] py-[12px] relative shrink-0 w-full" data-name="Header">
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
