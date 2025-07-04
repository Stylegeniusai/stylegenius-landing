
import React, { useState, useEffect } from "react";

const AppShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const mobileScreenshots = [
    { src: "/StylegeniusHomescreen.png", alt: "StyleGenius Home Screen" },
    { src: "/Skintoneanalysisseason.png", alt: "Skintone Analysis" },
    { src: "/Skintoneseasoncolors.png", alt: "Season Colors" },
    { src: "/Smartshoppingai.png", alt: "Smart Shopping AI" },
    { src: "/FitcheckAistyleassistant.png", alt: "Fit Check AI" },
    { src: "/Styleassistant.png", alt: "Style Assistant" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mobileScreenshots.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            StyleGenius in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how StyleGenius transforms your styling experience across mobile app and browser extension
          </p>
        </div>
        
        {/* Mobile App Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                📱 Mobile App
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'}}>
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Skintone Analysis & Personality</h4>
                    <p className="text-gray-600">Discover your perfect colors and style personality with AI-powered analysis</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'}}>
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Tinder-Swipe to Fill Your Wardrobe</h4>
                    <p className="text-gray-600">Effortlessly organize your clothes with fun swipe gestures and smart categorization</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'}}>
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Elevate Your Style, Confidence & Life</h4>
                    <p className="text-gray-600">Transform how you dress and feel with personalized styling that boosts your confidence</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-8">
              {/* Mobile Carousel */}
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {mobileScreenshots.map((screenshot, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="w-full h-[500px] md:h-[600px] lg:h-[700px]">
                          <img 
                            src={screenshot.src}
                            alt={screenshot.alt}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Carousel Dots */}
                <div className="flex justify-center gap-2 mt-4">
                  {mobileScreenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentSlide === index 
                          ? 'bg-gradient-to-r from-pink-400 to-blue-400 w-8' 
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Touch Navigation Hints */}
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button 
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + mobileScreenshots.length) % mobileScreenshots.length)}
                    className="p-2 rounded-full bg-white/80 shadow-lg ml-2 hover:bg-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button 
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % mobileScreenshots.length)}
                    className="p-2 rounded-full bg-white/80 shadow-lg mr-2 hover:bg-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Browser Extension Section */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
                <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
                  <img 
                    src="/Browserextensionshoppingai.png" 
                    alt="StyleGenius Browser Extension Shopping" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <a 
                  href="https://chromewebstore.google.com/search/StyleGenius%20%E2%80%93%20Your%20Personal%20Styling%20and%20Shopping%20Assistant" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center mt-6 px-8 py-4 text-lg font-semibold text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{
                    background: 'linear-gradient(45deg, #6EC1E4, #FF70D9)'
                  }}
                >
                  Download Extension
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                🌐 Browser Extension
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{background: 'linear-gradient(45deg, #6EC1E4, #FF70D9)'}}>
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Analyze While Shopping</h4>
                    <p className="text-gray-600">Get instant analysis of items while browsing any shopping site</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{background: 'linear-gradient(45deg, #6EC1E4, #FF70D9)'}}>
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Build Outfits Online</h4>
                    <p className="text-gray-600">Create outfits with items you want to buy before purchasing</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{background: 'linear-gradient(45deg, #6EC1E4, #FF70D9)'}}>
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Save & Track</h4>
                    <p className="text-gray-600">Save items across all sites and track price changes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
