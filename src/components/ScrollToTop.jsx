import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Handles scrolling for window, document, and any scrollable container
    requestAnimationFrame(() => {
      // Main document scroll
      window.scrollTo({ top: 0, behavior: "auto" });
      document.documentElement.scrollTo({ top: 0, behavior: "auto" });
      document.body.scrollTo({ top: 0, behavior: "auto" });

      // Fallback: scroll any <main> container if it exists
      const main = document.querySelector("main");
      if (main) {
        main.scrollTo({ top: 0, behavior: "auto" });
      }
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
