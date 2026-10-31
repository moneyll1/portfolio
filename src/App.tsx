import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RouterProvider, useRouter } from './router/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { NowPage } from './pages/NowPage';
import { LabPage } from './pages/LabPage';
import { WritingPage } from './pages/WritingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('mg-theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return 'light'; // Default light canvas matching aanandmadhav.com
  });

  // Synchronize root class with theme
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
    localStorage.setItem('mg-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/work':
        return <WorkPage />;
      case '/now':
        return <NowPage />;
      case '/lab':
        return <LabPage />;
      case '/writing':
        return <WritingPage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      case '/home':
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg text-fg selection:bg-accent selection:text-white transition-colors duration-200 relative overflow-x-hidden">
      <div className="ambient-glow" aria-hidden="true" />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      
      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
};

export default App;
