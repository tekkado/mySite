import { useEffect, useState } from "react";

// jsdom has no matchMedia, so treat its absence as "no preference".
const prefersReducedMotion = () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

/** Counts from 0 up to `target` with an ease-out curve. Jumps straight to `target` under reduced motion. */
export function useCountUp(target: number, durationMs = 900) {
  const [value, setValue] = useState(() => (prefersReducedMotion() ? target : 0));

  useEffect(() => {
    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }
    const start = performance.now();
    let frame = requestAnimationFrame(function tick(now) {
      const progress = Math.min((now - start) / durationMs, 1);
      setValue(Math.round(target * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(frame);
  }, [target, durationMs]);

  return value;
}
