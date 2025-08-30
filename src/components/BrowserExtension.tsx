import React from "react";
import { Button } from "./ui/button";

const BrowserExtension = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Shop Anywhere,{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Style Everywhere
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your personal StyleGenius on every website you visit. Seamless sync between your phone and computer.
          </p>
        </div>

        {/* Split Layout - Desktop + Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Side - Desktop Browser */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Browser Chrome */}
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 mx-4 text-sm text-gray-500">
                  shopping-site.com
                </div>
              </div>
              
              {/* Browser Content */}
              <div className="p-6 h-80 bg-white relative">
                <img 
                  src="/placeholder.svg" 
                  alt="Browser Extension in action"
                  className="w-full h-full object-cover rounded-lg"
                />
                
                {/* StyleGenius Extension Popup Overlay */}
                <div className="absolute top-4 right-4 bg-white rounded-xl shadow-lg p-4 w-64 border">
                  <div className="flex items-center gap-2 mb-3">
                    <img src="/mainavatar.png" alt="StyleGenius" className="w-6 h-6 rounded-full" />
                    <span className="font-semibold text-sm">StyleGenius</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">💡 This would look great with your skin tone!</p>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs rounded-full">
                      Save Item
                    </button>
                    <button className="px-3 py-1 border text-xs rounded-full">
                      Price Alert
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Features List */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🔄</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cross-Device Sync</h3>
                <p className="text-gray-600">Save items on your computer, check them on your phone. Everything syncs instantly across all your devices.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">💰</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Price Tracking</h3>
                <p className="text-gray-600">Get notified when items you love go on sale. Never miss a deal again with intelligent price monitoring.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🛍️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Shop with Genius</h3>
                <p className="text-gray-600">Get instant style advice on any website. See if colors match your skin tone and get personalized recommendations.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">📱</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile + Desktop</h3>
                <p className="text-gray-600">Start shopping on your computer, continue on your phone. Your StyleGenius is always with you, everywhere you shop.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(45deg, #3B82F6, #06B6D4)'
                }}
              >
                🌐 Add Chrome Extension
              </Button>
            </a>
            <a href="https://apps.apple.com/app/id6747178892" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-2 hover:bg-blue-50 transition-all duration-300"
                style={{
                  borderColor: '#06B6D4',
                  color: '#06B6D4'
                }}
              >
                📱 Download Mobile App
              </Button>
            </a>
          </div>
          
          <p className="text-gray-500 mt-4 text-sm">
            Available for Chrome, Safari, and Edge • Free to download
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrowserExtension;