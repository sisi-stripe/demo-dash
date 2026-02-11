import { useState, useEffect } from 'react';
import DashboardLayout from './components/layout/DashboardLayout';
import DashHome from './pages/DashHome';
import ActiveDashHome from './pages/ActiveDashHome';
import SettingsPage from './pages/SettingsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'settings'>('home');
  const [userMode, setUserMode] = useState<'new' | 'active'>('new');

  // Load user mode from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('userMode');
    if (stored === 'active' || stored === 'new') {
      setUserMode(stored);
    }
  }, []);

  // Listen for user mode changes from DensityControl
  useEffect(() => {
    const handleUserModeChange = (event: CustomEvent) => {
      const mode = event.detail.mode;
      if (mode === 'active' || mode === 'new') {
        setUserMode(mode);
      }
    };

    window.addEventListener('userModeChange', handleUserModeChange as EventListener);
    return () => {
      window.removeEventListener('userModeChange', handleUserModeChange as EventListener);
    };
  }, []);

  const handleNavigate = (page: string) => {
    if (page === 'home' || page === 'settings') {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-full h-screen">
      <DashboardLayout onNavigate={handleNavigate} currentPage={currentPage}>
        {currentPage === 'home' && userMode === 'new' && <DashHome />}
        {currentPage === 'home' && userMode === 'active' && <ActiveDashHome />}
        {currentPage === 'settings' && <SettingsPage />}
      </DashboardLayout>
    </div>
  );
}
