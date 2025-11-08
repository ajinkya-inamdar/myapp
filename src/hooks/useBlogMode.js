import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Handles enabling dark/reading modes ONLY on /blog pages.
 * Automatically removes the classes when leaving the blog section.
 */
const useBlogMode = (mode) => {
  const location = useLocation();

  useEffect(() => {
    const isBlogRoute = location.pathname.startsWith('/blog');

    // Remove any previous mode
    document.body.classList.remove('dark-mode', 'reading-mode');

    // Apply mode only for blog pages
    if (isBlogRoute) {
      if (mode === 'dark') document.body.classList.add('dark-mode');
      if (mode === 'reading') document.body.classList.add('reading-mode');
    }

    // Clean up when navigating away
    return () => {
      if (!location.pathname.startsWith('/blog')) {
        document.body.classList.remove('dark-mode', 'reading-mode');
      }
    };
  }, [mode, location.pathname]);
};

export default useBlogMode;
