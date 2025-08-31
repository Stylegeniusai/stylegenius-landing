import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

const WhatColorsSuitMe = () => {
  // Skin tone data from CSV
  const skinTones = [
    {
      name: "Porcelain",
      description: "Super fair skin with pink or neutral undertones",
      bestColors: ["Dusty Rose", "Soft Pink", "Light Coral", "Sky Blue", "Lavender", "Mint Green"],
      avoidColors: ["Bright Orange", "Electric Yellow", "Hot Pink", "Neon Green"],
      placeholder: "/placeholder-porcelain.jpg"
    },
    {
      name: "Fair", 
      description: "Light skin that tans lightly and may burn",
      bestColors: ["Rose Pink", "Coral", "Salmon", "Light Blue", "Turquoise", "Emerald"],
      avoidColors: ["Neon Yellow", "Neon Orange", "Electric Green", "Hot Magenta"],
      placeholder: "/placeholder-fair.jpg"
    },
    {
      name: "Beige",
      description: "Light-medium skin with warm golden undertones", 
      bestColors: ["Coral Pink", "Terracotta", "Gold", "Teal Blue", "Forest Green", "Plum"],
      avoidColors: ["Pastel Pink", "Baby Blue", "Pale Yellow", "Light Gray"],
      placeholder: "/placeholder-beige.jpg"
    },
    {
      name: "Sand",
      description: "Medium skin with warm yellow undertones",
      bestColors: ["Crimson", "Burnt Orange", "Mustard", "Electric Blue", "Jade Green", "Magenta"],
      avoidColors: ["Beige", "Nude", "Pale Pink", "Cream"],
      placeholder: "/placeholder-sand.jpg"
    },
    {
      name: "Tan",
      description: "Medium-warm skin that tans easily",
      bestColors: ["Tomato Red", "Apricot", "Yellow Gold", "Turquoise", "Mint", "Orchid"],
      avoidColors: ["Cool Pink", "Baby Pink", "Icy Blue", "Cool Gray"],
      placeholder: "/placeholder-tan.jpg"
    },
    {
      name: "Caramel", 
      description: "Rich medium-brown skin with golden undertones",
      bestColors: ["Deep Red", "Burgundy", "Gold", "Cobalt Blue", "Emerald", "Deep Purple"],
      avoidColors: ["Pastel Blue", "Pastel Pink", "Light Gray", "Pale Lavender"],
      placeholder: "/placeholder-caramel.jpg"
    },
    {
      name: "Bronze",
      description: "Deep warm-toned skin with golden undertones",
      bestColors: ["Scarlet", "Orange", "Bright Yellow", "Electric Blue", "Emerald", "Hot Pink"],
      avoidColors: ["Beige", "Nude", "Taupe", "Light Brown"],
      placeholder: "/placeholder-bronze.jpg"
    },
    {
      name: "Espresso",
      description: "Very deep rich skin with warm or neutral undertones", 
      bestColors: ["True Red", "Bright Orange", "Golden Yellow", "Electric Blue", "Bright Green", "Hot Pink"],
      avoidColors: ["Pale Pink", "Light Blue", "Lavender", "Beige"],
      placeholder: "/placeholder-espresso.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              What Colors{" "}
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Suit Me?
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Discover your perfect color palette! Find out which shades make you glow and which ones to skip. 
              Your skin tone holds the secret to looking absolutely stunning! ✨
            </p>
            
            {/* Quick CTA */}
            <div className="bg-white rounded-2xl p-6 shadow-lg inline-block mb-12">
              <p className="text-lg text-gray-600 mb-4">
                Want a personalized color analysis just for you?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="https://apps.apple.com/app/id6747178892" target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="px-6 py-3 rounded-full text-white font-semibold"
                    style={{
                      background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
                    }}
                  >
                    📱 Get Your Personal Analysis
                  </Button>
                </a>
                <Button variant="outline" className="px-6 py-3 rounded-full font-semibold border-2 border-pink-300">
                  🌐 Try Browser Extension
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skin Tone Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Your Skin Tone Match
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Not sure which category you are? Look at your wrist veins! Blue/purple = cool undertones, green = warm undertones, both = neutral.
            </p>
          </div>

          {/* Skin Tone Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skinTones.map((tone, index) => (
              <div 
                key={tone.name}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-pink-100"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                      <span className="text-2xl">👩🏻</span>
                    </div>
                    <p className="text-sm text-gray-500">Photo placeholder</p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{tone.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{tone.description}</p>
                  
                  {/* Best Colors */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                      ✅ Perfect Colors for You:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {tone.bestColors.slice(0, 6).map((color, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-200"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Avoid Colors */}
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2 flex items-center">
                      ❌ Colors to Skip:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {tone.avoidColors.slice(0, 4).map((color, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-medium border border-red-200"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Pro Tips for Looking Amazing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Test Before You Buy</h3>
                <p className="text-gray-600">
                  Hold fabric up to your face in natural light. The right colors will make your skin glow, 
                  while wrong ones will make you look tired or washed out.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🛍️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Shop Smarter</h3>
                <p className="text-gray-600">
                  Focus on your best colors for statement pieces and neutrals that complement your undertones. 
                  You'll look put-together every time!
                </p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Unlock Your Perfect Style?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Get personalized color analysis, outfit suggestions, and smart shopping tips with StyleGenius!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://apps.apple.com/app/id6747178892" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    className="px-8 py-4 rounded-full text-white font-semibold text-lg"
                    style={{
                      background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
                    }}
                  >
                    📱 Download StyleGenius App
                  </Button>
                </a>
                <Button 
                  size="lg"
                  variant="outline" 
                  className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-pink-300 hover:bg-pink-50"
                >
                  🌐 Add Browser Extension
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatColorsSuitMe;