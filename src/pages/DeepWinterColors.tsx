import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnalysisCTA from "../components/AnalysisCTA";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const DeepWinterColors = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Deep Winter Colors: Complete Palette Guide 2026"
        description="Discover the perfect deep winter color palette. Learn which rich, cool colors flatter deep winter skin tones and how to build a striking wardrobe."
        keywords="deep winter colors, deep winter palette, winter color analysis, cool deep colors, deep winter celebrities, deep winter wardrobe"
        canonicalUrl="/deep-winter-colors"
        ogImage="/deep-winter-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-11-08",
          modifiedTime: "2026-01-06",
          section: "Color Analysis",
          tags: ["deep winter", "color analysis", "seasonal colors", "cool colors"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Deep Winter Colors", url: "/deep-winter-colors" }
        ]}
      />
      <Navigation />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">Color Analysis</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Deep Winter{" "}
              Color Palette
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              The complete guide to Deep Winter colors - dramatic, bold, and high-contrast shades for striking cool-toned beauty.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/deep-winter-hero.png`}
              alt="Deep Winter color palette guide"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Deep Winter?</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Deep Winter (also called Dark Winter) is one of the three Winter sub-seasons in 12-season color analysis. Deep Winters have striking coloring with dark features, cool undertones, and high contrast. They look best in bold, saturated colors with cool or neutral-cool bases.
          </p>

          <div className="bg-indigo-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Deep Winter Characteristics</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Skin Tones</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Porcelain to deep ebony</li>
                  <li>• Cool or neutral undertones</li>
                  <li>• May have olive undertones</li>
                  <li>• High contrast with features</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Eyes & Hair</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Dark brown or black hair</li>
                  <li>• Deep brown, black, or dark blue eyes</li>
                  <li>• Dark, intense features</li>
                  <li>• Strong contrast</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Best Colors</h3>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-6">
              {[
                { name: "Black", hex: "#000000" },
                { name: "Charcoal", hex: "#36454F" },
                { name: "Navy", hex: "#000080" },
                { name: "Royal Blue", hex: "#4169E1" },
                { name: "Emerald", hex: "#046307" },
                { name: "Pine", hex: "#01796F" },
                { name: "Burgundy", hex: "#800020" },
                { name: "True Red", hex: "#BF0A30" },
                { name: "Magenta", hex: "#FF0090" },
                { name: "Plum", hex: "#8E4585" },
                { name: "Eggplant", hex: "#614051" },
                { name: "Icy Pink", hex: "#F8E8EE" },
                { name: "Icy Blue", hex: "#E0FFFF" },
                { name: "Bright White", hex: "#FFFFFF" },
                { name: "Silver", hex: "#C0C0C0" },
                { name: "Deep Teal", hex: "#014D4E" }
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
                <li><span className="text-green-600 mr-2">✓</span><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#000000" }} /><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#FFFFFF" }} /> True black and pure white</li>
                <li><span className="text-green-600 mr-2">✓</span><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#046307" }} /><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#4169E1" }} /><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#800020" }} /> Deep, saturated jewel tones</li>
                <li><span className="text-green-600 mr-2">✓</span> Bold, high-contrast combinations</li>
                <li><span className="text-green-600 mr-2">✓</span><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#F8E8EE" }} /><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#E0FFFF" }} /> Icy pastels as accents</li>
                <li><span className="text-green-600 mr-2">✓</span><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#BF0A30" }} /><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#FF0090" }} /> Cool-based reds and pinks</li>
                <li><span className="text-green-600 mr-2">✓</span><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#C0C0C0" }} /> Silver metallics</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Colors to Avoid</h3>
              <ul className="text-gray-700 space-y-2">
                <li><span className="text-red-500 mr-2">✕</span><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#FF8C00" }} /><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#FFD700" }} /> Warm oranges and yellows</li>
                <li><span className="text-red-500 mr-2">✕</span><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#C4A882" }} /><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#B5A89A" }} /> Muted, dusty colors</li>
                <li><span className="text-red-500 mr-2">✕</span><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#8B4513" }} /><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#C19A6B" }} /> Warm browns and camel</li>
                <li><span className="text-red-500 mr-2">✕</span><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#FFD1DC" }} /><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#E6E6FA" }} /> Soft, powdery pastels</li>
                <li><span className="text-red-500 mr-2">✕</span><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#FFD700" }} /> Gold jewelry</li>
                <li><span className="text-red-500 mr-2">✕</span><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#8B7355" }} /><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#556B2F" }} /> Earth tones</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Deep Winter Celebrities</h3>
            <div className="flex flex-wrap gap-3">
              {["Anne Hathaway", "Megan Fox", "Liv Tyler", "Courteney Cox", "Lucy Liu", "Penélope Cruz", "Lupita Nyong'o", "Kerry Washington"].map((name) => (
                <span key={name} className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">{name}</span>
              ))}
            </div>
          </div>

          <AnalysisCTA />

          <div className="bg-purple-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Makeup Tips for Deep Winter</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Best Lip Colors</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• <span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#BF0A30" }} /> True red (blue-based)</li>
                  <li>• <span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#8E4585" }} /><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#614051" }} /> Deep berry and plum</li>
                  <li>• <span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#FF00FF" }} /><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#FF0090" }} /> Fuchsia and magenta</li>
                  <li>• <span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#800020" }} /><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#722F37" }} /> Burgundy and wine</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Eye Makeup</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• <span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#808080" }} /><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#000000" }} /> Smoky grays and blacks</li>
                  <li>• <span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#4B0082" }} /><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#614051" }} /> Deep purple and plum</li>
                  <li>• <span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#000080" }} /><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#0F52BA" }} /> Navy and sapphire</li>
                  <li>• <span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#C0C0C0" }} /><span className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300 align-middle" style={{ backgroundColor: "#E0FFFF" }} /> Silver and icy shimmer</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions About Deep Winter Colors</h2>
            <div className="space-y-4">
              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  How do I know if I'm a Deep Winter?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-3">Deep Winters typically have dark hair (black or deep brown), dark eyes, and cool or neutral-cool undertones. The key indicator is high contrast between your skin, hair, and eyes. You look best in bold, saturated colors rather than muted or warm tones. Silver jewelry flatters you more than gold, and you can wear true black and pure white effortlessly.</p>
              </details>

              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  What is the difference between Deep Winter and Dark Winter?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-3">Deep Winter and Dark Winter are often used interchangeably, but in some color analysis systems, Dark Winter leans slightly more neutral (bridging Winter and Autumn), while Deep Winter is purely cool-toned. Deep Winter's best colors are all cool-based, whereas Dark Winter can sometimes borrow slightly warmer shades like dark olive or warm burgundy.</p>
              </details>

              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  Can Deep Winters wear pastels?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-3">Deep Winters can wear icy pastels — specifically icy pink, icy blue, and icy lavender. These are very light, cool-toned shades with a frosty quality. Avoid warm or soft pastels like peach, butter yellow, or dusty rose, as these will wash out your natural contrast and make you look dull.</p>
              </details>

              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  What metals and jewelry suit Deep Winter best?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-3">Silver, platinum, and white gold are the most flattering metals for Deep Winters. These cool-toned metals complement your natural coloring beautifully. Avoid yellow gold, rose gold, and copper tones. If you prefer a warmer look, opt for gunmetal or oxidized silver instead.</p>
              </details>

              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  What hair colors work for Deep Winters?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-3">Deep Winters look stunning with their natural dark hair. If you want to color your hair, stick with cool-toned shades: blue-black, espresso brown, deep burgundy, or cool dark chocolate. Avoid warm highlights like caramel, honey, or golden brown, as these clash with your cool undertones.</p>
              </details>

              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  How do I build a Deep Winter capsule wardrobe?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-3">Start with a base of black, charcoal, and navy for core pieces like trousers, blazers, and coats. Add jewel-tone blouses and knitwear in emerald, burgundy, royal blue, and plum. Use icy pastels and bright white for lighter accents. Finish with silver accessories. This creates a cohesive wardrobe where everything mixes and matches effortlessly.</p>
              </details>

              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  Can Deep Winters wear brown or beige?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-3">Warm browns, beige, and camel are generally not flattering for Deep Winters as they are warm-toned earth colors. However, you can wear very cool-toned dark browns like espresso or cocoa if they lean more toward gray-brown (taupe). For neutrals, stick to black, charcoal, navy, and cool gray instead.</p>
              </details>
            </div>
          </div>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I know if I'm a Deep Winter?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Deep Winters typically have dark hair (black or deep brown), dark eyes, and cool or neutral-cool undertones. The key indicator is high contrast between your skin, hair, and eyes. You look best in bold, saturated colors rather than muted or warm tones. Silver jewelry flatters you more than gold, and you can wear true black and pure white effortlessly."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between Deep Winter and Dark Winter?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Deep Winter and Dark Winter are often used interchangeably, but in some color analysis systems, Dark Winter leans slightly more neutral (bridging Winter and Autumn), while Deep Winter is purely cool-toned. Deep Winter's best colors are all cool-based, whereas Dark Winter can sometimes borrow slightly warmer shades like dark olive or warm burgundy."
                }
              },
              {
                "@type": "Question",
                "name": "Can Deep Winters wear pastels?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Deep Winters can wear icy pastels — specifically icy pink, icy blue, and icy lavender. These are very light, cool-toned shades with a frosty quality. Avoid warm or soft pastels like peach, butter yellow, or dusty rose, as these will wash out your natural contrast and make you look dull."
                }
              },
              {
                "@type": "Question",
                "name": "What metals and jewelry suit Deep Winter best?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Silver, platinum, and white gold are the most flattering metals for Deep Winters. These cool-toned metals complement your natural coloring beautifully. Avoid yellow gold, rose gold, and copper tones. If you prefer a warmer look, opt for gunmetal or oxidized silver instead."
                }
              },
              {
                "@type": "Question",
                "name": "What hair colors work for Deep Winters?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Deep Winters look stunning with their natural dark hair. If you want to color your hair, stick with cool-toned shades: blue-black, espresso brown, deep burgundy, or cool dark chocolate. Avoid warm highlights like caramel, honey, or golden brown, as these clash with your cool undertones."
                }
              },
              {
                "@type": "Question",
                "name": "How do I build a Deep Winter capsule wardrobe?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Start with a base of black, charcoal, and navy for core pieces like trousers, blazers, and coats. Add jewel-tone blouses and knitwear in emerald, burgundy, royal blue, and plum. Use icy pastels and bright white for lighter accents. Finish with silver accessories. This creates a cohesive wardrobe where everything mixes and matches effortlessly."
                }
              },
              {
                "@type": "Question",
                "name": "Can Deep Winters wear brown or beige?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Warm browns, beige, and camel are generally not flattering for Deep Winters as they are warm-toned earth colors. However, you can wear very cool-toned dark browns like espresso or cocoa if they lean more toward gray-brown (taupe). For neutrals, stick to black, charcoal, navy, and cool gray instead."
                }
              }
            ]
          })}} />
        </div>
      </article>

      {/* Compare Seasons */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Deep Winter vs. Similar Seasons</h2>
          <div className="space-y-6">
            <Link to="/dark-winter-colors" className="block bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Winter vs. Dark Winter</h3>
              <p className="text-gray-700">Both are deep and dramatic. Dark Winter has more neutral undertones while Deep Winter is purely cool-toned.</p>
              <span className="text-indigo-600 font-medium mt-2 inline-block">Read Dark Winter Guide →</span>
            </Link>
            <Link to="/soft-summer-colors" className="block bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Winter vs. Soft Summer</h3>
              <p className="text-gray-700">Both are cool-toned, but Soft Summer is muted while Deep Winter is bold and saturated.</p>
              <span className="text-indigo-600 font-medium mt-2 inline-block">Read Soft Summer Guide →</span>
            </Link>
            <Link to="/what-season-am-i" className="block bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Not Sure If You're Deep Winter?</h3>
              <p className="text-gray-700">Take our color season quiz to discover your perfect palette.</p>
              <span className="text-indigo-600 font-medium mt-2 inline-block">Find Your Color Season →</span>
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
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600">What Colors Suit Me?</h3>
              <p className="text-gray-600 text-sm">Find your perfect color palette based on your skin tone.</p>
            </Link>
            <Link to="/warm-vs-cool-undertones" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600">Warm vs Cool Undertones</h3>
              <p className="text-gray-600 text-sm">Learn how to determine your undertone.</p>
            </Link>
            <Link to="/capsule-wardrobe" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600">Build a Capsule Wardrobe</h3>
              <p className="text-gray-600 text-sm">Create a versatile wardrobe with your Deep Winter colors.</p>
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

export default DeepWinterColors;
