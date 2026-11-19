import Link from 'next/link';
export default function Footer() {
  return <footer className="footer"><div className="container approved-footer-grid">
    <div><Link className="brand footer-brand" href="/"><span className="brand-mark">A</span><span>AKAYUKI.CODES</span></Link><p>A fan-made resource for the Roblox game AKAYUKI: Steel Blossoms Red.</p></div>
    <div><strong>Explore</strong><Link href="/codes/">Codes</Link><Link href="/code-checker/">Code Checker</Link><Link href="/guides/">Guides</Link></div>
    <div><strong>Website</strong><Link href="/about/">About</Link><Link href="/contact/">Contact</Link><Link href="/privacy/">Privacy</Link></div>
    <div className="approved-footer-note"><p>This is an independent fan-made website for AKAYUKI: Steel Blossoms Red on Roblox. It is not affiliated with, endorsed by, or officially connected to the game's developers.</p><Link href="/ko/akayuki-codes/" lang="ko" hrefLang="ko">한국어 코드</Link></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Akayuki Codes. All rights reserved.</span><span>Fan-made player resource.</span></div></footer>;
}
