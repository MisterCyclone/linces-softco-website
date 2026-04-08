// Import functions
import type { NavigateFunction } from 'react-router-dom';

export const scrollToHashTarget = (hash: string) => {
  
  // Find div with the id of the hash
  const target = document.getElementById(hash);

  // if target doesn't exist then return
  if (!target) { return; }

  // Scroll to the target
  const targetTop = target.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.1;
  window.scrollTo({ top: targetTop, behavior: 'smooth' });
};


// Function to navigate to a specific path and handle hash scrolling
export const navigateToPath = (navigate: NavigateFunction, path: string, state?: unknown) => {
  const resolvedUrl = new URL(path, window.location.origin);
  const pathname = resolvedUrl.pathname;
  const search = resolvedUrl.search;
  const hash = resolvedUrl.hash.replace('#', '');
  const isSamePath = pathname === window.location.pathname;
  
  // If navigating to a different page, scroll to top immediately
  if (!isSamePath) {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  // Navigate to the new path
  navigate({ pathname, search }, { state });

  // If there's a hash given, meaning a subsection has been selected, scroll to it after navigation
  if (hash) {
    if (isSamePath) {
      window.setTimeout(() => scrollToHashTarget(hash), 150);
      return;
    }
    window.setTimeout(() => scrollToHashTarget(hash), 300);
    return;
  }

  // If no hash been given then keep the current scroll position for same-page state changes
  if (!isSamePath) {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
};