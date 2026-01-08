import { useEffect } from "react";

// Extension URL handled by getExtensionUrl()

const VirtualTryOn = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = "Virtual Try-On for Clothes Online | Try Before You Buy | StyleGenius";
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
        }

        .vto-page {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: var(--gray-50);
          color: var(--gray-900);
          line-height: 1.6;
        }

        .vto-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .vto-header {
          background: white;
          border-bottom: 1px solid var(--gray-200);
          padding: 16px 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .vto-header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .vto-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: inherit;
        }

        .vto-logo img {
          width: 36px;
          height: 36px;
          border-radius: 50%;
        }

        .vto-logo span {
          font-weight: 700;
          font-size: 1.25rem;
        }

        .vto-header-cta {
          background: var(--gradient);
          color: white;
          padding: 10px 20px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .vto-header-cta:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(255, 112, 217, 0.3);
        }

        .vto-hero {
          padding: 80px 0;
          text-align: center;
          background: linear-gradient(180deg, white 0%, var(--gray-50) 100%);
        }

        .vto-hero-badge {
          display: inline-block;
          background: linear-gradient(45deg, rgba(255,112,217,0.1), rgba(110,193,228,0.1));
          border: 1px solid rgba(255,112,217,0.2);
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--pink);
          margin-bottom: 24px;
        }

        .vto-hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .vto-hero h1 .gradient {
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .vto-hero-subtitle {
          font-size: 1.25rem;
          color: var(--gray-600);
          max-width: 600px;
          margin: 0 auto 40px;
        }

        .vto-cta {
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

        .vto-cta:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 30px rgba(255, 112, 217, 0.4);
        }

        .vto-hero-trust {
          display: flex;
          justify-content: center;
          gap: 32px;
          margin-top: 32px;
          font-size: 0.875rem;
          color: var(--gray-500);
        }

        .vto-hero-image {
          margin-top: 60px;
        }

        .vto-hero-image img {
          max-width: 320px;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }

        .vto-section {
          padding: 100px 0;
        }

        .vto-section-white {
          background: white;
        }

        .vto-section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .vto-section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .vto-section-header p {
          font-size: 1.125rem;
          color: var(--gray-600);
        }

        .vto-steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .vto-step {
          text-align: center;
        }

        .vto-step-number {
          width: 48px;
          height: 48px;
          background: var(--gradient);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 auto 20px;
        }

        .vto-step-image {
          width: 100%;
          max-width: 280px;
          aspect-ratio: 9/16;
          object-fit: contain;
          border-radius: 20px;
          margin: 0 auto 20px;
          display: block;
        }

        .vto-step h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .vto-step p {
          color: var(--gray-600);
        }

        .vto-benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
        }

        .vto-benefit-card {
          background: white;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }

        .vto-benefit-icon {
          font-size: 2rem;
          margin-bottom: 16px;
        }

        .vto-benefit-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .vto-benefit-card p {
          color: var(--gray-600);
        }

        .vto-stores {
          padding: 80px 0;
          background: white;
          text-align: center;
        }

        .vto-stores h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .vto-stores > .vto-container > p {
          color: var(--gray-600);
          margin-bottom: 40px;
        }

        .vto-store-marquee {
          width: 100%;
          overflow: hidden;
        }

        .vto-store-track {
          display: flex;
          gap: 48px;
          animation: vtoMarquee 30s linear infinite;
          width: max-content;
        }

        @keyframes vtoMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .vto-store-logo {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--gray-400);
          white-space: nowrap;
        }

        .vto-faq {
          padding: 100px 0;
          background: var(--gray-50);
        }

        .vto-faq-list {
          max-width: 700px;
          margin: 0 auto;
        }

        .vto-faq-item {
          background: white;
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 16px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .vto-faq-item h3 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .vto-faq-item p {
          color: var(--gray-600);
        }

        .vto-final-cta {
          padding: 100px 0;
          background: white;
          text-align: center;
        }

        .vto-final-cta h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .vto-final-cta > .vto-container > p {
          font-size: 1.125rem;
          color: var(--gray-600);
          margin-bottom: 40px;
        }

        .vto-footer {
          padding: 40px 0;
          background: var(--gray-50);
          border-top: 1px solid var(--gray-200);
        }

        .vto-footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .vto-footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          color: var(--gray-500);
        }

        .vto-footer-logo img {
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }

        .vto-footer-links {
          display: flex;
          gap: 24px;
        }

        .vto-footer-links a {
          color: var(--gray-500);
          text-decoration: none;
          font-size: 0.875rem;
        }

        .vto-footer-links a:hover {
          color: var(--gray-700);
        }

        @media (max-width: 768px) {
          .vto-hero h1 {
            font-size: 2.25rem;
          }

          .vto-steps {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .vto-benefits-grid {
            grid-template-columns: 1fr;
          }

          .vto-hero-trust {
            flex-direction: column;
            gap: 12px;
          }

          .vto-footer-inner {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
      `}</style>

      <div className="vto-page">
        {/* Header */}
        <header className="vto-header">
          <div className="vto-container vto-header-inner">
            <a href="/" className="vto-logo">
              <img src="/mainavatar.png" alt="StyleGenius" />
              <span>StyleGenius</span>
            </a>
            <a href={getExtensionUrl()} className="vto-header-cta" target="_blank" rel="noopener noreferrer">
              Add to Chrome - Free
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="vto-hero">
          <div className="vto-container">
            <span className="vto-hero-badge">Virtual Try-On Technology</span>
            <h1>
              See How Clothes Look<br />
              <span className="gradient">On You Before Buying</span>
            </h1>
            <p className="vto-hero-subtitle">
              Try on any clothing item virtually while shopping online. No more guessing, no more returns. Works on H&M, Zara, ASOS and 1000+ stores.
            </p>
            <a href={getExtensionUrl()} className="vto-cta" target="_blank" rel="noopener noreferrer">
              Try Virtual Try-On Free
            </a>
            <div className="vto-hero-trust">
              <span>&#10003; Free to use</span>
              <span>&#10003; Works instantly</span>
              <span>&#10003; 1000+ stores supported</span>
            </div>
            <div className="vto-hero-image">
              <img src="/hero-virtualtryon.png" alt="Virtual Try-On Demo - See how clothes look on you" />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="vto-section vto-section-white">
          <div className="vto-container">
            <div className="vto-section-header">
              <h2>How Virtual Try-On Works</h2>
              <p>Three simple steps to see any outfit on yourself</p>
            </div>
            <div className="vto-steps">
              <div className="vto-step">
                <div className="vto-step-number">1</div>
                <img src="/onboarding-try-on.png" alt="Upload your photo" className="vto-step-image" />
                <h3>Upload Your Photo</h3>
                <p>Take a quick selfie or upload an existing photo. Your image stays private and secure.</p>
              </div>
              <div className="vto-step">
                <div className="vto-step-number">2</div>
                <img src="/onboarding-style.png" alt="Browse any store" className="vto-step-image" />
                <h3>Browse Any Store</h3>
                <p>Shop normally on your favorite stores. StyleGenius works in the background.</p>
              </div>
              <div className="vto-step">
                <div className="vto-step-number">3</div>
                <img src="/hero-virtualtryon.png" alt="See it on you" className="vto-step-image" />
                <h3>See It On You</h3>
                <p>Click "Try On" on any item to instantly see how it looks on your body.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="vto-section">
          <div className="vto-container">
            <div className="vto-section-header">
              <h2>Why Use Virtual Try-On?</h2>
              <p>Stop wasting money on clothes that don't fit or flatter</p>
            </div>
            <div className="vto-benefits-grid">
              <div className="vto-benefit-card">
                <div className="vto-benefit-icon">&#128176;</div>
                <h3>Save Money</h3>
                <p>Stop buying clothes that look different than expected. Know exactly what you're getting before checkout.</p>
              </div>
              <div className="vto-benefit-card">
                <div className="vto-benefit-icon">&#128666;</div>
                <h3>Fewer Returns</h3>
                <p>Reduce the hassle of returns. See fit, style, and color on your body before ordering.</p>
              </div>
              <div className="vto-benefit-card">
                <div className="vto-benefit-icon">&#9203;</div>
                <h3>Shop Faster</h3>
                <p>Make confident decisions quickly. No more endless scrolling and second-guessing.</p>
              </div>
              <div className="vto-benefit-card">
                <div className="vto-benefit-icon">&#127919;</div>
                <h3>Better Style Choices</h3>
                <p>Discover what actually suits you. Our AI helps you find your most flattering pieces.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stores */}
        <section className="vto-stores">
          <div className="vto-container">
            <h2>Works On All Your Favorite Stores</h2>
            <p>Virtual try-on available on 1000+ online fashion retailers</p>
          </div>
          <div className="vto-store-marquee">
            <div className="vto-store-track">
              {[...storeLogos, ...storeLogos].map((store, i) => (
                <span key={i} className="vto-store-logo">{store}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="vto-faq">
          <div className="vto-container">
            <div className="vto-section-header">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="vto-faq-list">
              <div className="vto-faq-item">
                <h3>How accurate is the virtual try-on?</h3>
                <p>Our AI technology provides highly realistic results. While it's not 100% perfect, it gives you a very good idea of how clothes will look on your body shape and skin tone.</p>
              </div>
              <div className="vto-faq-item">
                <h3>Is my photo safe?</h3>
                <p>Yes, your privacy is our priority. Photos are processed securely and you control your data. We never share your images with third parties.</p>
              </div>
              <div className="vto-faq-item">
                <h3>Does it work on all clothing items?</h3>
                <p>Virtual try-on works best with tops, dresses, jackets, and most upper-body clothing. We're constantly improving support for more item types.</p>
              </div>
              <div className="vto-faq-item">
                <h3>Is it really free?</h3>
                <p>Yes! You can try on clothes for free. We offer a premium subscription for unlimited try-ons and extra features, but the basic functionality is free.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="vto-final-cta">
          <div className="vto-container">
            <h2>Ready to Try Clothes Virtually?</h2>
            <p>Join thousands of smart shoppers who never buy the wrong clothes again</p>
            <a href={getExtensionUrl()} className="vto-cta" target="_blank" rel="noopener noreferrer">
              Add to Chrome - Free
            </a>
            <div className="vto-hero-trust" style={{ marginTop: '24px' }}>
              <span>&#9733;&#9733;&#9733;&#9733;&#9733; 4.9 rating</span>
              <span>&#10003; No credit card required</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="vto-footer">
          <div className="vto-container vto-footer-inner">
            <div className="vto-footer-logo">
              <img src="/mainavatar.png" alt="" />
              <span>StyleGenius by GoMotion AB</span>
            </div>
            <div className="vto-footer-links">
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

export default VirtualTryOn;
