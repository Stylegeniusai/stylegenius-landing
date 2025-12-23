import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Dynamic download button based on device
    const getDeviceType = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      if (/iPad|iPhone|iPod/.test(userAgent)) return 'ios';
      if (/android/i.test(userAgent)) return 'android';
      return 'ios';
    };

    const getAppStoreUrl = () => {
      return getDeviceType() === 'android'
        ? 'https://play.google.com/store/apps/details?id=app.stylegenius&pcampaignid=web_share'
        : 'https://apps.apple.com/app/id6747178892';
    };

    const getButtonText = () => {
      return getDeviceType() === 'android' ? 'Get on Google Play' : 'Download on App Store';
    };

    const appUrl = getAppStoreUrl();
    const buttonText = getButtonText();

    document.querySelectorAll('.app-download-btn').forEach(btn => {
      btn.setAttribute('href', appUrl);
      btn.textContent = buttonText;
    });
  }, []);

  const storeLogos = ['H&M', 'ZARA', 'ASOS', 'Zalando', 'Mango', '& Other Stories', 'NA-KD', 'Boozt', 'About You', 'Massimo Dutti', 'COS', 'Arket'];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <style>{`
        :root {
          --pink: #FF70D9;
          --blue: #6EC1E4;
          --gradient: linear-gradient(45deg, #FF70D9, #6EC1E4);
        }

        .gradient-text {
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .btn-gradient {
          background: var(--gradient);
          box-shadow: 0 4px 20px rgba(255, 112, 217, 0.3);
        }

        .btn-gradient:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
        }

        .btn-blue {
          background: var(--blue);
          box-shadow: 0 4px 20px rgba(110, 193, 228, 0.3);
        }

        /* Hero background blobs */
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
          z-index: 0;
        }

        .hero-blob-1 {
          width: 500px;
          height: 500px;
          background: rgba(255,112,217,0.25);
          top: -100px;
          right: 5%;
          animation: float-blob 15s ease-in-out infinite;
        }

        .hero-blob-2 {
          width: 400px;
          height: 400px;
          background: rgba(110,193,228,0.25);
          bottom: -50px;
          left: 10%;
          animation: float-blob 18s ease-in-out infinite reverse;
        }

        .hero-blob-3 {
          width: 300px;
          height: 300px;
          background: rgba(255,112,217,0.15);
          top: 40%;
          left: 30%;
          animation: float-blob 20s ease-in-out infinite;
        }

        @keyframes float-blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }

        /* 3D Carousel */
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
          background: white;
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
          overflow: hidden;
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

        .face-label {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(255,255,255,0.95);
          padding: 8px 14px;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 700;
          color: #111827;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        /* Store Marquee */
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

        /* Feature cards gradient border */
        .feature-card-wrapper {
          position: relative;
          border-radius: 20px;
          padding: 3px;
          background: var(--gradient);
        }

        /* Section intro */
        .section-intro {
          font-size: 1rem;
          font-weight: 600;
          color: var(--pink);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
        }

        /* Mobile adjustments for carousel */
        @media (max-width: 768px) {
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
      `}</style>

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-64px)] pt-24 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-blob hero-blob-3"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-center md:text-left order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
                Stop Guessing<br />
                <span className="gradient-text">What Suits You</span>
              </h1>

              <div className="flex flex-col gap-3 mb-10">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-pink-400 to-blue-400"></span>
                  <span className="text-lg text-gray-600 font-medium">When shopping</span>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-pink-400 to-blue-400"></span>
                  <span className="text-lg text-gray-600 font-medium">When building outfits</span>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-pink-400 to-blue-400"></span>
                  <span className="text-lg text-gray-600 font-medium">When getting ready</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                <a
                  href="https://chromewebstore.google.com/detail/stylegenius-virtual-try-o/bggndhefooccenjglglakcfgifgdpbmn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient inline-flex items-center px-8 py-4 text-white font-bold text-lg rounded-full transition-all duration-300"
                >
                  Add to Chrome - Free
                </a>
                <a
                  href="#"
                  className="app-download-btn btn-blue inline-flex items-center px-8 py-4 text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105"
                >
                  Download App
                </a>
              </div>

              <div className="flex flex-wrap gap-6 justify-center md:justify-start text-sm text-gray-500">
                <span>⭐ 4.9 App Store</span>
                <span>⭐ 4.5 Chrome Store</span>
              </div>
            </div>

            {/* Right: 3D Carousel */}
            <div className="flex items-center justify-center order-1 md:order-2">
              <div className="prism-container">
                <div className="prism">
                  <div className="prism-face">
                    <img src="/hero-virtualtryon.png" alt="Virtual Try-On" className="w-full h-full object-cover" />
                    <div className="face-label">Virtual Try-On</div>
                  </div>
                  <div className="prism-face">
                    <img src="/hero-styleanalysis.png" alt="Style Analysis" className="w-full h-full object-cover" />
                    <div className="face-label">Style Analysis</div>
                  </div>
                  <div className="prism-face">
                    <img src="/hero-pricetracking.png" alt="Price Tracking" className="w-full h-full object-cover" />
                    <div className="face-label">Price Tracking</div>
                  </div>
                  <div className="prism-face">
                    <img src="/hero-outfitbuilder.png" alt="Outfit Builder" className="w-full h-full object-cover" />
                    <div className="face-label">Outfit Builder</div>
                  </div>
                  <div className="prism-face">
                    <img src="/hero-coloranalysis.png" alt="Color Analysis" className="w-full h-full object-cover" />
                    <div className="face-label">Color Analysis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-8 justify-center mb-10">
            <div className="text-center max-w-sm">
              <span className="text-yellow-500 text-xl block mb-2">★★★★★</span>
              <p className="text-gray-700 italic mb-2">"Love having a friend and expert always ready to talk to about style, clothes, outfits and shopping"</p>
              <span className="text-sm text-gray-500">— iOS User</span>
            </div>
            <div className="text-center max-w-sm">
              <span className="text-yellow-500 text-xl block mb-2">★★★★★</span>
              <p className="text-gray-700 italic mb-2">"Finally stopped buying stuff that looked nothing like I imagined. This thing actually works."</p>
              <span className="text-sm text-gray-500">— Chrome Web Store</span>
            </div>
          </div>
        </div>

        <div className="text-center mb-5">
          <p className="text-sm text-gray-500 uppercase tracking-wide">Works on 1000+ stores</p>
        </div>
        <div className="overflow-hidden">
          <div className="store-marquee-track">
            {[...storeLogos, ...storeLogos].map((store, i) => (
              <span key={i} className="text-xl font-semibold text-gray-400 whitespace-nowrap">{store}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Browser Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-intro">For your browser</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Shopping Companion</h2>
            <p className="text-xl text-gray-600 max-w-xl mx-auto">Always with you when shopping online. Works on any store.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="feature-card-wrapper">
              <div className="bg-gradient-to-b from-pink-50 to-pink-100 rounded-2xl p-6 h-full">
                <h3 className="text-2xl font-bold text-center mb-1">Virtual Try-On</h3>
                <p className="text-2xl font-bold text-center gradient-text mb-4">In Any Store</p>
                <img src="/onboarding-try-on.png" alt="Virtual Try-On" className="w-full max-w-[240px] mx-auto mb-5 aspect-[9/16] object-contain rounded-2xl" />
                <p className="text-center text-gray-600">See exactly how clothes look on you before buying. No more guessing, no more returns.</p>
              </div>
            </div>

            <div className="feature-card-wrapper">
              <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl p-6 h-full">
                <h3 className="text-2xl font-bold text-center mb-1">Save & Track Prices</h3>
                <p className="text-2xl font-bold text-center gradient-text mb-4">From Any Store</p>
                <img src="/onboarding-price.png" alt="Price Tracking" className="w-full max-w-[240px] mx-auto mb-5 aspect-[9/16] object-contain rounded-2xl" />
                <p className="text-center text-gray-600">Save items from anywhere. Track prices automatically. Get notified when anything drops.</p>
              </div>
            </div>

            <div className="feature-card-wrapper">
              <div className="bg-gradient-to-b from-purple-50 to-purple-100 rounded-2xl p-6 h-full">
                <h3 className="text-2xl font-bold text-center mb-1">Instant Style Analysis</h3>
                <p className="text-2xl font-bold text-center gradient-text mb-4">On Any Item</p>
                <img src="/onboarding-style.png" alt="Style Analysis" className="w-full max-w-[240px] mx-auto mb-5 aspect-[9/16] object-contain rounded-2xl" />
                <p className="text-center text-gray-600">Know if it suits your skin tone and body type before you buy. No more regret purchases.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://chromewebstore.google.com/detail/stylegenius-virtual-try-o/bggndhefooccenjglglakcfgifgdpbmn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-flex items-center px-8 py-4 text-white font-bold text-lg rounded-full transition-all duration-300"
            >
              Add to Chrome - Free
            </a>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="py-20 bg-white border-t-4" style={{ borderImage: 'var(--gradient)', borderImageSlice: 1 }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-intro">For your phone</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Personal <span className="gradient-text">AI Stylist</span></h2>
            <p className="text-lg text-gray-600">Style advice, outfit planning, and more — in your pocket</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div className="text-center">
              <div className="w-full max-w-[280px] mx-auto mb-6 aspect-[9/16] rounded-3xl overflow-hidden shadow-xl">
                <img src="/app-outfitbuilder.png" alt="Outfit Builder" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Build & Try <span className="gradient-text">Outfits</span></h3>
              <p className="text-gray-600">Plan your wardrobe, build outfits, and try them on — never wonder what to wear</p>
            </div>

            <div className="text-center">
              <div className="w-full max-w-[280px] mx-auto mb-6 aspect-[9/16] rounded-3xl overflow-hidden shadow-xl">
                <img src="/app-virtualtryon.png" alt="Virtual Try-On" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Shop <span className="gradient-text">Smart</span></h3>
              <p className="text-gray-600">Try on clothes in any store, track prices, save items — shop with confidence</p>
            </div>

            <div className="text-center">
              <div className="w-full max-w-[280px] mx-auto mb-6 aspect-[9/16] rounded-3xl overflow-hidden shadow-xl">
                <img src="/app-coloranalysis.png" alt="Color Analysis" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Your Style <span className="gradient-text">Profile</span></h3>
              <p className="text-gray-600">Discover your best colors, body type tips, and what styles suit you</p>
            </div>
          </div>

          {/* AI Stylist Text */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-2xl font-bold mb-4">Your AI Stylist, <span className="gradient-text">Always Available</span></h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Chat with your personal stylist anytime. Ask about outfits, get advice on what to wear, learn what suits your body and colors. Like having a fashion-expert friend in your pocket.
            </p>
          </div>

          <div className="text-center">
            <a
              href="#"
              className="app-download-btn btn-gradient inline-flex items-center px-8 py-4 text-white font-bold text-lg rounded-full transition-all duration-300"
            >
              Download on App Store
            </a>
            <p className="text-sm text-gray-500 mt-4">Free download — Available on iOS & Android</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">What Users Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-yellow-500 text-xl mb-4">★★★★★</div>
              <p className="text-lg text-gray-700 italic mb-4">"Love having a friend and expert always ready to talk to about style, clothes, outfits and shopping"</p>
              <p className="text-sm text-gray-500">— iOS User</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-yellow-500 text-xl mb-4">★★★★★</div>
              <p className="text-lg text-gray-700 italic mb-4">"Finally stopped buying stuff that looked nothing like I imagined. This thing actually works."</p>
              <p className="text-sm text-gray-500">— Chrome Web Store Review</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Shop Smarter?</h2>
          <p className="text-xl text-gray-600 mb-12">Join thousands who've already transformed their shopping experience</p>

          <div className="flex flex-wrap gap-8 justify-center">
            <div className="bg-white rounded-3xl p-10 shadow-xl text-center min-w-[280px]">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-blue-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5">💻</div>
              <h3 className="text-2xl font-bold mb-3">Browser Extension</h3>
              <p className="text-gray-600 mb-6">Shop smarter on any website with price tracking and instant style advice</p>
              <a
                href="https://chromewebstore.google.com/detail/stylegenius-virtual-try-o/bggndhefooccenjglglakcfgifgdpbmn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient inline-flex items-center justify-center w-full px-6 py-3 text-white font-bold rounded-full transition-all duration-300"
              >
                Add to Chrome
              </a>
              <p className="text-xs text-gray-500 mt-3">Chrome</p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl text-center min-w-[280px]">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-blue-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5">📱</div>
              <h3 className="text-2xl font-bold mb-3">Mobile App</h3>
              <p className="text-gray-600 mb-6">Get StyleGenius on your phone for styling advice anywhere, anytime</p>
              <a
                href="#"
                className="app-download-btn btn-blue inline-flex items-center justify-center w-full px-6 py-3 text-white font-bold rounded-full transition-all duration-300 hover:scale-105"
              >
                Download App
              </a>
              <p className="text-xs text-gray-500 mt-3">iOS & Android</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
