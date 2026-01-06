import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const BestColorsForDarkSkin = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Best Colors for Dark Skin: Complete Guide 2025"
        description="Discover the most flattering colors for dark skin. Learn which bold and vibrant shades make deep skin tones look absolutely stunning."
        keywords="best colors for dark skin, colors for deep skin tone, dark skin fashion, melanin rich skin colors, what colors suit dark skin"
        canonicalUrl="/best-colors-for-dark-skin"
        ogImage="/dark-skin-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-11-20",
          modifiedTime: "2026-01-06",
          section: "Color Analysis",
          tags: ["dark skin", "deep skin tone", "color guide", "melanin"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Best Colors for Dark Skin", url: "/best-colors-for-dark-skin" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">Color Guide</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Best Colors for{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(45deg, #8B4513, #FFD700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Dark Skin
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The complete guide to colors that make deep and dark skin tones absolutely radiate. Discover which shades enhance your natural beauty and why.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/dark-skin-hero.png`}
              alt="Best colors for dark skin - vibrant outfit inspiration"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Power of Dark Skin Tones</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Dark skin is incredibly versatile and can carry bold, vibrant colors that would overwhelm lighter complexions. The rich melanin in darker skin creates a natural canvas that makes colors pop in stunning ways.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              While almost every color looks good on dark skin, understanding your specific undertone - warm, cool, or neutral - will help you choose shades that make your skin truly glow. The goal isn't limiting your options; it's about knowing which variations of each color work best for you.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The key principle for dark skin: don't be afraid of color! Your skin can handle saturation and brightness that would wash out lighter tones. This is your superpower - embrace it.
            </p>

            <div className="bg-amber-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding Your Undertone</h3>
              <p className="text-gray-700 mb-6">
                Even within dark skin tones, undertones vary significantly. Identifying yours is the key to choosing the most flattering colors.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Warm Undertones</h4>
                  <p className="text-gray-600 text-sm mb-2">Your skin has golden, red, or amber undertones. Gold jewelry looks best on you.</p>
                  <p className="text-amber-600 text-sm font-medium">Think: Caramel, honey, copper</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Cool Undertones</h4>
                  <p className="text-gray-600 text-sm mb-2">Your skin has blue, purple, or red undertones. Silver jewelry looks best on you.</p>
                  <p className="text-blue-600 text-sm font-medium">Think: Espresso, cocoa, deep brown</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Neutral Undertones</h4>
                  <p className="text-gray-600 text-sm mb-2">You have a mix of warm and cool, or neither dominates. Both gold and silver look great.</p>
                  <p className="text-gray-600 text-sm font-medium">Think: Deep chestnut, rich mahogany</p>
                </div>
              </div>
            </div>
          </section>

          {/* Colors by Undertone */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Best Colors by Undertone</h2>

            <div className="space-y-8">
              <div className="bg-amber-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Warm Undertones</h3>
                <p className="text-gray-700 mb-6">
                  If your dark skin has golden, red, or amber undertones, these colors will make you glow. The key is choosing warm-based versions of each color.
                </p>
                <div className="grid grid-cols-5 md:grid-cols-10 gap-3 mb-6">
                  {[
                    { name: "Orange", hex: "#FF6B00" },
                    { name: "Coral", hex: "#FF7F50" },
                    { name: "Gold", hex: "#FFD700" },
                    { name: "Mustard", hex: "#FFDB58" },
                    { name: "Olive", hex: "#808000" },
                    { name: "Turquoise", hex: "#40E0D0" },
                    { name: "Peach", hex: "#FFCBA4" },
                    { name: "Rust", hex: "#B7410E" },
                    { name: "Warm Red", hex: "#FF4500" },
                    { name: "Bronze", hex: "#CD7F32" }
                  ].map((color) => (
                    <div key={color.name} className="text-center">
                      <div className="w-full aspect-square rounded-lg shadow-md border border-gray-200" style={{ backgroundColor: color.hex }} />
                      <span className="text-xs text-gray-600 mt-1 block">{color.name}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Bright orange", "Coral", "Golden yellow", "Warm red", "Olive green", "Turquoise", "Peach", "Bronze", "Rust", "Terracotta"].map((item) => (
                    <span key={item} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{item}</span>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cool Undertones</h3>
                <p className="text-gray-700 mb-6">
                  If your skin has blue, purple, or red undertones, you'll look stunning in cool-based colors. Jewel tones are particularly gorgeous on you.
                </p>
                <div className="grid grid-cols-5 md:grid-cols-10 gap-3 mb-6">
                  {[
                    { name: "Royal Purple", hex: "#7851A9" },
                    { name: "Fuchsia", hex: "#FF00FF" },
                    { name: "Emerald", hex: "#50C878" },
                    { name: "Cobalt", hex: "#0047AB" },
                    { name: "Hot Pink", hex: "#FF69B4" },
                    { name: "True Red", hex: "#FF0000" },
                    { name: "Icy White", hex: "#F0F8FF" },
                    { name: "Silver", hex: "#C0C0C0" },
                    { name: "Berry", hex: "#8E4585" },
                    { name: "Electric Blue", hex: "#7DF9FF" }
                  ].map((color) => (
                    <div key={color.name} className="text-center">
                      <div className="w-full aspect-square rounded-lg shadow-md border border-gray-200" style={{ backgroundColor: color.hex }} />
                      <span className="text-xs text-gray-600 mt-1 block">{color.name}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Royal purple", "Fuchsia", "Emerald", "Cobalt blue", "Hot pink", "True red", "Icy white", "Silver", "Berry", "Electric blue"].map((item) => (
                    <span key={item} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Universal Colors */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Colors That Look Amazing on Everyone</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Regardless of your specific undertone, these colors tend to look stunning on all dark skin tones. They create beautiful contrast and make your skin glow.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bright Jewel Tones</h3>
                <p className="text-gray-700 mb-4">
                  Saturated jewel tones create gorgeous contrast with dark skin. These rich, vivid colors make you look radiant and luxurious.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li><span className="text-amber-600 mr-2">✓</span> Emerald green</li>
                  <li><span className="text-amber-600 mr-2">✓</span> Sapphire blue</li>
                  <li><span className="text-amber-600 mr-2">✓</span> Ruby red</li>
                  <li><span className="text-amber-600 mr-2">✓</span> Amethyst purple</li>
                  <li><span className="text-amber-600 mr-2">✓</span> Topaz orange</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pure & Crisp Colors</h3>
                <p className="text-gray-700 mb-4">
                  Pure white and crisp, bold colors create striking contrast. Don't shy away from these - they look incredible on you.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li><span className="text-blue-600 mr-2">✓</span> Pure white</li>
                  <li><span className="text-blue-600 mr-2">✓</span> True black</li>
                  <li><span className="text-blue-600 mr-2">✓</span> Primary red</li>
                  <li><span className="text-blue-600 mr-2">✓</span> Cobalt blue</li>
                  <li><span className="text-blue-600 mr-2">✓</span> Electric yellow</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bold Primary Colors</h3>
              <p className="text-gray-700 mb-6">
                Dark skin handles bold, primary colors beautifully. While these might overwhelm lighter skin tones, they create stunning, high-impact looks on you.
              </p>
              <div className="grid grid-cols-6 gap-4">
                {[
                  { name: "Red", hex: "#FF0000" },
                  { name: "Yellow", hex: "#FFFF00" },
                  { name: "Blue", hex: "#0000FF" },
                  { name: "Green", hex: "#00FF00" },
                  { name: "Orange", hex: "#FFA500" },
                  { name: "Purple", hex: "#800080" }
                ].map((color) => (
                  <div key={color.name} className="text-center">
                    <div className="w-full aspect-square rounded-lg shadow-md border border-gray-200" style={{ backgroundColor: color.hex }} />
                    <span className="text-sm text-gray-600 mt-2 block">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Colors to Approach with Caution */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Colors to Approach with Caution</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              While dark skin is incredibly versatile, some colors can be less flattering. This doesn't mean you can't wear them - just be mindful of how you style them.
            </p>

            <div className="bg-red-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Colors That Can Be Tricky</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3">✕</span>
                      <span><strong>Muddy browns</strong> - Can blend with skin and look dull</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3">✕</span>
                      <span><strong>Very pale pastels</strong> - May lack enough contrast</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3">✕</span>
                      <span><strong>Colors too close to your skin tone</strong> - Can wash you out</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3">✕</span>
                      <span><strong>Some olive greens</strong> - Depends on undertone</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3">✕</span>
                      <span><strong>Dull, muted shades</strong> - Your skin deserves vibrancy</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">How to Make Them Work</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">→</span>
                      <span>Wear these colors as bottoms, not near your face</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">→</span>
                      <span>Add a vibrant top or accessory to create contrast</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">→</span>
                      <span>Use bold makeup to balance muted clothing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">→</span>
                      <span>Layer with brighter colors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">→</span>
                      <span>Add statement jewelry that pops</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Styling Tips by Outfit Type */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Color Styling by Occasion</h2>

            <div className="space-y-6">
              <div className="bg-purple-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Workwear</h3>
                <p className="text-gray-700 mb-4">
                  Professional settings are perfect for jewel tones. A cobalt blue blouse, emerald green dress, or burgundy blazer looks polished and powerful while letting your skin glow.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Power colors: Cobalt blue, deep purple, emerald green, burgundy, rich navy
                </p>
              </div>

              <div className="bg-pink-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Special Occasions</h3>
                <p className="text-gray-700 mb-4">
                  Events are your time to shine! Bold metallics (gold, copper, bronze) look stunning. Bright fuchsia, electric blue, and vibrant red create show-stopping moments.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Statement colors: Gold, copper, fuchsia, electric blue, crimson red
                </p>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Casual Everyday</h3>
                <p className="text-gray-700 mb-4">
                  Everyday outfits can still be colorful! Bright white tees, coral tops, turquoise accessories, and yellow accents keep you looking vibrant without trying too hard.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Easy colors: Pure white, coral, turquoise, sunny yellow, warm orange
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Date Night</h3>
                <p className="text-gray-700 mb-4">
                  Romantic occasions call for rich, luxurious colors. Deep reds, rich purples, and sophisticated blacks create allure. Add gold jewelry to elevate the look.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Romantic colors: Wine red, deep purple, black, champagne gold
                </p>
              </div>
            </div>
          </section>

          {/* Makeup Tips */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Makeup Colors for Dark Skin</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lip Colors</h3>
                <p className="text-gray-700 mb-4">Dark skin looks stunning with bold lip colors.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Warm undertones:</strong> Warm reds, corals, bronze, nude browns</li>
                  <li>• <strong>Cool undertones:</strong> Berry, plum, fuchsia, wine, blue-red</li>
                  <li>• <strong>Universal:</strong> Deep reds, burgundy, chocolate, bright red</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Eye Makeup</h3>
                <p className="text-gray-700 mb-4">Don't be afraid to go bold with eye colors!</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Warm undertones:</strong> Gold, bronze, copper, warm browns, orange</li>
                  <li>• <strong>Cool undertones:</strong> Silver, purple, blue, cool taupe, burgundy</li>
                  <li>• <strong>Universal:</strong> Black, deep brown, champagne, rose gold</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Jewelry & Metals */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Metals for Your Undertone</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-amber-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full" style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)' }}></div>
                <h4 className="font-bold text-gray-900 mb-2">Gold</h4>
                <p className="text-gray-600 text-sm">Best for warm undertones. Yellow gold, rose gold, and copper look stunning.</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full" style={{ background: 'linear-gradient(135deg, #C0C0C0, #808080)' }}></div>
                <h4 className="font-bold text-gray-900 mb-2">Silver</h4>
                <p className="text-gray-600 text-sm">Best for cool undertones. Platinum, white gold, and silver create beautiful contrast.</p>
              </div>
              <div className="bg-rose-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full" style={{ background: 'linear-gradient(135deg, #B76E79, #E0BFB8)' }}></div>
                <h4 className="font-bold text-gray-900 mb-2">Rose Gold</h4>
                <p className="text-gray-600 text-sm">Flatters most dark skin tones - a beautiful middle ground between warm and cool.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Can I wear pastels with dark skin?</h3>
                <p className="text-gray-700">
                  Yes! But choose pastels with more saturation - think bright pastel pink rather than dusty pale pink. Pastels with depth (like lavender or mint) work better than super washed-out versions. The key is ensuring enough contrast with your skin.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Does dark skin look good in all-black outfits?</h3>
                <p className="text-gray-700">
                  Absolutely! Black creates beautiful contrast with dark skin and looks incredibly elegant. To prevent the look from feeling too heavy, add texture (velvet, silk, leather) and accessories. Gold or silver jewelry really pops against black clothing.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">What about nude or neutral colors?</h3>
                <p className="text-gray-700">
                  Finding "nude" for dark skin means embracing rich browns, deep caramels, and warm espresso shades. These are your neutrals! Avoid beige or tan labeled as "nude" - they're often too light and can look ashy.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Why do some colors make me look ashy?</h3>
                <p className="text-gray-700">
                  Colors that match your skin tone too closely or have the wrong undertone (cool when you're warm, or vice versa) can create a washed-out appearance. Also, colors that are too muted lack the vibrancy needed to complement the richness of dark skin.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Should I avoid bright colors in professional settings?</h3>
                <p className="text-gray-700">
                  Not at all! Bright colors on dark skin look polished and sophisticated, not loud. A cobalt blue blazer or emerald blouse reads as professional and powerful. Embrace color at work - it's one of your biggest style advantages.
                </p>
              </div>
            </div>
          </section>

          {/* Related Content */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Guides</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/blog/what-colors-suit-me" className="bg-amber-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2">What Colors Suit Me?</h4>
                <p className="text-gray-600 text-sm">Complete undertone guide</p>
              </Link>
              <Link to="/blog/what-season-am-i" className="bg-amber-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2">What Season Am I?</h4>
                <p className="text-gray-600 text-sm">Find your color season</p>
              </Link>
              <Link to="/blog/warm-vs-cool-undertones" className="bg-amber-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2">Warm vs Cool Undertones</h4>
                <p className="text-gray-600 text-sm">Identify your undertone</p>
              </Link>
            </div>
          </section>

        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Find Your Perfect Colors
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius shows you which colors will make your dark skin glow while shopping online - no more guessing!
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Color Match</h4>
                  <p className="text-sm text-gray-600">Instant analysis on any product</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👗</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Virtual Try-On</h4>
                  <p className="text-sm text-gray-600">See colors on your skin tone</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Price Tracking</h4>
                  <p className="text-sm text-gray-600">Track prices on your favorites</p>
                </div>
              </div>
            </div>

            <a href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(45deg, #8B4513, #FFD700)' }}>
                Add to Chrome - It's Free
              </button>
            </a>
            <p className="text-sm text-gray-500 mt-4">Works on ASOS, Fashion Nova, PrettyLittleThing, and 1000+ more stores</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BestColorsForDarkSkin;
