import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const BestJeansForBodyType = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Best Jeans for Your Body Type: Complete Guide 2026"
        description="Find the perfect jeans for your body shape. Our guide covers the best denim styles for pear, apple, hourglass, rectangle, and inverted triangle figures."
        keywords="best jeans for body type, jeans for pear shape, jeans for hourglass, high waisted jeans, bootcut jeans, skinny jeans body type"
        canonicalUrl="/best-jeans-for-body-type"
        ogImage="/jeans-guide-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-11-22",
          modifiedTime: "2026-01-06",
          section: "Body Type",
          tags: ["jeans", "denim", "body type", "shopping guide"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Best Jeans for Body Type", url: "/best-jeans-for-body-type" }
        ]}
      />
      <Navigation />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-100 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-blue-200 text-blue-800 rounded-full text-sm font-medium mb-6">Shopping Guide</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Best Jeans for{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(45deg, #4169E1, #6B5B95)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Your Body Type
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Find the perfect jeans for your body shape - from high-rise to bootcut, we'll help you find your most flattering fit.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/jeans-hero.png`}
              alt="Best jeans for every body type guide"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Finding Your Perfect Jeans</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            The right jeans can be transformative - they can elongate legs, balance proportions, and boost confidence. The key is understanding which styles work best for your unique body shape. Here's your complete guide to jean shopping.
          </p>

          <div className="space-y-12">
            <div className="bg-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hourglass Body</h3>
              <p className="text-gray-700 mb-4">Balanced shoulders and hips with a defined waist.</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Best Styles</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li><span className="text-green-600 mr-2">✓</span> High-rise to showcase waist</li>
                    <li><span className="text-green-600 mr-2">✓</span> Straight-leg for balance</li>
                    <li><span className="text-green-600 mr-2">✓</span> Bootcut to balance hips</li>
                    <li><span className="text-green-600 mr-2">✓</span> Curvy fit jeans</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Avoid</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li><span className="text-red-500 mr-2">✕</span> Low-rise (creates muffin top)</li>
                    <li><span className="text-red-500 mr-2">✕</span> Overly baggy styles</li>
                    <li><span className="text-red-500 mr-2">✕</span> Stiff, non-stretch denim</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pear Shape</h3>
              <p className="text-gray-700 mb-4">Hips wider than shoulders with a defined waist.</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Best Styles</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li><span className="text-green-600 mr-2">✓</span> Bootcut and flares</li>
                    <li><span className="text-green-600 mr-2">✓</span> Wide-leg styles</li>
                    <li><span className="text-green-600 mr-2">✓</span> Mid to high-rise</li>
                    <li><span className="text-green-600 mr-2">✓</span> Dark wash denim</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Avoid</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li><span className="text-red-500 mr-2">✕</span> Skinny jeans alone</li>
                    <li><span className="text-red-500 mr-2">✕</span> Heavy hip embellishments</li>
                    <li><span className="text-red-500 mr-2">✕</span> Light wash on lower half</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Apple Shape</h3>
              <p className="text-gray-700 mb-4">Fuller midsection with slim legs.</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Best Styles</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li><span className="text-green-600 mr-2">✓</span> High-rise with tummy control</li>
                    <li><span className="text-green-600 mr-2">✓</span> Straight-leg or bootcut</li>
                    <li><span className="text-green-600 mr-2">✓</span> Stretch denim for comfort</li>
                    <li><span className="text-green-600 mr-2">✓</span> Wide waistband</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Avoid</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li><span className="text-red-500 mr-2">✕</span> Low-rise styles</li>
                    <li><span className="text-red-500 mr-2">✕</span> Super skinny throughout</li>
                    <li><span className="text-red-500 mr-2">✕</span> Front pocket details</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rectangle Body</h3>
              <p className="text-gray-700 mb-4">Similar measurements throughout with less defined waist.</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Best Styles</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li><span className="text-green-600 mr-2">✓</span> Boyfriend and mom jeans</li>
                    <li><span className="text-green-600 mr-2">✓</span> Wide-leg styles</li>
                    <li><span className="text-green-600 mr-2">✓</span> Cargo and utility jeans</li>
                    <li><span className="text-green-600 mr-2">✓</span> Belted styles</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Avoid</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li><span className="text-red-500 mr-2">✕</span> Super straight, boxy cuts</li>
                    <li><span className="text-red-500 mr-2">✕</span> Very low-rise</li>
                    <li><span className="text-red-500 mr-2">✕</span> Plain, minimal designs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Inverted Triangle</h3>
              <p className="text-gray-700 mb-4">Broader shoulders with narrower hips.</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Best Styles</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li><span className="text-green-600 mr-2">✓</span> Flares and wide-leg</li>
                    <li><span className="text-green-600 mr-2">✓</span> Light wash and white denim</li>
                    <li><span className="text-green-600 mr-2">✓</span> Hip pocket details</li>
                    <li><span className="text-green-600 mr-2">✓</span> Embellished styles</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Avoid</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li><span className="text-red-500 mr-2">✕</span> Super skinny throughout</li>
                    <li><span className="text-red-500 mr-2">✕</span> Very dark solid washes</li>
                    <li><span className="text-red-500 mr-2">✕</span> Minimal, plain pockets</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Universal Jean Shopping Tips</h3>
            <ul className="text-gray-700 space-y-3">
              <li><span className="text-blue-600 mr-2">1.</span> <strong>Try sitting down</strong> - Make sure they're comfortable when seated</li>
              <li><span className="text-blue-600 mr-2">2.</span> <strong>Check the stretch recovery</strong> - Good jeans bounce back after wearing</li>
              <li><span className="text-blue-600 mr-2">3.</span> <strong>Mind the rise</strong> - Your comfort zone matters more than trends</li>
              <li><span className="text-blue-600 mr-2">4.</span> <strong>Consider your shoes</strong> - Hem length should work with your usual footwear</li>
              <li><span className="text-blue-600 mr-2">5.</span> <strong>Look at back pockets</strong> - Placement affects how your rear looks</li>
            </ul>
          </div>
        </div>
      </article>

      {/* Tools Section */}
      <section className="py-16 bg-gradient-to-br from-blue-100 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Helpful Shopping Tools
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Apps to help you find the perfect jeans for your body type.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="https://wontsy.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Wontsy</h3>
                <p className="text-sm text-gray-600 mb-3">Save jeans from any store, compare styles across brands, and track prices for the best deals.</p>
                <span className="text-blue-500 text-sm font-medium">Free · iOS, Android, Chrome, Safari</span>
              </a>
              <a href="https://www.goodamerican.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Good American</h3>
                <p className="text-sm text-gray-600 mb-3">Inclusive denim brand with jeans designed for every body type. Great fit guides and size range.</p>
                <span className="text-blue-500 text-sm font-medium">Premium · All Body Types</span>
              </a>
              <a href="https://www.levis.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Levi's</h3>
                <p className="text-sm text-gray-600 mb-3">Classic denim with extensive fit guides. Their website helps you find the right cut for your shape.</p>
                <span className="text-blue-500 text-sm font-medium">Mid-range · Womenswear</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BestJeansForBodyType;
