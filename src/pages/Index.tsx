import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    function getDeviceType() {
      const userAgent = navigator.userAgent;
      if (/iPad|iPhone|iPod/.test(userAgent)) {
        return 'ios';
      }
      if (/android/i.test(userAgent)) {
        return 'android';
      }
      return 'ios';
    }

    function getAppStoreUrl() {
      const device = getDeviceType();
      if (device === 'android') {
        return 'https://play.google.com/store/apps/details?id=app.stylegenius&pcampaignid=web_share';
      }
      return 'https://apps.apple.com/app/id6747178892';
    }

    function getDownloadButtonText() {
      const device = getDeviceType();
      if (device === 'android') {
        return 'Get on Google Play';
      }
      return 'Download on App Store';
    }

    const appUrl = getAppStoreUrl();
    const buttonText = getDownloadButtonText();

    const appButtons = [
      'hero-app-btn',
      'app-download-btn',
      'final-download-btn'
    ];

    appButtons.forEach(id => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.setAttribute('href', appUrl);
        btn.textContent = buttonText;
      }
    });
  }, []);

  const storeLogos = ['H&M', 'ZARA', 'ASOS', 'Zalando', 'Mango', '& Other Stories', 'NA-KD', 'Boozt', 'About You', 'Massimo Dutti', 'COS', 'Arket'];

  return (
    <>
      <style>{`
        /* Colors */
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

        .homepage-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Navigation */
        .homepage-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--gray-200);
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .logo img {
          width: 36px;
          height: 36px;
          border-radius: 50%;
        }

        .logo span {
          font-weight: 700;
          font-size: 1.25rem;
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-links {
          display: flex;
          gap: 32px;
        }

        .nav-links a {
          color: var(--gray-700);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: var(--pink);
        }

        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 32px;
          font-size: 1.125rem;
          font-weight: 600;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s;
          border: none;
          cursor: pointer;
        }

        .btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
        }

        .btn-primary {
          background: var(--gradient);
          color: white;
          box-shadow: 0 4px 20px rgba(255, 112, 217, 0.3);
        }

        .btn-secondary {
          background: var(--blue);
          color: white;
          box-shadow: 0 4px 20px rgba(110, 193, 228, 0.3);
        }

        /* Hero Section - Split Layout */
        .hero {
          min-height: calc(100vh - 64px);
          padding: 100px 0 60px;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #fff 0%, var(--gray-50) 100%);
        }

        /* Floating gradient blobs */
        .hero-bg-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
          z-index: 0;
        }

        .hero-bg-blob-1 {
          width: 500px;
          height: 500px;
          background: rgba(255,112,217,0.25);
          top: -100px;
          right: 5%;
          animation: float-blob 15s ease-in-out infinite;
        }

        .hero-bg-blob-2 {
          width: 400px;
          height: 400px;
          background: rgba(110,193,228,0.25);
          bottom: -50px;
          left: 10%;
          animation: float-blob 18s ease-in-out infinite reverse;
        }

        .hero-bg-blob-3 {
          width: 300px;
          height: 300px;
          background: rgba(255,112,217,0.15);
          top: 40%;
          left: 30%;
          animation: float-blob 20s ease-in-out infinite;
        }

        @keyframes float-blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -20px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
        }

        .hero .homepage-container {
          position: relative;
          z-index: 1;
        }

        .hero-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          width: 100%;
        }

        .hero-content {
          text-align: left;
        }

        .hero h1 {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 32px;
          line-height: 1.05;
          letter-spacing: -0.02em;
        }

        .hero h1 .gradient {
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-when {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 40px;
        }

        .when-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.25rem;
          color: var(--gray-600);
          font-weight: 500;
        }

        .when-item::before {
          content: '';
          width: 10px;
          height: 10px;
          background: var(--gradient);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .hero-cta {
          display: flex;
          gap: 16px;
          margin-bottom: 32px;
        }

        .hero-trust {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          color: var(--gray-500);
        }

        /* Hero Visual */
        .hero-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        /* 3D Rotating Carousel */
        .prism-container {
          width: 100%;
          max-width: 260px;
          height: 320px;
          perspective: 800px;
          margin: 0 auto;
        }

        .prism {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: rotatePrism 18s linear infinite;
        }

        .prism-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: white;
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
          border: 2px solid transparent;
          background-image: linear-gradient(white, white), var(--gradient);
          background-origin: border-box;
          background-clip: padding-box, border-box;
        }

        .prism-face:nth-child(1) { transform: rotateY(0deg) translateZ(179px); }
        .prism-face:nth-child(2) { transform: rotateY(72deg) translateZ(179px); }
        .prism-face:nth-child(3) { transform: rotateY(144deg) translateZ(179px); }
        .prism-face:nth-child(4) { transform: rotateY(216deg) translateZ(179px); }
        .prism-face:nth-child(5) { transform: rotateY(288deg) translateZ(179px); }

        @keyframes rotatePrism {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(-360deg); }
        }

        .prism-face img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 18px;
        }

        .face-label {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(255,255,255,0.95);
          padding: 8px 14px;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--gray-900);
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        /* Mobile Hero */
        @media (max-width: 968px) {
          .hero {
            min-height: auto;
            padding: 100px 0 60px;
          }

          .hero-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .hero-content {
            text-align: center;
            order: 2;
          }

          .hero h1 {
            font-size: 2.5rem;
          }

          .hero-when {
            align-items: center;
          }

          .hero-cta {
            justify-content: center;
            flex-wrap: wrap;
          }

          .hero-trust {
            justify-content: center;
          }

          .hero-visual {
            order: 1;
          }

          .prism-container {
            max-width: 220px;
            height: 270px;
          }

          .prism-face:nth-child(1) { transform: rotateY(0deg) translateZ(151px); }
          .prism-face:nth-child(2) { transform: rotateY(72deg) translateZ(151px); }
          .prism-face:nth-child(3) { transform: rotateY(144deg) translateZ(151px); }
          .prism-face:nth-child(4) { transform: rotateY(216deg) translateZ(151px); }
          .prism-face:nth-child(5) { transform: rotateY(288deg) translateZ(151px); }
        }

        /* Trust Section */
        .trust-section {
          padding: 40px 0 60px;
          background: white;
        }

        .trust-reviews {
          display: flex;
          gap: 32px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .trust-review {
          text-align: center;
          max-width: 400px;
        }

        .trust-stars {
          color: #eab308;
          font-size: 1.25rem;
          display: block;
          margin-bottom: 8px;
        }

        .trust-review p {
          font-size: 1rem;
          color: var(--gray-700);
          font-style: italic;
          margin-bottom: 8px;
          line-height: 1.5;
        }

        .trust-author {
          font-size: 0.875rem;
          color: var(--gray-500);
        }

        .trust-stores {
          text-align: center;
        }

        .trust-stores-label {
          font-size: 0.875rem;
          color: var(--gray-500);
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Store Marquee */
        .store-marquee {
          width: 100%;
          overflow: hidden;
          margin-top: 24px;
        }

        .store-marquee-track {
          display: flex;
          gap: 48px;
          animation: marquee 30s linear infinite;
          width: max-content;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .store-logo {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--gray-400);
          white-space: nowrap;
        }

        /* Browser Features Section */
        .browser-features {
          padding: 80px 0;
          background: white;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .section-header p {
          font-size: 1.25rem;
          color: var(--gray-600);
          max-width: 600px;
          margin: 0 auto;
        }

        .section-intro {
          font-size: 1rem;
          font-weight: 600;
          color: var(--pink);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .feature-card {
          position: relative;
          border-radius: 20px;
          padding: 3px;
          background: var(--gradient);
        }

        .feature-card-inner {
          background: linear-gradient(to bottom, #fdf2f8, #fce7f3);
          border-radius: 18px;
          padding: 24px;
          height: 100%;
        }

        .feature-card:nth-child(2) .feature-card-inner {
          background: linear-gradient(to bottom, #eff6ff, #dbeafe);
        }

        .feature-card:nth-child(3) .feature-card-inner {
          background: linear-gradient(to bottom, #f5f3ff, #ede9fe);
        }

        .feature-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 4px;
        }

        .feature-card .subtitle {
          font-size: 1.5rem;
          font-weight: 700;
          text-align: center;
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 16px;
        }

        .feature-image {
          width: 100%;
          max-width: 240px;
          margin: 0 auto 20px;
          display: block;
          aspect-ratio: 9/16;
          object-fit: contain;
          border-radius: 16px;
        }

        .feature-card p {
          text-align: center;
          color: var(--gray-600);
          line-height: 1.6;
        }

        .section-cta {
          text-align: center;
          margin-top: 48px;
        }

        /* App Section */
        .app-section {
          padding: 100px 0;
          background: white;
          position: relative;
          overflow: hidden;
        }

        .app-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient);
        }

        .app-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .app-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .app-header h2 .gradient {
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .app-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-bottom: 60px;
        }

        .app-feature {
          text-align: center;
        }

        .app-feature-image {
          width: 100%;
          max-width: 280px;
          margin: 0 auto 24px;
          aspect-ratio: 9/16;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .app-feature-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 24px;
        }

        .app-feature h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .app-feature h3 .gradient {
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .app-feature p {
          color: var(--gray-600);
        }

        .ai-stylist-section {
          margin-top: 60px;
          margin-bottom: 60px;
          text-align: center;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .ai-stylist-content h3 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .ai-stylist-content h3 .gradient {
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ai-stylist-content p {
          font-size: 1.125rem;
          color: var(--gray-600);
          line-height: 1.7;
        }

        .app-cta {
          text-align: center;
        }

        .app-cta-subtitle {
          font-size: 0.875rem;
          color: var(--gray-500);
          margin-top: 16px;
        }

        /* Reviews */
        .reviews {
          padding: 80px 0;
          background: var(--gray-50);
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
        }

        .review-card {
          background: white;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }

        .review-stars {
          color: #eab308;
          font-size: 1.25rem;
          margin-bottom: 16px;
        }

        .review-text {
          font-size: 1.125rem;
          color: var(--gray-700);
          margin-bottom: 16px;
          font-style: italic;
        }

        .review-author {
          font-size: 0.875rem;
          color: var(--gray-500);
        }

        /* Final CTA */
        .final-cta {
          padding: 100px 0;
          background: white;
          text-align: center;
        }

        .final-cta h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .final-cta > .homepage-container > p {
          font-size: 1.25rem;
          color: var(--gray-600);
          margin-bottom: 40px;
        }

        .cta-buttons {
          display: flex;
          gap: 24px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          text-align: center;
          min-width: 280px;
        }

        .cta-card-icon {
          width: 64px;
          height: 64px;
          background: var(--gradient);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto 20px;
        }

        .cta-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .cta-card p {
          color: var(--gray-600);
          margin-bottom: 24px;
          font-size: 1rem;
        }

        .cta-card .btn {
          width: 100%;
        }

        .cta-card .note {
          font-size: 0.75rem;
          color: var(--gray-500);
          margin-top: 12px;
        }

        /* Footer */
        .homepage-footer {
          padding: 40px 0;
          background: var(--gray-50);
          border-top: 1px solid var(--gray-200);
        }

        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          color: var(--gray-500);
        }

        .footer-logo img {
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }

        .footer-links {
          display: flex;
          gap: 24px;
        }

        .footer-links a {
          color: var(--gray-500);
          text-decoration: none;
          font-size: 0.875rem;
        }

        .footer-links a:hover {
          color: var(--gray-700);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .hero h1 {
            font-size: 2.25rem;
          }

          .features-grid,
          .app-features-grid {
            grid-template-columns: 1fr;
          }

          .reviews-grid {
            grid-template-columns: 1fr;
          }

          .section-header h2,
          .app-header h2,
          .final-cta h2 {
            font-size: 1.75rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .footer-inner {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }

        /* Animations */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.6s ease-out forwards;
        }

        .delay-1 { animation-delay: 0.1s; opacity: 0; }
        .delay-2 { animation-delay: 0.2s; opacity: 0; }
        .delay-3 { animation-delay: 0.3s; opacity: 0; }

        /* Nav spacer */
        .nav-spacer {
          height: 64px;
        }
      `}</style>

      {/* Navigation */}
      <nav className="homepage-nav">
        <div className="homepage-container nav-inner">
          <a href="/" className="logo">
            <img src="/mainavatar.png" alt="StyleGenius" />
            <span>StyleGenius</span>
          </a>
          <div className="nav-links">
            <a href="#browser">Browser Extension</a>
            <a href="#app">Mobile App</a>
            <a href="/what-colors-suit-me">Color Analysis</a>
            <a href="/what-body-type-suits-me">Body Type Guide</a>
          </div>
        </div>
      </nav>

      <div className="nav-spacer"></div>

      {/* Hero - Split Layout */}
      <section className="hero" id="browser">
        <div className="hero-bg-blob hero-bg-blob-1"></div>
        <div className="hero-bg-blob hero-bg-blob-2"></div>
        <div className="hero-bg-blob hero-bg-blob-3"></div>

        <div className="homepage-container">
          <div className="hero-inner">
            <div className="hero-content">
              <h1 className="animate-fade-up">
                Stop Guessing<br />
                <span className="gradient">What Suits You</span>
              </h1>

              <div className="hero-when animate-fade-up delay-1">
                <div className="when-item">When shopping</div>
                <div className="when-item">When building outfits</div>
                <div className="when-item">When getting ready</div>
              </div>

              <div className="hero-cta animate-fade-up delay-2">
                <a href="https://chromewebstore.google.com/detail/stylegenius-virtual-try-o/bggndhefooccenjglglakcfgifgdpbmn" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Add to Chrome - Free
                </a>
                <a href="#" className="btn btn-secondary" id="hero-app-btn">
                  Download App
                </a>
              </div>

              <div className="hero-trust animate-fade-up delay-2">
                <div className="trust-item">
                  <span>⭐ 4.9 App Store</span>
                </div>
                <div className="trust-item">
                  <span>⭐ 4.5 Chrome Store</span>
                </div>
              </div>
            </div>

            <div className="hero-visual animate-fade-up delay-3">
              <div className="prism-container">
                <div className="prism">
                  <div className="prism-face">
                    <img src="/hero-virtualtryon.png" alt="Virtual Try-On" />
                    <div className="face-label">Virtual Try-On</div>
                  </div>
                  <div className="prism-face">
                    <img src="/hero-styleanalysis.png" alt="Style Analysis" />
                    <div className="face-label">Style Analysis</div>
                  </div>
                  <div className="prism-face">
                    <img src="/hero-pricetracking.png" alt="Price Tracking" />
                    <div className="face-label">Price Tracking</div>
                  </div>
                  <div className="prism-face">
                    <img src="/hero-outfitbuilder.png" alt="Outfit Builder" />
                    <div className="face-label">Outfit Builder</div>
                  </div>
                  <div className="prism-face">
                    <img src="/hero-coloranalysis.png" alt="Color Analysis" />
                    <div className="face-label">Color Analysis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="homepage-container">
          <div className="trust-reviews">
            <div className="trust-review">
              <span className="trust-stars">★★★★★</span>
              <p>"Love having a friend and expert always ready to talk to about style, clothes, outfits and shopping"</p>
              <span className="trust-author">— iOS User</span>
            </div>
            <div className="trust-review">
              <span className="trust-stars">★★★★★</span>
              <p>"Finally stopped buying stuff that looked nothing like I imagined. This thing actually works."</p>
              <span className="trust-author">— Chrome Web Store</span>
            </div>
          </div>
        </div>

        <div className="trust-stores">
          <p className="trust-stores-label">Works on 1000+ stores</p>
          <div className="store-marquee">
            <div className="store-marquee-track">
              {[...storeLogos, ...storeLogos].map((store, i) => (
                <span key={i} className="store-logo">{store}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Browser Features */}
      <section className="browser-features">
        <div className="homepage-container">
          <div className="section-header">
            <p className="section-intro">For your browser</p>
            <h2>Your Shopping Companion</h2>
            <p>Always with you when shopping online. Works on any store.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card animate-fade-up">
              <div className="feature-card-inner">
                <h3>Virtual Try-On</h3>
                <p className="subtitle">In Any Store</p>
                <img src="/onboarding-try-on.png" alt="Virtual Try-On" className="feature-image" />
                <p>See exactly how clothes look on you before buying. No more guessing, no more returns.</p>
              </div>
            </div>

            <div className="feature-card animate-fade-up delay-1">
              <div className="feature-card-inner">
                <h3>Save & Track Prices</h3>
                <p className="subtitle">From Any Store</p>
                <img src="/onboarding-price.png" alt="Price Tracking" className="feature-image" />
                <p>Save items from anywhere. Track prices automatically. Get notified when anything drops.</p>
              </div>
            </div>

            <div className="feature-card animate-fade-up delay-2">
              <div className="feature-card-inner">
                <h3>Instant Style Analysis</h3>
                <p className="subtitle">On Any Item</p>
                <img src="/onboarding-style.png" alt="Style Analysis" className="feature-image" />
                <p>Know if it suits your skin tone and body type before you buy. No more regret purchases.</p>
              </div>
            </div>
          </div>

          <div className="section-cta">
            <a href="https://chromewebstore.google.com/detail/stylegenius-virtual-try-o/bggndhefooccenjglglakcfgifgdpbmn" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Add to Chrome - Free
            </a>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="app-section" id="app">
        <div className="homepage-container">
          <div className="app-header">
            <p className="section-intro">For your phone</p>
            <h2>Your Personal <span className="gradient">AI Stylist</span></h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '1.125rem' }}>Style advice, outfit planning, and more — in your pocket</p>
          </div>

          <div className="app-features-grid">
            <div className="app-feature">
              <div className="app-feature-image">
                <img src="/app-outfitbuilder.png" alt="Outfit Builder" />
              </div>
              <h3>Build & Try <span className="gradient">Outfits</span></h3>
              <p>Plan your wardrobe, build outfits, and try them on — never wonder what to wear</p>
            </div>

            <div className="app-feature">
              <div className="app-feature-image">
                <img src="/app-virtualtryon.png" alt="Virtual Try-On" />
              </div>
              <h3>Shop <span className="gradient">Smart</span></h3>
              <p>Try on clothes in any store, track prices, save items — shop with confidence</p>
            </div>

            <div className="app-feature">
              <div className="app-feature-image">
                <img src="/app-coloranalysis.png" alt="Color Analysis" />
              </div>
              <h3>Your Style <span className="gradient">Profile</span></h3>
              <p>Discover your best colors, body type tips, and what styles suit you</p>
            </div>
          </div>

          <div className="ai-stylist-section">
            <div className="ai-stylist-content">
              <h3>Your AI Stylist, <span className="gradient">Always Available</span></h3>
              <p>Chat with your personal stylist anytime. Ask about outfits, get advice on what to wear, learn what suits your body and colors. Like having a fashion-expert friend in your pocket.</p>
            </div>
          </div>

          <div className="app-cta">
            <a href="#" className="btn btn-primary" id="app-download-btn">
              Download on App Store
            </a>
            <p className="app-cta-subtitle">Free download — Available on iOS & Android</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews">
        <div className="homepage-container">
          <div className="section-header">
            <h2>What Users Say</h2>
          </div>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Love having a friend and expert always ready to talk to about style, clothes, outfits and shopping"</p>
              <p className="review-author">— iOS User</p>
            </div>

            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Finally stopped buying stuff that looked nothing like I imagined. This thing actually works."</p>
              <p className="review-author">— Chrome Web Store Review</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="homepage-container">
          <h2>Ready to Shop Smarter?</h2>
          <p>Join thousands who've already transformed their shopping experience</p>

          <div className="cta-buttons">
            <div className="cta-card">
              <div className="cta-card-icon">💻</div>
              <h3>Browser Extension</h3>
              <p>Shop smarter on any website with price tracking and instant style advice</p>
              <a href="https://chromewebstore.google.com/detail/stylegenius-virtual-try-o/bggndhefooccenjglglakcfgifgdpbmn" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Add to Chrome
              </a>
              <p className="note">Chrome</p>
            </div>

            <div className="cta-card">
              <div className="cta-card-icon">📱</div>
              <h3>Mobile App</h3>
              <p>Get StyleGenius on your phone for styling advice anywhere, anytime</p>
              <a href="#" className="btn btn-secondary" id="final-download-btn">
                Download App
              </a>
              <p className="note">iOS & Android</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="homepage-footer">
        <div className="homepage-container footer-inner">
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

export default Index;
