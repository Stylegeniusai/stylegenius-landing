import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const FindYourPersonalStyle = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              How to Find Your{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Personal Style
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              A step-by-step guide to discovering your unique fashion identity and building a wardrobe you love.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/personal-style-hero.png`}
              alt="Find your personal style guide"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            <div className="bg-pink-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Create a Style Mood Board</h2>
              <p className="text-gray-700 mb-4">Save outfits that catch your eye on Pinterest, Instagram, or TikTok. After collecting 50+ images, look for patterns:</p>
              <ul className="text-gray-700 space-y-2">
                <li>• What colors appear most often?</li>
                <li>• What silhouettes do you gravitate towards?</li>
                <li>• Is there a recurring vibe? (minimal, romantic, edgy)</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Audit Your Current Closet</h2>
              <p className="text-gray-700 mb-4">Pull out the pieces you wear most and love most. Ask yourself:</p>
              <ul className="text-gray-700 space-y-2">
                <li>• What do these pieces have in common?</li>
                <li>• Why do you reach for these over others?</li>
                <li>• What makes you feel confident?</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Identify Your Lifestyle Needs</h2>
              <p className="text-gray-700 mb-4">Your wardrobe should match your actual life:</p>
              <ul className="text-gray-700 space-y-2">
                <li>• What do you do most days? (work, school, WFH)</li>
                <li>• What social events do you attend?</li>
                <li>• What's your climate?</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Know Your Body & Colors</h2>
              <p className="text-gray-700 mb-4">Understanding what flatters you physically:</p>
              <ul className="text-gray-700 space-y-2">
                <li>• Learn your body type and best silhouettes</li>
                <li>• Find your color season and best colors</li>
                <li>• Know your undertone (warm/cool/neutral)</li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 5: Define Your Style Words</h2>
              <p className="text-gray-700 mb-4">Choose 3 words that describe the style you want:</p>
              <div className="flex flex-wrap gap-2">
                {["Classic", "Minimalist", "Edgy", "Romantic", "Bohemian", "Sporty", "Elegant", "Creative", "Relaxed", "Bold"].map((word) => (
                  <span key={word} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{word}</span>
                ))}
              </div>
            </div>

            <div className="bg-rose-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 6: Shop Intentionally</h2>
              <p className="text-gray-700 mb-4">Before buying, ask:</p>
              <ul className="text-gray-700 space-y-2">
                <li>• Does this match my style words?</li>
                <li>• Can I wear it with 3+ items I already own?</li>
                <li>• Does it flatter my body and coloring?</li>
                <li>• Will I actually wear this in my real life?</li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Shop Your Personal Style</h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius helps you find pieces that match your body, coloring, and personal aesthetic!
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

export default FindYourPersonalStyle;
