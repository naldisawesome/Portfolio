'use client';

import { useEffect, useState } from 'react';

export default function PageLoadOverlay() {
  const [done, setDone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 700);
    const t2 = setTimeout(() => setRemoved(true), 1400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (removed) return null;

  return (
    <div id="load-overlay" className={done ? 'done' : ''}>
      <div className="load-logo">RA<em>.</em></div>
    </div>
  );
}
