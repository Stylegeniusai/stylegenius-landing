import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const BestColorsForOliveSkin = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Best Colors for{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(45deg, #808000, #8B7355)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Olive Skin
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Discover the colors that make olive skin tones glow - from earthy neutrals to vibrant jewel tones.
            </p>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Olive Skin Tones</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Olive skin has green or yellow undertones mixed with neutral or golden hues. It's one of the most versatile skin tones and can lean warm or cool. The key is identifying whether you're a warm olive or cool olive.
          </p>

          <div className="space-y-8 mb-12">
            <div className="bg-amber-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Warm Olive Skin</h3>
              <p className="text-gray-700 mb-4">If your skin has golden/yellow undertones and gold jewelry looks great:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Burnt orange", "Mustard", "Olive green", "Coral", "Turquoise", "Warm red", "Camel", "Terracotta", "Bronze", "Warm brown"].map((color) => (
                  <span key={color} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{color}</span>
                ))}
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cool Olive Skin</h3>
              <p className="text-gray-700 mb-4">If your skin has more green undertones and silver jewelry flatters you:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Emerald", "Sapphire blue", "Plum", "Burgundy", "Teal", "Forest green", "Cool gray", "Navy", "Deep purple", "Berry"].map((color) => (
                  <span key={color} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{color}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Universal Winners for Olive Skin</h3>
            <ul className="space-y-3 text-gray-700">
              <li><span className="text-green-600 mr-2">✓</span> Earth tones (olive, khaki, tan)</li>
              <li><span className="text-green-600 mr-2">✓</span> Jewel tones (emerald, sapphire, ruby)</li>
              <li><span className="text-green-600 mr-2">✓</span> Warm whites and creams</li>
              <li><span className="text-green-600 mr-2">✓</span> Deep, saturated colors</li>
              <li><span className="text-green-600 mr-2">✓</span> Turquoise and teal</li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Colors to Avoid</h3>
            <ul className="space-y-2 text-gray-700">
              <li><span className="text-red-500 mr-2">✕</span> Neon colors (too harsh)</li>
              <li><span className="text-red-500 mr-2">✕</span> Pale pastels (can look washed out)</li>
              <li><span className="text-red-500 mr-2">✕</span> Pure white (too stark)</li>
              <li><span className="text-red-500 mr-2">✕</span> Certain yellows (can enhance sallowness)</li>
            </ul>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Find Your Perfect Colors</h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius shows you if colors flatter your olive skin tone while you browse any store!
            </p>
            <a href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(45deg, #808000, #8B7355)' }}>
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

export default BestColorsForOliveSkin;
