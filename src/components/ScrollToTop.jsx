import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Fab, useMediaQuery } from "@mui/material";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);
  const isMobile = useMediaQuery('(max-width: 900px)');

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Don't show button on mobile
  if (isMobile) {
    return null;
  }

  return (
    <>
      {showButton && (
        <Fab
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: "50%",
            right: 32,
            transform: "translateY(50%)",
            backgroundColor: "#4caf50",
            color: "white",
            "&:hover": {
              backgroundColor: "#45a049",
            },
            zIndex: 1000,
          }}
          size="small"
          aria-label="scroll to top"
        >
          <FaChevronUp />
        </Fab>
      )}
    </>
  );
};

export default ScrollToTop;