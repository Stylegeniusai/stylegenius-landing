import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import ExtensionCTA from "../components/ExtensionCTA";

const WarmVsCoolUndertones = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Warm vs Cool Undertones: How to Find Yours 2026"
        description="Learn how to determine if you have warm or cool undertones. Our complete guide helps you identify your skin's undertone for better color choices in fashion and makeup."
        keywords="warm vs cool undertones, skin undertone test, how to find undertone, warm undertone, cool undertone, neutral undertone, vein test"
        canonicalUrl="/warm-vs-cool-undertones"
        ogImage="/undertones-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-10-12",
          modifiedTime: "2026-01-06",
          section: "Color Analysis",
          tags: ["undertones", "color analysis", "skin tone", "warm cool neutral"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Warm vs Cool Undertones", url: "/warm-vs-cool-undertones" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Warm vs Cool{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Undertones
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The ultimate guide to finding your skin's undertone - the key to knowing which colors make you glow.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Understanding your undertone is the single most important step in finding colors that flatter you. Your undertone is the subtle hue beneath your skin's surface - it stays the same whether you tan, blush, or get paler in winter.
            </p>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Undertones Matter</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                When you wear colors that match your undertone, your skin looks healthy, your eyes appear brighter, and you look more vibrant overall. The wrong undertone colors can make you look tired, sallow, or washed out - even if the color is technically "flattering" for your body type.
              </p>
            </div>
          </div>

          {/* The Three Undertones */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">The Three Undertones</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border-2 border-orange-200">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full mb-4"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Warm Undertone</h3>
                <p className="text-gray-700 mb-4">Your skin has yellow, golden, or peachy undertones.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Veins appear green</li>
                  <li>• Gold jewelry looks better</li>
                  <li>• You tan easily</li>
                  <li>• Earthy colors suit you</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl p-6 border-2 border-pink-200">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-blue-300 rounded-full mb-4"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Cool Undertone</h3>
                <p className="text-gray-700 mb-4">Your skin has pink, red, or blue undertones.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Veins appear blue/purple</li>
                  <li>• Silver jewelry looks better</li>
                  <li>• You burn before tanning</li>
                  <li>• Jewel tones suit you</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border-2 border-gray-200">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mb-4"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Neutral Undertone</h3>
                <p className="text-gray-700 mb-4">Your skin has a mix of warm and cool undertones.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Veins appear blue-green</li>
                  <li>• Both metals look good</li>
                  <li>• You can wear most colors</li>
                  <li>• Soft, muted colors suit you</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tests to Find Your Undertone */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">5 Tests to Find Your Undertone</h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. The Vein Test</h3>
                <p className="text-gray-700 mb-4">Look at the veins on your wrist in natural daylight:</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-semibold text-green-800">Green veins</p>
                    <p className="text-sm text-green-700">= Warm undertone</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold text-blue-800">Blue/Purple veins</p>
                    <p className="text-sm text-blue-700">= Cool undertone</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800">Blue-green mix</p>
                    <p className="text-sm text-gray-700">= Neutral undertone</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. The Jewelry Test</h3>
                <p className="text-gray-700 mb-4">Hold gold and silver jewelry against your face:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="font-semibold text-yellow-800">Gold looks better</p>
                    <p className="text-sm text-yellow-700">= Warm undertone</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800">Silver looks better</p>
                    <p className="text-sm text-gray-700">= Cool undertone</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. The White Paper Test</h3>
                <p className="text-gray-700 mb-4">Hold white paper next to your face in natural light:</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• If your skin looks yellowish = Warm undertone</li>
                  <li>• If your skin looks pinkish/rosy = Cool undertone</li>
                  <li>• If you can't tell = Neutral undertone</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. The Sun Test</h3>
                <p className="text-gray-700 mb-4">How does your skin react to sun exposure?</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Tan easily, rarely burn = Warm undertone</li>
                  <li>• Burn first, then tan (or just burn) = Cool undertone</li>
                  <li>• Burn slightly, then tan = Neutral undertone</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5. The Color Draping Test</h3>
                <p className="text-gray-700 mb-4">Hold fabrics against your face and see which makes you glow:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="font-semibold text-orange-800">Orange, coral, warm red</p>
                    <p className="text-sm text-orange-700">Better = Warm undertone</p>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="font-semibold text-pink-800">Pink, blue-red, fuchsia</p>
                    <p className="text-sm text-pink-700">Better = Cool undertone</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Best Colors by Undertone */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Best Colors by Undertone</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-orange-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Warm Undertone Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {["Coral", "Peach", "Mustard", "Olive", "Rust", "Terracotta", "Cream", "Warm red", "Gold", "Turquoise"].map((color) => (
                    <span key={color} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cool Undertone Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {["Navy", "Emerald", "Royal purple", "Berry", "True red", "Icy pink", "Pure white", "Charcoal", "Silver", "Burgundy"].map((color) => (
                    <span key={color} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Know Instantly If Colors Suit Your Skin
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius analyzes colors while you shop and shows you if they'll flatter your unique skin tone - no more guessing!
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Skin Tone Match</h4>
                  <p className="text-sm text-gray-600">See instantly if a color flatters your unique undertone</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👗</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Virtual Try-On</h4>
                  <p className="text-sm text-gray-600">Try clothes virtually before buying</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Price Tracking</h4>
                  <p className="text-sm text-gray-600">Save items from any store with price drop alerts</p>
                </div>
              </div>
            </div>

            <ExtensionCTA />
            <p className="text-sm text-gray-500 mt-4">Works on Zara, H&M, ASOS, and 1000+ more stores</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WarmVsCoolUndertones;
