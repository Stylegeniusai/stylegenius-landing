import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const Spring2026ColorTrends = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Spring 2026 Color Trends: What Colors to Wear This Season"
        description="The colors to wear spring 2026: Pantone's Cloud Dancer, Chartreuse, Burnished Lilac & more. See how to style each trending shade + what suits your skin tone."
        keywords="spring 2026 color trends, pantone 2026, cloud dancer, chartreuse fashion, color trends 2026, what colors to wear spring, fashion color trends"
        canonicalUrl="/spring-2026-color-trends"
        ogImage="/spring-2026-colors-hero.png"
        ogType="article"
        article={{
          publishedTime: "2026-03-11",
          modifiedTime: "2026-03-11",
          section: "Fashion Trends",
          tags: ["color trends", "spring 2026", "pantone", "fashion colors"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Spring 2026 Color Trends", url: "/spring-2026-color-trends" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              Spring 2026
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Spring 2026{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #9F7AEA, #ED64A6, #ECC94B)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Color Trends
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              From Pantone's Cloud Dancer to bold Chartreuse—the colors defining fashion right now and how to wear them.
            </p>
          </div>
          {/* Hero Image */}
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/spring-2026-colors-hero.png`}
              alt="Spring 2026 color trends - Cloud Dancer, Chartreuse, Burnished Lilac"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Spring 2026 Color Story</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              2026 is the year of bold and expressive color. While spring usually brings soft pastels, this season throws that rule out—vibrant primaries, acidic chartreuse, and bold reds are taking center stage alongside calming neutrals.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Pantone has crowned Cloud Dancer as Color of the Year, but the runways at Balenciaga, Saint Laurent, and Prada are awash with Chartreuse, Lava Falls red, and Burnished Lilac. The key? Expressive color pairings that feel personal, not matchy-matchy.
            </p>
          </div>
        </div>
      </article>

      {/* Color of the Year */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <div
                  className="aspect-square rounded-2xl shadow-lg border-4 border-gray-100"
                  style={{ backgroundColor: '#F5F5F0' }}
                />
                <p className="text-center mt-3 font-medium text-gray-900">Cloud Dancer</p>
                <p className="text-center text-sm text-gray-500">PANTONE 11-4201</p>
              </div>
              <div className="w-full md:w-2/3">
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium mb-3">
                  Color of the Year 2026
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Dancer</h3>
                <p className="text-gray-700 mb-4">
                  A soft, balanced white that conveys lightness and calm. It's not stark hospital white or heavy cream—it's the perfect sophisticated off-white that brightens your face without washing you out.
                </p>
                <p className="text-gray-700">
                  <strong>How to wear it:</strong> Go monochromatic for maximum impact. Cashmere and silk elevate this shade. Pair with one bold accent color per outfit for a fresh, modern look.
                </p>
              </div>
            </div>
          </div>

          {/* Who's wearing it */}
          <div className="bg-gray-100 rounded-2xl p-6 mb-12">
            <h4 className="font-bold text-gray-900 mb-3">Seen on</h4>
            <div className="flex flex-wrap gap-2">
              {["Anya Taylor-Joy", "Jennifer Lawrence", "Sabrina Carpenter", "Dakota Johnson", "Meghan Markle", "Priyanka Chopra"].map((name) => (
                <span key={name} className="px-3 py-1 bg-white rounded-full text-gray-700 text-sm">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trending Colors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The 6 Colors to Wear This Spring</h2>

          {/* Color 1: Chartreuse */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/4">
                <div
                  className="aspect-square rounded-2xl shadow-lg"
                  style={{ backgroundColor: '#DFFF00' }}
                />
                <p className="text-center mt-3 font-medium text-gray-900">Chartreuse</p>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Chartreuse: The It Color</h3>
                <p className="text-gray-700 mb-4">
                  The acidic yellow-green that's hard to ignore. Seen at Simone Rocha, Saint Laurent, Burberry, and Prada. Think of it as the sophisticated older sister of Brat green—optimistic, playful, and makes a statement the second you walk in a room.
                </p>
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">How to Wear It</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Pair with blue jeans and boots for everyday</li>
                    <li>• Statement dress with gold or silver accessories</li>
                    <li>• Match with a white poplin midi and ballet flats</li>
                    <li>• Works with both warm and cool skin tones</li>
                  </ul>
                </div>
                <img
                  src={`${BLOG_IMAGE_BASE}/spring-2026-colors-chartreuse.png`}
                  alt="Chartreuse outfit ideas spring 2026"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Color 2: Burnished Lilac */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/4">
                <div
                  className="aspect-square rounded-2xl shadow-lg"
                  style={{ backgroundColor: '#C8A2C8' }}
                />
                <p className="text-center mt-3 font-medium text-gray-900">Burnished Lilac</p>
                <p className="text-center text-sm text-gray-500">PANTONE 15-1905</p>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Burnished Lilac: Soft but Bold</h3>
                <p className="text-gray-700 mb-4">
                  A smoky lavender with vintage charm. If you're not into bright colors, this is your entry point. Spotted at Versace, Moschino, and Emporio Armani in sheer fabrics and lush draping.
                </p>
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">How to Wear It</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Easy way to dress up classic blue jeans</li>
                    <li>• Pair with soft blues or sage greens for tonal looks</li>
                    <li>• Goes deeper with magenta or burgundy</li>
                    <li>• Beautiful for spring weddings and events</li>
                  </ul>
                </div>
                <img
                  src={`${BLOG_IMAGE_BASE}/spring-2026-colors-lilac.png`}
                  alt="Burnished lilac outfit ideas spring 2026"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Color 3: Lava Falls */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/4">
                <div
                  className="aspect-square rounded-2xl shadow-lg"
                  style={{ backgroundColor: '#CF1020' }}
                />
                <p className="text-center mt-3 font-medium text-gray-900">Lava Falls</p>
                <p className="text-center text-sm text-gray-500">PANTONE 18-1552</p>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lava Falls: Bold Red Energy</h3>
                <p className="text-gray-700 mb-4">
                  A dramatic, bold red that demands attention. Red is always a power color, but this specific shade—somewhere between cherry and crimson—feels particularly modern for 2026.
                </p>
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">How to Wear It</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Red dress for instant impact</li>
                    <li>• Red accessories (bag, shoes) with neutrals</li>
                    <li>• Pair with navy or forest green for color blocking</li>
                    <li>• Best for cool and neutral undertones</li>
                  </ul>
                </div>
                <img
                  src={`${BLOG_IMAGE_BASE}/spring-2026-colors-lava-falls.png`}
                  alt="Lava Falls red outfit ideas spring 2026"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Color 4: Tickled Pink */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/4">
                <div
                  className="aspect-square rounded-2xl shadow-lg"
                  style={{ backgroundColor: '#FC89AC' }}
                />
                <p className="text-center mt-3 font-medium text-gray-900">Tickled Pink</p>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tickled Pink: Playful Rosé</h3>
                <p className="text-gray-700 mb-4">
                  One of the defining colors of Summer 2026. This playful rosé shade evokes blooming summer gardens and warm evening skies. It's more grown-up than bubblegum pink, but still fun.
                </p>
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">How to Wear It</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Flowing A-line dresses or jumpsuits</li>
                    <li>• Pairs beautifully with white, nude, or warm sand</li>
                    <li>• Co-ord sets for a polished look</li>
                    <li>• Flatters warm and neutral skin tones best</li>
                  </ul>
                </div>
                <img
                  src={`${BLOG_IMAGE_BASE}/spring-2026-colors-tickled-pink.png`}
                  alt="Tickled Pink outfit ideas spring 2026"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Color 5: Marina */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/4">
                <div
                  className="aspect-square rounded-2xl shadow-lg"
                  style={{ backgroundColor: '#1E3A5F' }}
                />
                <p className="text-center mt-3 font-medium text-gray-900">Marina</p>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Marina: Ocean-Inspired Blue</h3>
                <p className="text-gray-700 mb-4">
                  A deep, ocean-inspired blue that brings depth to any outfit. One of the three defining colors of SS26 alongside Cloud Dancer and Tickled Pink. It's the sophisticated neutral of the bold color family.
                </p>
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">How to Wear It</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Pair with Acacia yellow for modern contrast</li>
                    <li>• Works as a neutral with other brights</li>
                    <li>• Tailored trousers or blazers</li>
                    <li>• Universally flattering on all skin tones</li>
                  </ul>
                </div>
                <img
                  src={`${BLOG_IMAGE_BASE}/spring-2026-colors-marina.png`}
                  alt="Marina blue outfit ideas spring 2026"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Color 6: Acacia */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/4">
                <div
                  className="aspect-square rounded-2xl shadow-lg"
                  style={{ backgroundColor: '#F0E130' }}
                />
                <p className="text-center mt-3 font-medium text-gray-900">Acacia</p>
                <p className="text-center text-sm text-gray-500">PANTONE 13-0640</p>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Acacia: Brilliant Yellow</h3>
                <p className="text-gray-700 mb-4">
                  A brilliant yellow with subtle green undertones. Capable of lighting up any combination, especially when paired with Marina blue. It's optimistic without being overwhelming.
                </p>
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">How to Wear It</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Linen blazers or statement tops</li>
                    <li>• Ground with soft whites, sage greens, or deep browns</li>
                    <li>• Fluid dresses for spring events</li>
                    <li>• Best for warm undertones</li>
                  </ul>
                </div>
                <img
                  src={`${BLOG_IMAGE_BASE}/spring-2026-colors-acacia.png`}
                  alt="Acacia yellow outfit ideas spring 2026"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Palette */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Complete Spring 2026 Palette</h2>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Trend Colors</h3>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-4 mb-8">
              {[
                { name: "Cloud Dancer", hex: "#F5F5F0" },
                { name: "Chartreuse", hex: "#DFFF00" },
                { name: "Lilac", hex: "#C8A2C8" },
                { name: "Lava Falls", hex: "#CF1020" },
                { name: "Tickled Pink", hex: "#FC89AC" },
                { name: "Marina", hex: "#1E3A5F" },
                { name: "Acacia", hex: "#F0E130" },
                { name: "Muskmelon", hex: "#F5B895" },
                { name: "Alexandrite", hex: "#008B8B" },
                { name: "Amethyst", hex: "#9966CC" }
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

            <h3 className="text-xl font-bold text-gray-900 mb-6">Seasonless Neutrals</h3>
            <div className="grid grid-cols-5 md:grid-cols-6 gap-4">
              {[
                { name: "Coffee Bean", hex: "#3C2415" },
                { name: "White Onyx", hex: "#F5F5F5" },
                { name: "Angora", hex: "#E8DFD1" },
                { name: "Sage Green", hex: "#9CAF88" },
                { name: "Caramel", hex: "#C19A6B" },
                { name: "Shale", hex: "#6B6B6B" }
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

      {/* How to Style */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Wear 2026's Colors</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The One Bold + Neutrals Rule</h3>
              <p className="text-gray-700">
                Choose one dominant accent color per outfit and keep the rest in Cloud Dancer or neutrals. This keeps colors clear, fresh, and wearable without losing impact.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Unexpected Pairings</h3>
              <p className="text-gray-700">
                2026 is about color combinations that shouldn't work but do. Try Chartreuse + Marina, or Tickled Pink + Lava Falls. Be expressive, not safe.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Monochromatic Power</h3>
              <p className="text-gray-700">
                Wearing one color head-to-toe is having a major moment. An all-Chartreuse look or full Cloud Dancer creates elegant impact without trying too hard.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Know Your Undertone</h3>
              <p className="text-gray-700">
                Not every color works for everyone. Chartreuse and Acacia favor warm tones. Lilac and Marina are universally flattering. Cloud Dancer works for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Your Best Colors</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/best-colors-for-pale-skin" className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">Best Colors for Pale Skin</h3>
              <p className="text-gray-600 text-sm">Find which spring 2026 colors work with fair complexions.</p>
            </Link>
            <Link to="/what-colors-suit-me" className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">What Colors Suit Me?</h3>
              <p className="text-gray-600 text-sm">Discover your undertone and best color palette.</p>
            </Link>
            <Link to="/dark-winter-colors" className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">Dark Winter Color Palette</h3>
              <p className="text-gray-600 text-sm">Bold colors for high-contrast coloring.</p>
            </Link>
            <Link to="/soft-summer-colors" className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">Soft Summer Color Palette</h3>
              <p className="text-gray-600 text-sm">Muted shades for soft, cool coloring.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Aesthetics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Style Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/capsule-wardrobe" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">Build a Capsule Wardrobe</h3>
              <p className="text-gray-600 text-sm">Create a versatile wardrobe with this season's colors.</p>
            </Link>
            <Link to="/clean-girl-aesthetic" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">Clean Girl Aesthetic</h3>
              <p className="text-gray-600 text-sm">Minimal style meets Cloud Dancer neutrals.</p>
            </Link>
            <Link to="/old-money-aesthetic" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">Old Money Aesthetic</h3>
              <p className="text-gray-600 text-sm">Timeless colors and classic elegance.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Shop the Spring 2026 Color Trends
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Save pieces in this season's trending colors and get alerts when they go on sale.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <a href="https://wontsy.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Wontsy</h3>
                <p className="text-sm text-gray-600 mb-3">Save Chartreuse dresses and Cloud Dancer coats from any store. Build color-coordinated outfit boards and get price drop alerts.</p>
                <span className="text-purple-500 text-sm font-medium">Free · iOS, Android, Chrome, Safari</span>
              </a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Pinterest</h3>
                <p className="text-sm text-gray-600 mb-3">Create color mood boards to visualize how these trending shades work together before you shop.</p>
                <span className="text-purple-500 text-sm font-medium">Free · iOS, Android, Web</span>
              </a>
              <a href="https://www.pantone.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Pantone Connect</h3>
                <p className="text-sm text-gray-600 mb-3">The official source for Pantone colors. Build palettes and find exact color matches.</p>
                <span className="text-purple-500 text-sm font-medium">Free + Premium · Web, iOS</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Spring2026ColorTrends;
