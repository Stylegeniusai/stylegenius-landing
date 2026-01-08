import { useEffect } from "react";

// Extension URL handled by getExtensionUrl()

const PriceTracking = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = "Fashion Price Tracker | Track Clothing Prices Across 1000+ Stores | StyleGenius";
  }, []);

  const storeLogos = ['H&M', 'ZARA', 'ASOS', 'Zalando', 'Mango', '& Other Stories', 'NA-KD', 'Boozt', 'About You', 'Massimo Dutti', 'COS', 'Arket'];

  return (
    <>
      <style>{`
        :root {
          --pink: #FF70D9;
          --blue: #6EC1E4;
          --gradient: linear-gradient(45deg, #FF70D9, #6EC1E4);
          --gray-50: #f9fafb;
          --gray-100: #f3f4f6;
          --gray-200: #e5e7eb;
          --gray-400: #9ca3af;
          --gray-500: #6b7280;
          --gray-600: #4b5563;
          --gray-700: #374151;
          --gray-900: #111827;
          --green: #10b981;
        }

        .pt-page {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: var(--gray-50);
          color: var(--gray-900);
          line-height: 1.6;
        }

        .pt-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .pt-header {
          background: white;
          border-bottom: 1px solid var(--gray-200);
          padding: 16px 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .pt-header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .pt-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: inherit;
        }

        .pt-logo img {
          width: 36px;
          height: 36px;
          border-radius: 50%;
        }

        .pt-logo span {
          font-weight: 700;
          font-size: 1.25rem;
        }

        .pt-header-cta {
          background: var(--gradient);
          color: white;
          padding: 10px 20px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .pt-header-cta:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(255, 112, 217, 0.3);
        }

        .pt-hero {
          padding: 80px 0;
          text-align: center;
          background: linear-gradient(180deg, white 0%, var(--gray-50) 100%);
        }

        .pt-hero-badge {
          display: inline-block;
          background: linear-gradient(45deg, rgba(16,185,129,0.1), rgba(110,193,228,0.1));
          border: 1px solid rgba(16,185,129,0.2);
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--green);
          margin-bottom: 24px;
        }

        .pt-hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .pt-hero h1 .gradient {
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .pt-hero-subtitle {
          font-size: 1.25rem;
          color: var(--gray-600);
          max-width: 600px;
          margin: 0 auto 40px;
        }

        .pt-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--gradient);
          color: white;
          padding: 18px 36px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.125rem;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(255, 112, 217, 0.3);
        }

        .pt-cta:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 30px rgba(255, 112, 217, 0.4);
        }

        .pt-hero-trust {
          display: flex;
          justify-content: center;
          gap: 32px;
          margin-top: 32px;
          font-size: 0.875rem;
          color: var(--gray-500);
        }

        .pt-hero-image {
          margin-top: 60px;
        }

        .pt-hero-image img {
          max-width: 320px;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }

        .pt-stats {
          padding: 60px 0;
          background: white;
          border-bottom: 1px solid var(--gray-200);
        }

        .pt-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          text-align: center;
        }

        .pt-stat-item h3 {
          font-size: 3rem;
          font-weight: 800;
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 8px;
        }

        .pt-stat-item p {
          color: var(--gray-600);
        }

        .pt-section {
          padding: 100px 0;
        }

        .pt-section-gray {
          background: var(--gray-50);
        }

        .pt-section-white {
          background: white;
        }

        .pt-section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .pt-section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .pt-section-header p {
          font-size: 1.125rem;
          color: var(--gray-600);
        }

        .pt-steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .pt-step {
          text-align: center;
          background: white;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }

        .pt-step-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .pt-step h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .pt-step p {
          color: var(--gray-600);
        }

        .pt-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .pt-feature-content h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .pt-feature-content h2 .gradient {
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .pt-feature-content p {
          color: var(--gray-600);
          font-size: 1.125rem;
          margin-bottom: 24px;
        }

        .pt-feature-list {
          list-style: none;
          padding: 0;
        }

        .pt-feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          color: var(--gray-700);
        }

        .pt-feature-list li::before {
          content: "\\2713";
          color: var(--green);
          font-weight: 700;
          flex-shrink: 0;
        }

        .pt-feature-image img {
          max-width: 100%;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
        }

        .pt-stores {
          padding: 80px 0;
          background: var(--gray-50);
          text-align: center;
        }

        .pt-stores h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .pt-stores > .pt-container > p {
          color: var(--gray-600);
          margin-bottom: 40px;
        }

        .pt-store-marquee {
          width: 100%;
          overflow: hidden;
        }

        .pt-store-track {
          display: flex;
          gap: 48px;
          animation: ptMarquee 30s linear infinite;
          width: max-content;
        }

        @keyframes ptMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .pt-store-logo {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--gray-400);
          white-space: nowrap;
        }

        .pt-testimonials {
          padding: 100px 0;
          background: white;
        }

        .pt-testimonial-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
        }

        .pt-testimonial-card {
          background: var(--gray-50);
          border-radius: 16px;
          padding: 32px;
        }

        .pt-testimonial-stars {
          color: #eab308;
          font-size: 1.25rem;
          margin-bottom: 16px;
        }

        .pt-testimonial-text {
          font-size: 1.125rem;
          color: var(--gray-700);
          margin-bottom: 16px;
          font-style: italic;
        }

        .pt-testimonial-author {
          font-size: 0.875rem;
          color: var(--gray-500);
        }

        .pt-faq {
          padding: 100px 0;
          background: var(--gray-50);
        }

        .pt-faq-list {
          max-width: 700px;
          margin: 0 auto;
        }

        .pt-faq-item {
          background: white;
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 16px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .pt-faq-item h3 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .pt-faq-item p {
          color: var(--gray-600);
        }

        .pt-final-cta {
          padding: 100px 0;
          background: white;
          text-align: center;
        }

        .pt-final-cta h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .pt-final-cta > .pt-container > p {
          font-size: 1.125rem;
          color: var(--gray-600);
          margin-bottom: 40px;
        }

        .pt-footer {
          padding: 40px 0;
          background: var(--gray-50);
          border-top: 1px solid var(--gray-200);
        }

        .pt-footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .pt-footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          color: var(--gray-500);
        }

        .pt-footer-logo img {
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }

        .pt-footer-links {
          display: flex;
          gap: 24px;
        }

        .pt-footer-links a {
          color: var(--gray-500);
          text-decoration: none;
          font-size: 0.875rem;
        }

        .pt-footer-links a:hover {
          color: var(--gray-700);
        }

        @media (max-width: 768px) {
          .pt-hero h1 {
            font-size: 2.25rem;
          }

          .pt-stats-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .pt-steps {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .pt-features-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .pt-feature-image {
            order: -1;
          }

          .pt-testimonial-grid {
            grid-template-columns: 1fr;
          }

          .pt-hero-trust {
            flex-direction: column;
            gap: 12px;
          }

          .pt-footer-inner {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
      `}</style>

      <div className="pt-page">
        {/* Header */}
        <header className="pt-header">
          <div className="pt-container pt-header-inner">
            <a href="/" className="pt-logo">
              <img src="/mainavatar.png" alt="StyleGenius" />
              <span>StyleGenius</span>
            </a>
            <a href={getExtensionUrl()} className="pt-header-cta" target="_blank" rel="noopener noreferrer">
              Add to Chrome - Free
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="pt-hero">
          <div className="pt-container">
            <span className="pt-hero-badge">Price Tracking Technology</span>
            <h1>
              Never Pay Full Price<br />
              <span className="gradient">For Fashion Again</span>
            </h1>
            <p className="pt-hero-subtitle">
              Track prices on any clothing item across 1000+ stores. Get instant alerts when prices drop. Save hundreds on your favorite fashion pieces.
            </p>
            <a href={getExtensionUrl()} className="pt-cta" target="_blank" rel="noopener noreferrer">
              Start Tracking Prices Free
            </a>
            <div className="pt-hero-trust">
              <span>&#10003; 100% Free</span>
              <span>&#10003; Instant alerts</span>
              <span>&#10003; 1000+ stores</span>
            </div>
            <div className="pt-hero-image">
              <img src="/hero-pricetracking.png" alt="Price Tracking Demo - Track clothing prices" />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="pt-stats">
          <div className="pt-container">
            <div className="pt-stats-grid">
              <div className="pt-stat-item">
                <h3>1000+</h3>
                <p>Fashion stores supported</p>
              </div>
              <div className="pt-stat-item">
                <h3>30%</h3>
                <p>Average savings per item</p>
              </div>
              <div className="pt-stat-item">
                <h3>24/7</h3>
                <p>Automatic price monitoring</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="pt-section pt-section-gray">
          <div className="pt-container">
            <div className="pt-section-header">
              <h2>How Price Tracking Works</h2>
              <p>Three simple steps to never miss a deal</p>
            </div>
            <div className="pt-steps">
              <div className="pt-step">
                <div className="pt-step-icon">&#128269;</div>
                <h3>Browse & Save</h3>
                <p>Shop normally and click "Save" on any item you like. Works on any fashion website.</p>
              </div>
              <div className="pt-step">
                <div className="pt-step-icon">&#128200;</div>
                <h3>We Track Prices</h3>
                <p>StyleGenius monitors prices 24/7 across all your saved items automatically.</p>
              </div>
              <div className="pt-step">
                <div className="pt-step-icon">&#128276;</div>
                <h3>Get Alerted</h3>
                <p>Receive instant notifications when prices drop. Buy at the perfect moment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="pt-section pt-section-white">
          <div className="pt-container">
            <div className="pt-features-grid">
              <div className="pt-feature-content">
                <h2>Save Items From <span className="gradient">Any Store</span></h2>
                <p>No more bookmarking pages or keeping lists. Save items from any fashion store with one click and manage them all in one place.</p>
                <ul className="pt-feature-list">
                  <li>Works on H&M, Zara, ASOS, Zalando & 1000+ more</li>
                  <li>Save unlimited items</li>
                  <li>Organize with collections</li>
                  <li>Access your wishlist anywhere</li>
                </ul>
              </div>
              <div className="pt-feature-image">
                <img src="/onboarding-price.png" alt="Save items from any store" />
              </div>
            </div>
          </div>
        </section>

        {/* Stores */}
        <section className="pt-stores">
          <div className="pt-container">
            <h2>Track Prices On All Major Fashion Stores</h2>
            <p>Works automatically on your favorite retailers</p>
          </div>
          <div className="pt-store-marquee">
            <div className="pt-store-track">
              {[...storeLogos, ...storeLogos].map((store, i) => (
                <span key={i} className="pt-store-logo">{store}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="pt-testimonials">
          <div className="pt-container">
            <div className="pt-section-header">
              <h2>What Users Say</h2>
            </div>
            <div className="pt-testimonial-grid">
              <div className="pt-testimonial-card">
                <div className="pt-testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="pt-testimonial-text">"Saved over $200 last month just by waiting for price drops. This extension pays for itself!"</p>
                <p className="pt-testimonial-author">— Chrome Web Store Review</p>
              </div>
              <div className="pt-testimonial-card">
                <div className="pt-testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="pt-testimonial-text">"Finally a price tracker that works on fashion sites. Other trackers only work on Amazon."</p>
                <p className="pt-testimonial-author">— Chrome Web Store Review</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pt-faq">
          <div className="pt-container">
            <div className="pt-section-header">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="pt-faq-list">
              <div className="pt-faq-item">
                <h3>How often are prices checked?</h3>
                <p>We check prices multiple times per day to ensure you never miss a price drop. Most items are checked every few hours.</p>
              </div>
              <div className="pt-faq-item">
                <h3>How do I get notified?</h3>
                <p>You'll receive browser notifications and can also check your StyleGenius dashboard for all price changes. Email notifications coming soon.</p>
              </div>
              <div className="pt-faq-item">
                <h3>Does it work on sale items?</h3>
                <p>Yes! We track both regular prices and sale prices. You'll be notified if an item goes on sale or if the sale price drops even further.</p>
              </div>
              <div className="pt-faq-item">
                <h3>Is there a limit to how many items I can track?</h3>
                <p>Free users can track up to 50 items. Premium subscribers get unlimited tracking plus extra features.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pt-final-cta">
          <div className="pt-container">
            <h2>Start Saving on Fashion Today</h2>
            <p>Join smart shoppers who never pay full price</p>
            <a href={getExtensionUrl()} className="pt-cta" target="_blank" rel="noopener noreferrer">
              Add to Chrome - Free
            </a>
            <div className="pt-hero-trust" style={{ marginTop: '24px' }}>
              <span>&#9733;&#9733;&#9733;&#9733;&#9733; 4.9 rating</span>
              <span>&#10003; No credit card required</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-footer">
          <div className="pt-container pt-footer-inner">
            <div className="pt-footer-logo">
              <img src="/mainavatar.png" alt="" />
              <span>StyleGenius by GoMotion AB</span>
            </div>
            <div className="pt-footer-links">
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/support">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PriceTracking;
