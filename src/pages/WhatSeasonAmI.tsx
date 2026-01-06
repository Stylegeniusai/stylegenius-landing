import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const WhatSeasonAmI = () => {
  const seasons = [
    {
      name: "Spring",
      subtitle: "Light Spring, True Spring, Bright Spring",
      description: "Spring types have warm undertones with a light, clear, and bright appearance. Your coloring is fresh and vibrant like spring flowers.",
      characteristics: [
        "Warm golden or peachy undertones",
        "Light to medium skin that may freckle",
        "Hair ranges from golden blonde to light brown with warm highlights",
        "Eyes are often blue, green, or light hazel with golden flecks"
      ],
      bestColors: ["Coral", "Peach", "Warm pink", "Golden yellow", "Turquoise", "Warm green", "Ivory"],
      avoidColors: ["Black", "Dark navy", "Burgundy", "Cool gray"],
      celebrities: "Taylor Swift, Nicole Kidman, Emma Stone"
    },
    {
      name: "Summer",
      subtitle: "Light Summer, True Summer, Soft Summer",
      description: "Summer types have cool undertones with a soft, muted appearance. Your coloring is delicate and harmonious like a misty summer morning.",
      characteristics: [
        "Cool pink or rosy undertones",
        "Skin can range from fair to medium with a soft appearance",
        "Hair is often ash blonde, ash brown, or soft brown without warm highlights",
        "Eyes are typically soft blue, gray, green, or hazel"
      ],
      bestColors: ["Dusty rose", "Soft blue", "Lavender", "Mauve", "Sage green", "Powder pink", "Soft white"],
      avoidColors: ["Orange", "Bright yellow", "Warm brown", "Black"],
      celebrities: "Kate Middleton, Jennifer Aniston, Cate Blanchett"
    },
    {
      name: "Autumn",
      subtitle: "Soft Autumn, True Autumn, Dark Autumn",
      description: "Autumn types have warm undertones with a rich, earthy appearance. Your coloring is warm and grounded like fall foliage.",
      characteristics: [
        "Warm golden, olive, or bronze undertones",
        "Skin may have a golden glow or be warm ivory",
        "Hair is often auburn, chestnut, golden brown, or copper",
        "Eyes are commonly brown, hazel, green, or warm blue"
      ],
      bestColors: ["Burnt orange", "Mustard", "Olive green", "Rust", "Chocolate brown", "Teal", "Warm red"],
      avoidColors: ["Bright pink", "Cool purple", "Icy blue", "Silver"],
      celebrities: "Julia Roberts, Jessica Alba, Amy Adams"
    },
    {
      name: "Winter",
      subtitle: "Dark Winter, True Winter, Bright Winter",
      description: "Winter types have cool undertones with high contrast and a clear, vivid appearance. Your coloring is striking and dramatic like a winter landscape.",
      characteristics: [
        "Cool blue, pink, or olive undertones",
        "Skin can range from very fair to very deep with cool undertones",
        "Hair is often dark brown, black, or platinum (high contrast with skin)",
        "Eyes are typically dark brown, black, or striking blue/green"
      ],
      bestColors: ["True red", "Emerald", "Royal blue", "Hot pink", "Pure white", "Black", "Icy purple"],
      avoidColors: ["Orange", "Muted earth tones", "Warm beige", "Golden yellow"],
      celebrities: "Lupita Nyong'o, Megan Fox, Anne Hathaway"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="What Season Am I? Complete Color Analysis Guide 2026"
        description="Discover your seasonal color palette with our comprehensive guide. Learn if you're Spring, Summer, Autumn, or Winter and find the colors that make you glow."
        keywords="what season am i, color analysis, seasonal color analysis, spring summer autumn winter colors, skin undertone, color palette, personal color analysis"
        canonicalUrl="/what-season-am-i"
        ogImage="/what-season-am-i-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-10-15",
          modifiedTime: "2026-01-06",
          section: "Color Analysis",
          tags: ["color analysis", "seasonal colors", "skin undertone", "personal styling"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "What Season Am I?", url: "/what-season-am-i" }
        ]}
        faq={[
          { question: "What are the 4 color seasons?", answer: "The 4 color seasons are Spring, Summer, Autumn, and Winter. Each season is determined by your skin's undertone (warm or cool) and your overall contrast level (light or deep)." },
          { question: "How do I find my color season?", answer: "Look at your vein color (blue/purple = cool, green = warm), test gold vs silver jewelry, and assess your natural contrast level between hair, skin, and eyes." },
          { question: "What colors suit warm undertones?", answer: "Warm undertones (Spring and Autumn) look best in earth tones, warm reds, oranges, yellows, olive greens, and gold jewelry." },
          { question: "What colors suit cool undertones?", answer: "Cool undertones (Summer and Winter) look best in blues, purples, pinks, cool reds, emerald green, and silver jewelry." }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              What Season{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Am I?
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Discover your seasonal color palette and unlock the colors that make you glow. The complete guide to Spring, Summer, Autumn, and Winter color analysis.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/what-season-hero.png`}
              alt="Seasonal color analysis guide"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              "What season am I?" is one of the most popular questions in the world of personal styling. Seasonal color analysis is a method that categorizes your natural coloring into one of four seasons - Spring, Summer, Autumn, or Winter - to help you find the colors that enhance your natural beauty.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              This system has been used by fashion experts and image consultants for decades, and thanks to TikTok and social media, it's now more popular than ever. With over 2 million monthly searches, finding your color season has become essential for anyone who wants to look their best.
            </p>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Does Your Season Matter?</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                When you wear colors from your season, magical things happen: your skin looks clearer, your eyes appear brighter, and you look healthier and more vibrant. Wearing the wrong colors can make you look tired, washed out, or older than you are. Knowing your season transforms your shopping experience forever.
              </p>
            </div>
          </div>

          {/* How to Find Your Season */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Find Your Color Season</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 1: Determine Your Undertone</h3>
                <p className="text-gray-600 mb-4">
                  Look at the veins on your wrist in natural light:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Blue/Purple veins:</strong> Cool undertone (Summer or Winter)</li>
                  <li><strong>Green/Olive veins:</strong> Warm undertone (Spring or Autumn)</li>
                  <li><strong>Mix of both:</strong> You might be a "soft" season</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 2: Assess Your Contrast Level</h3>
                <p className="text-gray-600 mb-4">
                  Look at the contrast between your hair, skin, and eyes:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>High contrast:</strong> Winter or Bright Spring</li>
                  <li><strong>Medium contrast:</strong> True seasons</li>
                  <li><strong>Low contrast:</strong> Soft or Light seasons</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Test: Gold vs Silver</h3>
              <p className="text-gray-700 leading-relaxed">
                Hold gold and silver jewelry against your face. If <strong>gold</strong> makes you glow, you're likely a warm season (Spring or Autumn). If <strong>silver</strong> is more flattering, you're probably a cool season (Summer or Winter). If both work, you might be a neutral sub-season.
              </p>
            </div>
          </section>
        </div>
      </article>

      {/* The Four Seasons */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            The Four Color Seasons Explained
          </h2>

          <div className="space-y-12">
            {seasons.map((season) => (
              <div key={season.name} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className={`inline-block px-4 py-2 rounded-full text-white font-semibold mb-4 ${
                      season.name === 'Spring' ? 'bg-gradient-to-r from-yellow-400 to-orange-400' :
                      season.name === 'Summer' ? 'bg-gradient-to-r from-pink-400 to-purple-400' :
                      season.name === 'Autumn' ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                      'bg-gradient-to-r from-blue-500 to-purple-600'
                    }`}>
                      {season.name}
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{season.subtitle}</p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">{season.description}</p>

                    <h4 className="font-semibold text-gray-900 mb-3">Characteristics:</h4>
                    <ul className="space-y-2 mb-6">
                      {season.characteristics.map((char, i) => (
                        <li key={i} className="text-gray-600 flex items-start">
                          <span className="text-pink-500 mr-2">•</span>
                          {char}
                        </li>
                      ))}
                    </ul>

                    <p className="text-sm text-gray-500">
                      <strong>Celebrity examples:</strong> {season.celebrities}
                    </p>
                  </div>

                  <div>
                    <div className="bg-green-50 rounded-xl p-6 mb-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Best Colors for {season.name}:</h4>
                      <div className="flex flex-wrap gap-2">
                        {season.bestColors.map((color, i) => (
                          <span key={i} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-green-200">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-red-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Colors to Avoid:</h4>
                      <div className="flex flex-wrap gap-2">
                        {season.avoidColors.map((color, i) => (
                          <span key={i} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-red-200">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 Season System */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The 12-Season System</h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            For more precision, each season is divided into three sub-types based on depth, warmth, and clarity:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">Spring</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Light Spring</li>
                <li>True Spring</li>
                <li>Bright Spring</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-pink-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">Summer</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Light Summer</li>
                <li>True Summer</li>
                <li>Soft Summer</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">Autumn</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Soft Autumn</li>
                <li>True Autumn</li>
                <li>Dark Autumn</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">Winter</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Dark Winter</li>
                <li>True Winter</li>
                <li>Bright Winter</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              See Your Best Colors While You Shop
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Stop guessing if colors suit you. StyleGenius analyzes colors in real-time while you browse your favorite stores and tells you instantly if they match your skin tone.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How StyleGenius Helps You Shop Smarter</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Skin Tone Match</h4>
                  <p className="text-sm text-gray-600">Instantly see if a color flatters your unique skin tone while browsing any online store</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👗</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Virtual Try-On</h4>
                  <p className="text-sm text-gray-600">Try clothes on virtually before buying - like having a fitting room in your browser</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Universal Wishlist</h4>
                  <p className="text-sm text-gray-600">Save items from ANY store in one place and get alerts when prices drop</p>
                </div>
              </div>
            </div>

            <a href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn" target="_blank" rel="noopener noreferrer">
              <button
                className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }}
              >
                Add to Chrome - It's Free
              </button>
            </a>
            <p className="text-sm text-gray-500 mt-4">Works on all your favorite shopping sites</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatSeasonAmI;
