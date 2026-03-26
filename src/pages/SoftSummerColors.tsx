import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnalysisCTA from "../components/AnalysisCTA";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

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
      <SEO
        title="Soft Summer Colors: Complete Palette Guide 2026"
        description="Discover the perfect soft summer color palette. Learn which muted, cool colors flatter soft summer skin tones and how to build a cohesive wardrobe."
        keywords="soft summer colors, soft summer palette, summer color analysis, muted cool colors, soft summer celebrity, soft summer wardrobe"
        canonicalUrl="/soft-summer-colors"
        ogImage="/soft-summer-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-11-06",
          modifiedTime: "2026-01-06",
          section: "Color Analysis",
          tags: ["soft summer", "color analysis", "seasonal colors", "cool colors"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Soft Summer Colors", url: "/soft-summer-colors" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              Color Analysis
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Soft Summer{" "}
              Color Palette
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
            <p className="text-sm text-gray-400 mb-8 mt-6">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>
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
            <p className="text-sm text-gray-400 mb-8 mt-6">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>
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
            <p className="text-sm text-gray-400 mb-8 mt-6">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>
          </div>
        </div>
      </section>

      {/* Mid-Article CTA */}
      <div className="container mx-auto px-4 max-w-4xl py-8">
        <AnalysisCTA />
      </div>

      {/* Compare Seasons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Soft Summer vs. Similar Seasons</h2>
          <div className="space-y-6">
            <Link to="/soft-autumn-colors" className="block bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Soft Summer vs. Soft Autumn</h3>
              <p className="text-gray-700">Both are muted and soft, but Soft Summer is cooler while Soft Autumn is warmer. Soft Summer looks better in silver, Soft Autumn in gold.</p>
              <span className="text-purple-600 font-medium mt-2 inline-block">Read Soft Autumn Guide →</span>
            </Link>
            <Link to="/light-summer-colors" className="block bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Soft Summer vs. Light Summer</h3>
              <p className="text-gray-700">Light Summer is brighter and higher contrast. Soft Summer needs more muted, dusty versions of summer colors.</p>
              <span className="text-purple-600 font-medium mt-2 inline-block">Read Light Summer Guide →</span>
            </Link>
            <Link to="/what-season-am-i" className="block bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Not Sure If You're Soft Summer?</h3>
              <p className="text-gray-700">Take our color season quiz to discover your perfect palette.</p>
              <span className="text-purple-600 font-medium mt-2 inline-block">Find Your Color Season →</span>
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
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">What Colors Suit Me?</h3>
              <p className="text-gray-600 text-sm">Find your perfect color palette based on your skin tone.</p>
            </Link>
            <Link to="/warm-vs-cool-undertones" className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">Warm vs Cool Undertones</h3>
              <p className="text-gray-600 text-sm">Learn how to determine your undertone.</p>
            </Link>
            <Link to="/capsule-wardrobe" className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">Build a Capsule Wardrobe</h3>
              <p className="text-gray-600 text-sm">Create a versatile wardrobe with your Soft Summer colors.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions About Soft Summer Colors</h2>
          <div className="divide-y divide-gray-200">
            {[
              { q: "How do I know if I'm a Soft Summer?", a: "Soft Summers typically have neutral-cool undertones, muted coloring with low contrast between skin, hair, and eyes. Your skin may have a rosy or pinkish quality, your hair is often ash blonde to medium brown, and your eyes are soft blue, gray, green, or hazel. If bright colors overwhelm you and muted tones make you look radiant, you're likely a Soft Summer." },
              { q: "Can Soft Summers wear black?", a: "Jet black is generally too harsh for Soft Summers and creates too much contrast against their naturally muted coloring. Instead, opt for charcoal, dark taupe, or slate blue as your dark neutrals. These provide depth without overwhelming your soft features." },
              { q: "What is the difference between Soft Summer and Soft Autumn?", a: "Both seasons are muted and soft, but the key difference is temperature. Soft Summer leans cool with ashy, blue-based undertones, while Soft Autumn leans warm with golden, earthy undertones. A simple test: if silver jewelry looks better on you, you're likely Soft Summer. If gold looks better, you may be Soft Autumn." },
              { q: "What makeup colors work best for Soft Summer?", a: "Stick to muted, cool-toned makeup. Dusty rose and mauve lipsticks, soft plum or taupe eyeshadows, and cool pink or peach blushes work beautifully. Avoid bright or neon makeup colors, and choose soft brown or gray mascara over jet black for a more harmonious look." },
              { q: "Can Soft Summers wear warm colors at all?", a: "Soft Summers can wear some warm-leaning colors as long as they are muted and softened. For example, a dusty rose (which has some warmth) or a muted sage green works well. The key is to avoid bright, saturated warm tones like orange, bright yellow, or tomato red." },
              { q: "What metals and jewelry suit Soft Summer best?", a: "Silver, white gold, and platinum are the most flattering metals for Soft Summers. Rose gold can also work due to its muted pink tone. Avoid bright yellow gold, which can clash with your cool undertones. For gemstones, look for muted stones like moonstone, rose quartz, amethyst, and aquamarine." },
              { q: "How do I build a Soft Summer capsule wardrobe?", a: "Start with muted neutrals like taupe, soft white, charcoal, and rose beige as your base. Add in your best accent colors like dusty rose, lavender, sage green, and powder blue. Keep all pieces in the same soft, muted tone family so everything mixes and matches effortlessly. Avoid high-contrast combinations." }
            ].map((item, i) => (
              <details key={i} className="group border-b border-gray-200">
                <summary className="flex justify-between items-center cursor-pointer py-4 font-medium text-gray-900 hover:text-gray-600 transition-colors">
                  {item.q}
                  <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl ml-4 flex-shrink-0">+</span>
                </summary>
                <p className="text-gray-700 pb-4 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How do I know if I'm a Soft Summer?", "acceptedAnswer": { "@type": "Answer", "text": "Soft Summers typically have neutral-cool undertones, muted coloring with low contrast between skin, hair, and eyes. Your skin may have a rosy or pinkish quality, your hair is often ash blonde to medium brown, and your eyes are soft blue, gray, green, or hazel. If bright colors overwhelm you and muted tones make you look radiant, you're likely a Soft Summer." }},
          { "@type": "Question", "name": "Can Soft Summers wear black?", "acceptedAnswer": { "@type": "Answer", "text": "Jet black is generally too harsh for Soft Summers and creates too much contrast against their naturally muted coloring. Instead, opt for charcoal, dark taupe, or slate blue as your dark neutrals. These provide depth without overwhelming your soft features." }},
          { "@type": "Question", "name": "What is the difference between Soft Summer and Soft Autumn?", "acceptedAnswer": { "@type": "Answer", "text": "Both seasons are muted and soft, but the key difference is temperature. Soft Summer leans cool with ashy, blue-based undertones, while Soft Autumn leans warm with golden, earthy undertones. A simple test: if silver jewelry looks better on you, you're likely Soft Summer. If gold looks better, you may be Soft Autumn." }},
          { "@type": "Question", "name": "What makeup colors work best for Soft Summer?", "acceptedAnswer": { "@type": "Answer", "text": "Stick to muted, cool-toned makeup. Dusty rose and mauve lipsticks, soft plum or taupe eyeshadows, and cool pink or peach blushes work beautifully. Avoid bright or neon makeup colors, and choose soft brown or gray mascara over jet black for a more harmonious look." }},
          { "@type": "Question", "name": "Can Soft Summers wear warm colors at all?", "acceptedAnswer": { "@type": "Answer", "text": "Soft Summers can wear some warm-leaning colors as long as they are muted and softened. For example, a dusty rose (which has some warmth) or a muted sage green works well. The key is to avoid bright, saturated warm tones like orange, bright yellow, or tomato red." }},
          { "@type": "Question", "name": "What metals and jewelry suit Soft Summer best?", "acceptedAnswer": { "@type": "Answer", "text": "Silver, white gold, and platinum are the most flattering metals for Soft Summers. Rose gold can also work due to its muted pink tone. Avoid bright yellow gold, which can clash with your cool undertones. For gemstones, look for muted stones like moonstone, rose quartz, amethyst, and aquamarine." }},
          { "@type": "Question", "name": "How do I build a Soft Summer capsule wardrobe?", "acceptedAnswer": { "@type": "Answer", "text": "Start with muted neutrals like taupe, soft white, charcoal, and rose beige as your base. Add in your best accent colors like dusty rose, lavender, sage green, and powder blue. Keep all pieces in the same soft, muted tone family so everything mixes and matches effortlessly. Avoid high-contrast combinations." }}
        ]
      })}} />

      <div className="container mx-auto px-4 max-w-4xl">
        <AnalysisCTA />
      </div>
      <Footer />
    </div>
  );
};

export default SoftSummerColors;
