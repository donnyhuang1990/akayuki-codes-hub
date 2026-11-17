'use client';

import { useState } from 'react';
import Link from 'next/link';
import { codes, findCode } from '@/lib/codes';

type LookupResult = ReturnType<typeof findCode> | 'not-found' | null;

export default function Checker() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState<LookupResult>(null);

  function check(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const match = findCode(value);
    setResult(match ?? 'not-found');
  }

  function updateValue(nextValue: string) {
    setValue(nextValue);
    setResult(null);
  }

  return (
    <section className="checker-card" aria-label="Akayuki code database lookup">
      <form onSubmit={check} className="checker-form">
        <label htmlFor="code-input">Enter the code exactly as shown</label>
        <div className="input-action">
          <input
            id="code-input"
            value={value}
            onChange={(event) => updateValue(event.target.value)}
            placeholder="Enter a code, e.g. AKAYUKI"
            autoComplete="off"
            autoCapitalize="none"
            spellCheck={false}
            aria-describedby="checker-input-help"
          />
          <button className="button" type="submit" disabled={!value.trim()}>
            Check database <span>→</span>
          </button>
        </div>
        <p className="checker-input-help" id="checker-input-help">Lookup is case-insensitive. Keep punctuation, numbers, and symbols exactly as they appear in the code.</p>
      </form>

      {result && (
        <div className="checker-result" aria-live="polite" aria-atomic="true">
          {result === 'not-found' ? (
            <>
              <span className="status status-unknown">Not in our database</span>
              <h3>No matching entry found</h3>
              <p>We do not currently have an exact match for <strong>{value.trim()}</strong>. Check the spelling and symbols, or browse the full code list in case this code has not been added yet.</p>
              <Link className="text-link" href="/codes/">Browse all listed codes →</Link>
            </>
          ) : (
            <>
              <span className={`status status-${result.status}`}>{result.status.replace('-', ' ')}</span>
              <h3>{result.code}</h3>
              <p><strong>Recorded reward:</strong> {result.reward}</p>
              <p>{result.sourceNote}</p>
              <p><strong>Conditions:</strong> {result.conditions}</p>
              <p className="micro-note">Last database review: {result.lastChecked}. This date records when our source information was checked, not when the code was tested in-game.</p>
              {result.sources.length > 0 && (
                <div className="checker-sources">
                  <strong>Reference sources</strong>
                  <ul>{result.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a></li>)}</ul>
                </div>
              )}
              <Link className="text-link" href="/guides/how-to-redeem/">How to try this code in-game →</Link>
            </>
          )}
        </div>
      )}

      <div className="checker-foot">
        <span>{codes.length} entries in our local database</span>
        <span>Not connected to Roblox · Not an in-game validator</span>
      </div>
    </section>
  );
}
