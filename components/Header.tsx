import Link from 'next/link';
export default function Header() {
  return <header className="site-header"><div className="container nav-wrap"><Link className="brand" href="/" aria-label="Akayuki Codes home"><span className="brand-mark">A</span><span>AKAYUKI<span className="brand-muted">.CODES</span></span></Link><nav aria-label="Main navigation"><Link href="/codes/">Codes</Link><Link href="/code-checker/">Code Checker</Link><Link href="/guides/">Guides</Link><Link href="/about/">About</Link></nav><Link className="nav-cta" href="/codes/">View codes <span>↗</span></Link></div></header>;
}
