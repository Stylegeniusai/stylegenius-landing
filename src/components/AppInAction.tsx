import React from "react";

const AppInAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
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
            See how our AI transforms your style journey
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Row 1: Shopping iPhone + Shopping features */}
          <div className="grid grid-cols-5 gap-8 mb-12 items-center">
            {/* Shopping iPhone */}
            <div className="col-span-2 animate-fade-in-up">
              <div className="hover:scale-105 transition-transform duration-300">
                <img 
                  src="/smartshoppingapp.png" 
                  alt="Smart Shopping App" 
                  className="w-full h-auto max-h-[600px] object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Shopping related features */}
            <div className="col-span-3 grid grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 bg-white shadow-lg group animate-fade-in delay-100">
                <img 
                  src="/smartshoppingbodytype.png" 
                  alt="Body Type Match" 
                  className="w-full h-[200px] object-contain p-4"
                />
                <div className="px-4 pb-3">
                  <h4 className="font-semibold text-sm">Smart Body Match</h4>
                  <p className="text-xs text-gray-600">Never buy anything that doesn't suit you again</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 bg-white shadow-lg group animate-fade-in delay-200">
                <img 
                  src="/makeupassistantai.png" 
                  alt="Makeup Assistant" 
                  className="w-full h-[200px] object-contain p-4"
                />
                <div className="px-4 pb-3">
                  <h4 className="font-semibold text-sm">Personalized Makeup</h4>
                  <p className="text-xs text-gray-600">Get makeup tips for your skin & face - always glowing</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 bg-white shadow-lg group animate-fade-in delay-300">
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
              <div className="rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 bg-white shadow-lg group animate-fade-in delay-400">
                <img 
                  src="/smartmakeupshopping.png" 
                  alt="Smart Makeup Shopping" 
                  className="w-full h-[200px] object-contain p-4"
                />
                <div className="px-4 pb-3">
                  <h4 className="font-semibold text-sm">Curated Beauty Picks</h4>
                  <p className="text-xs text-gray-600">Stop wasting money on wrong shades & formulas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Chat features + Chat iPhone */}
          <div className="grid grid-cols-5 gap-8 items-center">
            {/* Chat feature */}
            <div className="col-span-3 animate-fade-in delay-500">
              <div className="rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 bg-white shadow-lg">
                <img 
                  src="/shoppingassistantaiapp.png" 
                  alt="How Can I Help?" 
                  className="w-full h-[280px] object-contain p-6"
                />
                <div className="px-6 pb-4">
                  <h4 className="font-semibold">Your 24/7 Style Expert</h4>
                  <p className="text-sm text-gray-600">From "what to wear" to "where to buy" - get instant answers that save you time & money</p>
                </div>
              </div>
            </div>

            {/* Chat iPhone */}
            <div className="col-span-2 animate-fade-in-up delay-600">
              <div className="hover:scale-105 transition-transform duration-300">
                <img 
                  src="/stylingassistantchatai.png" 
                  alt="Styling Assistant Chat AI" 
                  className="w-full h-auto max-h-[600px] object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {/* Large iPhone mockup 1 */}
          <div className="flex justify-center">
            <div className="w-72 hover:scale-105 transition-transform duration-300">
              <img 
                src="/stylingassistantchatai.png" 
                alt="Styling Assistant Chat AI" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* 2 smaller features side by side */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden bg-white shadow-md">
              <img 
                src="/makeupassistantai.png" 
                alt="Makeup Assistant AI" 
                className="w-full h-32 object-contain p-2"
              />
            </div>
            <div className="rounded-xl overflow-hidden bg-white shadow-md">
              <img 
                src="/shoppingassistantaiapp.png" 
                alt="Shopping Assistant AI App" 
                className="w-full h-32 object-contain p-2"
              />
            </div>
          </div>

          {/* Large iPhone mockup 2 */}
          <div className="flex justify-center">
            <div className="w-72 hover:scale-105 transition-transform duration-300">
              <img 
                src="/smartshoppingapp.png" 
                alt="Smart Shopping App" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* 3 smaller features */}
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden bg-white shadow-md">
              <img 
                src="/smartmakeupshopping.png" 
                alt="Smart Makeup Shopping" 
                className="w-full h-32 object-contain p-3"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden bg-white shadow-md">
                <img 
                  src="/smartshoppingbodytype.png" 
                  alt="Smart Shopping Body Type" 
                  className="w-full h-32 object-contain p-2"
                />
              </div>
              <div className="rounded-xl overflow-hidden bg-white shadow-md">
                <img 
                  src="/pricetrackingbrowserextension.png" 
                  alt="Price Tracking Browser Extension" 
                  className="w-full h-32 object-contain p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppInAction;