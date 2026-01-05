import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const CleanGirlAesthetic = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Clean Girl Aesthetic: Complete Style & Beauty Guide 2025"
        description="Master the clean girl aesthetic with our complete guide. Learn the minimalist approach to beauty, skincare, and fashion that's taken over TikTok and Instagram."
        keywords="clean girl aesthetic, clean girl makeup, minimalist style, no makeup makeup, slick back bun, gold hoops, natural beauty, effortless style"
        canonicalUrl="/clean-girl-aesthetic"
        ogImage="/clean-girl-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-10-28",
          modifiedTime: "2025-01-01",
          section: "Fashion Aesthetics",
          tags: ["clean girl", "aesthetic", "minimalist", "natural beauty"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Clean Girl Aesthetic", url: "/clean-girl-aesthetic" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-neutral-50 to-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-stone-200 text-stone-800 rounded-full text-sm font-medium mb-6">
              Fashion Aesthetic
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Clean Girl{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #D4A574, #8B7355)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Aesthetic
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The ultimate guide to the clean girl aesthetic - effortless, polished, and minimal style that's taken over TikTok and Instagram.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/clean-girl-hero.png`}
              alt="Clean girl aesthetic guide"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* What is Clean Girl */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the Clean Girl Aesthetic?</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The clean girl aesthetic is all about looking polished and put-together with minimal effort - or at least, making it look that way. Think glowing skin, slicked-back hair, neutral tones, and simple, elevated basics. It's the "I woke up like this" look perfected.
            </p>

            <div className="bg-gradient-to-r from-stone-50 to-neutral-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Elements</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="text-gray-700 space-y-2">
                  <li>• Minimal, dewy makeup</li>
                  <li>• Slicked-back buns or sleek hair</li>
                  <li>• Neutral color palette</li>
                  <li>• Quality over quantity</li>
                </ul>
                <ul className="text-gray-700 space-y-2">
                  <li>• Gold minimalist jewelry</li>
                  <li>• Clean, simple silhouettes</li>
                  <li>• Natural, glowing skin</li>
                  <li>• Effortless elegance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* The Wardrobe */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Clean Girl Wardrobe Essentials</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tops</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  White and cream tank tops
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Fitted ribbed basics
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Oversized white button-downs
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Cashmere sweaters
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Simple bodysuits
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bottoms</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  High-waisted straight jeans
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Tailored trousers in neutrals
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Linen pants
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Midi slip skirts
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Tennis skirts
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dresses & Sets</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Slip dresses
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Matching lounge sets
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Linen midi dresses
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Tennis dress
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Simple maxi dresses
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accessories</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Gold hoop earrings
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Dainty layered necklaces
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Claw clips
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  Minimal leather bags
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">•</span>
                  White sneakers or ballet flats
                </li>
              </ul>
            </div>
          </div>

          {/* Color Palette */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The Clean Girl Color Palette</h3>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
              {[
                { name: "White", hex: "#FFFFFF" },
                { name: "Cream", hex: "#FFFDD0" },
                { name: "Beige", hex: "#F5F5DC" },
                { name: "Tan", hex: "#D2B48C" },
                { name: "Camel", hex: "#C19A6B" },
                { name: "Brown", hex: "#8B7355" },
                { name: "Black", hex: "#000000" },
                { name: "Gray", hex: "#808080" },
                { name: "Sage", hex: "#9CAF88" },
                { name: "Soft Pink", hex: "#FFE4E1" }
              ].map((color) => (
                <div key={color.name} className="text-center">
                  <div
                    className="w-full aspect-square rounded-lg shadow-sm border border-gray-200"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-xs text-gray-500 mt-1 block">{color.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beauty Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Clean Girl Beauty Look</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-stone-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Skin</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Dewy, glowing skin</li>
                <li>• Light coverage foundation or tinted moisturizer</li>
                <li>• Cream blush</li>
                <li>• Subtle highlighter</li>
                <li>• Well-groomed brows</li>
              </ul>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lips & Eyes</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Lip gloss or nude lip</li>
                <li>• Brown mascara</li>
                <li>• Subtle nude eyeshadow</li>
                <li>• Natural, feathered brows</li>
                <li>• No heavy liner</li>
              </ul>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hair</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Slicked-back bun</li>
                <li>• Claw clip updo</li>
                <li>• Sleek low ponytail</li>
                <li>• Natural waves</li>
                <li>• Healthy, shiny hair</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-stone-100 to-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Shop the Clean Girl Aesthetic
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius helps you find pieces that match the clean girl vibe - neutral basics that fit your body type and skin tone perfectly.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-stone-100 to-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Color Match</h4>
                  <p className="text-sm text-gray-600">Find the perfect neutral tones for your skin</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-stone-100 to-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👗</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Virtual Try-On</h4>
                  <p className="text-sm text-gray-600">Try clean girl staples before buying</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-stone-100 to-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💝</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Universal Wishlist</h4>
                  <p className="text-sm text-gray-600">Save pieces from any store</p>
                </div>
              </div>
            </div>

            <a href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn" target="_blank" rel="noopener noreferrer">
              <button
                className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(45deg, #D4A574, #8B7355)' }}
              >
                Add to Chrome - It's Free
              </button>
            </a>
            <p className="text-sm text-gray-500 mt-4">Works on Zara, H&M, ASOS, and 1000+ more stores</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CleanGirlAesthetic;
