import { ReactNode } from 'react';
import Header from './Header';
import SideNav from './SideNav';
import TopBar from './TopBar';

interface DashboardLayoutProps {
  children: ReactNode;
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

export default function DashboardLayout({ children, onNavigate, currentPage }: DashboardLayoutProps) {
  return (
    <div className="bg-[#353a44] content-stretch flex flex-col items-start overflow-clip relative rounded-bl-[16px] rounded-br-[16px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.04),0px_10px_18px_0px_rgba(0,0,0,0.05),0px_18px_56px_0px_rgba(0,0,0,0.1)] size-full" data-name="Dashboard Base">
      <Header />
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative rounded-[12px] w-full">
        <SideNav onNavigate={onNavigate} currentPage={currentPage} />
        <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-full items-end min-h-px min-w-px relative rounded-tr-[12px]">
          <TopBar />
          <div className="flex-1 w-full overflow-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
