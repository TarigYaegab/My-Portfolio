import { useEffect, useRef } from "react";

/**
 * Adds the `is-visible` class (see .reveal in index.css) to an element
 * the first time it scrolls into view. Cheap alternative to an animation
 * library — no extra dependency, respects prefers-reduced-motion via CSS.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
