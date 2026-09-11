import { useState, useEffect } from "react";

export default function useVisibleCount() {
  const [visibleCount, setVisibleCount] = useState(() =>
    typeof window !== "undefined" && window.innerWidth <= 767 ? 1 : 2,
  );

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");

    const update = () => setVisibleCount(mql.matches ? 1 : 2);
    update();

    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return visibleCount;
}
