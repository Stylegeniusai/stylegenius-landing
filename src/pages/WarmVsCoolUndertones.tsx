import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnalysisCTA from "../components/AnalysisCTA";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const warmColorHex: Record<string, string> = {
  "Coral": "#FF7F50",
  "Peach": "#FFDAB9",
  "Mustard": "#FFDB58",
  "Olive": "#808000",
  "Rust": "#B7410E",
  "Terracotta": "#E2725B",
  "Cream": "#FFFDD0",
  "Warm red": "#CC3333",
  "Gold": "#FFD700",
  "Turquoise": "#40E0D0",
};

const coolColorHex: Record<string, string> = {
  "Navy": "#000080",
  "Emerald": "#50C878",
  "Royal purple": "#7851A9",
  "Berry": "#8E4585",
  "True red": "#BF1B1B",
  "Icy pink": "#F8C8DC",
  "Pure white": "#FFFFFF",
  "Charcoal": "#36454F",
  "Silver": "#C0C0C0",
  "Burgundy": "#800020",
};

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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Warm vs Cool{" "}
              Undertones
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

          <AnalysisCTA />

          {/* Best Colors by Undertone */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Best Colors by Undertone</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-orange-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Warm Undertone Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {["Coral", "Peach", "Mustard", "Olive", "Rust", "Terracotta", "Cream", "Warm red", "Gold", "Turquoise"].map((color) => (
                    <span key={color} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 inline-flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 rounded-full inline-block flex-shrink-0 border border-gray-200" style={{ backgroundColor: warmColorHex[color] }}></span>
                      {color}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-400 mt-4">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cool Undertone Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {["Navy", "Emerald", "Royal purple", "Berry", "True red", "Icy pink", "Pure white", "Charcoal", "Silver", "Burgundy"].map((color) => (
                    <span key={color} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 inline-flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 rounded-full inline-block flex-shrink-0 border border-gray-200" style={{ backgroundColor: coolColorHex[color] }}></span>
                      {color}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-400 mt-4">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>
              </div>
            </div>
          </section>
          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  Can your undertone change over time?
                  <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">No, your undertone stays the same throughout your life. While your surface skin color can change due to tanning, aging, or skin conditions, the underlying undertone — warm, cool, or neutral — remains constant. This is because undertone is determined by the amount of melanin, hemoglobin, and carotene beneath the skin's surface.</p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  What if I get mixed results from the undertone tests?
                  <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">If you get mixed results, you likely have a neutral undertone. Neutral undertones have characteristics of both warm and cool, which is why the tests can seem contradictory. The good news is that neutral undertones can wear a wider range of colors from both warm and cool palettes. You can also try a <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">personalized color analysis</Link> for a more precise answer.</p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  Is undertone the same as skin tone?
                  <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">No, skin tone and undertone are different. Skin tone (also called surface color) refers to how light or dark your skin is — fair, medium, or deep. Undertone is the subtle hue beneath the surface — warm, cool, or neutral. People of any skin tone can have any undertone. For example, someone with deep skin can have cool undertones, and someone with fair skin can have warm undertones.</p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  How do undertones affect makeup choices?
                  <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">Undertones are crucial for choosing the right foundation, concealer, lipstick, and blush shades. Warm undertones look best in peach, coral, and warm-toned foundations with yellow bases. Cool undertones suit pink-based foundations, berry lips, and rose blush. Wearing makeup that matches your undertone creates a seamless, natural look, while the wrong undertone can make makeup appear ashy or orange.</p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  What hair colors suit warm vs cool undertones?
                  <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">Warm undertones are flattered by golden blonde, caramel, copper, auburn, and warm brown shades. Cool undertones look stunning with ash blonde, platinum, cool brown, burgundy, and blue-black hair colors. Neutral undertones have the most flexibility and can pull off shades from both sides, such as chocolate brown, strawberry blonde, or sandy tones.</p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  Can I wear colors outside my undertone palette?
                  <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">Absolutely! Undertone guidelines help you find your most flattering shades, but fashion has no strict rules. You can wear any color you love — the trick is choosing the right shade within that color family. For example, if you're cool-toned and love red, choose a blue-based red (like cherry) rather than an orange-based red (like tomato). Keeping "off" colors away from your face (in pants, skirts, or accessories) also helps.</p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  What's the most accurate way to determine my undertone?
                  <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">Professional color draping (holding fabric swatches near your face) is the gold standard for determining undertones. However, combining multiple at-home tests — the vein test, jewelry test, and white paper test — gives a reliable result for most people. For a personalized approach using technology, you can try an <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">AI-powered color analysis</Link> that analyzes your unique features.</p>
              </details>
            </div>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Can your undertone change over time?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, your undertone stays the same throughout your life. While your surface skin color can change due to tanning, aging, or skin conditions, the underlying undertone — warm, cool, or neutral — remains constant. This is because undertone is determined by the amount of melanin, hemoglobin, and carotene beneath the skin's surface."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What if I get mixed results from the undertone tests?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If you get mixed results, you likely have a neutral undertone. Neutral undertones have characteristics of both warm and cool, which is why the tests can seem contradictory. The good news is that neutral undertones can wear a wider range of colors from both warm and cool palettes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is undertone the same as skin tone?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, skin tone and undertone are different. Skin tone refers to how light or dark your skin is — fair, medium, or deep. Undertone is the subtle hue beneath the surface — warm, cool, or neutral. People of any skin tone can have any undertone."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do undertones affect makeup choices?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Undertones are crucial for choosing the right foundation, concealer, lipstick, and blush shades. Warm undertones look best in peach, coral, and warm-toned foundations. Cool undertones suit pink-based foundations, berry lips, and rose blush. Wearing makeup that matches your undertone creates a seamless, natural look."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What hair colors suit warm vs cool undertones?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Warm undertones are flattered by golden blonde, caramel, copper, and auburn shades. Cool undertones look stunning with ash blonde, platinum, cool brown, and burgundy. Neutral undertones have the most flexibility and can pull off shades from both sides."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I wear colors outside my undertone palette?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! The trick is choosing the right shade within that color family. For example, if you're cool-toned and love red, choose a blue-based red rather than an orange-based red. Keeping 'off' colors away from your face also helps."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's the most accurate way to determine my undertone?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Professional color draping is the gold standard. However, combining multiple at-home tests — the vein test, jewelry test, and white paper test — gives a reliable result for most people. AI-powered color analysis tools can also provide personalized results."
                  }
                }
              ]
            })}} />
          </section>

        </div>
      </article>

      <div className="container mx-auto px-4 max-w-4xl">
        <AnalysisCTA />
      </div>
      <Footer />
    </div>
  );
};

export default WarmVsCoolUndertones;
