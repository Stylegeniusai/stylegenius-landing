import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnalysisCTA from "../components/AnalysisCTA";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const LightSummerColors = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Light Summer Colors: Complete Palette Guide 2026"
        description="Discover the perfect light summer color palette. Learn which soft, cool colors flatter light summer skin tones and how to build a beautiful wardrobe."
        keywords="light summer colors, light summer palette, summer color analysis, soft cool colors, light summer celebrity, light summer wardrobe"
        canonicalUrl="/light-summer-colors"
        ogImage="/light-summer-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-11-07",
          modifiedTime: "2026-01-06",
          section: "Color Analysis",
          tags: ["light summer", "color analysis", "seasonal colors", "cool colors"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Light Summer Colors", url: "/light-summer-colors" }
        ]}
      />
      <Navigation />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-sky-100 to-rose-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-sky-200 text-sky-800 rounded-full text-sm font-medium mb-6">Color Analysis</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Light Summer{" "}
              Color Palette
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The complete guide to Light Summer colors - soft, delicate, and airy shades for naturally fair, cool-toned beauty.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/light-summer-hero.png`}
              alt="Light Summer color palette guide"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Light Summer?</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Light Summer is one of the three Summer sub-seasons in 12-season color analysis. Light Summers have delicate, fair coloring with cool undertones and low contrast between their features. They look best in soft, light, cool-toned colors that won't overwhelm their natural coloring.
          </p>

          <div className="bg-sky-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Light Summer Characteristics</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Skin Tones</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Fair to light medium</li>
                  <li>• Cool pink undertones</li>
                  <li>• May have light freckles</li>
                  <li>• Burns easily in sun</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Eyes & Hair</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Light blonde to medium ash brown hair</li>
                  <li>• Blue, gray-blue, or light green eyes</li>
                  <li>• Low contrast between features</li>
                  <li>• Soft, muted overall appearance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Best Colors</h3>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-6">
              {[
                { name: "Soft White", hex: "#F5F5F5" },
                { name: "Powder Blue", hex: "#B0E0E6" },
                { name: "Periwinkle", hex: "#CCCCFF" },
                { name: "Lavender", hex: "#E6E6FA" },
                { name: "Soft Pink", hex: "#FFB6C1" },
                { name: "Rose", hex: "#E8ADAA" },
                { name: "Mauve", hex: "#E0B0FF" },
                { name: "Soft Teal", hex: "#6B9B9B" },
                { name: "Dusty Blue", hex: "#6B8BA4" },
                { name: "Slate", hex: "#708090" },
                { name: "Soft Navy", hex: "#4A5568" },
                { name: "Lilac", hex: "#C8A2C8" },
                { name: "Mint", hex: "#98FB98" },
                { name: "Seafoam", hex: "#9FE2BF" },
                { name: "Silver", hex: "#C0C0C0" },
                { name: "Soft Cocoa", hex: "#9E8B8B" }
              ].map((color) => (
                <div key={color.name} className="text-center">
                  <div className="w-full aspect-square rounded-lg mb-1 border border-gray-200 shadow-sm" style={{ backgroundColor: color.hex }} />
                  <span className="text-xs text-gray-600">{color.name}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mb-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Colors to Embrace</h3>
              <ul className="text-gray-700 space-y-2">
                <li><span className="text-green-600 mr-2">✓</span><span className="inline-block w-3 h-3 rounded-full mr-1 align-middle border border-gray-200" style={{ backgroundColor: "#E6D5E6" }} /> Soft, muted pastels</li>
                <li><span className="text-green-600 mr-2">✓</span><span className="inline-block w-3 h-3 rounded-full mr-1 align-middle border border-gray-200" style={{ backgroundColor: "#708090" }} /> Cool-toned neutrals</li>
                <li><span className="text-green-600 mr-2">✓</span><span className="inline-block w-3 h-3 rounded-full mr-1 align-middle border border-gray-200" style={{ backgroundColor: "#E8ADAA" }} /> Dusty rose and mauve</li>
                <li><span className="text-green-600 mr-2">✓</span><span className="inline-block w-3 h-3 rounded-full mr-1 align-middle border border-gray-200" style={{ backgroundColor: "#CCCCFF" }} /> Soft blues and periwinkle</li>
                <li><span className="text-green-600 mr-2">✓</span><span className="inline-block w-3 h-3 rounded-full mr-1 align-middle border border-gray-200" style={{ backgroundColor: "#C8C8D0" }} /> Light grayed colors</li>
                <li><span className="text-green-600 mr-2">✓</span><span className="inline-block w-3 h-3 rounded-full mr-1 align-middle border border-gray-200" style={{ backgroundColor: "#C0C0C0" }} /> Silver metallics</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Colors to Avoid</h3>
              <ul className="text-gray-700 space-y-2">
                <li><span className="text-red-500 mr-2">✕</span><span className="inline-block w-3 h-3 rounded-full mr-1 align-middle border border-gray-200" style={{ backgroundColor: "#000000" }} /> Black and stark white</li>
                <li><span className="text-red-500 mr-2">✕</span><span className="inline-block w-3 h-3 rounded-full mr-1 align-middle border border-gray-200" style={{ backgroundColor: "#FF8C00" }} /> Warm oranges and yellows</li>
                <li><span className="text-red-500 mr-2">✕</span><span className="inline-block w-3 h-3 rounded-full mr-1 align-middle border border-gray-200" style={{ backgroundColor: "#FF0066" }} /> Bold, saturated colors</li>
                <li><span className="text-red-500 mr-2">✕</span><span className="inline-block w-3 h-3 rounded-full mr-1 align-middle border border-gray-200" style={{ backgroundColor: "#8B6914" }} /> Warm earth tones</li>
                <li><span className="text-red-500 mr-2">✕</span><span className="inline-block w-3 h-3 rounded-full mr-1 align-middle border border-gray-200" style={{ backgroundColor: "#FFD700" }} /> Gold jewelry</li>
                <li><span className="text-red-500 mr-2">✕</span><span className="inline-block w-3 h-3 rounded-full mr-1 align-middle border border-gray-200" style={{ backgroundColor: "#39FF14" }} /> Neon and electric shades</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>

          <AnalysisCTA />

          <div className="bg-gray-50 rounded-2xl p-8 mb-12 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Light Summer Celebrities</h3>
            <div className="flex flex-wrap gap-3">
              {["Elle Fanning", "Naomi Watts", "Cate Blanchett", "Kate Middleton", "Emily Blunt", "January Jones", "Ashlee Simpson", "Kristen Bell"].map((name) => (
                <span key={name} className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">{name}</span>
              ))}
            </div>
          </div>

          <div className="bg-rose-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Makeup Tips for Light Summer</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Best Lip Colors</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• <span className="inline-block w-3 h-3 rounded-full mr-1 align-middle border border-gray-200" style={{ backgroundColor: "#E8ADAA" }} /> Soft rose and pink</li>
                  <li>• <span className="inline-block w-3 h-3 rounded-full mr-1 align-middle border border-gray-200" style={{ backgroundColor: "#C87F89" }} /> Mauve and dusty berry</li>
                  <li>• <span className="inline-block w-3 h-3 rounded-full mr-1 align-middle border border-gray-200" style={{ backgroundColor: "#9B6B8D" }} /> Light plum</li>
                  <li>• <span className="inline-block w-3 h-3 rounded-full mr-1 align-middle border border-gray-200" style={{ backgroundColor: "#C8A89E" }} /> Cool nude shades</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Eye Makeup</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• <span className="inline-block w-3 h-3 rounded-full mr-1 align-middle border border-gray-200" style={{ backgroundColor: "#A8A29E" }} /> Soft gray and taupe</li>
                  <li>• <span className="inline-block w-3 h-3 rounded-full mr-1 align-middle border border-gray-200" style={{ backgroundColor: "#E6E6FA" }} /> Lavender and soft purple</li>
                  <li>• <span className="inline-block w-3 h-3 rounded-full mr-1 align-middle border border-gray-200" style={{ backgroundColor: "#E0B0FF" }} /> Dusty rose and mauve</li>
                  <li>• <span className="inline-block w-3 h-3 rounded-full mr-1 align-middle border border-gray-200" style={{ backgroundColor: "#D8D8E8" }} /> Silver shimmer</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions About Light Summer</h2>
            <div className="space-y-4">
              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  How do I know if I'm a Light Summer?
                  <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">Light Summers typically have fair to light skin with cool pink undertones, light blonde to medium ash brown hair, and blue, gray-blue, or light green eyes. The key hallmark is low contrast between features and a soft, cool overall appearance. If you look best in muted pastels rather than bold or warm colors, you may be a Light Summer.</p>
              </details>

              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  What is the difference between Light Summer and Light Spring?
                  <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">Both seasons have light coloring, but the key difference is undertone. Light Summer has cool, pink-based undertones and looks best in cool pastels like powder blue, lavender, and soft rose. Light Spring has warm, golden undertones and is flattered by warm pastels like peach, light coral, and warm cream. If silver jewelry suits you better than gold, you're likely a Light Summer.</p>
              </details>

              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  Can Light Summers wear black?
                  <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">Pure black is generally too harsh for Light Summers and can wash out their delicate coloring. Instead, opt for soft navy, charcoal gray, or slate as dark neutrals. If you must wear black, keep it away from your face — for example, black pants with a soft blue or lavender top work much better than a black top.</p>
              </details>

              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  What are the best neutrals for a Light Summer wardrobe?
                  <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">The best neutrals for Light Summer are soft, cool-toned shades: dove gray, soft white (not stark white), taupe, slate blue, and soft cocoa. These create a gentle foundation for your wardrobe without overpowering your natural coloring. Silver is your best metallic for jewelry and accessories.</p>
              </details>

              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  What hair colors work best for Light Summer?
                  <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">Light Summers look best with cool-toned hair colors that keep the natural softness of their coloring. Ash blonde, light cool brown, and platinum highlights all work beautifully. Avoid warm golden blondes, copper, or warm auburn shades, as these clash with your cool undertones.</p>
              </details>

              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  How do I build a capsule wardrobe as a Light Summer?
                  <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">Start with cool neutrals as your base — soft white, dove gray, and slate. Add core colors like powder blue, dusty rose, and lavender for variety. Use accent pieces in periwinkle, soft teal, or mauve to add interest. Stick to silver accessories and cool-toned shoes. A well-curated Light Summer capsule wardrobe of 30-40 pieces can create dozens of elegant, harmonious outfits.</p>
              </details>

              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  Can Light Summers wear bright colors?
                  <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">Light Summers should generally avoid highly saturated, vivid colors as these can overwhelm their delicate coloring. However, you can wear brighter versions of your best shades — a clearer periwinkle or a slightly brighter rose — as long as they remain cool-toned. The key is to keep colors soft and avoid neon or electric shades entirely.</p>
              </details>
            </div>
          </div>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I know if I'm a Light Summer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Light Summers typically have fair to light skin with cool pink undertones, light blonde to medium ash brown hair, and blue, gray-blue, or light green eyes. The key hallmark is low contrast between features and a soft, cool overall appearance. If you look best in muted pastels rather than bold or warm colors, you may be a Light Summer."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between Light Summer and Light Spring?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Both seasons have light coloring, but the key difference is undertone. Light Summer has cool, pink-based undertones and looks best in cool pastels like powder blue, lavender, and soft rose. Light Spring has warm, golden undertones and is flattered by warm pastels like peach, light coral, and warm cream. If silver jewelry suits you better than gold, you're likely a Light Summer."
                }
              },
              {
                "@type": "Question",
                "name": "Can Light Summers wear black?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pure black is generally too harsh for Light Summers and can wash out their delicate coloring. Instead, opt for soft navy, charcoal gray, or slate as dark neutrals. If you must wear black, keep it away from your face — for example, black pants with a soft blue or lavender top work much better than a black top."
                }
              },
              {
                "@type": "Question",
                "name": "What are the best neutrals for a Light Summer wardrobe?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The best neutrals for Light Summer are soft, cool-toned shades: dove gray, soft white (not stark white), taupe, slate blue, and soft cocoa. These create a gentle foundation for your wardrobe without overpowering your natural coloring. Silver is your best metallic for jewelry and accessories."
                }
              },
              {
                "@type": "Question",
                "name": "What hair colors work best for Light Summer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Light Summers look best with cool-toned hair colors that keep the natural softness of their coloring. Ash blonde, light cool brown, and platinum highlights all work beautifully. Avoid warm golden blondes, copper, or warm auburn shades, as these clash with your cool undertones."
                }
              },
              {
                "@type": "Question",
                "name": "How do I build a capsule wardrobe as a Light Summer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Start with cool neutrals as your base — soft white, dove gray, and slate. Add core colors like powder blue, dusty rose, and lavender for variety. Use accent pieces in periwinkle, soft teal, or mauve to add interest. Stick to silver accessories and cool-toned shoes. A well-curated Light Summer capsule wardrobe of 30-40 pieces can create dozens of elegant, harmonious outfits."
                }
              },
              {
                "@type": "Question",
                "name": "Can Light Summers wear bright colors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Light Summers should generally avoid highly saturated, vivid colors as these can overwhelm their delicate coloring. However, you can wear brighter versions of your best shades — a clearer periwinkle or a slightly brighter rose — as long as they remain cool-toned. The key is to keep colors soft and avoid neon or electric shades entirely."
                }
              }
            ]
          }) }} />
        </div>
      </article>

      {/* Compare Seasons */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Light Summer vs. Similar Seasons</h2>
          <div className="space-y-6">
            <Link to="/soft-summer-colors" className="block bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Light Summer vs. Soft Summer</h3>
              <p className="text-gray-700">Soft Summer is more muted and neutral. Light Summer is brighter with a lighter, airier quality.</p>
              <span className="text-sky-600 font-medium mt-2 inline-block">Read Soft Summer Guide →</span>
            </Link>
            <Link to="/bright-spring-colors" className="block bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Light Summer vs. Light Spring</h3>
              <p className="text-gray-700">Both are light, but Light Summer is cooler while Light Spring is warmer with golden undertones.</p>
              <span className="text-sky-600 font-medium mt-2 inline-block">Read Bright Spring Guide →</span>
            </Link>
            <Link to="/what-season-am-i" className="block bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Not Sure If You're Light Summer?</h3>
              <p className="text-gray-700">Take our color season quiz to discover your perfect palette.</p>
              <span className="text-sky-600 font-medium mt-2 inline-block">Find Your Color Season →</span>
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
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-sky-600">What Colors Suit Me?</h3>
              <p className="text-gray-600 text-sm">Find your perfect color palette based on your skin tone.</p>
            </Link>
            <Link to="/best-colors-for-pale-skin" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-sky-600">Best Colors for Pale Skin</h3>
              <p className="text-gray-600 text-sm">Perfect colors for fair and light skin tones.</p>
            </Link>
            <Link to="/capsule-wardrobe" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-sky-600">Build a Capsule Wardrobe</h3>
              <p className="text-gray-600 text-sm">Create a versatile wardrobe with your Light Summer colors.</p>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl">
        <AnalysisCTA />
      </div>
      <Footer />
    </div>
  );
};

export default LightSummerColors;
