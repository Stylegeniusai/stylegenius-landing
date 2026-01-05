import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const Spring2025FashionTrends = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Spring 2025 Fashion Trends: What to Wear This Season"
        description="Discover the hottest spring 2025 fashion trends. From runway to real life - learn about the colors, styles, and pieces you need for the new season."
        keywords="spring 2025 fashion trends, spring fashion, spring outfit ideas, 2025 style trends, seasonal fashion, runway trends"
        canonicalUrl="/spring-2025-fashion-trends"
        ogImage="/spring-2025-trends-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-12-15",
          modifiedTime: "2025-01-01",
          section: "Fashion Trends",
          tags: ["spring 2025", "fashion trends", "seasonal style", "runway"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Spring 2025 Fashion Trends", url: "/spring-2025-fashion-trends" }
        ]}
      />
      <Navigation />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-green-200 text-green-800 rounded-full text-sm font-medium mb-6">Fashion Trends</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Spring 2025{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(45deg, #2ECC71, #F1C40F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Fashion Trends
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The biggest fashion trends for Spring 2025 - from runway to real life, here's what to wear this season.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/spring-2025-hero.png`}
              alt="Spring 2025 fashion trends"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Trends for Spring 2025</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            From the runways of Paris, Milan, New York, and London, here are the biggest trends that will define Spring 2025 fashion - and how to wear them in real life.
          </p>

          <div className="space-y-12">
            <div className="bg-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Cherry Red</h3>
              <p className="text-gray-700 mb-4">The color of the season. Bold, vibrant cherry red is everywhere - from power suits to accessories.</p>
              <div className="flex flex-wrap gap-2">
                {["Power blazers", "Statement bags", "Lipstick red heels", "Monochrome looks", "Red denim"].map((item) => (
                  <span key={item} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{item}</span>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Butter Yellow</h3>
              <p className="text-gray-700 mb-4">Soft, warm butter yellow brings optimism and freshness. Perfect for the transition into warmer months.</p>
              <div className="flex flex-wrap gap-2">
                {["Linen dresses", "Knit sets", "Trench coats", "Accessories", "Maxi skirts"].map((item) => (
                  <span key={item} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{item}</span>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Sheer Everything</h3>
              <p className="text-gray-700 mb-4">Transparency continues to dominate. Layer sheer pieces over solid basics for wearable looks.</p>
              <div className="flex flex-wrap gap-2">
                {["Sheer blouses", "Organza layers", "Mesh details", "See-through knits", "Layered looks"].map((item) => (
                  <span key={item} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{item}</span>
                ))}
              </div>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Romantic Florals</h3>
              <p className="text-gray-700 mb-4">Classic florals get a modern update with oversized prints and unexpected color combinations.</p>
              <div className="flex flex-wrap gap-2">
                {["Midi dresses", "Co-ord sets", "Oversized prints", "Dark backgrounds", "3D florals"].map((item) => (
                  <span key={item} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{item}</span>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Quiet Luxury Continues</h3>
              <p className="text-gray-700 mb-4">The stealth wealth trend isn't going anywhere. Quality over quantity, timeless over trendy.</p>
              <div className="flex flex-wrap gap-2">
                {["Cashmere knits", "Tailored pieces", "Neutral palette", "No logos", "Perfect fit"].map((item) => (
                  <span key={item} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{item}</span>
                ))}
              </div>
            </div>

            <div className="bg-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Boho Revival</h3>
              <p className="text-gray-700 mb-4">70s bohemian style is back with flowing silhouettes, fringe, and earthy tones.</p>
              <div className="flex flex-wrap gap-2">
                {["Maxi dresses", "Fringe details", "Crochet tops", "Wide-leg pants", "Suede accessories"].map((item) => (
                  <span key={item} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{item}</span>
                ))}
              </div>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Denim on Denim</h3>
              <p className="text-gray-700 mb-4">The Canadian tuxedo is officially chic. Mix different washes and textures for a modern take.</p>
              <div className="flex flex-wrap gap-2">
                {["Barrel leg jeans", "Denim jackets", "Jean skirts", "Mixed washes", "Oversized fits"].map((item) => (
                  <span key={item} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{item}</span>
                ))}
              </div>
            </div>

            <div className="bg-teal-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">8. Metallics for Day</h3>
              <p className="text-gray-700 mb-4">Silver and gold aren't just for evening anymore. Daytime metallics are a key trend.</p>
              <div className="flex flex-wrap gap-2">
                {["Silver bags", "Metallic flats", "Gold accessories", "Chrome details", "Shiny outerwear"].map((item) => (
                  <span key={item} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Wear Trends Your Way</h3>
            <ul className="text-gray-700 space-y-3">
              <li><span className="text-pink-600 mr-2">1.</span> <strong>Start small</strong> - Try one trend piece with basics</li>
              <li><span className="text-pink-600 mr-2">2.</span> <strong>Consider your coloring</strong> - Not every color works for everyone</li>
              <li><span className="text-pink-600 mr-2">3.</span> <strong>Mind your body type</strong> - Adapt trends to flatter your shape</li>
              <li><span className="text-pink-600 mr-2">4.</span> <strong>Mix high and low</strong> - Invest in quality basics, play with trend pieces</li>
              <li><span className="text-pink-600 mr-2">5.</span> <strong>Stay true to you</strong> - Only wear what makes you feel confident</li>
            </ul>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gradient-to-br from-green-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Shop Spring 2025 Trends</h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius helps you find trend pieces that match your coloring and body type - so every trend looks amazing on YOU!
            </p>
            <a href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(45deg, #2ECC71, #F1C40F)' }}>
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

export default Spring2025FashionTrends;
