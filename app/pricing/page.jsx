'use client';

import { useEffect, useState } from 'react';
import { usePalette } from '@/context/PaletteContext';
import { useReveal } from '@/lib/useReveal';
import { currencyRates } from '@/lib/data';
import SectionIntro from '@/components/SectionIntro';
import SideDots from '@/components/SideDots';

const TRACKS = {
  websites: {
    label: 'Websites & Landing Pages',
    paletteIndex: 0,
    tiers: [
      {
        tag: 'Starter', title: 'One-Page Site', price: 350,
        desc: 'A clean single page that says what you do and gets people to reach out.',
        features: ['1 page, fully responsive', 'Contact form wired to your email', 'Copy pass included', '5 business day delivery', '1 revision round'],
        note: 'ONE-TIME · HOSTING NOT INCLUDED',
      },
      {
        tag: 'Growth', title: 'Full Business Site', price: 800, badge: 'Most booked',
        desc: 'A site your customers can actually explore — services, about, editable content.',
        features: ['Up to 6 pages', 'Content you can edit yourself (CMS)', 'SEO basics + analytics setup', 'Booking or enquiry form', '10 business day delivery', '2 revision rounds'],
        note: 'ONE-TIME · HOSTING NOT INCLUDED',
      },
      {
        tag: 'Custom', title: 'Storefront', price: 1800,
        desc: 'A real online store — catalog, cart, checkout, inventory. Built like 926 Snacks.',
        features: ['Product catalog + cart + checkout', 'Payment gateway integration', 'Inventory tracking', 'Order confirmation emails', '3–4 week delivery', '3 revision rounds'],
        note: 'ONE-TIME · HOSTING NOT INCLUDED',
      },
    ],
  },
  systems: {
    label: 'Systems & Internal Tools',
    paletteIndex: 3,
    tiers: [
      {
        tag: 'Starter', title: 'Workflow Tool', price: 1200,
        desc: 'One workflow, automated. Think: a quote calculator or intake form that used to live in a spreadsheet.',
        features: ['Single-module app', 'Database-backed', 'Admin login', '2–3 week delivery'],
        note: 'SCOPED AFTER DISCOVERY CALL',
      },
      {
        tag: 'Growth', title: 'Team System', price: 3000, badge: 'Most booked',
        desc: 'A dashboard your whole team logs into — real auth, real roles, real data.',
        features: ['Multi-module app', 'Auth + role-based access', 'Dashboard + reporting', '5–6 week delivery'],
        note: 'SCOPED AFTER DISCOVERY CALL',
      },
      {
        tag: 'Custom', title: 'Full Platform', price: null,
        desc: 'A complete internal platform, built and maintained like NZFA Hub — knowledge base, CRM, or ops tool.',
        features: ['Multiple linked modules', 'Custom integrations', 'Ongoing maintenance available', 'Timeline scoped to your needs'],
        note: 'FREE 20-MIN SCOPING CALL',
        cta: "Book a call",
      },
    ],
  },
};

const ADDONS = [
  { name: 'Maintenance retainer', price: 'from $80/mo', desc: 'Bug fixes, small updates, and monitoring after launch.' },
  { name: 'Content & copywriting', price: 'from $120', desc: 'Page copy written for you, not just placeholder text.' },
  { name: 'Rush delivery', price: '+30% of package', desc: 'Move your timeline up when there\u2019s a hard deadline.' },
];

const PROCESS = [
  { n: '01', title: 'Discovery call', desc: '20 minutes to understand what you actually need — not just what you think you need.' },
  { n: '02', title: 'Scoped quote', desc: 'A fixed price and timeline in writing, before any work starts.' },
  { n: '03', title: 'Build in sprints', desc: 'You see progress every week, not just at the end.' },
  { n: '04', title: 'Handover & training', desc: 'You get the files, the access, and a walkthrough — not a black box.' },
];

