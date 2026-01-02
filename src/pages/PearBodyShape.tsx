import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const PearBodyShape = () => {
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
              Pear Body Shape:{" "}
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
              The complete guide to dressing your pear shape - learn how to balance your silhouette and highlight your best features.
            </p>
          </div>
        </div>
      </section>

      {/* What is Pear Shape */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a Pear Body Shape?</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The pear body shape (also called triangle or A-shape) is characterized by hips that are wider than the shoulders and bust. This is one of the most common body shapes among women.
            </p>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pear Shape Characteristics</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="text-gray-700 space-y-2">
                  <li>• Hips wider than shoulders</li>
                  <li>• Smaller bust relative to hips</li>
                  <li>• Defined waist</li>
                  <li>• Rounded hips and thighs</li>
                </ul>
                <ul className="text-gray-700 space-y-2">
                  <li>• Weight collects in lower body</li>
                  <li>• Slimmer upper body</li>
                  <li>• Often has a flat stomach</li>
                  <li>• Fuller bottom and thighs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Celebrity Examples */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pear Shape Celebrities</h3>
            <div className="flex flex-wrap gap-3">
              {["Jennifer Lopez", "Shakira", "Rihanna", "Kim Kardashian", "Beyoncé", "Christina Aguilera", "America Ferrera", "Kate Middleton"].map((name) => (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Best Styles for Pear Shape</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tops & Blouses</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Boat necks and wide necklines
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Off-shoulder tops
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Statement sleeves (puff, bell)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Bright colors and prints on top
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Structured shoulders
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dresses</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  A-line dresses
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Fit-and-flare styles
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Wrap dresses
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Empire waist dresses
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Dresses with detailed necklines
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bottoms</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Dark-colored pants and jeans
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Bootcut and flare jeans
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  A-line skirts
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Wide-leg trousers
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  High-waisted styles
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Outerwear</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Structured blazers
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Jackets that hit at the waist
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  A-line coats
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Shoulder detailing
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Cropped jackets
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
                  Skinny jeans (make hips look wider)
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Pencil skirts without structure
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Tapered pants
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Hip pockets or embellishments
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Horizontal stripes on bottom
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Pleated pants
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Balance Your Silhouette</h3>
              <p className="text-gray-700">
                Add visual weight to your upper body with bright colors, prints, and structured shoulders to balance your hips.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Draw Attention Up</h3>
              <p className="text-gray-700">
                Use statement necklaces, earrings, and interesting necklines to keep the eye focused on your upper body.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dark on Bottom</h3>
              <p className="text-gray-700">
                Wear darker colors on your lower half and lighter or brighter colors on top to create balance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Embrace Your Waist</h3>
              <p className="text-gray-700">
                Your defined waist is an asset! Highlight it with belts and fitted styles.
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
              Find Clothes That Flatter Your Pear Shape
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius shows you if clothes will balance your silhouette while you browse - no more guessing!
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

export default PearBodyShape;
