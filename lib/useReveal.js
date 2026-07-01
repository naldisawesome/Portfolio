'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Ports the original site's IntersectionObserver reveal pattern.
 * Returns [ref, isVisible] — attach ref to the element you want to reveal,
 * then toggle a class/style based on isVisible.
 */
export function useReveal(options) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(el);
          }
        });
      },
      options ?? { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return [ref, visible];
}

/** Count-up number animation, ported from the original countUp() function. */
export function useCountUp(target, active, duration = 1200) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    let start = null;
    let raf;
    function step(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(ease * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}
