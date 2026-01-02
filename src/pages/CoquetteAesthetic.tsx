import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const CoquetteAesthetic = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-rose-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-6">Fashion Aesthetic</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Coquette{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(45deg, #FF69B4, #FFB6C1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Aesthetic
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The ultimate guide to the coquette aesthetic - feminine, flirty, and romantic style inspired by bows, lace, and all things girly.
            </p>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the Coquette Aesthetic?</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Coquette (French for "flirt") is a hyper-feminine aesthetic that celebrates girlhood, romance, and delicate beauty. Think bows, ribbons, lace, soft pinks, and vintage-inspired pieces. It's the TikTok-viral trend that embraces playful femininity.
          </p>

          <div className="bg-pink-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Elements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-gray-700 space-y-2">
                <li>• Bows and ribbons everywhere</li>
                <li>• Lace and delicate fabrics</li>
                <li>• Soft pink color palette</li>
                <li>• Corset and bustier tops</li>
              </ul>
              <ul className="text-gray-700 space-y-2">
                <li>• Ruffles and frills</li>
                <li>• Satin and silk textures</li>
                <li>• Dainty jewelry</li>
                <li>• Vintage-inspired pieces</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-pink-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Coquette Wardrobe Staples</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Bow-adorned tops and dresses</li>
                <li>• Lace camisoles</li>
                <li>• Mini skirts with bows</li>
                <li>• Satin slip dresses</li>
                <li>• Corset tops</li>
                <li>• Ballet flats with bows</li>
                <li>• Mary Jane heels</li>
                <li>• Pearl jewelry</li>
              </ul>
            </div>

            <div className="bg-white border border-pink-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Color Palette</h3>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { name: "Ballet Pink", hex: "#FFB6C1" },
                  { name: "Blush", hex: "#FFE4E1" },
                  { name: "Cream", hex: "#FFFDD0" },
                  { name: "White", hex: "#FFFFFF" },
                  { name: "Red", hex: "#DC143C" },
                  { name: "Baby Blue", hex: "#89CFF0" },
                  { name: "Lavender", hex: "#E6E6FA" },
                  { name: "Black", hex: "#000000" }
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

      <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Shop the Coquette Aesthetic</h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius helps you find pieces that match the coquette vibe and flatter your body type!
            </p>
            <a href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(45deg, #FF69B4, #FFB6C1)' }}>
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

export default CoquetteAesthetic;
