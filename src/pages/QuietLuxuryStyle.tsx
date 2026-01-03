import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const QuietLuxuryStyle = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-stone-100 to-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-stone-200 text-stone-800 rounded-full text-sm font-medium mb-6">Fashion Aesthetic</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Quiet Luxury{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(45deg, #8B7355, #2F4F4F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Style Guide
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The complete guide to quiet luxury - understated elegance that whispers wealth rather than shouts it.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/quiet-luxury-hero.png`}
              alt="Quiet luxury style guide"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Quiet Luxury?</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Quiet luxury (also known as stealth wealth) is about looking expensive without obvious logos or flashy designer pieces. It prioritizes exceptional quality, perfect fit, and timeless design over trends. Think "if you know, you know" rather than "look at my label."
          </p>

          <div className="bg-stone-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Principles</h3>
            <ul className="text-gray-700 space-y-3">
              <li><span className="text-stone-600 mr-2">•</span> Quality over quantity</li>
              <li><span className="text-stone-600 mr-2">•</span> No visible logos or branding</li>
              <li><span className="text-stone-600 mr-2">•</span> Timeless over trendy</li>
              <li><span className="text-stone-600 mr-2">•</span> Perfect fit and tailoring</li>
              <li><span className="text-stone-600 mr-2">•</span> Natural, luxurious fabrics</li>
              <li><span className="text-stone-600 mr-2">•</span> Understated color palette</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-stone-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quiet Luxury Essentials</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Cashmere sweaters</li>
                <li>• Silk blouses</li>
                <li>• Wool tailored trousers</li>
                <li>• Quality leather accessories</li>
                <li>• Perfectly fitted blazers</li>
                <li>• Simple gold jewelry</li>
                <li>• Leather loafers or pumps</li>
              </ul>
            </div>

            <div className="bg-white border border-stone-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Color Palette</h3>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { name: "Cream", hex: "#FFFDD0" },
                  { name: "Camel", hex: "#C19A6B" },
                  { name: "Navy", hex: "#000080" },
                  { name: "Black", hex: "#000000" },
                  { name: "White", hex: "#FFFFFF" },
                  { name: "Gray", hex: "#808080" },
                  { name: "Tan", hex: "#D2B48C" },
                  { name: "Burgundy", hex: "#722F37" }
                ].map((color) => (
                  <div key={color.name} className="text-center">
                    <div className="w-full aspect-square rounded-lg mb-1 border border-gray-200" style={{ backgroundColor: color.hex }} />
                    <span className="text-xs text-gray-500">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Brands Known for Quiet Luxury</h3>
            <div className="flex flex-wrap gap-3">
              {["The Row", "Loro Piana", "Brunello Cucinelli", "Jil Sander", "Totême", "Khaite", "Max Mara", "COS"].map((brand) => (
                <span key={brand} className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gradient-to-br from-stone-100 to-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Build Your Quiet Luxury Wardrobe</h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius helps you find timeless pieces at every price point that fit your body perfectly!
            </p>
            <a href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(45deg, #8B7355, #2F4F4F)' }}>
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

export default QuietLuxuryStyle;
