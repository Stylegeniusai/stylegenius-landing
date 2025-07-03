
import React from "react";

const AppShowcase = () => {
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
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="grid grid-cols-3 gap-6 h-[500px]">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src="/styleaishopping.png" 
                    alt="StyleGenius App Shopping" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src="/coloranalysisshopping.png" 
                    alt="StyleGenius Color Analysis" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src="/mainavatar.png" 
                    alt="StyleGenius Avatar" 
                    className="w-full h-full object-cover"
                  />
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
                <div className="w-full h-[500px] rounded-2xl overflow-hidden">
                  <img 
                    src="/browserextensionstylegenius.png" 
                    alt="StyleGenius Browser Extension" 
                    className="w-full h-full object-contain"
                  />
                </div>
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
