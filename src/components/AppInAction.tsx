import React, { useEffect, useRef, useState } from "react";

const AppInAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-[2000ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span 
              className="bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              StyleGenius
            </span>{" "}
            in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform how you shop, dress and feel confident
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Row 1: Shopping iPhone + Kollage */}
          <div className="grid grid-cols-3 gap-8 mb-16 items-center">
            {/* Shopping iPhone */}
            <div className={`col-span-1 transition-all duration-[2500ms] ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className={`hover:scale-110 transition-transform duration-700 ${isVisible ? 'animate-float' : ''}`}>
                <img 
                  src="/smartshoppingapp.png" 
                  alt="Smart Shopping App" 
                  className="w-full h-auto max-h-[600px] object-contain drop-shadow-2xl animate-pulse-glow rounded-3xl"
                />
              </div>
            </div>

            {/* Kollage */}
            <div className={`col-span-2 transition-all duration-[2000ms] ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}>
              <div className="hover:scale-105 transition-transform duration-500">
                <img 
                  src="/smartshoppingsmartbeautysmartstyling.png" 
                  alt="StyleGenius App Features" 
                  className="w-full h-auto max-h-[500px] object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Features (som INTE finns i kollaget) + Chat iPhone */}
          <div className="grid grid-cols-5 gap-8 items-center">
            {/* Features som inte är i kollaget */}
            <div className="col-span-3 grid grid-cols-2 gap-6">
              <div className={`rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-500 bg-white shadow-lg group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: isVisible ? '1200ms' : '0ms' }}>
                <img 
                  src="/pricetrackingbrowserextension.png" 
                  alt="Price Tracking" 
                  className="w-full h-[200px] object-contain p-4"
                />
                <div className="px-4 pb-3">
                  <h4 className="font-semibold text-sm">Smart Price Tracking</h4>
                  <p className="text-xs text-gray-600">Save thousands - get alerts when your favorites go on sale</p>
                </div>
              </div>
              <div className={`rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-500 bg-white shadow-lg group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: isVisible ? '1500ms' : '0ms' }}>
                <img 
                  src="/shoppingassistantaiapp.png" 
                  alt="AI Style Expert" 
                  className="w-full h-[200px] object-contain p-4"
                />
                <div className="px-4 pb-3">
                  <h4 className="font-semibold text-sm">Your 24/7 Style Expert</h4>
                  <p className="text-xs text-gray-600">From "what to wear" to "where to buy" - instant answers</p>
                </div>
              </div>
            </div>

            {/* Chat iPhone */}
            <div className={`col-span-2 transition-all duration-[2500ms] ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`} style={{ transitionDelay: isVisible ? '1800ms' : '0ms' }}>
              <div className={`hover:scale-110 transition-transform duration-700 ${isVisible ? 'animate-float' : ''}`} style={{ animationDelay: '2.5s' }}>
                <img 
                  src="/stylingassistantchatai.png" 
                  alt="Styling Assistant Chat AI" 
                  className="w-full h-auto max-h-[600px] object-contain drop-shadow-2xl animate-pulse-glow rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {/* Shopping iPhone */}
          <div className="flex justify-center">
            <div className="w-72 hover:scale-105 transition-transform duration-300">
              <img 
                src="/smartshoppingapp.png" 
                alt="Smart Shopping App" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Kollage */}
          <div className="flex justify-center">
            <div className="w-80 hover:scale-105 transition-transform duration-300">
              <img 
                src="/smartshoppingsmartbeautysmartstyling.png" 
                alt="StyleGenius App Features" 
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
          </div>

          {/* Chat iPhone */}
          <div className="flex justify-center">
            <div className="w-72 hover:scale-105 transition-transform duration-300">
              <img 
                src="/stylingassistantchatai.png" 
                alt="Styling Assistant Chat AI" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Extra features */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden bg-white shadow-md">
              <img 
                src="/pricetrackingbrowserextension.png" 
                alt="Price Tracking" 
                className="w-full h-32 object-contain p-2"
              />
            </div>
            <div className="rounded-xl overflow-hidden bg-white shadow-md">
              <img 
                src="/shoppingassistantaiapp.png" 
                alt="AI Style Expert" 
                className="w-full h-32 object-contain p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppInAction;