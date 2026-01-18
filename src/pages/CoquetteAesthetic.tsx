import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const CoquetteAesthetic = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Coquette Aesthetic: The Complete Style Guide 2026"
        description="Master the coquette aesthetic with our complete guide. Learn about bows, lace, ballet-inspired pieces, and how to style this viral TikTok trend for any occasion."
        keywords="coquette aesthetic, coquette style, coquette fashion, bow aesthetic, feminine style, ballet core, romantic fashion, pink aesthetic, lace fashion"
        canonicalUrl="/coquette-aesthetic"
        ogImage="/coquette-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-11-01",
          modifiedTime: "2026-01-06",
          section: "Fashion Aesthetics",
          tags: ["coquette", "aesthetic", "feminine fashion", "TikTok trends", "bows"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Coquette Aesthetic", url: "/coquette-aesthetic" }
        ]}
        faq={[
          { question: "What is the coquette aesthetic?", answer: "The coquette aesthetic is a hyper-feminine fashion trend characterized by bows, ribbons, lace, soft pink tones, and vintage-inspired pieces that celebrate romantic, flirty femininity." },
          { question: "Is coquette appropriate for work?", answer: "Yes! Choose subtle touches like a blouse with a small bow, pearl jewelry, or ballet flats. Stick to neutral colors and professional silhouettes with romantic details." },
          { question: "Can I wear coquette if I don't like pink?", answer: "Absolutely! Try dark coquette with black, burgundy, and red, or go for cream, white, and baby blue. The aesthetic is about femininity and romantic details, not specifically pink." },
          { question: "What body types suit coquette?", answer: "Every body type can embrace coquette! The aesthetic is about embracing femininity, not fitting a specific shape. Choose pieces that flatter your figure." }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-rose-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-6">Fashion Aesthetic</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Coquette{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(45deg, #FF69B4, #FFB6C1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Aesthetic
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The complete guide to the coquette aesthetic - embrace your feminine side with bows, lace, and romantic details. Everything you need to master this viral TikTok trend.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/coquette-hero.png`}
              alt="Coquette aesthetic - feminine outfit with bows and lace details"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the Coquette Aesthetic?</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The coquette aesthetic (from the French word meaning "flirt") is a hyper-feminine fashion trend that celebrates girlhood, romance, and delicate beauty. It's characterized by bows, ribbons, lace, soft pink tones, and vintage-inspired pieces that exude playful femininity.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This aesthetic went viral on TikTok in 2023-2024, but its roots trace back to French boudoir fashion, rococo art, and the romantic era. Think Marie Antoinette meets modern It-girl - a celebration of everything traditionally feminine, from ballet flats to pearl accessories.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Unlike minimalist trends, coquette embraces maximalism in femininity. It's about wearing your girlhood proudly - bows in your hair, ribbons on your shoes, lace on everything. The key is balancing sweetness with sophistication so you look romantic, not costume-y.
            </p>

            <div className="bg-pink-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Coquette Formula</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🎀</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Bows</h4>
                  <p className="text-gray-600 text-sm">The signature element - on everything</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🩰</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ballet</h4>
                  <p className="text-gray-600 text-sm">Ballerina-inspired silhouettes</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">💕</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Romance</h4>
                  <p className="text-gray-600 text-sm">Soft, dreamy, feminine energy</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">✨</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Delicacy</h4>
                  <p className="text-gray-600 text-sm">Lace, silk, and fine details</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Elements */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Elements of Coquette Style</h2>

            <div className="space-y-6">
              <div className="bg-rose-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Bows & Ribbons</h3>
                <p className="text-gray-700 mb-4">
                  The bow is THE symbol of coquette aesthetic. From tiny hair bows to oversized statement ribbons, they appear everywhere - on clothes, shoes, bags, and accessories. Satin, velvet, and grosgrain are the preferred materials. The placement can be subtle (a small bow on a shoe) or dramatic (a large bow in your hair).
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Hair bows", "Bow earrings", "Ribbon chokers", "Bow-detail tops", "Ballet flats with bows", "Bow bags"].map((item) => (
                    <span key={item} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{item}</span>
                  ))}
                </div>
              </div>

              <div className="bg-rose-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Lace & Delicate Fabrics</h3>
                <p className="text-gray-700 mb-4">
                  Lace is central to coquette fashion, whether it's a full lace dress or subtle lace trim on a camisole. The aesthetic favors delicate, romantic fabrics - silk, satin, chiffon, and tulle. These materials catch light beautifully and move with an ethereal quality that enhances the feminine vibe.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Lace camisoles", "Lace trim tops", "Sheer overlays", "Silk slip dresses", "Satin skirts", "Tulle details"].map((item) => (
                    <span key={item} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{item}</span>
                  ))}
                </div>
              </div>

              <div className="bg-rose-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Corsets & Bustiers</h3>
                <p className="text-gray-700 mb-4">
                  Corset tops and bustiers are key coquette pieces, creating a defined waist and romantic silhouette. Worn over blouses, under cardigans, or on their own, they add structure while maintaining the feminine aesthetic. Opt for versions with bow details, lace trim, or in soft pink hues for maximum coquette vibes.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Lace corset tops", "Satin bustiers", "Corset belts", "Under-bust corsets", "Ribbon-laced backs", "Boned bodices"].map((item) => (
                    <span key={item} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{item}</span>
                  ))}
                </div>
              </div>

              <div className="bg-rose-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Ballet-Inspired Pieces</h3>
                <p className="text-gray-700 mb-4">
                  The ballerina influence is strong in coquette fashion - think ballet flats, wrap cardigans, tulle skirts, and leg warmers styled as fashion pieces. The graceful, ethereal quality of ballet perfectly complements the romantic coquette aesthetic. Even ballet-pink colors are a direct reference to this inspiration.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Ballet flats", "Wrap cardigans", "Tulle skirts", "Leg warmers", "Crossover tops", "Soft knit shrugs"].map((item) => (
                    <span key={item} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{item}</span>
                  ))}
                </div>
              </div>

              <div className="bg-rose-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">5. Dainty Jewelry</h3>
                <p className="text-gray-700 mb-4">
                  Coquette jewelry is delicate and romantic - pearls, small bows, hearts, and vintage-inspired pieces. Layered necklaces, ribbon chokers, and drop earrings are favorites. The jewelry should look precious and feminine without being chunky or overwhelming.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Pearl necklaces", "Bow pendants", "Heart earrings", "Ribbon chokers", "Dainty rings", "Charm bracelets"].map((item) => (
                    <span key={item} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Color Palette */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Coquette Color Palette</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Coquette colors are soft, romantic, and predominantly pink-leaning. While pink is the hero color, the palette also includes other soft shades that evoke femininity and romance.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Core Colors</h3>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                {[
                  { name: "Ballet Pink", hex: "#FFB6C1" },
                  { name: "Blush", hex: "#FFE4E1" },
                  { name: "Rose", hex: "#FF007F" },
                  { name: "Cream", hex: "#FFFDD0" },
                  { name: "White", hex: "#FFFFFF" },
                  { name: "Baby Blue", hex: "#89CFF0" },
                  { name: "Lavender", hex: "#E6E6FA" },
                  { name: "Black", hex: "#000000" },
                  { name: "Burgundy", hex: "#800020" },
                  { name: "Red", hex: "#DC143C" },
                  { name: "Champagne", hex: "#F7E7CE" },
                  { name: "Dusty Rose", hex: "#DCAE96" }
                ].map((color) => (
                  <div key={color.name} className="text-center">
                    <div
                      className="w-full aspect-square rounded-lg shadow-md border border-gray-200"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-xs text-gray-500 mt-2 block">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Primary Colors</h4>
                <p className="text-gray-700 text-sm">
                  Pink in all shades is the coquette signature - from soft ballet pink to hot pink. Pair with white, cream, and blush for a cohesive look. These should make up 70% of your coquette wardrobe.
                </p>
              </div>
              <div className="bg-red-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Accent Colors</h4>
                <p className="text-gray-700 text-sm">
                  Black and red add contrast and sophistication - think black ribbon, red lipstick, or burgundy velvet bows. Use these sparingly (30%) to add depth without overwhelming the sweetness.
                </p>
              </div>
            </div>
          </section>

          {/* Complete Wardrobe */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Building Your Coquette Wardrobe</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border border-pink-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tops</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <span>Lace camisoles and camis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <span>Bow-detail blouses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <span>Corset and bustier tops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <span>Off-shoulder or sweetheart necklines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <span>Puff sleeve tops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <span>Cropped cardigans with ribbon ties</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-pink-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bottoms & Dresses</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <span>Mini skirts with bow details</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <span>Satin slip dresses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <span>Tulle or tutu-style skirts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <span>Babydoll dresses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <span>High-waisted shorts with lace trim</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <span>Pleated mini skirts</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-pink-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Shoes</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <span>Ballet flats (especially with bows)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <span>Mary Janes (platforms or flat)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <span>Kitten heels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <span>Satin pumps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <span>Strappy sandals with bows</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-pink-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Accessories</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <span>Hair bows (all sizes)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <span>Pearl jewelry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <span>Ribbon chokers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <span>Mini bags with bows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <span>Satin headbands</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <span>White knee-high socks</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Different Coquette Styles */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Coquette Aesthetic</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The coquette aesthetic has evolved into several sub-styles, each with its own interpretation of feminine charm.
            </p>

            <div className="space-y-6">
              <div className="bg-pink-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Classic Coquette</h3>
                <p className="text-gray-700 mb-4">
                  The original TikTok version - ultra-feminine with pink, bows, and lace. Think ballet flats, satin ribbons, pearl jewelry, and lots of blush pink. This is the most romantic and girly interpretation.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Key pieces: Pink satin bow, lace cami, ballet flats, pearl necklace
                </p>
              </div>

              <div className="bg-red-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dark Coquette</h3>
                <p className="text-gray-700 mb-4">
                  A gothic twist on the aesthetic - black lace, burgundy velvet, and red accents replace pink. Still feminine and romantic, but with a mysterious, vampy edge. Think Victorian mourning fashion meets French boudoir.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Key pieces: Black lace corset, burgundy bow, red lips, black Mary Janes
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Parisian Coquette</h3>
                <p className="text-gray-700 mb-4">
                  A more sophisticated, grown-up version inspired by French style. Less pink, more black and cream. Bows are smaller and more strategic. The vibe is effortlessly chic rather than overtly girly.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Key pieces: Black bow headband, cream blouse, mini skirt, ballet flats
                </p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Soft Coquette</h3>
                <p className="text-gray-700 mb-4">
                  A toned-down, everyday version that works for any setting. Subtle bow details, muted colors, and delicate fabrics. Perfect for those who want to embrace the aesthetic without going full-on pink princess.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Key pieces: Dusty pink cardigan, small bow earrings, subtle lace trim
                </p>
              </div>
            </div>
          </section>

          {/* Hair & Makeup */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Coquette Hair & Makeup</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-pink-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hair</h3>
                <p className="text-gray-700 mb-4">
                  Coquette hair is romantic and feminine - think soft waves, half-up styles, and of course, bows.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Hair bows</strong> - The signature accessory (satin, velvet)</li>
                  <li>• <strong>Half-up with bow</strong> - Classic coquette style</li>
                  <li>• <strong>Soft curls/waves</strong> - Romantic and feminine</li>
                  <li>• <strong>Low bun with ribbon</strong> - Elegant option</li>
                  <li>• <strong>Braids with ribbon woven in</strong> - Extra romantic</li>
                  <li>• <strong>Face-framing pieces</strong> - Soft tendrils</li>
                </ul>
              </div>

              <div className="bg-white border border-pink-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Makeup</h3>
                <p className="text-gray-700 mb-4">
                  The coquette makeup look is soft, feminine, and doll-like - rosy cheeks and glossy lips are key.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Skin</strong> - Dewy, porcelain-like base</li>
                  <li>• <strong>Blush</strong> - Heavy application, placed high on cheeks</li>
                  <li>• <strong>Lips</strong> - Pink gloss, red tint, or "bitten" look</li>
                  <li>• <strong>Eyes</strong> - Soft pink shadow, subtle liner</li>
                  <li>• <strong>Lashes</strong> - Curled, doll-like lashes</li>
                  <li>• <strong>Brows</strong> - Natural, softly groomed</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Do's and Don'ts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Coquette Do's and Don'ts</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Do</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Mix different shades of pink together</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Layer bows and ribbon details</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Add subtle lace and satin touches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Keep jewelry dainty and romantic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Balance sweetness with sophistication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Use black/red for contrast</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Don't</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✕</span>
                    <span>Go so overboard it looks like a costume</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✕</span>
                    <span>Use cheap-looking synthetic materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✕</span>
                    <span>Forget to consider the occasion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✕</span>
                    <span>Wear chunky, sporty accessories</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✕</span>
                    <span>Mix with completely opposite aesthetics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✕</span>
                    <span>Forget about fit - pieces should flatter</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Coquette for Different Occasions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Styling Coquette for Every Occasion</h2>

            <div className="space-y-6">
              <div className="bg-pink-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Everyday/Casual</h3>
                <p className="text-gray-700 mb-4">
                  Keep it subtle with one or two coquette elements - a hair bow, lace-trimmed top, or ballet flats. Pair with jeans or a simple skirt for a toned-down daytime look.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Outfit idea: White lace cami + high-waisted jeans + ballet flats + small hair bow
                </p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Date Night</h3>
                <p className="text-gray-700 mb-4">
                  Go full coquette with a satin slip dress or bustier top, romantic hair, and soft pink makeup. This is where you can embrace all the feminine details.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Outfit idea: Pink satin slip dress + kitten heels + pearl necklace + soft waves with bow
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Work/Professional</h3>
                <p className="text-gray-700 mb-4">
                  Keep coquette professional with subtle touches - a blouse with a small bow detail, pearl stud earrings, or ballet flats. Choose cream and blush over bright pink.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Outfit idea: Cream pussy-bow blouse + tailored skirt + nude flats + small pearl studs
                </p>
              </div>

              <div className="bg-rose-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Night Out</h3>
                <p className="text-gray-700 mb-4">
                  Try dark coquette with black lace, red lips, and velvet details. Or go classic with a pink sequin top, satin skirt, and strappy heels.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Outfit idea: Black lace corset + satin mini skirt + red lip + velvet bow choker
                </p>
              </div>
            </div>
          </section>

          {/* Where to Shop */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Where to Shop Coquette Style</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-pink-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Budget-Friendly</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Shein</li>
                  <li>• H&M</li>
                  <li>• Zara</li>
                  <li>• ASOS</li>
                  <li>• Urban Outfitters</li>
                  <li>• Amazon (for bows!)</li>
                </ul>
              </div>
              <div className="bg-pink-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Mid-Range</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• & Other Stories</li>
                  <li>• Reformation</li>
                  <li>• House of CB</li>
                  <li>• Rouje</li>
                  <li>• Sézane</li>
                  <li>• Anthropologie</li>
                </ul>
              </div>
              <div className="bg-pink-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Investment</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Self-Portrait</li>
                  <li>• LoveShackFancy</li>
                  <li>• Zimmermann</li>
                  <li>• Simone Rocha</li>
                  <li>• Miu Miu</li>
                  <li>• Sandy Liang</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Is the coquette aesthetic only for young women?</h3>
                <p className="text-gray-700">
                  Not at all! Coquette can be adapted for any age. For a more mature look, focus on quality fabrics, subtle bow details, and sophisticated color choices. Parisian coquette is particularly age-appropriate for all.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Can I wear coquette if I don't like pink?</h3>
                <p className="text-gray-700">
                  Yes! Try dark coquette with black, burgundy, and red. Or go for cream, white, and baby blue for a softer alternative. The aesthetic is about femininity and romantic details, not specifically about pink.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">How do I do coquette on a budget?</h3>
                <p className="text-gray-700">
                  Focus on accessories! Hair bows, ribbon chokers, and bow earrings are affordable and instantly create the vibe. Thrift stores often have vintage lace pieces. DIY ribbon bows for your shoes or bags.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Is coquette appropriate for work?</h3>
                <p className="text-gray-700">
                  It can be! Choose subtle touches like a blouse with a small bow, pearl jewelry, or ballet flats. Stick to neutral colors and professional silhouettes with romantic details. Avoid anything too revealing or costume-like.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">What body types suit coquette?</h3>
                <p className="text-gray-700">
                  Every body type can embrace coquette! The aesthetic is about embracing femininity, not fitting a specific shape. Choose pieces that flatter your figure - wrap styles for curves, structured pieces for straight figures, etc.
                </p>
              </div>
            </div>
          </section>

          {/* Related Content */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Style Guides</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/blog/clean-girl-aesthetic" className="bg-pink-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2">Clean Girl Aesthetic</h4>
                <p className="text-gray-600 text-sm">Minimal, polished, effortless</p>
              </Link>
              <Link to="/blog/old-money-aesthetic" className="bg-pink-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2">Old Money Aesthetic</h4>
                <p className="text-gray-600 text-sm">Timeless elegance</p>
              </Link>
              <Link to="/soft-summer-colors" className="bg-pink-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2">Soft Summer Colors</h4>
                <p className="text-gray-600 text-sm">Perfect palette for pink lovers</p>
              </Link>
            </div>
          </section>

        </div>
      </article>

      {/* Related Aesthetics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore Similar Aesthetics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/clean-girl-aesthetic" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Clean Girl Aesthetic</h3>
              <p className="text-gray-600 text-sm">Minimalist beauty and effortless style.</p>
            </Link>
            <Link to="/quiet-luxury-style" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Quiet Luxury Style</h3>
              <p className="text-gray-600 text-sm">Understated elegance and stealth wealth fashion.</p>
            </Link>
            <Link to="/old-money-aesthetic" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Old Money Aesthetic</h3>
              <p className="text-gray-600 text-sm">Timeless elegance and classic sophistication.</p>
            </Link>
            <Link to="/office-siren-aesthetic" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Office Siren Aesthetic</h3>
              <p className="text-gray-600 text-sm">Powerful and polished workwear style.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Tools for Shopping the Coquette Aesthetic
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Save your favorite feminine pieces, create outfit mood boards, and track prices on those dreamy coquette finds.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <a href="https://wontsy.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Wontsy</h3>
                <p className="text-sm text-gray-600 mb-3">Save coquette pieces from any store. Build romantic outfit looks and get alerts when prices drop on those ribbon tops and ballet flats.</p>
                <span className="text-pink-500 text-sm font-medium">Free · iOS, Android, Chrome, Safari</span>
              </a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Pinterest</h3>
                <p className="text-sm text-gray-600 mb-3">The ultimate coquette inspo source. Create boards for bows, lace, and all things feminine and romantic.</p>
                <span className="text-pink-500 text-sm font-medium">Free · iOS, Android, Web</span>
              </a>
              <a href="https://www.shoplook.io" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">ShopLook</h3>
                <p className="text-sm text-gray-600 mb-3">Create coquette outfit collages mixing pieces from different stores. Perfect for visualizing your aesthetic.</p>
                <span className="text-pink-500 text-sm font-medium">Free · Web</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoquetteAesthetic;
