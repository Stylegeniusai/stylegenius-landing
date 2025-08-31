import React from "react";
import { Button } from "./ui/button";

const StyleGeniusEverywhere = () => {
  const features = [
    {
      icon: "🔄",
      title: "Cross-Device Sync",
      description: "Save items on your phone, check them on your computer. Everything syncs instantly across all devices.",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      icon: "💰",
      title: "Smart Price Tracking", 
      description: "Get notified when items you love go on sale. Never miss a deal with intelligent price monitoring.",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: "🎨",
      title: "Personal Style Analysis",
      description: "AI-powered advice on colors, fit, and style. Get recommendations tailored to your skin tone and body type.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🛍️",
      title: "Shop with Genius",
      description: "Get instant style advice on any website or in-store. Your personal stylist is always with you.",
      gradient: "from-cyan-500 to-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            StyleGenius{" "}
            <span 
              className="bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Everywhere
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your personal style expert on mobile, desktop, and every website you visit
          </p>
        </div>

        {/* Main Layout: Mobile + Desktop Mockups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-16">
          
          {/* Left Side - Mobile App */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              📱 StyleGenius Mobile App
            </h3>
            <div className="flex justify-center">
              <img 
                src="/appstylegeniuseverywhere.png" 
                alt="StyleGenius Mobile App" 
                className="max-w-full h-auto max-h-[500px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right Side - Browser Extension */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              🌐 Browser Extension
            </h3>
            <div className="relative">
              {/* Browser Window */}
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                {/* Browser Chrome */}
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded px-3 py-1 mx-4 text-sm text-gray-500">
                    zalando.co.uk
                  </div>
                  {/* StyleGenius Extension Icon */}
                  <img 
                    src="/mainavatar.png" 
                    alt="StyleGenius Extension" 
                    className="w-6 h-6 rounded-full shadow-md hover:scale-110 transition-transform duration-200"
                  />
                </div>
                
                {/* Browser Content with real screenshot */}
                <div className="overflow-hidden">
                  <img 
                    src="/browserextensionsmartshopping.jpg" 
                    alt="StyleGenius Browser Extension" 
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                <span className="text-white text-xl">{feature.icon}</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <a href="https://apps.apple.com/app/id6747178892" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
                }}
              >
                📱 Download Mobile App
              </Button>
            </a>
            
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-2 hover:bg-blue-50 transition-all duration-300"
                style={{
                  borderColor: '#6EC1E4',
                  color: '#6EC1E4'
                }}
              >
                🌐 Add Browser Extension
              </Button>
            </a>
          </div>
          
          <p className="text-gray-500 text-sm">
            Available on iOS, Android (coming soon), Chrome, Safari & Edge
          </p>
        </div>
      </div>
    </section>
  );
};

export default StyleGeniusEverywhere;