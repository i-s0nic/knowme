import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Mounted inside each route so even a lazy route's DOM exists before scrolling.
const RouteScroll = () => {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const target = document.getElementById(hash ? hash.slice(1) : "main-content");
    if (hash && target) {
      target.scrollIntoView({ behavior: "instant", block: "start" });
      target.focus({ preventScroll: true });
    } else if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      // Keep the skip link first in the tab order on a fresh document load.
      if (navigationType !== "POP") target?.focus({ preventScroll: true });
    }
  }, [pathname, hash, key, navigationType]);

  return null;
};

export default RouteScroll;
