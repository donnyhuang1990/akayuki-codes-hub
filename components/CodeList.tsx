'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { GameCode } from '@/lib/codes';

export default function CodeList({ items }: { items: GameCode[] }) {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState('');

  const visible = useMemo(() => {
    const term = search.trim().toLowerCase();
    return items.filter((item) =>
      (filter === 'all' || item.status === filter) &&
      (item.code.toLowerCase().includes(term) ||
        item.reward.toLowerCase().includes(term) ||
        item.sourceNote.toLowerCase().includes(term))
    );
  }, [items, filter, search]);

  async function copy(code: string) {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(code);
      window.setTimeout(() => setCopied(''), 1800);
    } catch {
      setCopied('Copy unavailable');
    }
  }

  function resetFilters() {
    setSearch('');
    setFilter('all');
  }

  return (
    <div className="code-tool">
      <div className="code-tool-heading">
        <div>
          <h2>Browse the code list</h2>
          <p>Search code names, reward details, or source notes.</p>
        </div>
        <span className="code-result-count" aria-live="polite">{visible.length} of {items.length} entries</span>
      </div>
      <div className="tool-controls">
        <input
          type="search"
          aria-label="Search code, reward, or source note"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search code, reward, or source..."
        />
        <select aria-label="Filter code status" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All statuses</option>
          <option value="reported-active">Reported active</option>
          <option value="reported-expired">Reported expired</option>
          <option value="unverified">Unverified</option>
        </select>
        {(search || filter !== 'all') && <button className="button button-small button-outline" type="button" onClick={resetFilters}>Clear filters</button>}
      </div>

      <div className="code-list">
        {visible.length ? visible.map((item) => (
          <article className="code-row" key={item.code}>
            <div className="code-main">
              <code>{item.code}</code>
              <p>{item.reward}</p>
              <small>{item.sourceNote}</small>
              <small>Conditions: {item.conditions}</small>
              <small>Last source check: {item.lastChecked}</small>
              <small>Sources: {item.sources.map((source, index) => <span key={source.url}>{index > 0 ? ' · ' : ''}<a href={source.url} target="_blank" rel="noreferrer">{source.label}</a></span>)}</small>
            </div>
            <div className="code-actions">
              <span className={`status status-${item.status}`}>{item.status.replace('-', ' ')}</span>
              <button className="button button-small button-outline" type="button" onClick={() => copy(item.code)}>
                {copied === item.code ? 'Copied!' : 'Copy code'}
              </button>
            </div>
          </article>
        )) : (
          <div className="empty-state">
            <strong>No matching codes found</strong>
            <p>Try a shorter search, clear the filters, or check whether the code has an entry in our lookup tool.</p>
            <div className="empty-state-actions">
              <button className="button button-small button-outline" type="button" onClick={resetFilters}>Show all codes</button>
              <Link className="text-link" href="/code-checker/">Open Code Checker →</Link>
            </div>
          </div>
        )}
      </div>
      <p className="micro-note">A reported status reflects external listings, not an in-game test by this site. Copying a code does not verify that Roblox will accept it; the in-game redemption response is the final check.</p>
    </div>
  );
}
