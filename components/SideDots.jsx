'use client';

import { useEffect, useState } from 'react';

export default function SideDots({ sections }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s)).filter(Boolean);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = els.indexOf(entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { threshold: 0.4 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  return (
    <div id="side-dots">
      {sections.map((id, i) => (
        <div
          key={id}
          className={`side-dot${i === active ? ' on' : ''}`}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
        />
      ))}
    </div>
  );
}
