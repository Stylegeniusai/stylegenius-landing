import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import ExtensionCTA from "../components/ExtensionCTA";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const DarkWinterColors = () => {
  const colorPalette = {
    best: [
      { name: "True Red", hex: "#C41E3A" },
      { name: "Burgundy", hex: "#722F37" },
      { name: "Emerald", hex: "#046307" },
      { name: "Forest Green", hex: "#228B22" },
      { name: "Royal Purple", hex: "#7851A9" },
      { name: "Deep Plum", hex: "#673147" },
      { name: "Navy Blue", hex: "#000080" },
      { name: "Teal", hex: "#008080" },
      { name: "Raspberry", hex: "#872657" },
      { name: "Aubergine", hex: "#614051" },
      { name: "Pine Green", hex: "#01796F" },
      { name: "Deep Rose", hex: "#C21E56" }
    ],
    neutrals: [
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Black", hex: "#000000" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Cool Gray", hex: "#808080" },
      { name: "Dark Brown", hex: "#3D2314" }
    ],
    avoid: [
      { name: "Orange", hex: "#FFA500" },
      { name: "Mustard", hex: "#FFDB58" },
      { name: "Warm Beige", hex: "#D4B896" },
      { name: "Coral", hex: "#FF7F50" },
      { name: "Peach", hex: "#FFCBA4" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Dark Winter Colors: Complete Palette Guide 2026"
        description="Discover the perfect dark winter color palette. Learn which bold, cool colors flatter dark winter skin tones and how to build a stunning wardrobe."
        keywords="dark winter colors, dark winter palette, winter color analysis, cool deep colors, dark winter celebrities, dark winter wardrobe"
        canonicalUrl="/dark-winter-colors"
        ogImage="/dark-winter-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-11-08",
          modifiedTime: "2026-01-06",
          section: "Color Analysis",
          tags: ["dark winter", "color analysis", "seasonal colors", "cool colors"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Dark Winter Colors", url: "/dark-winter-colors" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
              Color Analysis
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Dark Winter{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #C41E3A, #7851A9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Color Palette
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              The complete guide to Dark Winter colors - rich, deep, and dramatic hues for high-contrast, cool-neutral coloring.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/dark-winter-hero.png`}
              alt="Dark Winter color palette guide"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* What is Dark Winter */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Dark Winter?</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Dark Winter is one of the 12 seasonal color types, sitting between Winter and Autumn. It combines the coolness of Winter with a touch of Autumn's warmth. If you're a Dark Winter, your coloring is deep, rich, and high-contrast with cool-to-neutral undertones.
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dark Winter Characteristics</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Skin:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>Cool or neutral-cool undertones</li>
                    <li>Can range from fair to deep</li>
                    <li>Often olive, beige, or porcelain</li>
                    <li>High contrast with hair and eyes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Hair:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>Dark brown to black</li>
                    <li>May have cool or neutral tones</li>
                    <li>High contrast with skin</li>
                    <li>Can be deep auburn/burgundy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Eyes:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>Dark brown, black, or deep hazel</li>
                    <li>Can be striking green or blue</li>
                    <li>Often intense and dramatic</li>
                    <li>High contrast with skin</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Overall:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>High contrast appearance</li>
                    <li>Dramatic and striking</li>
                    <li>Cool-leaning but not icy</li>
                    <li>Deep, rich coloring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Celebrity Examples */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Dark Winter Celebrities</h3>
            <p className="text-gray-700 mb-4">These celebrities are often typed as Dark Winter:</p>
            <div className="flex flex-wrap gap-3">
              {["Penélope Cruz", "Megan Fox", "Krysten Ritter", "Liv Tyler", "Dita Von Teese", "Eva Green", "Kim Kardashian"].map((name) => (
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
            Your Dark Winter Color Palette
          </h2>

          {/* Best Colors */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Best Colors for Dark Winter</h3>
            <p className="text-gray-600 mb-6">These rich, deep colors will enhance your dramatic coloring:</p>
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
            <p className="text-gray-600 mb-6">Dark Winters can rock stark contrasts - black and white are your friends:</p>
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
            <p className="text-gray-600 mb-6">These warm, muted colors can make Dark Winters look sallow:</p>
            <div className="grid grid-cols-5 gap-4">
              {colorPalette.avoid.map((color) => (
                <div key={color.name} className="text-center">
                  <div
                    className="w-full aspect-square rounded-xl shadow-md mb-2 border border-gray-200 relative"
                    style={{ backgroundColor: color.hex }}
                  >
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

      {/* Styling Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Dark Winter Styling Tips</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Do's</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Embrace high contrast - black and white looks amazing on you
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Wear jewel tones and deep, saturated colors
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Silver, platinum, and white gold jewelry
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Bold, dramatic makeup with defined lips
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Choose pure white over off-white
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Don'ts</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Avoid warm, earthy tones like mustard and orange
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Skip muted, dusty colors
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Don't wear gold jewelry near your face
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Avoid light, pastel colors
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Stay away from warm beiges and caramels
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Winter vs Similar Seasons */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Dark Winter vs. Similar Seasons</h2>

          <div className="space-y-6">
            <Link to="/deep-winter-colors" className="block bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dark Winter vs. Deep Winter</h3>
              <p className="text-gray-700">Deep Winter is similar but even more dramatic. Both can wear bold, high-contrast colors.</p>
              <span className="text-purple-600 font-medium mt-2 inline-block">Read Deep Winter Guide →</span>
            </Link>

            <Link to="/true-autumn-colors" className="block bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dark Winter vs. Dark Autumn</h3>
              <p className="text-gray-700">Both are deep, but Dark Autumn is warmer. Dark Winter looks better in cool-based jewel tones, Dark Autumn in warm earth tones.</p>
              <span className="text-purple-600 font-medium mt-2 inline-block">Read True Autumn Guide →</span>
            </Link>

            <Link to="/what-season-am-i" className="block bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Not Sure If You're Dark Winter?</h3>
              <p className="text-gray-700">Take our color season quiz to discover your perfect palette.</p>
              <span className="text-purple-600 font-medium mt-2 inline-block">Find Your Color Season →</span>
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
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">What Colors Suit Me?</h3>
              <p className="text-gray-600 text-sm">Find your perfect color palette based on your skin tone.</p>
            </Link>
            <Link to="/warm-vs-cool-undertones" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">Warm vs Cool Undertones</h3>
              <p className="text-gray-600 text-sm">Learn how to determine your undertone.</p>
            </Link>
            <Link to="/capsule-wardrobe" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">Build a Capsule Wardrobe</h3>
              <p className="text-gray-600 text-sm">Create a versatile wardrobe with your Dark Winter colors.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Shop Your Dark Winter Colors Effortlessly
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              StyleGenius shows you instantly if a color matches your Dark Winter palette while you browse any online store!
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Color Match</h4>
                  <p className="text-sm text-gray-600">Instantly see if colors suit your Dark Winter palette</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👗</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Virtual Try-On</h4>
                  <p className="text-sm text-gray-600">Try clothes virtually and share with friends</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Price Tracking</h4>
                  <p className="text-sm text-gray-600">Save to wishlist and track price drops</p>
                </div>
              </div>
            </div>

            <ExtensionCTA />
            <p className="text-sm text-gray-300 mt-4">Works on Zara, H&M, ASOS, and 1000+ more stores</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DarkWinterColors;
