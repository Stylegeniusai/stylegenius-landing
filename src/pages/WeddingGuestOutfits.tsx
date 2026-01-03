import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const WeddingGuestOutfits = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Wedding Guest{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(45deg, #F472B6, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Outfit Ideas
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              What to wear to a wedding - outfit ideas for every season, dress code, and venue.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/wedding-guest-hero.png`}
              alt="Wedding guest outfit ideas"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-pink-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Wedding Guest Dress Code Rules</h2>
            <ul className="space-y-3 text-gray-700">
              <li><span className="text-pink-600 mr-2">1.</span> Never wear white, ivory, or cream</li>
              <li><span className="text-pink-600 mr-2">2.</span> Check the dress code on the invitation</li>
              <li><span className="text-pink-600 mr-2">3.</span> Consider the venue and time of day</li>
              <li><span className="text-pink-600 mr-2">4.</span> Don't upstage the bride</li>
              <li><span className="text-pink-600 mr-2">5.</span> Wear comfortable shoes for dancing</li>
            </ul>
          </div>

          <div className="space-y-8 mb-12">
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Black Tie / Formal</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Floor-length evening gown</li>
                <li>• Elegant formal dress</li>
                <li>• Rich jewel tones or classic black</li>
                <li>• Statement jewelry</li>
                <li>• Heels and clutch</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cocktail / Semi-Formal</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Midi or knee-length dress</li>
                <li>• Dressy separates (silk top + tailored pants)</li>
                <li>• Elegant jumpsuit</li>
                <li>• Heels or dressy flats</li>
                <li>• Small handbag</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Casual / Garden / Beach</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Flowy maxi dress</li>
                <li>• Sundress with cardigan</li>
                <li>• Linen suit or separates</li>
                <li>• Wedges or block heels</li>
                <li>• Straw or woven bag</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best Colors for Weddings</h3>
              <div className="flex flex-wrap gap-2">
                {["Navy", "Burgundy", "Emerald", "Blush", "Dusty blue", "Mauve", "Sage", "Gold"].map((c) => (
                  <span key={c} className="px-3 py-1 bg-white rounded-full text-sm">{c}</span>
                ))}
              </div>
            </div>

            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Colors to Avoid</h3>
              <div className="flex flex-wrap gap-2">
                {["White", "Ivory", "Cream", "Black (for some)", "Red (controversial)"].map((c) => (
                  <span key={c} className="px-3 py-1 bg-white rounded-full text-sm">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Find Your Perfect Wedding Guest Outfit</h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius helps you find dresses that flatter your body type and skin tone!
            </p>
            <a href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(45deg, #F472B6, #EC4899)' }}>
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

export default WeddingGuestOutfits;
