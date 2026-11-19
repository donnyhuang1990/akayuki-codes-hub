'use client';

import { useState } from 'react';

export default function CopyCodeButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }
  return <button className="ko-copy-button" type="button" onClick={copy}>{copied ? '복사 완료' : '코드 복사'}</button>;
}
