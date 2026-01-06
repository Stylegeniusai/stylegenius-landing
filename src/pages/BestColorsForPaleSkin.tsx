import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const BestColorsForPaleSkin = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Best Colors for Pale Skin: Complete Guide 2026"
        description="Discover the most flattering colors for pale skin. Learn which shades make fair skin glow and which colors to avoid for your best look."
        keywords="best colors for pale skin, colors for fair skin, pale skin fashion, light skin tone colors, fair complexion colors, what colors suit pale skin"
        canonicalUrl="/best-colors-for-pale-skin"
        ogImage="/pale-skin-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-11-18",
          modifiedTime: "2026-01-06",
          section: "Color Analysis",
          tags: ["pale skin", "fair skin", "color guide", "skin tone"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Best Colors for Pale Skin", url: "/best-colors-for-pale-skin" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Best Colors for{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Pale Skin
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Find the perfect colors that make fair and pale skin glow - from soft pastels to rich jewel tones based on your undertone.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/pale-skin-hero.png`}
              alt="Best colors for pale skin guide"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Pale Skin Tones</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Having pale skin doesn't mean you're limited to boring colors. The key is understanding your undertone - whether you're cool, warm, or neutral - to find shades that enhance your natural beauty rather than wash you out.
          </p>

          {/* By Undertone */}
          <div className="space-y-8 mb-12">
            <div className="bg-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pale Skin with Cool Undertones</h3>
              <p className="text-gray-700 mb-4">If your veins appear blue/purple and silver jewelry flatters you:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Navy blue", "Emerald green", "Deep purple", "Berry", "True red", "Soft pink", "Icy blue", "Lavender"].map((color) => (
                  <span key={color} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{color}</span>
                ))}
              </div>
              <p className="text-sm text-gray-600"><strong>Avoid:</strong> Orange, mustard, warm browns, coral</p>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pale Skin with Warm Undertones</h3>
              <p className="text-gray-700 mb-4">If your veins appear green and gold jewelry flatters you:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Coral", "Peach", "Warm red", "Mustard", "Olive green", "Cream", "Turquoise", "Warm brown"].map((color) => (
                  <span key={color} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{color}</span>
                ))}
              </div>
              <p className="text-sm text-gray-600"><strong>Avoid:</strong> Black, cool pink, icy blue, silver-gray</p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pale Skin with Neutral Undertones</h3>
              <p className="text-gray-700 mb-4">If both gold and silver look good on you:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Soft white", "Blush pink", "Sage green", "Dusty blue", "Mauve", "Taupe", "Soft navy", "Rose"].map((color) => (
                  <span key={color} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{color}</span>
                ))}
              </div>
              <p className="text-sm text-gray-600"><strong>Avoid:</strong> Neon colors, very harsh contrasts</p>
            </div>
          </div>

          {/* Universal Tips */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Universal Tips for Pale Skin</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">✓</span>
                Jewel tones (emerald, sapphire, ruby) create beautiful contrast
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">✓</span>
                Navy is often more flattering than black
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">✓</span>
                Off-white and cream are softer alternatives to stark white
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">✓</span>
                Deep colors near your face create a healthy contrast
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">✓</span>
                Pastels work well but avoid anything too washed out
              </li>
            </ul>
          </div>

          {/* Colors to Avoid */}
          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Colors That Can Wash Out Pale Skin</h3>
            <ul className="space-y-2 text-gray-700">
              <li><span className="text-red-500 mr-2">✕</span> Beige and tan (can make you look sallow)</li>
              <li><span className="text-red-500 mr-2">✕</span> Neon colors (too harsh)</li>
              <li><span className="text-red-500 mr-2">✕</span> Colors too close to your skin tone</li>
              <li><span className="text-red-500 mr-2">✕</span> Some oranges (depends on undertone)</li>
            </ul>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Find Your Perfect Colors</h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius analyzes colors in real-time and shows you if they'll flatter your pale skin while you shop!
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🎨</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Skin Tone Match</h4>
                  <p className="text-sm text-gray-600">See if colors suit you</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">👗</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Virtual Try-On</h4>
                  <p className="text-sm text-gray-600">Try clothes digitally</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💰</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Price Tracking</h4>
                  <p className="text-sm text-gray-600">Track price drops</p>
                </div>
              </div>
            </div>

            <a href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }}>
                Add to Chrome - It's Free
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BestColorsForPaleSkin;
