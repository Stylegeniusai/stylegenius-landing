import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const BestColorsForDarkSkin = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Best Colors for{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(45deg, #8B4513, #FFD700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Dark Skin
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Discover colors that make deep and dark skin tones radiate - from bold brights to rich jewel tones.
            </p>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Power of Dark Skin Tones</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Dark skin tones can wear bold, vibrant colors that would overwhelm lighter complexions. The key is understanding your undertone - cool, warm, or neutral - and choosing colors that create beautiful contrast.
          </p>

          <div className="space-y-8 mb-12">
            <div className="bg-amber-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Warm Undertones</h3>
              <p className="text-gray-700 mb-4">If your skin has golden, red, or amber undertones:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Bright orange", "Coral", "Golden yellow", "Warm red", "Olive green", "Turquoise", "Peach", "Bronze", "Rust", "Warm white"].map((color) => (
                  <span key={color} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{color}</span>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cool Undertones</h3>
              <p className="text-gray-700 mb-4">If your skin has blue, purple, or red undertones:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Royal purple", "Fuchsia", "Emerald", "Cobalt blue", "Hot pink", "True red", "Icy white", "Silver", "Bright berry", "Electric blue"].map((color) => (
                  <span key={color} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{color}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Colors That Look Amazing on Everyone</h3>
            <ul className="space-y-3 text-gray-700">
              <li><span className="text-amber-600 mr-2">✓</span> Bright, saturated jewel tones</li>
              <li><span className="text-amber-600 mr-2">✓</span> Pure white and crisp colors</li>
              <li><span className="text-amber-600 mr-2">✓</span> Bold primary colors</li>
              <li><span className="text-amber-600 mr-2">✓</span> Metallics (gold or silver based on undertone)</li>
              <li><span className="text-amber-600 mr-2">✓</span> High-contrast patterns</li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Colors to Approach with Caution</h3>
            <ul className="space-y-2 text-gray-700">
              <li><span className="text-red-500 mr-2">✕</span> Muddy, muted browns (can look dull)</li>
              <li><span className="text-red-500 mr-2">✕</span> Very pale pastels (lack contrast)</li>
              <li><span className="text-red-500 mr-2">✕</span> Colors too close to your skin tone</li>
              <li><span className="text-red-500 mr-2">✕</span> Olive green (on some undertones)</li>
            </ul>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Find Your Best Colors</h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius shows you which colors will make you glow while shopping online!
            </p>
            <a href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(45deg, #8B4513, #FFD700)' }}>
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

export default BestColorsForDarkSkin;