export default function PricingPage() {
  const { setIndex } = usePalette();
  const [track, setTrack] = useState('websites');
  const [currency, setCurrency] = useState('USD');
  const [gridRef, gridVisible] = useReveal({ threshold: 0.2 });

  useEffect(() => {
    setIndex(TRACKS[track].paletteIndex);
  }, [track, setIndex]);

  const { sym, rate } = currencyRates[currency];

  return (
    <>
      <SideDots sections={['pricing-hero', 'pricing', 'addons', 'process', 'quote']} />
      <header id="pricing-hero">
        <div className="hero-tag in">RATE CARD — 2026</div>
        <h1 className="hero-h1" style={{ fontSize: 'clamp(2.25rem, 4.2vw, 4rem)', maxWidth: '18ch' }}>
          <span className="line hi"><span>Straightforward pricing,</span></span>
          <span className="line hi"><span><em>no guesswork.</em></span></span>
        </h1>
        <p className="hero-desc in" style={{ maxWidth: '50ch' }}>
          Fixed packages for websites and internal systems — from a one-page site to a full
          platform like NZFA Hub. Pick a tier below, or get a scoped quote for something custom.
        </p>
        <div className="hero-chips in">
          {['Next.js', 'Insurance Tooling', 'E-commerce', 'Internal Systems'].map((c) => (
            <span className="chip" key={c}>{c}</span>
          ))}
        </div>
        <div className="hero-actions in">
          <a className="btn-primary" href="#pricing">See packages</a>
          <a className="btn-ghost" href="#quote">Request a custom quote</a>
        </div>
      </header>

      <section className="section" id="pricing" ref={gridRef}>
        <SectionIntro
          tag="Line items"
          heading="Two kinds of builds. Three tiers each."
          lead="Websites get people to trust you. Systems get your team out of spreadsheets. Pick a track, pick a tier, or use these as a starting point for something custom."
        />

        <div className="controls">
          <div className="tabs">
            {Object.entries(TRACKS).map(([key, t]) => (
              <button
                key={key}
                className={`tab-btn${track === key ? ' active' : ''}`}
                onClick={() => setTrack(key)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="currency-toggle">
            {Object.keys(currencyRates).map((cur) => (
              <button
                key={cur}
                className={`cur-btn${currency === cur ? ' active' : ''}`}
                onClick={() => setCurrency(cur)}
              >
                {cur}
              </button>
            ))}
          </div>
        </div>

        <div className="pricing-grid">
          {TRACKS[track].tiers.map((tier, i) => (
            <div className={`price-card${gridVisible ? ' in' : ''}`} style={{ transitionDelay: `${i * 0.09}s` }} key={track + tier.title}>
              {tier.badge && <span className="price-badge">{tier.badge}</span>}
              <div className="price-tag">{tier.tag}</div>
              <div className="price-title">{tier.title}</div>
              <p className="price-desc">{tier.desc}</p>
              <ul className="price-features">
                {tier.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <div className="price-row">
                <span className="price-label">Total</span>
                <span className="price-value">
                  {tier.price === null ? "Let's talk" : `${sym}${Math.round(tier.price * rate).toLocaleString('en-US')}`}
                </span>
              </div>
              <div className="price-note">{tier.note}</div>
              <a className="price-cta" href="#quote">{tier.cta ?? 'Start here'}</a>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="addons">
        <SectionIntro tag="Add-ons" heading="Extras, priced separately" />
        <div className="addons">
          {ADDONS.map((a) => (
            <div className="addon" key={a.name}>
              <div className="addon-name">{a.name}</div>
              <div className="addon-price">{a.price}</div>
              <p className="addon-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="process">
        <SectionIntro tag="Process" heading="How a build actually runs" />
      </section>
      <div className="process">
        {PROCESS.map((s) => (
          <div className="step" key={s.n}>
            <div className="step-num">{s.n}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

      <section className="section" id="quote">
        <div className="contact-card">
          <div className="contact-inner">
            <h2 className="contact-h2">Have something specific in mind?</h2>
            <p className="contact-lead">
              Tell me what you&apos;re trying to build and I&apos;ll send back a scoped quote —
              usually within a day.
            </p>
            <a className="btn-primary" href="mailto:reynald@example.com?subject=Project%20quote%20request">
              Email me your project →
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-copy">reynald arro — full-stack development · quotes valid 30 days · prices shown are starting rates</div>
      </footer>
    </>
  );
}
