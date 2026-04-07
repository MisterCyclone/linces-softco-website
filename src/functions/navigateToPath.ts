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
export const navigateToPath = (navigate: NavigateFunction, path: string) => {

  // Split the path into pathname and hash incase there is a hash given
  const [pathname, hash] = path.split('#');
  const isSamePage = pathname === window.location.pathname;
  
  // If navigating to a different page, scroll to top immediately
  if (!isSamePage) { 
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  // Navigate to the new path
  navigate({ pathname: pathname });

  // If there's a hash given, meaning a subsection has been selected, scroll to it after navigation
  if (hash) {
    if (isSamePage) {
      window.setTimeout(() => scrollToHashTarget(hash), 150);
      return;
    }
    window.setTimeout(() => scrollToHashTarget(hash), 300);
    return;
  }

  // If no hash been given then follow this logic
  if (isSamePage) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  window.scrollTo({ top: 0, behavior: 'auto' });
  return;
};