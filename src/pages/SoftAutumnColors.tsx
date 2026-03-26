import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnalysisCTA from "../components/AnalysisCTA";
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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Soft Autumn{" "}
              Color Palette
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
                  <span className="text-sm text-gray-600 flex items-center justify-center gap-1.5">
                    <span className="inline-block w-3 h-3 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: color.hex }} />
                    {color.name}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mb-8 mt-4">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>
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
                  <span className="text-sm text-gray-600 flex items-center justify-center gap-1.5">
                    <span className="inline-block w-3 h-3 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: color.hex }} />
                    {color.name}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mb-8 mt-4">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>
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
                  <span className="text-sm text-gray-600 flex items-center justify-center gap-1.5">
                    <span className="inline-block w-3 h-3 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: color.hex }} />
                    {color.name}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mb-8 mt-4">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>
          </div>
        </div>
      </section>

      {/* Mid-Article CTA */}
      <div className="container mx-auto px-4 max-w-4xl py-8">
        <AnalysisCTA />
      </div>

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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions About Soft Autumn</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                How do I know if I'm a Soft Autumn or a Soft Summer?
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">The key difference is warmth. Soft Autumn has warm undertones and looks better in gold jewelry, olive greens, and earthy tones. Soft Summer has cool undertones and is flattered by silver jewelry, soft blues, and lavender. If you look better in peach than pink, and gold than silver, you're likely a Soft Autumn.</p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                Can Soft Autumns wear black?
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">Jet black is generally too harsh for Soft Autumns. Instead, opt for charcoal brown, dark olive, or deep taupe as your dark neutral. If you must wear black, keep it away from your face — for example, black trousers with a soft warm top. A dark chocolate brown is the best Soft Autumn alternative to black.</p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                What makeup colors look best on Soft Autumns?
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">Soft Autumns look beautiful in muted, warm makeup shades. For lips, try dusty rose, soft coral, or warm nude tones. For eyes, warm browns, soft olive, muted peach, and taupe eyeshadows work well. Avoid bright or cool-toned makeup. For blush, choose soft peach or warm terracotta rather than pink or berry shades.</p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                What hair colors suit Soft Autumns best?
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">Soft Autumns look best with warm, muted hair colors. Think caramel, honey blonde, warm light brown, or soft auburn. Avoid high-contrast highlights, ashy blonde, or jet black hair. If you color your hair, stay within two shades of your natural color and keep it warm-toned for the most harmonious look.</p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                What metals and jewelry work for Soft Autumn?
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">Gold is the best metal for Soft Autumns, especially matte or brushed finishes rather than high-shine. Rose gold also works beautifully. Avoid bright silver or platinum near your face. For gemstones, warm-toned stones like amber, citrine, smoky quartz, and jade complement the Soft Autumn palette perfectly.</p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                How do I build a capsule wardrobe as a Soft Autumn?
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">Start with your best neutrals — warm beige, taupe, soft brown, and charcoal brown — as wardrobe basics. Add accent pieces in your most flattering colors like sage, dusty rose, soft teal, and terracotta. Aim for low-contrast combinations that flow together. A Soft Autumn capsule wardrobe mixes effortlessly because all the colors share the same muted, warm quality.</p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                Can my color season change over time?
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">Your underlying color season is determined by your natural pigmentation and generally stays the same. However, factors like tanning, hair color changes, or aging can slightly shift which colors look best on you within your seasonal family. A Soft Autumn might lean more toward True Autumn in summer with a tan, or closer to Soft Summer in winter. A professional color analysis considers your natural, unaltered coloring.</p>
            </details>
          </div>
        </div>

        {/* FAQ Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How do I know if I'm a Soft Autumn or a Soft Summer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The key difference is warmth. Soft Autumn has warm undertones and looks better in gold jewelry, olive greens, and earthy tones. Soft Summer has cool undertones and is flattered by silver jewelry, soft blues, and lavender. If you look better in peach than pink, and gold than silver, you're likely a Soft Autumn."
              }
            },
            {
              "@type": "Question",
              "name": "Can Soft Autumns wear black?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Jet black is generally too harsh for Soft Autumns. Instead, opt for charcoal brown, dark olive, or deep taupe as your dark neutral. If you must wear black, keep it away from your face. A dark chocolate brown is the best Soft Autumn alternative to black."
              }
            },
            {
              "@type": "Question",
              "name": "What makeup colors look best on Soft Autumns?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Soft Autumns look beautiful in muted, warm makeup shades. For lips, try dusty rose, soft coral, or warm nude tones. For eyes, warm browns, soft olive, muted peach, and taupe eyeshadows work well. For blush, choose soft peach or warm terracotta rather than pink or berry shades."
              }
            },
            {
              "@type": "Question",
              "name": "What hair colors suit Soft Autumns best?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Soft Autumns look best with warm, muted hair colors like caramel, honey blonde, warm light brown, or soft auburn. Avoid high-contrast highlights, ashy blonde, or jet black hair. Stay within two shades of your natural color and keep it warm-toned."
              }
            },
            {
              "@type": "Question",
              "name": "What metals and jewelry work for Soft Autumn?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Gold is the best metal for Soft Autumns, especially matte or brushed finishes. Rose gold also works beautifully. Avoid bright silver or platinum near your face. For gemstones, warm-toned stones like amber, citrine, smoky quartz, and jade complement the Soft Autumn palette perfectly."
              }
            },
            {
              "@type": "Question",
              "name": "How do I build a capsule wardrobe as a Soft Autumn?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Start with your best neutrals — warm beige, taupe, soft brown, and charcoal brown — as wardrobe basics. Add accent pieces in sage, dusty rose, soft teal, and terracotta. Aim for low-contrast combinations that flow together."
              }
            },
            {
              "@type": "Question",
              "name": "Can my color season change over time?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Your underlying color season is determined by your natural pigmentation and generally stays the same. However, factors like tanning, hair color changes, or aging can slightly shift which colors look best on you within your seasonal family. A professional color analysis considers your natural, unaltered coloring."
              }
            }
          ]
        })}} />
      </section>

      <div className="container mx-auto px-4 max-w-4xl">
        <AnalysisCTA />
      </div>
      <Footer />
    </div>
  );
};

export default SoftAutumnColors;
