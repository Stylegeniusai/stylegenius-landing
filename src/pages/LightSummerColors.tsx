import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const LightSummerColors = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Light Summer Colors: Complete Palette Guide 2025"
        description="Discover the perfect light summer color palette. Learn which soft, cool colors flatter light summer skin tones and how to build a beautiful wardrobe."
        keywords="light summer colors, light summer palette, summer color analysis, soft cool colors, light summer celebrity, light summer wardrobe"
        canonicalUrl="/light-summer-colors"
        ogImage="/light-summer-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-11-07",
          modifiedTime: "2025-01-01",
          section: "Color Analysis",
          tags: ["light summer", "color analysis", "seasonal colors", "cool colors"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Light Summer Colors", url: "/light-summer-colors" }
        ]}
      />
      <Navigation />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-sky-100 to-rose-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-sky-200 text-sky-800 rounded-full text-sm font-medium mb-6">Color Analysis</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Light Summer{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(45deg, #87CEEB, #DDA0DD)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Color Palette
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The complete guide to Light Summer colors - soft, delicate, and airy shades for naturally fair, cool-toned beauty.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/light-summer-hero.png`}
              alt="Light Summer color palette guide"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Light Summer?</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Light Summer is one of the three Summer sub-seasons in 12-season color analysis. Light Summers have delicate, fair coloring with cool undertones and low contrast between their features. They look best in soft, light, cool-toned colors that won't overwhelm their natural coloring.
          </p>

          <div className="bg-sky-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Light Summer Characteristics</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Skin Tones</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Fair to light medium</li>
                  <li>• Cool pink undertones</li>
                  <li>• May have light freckles</li>
                  <li>• Burns easily in sun</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Eyes & Hair</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Light blonde to medium ash brown hair</li>
                  <li>• Blue, gray-blue, or light green eyes</li>
                  <li>• Low contrast between features</li>
                  <li>• Soft, muted overall appearance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Best Colors</h3>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-6">
              {[
                { name: "Soft White", hex: "#F5F5F5" },
                { name: "Powder Blue", hex: "#B0E0E6" },
                { name: "Periwinkle", hex: "#CCCCFF" },
                { name: "Lavender", hex: "#E6E6FA" },
                { name: "Soft Pink", hex: "#FFB6C1" },
                { name: "Rose", hex: "#E8ADAA" },
                { name: "Mauve", hex: "#E0B0FF" },
                { name: "Soft Teal", hex: "#6B9B9B" },
                { name: "Dusty Blue", hex: "#6B8BA4" },
                { name: "Slate", hex: "#708090" },
                { name: "Soft Navy", hex: "#4A5568" },
                { name: "Lilac", hex: "#C8A2C8" },
                { name: "Mint", hex: "#98FB98" },
                { name: "Seafoam", hex: "#9FE2BF" },
                { name: "Silver", hex: "#C0C0C0" },
                { name: "Soft Cocoa", hex: "#9E8B8B" }
              ].map((color) => (
                <div key={color.name} className="text-center">
                  <div className="w-full aspect-square rounded-lg mb-1 border border-gray-200 shadow-sm" style={{ backgroundColor: color.hex }} />
                  <span className="text-xs text-gray-600">{color.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Colors to Embrace</h3>
              <ul className="text-gray-700 space-y-2">
                <li><span className="text-green-600 mr-2">✓</span> Soft, muted pastels</li>
                <li><span className="text-green-600 mr-2">✓</span> Cool-toned neutrals</li>
                <li><span className="text-green-600 mr-2">✓</span> Dusty rose and mauve</li>
                <li><span className="text-green-600 mr-2">✓</span> Soft blues and periwinkle</li>
                <li><span className="text-green-600 mr-2">✓</span> Light grayed colors</li>
                <li><span className="text-green-600 mr-2">✓</span> Silver metallics</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Colors to Avoid</h3>
              <ul className="text-gray-700 space-y-2">
                <li><span className="text-red-500 mr-2">✕</span> Black and stark white</li>
                <li><span className="text-red-500 mr-2">✕</span> Warm oranges and yellows</li>
                <li><span className="text-red-500 mr-2">✕</span> Bold, saturated colors</li>
                <li><span className="text-red-500 mr-2">✕</span> Warm earth tones</li>
                <li><span className="text-red-500 mr-2">✕</span> Gold jewelry</li>
                <li><span className="text-red-500 mr-2">✕</span> Neon and electric shades</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Light Summer Celebrities</h3>
            <div className="flex flex-wrap gap-3">
              {["Elle Fanning", "Naomi Watts", "Cate Blanchett", "Kate Middleton", "Emily Blunt", "January Jones", "Ashlee Simpson", "Kristen Bell"].map((name) => (
                <span key={name} className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">{name}</span>
              ))}
            </div>
          </div>

          <div className="bg-rose-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Makeup Tips for Light Summer</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Best Lip Colors</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Soft rose and pink</li>
                  <li>• Mauve and dusty berry</li>
                  <li>• Light plum</li>
                  <li>• Cool nude shades</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Eye Makeup</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Soft gray and taupe</li>
                  <li>• Lavender and soft purple</li>
                  <li>• Dusty rose and mauve</li>
                  <li>• Silver shimmer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gradient-to-br from-sky-100 to-rose-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Shop Your Light Summer Colors</h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius shows you which clothes match your Light Summer coloring as you shop online!
            </p>
            <a href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(45deg, #87CEEB, #DDA0DD)' }}>
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

export default LightSummerColors;
