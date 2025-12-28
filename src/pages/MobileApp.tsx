import React from "react";
import { Helmet } from "react-helmet";

const MobileApp = () => {
  return (
    <>
      <Helmet>
        <title>StyleGenius App | Virtual Try-On & Style Analysis on Your Phone | Download Free</title>
        <meta name="description" content="Get StyleGenius on your phone. Virtual try-on, outfit builder, color analysis, and style recommendations. Available on iOS and Android. Download free." />
        <meta name="keywords" content="stylegenius app, virtual try on app, outfit builder app, color analysis app, fashion app, style app" />
        <link rel="canonical" href="https://stylegenius.app/app" />
        <meta property="og:title" content="StyleGenius App | Your Personal Stylist on the Go" />
        <meta property="og:description" content="Virtual try-on, outfit builder, and color analysis in your pocket. Download free on iOS & Android." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/app-virtualtryon.png" />
      </Helmet>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          background: #f9fafb;
          color: #111827;
          line-height: 1.6;
        }
        :root {
          --pink: #FF70D9;
          --blue: #6EC1E4;
          --gradient: linear-gradient(45deg, #FF70D9, #6EC1E4);
          --gray-50: #f9fafb;
          --gray-100: #f3f4f6;
          --gray-200: #e5e7eb;
          --gray-300: #d1d5db;
          --gray-400: #9ca3af;
          --gray-500: #6b7280;
          --gray-600: #4b5563;
          --gray-700: #374151;
          --gray-900: #111827;
        }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
        header { background: white; border-bottom: 1px solid var(--gray-200); padding: 16px 0; position: sticky; top: 0; z-index: 100; }
        .header-inner { display: flex; align-items: center; justify-content: space-between; }
        .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; color: inherit; }
        .logo img { width: 36px; height: 36px; border-radius: 50%; }
        .logo span { font-weight: 700; font-size: 1.25rem; }
        .header-cta { background: var(--gradient); color: white; padding: 10px 20px; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 0.9rem; transition: transform 0.2s, box-shadow 0.2s; }
        .header-cta:hover { transform: scale(1.05); box-shadow: 0 4px 20px rgba(255, 112, 217, 0.3); }
        .hero { padding: 60px 0 80px; text-align: center; background: linear-gradient(180deg, white 0%, var(--gray-50) 100%); }
        .hero-badge { display: inline-block; background: linear-gradient(45deg, rgba(255,112,217,0.1), rgba(110,193,228,0.1)); border: 1px solid rgba(255,112,217,0.2); padding: 8px 16px; border-radius: 50px; font-size: 0.875rem; font-weight: 600; color: var(--pink); margin-bottom: 24px; }
        .hero h1 { font-size: 3rem; font-weight: 800; line-height: 1.1; margin-bottom: 24px; letter-spacing: -0.02em; }
        .hero h1 .gradient { background: var(--gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .hero-subtitle { font-size: 1.25rem; color: var(--gray-600); max-width: 600px; margin: 0 auto 40px; }
        .phones-container { display: flex; justify-content: center; align-items: flex-end; gap: 24px; margin: 40px 0; flex-wrap: wrap; }
        .phone-mockup { position: relative; width: 220px; background: #1a1a1a; border-radius: 36px; padding: 12px; box-shadow: 0 30px 60px rgba(0,0,0,0.25); }
        .phone-mockup.center { width: 260px; z-index: 2; transform: translateY(-20px); }
        .phone-mockup.side { opacity: 0.9; transform: scale(0.9); }
        .phone-screen { background: white; border-radius: 28px; overflow: hidden; aspect-ratio: 9/19; }
        .phone-screen img { width: 100%; height: 100%; object-fit: cover; }
        .phone-notch { position: absolute; top: 16px; left: 50%; transform: translateX(-50%); width: 100px; height: 28px; background: #1a1a1a; border-radius: 20px; z-index: 5; }
        .phone-label { text-align: center; margin-top: 16px; font-weight: 600; font-size: 0.9rem; color: var(--gray-700); }
        .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 60px; }
        .feature-card { background: white; border-radius: 20px; padding: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); text-align: center; }
        .feature-icon { font-size: 2.5rem; margin-bottom: 16px; }
        .feature-card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; color: var(--gray-900); }
        .feature-card p { font-size: 0.9rem; color: var(--gray-600); }
        .download-buttons { display: flex; justify-content: center; gap: 16px; margin-top: 48px; flex-wrap: wrap; }
        .download-btn { display: inline-flex; align-items: center; gap: 12px; background: #1a1a1a; color: white; padding: 14px 28px; border-radius: 14px; text-decoration: none; font-weight: 600; font-size: 1rem; transition: transform 0.2s, box-shadow 0.2s; }
        .download-btn:hover { transform: scale(1.05); box-shadow: 0 8px 30px rgba(0,0,0,0.2); }
        .download-btn .store-icon { font-size: 1.75rem; }
        .download-btn .store-text { text-align: left; }
        .download-btn .store-text small { display: block; font-size: 0.7rem; font-weight: 400; opacity: 0.8; }
        .download-btn .store-text span { display: block; font-size: 1.1rem; }
        .download-note { margin-top: 16px; font-size: 0.875rem; color: var(--gray-500); }
        footer { padding: 40px 0; background: var(--gray-50); border-top: 1px solid var(--gray-200); margin-top: 80px; }
        .footer-inner { display: flex; justify-content: space-between; align-items: center; }
        .footer-logo { display: flex; align-items: center; gap: 8px; font-size: 0.875rem; color: var(--gray-500); }
        .footer-logo img { width: 20px; height: 20px; border-radius: 50%; }
        .footer-links { display: flex; gap: 24px; }
        .footer-links a { color: var(--gray-500); text-decoration: none; font-size: 0.875rem; }
        .footer-links a:hover { color: var(--gray-700); }
        @media (max-width: 768px) {
          .hero h1 { font-size: 2.25rem; }
          .features-grid { grid-template-columns: 1fr; }
          .phones-container { gap: 16px; }
          .phone-mockup.side { display: none; }
          .phone-mockup.center { transform: none; width: 240px; }
          .footer-inner { flex-direction: column; gap: 20px; text-align: center; }
          .download-buttons { flex-direction: column; align-items: center; }
        }
      `}</style>

      <header>
        <div className="container header-inner">
          <a href="/" className="logo">
            <img src="/mainavatar.png" alt="StyleGenius" />
            <span>StyleGenius</span>
          </a>
          <a href="#download" className="header-cta">
            Download App
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <span className="hero-badge">Mobile App</span>
          <h1>
            Your Personal Stylist<br />
            <span className="gradient">In Your Pocket</span>
          </h1>
          <p className="hero-subtitle">
            Virtual try-on, outfit builder, and color analysis - all the styling tools you need, anywhere you go.
          </p>

          <div className="phones-container">
            <div className="phone-mockup side">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <img src="/app-coloranalysis.png" alt="Color Analysis" />
              </div>
              <div className="phone-label">Color Analysis</div>
            </div>

            <div className="phone-mockup center">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <img src="/app-virtualtryon.png" alt="Virtual Try-On" />
              </div>
              <div className="phone-label">Virtual Try-On</div>
            </div>

            <div className="phone-mockup side">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <img src="/app-outfitbuilder.png" alt="Outfit Builder" />
              </div>
              <div className="phone-label">Outfit Builder</div>
            </div>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👗</div>
              <h3>Virtual Try-On</h3>
              <p>See how any outfit looks on you before buying</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Color Analysis</h3>
              <p>Discover your perfect color palette and season</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Outfit Builder</h3>
              <p>Create and save outfit combinations from your wardrobe</p>
            </div>
          </div>

          <div className="download-buttons" id="download">
            <a href="https://apps.apple.com/app/id6747178892" className="download-btn">
              <span className="store-icon"></span>
              <span className="store-text">
                <small>Download on the</small>
                <span>App Store</span>
              </span>
            </a>
            <a href="https://play.google.com/store/apps/details?id=app.stylegenius&pcampaignid=web_share" className="download-btn">
              <span className="store-icon">▶</span>
              <span className="store-text">
                <small>Get it on</small>
                <span>Google Play</span>
              </span>
            </a>
          </div>
          <p className="download-note">Free download - Available on iOS & Android</p>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <div className="footer-logo">
            <img src="/mainavatar.png" alt="" />
            <span>StyleGenius by GoMotion AB</span>
          </div>
          <div className="footer-links">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/support">Support</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MobileApp;
