import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";
const BODYTYPE_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/bodytype";

const InvertedTriangleBody = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Inverted Triangle Body: Complete Style Guide 2025"
        description="Discover how to dress your inverted triangle body shape. Learn the best clothing styles, fits, and fashion tips to balance your proportions."
        keywords="inverted triangle body, inverted triangle shape, broad shoulders, how to dress inverted triangle, V-shape body, top heavy body type"
        canonicalUrl="/inverted-triangle-body"
        ogImage="/inverted-triangle-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-11-17",
          modifiedTime: "2026-01-06",
          section: "Body Type",
          tags: ["inverted triangle", "body type", "style guide", "fashion tips"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Inverted Triangle Body", url: "/inverted-triangle-body" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-6">Body Type Guide</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Inverted Triangle{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Body Type
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The complete guide to dressing the inverted triangle shape - balance broad shoulders with the right silhouettes.
            </p>
          </div>
          {/* Hero Image */}
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/inverted-triangle-hero.png`}
              alt="Inverted triangle body type fashion guide"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is an Inverted Triangle Body?</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            The inverted triangle (also called V-shape) has shoulders wider than the hips. This athletic build is common among swimmers and those who do upper body workouts.
          </p>

          <div className="bg-pink-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Characteristics</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-gray-700 space-y-2">
                <li>• Broad shoulders</li>
                <li>• Narrow hips</li>
                <li>• Little waist definition</li>
                <li>• Athletic build</li>
              </ul>
              <ul className="text-gray-700 space-y-2">
                <li>• Fuller bust</li>
                <li>• Slim legs</li>
                <li>• Flat bottom</li>
                <li>• Strong back</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Celebrity Examples</h3>
            <div className="flex flex-wrap gap-3">
              {["Angelina Jolie", "Demi Moore", "Naomi Campbell", "Renée Zellweger", "Cameron Diaz"].map((name) => (
                <span key={name} className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">{name}</span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best Styles</h3>
              <ul className="text-gray-700 space-y-2">
                <li><span className="text-green-600 mr-2">✓</span> V-necks and scoop necklines</li>
                <li><span className="text-green-600 mr-2">✓</span> A-line skirts and dresses</li>
                <li><span className="text-green-600 mr-2">✓</span> Wide-leg pants</li>
                <li><span className="text-green-600 mr-2">✓</span> Details on lower half (pockets, patterns)</li>
                <li><span className="text-green-600 mr-2">✓</span> Wrap tops and dresses</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Avoid</h3>
              <ul className="text-gray-700 space-y-2">
                <li><span className="text-red-500 mr-2">✕</span> Boat necks and wide necklines</li>
                <li><span className="text-red-500 mr-2">✕</span> Shoulder pads</li>
                <li><span className="text-red-500 mr-2">✕</span> Cap sleeves</li>
                <li><span className="text-red-500 mr-2">✕</span> Skinny jeans alone</li>
                <li><span className="text-red-500 mr-2">✕</span> Halter tops</li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/* Style Tips with Images */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Best Styles for Inverted Triangle</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "A-Line Skirts", image: `${BODYTYPE_IMAGE_BASE}/invertedtriangle/a-line-skirts.png` },
              { name: "Bootcut Jeans", image: `${BODYTYPE_IMAGE_BASE}/invertedtriangle/bootcut-jeans.png` },
              { name: "Dark Tops, Bright Bottoms", image: `${BODYTYPE_IMAGE_BASE}/invertedtriangle/dark-tops--bright-bottoms.png` },
              { name: "Flared Pants", image: `${BODYTYPE_IMAGE_BASE}/invertedtriangle/flared-pants.png` },
              { name: "Hip Detailing", image: `${BODYTYPE_IMAGE_BASE}/invertedtriangle/hip-detailing.png` },
              { name: "V-Necklines", image: `${BODYTYPE_IMAGE_BASE}/invertedtriangle/v-necklines.png` },
              { name: "Wide-Leg Pants", image: `${BODYTYPE_IMAGE_BASE}/invertedtriangle/wide-leg-pants.png` },
              { name: "Wrap Dresses", image: `${BODYTYPE_IMAGE_BASE}/invertedtriangle/wrap-dresses.png` },
              { name: "Printed Bottoms", image: `${BODYTYPE_IMAGE_BASE}/invertedtriangle/printed-bottoms.png` },
            ].map((tip) => (
              <div key={tip.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={tip.image}
                  alt={`${tip.name} for inverted triangle body`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 text-center">{tip.name}</h4>
                </div>
              </div>
            ))}
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
              <p className="text-gray-600 text-sm">Hips wider than shoulders - the opposite of inverted triangle.</p>
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
              <p className="text-gray-600 text-sm">Find the perfect denim style for your shape.</p>
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
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Find Clothes That Balance Your Shape</h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius shows you which silhouettes will flatter your inverted triangle body!
            </p>
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

export default InvertedTriangleBody;
