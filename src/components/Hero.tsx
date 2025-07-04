
import React from "react";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
        }}
      />
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center min-h-screen flex flex-col justify-center py-20">
          {/* Main Heading with Avatar on same line */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 text-left">
              Meet Your Personal<br/>
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                StyleGenius
              </span>
            </h1>
            <img 
              src="/mainavatar.png" 
              alt="StyleGenius Avatar" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(255, 112, 217, 0.3))'
              }}
            />
          </div>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Your personal styling and shopping assistant that elevates your style, confidence and life.
          </p>
          
          {/* Value Props - Updated with new terms */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm border">
              🎨 Skintone Analysis
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm border">
              👗 Style Items
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm border">
              🛍️ Smart Shopping
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm border">
              ✨ Outfit Creation
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm border">
              📸 Fit Checks
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm border">
              💬 Your Style Expert
            </span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://apps.apple.com/app/id6747178892" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
                }}
              >
                Download for iOS
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-gray-50"
            >
              Join Android Waitlist
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-gray-400" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
