import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const SoftAutumnColors = () => {
  const colorPalette = {
    best: [
      { name: "Soft Teal", hex: "#5F9EA0" },
      { name: "Dusty Rose", hex: "#D4A5A5" },
      { name: "Olive Green", hex: "#808000" },
      { name: "Warm Taupe", hex: "#9B8B7A" },
      { name: "Terracotta", hex: "#C67B5C" },
      { name: "Soft Coral", hex: "#E8A798" },
      { name: "Sage", hex: "#9CAF88" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "Soft Periwinkle", hex: "#9A9ACD" },
      { name: "Muted Gold", hex: "#C9A961" },
      { name: "Soft Burgundy", hex: "#8B4558" },
      { name: "Warm Gray", hex: "#9A8B7A" }
    ],
    neutrals: [
      { name: "Soft White", hex: "#FAF0E6" },
      { name: "Warm Beige", hex: "#D4C4B0" },
      { name: "Taupe", hex: "#8B7355" },
      { name: "Soft Brown", hex: "#8B7355" },
      { name: "Charcoal Brown", hex: "#4A3C31" }
    ],
    avoid: [
      { name: "Bright White", hex: "#FFFFFF" },
      { name: "Jet Black", hex: "#000000" },
      { name: "Neon Pink", hex: "#FF0080" },
      { name: "Electric Blue", hex: "#007FFF" },
      { name: "Hot Pink", hex: "#FF69B4" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Soft Autumn Colors: Complete Palette Guide 2026"
        description="Discover the perfect soft autumn color palette. Learn which muted, warm colors flatter soft autumn skin tones and how to build a cohesive wardrobe."
        keywords="soft autumn colors, soft autumn palette, autumn color analysis, muted autumn colors, warm muted colors, soft autumn celebrity, soft autumn wardrobe"
        canonicalUrl="/soft-autumn-colors"
        ogImage="/soft-autumn-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-11-05",
          modifiedTime: "2026-01-06",
          section: "Color Analysis",
          tags: ["soft autumn", "color analysis", "seasonal colors", "warm colors"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Soft Autumn Colors", url: "/soft-autumn-colors" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
              Color Analysis
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Soft Autumn{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #C19A6B, #808000)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Color Palette
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The complete guide to Soft Autumn colors - the muted, warm, and earthy palette that creates a naturally elegant look.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/soft-autumn-hero.png`}
              alt="Soft Autumn color palette guide"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* What is Soft Autumn */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Soft Autumn?</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Soft Autumn is one of the 12 seasonal color types in advanced color analysis. It sits between Autumn and Summer, borrowing the warmth of Autumn with the softness of Summer. If you're a Soft Autumn, your coloring is muted, warm, and medium in depth.
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Soft Autumn Characteristics</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Skin:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>Neutral-warm undertones</li>
                    <li>Often beige, ivory, or light olive</li>
                    <li>May have a "muddy" or muted quality</li>
                    <li>Low to medium contrast with hair</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Hair:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>Medium to dark blonde</li>
                    <li>Light to medium brown</li>
                    <li>Often has ashy or golden tones</li>
                    <li>Muted rather than vibrant</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Eyes:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>Hazel, olive green, or soft brown</li>
                    <li>Grayish-blue or grayish-green</li>
                    <li>Often with a soft, muted quality</li>
                    <li>May have multiple colors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Overall:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>Low to medium contrast</li>
                    <li>Warm but not bright</li>
                    <li>Soft, blended appearance</li>
                    <li>Nothing too stark or vivid</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Celebrity Examples */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Soft Autumn Celebrities</h3>
            <p className="text-gray-700 mb-4">These celebrities are often typed as Soft Autumn:</p>
            <div className="flex flex-wrap gap-3">
              {["Drew Barrymore", "Jennifer Aniston", "Gisele Bündchen", "Jessica Alba", "Sarah Jessica Parker", "Carrie Underwood"].map((name) => (
                <span key={name} className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Color Palette */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Your Soft Autumn Color Palette
          </h2>

          {/* Best Colors */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Best Colors for Soft Autumn</h3>
            <p className="text-gray-600 mb-6">These muted, warm colors will make your skin glow and your eyes sparkle:</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {colorPalette.best.map((color) => (
                <div key={color.name} className="text-center">
                  <div
                    className="w-full aspect-square rounded-xl shadow-md mb-2"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-sm text-gray-600">{color.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Neutrals */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Best Neutrals</h3>
            <p className="text-gray-600 mb-6">Build your wardrobe foundation with these warm, muted neutrals:</p>
            <div className="grid grid-cols-5 gap-4">
              {colorPalette.neutrals.map((color) => (
                <div key={color.name} className="text-center">
                  <div
                    className="w-full aspect-square rounded-xl shadow-md mb-2 border border-gray-200"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-sm text-gray-600">{color.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Colors to Avoid */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Colors to Avoid</h3>
            <p className="text-gray-600 mb-6">These bright, stark, or cool colors can make Soft Autumns look washed out:</p>
            <div className="grid grid-cols-5 gap-4">
              {colorPalette.avoid.map((color) => (
                <div key={color.name} className="text-center">
                  <div
                    className="w-full aspect-square rounded-xl shadow-md mb-2 border border-gray-200 relative"
                    style={{ backgroundColor: color.hex }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl">✕</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600">{color.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Styling Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Soft Autumn Styling Tips</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Do's</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Wear muted, earthy tones close to your face
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Choose warm metals like gold, brass, or rose gold
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Opt for soft, blended makeup looks
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Mix different shades from your palette
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Choose soft white or ivory over bright white
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Don'ts</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Avoid jet black - use charcoal brown instead
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Skip bright, neon, or electric colors
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Don't wear silver jewelry near your face
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Avoid high-contrast outfits
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Stay away from icy, cool colors
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Autumn vs Similar Seasons */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Soft Autumn vs. Similar Seasons</h2>

          <div className="space-y-6">
            <Link to="/soft-summer-colors" className="block bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Soft Autumn vs. Soft Summer</h3>
              <p className="text-gray-700">Both are muted and soft, but Soft Autumn is warmer while Soft Summer is cooler. Soft Autumn looks better in gold, Soft Summer in silver.</p>
              <span className="text-amber-600 font-medium mt-2 inline-block">Read Soft Summer Guide →</span>
            </Link>

            <Link to="/true-autumn-colors" className="block bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Soft Autumn vs. True Autumn</h3>
              <p className="text-gray-700">True Autumn is richer and more saturated. Soft Autumn needs more muted, dusty versions of autumn colors.</p>
              <span className="text-amber-600 font-medium mt-2 inline-block">Read True Autumn Guide →</span>
            </Link>

            <Link to="/what-season-am-i" className="block bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Not Sure If You're Soft Autumn?</h3>
              <p className="text-gray-700">Take our color season quiz to find out if you're a Soft Autumn, True Autumn, or another season entirely.</p>
              <span className="text-amber-600 font-medium mt-2 inline-block">Find Your Color Season →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Color Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/what-colors-suit-me" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600">What Colors Suit Me?</h3>
              <p className="text-gray-600 text-sm">Find your perfect color palette based on your skin tone and undertones.</p>
            </Link>
            <Link to="/warm-vs-cool-undertones" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600">Warm vs Cool Undertones</h3>
              <p className="text-gray-600 text-sm">Learn how to determine your undertone and why it matters for choosing colors.</p>
            </Link>
            <Link to="/capsule-wardrobe" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600">Build a Capsule Wardrobe</h3>
              <p className="text-gray-600 text-sm">Create a versatile wardrobe with your Soft Autumn colors.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Shop Your Soft Autumn Colors Effortlessly
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius instantly shows you if a color matches your Soft Autumn palette while you browse any online store. No more guessing!
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Color Match</h4>
                  <p className="text-sm text-gray-600">See if clothes match your Soft Autumn palette while browsing</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👗</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Virtual Try-On</h4>
                  <p className="text-sm text-gray-600">Try before you buy with our digital fitting room</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Price Tracking</h4>
                  <p className="text-sm text-gray-600">Save to wishlist and get alerts when prices drop</p>
                </div>
              </div>
            </div>

            <a href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn" target="_blank" rel="noopener noreferrer">
              <button
                className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(45deg, #C19A6B, #808000)' }}
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

export default SoftAutumnColors;
