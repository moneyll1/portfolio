import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type RoutePath = '/home' | '/work' | '/now' | '/lab' | '/writing' | '/about' | '/contact';

interface RouterContextType {
  currentPath: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/home',
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

// Normalize path from window.location
const normalizePath = (pathname: string, hash: string): string => {
  // If hash routing is used (e.g. #/work or #work)
  if (hash) {
    const cleanHash = hash.replace(/^#\/?/, '/');
    if (['/home', '/work', '/now', '/lab', '/writing', '/about', '/contact'].includes(cleanHash)) {
      return cleanHash;
    }
  }

  // Normal pathname
  const cleanPath = pathname.toLowerCase().replace(/\/$/, '') || '/';
  if (cleanPath === '/' || cleanPath === '/home') return '/home';
  if (['/work', '/now', '/lab', '/writing', '/about', '/contact'].includes(cleanPath)) {
    return cleanPath;
  }

  return '/home';
};

interface RouterProviderProps {
  children: ReactNode;
}

export const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() =>
    normalizePath(window.location.pathname, window.location.hash)
  );

  useEffect(() => {
    const handlePopState = () => {
      const newPath = normalizePath(window.location.pathname, window.location.hash);
      setCurrentPath(newPath);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigate = (to: string) => {
    // If it's an external link or anchor on the same page
    if (to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:')) {
      window.open(to, '_blank');
      return;
    }

    let targetPath = to;
    if (targetPath === '/' || targetPath === '') targetPath = '/home';

    if (targetPath.startsWith('#')) {
      const element = document.querySelector(targetPath);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    try {
      window.history.pushState({}, '', targetPath);
    } catch {
      window.location.hash = targetPath;
    }

    setCurrentPath(targetPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

export const Link: React.FC<LinkProps> = ({
  to,
  children,
  className = '',
  activeClassName = '',
  onClick,
  ...props
}) => {
  const { currentPath, navigate } = useRouter();
  const isActive = currentPath === to || (to === '/home' && currentPath === '/');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && !props.target && !to.startsWith('http') && !to.startsWith('mailto:')) {
      e.preventDefault();
      navigate(to);
    }
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`${className} ${isActive ? activeClassName : ''}`}
      {...props}
    >
      {children}
    </a>
  );
};

