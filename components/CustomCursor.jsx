'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Start centered instead of pinned at (0,0) before the first move event.
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf;

    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
    ring.style.left = `${mouseX}px`;
    ring.style.top = `${mouseY}px`;

    function onMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    }

    function loop() {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      raf = requestAnimationFrame(loop);
    }

    function onOver(e) {
      const target = e.target.closest?.(
        'a, button, .proj-card, .skill-pill, .tab-btn, .cur-btn, [data-cursor-hover]'
      );
      document.body.classList.toggle('cursor-hover', !!target);
    }

    // Listen on both mouse and pointer events for broader device compatibility.
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={dotRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}
