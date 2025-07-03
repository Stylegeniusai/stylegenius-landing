
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
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Meet Your Personal
            <span 
              className="block bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              StyleGenius
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Your AI styling assistant that helps you create amazing outfits, find your perfect colors, 
            and shop smarter. Available in your phone and browser.
          </p>
          
          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm border">
              🎨 Color Analysis
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm border">
              👗 Outfit Creation
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm border">
              🛍️ Smart Shopping
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm border">
              💬 Expert Advice
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
