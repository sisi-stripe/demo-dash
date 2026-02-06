import { useState } from 'react';
import DashboardLayout from './components/layout/DashboardLayout';
import DashHome from './pages/DashHome';
import SettingsPage from './pages/SettingsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'settings'>('home');

  const handleNavigate = (page: string) => {
    if (page === 'home' || page === 'settings') {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-full h-screen">
      <DashboardLayout onNavigate={handleNavigate} currentPage={currentPage}>
        {currentPage === 'home' && <DashHome />}
        {currentPage === 'settings' && <SettingsPage />}
      </DashboardLayout>
    </div>
  );
}
