'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { palettes } from '@/lib/data';

const PaletteContext = createContext(null);

export function PaletteProvider({ children }) {
  const [index, setIndexState] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const p = palettes[index] ?? palettes[0];
    const root = document.documentElement.style;
    root.setProperty('--p1', p.p1);
    root.setProperty('--p2', p.p2);
    root.setProperty('--p3', p.p3);
    root.setProperty('--glow', p.glow);
    root.setProperty('--glow2', p.glow2);

    const layer = document.getElementById('ripple-layer');
    if (layer) {
      const circle = document.createElement('div');
      circle.className = 'ripple-circle';
      const size = Math.max(window.innerWidth, window.innerHeight) * 1.3;
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      circle.style.left = `${window.innerWidth / 2 - size / 2}px`;
      circle.style.top = `${window.innerHeight / 2 - size / 2}px`;
      circle.style.background = `radial-gradient(circle, ${p.glow} 0%, transparent 70%)`;
      layer.appendChild(circle);
      setTimeout(() => circle.remove(), 1000);
    }
  }, [index]);

  // debounced setter so rapid hover changes (e.g. moving across cards) don't thrash
  function setIndex(i) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIndexState(i), 30);
  }

  return (
    <PaletteContext.Provider value={{ index, setIndex, palette: palettes[index] ?? palettes[0] }}>
      {children}
    </PaletteContext.Provider>
  );
}

export function usePalette() {
  const ctx = useContext(PaletteContext);
  if (!ctx) throw new Error('usePalette must be used within a PaletteProvider');
  return ctx;
}
