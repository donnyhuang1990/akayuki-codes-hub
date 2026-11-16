'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { GameCode } from '@/lib/codes';

export default function FeaturedCodes({ items }: { items: GameCode[] }) {
  const [copied, setCopied] = useState('');
  async function copy(code: string) {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(code);
      window.setTimeout(() => setCopied(''), 1800);
    } catch {
      setCopied('');
    }
  }
  return (
    <div className="featured-code-grid">
      {items.map((item) => (
        <article className="featured-code-card" key={item.code}>
          <div className="featured-code-top">
            <code>{item.code}</code>
            <span className={`status status-${item.status}`}>{item.status.replace('-', ' ')}</span>
          </div>
          <p className="featured-code-reward">{item.reward}</p>
          <div className="featured-code-meta">Last source check: {item.lastChecked}</div>
          <button className="button button-small" type="button" onClick={() => copy(item.code)}>
            {copied === item.code ? 'Copied!' : 'Copy code'}
          </button>
        </article>
      ))}
      <div className="featured-code-footer">
        <span>Reported status is based on listed sources, not an in-game test.</span>
        <Link href="/codes/">View all codes →</Link>
      </div>
    </div>
  );
}
