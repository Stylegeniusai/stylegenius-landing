import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

// Track page view with UTM parameters for ads
const trackAdsPageView = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const urlParams = new URLSearchParams(window.location.search);
    (window as any).gtag('event', 'ads_landing_view', {
      event_category: 'ads',
      utm_source: urlParams.get('utm_source') || 'direct',
      utm_medium: urlParams.get('utm_medium') || 'none',
      utm_campaign: urlParams.get('utm_campaign') || 'none',
      utm_content: urlParams.get('utm_content') || 'none',
    });
  }
};

// Track CTA click with source
const trackExtensionCTA = (location: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const urlParams = new URLSearchParams(window.location.search);
    (window as any).gtag('event', 'extension_cta_click', {
      event_category: 'conversion',
      event_label: location,
      utm_source: urlParams.get('utm_source') || 'direct',
      utm_campaign: urlParams.get('utm_campaign') || 'none',
    });
  }
};

const CHROME_EXTENSION_URL = "https://chromewebstore.google.com/detail/stylegenius-virtual-try-o/bggndhefooccenjglglakcfgifgdpbmn";

const ExtensionLanding = () => {
  useEffect(() => {
    trackAdsPageView();
  }, []);

  const handleCTAClick = (location: string) => {
    trackExtensionCTA(location);
    window.open(CHROME_EXTENSION_URL, '_blank');
  };

  const features = [
    {
      valueProp: "Stop Guessing",
      title: "Virtual Try-On",
      subtitle: "In Any Store",
      description: "See exactly how clothes look on you before buying. No more guessing, no more returns.",
      image: "/onboarding-try-on.png",
      bgGradient: "from-pink-50 to-rose-50",
    },
    {
      valueProp: "Save Money",
      title: "Save & Track Prices",
      subtitle: "From Any Store",
      description: "Save items from anywhere. Track prices automatically. Get notified when anything drops.",
      image: "/onboarding-price.png",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      valueProp: "Look Your Best",
      title: "Instant Style Analysis",
      subtitle: "On Any Item",
      description: "Know if it suits your skin tone and body type before you buy. No more regret purchases.",
      image: "/onboarding-style.png",
      bgGradient: "from-purple-50 to-violet-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Logo + minimal */}
      <header className="px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/mainavatar.png"
              alt="StyleGenius"
              className="w-10 h-10 rounded-full shadow-md"
            />
            <span className="text-xl font-bold text-gray-900">StyleGenius</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
            <span className="text-yellow-500">★★★★★</span>
            <span>4.9 on Chrome Store</span>
          </div>
        </div>
      </header>

      {/* Main headline + CTA */}
      <section className="px-4 pt-8 pb-10 text-center">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-2 mx-auto leading-tight">
          Stop guessing. Save money.<br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Look your best.
          </span>
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Install once. Works everywhere you shop.
        </p>

        <button
          onClick={() => handleCTAClick('hero')}
          className="inline-flex items-center px-8 py-4 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
          }}
        >
          Add to Chrome — Free
        </button>

      </section>

      {/* 3 Features - The main show */}
      <section className="px-4 pb-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative rounded-2xl p-[2px] shadow-sm hover:shadow-lg transition-all animate-fade-up"
                style={{
                  animationDelay: `${index * 150}ms`,
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
                }}
              >
              <div className={`bg-gradient-to-b ${feature.bgGradient} rounded-2xl p-5 h-full`}>
                {/* Feature title */}
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 text-center">
                  {feature.title}
                </h2>
                <p
                  className="text-xl lg:text-2xl font-bold mb-3 text-center bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {feature.subtitle}
                </p>

                {/* Feature image - tall format */}
                <div className="relative mx-auto mb-5 w-full max-w-[260px]">
                  <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <button
            onClick={() => handleCTAClick('main_cta')}
            className="inline-flex items-center gap-3 px-10 py-5 text-white font-bold text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
            }}
          >
            Add to Chrome — Free
          </button>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 mb-10 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Check className="w-4 h-4 text-green-500" />
              <span>Free to start</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="w-4 h-4 text-green-500" />
              <span>Works on 1000+ stores</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="w-4 h-4 text-green-500" />
              <span>4.9★ rated</span>
            </div>
          </div>

          {/* Browser mockup */}
          <div className="rounded-xl shadow-2xl overflow-hidden max-w-3xl mx-auto">
            <div className="bg-gray-100 px-3 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex-1 bg-white rounded px-2 py-0.5 mx-3 text-xs text-gray-500">
                hm.com
              </div>
              <img
                src="/mainavatar.png"
                alt="StyleGenius Extension"
                className="w-5 h-5 rounded-full shadow-md"
              />
            </div>
            <img
              src="/browser-desktop-new.png"
              alt="StyleGenius working in your browser"
              className="w-full h-auto block bg-white"
            />
          </div>
        </div>
      </section>

      {/* Quick testimonial */}
      <section className="px-4 py-10 bg-gray-50">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-yellow-500 text-lg mb-3">★★★★★</div>
          <p className="text-gray-700 text-lg italic mb-3">
            "Finally stopped buying stuff that looked nothing like I imagined. This thing actually works."
          </p>
          <p className="text-sm text-gray-500">— Chrome Web Store Review</p>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-6 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <img src="/mainavatar.png" alt="" className="w-5 h-5 rounded-full" />
            <span>StyleGenius by GoMotion AB</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="/privacy" className="hover:text-gray-700">Privacy</a>
            <a href="/terms" className="hover:text-gray-700">Terms</a>
            <a href="/support" className="hover:text-gray-700">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExtensionLanding;
