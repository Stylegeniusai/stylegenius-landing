// pages/cookies.js
export default function CookiePolicy() {
  return (
    <main className="prose mx-auto px-6 py-12">
      <h1>Cookie Policy</h1>
      <p><strong>Last updated:</strong> 2&nbsp;May&nbsp;2025</p>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a
        website. They help the site remember your preferences and measure how
        you interact with content.
      </p>

      <h2>2. Cookies We Use</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Purpose</th>
            <th>Expiry</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>stylegeniusConsent</code></td>
            <td>Stores your choice in the cookie‑banner (accept / decline).</td>
            <td>12&nbsp;months</td>
          </tr>
          <tr>
            <td>Affiliate‑tracking cookies (set by CJ / Rakuten / Adtraction)</td>
            <td>
              Track whether a purchase is made after clicking an affiliate link
              so we can receive commission at no extra cost to you.
            </td>
            <td>Varies by network (typically 30–90&nbsp;days)</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Change or Withdraw Consent</h2>
      <p>
        You can delete the cookie named <code>stylegeniusConsent</code> in your
        browser settings and reload this site; the banner will appear again so
        you can choose differently.
      </p>

      <h2>4. Contact</h2>
      <p>
        Questions? Email&nbsp;
        <a href="mailto:ai@stylegenius.app">ai@stylegenius.app</a>.
      </p>

      {/* Footer Links */}
      <div style={{ textAlign: 'center', marginTop: '3rem', fontSize: '12px', color: '#6D6D7A' }}>
        <a href="/privacy" style={{ textDecoration: 'underline', marginRight: '12px', color: '#FF70D9' }}>
          Privacy Policy
        </a>
        •
        <a href="/terms" style={{ textDecoration: 'underline', margin: '0 12px', color: '#FF70D9' }}>
          Terms of Use
        </a>
        •
        <a href="/support" style={{ textDecoration: 'underline', marginLeft: '12px', color: '#FF70D9' }}>
          Support
        </a>
      </div>
    </main>
  );
}
