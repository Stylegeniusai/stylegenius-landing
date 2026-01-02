import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const OfficeSirenAesthetic = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-100 to-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium mb-6">Fashion Aesthetic</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Office Siren{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(45deg, #4A5568, #1A202C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Aesthetic
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The viral TikTok trend that combines corporate polish with seductive elegance - think power dressing meets femme fatale.
            </p>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the Office Siren Aesthetic?</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Office Siren is the sexy corporate look that went viral on TikTok. It's about looking powerful and seductive at the same time - structured blazers, pencil skirts, reading glasses, and slicked-back hair. Think Mad Men meets modern boss energy.
          </p>

          <div className="bg-gray-100 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Elements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-gray-700 space-y-2">
                <li>• Fitted blazers</li>
                <li>• Pencil skirts</li>
                <li>• Waistcoats/vests</li>
                <li>• Button-up shirts</li>
              </ul>
              <ul className="text-gray-700 space-y-2">
                <li>• Slicked-back hair</li>
                <li>• Reading glasses</li>
                <li>• Neutral color palette</li>
                <li>• Structured pieces</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Office Siren Wardrobe</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Structured blazer (oversized or fitted)</li>
                <li>• High-waisted pencil skirt</li>
                <li>• Fitted waistcoat</li>
                <li>• Silk button-up blouse</li>
                <li>• Tailored wide-leg trousers</li>
                <li>• Pointed-toe pumps</li>
                <li>• Structured handbag</li>
                <li>• Statement watch</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Color Palette</h3>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { name: "Black", hex: "#000000" },
                  { name: "Charcoal", hex: "#36454F" },
                  { name: "Navy", hex: "#000080" },
                  { name: "White", hex: "#FFFFFF" },
                  { name: "Burgundy", hex: "#722F37" },
                  { name: "Camel", hex: "#C19A6B" },
                  { name: "Gray", hex: "#808080" },
                  { name: "Brown", hex: "#8B4513" }
                ].map((color) => (
                  <div key={color.name} className="text-center">
                    <div className="w-full aspect-square rounded-lg mb-1 border border-gray-200" style={{ backgroundColor: color.hex }} />
                    <span className="text-xs text-gray-500">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gradient-to-br from-gray-100 to-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Shop the Office Siren Look</h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius helps you find power pieces that fit your body perfectly!
            </p>
            <a href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(45deg, #4A5568, #1A202C)' }}>
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

export default OfficeSirenAesthetic;
