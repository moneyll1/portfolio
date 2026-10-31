import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useRouter, Link } from '../router/RouterContext';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPath } = useRouter();

  const navItems = [
    { label: 'Work', href: '/work' },
    { label: 'Now', href: '/now' },
    { label: 'Lab', href: '/lab' },
    { label: 'Writing', href: '/writing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Header is fixed to the viewport top and remains exactly stationary when scrolled */}
      <header className="fixed top-0 left-0 right-0 z-50 h-20 w-full bg-bg/95 backdrop-blur-md border-b border-hair transition-colors duration-200">
        <div className="container h-full flex items-center justify-between">
          
          {/* Left: Professional Geometric Monogram + Bold Name + Monospace Subtitle */}
          <Link to="/home" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-bg-2 border border-hair flex items-center justify-center shrink-0 group-hover:border-accent transition-colors shadow-sm">
              <svg viewBox="0 0 100 100" className="w-5 h-5 text-fg">
                <path d="M 27 68 L 27 32 L 50 53 L 73 32 L 73 68" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="50" cy="53" r="4.5" fill="#E8613C" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-extrabold text-base sm:text-lg tracking-wider text-fg uppercase group-hover:text-accent transition-colors leading-tight">
                MANIL GHIMIRE
              </span>
              <span className="font-mono text-[10px] tracking-widest text-muted uppercase leading-tight mt-0.5">
                COMPUTER ENGINEERING · FULL-STACK DEVELOPER
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links with Active Underline Indicator */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs uppercase tracking-wider">
            <Link
              to="/home"
              className={`transition-colors py-2 relative font-medium ${
                currentPath === '/home' || currentPath === '/'
                  ? 'text-fg font-bold'
                  : 'text-muted hover:text-fg'
              }`}
            >
              <span>Home</span>
              {(currentPath === '/home' || currentPath === '/') && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {navItems.map((item) => {
              const isActive = currentPath === item.href;

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`transition-colors py-2 relative font-medium ${
                    isActive
                      ? 'text-fg font-bold'
                      : 'text-muted hover:text-fg'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Boxed Theme Switcher + "HIRE FOR PROJECT" Action Button */}
          <div className="flex items-center gap-3 sm:gap-3.5">
            
            {/* Boxed Theme Button ([ ☼ LIGHT ] / [ ☾ DARK ]) */}
            <button
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="px-3 py-1.5 rounded-md border border-hair hover:border-hair-2 bg-bg-2 text-fg hover:text-accent font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-semibold">LIGHT</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-accent" />
                  <span className="font-semibold">DARK</span>
                </>
              )}
            </button>

            {/* "HIRE FOR PROJECT ↗" Bordered Action Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md border border-hair hover:border-accent bg-bg text-fg hover:text-accent font-mono text-xs font-semibold uppercase tracking-wider transition-all shadow-sm group"
            >
              <span>HIRE FOR PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
              className="md:hidden p-2 rounded-md border border-hair text-fg"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bg flex flex-col p-6 sm:p-8 justify-between md:hidden"
          >
            <div className="flex items-center justify-between pb-4 border-b border-hair">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                <span className="font-sans font-bold text-base text-fg uppercase tracking-wider">
                  MANIL GHIMIRE
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-md border border-hair text-fg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-6 py-8 font-mono text-lg uppercase tracking-wider">
              <Link
                to="/home"
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors ${
                  currentPath === '/home' || currentPath === '/'
                    ? 'text-accent font-bold'
                    : 'text-fg'
                }`}
              >
                Home
              </Link>

              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors ${
                    currentPath === item.href
                      ? 'text-accent font-bold'
                      : 'text-fg'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="pt-6 border-t border-hair flex flex-col gap-4 font-mono text-xs">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-md border border-accent bg-accent text-white font-semibold uppercase tracking-wider text-center"
              >
                HIRE FOR PROJECT ↗
              </Link>
              <span className="text-muted text-center">
                Kathmandu, Nepal (27.7172° N, 85.3240° E)
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
