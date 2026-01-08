import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import ExtensionCTA from "../components/ExtensionCTA";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const BestColorsForOliveSkin = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Best Colors for Olive Skin: Complete Guide 2026"
        description="Discover the most flattering colors for olive skin. Learn which shades complement your warm-toned complexion and make your skin glow."
        keywords="best colors for olive skin, olive skin tone colors, Mediterranean skin colors, warm olive undertone, what colors suit olive skin"
        canonicalUrl="/best-colors-for-olive-skin"
        ogImage="/olive-skin-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-11-19",
          modifiedTime: "2026-01-06",
          section: "Color Analysis",
          tags: ["olive skin", "Mediterranean", "color guide", "skin tone"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Best Colors for Olive Skin", url: "/best-colors-for-olive-skin" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">Color Guide</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Best Colors for{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(45deg, #808000, #8B7355)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Olive Skin
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The complete guide to colors that make olive skin tones glow. Discover how to enhance your unique green-yellow undertones with the perfect palette.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/olive-skin-hero.png`}
              alt="Best colors for olive skin - styling guide"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Olive Skin Tones</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Olive skin is unique because it contains green undertones mixed with yellow, gold, or neutral hues. This distinctive coloring is found across many ethnicities - Mediterranean, Middle Eastern, Asian, Latina, and beyond - and can range from light to deep.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The green undertone in olive skin makes color selection tricky. Some colors that look great on warm or cool skin tones can make olive skin look sallow or washed out. But when you find your colors, your skin absolutely glows.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Olive skin is incredibly versatile - you can often wear both warm and cool colors, as long as they're the right intensity. The key is avoiding colors that enhance the green undertone in unflattering ways.
            </p>

            <div className="bg-green-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Are You Olive?</h3>
              <p className="text-gray-700 mb-6">
                Olive skin is often mistaken for just "warm" or "neutral" skin. Here's how to identify true olive undertones:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Signs You're Olive</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Veins appear green or blue-green</li>
                    <li>• You tan easily, rarely burn</li>
                    <li>• Yellow-gold colors can look off</li>
                    <li>• Both gold and silver jewelry work</li>
                    <li>• Some colors make you look sallow</li>
                    <li>• Your skin has a slight green/gray cast</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Types of Olive</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• <strong>Warm Olive:</strong> Golden/yellow-green undertones</li>
                    <li>• <strong>Cool Olive:</strong> Gray/blue-green undertones</li>
                    <li>• <strong>Light Olive:</strong> Fair to light medium</li>
                    <li>• <strong>Medium Olive:</strong> Most common range</li>
                    <li>• <strong>Deep Olive:</strong> Darker olive tones</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Colors by Olive Type */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Best Colors by Olive Type</h2>

            <div className="space-y-8">
              <div className="bg-amber-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Warm Olive Skin</h3>
                <p className="text-gray-700 mb-6">
                  If your olive skin leans warm with golden undertones and gold jewelry looks better on you, these colors will enhance your natural warmth without bringing out sallowness.
                </p>
                <div className="grid grid-cols-5 md:grid-cols-10 gap-3 mb-6">
                  {[
                    { name: "Burnt Orange", hex: "#CC5500" },
                    { name: "Terracotta", hex: "#E2725B" },
                    { name: "Mustard", hex: "#FFDB58" },
                    { name: "Olive Green", hex: "#556B2F" },
                    { name: "Coral", hex: "#FF7F50" },
                    { name: "Camel", hex: "#C19A6B" },
                    { name: "Turquoise", hex: "#40E0D0" },
                    { name: "Rust", hex: "#B7410E" },
                    { name: "Warm Brown", hex: "#8B4513" },
                    { name: "Teal", hex: "#008080" }
                  ].map((color) => (
                    <div key={color.name} className="text-center">
                      <div className="w-full aspect-square rounded-lg shadow-md border border-gray-200" style={{ backgroundColor: color.hex }} />
                      <span className="text-xs text-gray-600 mt-1 block">{color.name}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Burnt orange", "Terracotta", "Mustard", "Olive green", "Coral", "Camel", "Turquoise", "Rust", "Warm brown", "Teal"].map((item) => (
                    <span key={item} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{item}</span>
                  ))}
                </div>
              </div>

              <div className="bg-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cool Olive Skin</h3>
                <p className="text-gray-700 mb-6">
                  If your olive skin has more gray or blue-green undertones and silver jewelry flatters you more, these cool-based colors will make your skin look healthy and radiant.
                </p>
                <div className="grid grid-cols-5 md:grid-cols-10 gap-3 mb-6">
                  {[
                    { name: "Emerald", hex: "#50C878" },
                    { name: "Sapphire", hex: "#0F52BA" },
                    { name: "Plum", hex: "#8E4585" },
                    { name: "Burgundy", hex: "#800020" },
                    { name: "Teal", hex: "#008080" },
                    { name: "Forest", hex: "#228B22" },
                    { name: "Berry", hex: "#8E4585" },
                    { name: "Cool Gray", hex: "#708090" },
                    { name: "Navy", hex: "#000080" },
                    { name: "Deep Purple", hex: "#673AB7" }
                  ].map((color) => (
                    <div key={color.name} className="text-center">
                      <div className="w-full aspect-square rounded-lg shadow-md border border-gray-200" style={{ backgroundColor: color.hex }} />
                      <span className="text-xs text-gray-600 mt-1 block">{color.name}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Emerald", "Sapphire blue", "Plum", "Burgundy", "Teal", "Forest green", "Berry", "Cool gray", "Navy", "Deep purple"].map((item) => (
                    <span key={item} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Universal Colors */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Universal Winners for Olive Skin</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              These colors look gorgeous on virtually all olive skin tones, regardless of whether you lean warm or cool. They work with the green undertone rather than against it.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Earth Tones</h3>
                <p className="text-gray-700 mb-4">
                  Earth tones are olive skin's best friends. They complement your natural coloring beautifully.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li><span className="text-green-600 mr-2">✓</span> Olive green (your namesake!)</li>
                  <li><span className="text-green-600 mr-2">✓</span> Khaki and tan</li>
                  <li><span className="text-green-600 mr-2">✓</span> Rich chocolate brown</li>
                  <li><span className="text-green-600 mr-2">✓</span> Terracotta and rust</li>
                  <li><span className="text-green-600 mr-2">✓</span> Mossy greens</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Jewel Tones</h3>
                <p className="text-gray-700 mb-4">
                  Deep, saturated jewel tones create stunning contrast with olive skin.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li><span className="text-purple-600 mr-2">✓</span> Emerald green</li>
                  <li><span className="text-purple-600 mr-2">✓</span> Sapphire blue</li>
                  <li><span className="text-purple-600 mr-2">✓</span> Ruby red</li>
                  <li><span className="text-purple-600 mr-2">✓</span> Amethyst purple</li>
                  <li><span className="text-purple-600 mr-2">✓</span> Topaz orange</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Teal & Turquoise Family</h3>
              <p className="text-gray-700 mb-6">
                If there's one color family that's practically made for olive skin, it's teal and turquoise. These blue-green shades work harmoniously with your undertones and make olive skin absolutely glow.
              </p>
              <div className="grid grid-cols-6 gap-4">
                {[
                  { name: "Teal", hex: "#008080" },
                  { name: "Turquoise", hex: "#40E0D0" },
                  { name: "Peacock", hex: "#005F69" },
                  { name: "Aqua", hex: "#00FFFF" },
                  { name: "Deep Teal", hex: "#014D4E" },
                  { name: "Seafoam", hex: "#71EEB8" }
                ].map((color) => (
                  <div key={color.name} className="text-center">
                    <div className="w-full aspect-square rounded-lg shadow-md border border-gray-200" style={{ backgroundColor: color.hex }} />
                    <span className="text-sm text-gray-600 mt-2 block">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Colors to Avoid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Colors That Can Be Tricky for Olive Skin</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Some colors can enhance the green in olive skin in unflattering ways, making you look sallow, tired, or washed out. These aren't "never wear" colors, but approach with caution.
            </p>

            <div className="bg-red-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Colors to Be Careful With</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3">✕</span>
                      <span><strong>Pale pastels</strong> - Can make you look washed out</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3">✕</span>
                      <span><strong>Neon colors</strong> - Too harsh against olive undertones</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3">✕</span>
                      <span><strong>Pure white</strong> - Can look too stark</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3">✕</span>
                      <span><strong>Certain yellows</strong> - Can enhance sallowness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3">✕</span>
                      <span><strong>Beige/tan near face</strong> - Can blend with skin</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">How to Make Them Work</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">→</span>
                      <span>Choose cream or off-white instead of pure white</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">→</span>
                      <span>Wear pastels as bottoms, not near your face</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">→</span>
                      <span>Add a colorful scarf or jewelry near your face</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">→</span>
                      <span>Pair tricky colors with flattering ones</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">→</span>
                      <span>Use bronzer/blush to add warmth</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Neutrals for Olive Skin */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Neutrals for Olive Skin</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Finding the right neutrals is crucial for olive skin. Skip the typical beige and tan - here are the neutrals that actually work.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Green-Based Neutrals</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Olive green</li>
                  <li>• Khaki</li>
                  <li>• Moss green</li>
                  <li>• Army green</li>
                  <li>• Sage (darker shades)</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Warm Neutrals</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Camel</li>
                  <li>• Rich chocolate</li>
                  <li>• Cognac</li>
                  <li>• Warm gray</li>
                  <li>• Cream (not pure white)</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Cool Neutrals</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Charcoal</li>
                  <li>• Navy</li>
                  <li>• Slate gray</li>
                  <li>• Deep taupe</li>
                  <li>• Black (always works!)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Styling by Occasion */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Color Styling by Occasion</h2>

            <div className="space-y-6">
              <div className="bg-purple-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Professional/Work</h3>
                <p className="text-gray-700 mb-4">
                  Olive skin looks incredibly polished in jewel tones for workwear. An emerald blouse, teal dress, or burgundy blazer reads as professional and sophisticated.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Power colors: Emerald, teal, burgundy, navy, deep plum
                </p>
              </div>

              <div className="bg-pink-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Special Events</h3>
                <p className="text-gray-700 mb-4">
                  For events, olive skin shines in rich metallics (gold, bronze, copper) and deep jewel tones. Don't be afraid to go bold - your skin can handle it.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Glamour colors: Gold, bronze, deep emerald, rich burgundy, copper
                </p>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Casual Everyday</h3>
                <p className="text-gray-700 mb-4">
                  Earth tones are your everyday best friends. Olive, khaki, camel, and terracotta create effortlessly put-together casual looks.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Easy colors: Olive, khaki, terracotta, turquoise, coral
                </p>
              </div>

              <div className="bg-amber-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Summer/Beach</h3>
                <p className="text-gray-700 mb-4">
                  Turquoise, coral, and tropical greens look stunning on olive skin in summer. Your skin naturally tans beautifully, making these colors pop even more.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Summer colors: Turquoise, coral, tropical green, white (cream-based)
                </p>
              </div>
            </div>
          </section>

          {/* Makeup Tips */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Makeup Colors for Olive Skin</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lip Colors</h3>
                <p className="text-gray-700 mb-4">Olive skin looks stunning with these lip shades:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Warm olive:</strong> Coral, terracotta, warm nude, peach, burnt orange</li>
                  <li>• <strong>Cool olive:</strong> Berry, plum, mauve, wine, dusty rose</li>
                  <li>• <strong>Universal:</strong> Deep red, burgundy, classic red, nude brown</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Eye Makeup</h3>
                <p className="text-gray-700 mb-4">These eye colors complement olive undertones:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Warm olive:</strong> Bronze, copper, warm brown, gold, olive</li>
                  <li>• <strong>Cool olive:</strong> Purple, plum, silver, cool taupe, burgundy</li>
                  <li>• <strong>Universal:</strong> Deep brown, black, champagne, forest green</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Jewelry */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Metals & Jewelry for Olive Skin</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-amber-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full" style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)' }}></div>
                <h4 className="font-bold text-gray-900 mb-2">Gold</h4>
                <p className="text-gray-600 text-sm">Best for warm olive. Yellow gold and rose gold enhance your warmth.</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full" style={{ background: 'linear-gradient(135deg, #C0C0C0, #808080)' }}></div>
                <h4 className="font-bold text-gray-900 mb-2">Silver</h4>
                <p className="text-gray-600 text-sm">Best for cool olive. Platinum and white gold work beautifully too.</p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full" style={{ background: 'linear-gradient(135deg, #40E0D0, #008080)' }}></div>
                <h4 className="font-bold text-gray-900 mb-2">Turquoise</h4>
                <p className="text-gray-600 text-sm">Turquoise and green stones look stunning on all olive skin.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Why do some colors make my olive skin look green or sallow?</h3>
                <p className="text-gray-700">
                  Colors that are too muted, too yellow-based, or close to your skin tone can enhance the green undertone in unflattering ways. This is why olive skin needs more saturated colors and should avoid muddy or pale shades near the face.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Can I wear pastels with olive skin?</h3>
                <p className="text-gray-700">
                  Pale pastels can be tricky, but you can still wear them! Choose pastels with more saturation (bright mint vs. pale mint), or wear them as bottoms rather than tops. Adding a colorful scarf or jewelry near your face can also help balance out pastels.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Should I wear gold or silver jewelry?</h3>
                <p className="text-gray-700">
                  It depends on your specific type of olive! Warm olives look best in gold, rose gold, and bronze. Cool olives shine in silver, platinum, and white gold. Many olives can wear both, so try pieces in natural light to see which makes your skin look healthier.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Why is it so hard to find my undertone if I'm olive?</h3>
                <p className="text-gray-700">
                  Olive is often overlooked in traditional warm/cool undertone systems because it's neither purely warm nor cool - it's a separate category with green undertones. Many olive-skinned people spend years thinking they're just "neutral" when they're actually olive.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">What color season are most olive-skinned people?</h3>
                <p className="text-gray-700">
                  Olive skin can fall into several seasons depending on depth and undertone. Common seasons for olive skin include Soft Autumn, True Autumn, Soft Summer, and Deep Autumn. The key is finding a season that accounts for your unique green undertone.
                </p>
              </div>
            </div>
          </section>

          {/* Related Content */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Guides</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/blog/what-colors-suit-me" className="bg-green-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2">What Colors Suit Me?</h4>
                <p className="text-gray-600 text-sm">Complete color matching guide</p>
              </Link>
              <Link to="/blog/soft-autumn-colors" className="bg-green-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2">Soft Autumn Colors</h4>
                <p className="text-gray-600 text-sm">Popular season for olive skin</p>
              </Link>
              <Link to="/blog/warm-vs-cool-undertones" className="bg-green-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2">Warm vs Cool Undertones</h4>
                <p className="text-gray-600 text-sm">Understanding your undertone</p>
              </Link>
            </div>
          </section>

        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Find Colors That Make You Glow
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius shows you instantly if colors flatter your olive skin tone while shopping online!
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Color Match</h4>
                  <p className="text-sm text-gray-600">Analyze any color for your skin</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👗</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Virtual Try-On</h4>
                  <p className="text-sm text-gray-600">See how colors look on you</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Price Tracking</h4>
                  <p className="text-sm text-gray-600">Track your favorites</p>
                </div>
              </div>
            </div>

            <ExtensionCTA />
            <p className="text-sm text-gray-500 mt-4">Works on Zara, H&M, ASOS, Mango, and 1000+ more stores</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BestColorsForOliveSkin;
