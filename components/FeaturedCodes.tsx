'use client';
import Link from 'next/link';
import type { GameCode } from '@/lib/codes';

export default function FeaturedCodes({ items }: { items: GameCode[] }) {
  return <div className="featured-code-grid"><Link className="text-link" href="/codes/">View all reported codes →</Link></div>;
}
