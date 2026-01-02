import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const BestJeansForBodyType = () => {
  return (
    <div className="min-h-screen bg-gray-50">
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

      <section className="py-16 bg-gradient-to-br from-blue-100 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Find Your Perfect Jeans</h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius analyzes your body type and shows you which jeans will fit and flatter as you shop online!
            </p>
            <a href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(45deg, #4169E1, #6B5B95)' }}>
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

export default BestJeansForBodyType;
