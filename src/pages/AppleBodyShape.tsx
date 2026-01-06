import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";
const BODYTYPE_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/bodytype";

const AppleBodyShape = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Apple Body Shape: Complete Style Guide 2025"
        description="Discover how to dress your apple body shape. Learn the best clothing styles, fits, and fashion tips to flatter your figure and feel confident."
        keywords="apple body shape, apple body type, how to dress apple shape, round body type, apple figure fashion, apple body style tips"
        canonicalUrl="/apple-body-shape"
        ogImage="/apple-body-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-11-14",
          modifiedTime: "2026-01-06",
          section: "Body Type",
          tags: ["apple shape", "body type", "style guide", "fashion tips"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Apple Body Shape", url: "/apple-body-shape" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-6">
              Body Type Guide
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Apple Body Shape:{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Style Guide
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The complete guide to dressing your apple shape - learn how to highlight your assets and create a balanced silhouette.
            </p>
          </div>
          {/* Hero Image */}
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/apple-hero.png`}
              alt="Apple body shape fashion guide"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* What is Apple Shape */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is an Apple Body Shape?</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The apple body shape (also called round or oval) carries weight primarily around the midsection while having slimmer legs and arms. This body type often has a fuller bust and less defined waist.
            </p>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Apple Shape Characteristics</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="text-gray-700 space-y-2">
                  <li>• Fuller midsection</li>
                  <li>• Less defined waist</li>
                  <li>• Broader shoulders</li>
                  <li>• Fuller bust</li>
                </ul>
                <ul className="text-gray-700 space-y-2">
                  <li>• Slimmer hips and legs</li>
                  <li>• Toned arms</li>
                  <li>• Flat bottom</li>
                  <li>• Weight carried in middle</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Celebrity Examples */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Apple Shape Celebrities</h3>
            <div className="flex flex-wrap gap-3">
              {["Oprah Winfrey", "Rebel Wilson", "Melissa McCarthy", "Amy Schumer", "Adele", "Queen Latifah", "Kate Winslet", "Drew Barrymore"].map((name) => (
                <span key={name} className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* What to Wear - with Images */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Best Styles for Apple Shape</h2>

          {/* Style Tips with Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "A-Line Everything", image: `${BODYTYPE_IMAGE_BASE}/round/a-line-everything.png` },
              { name: "Bootcut Jeans", image: `${BODYTYPE_IMAGE_BASE}/round/bootcut-jeans.png` },
              { name: "Empire Waist Dresses", image: `${BODYTYPE_IMAGE_BASE}/round/empire-waist-dresses.png` },
              { name: "Flowy Fabrics", image: `${BODYTYPE_IMAGE_BASE}/round/flowy-fabrics.png` },
              { name: "Layered Outfits", image: `${BODYTYPE_IMAGE_BASE}/round/layered-outfits.png` },
              { name: "V-Neck Everything", image: `${BODYTYPE_IMAGE_BASE}/round/v-neck-everything.png` },
              { name: "Wrap Tops", image: `${BODYTYPE_IMAGE_BASE}/round/wrap-tops.png` },
              { name: "Structured Jackets", image: `${BODYTYPE_IMAGE_BASE}/round/structured-jackets.png` },
              { name: "Statement Necklaces", image: `${BODYTYPE_IMAGE_BASE}/round/statement-necklaces.png` },
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 text-center">{item.name}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tops & Blouses</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  V-necks and deep necklines
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Empire waist tops
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Flowy, draped fabrics
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Tops that skim (not cling)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Wrap tops
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dresses</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Empire waist dresses
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  A-line and fit-and-flare
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Wrap dresses
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Shift dresses
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  V-neck or sweetheart necklines
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bottoms</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Bootcut and straight-leg jeans
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Mid-rise waistbands
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Wide-leg trousers
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  A-line skirts
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Flat-front pants
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Outerwear</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Single-breasted coats
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Open cardigans and long jackets
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Structured blazers
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  A-line or swing coats
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Waterfall cardigans
                </li>
              </ul>
            </div>
          </div>

          {/* What to Avoid */}
          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Styles to Be Careful With</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Clingy, tight fabrics around middle
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Wide belts at the waist
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Cropped tops
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  High-waisted pants with tucked-in tops
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Boxy, shapeless clothing
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Double-breasted jackets
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Style Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pro Styling Tips</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Show Off Your Legs</h3>
              <p className="text-gray-700">
                Your legs are your best asset! Wear skirts and dresses that show them off, and choose fitted pants.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Create Vertical Lines</h3>
              <p className="text-gray-700">
                Long necklaces, open jackets, and vertical details elongate your torso and create a slimming effect.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Draw Attention Up</h3>
              <p className="text-gray-700">
                Use statement necklaces, scarves, and interesting necklines to draw the eye upward to your face.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Fabrics</h3>
              <p className="text-gray-700">
                Choose structured fabrics that drape well and don't cling. Good fabric can make all the difference!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Body Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore Other Body Types</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/hourglass-body-type" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Hourglass Body Type</h3>
              <p className="text-gray-600 text-sm">Balanced bust and hips with defined waist - style tips.</p>
            </Link>
            <Link to="/pear-body-shape" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Pear Body Shape</h3>
              <p className="text-gray-600 text-sm">Hips wider than shoulders - balance your silhouette.</p>
            </Link>
            <Link to="/rectangle-body-type" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Rectangle Body Type</h3>
              <p className="text-gray-600 text-sm">Athletic and straight - how to create curves with clothing.</p>
            </Link>
            <Link to="/kibbe-body-types" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Kibbe Body Types</h3>
              <p className="text-gray-600 text-sm">Discover your Kibbe type for a more detailed style analysis.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Style Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/best-jeans-for-body-type" className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Best Jeans for Your Body</h3>
              <p className="text-gray-600 text-sm">Find the perfect denim style for your apple shape.</p>
            </Link>
            <Link to="/capsule-wardrobe" className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Build a Capsule Wardrobe</h3>
              <p className="text-gray-600 text-sm">Create a versatile wardrobe that flatters your shape.</p>
            </Link>
            <Link to="/what-colors-suit-me" className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">What Colors Suit Me?</h3>
              <p className="text-gray-600 text-sm">Find your perfect color palette to complement your style.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Find Clothes That Flatter Your Apple Shape
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius shows you if clothes will work for your body type while you browse - shop with confidence!
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📐</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Body Type Match</h4>
                  <p className="text-sm text-gray-600">See if silhouettes will flatter your shape</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👗</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Virtual Try-On</h4>
                  <p className="text-sm text-gray-600">Try clothes virtually before buying</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💝</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Universal Wishlist</h4>
                  <p className="text-sm text-gray-600">Save favorites from any store</p>
                </div>
              </div>
            </div>

            <a href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn" target="_blank" rel="noopener noreferrer">
              <button
                className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }}
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

export default AppleBodyShape;
