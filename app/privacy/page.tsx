import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Akayuki Codes handles information when you visit this website or contact us.',
  alternates: { canonical: '/privacy/' },
};

export default function Privacy() {
  return (
    <div className="container page-wrap narrow-page">
      <div className="eyebrow">WEBSITE INFORMATION</div>
      <h1 className="page-title">Privacy <span>Policy.</span></h1>
      <div className="content-block">
        <p><strong>Last updated: November 14, 2026</strong></p>
        <p>
          This Privacy Policy explains how Akayuki Codes ("we", "us", or "the
          website") handles information in connection with https://akayuki.codes/.
          Akayuki Codes is an independent fan-made resource for
          AKAYUKI: Steel Blossoms Red on Roblox. It is not affiliated with Roblox
          or the game developer.
        </p>

        <h2>Information you provide</h2>
        <p>
          You can browse the website without creating an account. If you email us
          at contact@akayuki.codes, your message and the information you choose
          to include (such as your email address, code report, or attachments) will
          be forwarded to our site inbox so we can read and respond to your
          request. Please do not send passwords, payment details, or other
          sensitive personal information.
        </p>

        <h2>Information collected by hosting and infrastructure providers</h2>
        <p>
          The website is hosted using third-party infrastructure. Those providers
          may process technical information needed to deliver, secure, and
          maintain the website, such as IP address, request details, browser
          information, and server or security logs, in accordance with their own
          terms and privacy practices. We do not control the providers' internal
          retention periods.
        </p>

        <h2>Cookies, analytics, and advertising</h2>
        <p>
          At the time this policy was updated, the website code does not
          intentionally include Google Analytics or Google AdSense tags. We do
          not currently use those tools on the basis of this policy. Hosting or
          security infrastructure may use technically necessary mechanisms to
          operate and protect the site.
        </p>
        <p>
          If analytics, advertising, or other third-party tracking technologies
          are introduced, we will update this policy to explain the relevant
          providers, data uses, and available choices, and provide any notices or
          consent controls required by applicable law before or when those
          technologies are used.
        </p>

        <h2>How we use information</h2>
        <p>
          Information sent to our contact address may be used to respond to your
          message, review code corrections, improve website content, and protect
          the website from abuse. We do not sell the contents of messages sent to
          us.
        </p>

        <h2>Third-party websites</h2>
        <p>
          Our pages may link to Roblox, social platforms, or other third-party
          websites. Those services operate under their own privacy policies and
          we are not responsible for their practices.
        </p>

        <h2>Data retention and security</h2>
        <p>
          We keep correspondence for as long as reasonably needed to handle the
          request, maintain relevant records, or meet applicable obligations.
          No method of internet transmission or electronic storage is completely
          secure, so we cannot guarantee absolute security.
        </p>

        <h2>Children's privacy</h2>
        <p>
          This website is intended to provide game information to a general
          audience. We do not knowingly ask children to submit personal
          information. If you believe a child has sent us personal information,
          contact us so we can review the request.
        </p>

        <h2>Your choices and privacy requests</h2>
        <p>
          Depending on where you live, you may have rights to request access to,
          correction of, or deletion of personal information, or to object to
          certain processing. To make a privacy request, email{' '}
          <a href="mailto:contact@akayuki.codes">contact@akayuki.codes</a>.
          We may need to verify your request before acting on it.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy when the website's features or legal
          requirements change. The latest version will be published on this page
          with its updated date.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about this policy, email{' '}
          <a href="mailto:contact@akayuki.codes">contact@akayuki.codes</a>.
        </p>
      </div>
    </div>
  );
}
