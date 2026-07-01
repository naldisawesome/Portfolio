'use client';

import { useReveal } from '@/lib/useReveal';

export default function SectionIntro({ tag, heading, lead }) {
  const [ref, visible] = useReveal({ threshold: 0.3 });
  return (
    <div ref={ref}>
      <div className={`section-tag${visible ? ' in' : ''}`}>{tag}</div>
      <h2 className="section-h2">{heading}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  );
}
