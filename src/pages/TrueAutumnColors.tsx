import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnalysisCTA from "../components/AnalysisCTA";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const TrueAutumnColors = () => {
  const colorPalette = {
    best: [
      { name: "Burnt Orange", hex: "#CC5500" },
      { name: "Rust", hex: "#B7410E" },
      { name: "Olive Green", hex: "#556B2F" },
      { name: "Teal", hex: "#008080" },
      { name: "Mustard", hex: "#FFDB58" },
      { name: "Terracotta", hex: "#E2725B" },
      { name: "Forest Green", hex: "#228B22" },
      { name: "Pumpkin", hex: "#FF7518" },
      { name: "Bronze", hex: "#CD7F32" },
      { name: "Warm Red", hex: "#CD5C5C" },
      { name: "Gold", hex: "#CFB53B" },
      { name: "Chocolate", hex: "#7B3F00" }
    ],
    neutrals: [
      { name: "Cream", hex: "#FFFDD0" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "Warm Brown", hex: "#8B5A2B" },
      { name: "Coffee", hex: "#6F4E37" },
      { name: "Charcoal Brown", hex: "#36454F" }
    ],
    avoid: [
      { name: "Fuchsia", hex: "#FF00FF" },
      { name: "Icy Blue", hex: "#A5F2F3" },
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Cool Pink", hex: "#FFB6C1" },
      { name: "Pure White", hex: "#FFFFFF" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="True Autumn Colors: Complete Palette Guide 2026"
        description="Discover the perfect true autumn color palette. Learn which rich, warm colors flatter true autumn skin tones and how to build a gorgeous wardrobe."
        keywords="true autumn colors, true autumn palette, autumn color analysis, warm rich colors, true autumn celebrity, true autumn wardrobe"
        canonicalUrl="/true-autumn-colors"
        ogImage="/true-autumn-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-11-03",
          modifiedTime: "2026-01-06",
          section: "Color Analysis",
          tags: ["true autumn", "color analysis", "seasonal colors", "warm colors"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "True Autumn Colors", url: "/true-autumn-colors" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
              Color Analysis
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              True Autumn{" "}
              Color Palette
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The complete guide to True Autumn colors - warm, rich, and earthy tones inspired by fall foliage.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/true-autumn-hero.png`}
              alt="True Autumn color palette guide"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* What is True Autumn */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is True Autumn?</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            True Autumn (also called Warm Autumn) is the quintessential autumn season. Your coloring is entirely warm with rich, earthy tones. Think falling leaves, pumpkin patches, and harvest festivals.
          </p>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">True Autumn Characteristics</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Skin:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>Warm golden or bronze undertones</li>
                  <li>Often with freckles</li>
                  <li>Ivory to olive complexion</li>
                  <li>May have peachy tones</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Hair & Eyes:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>Auburn, copper, or warm brown hair</li>
                  <li>Red or golden highlights</li>
                  <li>Warm hazel, brown, or green eyes</li>
                  <li>Eyes often have gold flecks</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">True Autumn Celebrities</h3>
            <div className="flex flex-wrap gap-3">
              {["Julia Roberts", "Julianne Moore", "Marcia Cross", "Amy Adams", "Jessica Chastain", "Lindsay Lohan"].map((name) => (
                <span key={name} className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">{name}</span>
              ))}
            </div>
          </div>

          <AnalysisCTA />
        </div>
      </article>

      {/* Color Palette */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Your True Autumn Colors</h2>

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
            <p className="text-sm text-gray-400 mb-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>
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
            <p className="text-sm text-gray-400 mb-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>
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
            <p className="text-sm text-gray-400 mb-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>
          </div>
        </div>
      </section>

      {/* Compare Seasons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">True Autumn vs. Similar Seasons</h2>
          <div className="space-y-6">
            <Link to="/soft-autumn-colors" className="block bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">True Autumn vs. Soft Autumn</h3>
              <p className="text-gray-700">Soft Autumn is more muted and less saturated. True Autumn can wear richer, more vibrant warm colors.</p>
              <span className="text-orange-600 font-medium mt-2 inline-block">Read Soft Autumn Guide →</span>
            </Link>
            <Link to="/dark-winter-colors" className="block bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">True Autumn vs. Dark Winter</h3>
              <p className="text-gray-700">Dark Winter is cooler and deeper. True Autumn is warmer with golden undertones rather than cool jewel tones.</p>
              <span className="text-orange-600 font-medium mt-2 inline-block">Read Dark Winter Guide →</span>
            </Link>
            <Link to="/what-season-am-i" className="block bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Not Sure If You're True Autumn?</h3>
              <p className="text-gray-700">Take our color season quiz to discover your perfect palette.</p>
              <span className="text-orange-600 font-medium mt-2 inline-block">Find Your Color Season →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Color Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/what-colors-suit-me" className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600">What Colors Suit Me?</h3>
              <p className="text-gray-600 text-sm">Find your perfect color palette based on your skin tone.</p>
            </Link>
            <Link to="/warm-vs-cool-undertones" className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600">Warm vs Cool Undertones</h3>
              <p className="text-gray-600 text-sm">Learn how to determine your undertone.</p>
            </Link>
            <Link to="/capsule-wardrobe" className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600">Build a Capsule Wardrobe</h3>
              <p className="text-gray-600 text-sm">Create a versatile wardrobe with your True Autumn colors.</p>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl">
        <AnalysisCTA />
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions About True Autumn</h2>
          <div className="space-y-4">
            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer text-lg">What makes True Autumn different from Soft Autumn?</summary>
              <p className="text-gray-700 mt-4 leading-relaxed">True Autumn has richer, more saturated warm tones compared to Soft Autumn. While Soft Autumn leans muted and dusty, True Autumn thrives in vibrant earthy colors like burnt orange, terracotta, and forest green. True Autumn's overall coloring is warmer and more intense.</p>
            </details>
            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer text-lg">Can True Autumns wear black?</summary>
              <p className="text-gray-700 mt-4 leading-relaxed">Pure black can be too harsh for True Autumns. Instead, opt for warm dark alternatives like chocolate brown, charcoal brown, or deep olive. If you must wear black, soften it by pairing with warm-toned accessories or wearing it further from your face.</p>
            </details>
            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer text-lg">What metals look best on True Autumn?</summary>
              <p className="text-gray-700 mt-4 leading-relaxed">Gold is the ideal metal for True Autumns. Warm-toned metals like brass, copper, and bronze also complement your coloring beautifully. Avoid silver and platinum, which are cool-toned and can clash with your warm undertones.</p>
            </details>
            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer text-lg">What hair colors suit True Autumn?</summary>
              <p className="text-gray-700 mt-4 leading-relaxed">True Autumns look their best with warm hair tones — auburn, copper, warm chestnut, and golden brown are all excellent choices. Avoid ashy or platinum tones. If you want highlights, choose warm caramel, honey, or copper shades.</p>
            </details>
            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer text-lg">What makeup colors work for True Autumn?</summary>
              <p className="text-gray-700 mt-4 leading-relaxed">Focus on warm-toned makeup: terracotta or peach blush, warm brown eyeshadows, and lip colors in warm red, brick, or warm nude shades. Bronzer looks particularly natural on True Autumns. Avoid cool pinks, mauves, and blue-based reds.</p>
            </details>
            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer text-lg">How do I build a True Autumn capsule wardrobe?</summary>
              <p className="text-gray-700 mt-4 leading-relaxed">Start with warm neutrals as your base — camel, cream, chocolate brown, and olive. Add statement pieces in burnt orange, teal, and rust. Ensure every item works with at least two others. A well-built True Autumn capsule of 30–35 pieces can create over 100 outfits.</p>
            </details>
            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer text-lg">Is True Autumn the same as Warm Autumn?</summary>
              <p className="text-gray-700 mt-4 leading-relaxed">Yes, True Autumn and Warm Autumn refer to the same seasonal color type. Different color analysis systems use different names, but they describe the same warm, rich, and earthy coloring. Both terms indicate that warmth is the dominant characteristic of your palette.</p>
            </details>
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What makes True Autumn different from Soft Autumn?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "True Autumn has richer, more saturated warm tones compared to Soft Autumn. While Soft Autumn leans muted and dusty, True Autumn thrives in vibrant earthy colors like burnt orange, terracotta, and forest green. True Autumn's overall coloring is warmer and more intense."
              }
            },
            {
              "@type": "Question",
              "name": "Can True Autumns wear black?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pure black can be too harsh for True Autumns. Instead, opt for warm dark alternatives like chocolate brown, charcoal brown, or deep olive. If you must wear black, soften it by pairing with warm-toned accessories or wearing it further from your face."
              }
            },
            {
              "@type": "Question",
              "name": "What metals look best on True Autumn?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Gold is the ideal metal for True Autumns. Warm-toned metals like brass, copper, and bronze also complement your coloring beautifully. Avoid silver and platinum, which are cool-toned and can clash with your warm undertones."
              }
            },
            {
              "@type": "Question",
              "name": "What hair colors suit True Autumn?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "True Autumns look their best with warm hair tones — auburn, copper, warm chestnut, and golden brown are all excellent choices. Avoid ashy or platinum tones. If you want highlights, choose warm caramel, honey, or copper shades."
              }
            },
            {
              "@type": "Question",
              "name": "What makeup colors work for True Autumn?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Focus on warm-toned makeup: terracotta or peach blush, warm brown eyeshadows, and lip colors in warm red, brick, or warm nude shades. Bronzer looks particularly natural on True Autumns. Avoid cool pinks, mauves, and blue-based reds."
              }
            },
            {
              "@type": "Question",
              "name": "How do I build a True Autumn capsule wardrobe?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Start with warm neutrals as your base — camel, cream, chocolate brown, and olive. Add statement pieces in burnt orange, teal, and rust. Ensure every item works with at least two others. A well-built True Autumn capsule of 30–35 pieces can create over 100 outfits."
              }
            },
            {
              "@type": "Question",
              "name": "Is True Autumn the same as Warm Autumn?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, True Autumn and Warm Autumn refer to the same seasonal color type. Different color analysis systems use different names, but they describe the same warm, rich, and earthy coloring. Both terms indicate that warmth is the dominant characteristic of your palette."
              }
            }
          ]
        })}} />
      </section>

      <Footer />
    </div>
  );
};

export default TrueAutumnColors;
