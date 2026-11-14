import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE_NAME, SITE_URL } from '@/lib/site';
export const metadata: Metadata = { metadataBase: new URL(SITE_URL), title: { default: 'Akayuki Codes – Codes, Checker & Guides', template: '%s | Akayuki Codes' }, description: 'Find Akayuki codes, look up code information, and read practical guides for AKAYUKI: Steel Blossoms Red on Roblox.', applicationName: SITE_NAME, alternates: { canonical: '/' }, openGraph: { type: 'website', url: SITE_URL, siteName: SITE_NAME, title: 'Akayuki Codes – Codes, Checker & Guides', description: 'Independent codes database and gameplay guides for AKAYUKI: Steel Blossoms Red.', images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Akayuki Codes' }] }, twitter: { card: 'summary_large_image', title: 'Akayuki Codes', description: 'Codes, checker and guides for AKAYUKI: Steel Blossoms Red.', images: ['/og-image.svg'] }, robots: { index: true, follow: true } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE_NAME, url: SITE_URL, description: 'Independent codes database and guides for AKAYUKI: Steel Blossoms Red.' };
  return (
    <html lang="en">
      <body>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!=='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K24CXMP2');`}
        </Script>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K24CXMP2" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} title="Google Tag Manager" /></noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
