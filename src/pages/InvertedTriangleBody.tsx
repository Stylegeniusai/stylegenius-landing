import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const InvertedTriangleBody = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

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
