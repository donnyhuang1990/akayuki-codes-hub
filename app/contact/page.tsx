import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Akayuki Codes',
  description: 'Contact Akayuki Codes with code corrections, player reports, and website feedback.',
  alternates: { canonical: '/contact/' },
};

export default function Contact() {
  return (
    <div className="container page-wrap narrow-page">
      <div className="eyebrow">GET IN TOUCH</div>
      <h1 className="page-title">Contact <span>Us.</span></h1>
      <div className="content-block">
        <p>
          Have a correction, a code report, or a suggestion for a guide? We welcome
          clear, helpful feedback from players.
        </p>

        <h2>Email</h2>
        <p>
          The best way to reach us is{' '}
          <a href="mailto:contact@akayuki.codes">contact@akayuki.codes</a>.
          Messages sent to this address are forwarded to our site inbox.
        </p>
        <p>
          Please note that this is currently a receiving-only forwarding address.
          Replies may come from a different email address.
        </p>

        <h2>What to include in a code report</h2>
        <ul>
          <li>The exact code, including punctuation and capitalisation.</li>
          <li>The date you tried it.</li>
          <li>The exact in-game response, if possible.</li>
          <li>Whether the code was accepted on your account.</li>
          <li>A source link or screenshot, if available.</li>
        </ul>

        <h2>Corrections and suggestions</h2>
        <p>
          We review reports and use available sources to assess updates. A player
          report is helpful, but it does not by itself mean a code has been
          independently verified in-game.
        </p>
      </div>
    </div>
  );
}
