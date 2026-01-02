import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const HourglassBodyType = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-6">
              Body Type Guide
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hourglass Body Type:{" "}
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
              The complete guide to dressing your hourglass figure - learn what silhouettes, cuts, and styles will flatter your curves.
            </p>
          </div>
        </div>
      </section>

      {/* What is Hourglass */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is an Hourglass Body Type?</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The hourglass body type is characterized by a well-defined waist with hips and bust of approximately equal width. This creates the classic "hourglass" silhouette that has been celebrated throughout fashion history.
            </p>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hourglass Characteristics</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="text-gray-700 space-y-2">
                  <li>• Shoulders and hips roughly same width</li>
                  <li>• Well-defined, narrow waist</li>
                  <li>• Fuller bust and hips</li>
                  <li>• Curved hips</li>
                </ul>
                <ul className="text-gray-700 space-y-2">
                  <li>• Weight distributes evenly</li>
                  <li>• Natural curves at bust and hips</li>
                  <li>• Waist is 8-10" smaller than hips</li>
                  <li>• Rounded bottom</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Celebrity Examples */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Hourglass Celebrities</h3>
            <div className="flex flex-wrap gap-3">
              {["Marilyn Monroe", "Scarlett Johansson", "Sofia Vergara", "Kim Kardashian", "Beyoncé", "Salma Hayek", "Dita Von Teese", "Blake Lively"].map((name) => (
                <span key={name} className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* What to Wear */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Best Styles for Hourglass</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tops & Blouses</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  V-necks and wrap tops
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Fitted shirts that show your waist
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Peplum tops
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Belted cardigans
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Scoop necks
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dresses</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Wrap dresses (your best friend!)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Fit-and-flare silhouettes
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Bodycon dresses
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  A-line with defined waist
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Belted shirt dresses
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bottoms</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  High-waisted jeans and pants
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Bootcut or flared jeans
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Pencil skirts
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  A-line skirts
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Wide-leg trousers with fitted waist
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Outerwear</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Belted coats and trenches
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Fitted blazers
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Wrap coats
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Cropped jackets
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Peplum jackets
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
                  Shapeless, boxy tops that hide your waist
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Empire waist dresses (waist hits wrong spot)
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Low-rise jeans (creates muffin top illusion)
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Oversized, baggy clothing
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Straight shift dresses with no waist
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Stiff, bulky fabrics
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Golden Rule</h3>
              <p className="text-gray-700">
                Always define your waist! Your waist is your greatest asset. Use belts, fitted clothing, and wrap styles to highlight it.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Balance is Key</h3>
              <p className="text-gray-700">
                Your body is already balanced - don't add volume to bust OR hips alone. Keep proportions even top and bottom.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fabric Choice</h3>
              <p className="text-gray-700">
                Choose fabrics with some stretch and drape. Stiff fabrics can add bulk where you don't need it.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tuck It In</h3>
              <p className="text-gray-700">
                French tuck or full tuck your tops into high-waisted bottoms to show off your waist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Find Clothes That Fit Your Hourglass Shape
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius shows you if clothes will flatter your hourglass figure while you browse - no more buying things that don't fit right!
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📐</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Body Type Match</h4>
                  <p className="text-sm text-gray-600">See if silhouettes will flatter your curves</p>
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

export default HourglassBodyType;
