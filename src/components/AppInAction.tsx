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
          {/* Row 1: Large iPhone mockup + 2 smaller features */}
          <div className="grid grid-cols-5 gap-8 mb-12 items-center">
            {/* Large iPhone mockup */}
            <div className="col-span-2">
              <div className="hover:scale-105 transition-transform duration-300">
                <img 
                  src="/stylingassistantchatai.png" 
                  alt="Styling Assistant Chat AI" 
                  className="w-full h-auto max-h-[600px] object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* 3 smaller feature images in grid */}
            <div className="col-span-3 grid grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 bg-white shadow-lg">
                <img 
                  src="/makeupassistantai.png" 
                  alt="Makeup Assistant AI" 
                  className="w-full h-[250px] object-contain p-4"
                />
              </div>
              <div className="rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 bg-white shadow-lg">
                <img 
                  src="/shoppingassistantaiapp.png" 
                  alt="Shopping Assistant AI App" 
                  className="w-full h-[250px] object-contain p-4"
                />
              </div>
              <div className="rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 bg-white shadow-lg">
                <img 
                  src="/smartmakeupshopping.png" 
                  alt="Smart Makeup Shopping" 
                  className="w-full h-[250px] object-contain p-4"
                />
              </div>
              <div className="rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 bg-white shadow-lg">
                <img 
                  src="/pricetrackingbrowserextension.png" 
                  alt="Price Tracking Browser Extension" 
                  className="w-full h-[250px] object-contain p-4"
                />
              </div>
            </div>
          </div>

          {/* Row 2: 1 smaller feature + Large iPhone mockup */}
          <div className="grid grid-cols-5 gap-8 items-center">
            {/* 1 smaller feature image */}
            <div className="col-span-3">
              <div className="rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 bg-white shadow-lg">
                <img 
                  src="/smartshoppingbodytype.png" 
                  alt="Smart Shopping Body Type" 
                  className="w-full h-[300px] object-contain p-6"
                />
              </div>
            </div>

            {/* Large iPhone mockup */}
            <div className="col-span-2">
              <div className="hover:scale-105 transition-transform duration-300">
                <img 
                  src="/smartshoppingapp.png" 
                  alt="Smart Shopping App" 
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