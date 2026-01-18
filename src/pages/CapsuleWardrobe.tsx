import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const CapsuleWardrobe = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="How to Build a Capsule Wardrobe: Complete Guide 2026"
        description="Learn how to create a minimalist capsule wardrobe with versatile pieces you love. Our guide covers essential items, color coordination, and styling tips."
        keywords="capsule wardrobe, minimalist wardrobe, wardrobe essentials, capsule closet, minimalist fashion, wardrobe basics, mix and match outfits"
        canonicalUrl="/capsule-wardrobe"
        ogImage="/capsule-wardrobe-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-11-15",
          modifiedTime: "2026-01-06",
          section: "Style Guides",
          tags: ["capsule wardrobe", "minimalist", "wardrobe basics", "style guide"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Capsule Wardrobe", url: "/capsule-wardrobe" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              How to Build a{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Capsule Wardrobe
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The complete guide to creating a minimalist wardrobe with pieces you love - fewer clothes, more outfits, zero decision fatigue.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/capsule-hero.png`}
              alt="Capsule wardrobe guide"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* What is a Capsule Wardrobe */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a Capsule Wardrobe?</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              A capsule wardrobe is a curated collection of essential, versatile pieces that you love wearing and that all work together. The concept was popularized by Susie Faux in the 1970s and later by Donna Karan's "Seven Easy Pieces" collection.
            </p>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits of a Capsule Wardrobe</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="text-gray-700 space-y-2">
                  <li>• Less decision fatigue</li>
                  <li>• Everything works together</li>
                  <li>• More space in your closet</li>
                  <li>• Save money long-term</li>
                </ul>
                <ul className="text-gray-700 space-y-2">
                  <li>• Always look put-together</li>
                  <li>• Know exactly what you need</li>
                  <li>• Higher quality pieces</li>
                  <li>• More sustainable fashion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* The Essential Pieces */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The 30-Piece Capsule Wardrobe</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tops (8-10 pieces)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">1.</span>
                  White t-shirt (fitted)
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">2.</span>
                  Black t-shirt
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">3.</span>
                  Striped top
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">4.</span>
                  White button-down shirt
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">5.</span>
                  Silk or satin blouse
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">6.</span>
                  Cashmere sweater
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">7.</span>
                  Chunky knit sweater
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">8.</span>
                  Tank top/camisole
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bottoms (5-6 pieces)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">1.</span>
                  Blue jeans (straight or slim)
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">2.</span>
                  Black jeans or trousers
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">3.</span>
                  Tailored trousers (neutral)
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">4.</span>
                  Midi skirt
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">5.</span>
                  Shorts (seasonal)
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dresses (3-4 pieces)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">1.</span>
                  Little black dress
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">2.</span>
                  Casual day dress
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">3.</span>
                  Wrap dress
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">4.</span>
                  Summer dress (seasonal)
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Outerwear (3-4 pieces)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">1.</span>
                  Blazer (navy or black)
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">2.</span>
                  Trench coat
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">3.</span>
                  Denim jacket
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">4.</span>
                  Winter coat
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Shoes (4-5 pairs)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">1.</span>
                  White sneakers
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">2.</span>
                  Black heels or loafers
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">3.</span>
                  Ankle boots
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">4.</span>
                  Sandals (seasonal)
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">5.</span>
                  Ballet flats
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accessories</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">1.</span>
                  Structured handbag
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">2.</span>
                  Crossbody bag
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">3.</span>
                  Belt (leather)
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">4.</span>
                  Simple jewelry set
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">5.</span>
                  Scarf
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Build Your Capsule</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 1: Audit Your Current Closet</h3>
              <p className="text-gray-700">Take everything out and only keep pieces you love, that fit well, and that you've worn in the last year.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 2: Define Your Color Palette</h3>
              <p className="text-gray-700">Choose 2-3 neutral base colors and 2-3 accent colors that all work together and suit your skin tone.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 3: Identify Gaps</h3>
              <p className="text-gray-700">Make a list of essential pieces you're missing and prioritize what to buy first.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 4: Shop Intentionally</h3>
              <p className="text-gray-700">Only buy pieces that fill gaps in your wardrobe, fit your body type, and work with multiple existing pieces.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 5: Review Seasonally</h3>
              <p className="text-gray-700">Swap seasonal pieces and reassess what's working and what isn't every few months.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Style Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/find-your-personal-style" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">Find Your Personal Style</h3>
              <p className="text-gray-600 text-sm">Discover your unique style identity and aesthetic.</p>
            </Link>
            <Link to="/what-colors-suit-me" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">What Colors Suit Me?</h3>
              <p className="text-gray-600 text-sm">Find the perfect neutral base for your capsule.</p>
            </Link>
            <Link to="/quiet-luxury-style" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">Quiet Luxury Style</h3>
              <p className="text-gray-600 text-sm">Minimalist luxury that's perfect for capsule wardrobes.</p>
            </Link>
            <Link to="/kibbe-body-types" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">Kibbe Body Types</h3>
              <p className="text-gray-600 text-sm">Find silhouettes that flatter your body type.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Apps to Help Build Your Capsule Wardrobe
            </h2>
            <p className="text-gray-600 text-center mb-8">
              These tools make it easier to plan outfits, track what you want, and build a wardrobe you love.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <a href="https://wontsy.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Wontsy</h3>
                <p className="text-sm text-gray-600 mb-3">Save items from any store, build outfit looks, and track prices. Great for planning capsule purchases across different shops.</p>
                <span className="text-pink-500 text-sm font-medium">Free · iOS, Android, Chrome, Safari</span>
              </a>
              <a href="https://www.cladwell.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Cladwell</h3>
                <p className="text-sm text-gray-600 mb-3">Daily outfit suggestions based on your existing wardrobe. Helps you see what you already have and what gaps to fill.</p>
                <span className="text-pink-500 text-sm font-medium">Free + Premium · iOS, Android</span>
              </a>
              <a href="https://whering.co.uk" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Whering</h3>
                <p className="text-sm text-gray-600 mb-3">Digital wardrobe app that helps you catalog what you own and create outfit combinations from your closet.</p>
                <span className="text-pink-500 text-sm font-medium">Free · iOS, Android</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CapsuleWardrobe;
