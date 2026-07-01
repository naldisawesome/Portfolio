'use client';

import { useEffect, useRef } from 'react';
import { usePalette } from '@/context/PaletteContext';
import { useReveal } from '@/lib/useReveal';
import { palettes } from '@/lib/data';

export default function ProjectCard({ project, i }) {
  const { setIndex } = usePalette();
  const [ref, visible] = useReveal({ threshold: 0.2 });
  const cardPalette = palettes[project.idx] ?? palettes[0];
  const cardRef = useRef(null);

  useEffect(() => {
    if (visible) {
      const el = document.getElementById(`proj-card-${project.idx}`);
      if (el) {
        const delay = i * 90;
        const t = setTimeout(() => el.classList.add('reveal'), delay);
        return () => clearTimeout(t);
      }
    }
  }, [visible, i, project.idx]);

  // Mirrors the original's scroll-based palette trigger: whichever card is
  // >40% in view sets the palette, in addition to hover.
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            setIndex(project.idx);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [project.idx, setIndex]);

  return (
    <div
      id={`proj-card-${project.idx}`}
      ref={(node) => {
        cardRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      className="proj-card"
      style={{ '--card-p1': cardPalette.p1, '--card-p2': cardPalette.p2 }}
      onMouseEnter={() => setIndex(project.idx)}
      data-cursor-hover="true"
    >
      <div className="card-num">{project.num}</div>
      <div className="card-chrome">
        <div className="chrome-dot" style={{ background: '#ff5f57' }} />
        <div className="chrome-dot" style={{ background: '#febc2e' }} />
        <div className="chrome-dot" style={{ background: '#28c840' }} />
        <div className="chrome-url">{project.url}</div>
      </div>
      <div className="card-preview">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
      <div className="card-body">
        <span className="card-type">{project.type}</span>
        <div className="card-title">{project.title}</div>
        <p className="card-desc">{project.desc}</p>
        <div className="card-tags">
          {project.tags.map((tag) => (
            <span className="card-tag-pill" key={tag}>{tag}</span>
          ))}
        </div>
        <div className="card-footer">
          <div className="card-status">
            <span className="status-dot" />
            live
          </div>
          <div className="card-arrow">→</div>
        </div>
      </div>
    </div>
  );
}

