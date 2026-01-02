import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const WhatToWearJobInterview = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              What to Wear to a{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(45deg, #4A5568, #2D3748)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Job Interview
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Make the perfect first impression - outfit ideas for every industry from corporate to creative.
            </p>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Interview Outfit Rules</h2>
          <div className="bg-blue-50 rounded-2xl p-8 mb-12">
            <ul className="space-y-3 text-gray-700">
              <li><span className="text-blue-600 mr-2">1.</span> Research the company dress code beforehand</li>
              <li><span className="text-blue-600 mr-2">2.</span> Dress one level above the daily dress code</li>
              <li><span className="text-blue-600 mr-2">3.</span> Keep it polished and professional</li>
              <li><span className="text-blue-600 mr-2">4.</span> Avoid distracting patterns or logos</li>
              <li><span className="text-blue-600 mr-2">5.</span> Make sure everything fits properly</li>
            </ul>
          </div>

          <div className="space-y-8 mb-12">
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate/Finance/Law</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Best Choices:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Tailored suit (navy, black, gray)</li>
                    <li>• Blazer with dress pants</li>
                    <li>• Sheath dress with blazer</li>
                    <li>• Classic pumps or loafers</li>
                    <li>• Minimal jewelry</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Colors:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Navy", "Black", "Charcoal", "White", "Burgundy"].map((c) => (
                      <span key={c} className="px-3 py-1 bg-white rounded-full text-sm">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative/Marketing/Tech</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Best Choices:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Smart casual separates</li>
                    <li>• Unstructured blazer with jeans</li>
                    <li>• A-line dress</li>
                    <li>• Clean sneakers or ankle boots</li>
                    <li>• Statement accessory</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Colors:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Navy", "Blush", "Sage", "Camel", "White"].map((c) => (
                      <span key={c} className="px-3 py-1 bg-white rounded-full text-sm">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Startup/Casual Office</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Best Choices:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Nice blouse with tailored pants</li>
                    <li>• Midi dress</li>
                    <li>• Dark jeans with blazer</li>
                    <li>• Clean, minimal shoes</li>
                    <li>• Polished but relaxed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Colors:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["White", "Light blue", "Gray", "Beige", "Black"].map((c) => (
                      <span key={c} className="px-3 py-1 bg-white rounded-full text-sm">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What to Avoid</h3>
            <ul className="space-y-2 text-gray-700">
              <li><span className="text-red-500 mr-2">✕</span> Too casual (flip flops, shorts, tank tops)</li>
              <li><span className="text-red-500 mr-2">✕</span> Overly revealing clothing</li>
              <li><span className="text-red-500 mr-2">✕</span> Strong perfume</li>
              <li><span className="text-red-500 mr-2">✕</span> Wrinkled or ill-fitting clothes</li>
              <li><span className="text-red-500 mr-2">✕</span> Distracting accessories</li>
            </ul>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Shop Interview Outfits</h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius helps you find professional pieces that fit your body type and skin tone!
            </p>
            <a href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(45deg, #4A5568, #2D3748)' }}>
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

export default WhatToWearJobInterview;
