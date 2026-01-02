import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const TrueAutumnColors = () => {
  const colorPalette = {
    best: [
      { name: "Burnt Orange", hex: "#CC5500" },
      { name: "Rust", hex: "#B7410E" },
      { name: "Olive Green", hex: "#556B2F" },
      { name: "Teal", hex: "#008080" },
      { name: "Mustard", hex: "#FFDB58" },
      { name: "Terracotta", hex: "#E2725B" },
      { name: "Forest Green", hex: "#228B22" },
      { name: "Pumpkin", hex: "#FF7518" },
      { name: "Bronze", hex: "#CD7F32" },
      { name: "Warm Red", hex: "#CD5C5C" },
      { name: "Gold", hex: "#CFB53B" },
      { name: "Chocolate", hex: "#7B3F00" }
    ],
    neutrals: [
      { name: "Cream", hex: "#FFFDD0" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "Warm Brown", hex: "#8B5A2B" },
      { name: "Coffee", hex: "#6F4E37" },
      { name: "Charcoal Brown", hex: "#36454F" }
    ],
    avoid: [
      { name: "Fuchsia", hex: "#FF00FF" },
      { name: "Icy Blue", hex: "#A5F2F3" },
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Cool Pink", hex: "#FFB6C1" },
      { name: "Pure White", hex: "#FFFFFF" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
              Color Analysis
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              True Autumn{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #CC5500, #228B22)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Color Palette
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The complete guide to True Autumn colors - warm, rich, and earthy tones inspired by fall foliage.
            </p>
          </div>
        </div>
      </section>

      {/* What is True Autumn */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is True Autumn?</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            True Autumn (also called Warm Autumn) is the quintessential autumn season. Your coloring is entirely warm with rich, earthy tones. Think falling leaves, pumpkin patches, and harvest festivals.
          </p>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">True Autumn Characteristics</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Skin:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>Warm golden or bronze undertones</li>
                  <li>Often with freckles</li>
                  <li>Ivory to olive complexion</li>
                  <li>May have peachy tones</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Hair & Eyes:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>Auburn, copper, or warm brown hair</li>
                  <li>Red or golden highlights</li>
                  <li>Warm hazel, brown, or green eyes</li>
                  <li>Eyes often have gold flecks</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">True Autumn Celebrities</h3>
            <div className="flex flex-wrap gap-3">
              {["Julia Roberts", "Julianne Moore", "Marcia Cross", "Amy Adams", "Jessica Chastain", "Lindsay Lohan"].map((name) => (
                <span key={name} className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Color Palette */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Your True Autumn Colors</h2>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Best Colors</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {colorPalette.best.map((color) => (
                <div key={color.name} className="text-center">
                  <div className="w-full aspect-square rounded-xl shadow-md mb-2" style={{ backgroundColor: color.hex }} />
                  <span className="text-sm text-gray-600">{color.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Best Neutrals</h3>
            <div className="grid grid-cols-5 gap-4">
              {colorPalette.neutrals.map((color) => (
                <div key={color.name} className="text-center">
                  <div className="w-full aspect-square rounded-xl shadow-md mb-2 border border-gray-200" style={{ backgroundColor: color.hex }} />
                  <span className="text-sm text-gray-600">{color.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Colors to Avoid</h3>
            <div className="grid grid-cols-5 gap-4">
              {colorPalette.avoid.map((color) => (
                <div key={color.name} className="text-center">
                  <div className="w-full aspect-square rounded-xl shadow-md mb-2 border border-gray-200 relative" style={{ backgroundColor: color.hex }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl text-white drop-shadow-lg">✕</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600">{color.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Shop Your True Autumn Colors</h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius shows you if colors match your warm palette while you browse!
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🎨</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Color Match</h4>
                  <p className="text-sm text-gray-600">Instant palette matching</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">👗</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Virtual Try-On</h4>
                  <p className="text-sm text-gray-600">Try before buying</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💰</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Price Tracking</h4>
                  <p className="text-sm text-gray-600">Track price drops</p>
                </div>
              </div>
            </div>

            <a href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(45deg, #CC5500, #228B22)' }}>
                Add to Chrome - It's Free
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrueAutumnColors;
