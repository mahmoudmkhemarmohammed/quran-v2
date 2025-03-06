import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useResetScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll position to top when navigating to new route
    window.scroll({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

export default useResetScroll;
