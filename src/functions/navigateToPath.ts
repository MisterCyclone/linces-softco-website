// Import functions
import type { NavigateFunction } from 'react-router-dom';

export const scrollToHashTarget = (hash: string, attempt = 0) => {
  const targetId = hash.replace('#', '');
  const target = document.getElementById(targetId);

  if (!target) {
    if (attempt < 20) {
      window.setTimeout(() => scrollToHashTarget(hash, attempt + 1), 50);
    }

    return;
  }

  const headerOffset = Math.round(window.innerHeight * 0.11);
  const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({ top: targetTop, behavior: 'smooth' });
};

export const navigateToPath = (navigate: NavigateFunction, path: string) => {
  const [pathname, rawHash] = path.split('#');
  const hash = rawHash ? `#${rawHash}` : '';
  const currentPathname = window.location.pathname;
  const normalizedPathname = pathname || currentPathname;
  const isSamePage = normalizedPathname === currentPathname;
  
  if (!isSamePage) { 
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  // Keep the URL clean: navigate by pathname only and handle hash scrolling manually.
  navigate({ pathname: normalizedPathname });

  if (hash) {
    if (isSamePage) {
      window.setTimeout(() => scrollToHashTarget(hash), 150);
      return;
    }
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
      window.setTimeout(() => scrollToHashTarget(hash), 300);
    }, 150);
    return;
  }

  if (isSamePage) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  window.setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, 150);
};