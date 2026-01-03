import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const SoftSummerColors = () => {
  const colorPalette = {
    best: [
      { name: "Dusty Rose", hex: "#D4A5A5" },
      { name: "Soft Mauve", hex: "#C9A9C9" },
      { name: "Lavender", hex: "#B4A7D6" },
      { name: "Powder Blue", hex: "#B0C4DE" },
      { name: "Sage Green", hex: "#9CAF88" },
      { name: "Soft Teal", hex: "#7BA3A8" },
      { name: "Rose Pink", hex: "#E8B4B8" },
      { name: "Soft Plum", hex: "#9C8AA5" },
      { name: "Muted Blue", hex: "#8BA8B9" },
      { name: "Cocoa", hex: "#8B7D7B" },
      { name: "Soft Burgundy", hex: "#9C6B7C" },
      { name: "Slate Blue", hex: "#6A7B8B" }
    ],
    neutrals: [
      { name: "Soft White", hex: "#F5F5F0" },
      { name: "Light Gray", hex: "#C0C0C0" },
      { name: "Taupe", hex: "#8B8378" },
      { name: "Rose Beige", hex: "#C9B8A8" },
      { name: "Charcoal", hex: "#4A4A4A" }
    ],
    avoid: [
      { name: "Bright Orange", hex: "#FF6B00" },
      { name: "Neon Yellow", hex: "#FFFF00" },
      { name: "Jet Black", hex: "#000000" },
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Hot Pink", hex: "#FF1493" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              Color Analysis
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Soft Summer{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #B4A7D6, #D4A5A5)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Color Palette
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The complete guide to Soft Summer colors - muted, cool, and elegant hues that create a sophisticated, harmonious look.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/soft-summer-hero.png`}
              alt="Soft Summer color palette guide"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* What is Soft Summer */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Soft Summer?</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Soft Summer sits between Summer and Autumn in the 12-season color system. It combines Summer's coolness with a touch of Autumn's warmth, resulting in muted, sophisticated colors with low contrast.
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Soft Summer Characteristics</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Skin:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>Neutral-cool undertones</li>
                  <li>Often rosy or pinkish</li>
                  <li>Muted, soft quality</li>
                  <li>Low contrast with hair</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Hair & Eyes:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>Ash blonde to medium brown</li>
                  <li>Hair has ashy, cool tones</li>
                  <li>Soft blue, gray, or hazel eyes</li>
                  <li>Muted eye colors</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Soft Summer Celebrities</h3>
            <div className="flex flex-wrap gap-3">
              {["Kate Middleton", "Sarah Jessica Parker", "Jennifer Aniston", "Emily Blunt", "Charlize Theron", "Dakota Fanning"].map((name) => (
                <span key={name} className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Color Palette */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Your Soft Summer Colors</h2>

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
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Shop Your Soft Summer Colors</h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius shows you instantly if colors match your Soft Summer palette while you shop!
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
              <button className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(45deg, #B4A7D6, #D4A5A5)' }}>
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

export default SoftSummerColors;
