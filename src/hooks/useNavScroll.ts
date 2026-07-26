"use client";

import { useEffect, useRef } from "react";

export function useNavScroll() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = ref.current;
    if (!nav) return;

    function onScroll() {
      if (window.scrollY > 50) {
        nav!.classList.add("scrolled");
      } else {
        nav!.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return ref;
}
