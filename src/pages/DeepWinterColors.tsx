import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const DeepWinterColors = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">Color Analysis</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Deep Winter{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(45deg, #E6E6FA, #00CED1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Color Palette
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              The complete guide to Deep Winter colors - dramatic, bold, and high-contrast shades for striking cool-toned beauty.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/deep-winter-hero.png`}
              alt="Deep Winter color palette guide"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Deep Winter?</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Deep Winter (also called Dark Winter) is one of the three Winter sub-seasons in 12-season color analysis. Deep Winters have striking coloring with dark features, cool undertones, and high contrast. They look best in bold, saturated colors with cool or neutral-cool bases.
          </p>

          <div className="bg-indigo-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Deep Winter Characteristics</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Skin Tones</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Porcelain to deep ebony</li>
                  <li>• Cool or neutral undertones</li>
                  <li>• May have olive undertones</li>
                  <li>• High contrast with features</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Eyes & Hair</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Dark brown or black hair</li>
                  <li>• Deep brown, black, or dark blue eyes</li>
                  <li>• Dark, intense features</li>
                  <li>• Strong contrast</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Best Colors</h3>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-6">
              {[
                { name: "Black", hex: "#000000" },
                { name: "Charcoal", hex: "#36454F" },
                { name: "Navy", hex: "#000080" },
                { name: "Royal Blue", hex: "#4169E1" },
                { name: "Emerald", hex: "#046307" },
                { name: "Pine", hex: "#01796F" },
                { name: "Burgundy", hex: "#800020" },
                { name: "True Red", hex: "#BF0A30" },
                { name: "Magenta", hex: "#FF0090" },
                { name: "Plum", hex: "#8E4585" },
                { name: "Eggplant", hex: "#614051" },
                { name: "Icy Pink", hex: "#F8E8EE" },
                { name: "Icy Blue", hex: "#E0FFFF" },
                { name: "Bright White", hex: "#FFFFFF" },
                { name: "Silver", hex: "#C0C0C0" },
                { name: "Deep Teal", hex: "#014D4E" }
              ].map((color) => (
                <div key={color.name} className="text-center">
                  <div className="w-full aspect-square rounded-lg mb-1 border border-gray-200 shadow-sm" style={{ backgroundColor: color.hex }} />
                  <span className="text-xs text-gray-600">{color.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Colors to Embrace</h3>
              <ul className="text-gray-700 space-y-2">
                <li><span className="text-green-600 mr-2">✓</span> True black and pure white</li>
                <li><span className="text-green-600 mr-2">✓</span> Deep, saturated jewel tones</li>
                <li><span className="text-green-600 mr-2">✓</span> Bold, high-contrast combinations</li>
                <li><span className="text-green-600 mr-2">✓</span> Icy pastels as accents</li>
                <li><span className="text-green-600 mr-2">✓</span> Cool-based reds and pinks</li>
                <li><span className="text-green-600 mr-2">✓</span> Silver metallics</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Colors to Avoid</h3>
              <ul className="text-gray-700 space-y-2">
                <li><span className="text-red-500 mr-2">✕</span> Warm oranges and yellows</li>
                <li><span className="text-red-500 mr-2">✕</span> Muted, dusty colors</li>
                <li><span className="text-red-500 mr-2">✕</span> Warm browns and camel</li>
                <li><span className="text-red-500 mr-2">✕</span> Soft, powdery pastels</li>
                <li><span className="text-red-500 mr-2">✕</span> Gold jewelry</li>
                <li><span className="text-red-500 mr-2">✕</span> Earth tones</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Deep Winter Celebrities</h3>
            <div className="flex flex-wrap gap-3">
              {["Anne Hathaway", "Megan Fox", "Liv Tyler", "Courteney Cox", "Lucy Liu", "Penélope Cruz", "Lupita Nyong'o", "Kerry Washington"].map((name) => (
                <span key={name} className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">{name}</span>
              ))}
            </div>
          </div>

          <div className="bg-purple-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Makeup Tips for Deep Winter</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Best Lip Colors</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• True red (blue-based)</li>
                  <li>• Deep berry and plum</li>
                  <li>• Fuchsia and magenta</li>
                  <li>• Burgundy and wine</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Eye Makeup</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Smoky grays and blacks</li>
                  <li>• Deep purple and plum</li>
                  <li>• Navy and sapphire</li>
                  <li>• Silver and icy shimmer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gradient-to-br from-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Shop Your Deep Winter Colors</h2>
            <p className="text-xl text-gray-200 mb-8">
              StyleGenius shows you which clothes match your Deep Winter coloring as you shop online!
            </p>
            <a href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 bg-white text-indigo-900 font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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

export default DeepWinterColors;
