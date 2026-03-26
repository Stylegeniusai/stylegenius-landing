import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnalysisCTA from "../components/AnalysisCTA";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const WhatColorsSuitMe = () => {
  const skinToneGuides = [
    {
      name: "Fair & Porcelain Skin",
      description: "If you have fair or porcelain skin, you likely have delicate features that can be easily overwhelmed by bold colors.",
      tips: [
        "Look for soft, muted tones that complement rather than compete with your natural coloring",
        "Cool undertones work beautifully with blues, purples, and soft pinks",
        "If you have warm undertones, try peaches, corals, and warm yellows",
        "Avoid neon or overly bright colors that can wash you out"
      ],
      whatToLookFor: "The key is finding colors that enhance your natural glow without overpowering your delicate features.",
      placeholder: "/fair-skin-tone-best-colors-pastel-blue.jpg"
    },
    {
      name: "Light to Medium Skin",
      description: "Medium skin tones have the advantage of being able to wear a wider range of colors, but the key is understanding your undertones.",
      tips: [
        "Warm undertones (golden, yellow, or peachy) work best with earth tones, warm reds, and golden yellows",
        "Cool undertones (pink, red, or blue) are flattered by jewel tones, cool blues, and berry shades",
        "Neutral undertones can experiment with both warm and cool colors",
        "Pay attention to how colors make you feel - the right shade will make you look healthy and radiant"
      ],
      whatToLookFor: "Focus on colors that bring out the natural warmth or coolness in your skin, making you look vibrant and healthy.",
      placeholder: "/medium-skin-tone-best-colors-jewel-tones.jpg"
    },
    {
      name: "Deeper Skin Tones",
      description: "Rich, deeper skin tones can handle bold, vibrant colors that would overwhelm lighter complexions.",
      tips: [
        "Don't be afraid of bright, saturated colors - they were made for you!",
        "Deep jewel tones like emerald, sapphire, and ruby create stunning contrast",
        "Bright oranges, corals, and golden yellows complement warm undertones beautifully",
        "For cool undertones, try electric blues, purples, and fuchsias",
        "Avoid muddy or overly muted colors that can make your skin look dull"
      ],
      whatToLookFor: "The goal is to find colors that celebrate and enhance your natural richness rather than competing with it.",
      placeholder: "/deep-skin-tone-best-colors-vibrant-coral.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="What Colors Suit Me? Find Your Perfect Palette 2026"
        description="Discover which colors flatter your skin tone. Our comprehensive guide helps you find the perfect colors for your complexion - from fair to deep skin tones."
        keywords="what colors suit me, colors for my skin tone, best colors for complexion, color analysis, skin tone colors, flattering colors"
        canonicalUrl="/what-colors-suit-me"
        ogImage="/undertones-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-10-08",
          modifiedTime: "2026-01-06",
          section: "Color Analysis",
          tags: ["color analysis", "skin tone", "flattering colors", "personal styling"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "What Colors Suit Me", url: "/what-colors-suit-me" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
                What Colors{" "}
                Suit Me?
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                The complete guide to finding your perfect color palette and understanding what makes you glow ✨
              </p>
            </div>
            <div className="relative">
              <img
                src={`${BLOG_IMAGE_BASE}/undertones-hero.png`}
                alt="What colors suit me - diverse women in complementary colors"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Have you ever wondered why certain colors make you look radiant while others leave you looking washed out or tired? 
              The secret lies in understanding your skin's undertones and how different colors interact with your natural coloring. 
              This comprehensive guide will teach you everything you need to know about finding your perfect color palette.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Color theory isn't just for artists - it's a powerful tool that can transform how you look and feel every day. 
              When you understand which colors complement your skin tone, you'll never have a "I have nothing to wear" moment again.
            </p>
          </div>

          {/* Understanding Undertones Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Understanding Your Skin's Undertones</h2>
            
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Foundation of Color Harmony</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your skin tone is made up of two components: your surface color (which can change with sun exposure) and your undertone 
                (which remains constant throughout your life). Understanding your undertone is the key to finding colors that make you look healthy, 
                vibrant, and naturally beautiful.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white border border-pink-200 rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">🌸 Cool Undertones</h4>
                <p className="text-gray-600 mb-4">
                  If you have cool undertones, your skin has hints of pink, red, or blue. You likely look best in silver jewelry
                  and your veins appear blue or purple.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-600"><span className="w-4 h-4 rounded-full inline-block border border-gray-200" style={{ backgroundColor: '#4169E1' }}></span>Royal Blue</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-600"><span className="w-4 h-4 rounded-full inline-block border border-gray-200" style={{ backgroundColor: '#8B5CF6' }}></span>Purple</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-600"><span className="w-4 h-4 rounded-full inline-block border border-gray-200" style={{ backgroundColor: '#F9A8D4' }}></span>Soft Pink</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-600"><span className="w-4 h-4 rounded-full inline-block border border-gray-200" style={{ backgroundColor: '#DB2777' }}></span>Berry</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-600"><span className="w-4 h-4 rounded-full inline-block border border-gray-200" style={{ backgroundColor: '#C0C0C0' }}></span>Silver</span>
                </div>
                <p className="text-sm text-gray-500">
                  Think: Winter mornings, fresh snow, cool breeze
                </p>
              </div>
              
              <div className="bg-white border border-orange-200 rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">🌅 Warm Undertones</h4>
                <p className="text-gray-600 mb-4">
                  Warm undertones have hints of yellow, peach, or golden hues. Gold jewelry typically flatters you more,
                  and your veins appear green or olive.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-600"><span className="w-4 h-4 rounded-full inline-block border border-gray-200" style={{ backgroundColor: '#F59E0B' }}></span>Golden Yellow</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-600"><span className="w-4 h-4 rounded-full inline-block border border-gray-200" style={{ backgroundColor: '#F97316' }}></span>Warm Orange</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-600"><span className="w-4 h-4 rounded-full inline-block border border-gray-200" style={{ backgroundColor: '#FBBF24' }}></span>Peach</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-600"><span className="w-4 h-4 rounded-full inline-block border border-gray-200" style={{ backgroundColor: '#DC2626' }}></span>Warm Red</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-600"><span className="w-4 h-4 rounded-full inline-block border border-gray-200" style={{ backgroundColor: '#D4A017' }}></span>Gold</span>
                </div>
                <p className="text-sm text-gray-500">
                  Think: Golden hour sunlight, autumn leaves, warm sand
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">⚖️ Neutral Undertones</h4>
                <p className="text-gray-600 mb-4">
                  Lucky you! Neutral undertones are a mix of warm and cool, meaning you can wear a wider range of colors.
                  Both gold and silver jewelry look good on you.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-600"><span className="w-4 h-4 rounded-full inline-block border border-gray-200" style={{ backgroundColor: '#059669' }}></span>Jade Green</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-600"><span className="w-4 h-4 rounded-full inline-block border border-gray-200" style={{ backgroundColor: '#7C3AED' }}></span>Soft Lavender</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-600"><span className="w-4 h-4 rounded-full inline-block border border-gray-200" style={{ backgroundColor: '#0EA5E9' }}></span>Teal Blue</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-600"><span className="w-4 h-4 rounded-full inline-block border border-gray-200" style={{ backgroundColor: '#E11D48' }}></span>Dusty Rose</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-600"><span className="w-4 h-4 rounded-full inline-block border border-gray-200" style={{ backgroundColor: '#D4A76A' }}></span>Soft Taupe</span>
                </div>
                <p className="text-sm text-gray-500">
                  Think: Perfect balance, versatile, adaptable
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>
          </section>

          {/* Mid-Article CTA */}
          <AnalysisCTA />

          {/* Color Theory Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">The Science Behind Color Harmony</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Color theory explains why certain combinations work beautifully together while others clash. When it comes to personal coloring, 
              it's all about creating harmony between your natural features and the colors you wear.
            </p>

            <div className="bg-blue-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Temperature Rule</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Colors have temperature - they're either warm (containing yellow, orange, or red undertones) or cool (containing blue, green, or purple undertones). 
                The magic happens when you match your skin's temperature with colors of the same temperature.
              </p>
              <p className="text-gray-600">
                This doesn't mean you can only wear warm OR cool colors - it's about understanding which versions of each color work best for you.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Some Colors Make You Glow</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When you wear colors that complement your undertones, they create a beautiful contrast that makes your skin appear clearer, 
              your eyes brighter, and your overall appearance more vibrant. It's like having a natural filter that enhances your best features.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              On the flip side, wearing colors that clash with your undertones can make you appear tired, washed out, or even older than you are. 
              The wrong colors can emphasize imperfections and make you look less healthy overall.
            </p>
          </section>
        </div>
      </article>

      {/* Practical Skin Tone Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How to Determine Your Perfect Colors
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to discover what makes you shine? Here's how to identify your skin tone and choose colors that enhance your natural beauty.
            </p>
          </div>

          {/* Quick Test Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The 30-Second Skin Tone Test</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <img 
                    src="/how-to-find-skin-undertone-vein-test.jpg" 
                    alt="How to find skin undertone using vein test"
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">🔍 Look at Your Veins</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In natural light, examine the veins on the inside of your wrist. This is one of the most reliable ways to determine your undertone:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Blue or purple veins:</strong> You likely have cool undertones</li>
                  <li>• <strong>Green or olive veins:</strong> You probably have warm undertones</li>
                  <li>• <strong>Blue-green or hard to tell:</strong> You might have neutral undertones</li>
                </ul>
              </div>
              <div>
                <div className="mb-6">
                  <img 
                    src="/skin-undertone-test-gold-silver-jewelry.jpg" 
                    alt="Skin undertone test using gold and silver jewelry"
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">💍 The Jewelry Test</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Hold both gold and silver jewelry against your skin and see which makes you look more radiant:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Silver looks better:</strong> Cool undertones</li>
                  <li>• <strong>Gold looks better:</strong> Warm undertones</li>
                  <li>• <strong>Both look good:</strong> Neutral undertones</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Color Guide by Skin Tone */}
          <div className="space-y-12">
            {skinToneGuides.map((guide, index) => (
              <div key={guide.name} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src={guide.placeholder} 
                      alt={`${guide.name} - best colors for skin tone`}
                      className="w-full h-auto object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{guide.name}</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">{guide.description}</p>
                    
                    <div className="bg-blue-50 rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">💡 What to Remember:</h4>
                      <p className="text-gray-700 font-medium">{guide.whatToLookFor}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-900">Key Tips:</h4>
                      <ul className="space-y-2">
                        {guide.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-gray-600 leading-relaxed flex items-start">
                            <span className="text-pink-500 mr-2 mt-1">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>
        </div>
      </section>

      {/* Shopping & Styling Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Smart Shopping & Styling Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🛍️ When Shopping</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 mt-1">✓</span>
                  <span>Always try colors against your face, not just your hand</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 mt-1">✓</span>
                  <span>Shop in natural light when possible - store lighting can be deceiving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 mt-1">✓</span>
                  <span>Take photos of yourself in different colors to compare later</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 mt-1">✓</span>
                  <span>Invest in your best colors for pieces you'll wear often</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">✨ Styling Secrets</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span>Use your best colors close to your face (tops, scarves, jewelry)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span>Mix different shades of your best colors for depth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span>Use neutrals in your undertone as base pieces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span>Don't be afraid to break rules - confidence is your best accessory!</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-red-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">❌ Common Color Mistakes to Avoid</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">The "Safe" Trap</h4>
                <p className="text-gray-700">
                  Sticking only to black, white, and beige because they're "safe." While neutrals are great, 
                  the right colors can make you look more vibrant and confident.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Trend Following</h4>
                <p className="text-gray-700">
                  Buying trendy colors that don't suit you. Trends come and go, but colors that enhance 
                  your natural beauty will always make you look amazing.
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Pro Tips for Looking Amazing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Test Before You Buy</h3>
                <p className="text-gray-600">
                  Hold fabric up to your face in natural light. The right colors will make your skin glow, 
                  while wrong ones will make you look tired or washed out.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🛍️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Shop Smarter</h3>
                <p className="text-gray-600">
                  Focus on your best colors for statement pieces and neutrals that complement your undertones. 
                  You'll look put-together every time!
                </p>
              </div>
            </div>

            {/* Related Guides */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Explore More Color Guides
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/what-season-am-i" className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <h4 className="font-semibold text-gray-900 mb-1">What Season Am I?</h4>
                  <p className="text-sm text-gray-600">Find your seasonal color palette</p>
                </Link>
                <Link to="/warm-vs-cool-undertones" className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <h4 className="font-semibold text-gray-900 mb-1">Warm vs Cool Undertones</h4>
                  <p className="text-sm text-gray-600">Master the undertone basics</p>
                </Link>
                <Link to="/best-colors-for-pale-skin" className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <h4 className="font-semibold text-gray-900 mb-1">Colors for Pale Skin</h4>
                  <p className="text-sm text-gray-600">The complete pale skin guide</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl">
        <AnalysisCTA />
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                How do I find out what colors suit me?
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">
                The best way to find your ideal colors is to determine your skin's undertone. Check the veins on your wrist in natural light: blue or purple veins suggest cool undertones, green veins suggest warm undertones, and a mix suggests neutral undertones. Then choose colors that match your undertone temperature. For a more precise analysis, consider a professional color analysis or an AI-powered tool that examines your skin, hair, and eye color together.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                Can I wear colors that don't match my undertone?
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Absolutely! Color guidelines are starting points, not strict rules. You can wear any color you love by choosing the right shade within that color family. For example, if you have warm undertones but love blue, opt for a warm-toned blue like teal or turquoise instead of an icy blue. You can also wear less flattering colors further from your face, such as in pants or skirts.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                Does my hair color affect which colors suit me?
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Yes, your hair color plays a significant role in your overall color palette. Hair color contributes to the contrast level between your features. People with dark hair and light skin (high contrast) look great in bold, saturated colors, while those with low contrast between hair and skin suit softer, more muted tones. If you dye your hair, your best clothing colors may shift as well.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                What is seasonal color analysis?
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Seasonal color analysis is a system that categorizes people into one of four seasonal palettes — Spring, Summer, Autumn, or Winter — based on their skin tone, hair color, and eye color. Each season has a specific set of colors that harmonize with that person's natural coloring. Modern approaches often break these into 12 or 16 sub-seasons for even more precision. It's one of the most popular frameworks for finding flattering colors.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                Do the colors that suit me change as I age?
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Your undertone stays the same throughout your life, but your best colors can shift subtly as your hair grays, your skin tone changes, or your contrast level evolves. Many people find that softer, less saturated versions of their best colors become more flattering over time. It's worth reassessing your palette every few years, especially after significant changes like going gray.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                What colors are universally flattering?
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">
                While no color is truly universal, some shades tend to flatter most people. Teal (a blue-green that balances warm and cool), soft blush pink, true red (not too orange or too blue), and navy are often cited as widely flattering. The key is that these colors sit between warm and cool on the spectrum, making them versatile across different undertones.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                How can AI help me find my best colors?
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">
                AI-powered color analysis tools can examine a photo of your face to detect your skin undertone, contrast level, and overall coloring. They then match you to a seasonal palette and generate a personalized set of colors. This approach is more accessible and affordable than an in-person consultation, and modern AI tools are remarkably accurate. You can try our <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">free AI color analysis</Link> to get started.
              </p>
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
              "name": "How do I find out what colors suit me?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The best way to find your ideal colors is to determine your skin's undertone. Check the veins on your wrist in natural light: blue or purple veins suggest cool undertones, green veins suggest warm undertones, and a mix suggests neutral undertones. Then choose colors that match your undertone temperature. For a more precise analysis, consider a professional color analysis or an AI-powered tool that examines your skin, hair, and eye color together."
              }
            },
            {
              "@type": "Question",
              "name": "Can I wear colors that don't match my undertone?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! Color guidelines are starting points, not strict rules. You can wear any color you love by choosing the right shade within that color family. For example, if you have warm undertones but love blue, opt for a warm-toned blue like teal or turquoise instead of an icy blue. You can also wear less flattering colors further from your face, such as in pants or skirts."
              }
            },
            {
              "@type": "Question",
              "name": "Does my hair color affect which colors suit me?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, your hair color plays a significant role in your overall color palette. Hair color contributes to the contrast level between your features. People with dark hair and light skin (high contrast) look great in bold, saturated colors, while those with low contrast between hair and skin suit softer, more muted tones. If you dye your hair, your best clothing colors may shift as well."
              }
            },
            {
              "@type": "Question",
              "name": "What is seasonal color analysis?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Seasonal color analysis is a system that categorizes people into one of four seasonal palettes — Spring, Summer, Autumn, or Winter — based on their skin tone, hair color, and eye color. Each season has a specific set of colors that harmonize with that person's natural coloring. Modern approaches often break these into 12 or 16 sub-seasons for even more precision."
              }
            },
            {
              "@type": "Question",
              "name": "Do the colors that suit me change as I age?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Your undertone stays the same throughout your life, but your best colors can shift subtly as your hair grays, your skin tone changes, or your contrast level evolves. Many people find that softer, less saturated versions of their best colors become more flattering over time."
              }
            },
            {
              "@type": "Question",
              "name": "What colors are universally flattering?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "While no color is truly universal, some shades tend to flatter most people. Teal (a blue-green that balances warm and cool), soft blush pink, true red (not too orange or too blue), and navy are often cited as widely flattering."
              }
            },
            {
              "@type": "Question",
              "name": "How can AI help me find my best colors?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI-powered color analysis tools can examine a photo of your face to detect your skin undertone, contrast level, and overall coloring. They then match you to a seasonal palette and generate a personalized set of colors. This approach is more accessible and affordable than an in-person consultation, and modern AI tools are remarkably accurate."
              }
            }
          ]
        })}} />
      </section>

      <Footer />
    </div>
  );
};

export default WhatColorsSuitMe;