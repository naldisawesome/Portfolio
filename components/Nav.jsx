'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <nav className={entered ? 'in' : ''}>
      <Link href="/" className="nav-logo">RA<em>.</em></Link>
      <ul className="nav-links">
        <li><a href="/#projects">Work</a></li>
        <li><a href="/#about">About</a></li>
        <li><Link href="/pricing" className="nav-cta" style={{ borderColor: 'var(--ink-30)', color: 'var(--ink-60)' }}>Rates</Link></li>
        <li><a href="/#contact" className="nav-cta">Let&apos;s talk</a></li>
      </ul>
    </nav>
  );
}
