import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const IndieSleazeAesthetic = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Indie Sleaze Aesthetic 2026: Outfits, Hair & How to Get the Look"
        description="How to dress indie sleaze in 2026: skinny jeans, band tees, leather jackets & messy hair. The complete guide to the 2000s revival aesthetic with outfit ideas."
        keywords="indie sleaze aesthetic, indie sleaze outfits, indie sleaze style, indie sleaze 2026, 2000s fashion revival, skinny jeans outfit, band tee style, messy hair aesthetic"
        canonicalUrl="/indie-sleaze-aesthetic"
        ogImage="/indie-sleaze-hero.png"
        ogType="article"
        article={{
          publishedTime: "2026-03-11",
          modifiedTime: "2026-03-11",
          section: "Fashion Aesthetics",
          tags: ["indie sleaze", "aesthetic", "2000s fashion", "revival style"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Indie Sleaze Aesthetic", url: "/indie-sleaze-aesthetic" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-zinc-100 to-stone-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-zinc-800 text-white rounded-full text-sm font-medium mb-6">
              Fashion Aesthetic
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Indie Sleaze{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #1a1a1a, #6b6b6b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Aesthetic
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The chaotic, rebellious 2000s style is back. Skinny jeans, band tees, smudged eyeliner, and "I just rolled out of bed" energy.
            </p>
          </div>
          {/* Hero Image Placeholder */}
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/indie-sleaze-hero.png`}
              alt="Indie sleaze aesthetic outfit - leather jacket, skinny jeans, band tee"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* What is Indie Sleaze */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the Indie Sleaze Aesthetic?</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Indie sleaze is the chaotic, sweaty, glitter-in-your-hair vibe that dominated roughly 2006 to 2012. It was a reaction to the polished McBling culture of the early 2000s—think less Paris Hilton, more Kate Moss stumbling out of a London club at 4am.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The style is messed-up, mod-inspired, rebellious to its core, and unapologetic. It's a youthful movement centered around underground musicians and an artfully undone, "I'm-with-the-band" wardrobe. Now in 2026, Gen Z is bringing it back hard—and the runways are following.
            </p>

            <div className="bg-gradient-to-r from-zinc-100 to-stone-100 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Elements</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="text-gray-700 space-y-2">
                  <li>• Skinny jeans (ripped preferred)</li>
                  <li>• Vintage band tees</li>
                  <li>• Leather jackets</li>
                  <li>• Smudged eyeliner</li>
                </ul>
                <ul className="text-gray-700 space-y-2">
                  <li>• Messy bedhead hair</li>
                  <li>• Layered necklaces</li>
                  <li>• Worn-in boots or Converse</li>
                  <li>• Thrifted statement pieces</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Style Icons */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Indie Sleaze Icons</h3>
            <div className="flex flex-wrap gap-3">
              {["Kate Moss", "Alexa Chung", "Amy Winehouse", "Sienna Miller", "Sky Ferreira", "Pete Doherty", "The Olsen Twins", "Cory Kennedy", "Lily Allen", "Keira Knightley"].map((name) => (
                <span key={name} className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Wardrobe Essentials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Indie Sleaze Wardrobe Essentials</h2>

          {/* Style Images Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Skinny Jeans", image: `${BLOG_IMAGE_BASE}/indie-sleaze-skinny-jeans.png` },
              { name: "Band Tees", image: `${BLOG_IMAGE_BASE}/indie-sleaze-band-tees.png` },
              { name: "Leather Jacket", image: `${BLOG_IMAGE_BASE}/indie-sleaze-leather-jacket.png` },
              { name: "Worn Converse", image: `${BLOG_IMAGE_BASE}/indie-sleaze-converse.png` },
              { name: "Studded Belt", image: `${BLOG_IMAGE_BASE}/indie-sleaze-studded-belt.png` },
              { name: "Oversized Sunglasses", image: `${BLOG_IMAGE_BASE}/indie-sleaze-sunglasses.png` },
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 text-center">{item.name}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tops</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  Vintage band tees (The Strokes, Arctic Monkeys)
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  Sheer tops and mesh layers
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  Striped shirts
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  Cropped leather jackets
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  Oversized flannel shirts
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bottoms</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  Skinny jeans (black or distressed)
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  Ripped denim
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  Torn fishnets under shorts
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  Tennis skirts
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  Micro shorts
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Footwear</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  Beat-up Converse Chuck Taylors
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  Western Chelsea boots
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  Studded ankle boots
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  Ballet flats (worn-in)
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  Platform heels
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accessories</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  Studded belts
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  Layered chain necklaces
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  Oversized sunglasses
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  Fedora hats
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  Balenciaga City Bag (or lookalike)
                </li>
              </ul>
            </div>
          </div>

          {/* Color Palette */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The Indie Sleaze Color Palette</h3>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
              {[
                { name: "Black", hex: "#1a1a1a" },
                { name: "Charcoal", hex: "#374151" },
                { name: "White", hex: "#FFFFFF" },
                { name: "Faded Grey", hex: "#9CA3AF" },
                { name: "Denim Blue", hex: "#3B5998" },
                { name: "Burgundy", hex: "#722F37" },
                { name: "Leopard Tan", hex: "#C19A6B" },
                { name: "Neon Pink", hex: "#FF69B4" },
                { name: "Gold", hex: "#D4AF37" },
                { name: "Silver", hex: "#C0C0C0" }
              ].map((color) => (
                <div key={color.name} className="text-center">
                  <div
                    className="w-full aspect-square rounded-lg shadow-sm border border-gray-200"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-xs text-gray-500 mt-1 block">{color.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hair & Makeup */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Indie Sleaze Beauty Look</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-50 rounded-2xl p-6">
              <img
                src={`${BLOG_IMAGE_BASE}/indie-sleaze-hair.png`}
                alt="Indie sleaze messy bedhead hair"
                className="w-full rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hair</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Messy bedhead (intentionally undone)</li>
                <li>• Tousled waves with texture spray</li>
                <li>• Side-swept bangs</li>
                <li>• Dark roots with lighter ends</li>
                <li>• Choppy layers</li>
              </ul>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-6">
              <img
                src={`${BLOG_IMAGE_BASE}/indie-sleaze-makeup.png`}
                alt="Indie sleaze smudged eyeliner makeup"
                className="w-full rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Makeup</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Smudged black eyeliner</li>
                <li>• Smokey eye (slightly messy)</li>
                <li>• Pale foundation</li>
                <li>• Bold red or nude lip</li>
                <li>• Dark nail polish (chipped is fine)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Style */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Style Indie Sleaze in 2026</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-zinc-100 to-stone-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Golden Rules</h3>
              <p className="text-gray-700">
                The key is looking like you didn't try—even if you did. Mix high and low, vintage and new. One statement piece that doesn't quite "match" is essential. Thrifted is better than new.
              </p>
            </div>

            <div className="bg-gradient-to-br from-zinc-100 to-stone-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Modern Updates</h3>
              <p className="text-gray-700">
                For 2026, pair skinny jeans with a tank and plush fur trim coat. Napoleon jackets from Alexander McQueen SS26 are the updated leather jacket. Keep it fresh, not costumey.
              </p>
            </div>

            <div className="bg-gradient-to-br from-zinc-100 to-stone-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Day Look</h3>
              <p className="text-gray-700">
                Skinny jeans + vintage band tee + leather jacket + beat-up Converse. Add oversized sunglasses and a studded belt. Done.
              </p>
            </div>

            <div className="bg-gradient-to-br from-zinc-100 to-stone-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Night Look</h3>
              <p className="text-gray-700">
                Statement tee + over-the-knee leather boots + fur coat draped over. Layered gold necklaces. Smudged eyeliner. Maximum rockstar energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Avoid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What Indie Sleaze is NOT</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Polished or "put together"
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Matching everything perfectly
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Clean, minimal aesthetics
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Visible designer logos
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Looking like you tried too hard
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Athleisure or sporty looks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Aesthetics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore Similar Aesthetics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/coquette-aesthetic" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-zinc-600">Coquette Aesthetic</h3>
              <p className="text-gray-600 text-sm">The feminine contrast—bows, lace, and soft pinks.</p>
            </Link>
            <Link to="/old-money-aesthetic" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-zinc-600">Old Money Aesthetic</h3>
              <p className="text-gray-600 text-sm">The polished opposite—timeless elegance and quiet luxury.</p>
            </Link>
            <Link to="/clean-girl-aesthetic" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-zinc-600">Clean Girl Aesthetic</h3>
              <p className="text-gray-600 text-sm">The antithesis—minimal, polished, "no makeup" makeup.</p>
            </Link>
            <Link to="/office-siren-aesthetic" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-zinc-600">Office Siren Aesthetic</h3>
              <p className="text-gray-600 text-sm">Powerful workwear with a rebellious edge.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Style Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/best-jeans-for-body-type" className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-zinc-600">Best Jeans for Your Body</h3>
              <p className="text-gray-600 text-sm">Find the perfect skinny jeans for your shape.</p>
            </Link>
            <Link to="/capsule-wardrobe" className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-zinc-600">Build a Capsule Wardrobe</h3>
              <p className="text-gray-600 text-sm">Curate your indie sleaze essentials.</p>
            </Link>
            <Link to="/find-your-personal-style" className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-zinc-600">Find Your Personal Style</h3>
              <p className="text-gray-600 text-sm">Discover if indie sleaze fits your vibe.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-gradient-to-br from-zinc-100 to-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Tools for Shopping the Indie Sleaze Aesthetic
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Save your favorite vintage-inspired pieces and track prices on leather jackets and boots.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <a href="https://wontsy.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Wontsy</h3>
                <p className="text-sm text-gray-600 mb-3">Save indie sleaze pieces from any store. Build outfit mood boards mixing vintage finds with new pieces. Get alerts when that leather jacket drops in price.</p>
                <span className="text-zinc-500 text-sm font-medium">Free · iOS, Android, Chrome, Safari</span>
              </a>
              <a href="https://www.depop.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Depop</h3>
                <p className="text-sm text-gray-600 mb-3">The go-to for vintage band tees, worn-in leather, and authentic 2000s pieces. Indie sleaze heaven.</p>
                <span className="text-zinc-500 text-sm font-medium">Free · iOS, Android, Web</span>
              </a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Pinterest</h3>
                <p className="text-sm text-gray-600 mb-3">Create aesthetic boards with Kate Moss and Alexa Chung inspo. Plan your chaotic-but-cool looks.</p>
                <span className="text-zinc-500 text-sm font-medium">Free · iOS, Android, Web</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndieSleazeAesthetic;
