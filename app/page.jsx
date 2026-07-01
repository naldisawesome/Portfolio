'use client';

import { useEffect, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import SideDots from '@/components/SideDots';
import SectionIntro from '@/components/SectionIntro';
import { projects, skillsGroups, aboutDetails } from '@/lib/data';
import { useReveal, useCountUp } from '@/lib/useReveal';

export default function HomePage() {
  return (
    <>
      <SideDots sections={['hero', 'projects', 'about', 'contact']} />
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <SiteFooter />
    </>
  );
}

function Hero() {
  const [tagIn, setTagIn] = useState(false);
  const [lines, setLines] = useState([false, false, false]);
  const [descIn, setDescIn] = useState(false);
  const [chipsIn, setChipsIn] = useState(false);
  const [actionsIn, setActionsIn] = useState(false);
  const [rightIn, setRightIn] = useState(false);
  const [statsIn, setStatsIn] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setTagIn(true), 200),
      setTimeout(() => setLines((l) => [true, l[1], l[2]]), 300),
      setTimeout(() => setLines((l) => [l[0], true, l[2]]), 420),
      setTimeout(() => setLines((l) => [l[0], l[1], true]), 540),
      setTimeout(() => setDescIn(true), 700),
      setTimeout(() => setChipsIn(true), 850),
      setTimeout(() => setActionsIn(true), 950),
      setTimeout(() => setRightIn(true), 500),
      setTimeout(() => setStatsIn(true), 900),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const appsCount = useCountUp(5, statsIn);

  return (
    <section id="hero">
      <div className="hero-left">
        <div className={`hero-tag${tagIn ? ' in' : ''}`}>Systems Lead · Full-Stack Dev</div>
        <h1 className="hero-h1">
          <span className={`line${lines[0] ? ' hi' : ''}`}><span>Building</span></span>
          <span className={`line${lines[1] ? ' hi' : ''}`}><span>systems</span></span>
          <span className={`line${lines[2] ? ' hi' : ''}`}><span>that <em>work.</em></span></span>
        </h1>
        <p className={`hero-desc${descIn ? ' in' : ''}`}>
          I&apos;m Reynald Arro — I design and engineer complete digital products, from insurance
          operations platforms to e-commerce storefronts. Rooted in IT, operating at the
          intersection of quality, systems thinking, and clean UI.
        </p>
        <div className={`hero-chips${chipsIn ? ' in' : ''}`}>
          {['Next.js 14', 'React', 'Supabase', 'PostgreSQL', 'Prisma', 'Tailwind', 'TypeScript', 'Stripe'].map((c) => (
            <span className="chip" key={c}>{c}</span>
          ))}
        </div>
        <div className={`hero-actions${actionsIn ? ' in' : ''}`}>
          <a href="#projects" className="btn-primary">View Work <span>→</span></a>
          <a href="#contact" className="btn-ghost">Get in touch</a>
        </div>
      </div>

      <div className={`hero-right${rightIn ? ' in' : ''}`}>
        <div className={`stat-card${statsIn ? ' in' : ''}`}>
          <div className="stat-num">{appsCount}</div>
          <div className="stat-label">Production Apps Shipped</div>
          <div className="stat-sub">Full-stack · end-to-end</div>
          <div className="stat-divider" />
          <div className="tech-wrap">
            {['Next.js', 'React', 'Prisma', 'Supabase', 'NextAuth', 'Stripe', 'Cloudinary'].map((t) => (
              <span className="tech-pill" key={t}>{t}</span>
            ))}
          </div>
        </div>
        <div className={`stat-card${statsIn ? ' in' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <div className="identity-heading">QA <span>·</span> Ops <span>·</span> Dev</div>
          <p className="identity-desc">
            I test what I build, and I understand the operations it runs inside of.
          </p>
          <div className="stat-divider" />
          <div className="stat-sub">Quality assurance meets systems thinking</div>
        </div>
      </div>

      <div className="scroll-hint">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
        scroll
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <SectionIntro
        tag="Selected Work"
        heading="Five products, one builder"
        lead="Each project is a complete system — designed, engineered, and shipped. Hover a card to feel its world; the background shifts to match."
      />
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard project={p} i={i} key={p.idx} />
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  const [ref, visible] = useReveal({ threshold: 0.05 });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="about-grid">
        <div>
          <div
            className="about-identity"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            <div className={`about-avatar${visible ? ' popped' : ''}`}>👤</div>
            <div>
              <div className="about-name">Reynald Arro</div>
              <div className="about-role">Systems Lead · Full-Stack Dev</div>
            </div>
          </div>
          <p
            className="about-bio"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease 0.07s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.07s',
            }}
          >
            I started in IT and discovered I was equally interested in <strong>why systems fail</strong> as
            how to build them. That turned into a career straddling operations, quality assurance,
            and full-stack engineering — mostly in the insurance space, but the products I build
            follow their own logic.
          </p>
          <p
            className="about-bio"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease 0.14s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.14s',
            }}
          >
            I prefer to ship <strong>complete things.</strong> Give me a problem — I&apos;ll design the
            data model, wire the API, style the UI, write the test cases, and hand you something
            deployable.
          </p>
          <div style={{ marginTop: 24 }}>
            {aboutDetails.map((d, i) => (
              <div
                className="about-detail"
                key={d.text}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.6s ease ${0.21 + i * 0.07}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${0.21 + i * 0.07}s`,
                }}
              >
                <div className="about-detail-icon">{d.icon}</div>
                {d.text}
              </div>
            ))}
          </div>
        </div>

        <div>
          {skillsGroups.map((group) => (
            <SkillsGroup group={group} key={group.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsGroup({ group }) {
  const [ref, visible] = useReveal({ threshold: 0, rootMargin: '0px 0px -40px 0px' });
  return (
    <div className="skills-group" ref={ref}>
      <div className="skills-label">{group.label}</div>
      <div className="skills-row">
        {group.skills.map((skill, i) => (
          <span
            className="skill-pill"
            key={skill}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(10px)',
              transition: `opacity 0.4s ease ${i * 0.045}s, transform 0.4s cubic-bezier(0.22,1,0.36,1) ${i * 0.045}s`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ContactSection() {
  const [ref, visible] = useReveal({ threshold: 0.1 });
  return (
    <section className="section" id="contact" ref={ref}>
      <div
        className="contact-card"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        <div className="contact-inner">
          <span className="contact-icon">✉️</span>
          <h2 className="contact-h2">Let&apos;s build something</h2>
          <p className="contact-lead">
            Whether it&apos;s a full product, an internal tool, or a sticky technical problem — I&apos;m
            interested. I work best on complete, end-to-end briefs.
          </p>
          <div className="contact-btns">
            <a href="mailto:reynald@example.com" className="btn-primary">Send an email →</a>
            <a href="https://github.com/reynaldarrow" target="_blank" rel="noopener noreferrer" className="btn-ghost">GitHub ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer>
      <div className="footer-copy">© 2026 <span>Reynald Arro</span> — Built with intent.</div>
      <div className="palette-preview">
        <div className="palette-preview-dot" style={{ background: 'var(--p1)' }} />
        <div className="palette-preview-dot" style={{ background: 'var(--p2)' }} />
        <div className="palette-preview-dot" style={{ background: 'var(--p3)' }} />
      </div>
    </footer>
  );
}
