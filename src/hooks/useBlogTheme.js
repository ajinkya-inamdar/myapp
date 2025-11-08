// src/hooks/useBlogTheme.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useBlogTheme = (mode) => {
  const location = useLocation();
  const isBlogPost = location.pathname.match(/\/blog\/.+/); // Only apply to individual blog posts

  useEffect(() => {
    // Remove theme classes from body first
    document.body.classList.remove("dark-mode", "reading-mode");
    
    if (isBlogPost) {
      // Find the blog content container
      const blogContentContainer = document.querySelector('.blog-content-container');
      
      if (blogContentContainer) {
        // Remove all theme classes
        blogContentContainer.classList.remove("dark-mode", "reading-mode", "default-mode");
        
        // Add the current theme class
        if (mode === "dark") {
          blogContentContainer.classList.add("dark-mode");
        } else if (mode === "reading") {
          blogContentContainer.classList.add("reading-mode");
        } else {
          blogContentContainer.classList.add("default-mode");
        }
      }
    }
  }, [mode, isBlogPost]);
};

export default useBlogTheme;