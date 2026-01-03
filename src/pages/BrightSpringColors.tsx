import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const BrightSpringColors = () => {
  const colorPalette = {
    best: [
      { name: "Coral", hex: "#FF6F61" },
      { name: "Turquoise", hex: "#40E0D0" },
      { name: "Hot Pink", hex: "#FF69B4" },
      { name: "Electric Blue", hex: "#00BFFF" },
      { name: "Lime Green", hex: "#32CD32" },
      { name: "Bright Yellow", hex: "#FFD700" },
      { name: "Tangerine", hex: "#FF9966" },
      { name: "Violet", hex: "#9370DB" },
      { name: "Aqua", hex: "#00CED1" },
      { name: "Poppy Red", hex: "#E35335" },
      { name: "Periwinkle", hex: "#8B8EE5" },
      { name: "Mint", hex: "#3EB489" }
    ],
    neutrals: [
      { name: "Warm White", hex: "#FFFAF0" },
      { name: "Light Camel", hex: "#E8D4B8" },
      { name: "Light Navy", hex: "#4A5568" },
      { name: "Medium Gray", hex: "#808080" },
      { name: "Warm Brown", hex: "#8B6914" }
    ],
    avoid: [
      { name: "Dusty Colors", hex: "#9E9E9E" },
      { name: "Black", hex: "#000000" },
      { name: "Muted Tones", hex: "#8B7355" },
      { name: "Dark Brown", hex: "#3D2314" },
      { name: "Burgundy", hex: "#722F37" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
              Color Analysis
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Bright Spring{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #FF6F61, #40E0D0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Color Palette
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The complete guide to Bright Spring colors - vivid, warm, and clear hues that make you radiate energy and vitality.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/bright-spring-hero.png`}
              alt="Bright Spring color palette guide"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* What is Bright Spring */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Bright Spring?</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Bright Spring is the most vivid of the Spring seasons. Your coloring is warm, clear, and high-contrast. You can handle bold, saturated colors that would overwhelm other seasons.
          </p>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Bright Spring Characteristics</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Skin:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>Warm, clear undertones</li>
                  <li>Often porcelain or golden</li>
                  <li>High contrast coloring</li>
                  <li>Clear, bright quality</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Hair & Eyes:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>Golden blonde to dark brown</li>
                  <li>Warm highlights</li>
                  <li>Bright blue, green, or hazel eyes</li>
                  <li>Sparkling, clear eyes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Bright Spring Celebrities</h3>
            <div className="flex flex-wrap gap-3">
              {["Emma Stone", "Heidi Klum", "Hayden Panettiere", "Mila Kunis", "Amanda Seyfried", "Isla Fisher"].map((name) => (
                <span key={name} className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Color Palette */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Your Bright Spring Colors</h2>

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
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Shop Your Bright Spring Colors</h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius shows you if colors match your vibrant palette while you browse!
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
              <button className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(45deg, #FF6F61, #40E0D0)' }}>
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

export default BrightSpringColors;
