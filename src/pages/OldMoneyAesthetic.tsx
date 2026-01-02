import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const OldMoneyAesthetic = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-stone-100 to-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-stone-200 text-stone-800 rounded-full text-sm font-medium mb-6">
              Fashion Aesthetic
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Old Money{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #8B7355, #2F4F4F)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Aesthetic
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The complete guide to old money style - timeless elegance, quiet luxury, and understated sophistication that never goes out of fashion.
            </p>
          </div>
        </div>
      </section>

      {/* What is Old Money */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the Old Money Aesthetic?</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The old money aesthetic is about looking wealthy without trying - think Kennedy compound, European aristocracy, and yacht club vibes. It's classic, understated elegance that prioritizes quality over trends and whispers wealth rather than shouting it.
            </p>

            <div className="bg-gradient-to-r from-stone-50 to-neutral-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Principles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="text-gray-700 space-y-2">
                  <li>• Quality over quantity</li>
                  <li>• No visible logos or branding</li>
                  <li>• Classic, timeless silhouettes</li>
                  <li>• Neutral color palette</li>
                </ul>
                <ul className="text-gray-700 space-y-2">
                  <li>• Proper fit and tailoring</li>
                  <li>• Natural fabrics (cashmere, silk, linen)</li>
                  <li>• Understated accessories</li>
                  <li>• Effortless sophistication</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* The Wardrobe */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Old Money Wardrobe Essentials</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tops & Knitwear</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Cashmere sweaters (crew neck, V-neck)
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Oxford button-down shirts
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Striped Breton tops
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Cable-knit sweaters
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Silk blouses
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bottoms</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Tailored wool trousers
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Pleated khakis
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Tennis skirts
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  High-quality denim (no rips)</li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Linen pants
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Outerwear</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Camel wool coat
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Navy blazer
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Trench coat
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Barbour-style jacket
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Quilted vest
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accessories</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Pearl earrings and necklace
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Leather loafers
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Structured leather handbag (no logos)
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Silk scarf
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Classic watch
                </li>
              </ul>
            </div>
          </div>

          {/* Color Palette */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The Old Money Color Palette</h3>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
              {[
                { name: "Navy", hex: "#000080" },
                { name: "Camel", hex: "#C19A6B" },
                { name: "Cream", hex: "#FFFDD0" },
                { name: "White", hex: "#FFFFFF" },
                { name: "Burgundy", hex: "#800020" },
                { name: "Forest", hex: "#228B22" },
                { name: "Gray", hex: "#808080" },
                { name: "Beige", hex: "#F5F5DC" },
                { name: "Brown", hex: "#8B4513" },
                { name: "Black", hex: "#000000" }
              ].map((color) => (
                <div key={color.name} className="text-center">
                  <div
                    className="w-full aspect-square rounded-lg shadow-sm border border-gray-200"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-xs text-gray-500 mt-1 block">{color.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Old Money Do's and Don'ts</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Do</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Invest in quality basics that last
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Get clothes tailored to fit perfectly
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Choose natural fabrics
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Keep accessories minimal and elegant
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Look polished but never overdone
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Don't</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Wear visible logos or flashy brands
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Follow every fast fashion trend
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Wear overly revealing clothing
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Over-accessorize
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Choose synthetic fabrics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-stone-100 to-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Build Your Old Money Wardrobe
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius helps you find timeless pieces that match the old money aesthetic - quality basics that suit your body type and skin tone.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-stone-100 to-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Color Match</h4>
                  <p className="text-sm text-gray-600">Find neutral tones that flatter you</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-stone-100 to-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👗</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Virtual Try-On</h4>
                  <p className="text-sm text-gray-600">Try classic pieces before investing</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-stone-100 to-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Price Tracking</h4>
                  <p className="text-sm text-gray-600">Get alerts when quality pieces go on sale</p>
                </div>
              </div>
            </div>

            <a href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn" target="_blank" rel="noopener noreferrer">
              <button
                className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(45deg, #8B7355, #2F4F4F)' }}
              >
                Add to Chrome - It's Free
              </button>
            </a>
            <p className="text-sm text-gray-500 mt-4">Works on Zara, H&M, ASOS, and 1000+ more stores</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OldMoneyAesthetic;
