import React from "react";
import { Helmet } from "react-helmet";

const StyleAnalysis = () => {
  return (
    <>
      <Helmet>
        <title>Color Analysis & Body Type Match | Find Your Perfect Style | StyleGenius</title>
        <meta name="description" content="Discover what colors suit you best and find clothes that match your body type. AI-powered style analysis for smarter shopping decisions. Free browser extension." />
        <meta name="keywords" content="color analysis, what colors suit me, body type clothes, style analysis, personal color analysis, body shape fashion" />
        <link rel="canonical" href="https://stylegenius.app/style-analysis" />
        <meta property="og:title" content="Color Analysis & Body Type Match | StyleGenius" />
        <meta property="og:description" content="Discover your perfect colors and body type matches while shopping. AI-powered style recommendations." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/hero-coloranalysis.png" />
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
          --purple: #8B5CF6;
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
        .hero-visual { display: flex; justify-content: center; align-items: center; position: relative; }
        .browser-mockup { position: relative; width: 700px; max-width: 90vw; background: white; border-radius: 12px; box-shadow: 0 30px 60px rgba(0,0,0,0.2); overflow: hidden; }
        .browser-toolbar { background: #f1f3f4; padding: 12px 16px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #e0e0e0; }
        .browser-dots { display: flex; gap: 6px; }
        .browser-dots span { width: 12px; height: 12px; border-radius: 50%; }
        .browser-dots span:nth-child(1) { background: #ff5f57; }
        .browser-dots span:nth-child(2) { background: #ffbd2e; }
        .browser-dots span:nth-child(3) { background: #28ca42; }
        .browser-url { flex: 1; background: white; border-radius: 6px; padding: 8px 12px; font-size: 0.8rem; color: var(--gray-600); display: flex; align-items: center; gap: 8px; }
        .browser-url .store-name { font-weight: 600; color: var(--gray-700); }
        .browser-extension-icon { width: 24px; height: 24px; border-radius: 50%; }
        .browser-content { display: flex; height: 420px; background: linear-gradient(180deg, #faf5ff 0%, #f3e8ff 100%); position: relative; }
        .product-side { width: 45%; padding: 24px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: white; border-right: 1px solid rgba(0,0,0,0.05); }
        .product-image-container { width: 100%; max-width: 180px; aspect-ratio: 3/4; border-radius: 12px; overflow: hidden; margin-bottom: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); position: relative; }
        .product-image-container img { width: 100%; height: 100%; object-fit: cover; }
        .product-name { font-size: 1rem; font-weight: 700; color: var(--gray-900); margin-bottom: 8px; text-align: center; }
        .product-price { font-size: 1.125rem; font-weight: 700; background: var(--gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .analysis-side { width: 55%; padding: 20px; display: flex; flex-direction: column; }
        .analysis-header { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
        .analysis-header img { width: 28px; height: 28px; border-radius: 50%; }
        .analysis-header span { font-weight: 700; font-size: 0.9rem; background: var(--gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .analysis-cards { display: flex; flex-direction: column; gap: 12px; }
        .analysis-card { background: white; border-radius: 16px; padding: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
        .analysis-card-header { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
        .analysis-icon { width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; }
        .analysis-icon.color { background: linear-gradient(135deg, #fce7f3, #fbcfe8); }
        .analysis-icon.body { background: linear-gradient(135deg, #dbeafe, #bfdbfe); }
        .analysis-card-title { font-weight: 700; font-size: 0.9rem; color: var(--gray-700); }
        .analysis-result { display: flex; align-items: center; gap: 12px; }
        .match-badge { display: flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; }
        .match-badge.excellent { background: linear-gradient(135deg, #dcfce7, #bbf7d0); color: #166534; }
        .match-badge.good { background: linear-gradient(135deg, #fef9c3, #fde047); color: #854d0e; }
        .match-text { font-size: 0.85rem; color: var(--gray-600); }
        .color-palette { display: flex; gap: 6px; margin-top: 8px; }
        .color-dot { width: 24px; height: 24px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
        .color-dot.match { border-color: #10b981; box-shadow: 0 0 0 2px #10b981; }
        .season-badge { display: inline-flex; align-items: center; gap: 6px; background: linear-gradient(135deg, var(--pink), var(--purple)); color: white; padding: 6px 14px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; margin-top: 8px; }
        .hero-stores { margin-top: 40px; text-align: center; }
        .stores-label { font-size: 0.875rem; color: var(--gray-500); margin-bottom: 16px; font-weight: 500; }
        .hero-store-marquee { width: 100%; overflow: hidden; mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); }
        .hero-store-track { display: flex; gap: 40px; animation: heroMarquee 25s linear infinite; width: max-content; }
        @keyframes heroMarquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .hero-store-logo { font-size: 1.1rem; font-weight: 600; color: var(--gray-400); white-space: nowrap; }
        .simple-steps { display: flex; align-items: center; justify-content: center; gap: 16px; margin-top: 48px; flex-wrap: wrap; }
        .simple-step { display: flex; align-items: center; gap: 12px; background: white; padding: 16px 24px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
        .step-emoji { font-size: 1.75rem; }
        .step-text { font-size: 1rem; font-weight: 600; color: var(--gray-700); }
        .step-num { color: var(--purple); }
        .step-arrow { font-size: 1.5rem; color: var(--gray-300); font-weight: 300; }
        .hero-cta-section { margin-top: 48px; text-align: center; }
        .hero-cta { display: inline-flex; align-items: center; gap: 8px; background: var(--gradient); color: white; padding: 18px 36px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 1.125rem; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 4px 20px rgba(255, 112, 217, 0.3); }
        .hero-cta:hover { transform: scale(1.05); box-shadow: 0 8px 30px rgba(255, 112, 217, 0.4); }
        .cta-note { margin-top: 12px; font-size: 0.875rem; color: var(--gray-500); }
        footer { padding: 40px 0; background: var(--gray-50); border-top: 1px solid var(--gray-200); }
        .footer-inner { display: flex; justify-content: space-between; align-items: center; }
        .footer-logo { display: flex; align-items: center; gap: 8px; font-size: 0.875rem; color: var(--gray-500); }
        .footer-logo img { width: 20px; height: 20px; border-radius: 50%; }
        .footer-links { display: flex; gap: 24px; }
        .footer-links a { color: var(--gray-500); text-decoration: none; font-size: 0.875rem; }
        .footer-links a:hover { color: var(--gray-700); }
        @media (max-width: 768px) {
          .browser-mockup { width: 100%; }
          .browser-content { flex-direction: column; height: auto; }
          .product-side, .analysis-side { width: 100%; }
          .simple-steps { flex-direction: column; gap: 12px; }
          .step-arrow { transform: rotate(90deg); }
          .footer-inner { flex-direction: column; gap: 20px; text-align: center; }
        }
      `}</style>

      <header>
        <div className="container header-inner">
          <a href="/" className="logo">
            <img src="/mainavatar.png" alt="StyleGenius" />
            <span>StyleGenius</span>
          </a>
          <a href="https://chromewebstore.google.com/detail/stylegenius-virtual-try-o/bggndhefooccenjglglakcfgifgdpbmn" className="header-cta" target="_blank" rel="noopener noreferrer">
            Add to Chrome - Free
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-visual">
            <div className="browser-mockup">
              <div className="browser-toolbar">
                <div className="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="browser-url">
                  <span className="store-name">hm.com</span>
                  <span>/green-knitted-dress</span>
                </div>
                <img src="/mainavatar.png" alt="StyleGenius" className="browser-extension-icon" />
              </div>
              <div className="browser-content">
                <div className="product-side">
                  <div className="product-image-container">
                    <img src="/vto-product3.png" alt="Green Knitted Dress" />
                  </div>
                  <div className="product-name">Green Knitted Dress</div>
                  <div className="product-price">$65.00</div>
                </div>

                <div className="analysis-side">
                  <div className="analysis-header">
                    <img src="/mainavatar.png" alt="StyleGenius" />
                    <span>Style Analysis</span>
                  </div>

                  <div className="analysis-cards">
                    <div className="analysis-card">
                      <div className="analysis-card-header">
                        <div className="analysis-icon color">🎨</div>
                        <div className="analysis-card-title">Color Match</div>
                      </div>
                      <div className="analysis-result">
                        <span className="match-badge excellent">✓ Excellent Match</span>
                        <span className="match-text">Perfect for your skin tone</span>
                      </div>
                      <div className="color-palette">
                        <div className="color-dot match" style={{ background: '#166534' }}></div>
                        <div className="color-dot" style={{ background: '#22c55e' }}></div>
                        <div className="color-dot" style={{ background: '#86efac' }}></div>
                        <div className="color-dot" style={{ background: '#f0fdf4' }}></div>
                      </div>
                      <div className="season-badge">🌸 Spring - Warm Undertones</div>
                    </div>

                    <div className="analysis-card">
                      <div className="analysis-card-header">
                        <div className="analysis-icon body">👗</div>
                        <div className="analysis-card-title">Body Type Match</div>
                      </div>
                      <div className="analysis-result">
                        <span className="match-badge good">✓ Good Fit</span>
                        <span className="match-text">Flattering for your shape</span>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--gray-500)', marginTop: '8px' }}>
                        A-line silhouette complements your hourglass figure
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-stores">
            <p className="stores-label">Get style advice on 1500+ stores</p>
            <div className="hero-store-marquee">
              <div className="hero-store-track">
                {['H&M', 'ZARA', 'ASOS', 'Zalando', 'Mango', '& Other Stories', 'NA-KD', 'Boozt', 'About You', 'Massimo Dutti', 'COS', 'Arket'].map((store, i) => (
                  <React.Fragment key={i}>
                    <span className="hero-store-logo">{store}</span>
                  </React.Fragment>
                ))}
                {['H&M', 'ZARA', 'ASOS', 'Zalando', 'Mango', '& Other Stories', 'NA-KD', 'Boozt', 'About You', 'Massimo Dutti', 'COS', 'Arket'].map((store, i) => (
                  <React.Fragment key={`dup-${i}`}>
                    <span className="hero-store-logo">{store}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="simple-steps">
            <div className="simple-step">
              <div className="step-emoji">📸</div>
              <div className="step-text">
                <span className="step-num">1.</span> Take a selfie
              </div>
            </div>
            <div className="step-arrow">→</div>
            <div className="simple-step">
              <div className="step-emoji">🎨</div>
              <div className="step-text">
                <span className="step-num">2.</span> Get your color season
              </div>
            </div>
            <div className="step-arrow">→</div>
            <div className="simple-step">
              <div className="step-emoji">✨</div>
              <div className="step-text">
                <span className="step-num">3.</span> Shop with confidence
              </div>
            </div>
          </div>

          <div className="hero-cta-section">
            <a href="https://chromewebstore.google.com/detail/stylegenius-virtual-try-o/bggndhefooccenjglglakcfgifgdpbmn" className="hero-cta" target="_blank" rel="noopener noreferrer">
              Discover My Colors - Free
            </a>
            <p className="cta-note">Find out which colors look best on you.</p>
          </div>
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

export default StyleAnalysis;
