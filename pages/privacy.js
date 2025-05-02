

// pages/privacy.js
// eslint-disable react/no-unescaped-entities
export default function PrivacyPolicy() {
  return (
    <main className="prose mx-auto px-6 py-12">
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> 2&nbsp;May&nbsp;2025</p>

      <h2>1. Data Controller</h2>
      <p>
        Markus&nbsp;Kask<br />
        Kolumbusgatan&nbsp;5, 414&nbsp;65&nbsp;Gothenburg, Sweden<br />
        E‑mail:&nbsp;<a href="mailto:ai@stylegenius.app">ai@stylegenius.app</a>
      </p>

      <h2>2. Personal Data We Process</h2>
      <ul>
        <li><strong>Account data:</strong> name, email address, password hash</li>
        <li><strong>Usage data:</strong> IP address, browser type, clicks, page views</li>
        <li><strong>In‑app content:</strong> text you provide for AI processing</li>
        <li><strong>Technical logs:</strong> API calls and error reports</li>
      </ul>

      <h2>3. Purposes &amp; Legal Bases (GDPR Art.&nbsp;6)</h2>
      <p>
        •&nbsp;Provide and administer the Service — contract (6 (1)(b))<br />
        •&nbsp;Improve features and troubleshoot — legitimate interest (6 (1)(f))<br />
        •&nbsp;Marketing via affiliate links — legitimate interest (6 (1)(f))<br />
        •&nbsp;Newsletters (opt‑in) — consent (6 (1)(a))<br />
        •&nbsp;Compliance with bookkeeping laws — legal obligation (6 (1)(c))
      </p>

      <h2>4. Storage Period</h2>
      <p>
        We keep your data for as long as you have an active account or until you request deletion.
        Technical logs are deleted or anonymised after&nbsp;12&nbsp;months. Accounting data is preserved for&nbsp;7&nbsp;years under the Swedish Book‑Keeping Act.
      </p>

      <h2>5. Sharing with Third Parties</h2>
      <ul>
        <li>OpenAI, LLC (USA) — AI text generation</li>
        <li>Google Cloud Platform (EU/USA) — translation &amp; analysis</li>
        <li>
          Affiliate networks (e.g.&nbsp;Rakuten Advertising, CJ Affiliate,
          Adtraction) — conversion tracking when you click an affiliate link.<br />
          <em>We will update this list as partners are added.</em>
        </li>
        <li>Vercel Inc. (USA) — hosting &amp; CDN</li>
      </ul>
      <p>We never sell personal data.</p>

      <h2>6. International Transfers</h2>
      <p>
        When data is processed outside the EU/EEA we rely on the European Commission’s
        Standard Contractual Clauses (GDPR Art.&nbsp;46).
      </p>

      <h2>7. Your Rights</h2>
      <p>
        You have the right to request access, rectification, erasure, restriction, data portability,
        and to object to processing based on legitimate interest. You can also lodge a complaint
        with the Swedish Authority for Privacy Protection&nbsp;(IMY). Email&nbsp;
        <a href="mailto:ai@stylegenius.app">ai@stylegenius.app</a>; we respond within 30 days.
      </p>

      <h2>8. Cookies</h2>
      <p>
        We use cookies for essential functions, analytics, and affiliate tracking. Read our&nbsp;
        <a href="/cookies">Cookie Policy</a>&nbsp;for details and to manage your consent.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions? Email&nbsp;<a href="mailto:ai@stylegenius.app">ai@stylegenius.app</a>.
      </p>
    </main>
  );
}