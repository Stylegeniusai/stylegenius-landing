import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnalysisCTA from "../components/AnalysisCTA";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

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
      <SEO
        title="Bright Spring Colors: Complete Palette Guide 2026"
        description="Discover the perfect bright spring color palette. Learn which vibrant, warm colors flatter bright spring skin tones and build a stunning wardrobe."
        keywords="bright spring colors, bright spring palette, spring color analysis, vibrant warm colors, bright spring celebrity, bright spring wardrobe"
        canonicalUrl="/bright-spring-colors"
        ogImage="/bright-spring-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-11-04",
          modifiedTime: "2026-01-06",
          section: "Color Analysis",
          tags: ["bright spring", "color analysis", "seasonal colors", "warm colors"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Bright Spring Colors", url: "/bright-spring-colors" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
              Color Analysis
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Bright Spring{" "}
              Color Palette
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

          <div className="container mx-auto px-4 max-w-4xl mt-12">
            <AnalysisCTA />
          </div>
        </div>
      </section>

      {/* Compare Seasons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Bright Spring vs. Similar Seasons</h2>
          <div className="space-y-6">
            <Link to="/true-autumn-colors" className="block bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bright Spring vs. True Autumn</h3>
              <p className="text-gray-700">Both are warm, but True Autumn is deeper and more muted. Bright Spring is lighter and more vivid.</p>
              <span className="text-orange-600 font-medium mt-2 inline-block">Read True Autumn Guide →</span>
            </Link>
            <Link to="/light-summer-colors" className="block bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bright Spring vs. Light Summer</h3>
              <p className="text-gray-700">Both are light and bright, but Light Summer is cooler while Bright Spring is warmer.</p>
              <span className="text-orange-600 font-medium mt-2 inline-block">Read Light Summer Guide →</span>
            </Link>
            <Link to="/what-season-am-i" className="block bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Not Sure If You're Bright Spring?</h3>
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
              <p className="text-gray-600 text-sm">Create a versatile wardrobe with your Bright Spring colors.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions About Bright Spring</h2>
          <div className="space-y-4">
            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                How do I know if I'm a Bright Spring?
                <span className="text-gray-400 group-open:rotate-45 transition-transform text-2xl">+</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">Bright Springs typically have warm, clear undertones with high contrast between their skin, hair, and eyes. Your skin may be porcelain or golden, your hair ranges from golden blonde to dark brown with warm highlights, and your eyes are usually bright blue, green, or hazel with a sparkling, clear quality. If vivid, saturated colors make you look more alive while muted or dusty tones wash you out, you're likely a Bright Spring.</p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                What is the difference between Bright Spring and True Spring?
                <span className="text-gray-400 group-open:rotate-45 transition-transform text-2xl">+</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">While both are warm seasons, Bright Spring leans toward Winter with higher contrast and more vivid coloring. True Spring is purely warm and medium in contrast. Bright Springs can wear bolder, more saturated colors like electric blue and hot pink, while True Springs look best in warm but slightly softer hues like peach and warm green.</p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                Can Bright Springs wear black?
                <span className="text-gray-400 group-open:rotate-45 transition-transform text-2xl">+</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">Pure black is generally too harsh for Bright Springs and can create an imbalance with your warm, clear coloring. Instead, opt for light navy or charcoal as dark neutrals. If you want to wear black, keep it away from your face — for example, black pants with a bright coral or turquoise top works well.</p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                What are the best makeup colors for Bright Spring?
                <span className="text-gray-400 group-open:rotate-45 transition-transform text-2xl">+</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">Bright Springs look stunning in warm, vivid makeup shades. For lips, try coral, warm pink, or tangerine. For eyes, golden bronzes, warm greens, and turquoise shades enhance your natural coloring. Blush in peach or warm pink tones works beautifully. Avoid cool-toned mauves, dusty roses, or ashy shades that can make your complexion look dull.</p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                What metals and jewelry suit Bright Spring?
                <span className="text-gray-400 group-open:rotate-45 transition-transform text-2xl">+</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">Gold is the most flattering metal for Bright Springs, especially bright or polished gold rather than antique or matte finishes. Rose gold also works well. For gemstones, look for vibrant options like turquoise, coral, aquamarine, peridot, and citrine. Avoid heavily oxidized or tarnished-looking metals.</p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                What hair colors work best for Bright Spring?
                <span className="text-gray-400 group-open:rotate-45 transition-transform text-2xl">+</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">Bright Springs look best with warm, clear hair tones. Golden blonde, honey highlights, warm auburn, and rich warm brown all complement your coloring. Avoid ashy tones, cool platinum, or dull, muddy browns. If you color your hair, ask your stylist for warm, golden undertones to keep your overall look harmonious.</p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                How do I build a Bright Spring capsule wardrobe?
                <span className="text-gray-400 group-open:rotate-45 transition-transform text-2xl">+</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">Start with warm neutrals like light camel, warm white, and light navy as your base. Add statement pieces in your best vivid colors — coral, turquoise, and hot pink are great options. Aim for 70% neutrals and 30% accent colors. Choose prints that combine your best colors, and ensure all pieces can mix and match for maximum versatility.</p>
            </details>
          </div>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How do I know if I'm a Bright Spring?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bright Springs typically have warm, clear undertones with high contrast between their skin, hair, and eyes. Your skin may be porcelain or golden, your hair ranges from golden blonde to dark brown with warm highlights, and your eyes are usually bright blue, green, or hazel with a sparkling, clear quality. If vivid, saturated colors make you look more alive while muted or dusty tones wash you out, you're likely a Bright Spring."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between Bright Spring and True Spring?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "While both are warm seasons, Bright Spring leans toward Winter with higher contrast and more vivid coloring. True Spring is purely warm and medium in contrast. Bright Springs can wear bolder, more saturated colors like electric blue and hot pink, while True Springs look best in warm but slightly softer hues like peach and warm green."
              }
            },
            {
              "@type": "Question",
              "name": "Can Bright Springs wear black?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pure black is generally too harsh for Bright Springs and can create an imbalance with your warm, clear coloring. Instead, opt for light navy or charcoal as dark neutrals. If you want to wear black, keep it away from your face — for example, black pants with a bright coral or turquoise top works well."
              }
            },
            {
              "@type": "Question",
              "name": "What are the best makeup colors for Bright Spring?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bright Springs look stunning in warm, vivid makeup shades. For lips, try coral, warm pink, or tangerine. For eyes, golden bronzes, warm greens, and turquoise shades enhance your natural coloring. Blush in peach or warm pink tones works beautifully. Avoid cool-toned mauves, dusty roses, or ashy shades that can make your complexion look dull."
              }
            },
            {
              "@type": "Question",
              "name": "What metals and jewelry suit Bright Spring?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Gold is the most flattering metal for Bright Springs, especially bright or polished gold rather than antique or matte finishes. Rose gold also works well. For gemstones, look for vibrant options like turquoise, coral, aquamarine, peridot, and citrine. Avoid heavily oxidized or tarnished-looking metals."
              }
            },
            {
              "@type": "Question",
              "name": "What hair colors work best for Bright Spring?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bright Springs look best with warm, clear hair tones. Golden blonde, honey highlights, warm auburn, and rich warm brown all complement your coloring. Avoid ashy tones, cool platinum, or dull, muddy browns. If you color your hair, ask your stylist for warm, golden undertones to keep your overall look harmonious."
              }
            },
            {
              "@type": "Question",
              "name": "How do I build a Bright Spring capsule wardrobe?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Start with warm neutrals like light camel, warm white, and light navy as your base. Add statement pieces in your best vivid colors — coral, turquoise, and hot pink are great options. Aim for 70% neutrals and 30% accent colors. Choose prints that combine your best colors, and ensure all pieces can mix and match for maximum versatility."
              }
            }
          ]
        }) }} />
      </section>

      <div className="container mx-auto px-4 max-w-4xl">
        <AnalysisCTA />
      </div>
      <Footer />
    </div>
  );
};

export default BrightSpringColors;
