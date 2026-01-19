import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const OldMoneyAesthetic = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Old Money Aesthetic: The Complete Guide to Timeless Elegance (2026)"
        description="Master the old money aesthetic with our complete guide. Learn about timeless elegance, classic wardrobe pieces, the old money color palette, and how to dress with quiet sophistication."
        keywords="old money aesthetic, old money style, timeless elegance, classic fashion, preppy style, quiet luxury, inheritance style, wealthy aesthetic, old money wardrobe, old money colors"
        canonicalUrl="/old-money-aesthetic"
        ogImage="/old-money-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-10-25",
          modifiedTime: "2026-01-19",
          section: "Fashion Aesthetics",
          tags: ["old money", "aesthetic", "timeless fashion", "classic style", "quiet luxury"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Style", url: "/style" },
          { name: "Old Money Aesthetic", url: "/old-money-aesthetic" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/style" className="text-sm uppercase tracking-wider text-gray-500 hover:text-black mb-6 inline-block">
              Style
            </Link>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Old Money Aesthetic
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              The complete guide to dressing with timeless elegance and understated sophistication.
            </p>
            <p className="text-sm text-gray-400">
              Updated January 2026
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={`${BLOG_IMAGE_BASE}/old-money-hero.png`}
              alt="Old money aesthetic fashion - cashmere sweater, pearls, and tailored trousers"
              className="w-full"
            />
            <p className="text-sm text-gray-500 mt-3 text-center italic">
              The old money aesthetic: quiet confidence through timeless pieces
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The old money aesthetic isn't about showing off wealth—it's about the quiet confidence that comes from timeless style. Think Kennedy compound, European aristocracy, and yacht clubs in the Hamptons. It's understated elegance that whispers rather than shouts.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Unlike nouveau riche fashion that relies on logos and trends, old money style prioritizes quality over quantity, perfect fit over flashy details, and classic silhouettes that have stood the test of time. It's the art of looking effortlessly polished without appearing to try.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're building a classic wardrobe from scratch or refining what you already own, this guide will help you understand and embody the old money aesthetic.
            </p>
          </div>
        </div>
      </article>

      {/* What is Old Money */}
      <section className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl font-semibold text-gray-900 mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What Defines the Old Money Aesthetic?
            </h2>

            <img
              src={`${BLOG_IMAGE_BASE}/old-money-principles.png`}
              alt="Old money style principles - quality fabrics, no logos, perfect tailoring"
              className="w-full mb-8"
            />

            <p className="text-gray-700 leading-relaxed mb-6">
              The old money aesthetic is rooted in several key principles that distinguish it from other fashion styles. Understanding these principles is essential to mastering the look.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mt-10 mb-4">Quality Over Quantity</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Old money families invest in fewer, better pieces that last for decades. A single cashmere sweater from a heritage brand is worth more than a closet full of fast fashion. This principle extends to everything: leather goods that develop a patina over time, wool coats that are passed down through generations, and silk scarves that never fray.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mt-10 mb-4">No Visible Logos</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Perhaps the most defining characteristic of old money style is the complete absence of visible branding. Logos are considered gauche—a sign that you need others to validate your choices. True quality speaks for itself through craftsmanship, materials, and fit, not through a label that can be seen from across the room.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mt-10 mb-4">Timeless Silhouettes</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Old money wardrobes are built around classic shapes that transcend trends. A navy blazer, a camel coat, a pleated skirt—these pieces looked elegant fifty years ago and will look elegant fifty years from now. The goal is never to look dated, which means avoiding anything too trendy in the first place.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mt-10 mb-4">Effortless Sophistication</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              The old money aesthetic should look natural, never contrived. Clothes should appear as though you simply woke up looking polished—even if perfect tailoring and careful outfit planning went into achieving that effect. The effort is invisible; only the result shows.
            </p>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl font-semibold text-gray-900 mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              The Old Money Color Palette
            </h2>

            <img
              src={`${BLOG_IMAGE_BASE}/old-money-colors.png`}
              alt="Old money color palette - navy, camel, cream, burgundy, forest green"
              className="w-full mb-8"
            />

            <p className="text-gray-700 leading-relaxed mb-8">
              The old money color palette is deliberately restrained, built around neutrals and classic shades that pair effortlessly with each other. This makes mixing and matching simple while ensuring every outfit looks cohesive and considered.
            </p>

            {/* Color Swatches */}
            <div className="grid grid-cols-5 gap-4 mb-10">
              {[
                { name: "Navy", hex: "#1a2744" },
                { name: "Camel", hex: "#C19A6B" },
                { name: "Cream", hex: "#F5F5DC" },
                { name: "Burgundy", hex: "#722F37" },
                { name: "Forest", hex: "#228B22" },
                { name: "White", hex: "#FFFFFF" },
                { name: "Gray", hex: "#6B6B6B" },
                { name: "Beige", hex: "#D4C4B0" },
                { name: "Brown", hex: "#6B4423" },
                { name: "Black", hex: "#1a1a1a" }
              ].map((color) => (
                <div key={color.name} className="text-center">
                  <div
                    className="w-full aspect-square border border-gray-200"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-xs text-gray-500 mt-2 block">{color.name}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-medium text-gray-900 mt-10 mb-4">The Core Neutrals</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Navy, camel, cream, and white form the foundation of any old money wardrobe. These colors work together in any combination and serve as the backbone for most outfits. Navy replaces black for a softer, more sophisticated look. Camel adds warmth without being flashy. Cream and white keep everything fresh and clean.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mt-10 mb-4">Accent Colors</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Burgundy and forest green are the traditional accent colors of old money style—seen in everything from school ties to equestrian gear. These rich, deep shades add visual interest without disrupting the overall understated palette. They're used sparingly: a burgundy cashmere scarf, a forest green cable-knit sweater.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mt-10 mb-4">Colors to Avoid</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Bright, saturated colors are generally avoided in old money fashion. Neon shades, hot pink, electric blue—these have no place in a classic wardrobe. The same goes for trendy colors that come and go each season. If a color wasn't around fifty years ago, it probably shouldn't be in your old money wardrobe today.
            </p>
          </div>
        </div>
      </section>

      {/* Wardrobe Essentials */}
      <section className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl font-semibold text-gray-900 mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Building an Old Money Wardrobe
            </h2>

            <img
              src={`${BLOG_IMAGE_BASE}/old-money-wardrobe.png`}
              alt="Old money wardrobe essentials - blazers, cashmere, oxford shirts, loafers"
              className="w-full mb-8"
            />

            <p className="text-gray-700 leading-relaxed mb-8">
              An old money wardrobe is built slowly and intentionally. Rather than buying impulsively, you invest in pieces that will serve you for years—even decades. Here are the essential categories and pieces to focus on.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mt-10 mb-4">Tops & Knitwear</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Knitwear is central to the old money aesthetic. Cashmere sweaters in crew neck and V-neck styles are wardrobe workhorses—they layer beautifully, dress up or down, and improve with age when properly cared for.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Cashmere sweaters (cream, navy, camel)
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Oxford button-down shirts in white and light blue
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Striped Breton tops
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Cable-knit sweaters in neutral tones
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Silk blouses in cream or navy
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Polo shirts for casual settings
              </li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-10 mb-4">Bottoms</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Quality trousers and skirts form the foundation of old money outfits. Fit is everything—invest in tailoring to ensure clean lines and proper proportions.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Tailored wool trousers (navy, gray, camel)
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Pleated khakis with a proper crease
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                A-line and pleated midi skirts
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                High-quality dark denim (no rips, no distressing)
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Linen pants for summer
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Tennis skirts for sport-inspired looks
              </li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-10 mb-4">Outerwear</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Coats and jackets are where quality matters most—they're the first thing people notice and they need to withstand years of wear. Choose classic styles that won't look dated.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Camel wool coat (the quintessential old money piece)
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Navy blazer with gold or brass buttons
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Classic trench coat in beige
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Barbour-style waxed jacket
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Quilted vest for layering
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Tweed blazer for fall and winter
              </li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-10 mb-4">Footwear</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Shoes should be leather, well-maintained, and classic in design. Quality footwear can be resoled and last for decades when properly cared for.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Leather penny loafers (brown or burgundy)
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Ballet flats in neutral tones
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                White leather sneakers (minimal design)
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Riding boots or knee-high leather boots
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Classic oxford shoes
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Boat shoes for casual summer wear
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl font-semibold text-gray-900 mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Old Money Accessories
            </h2>

            <img
              src={`${BLOG_IMAGE_BASE}/old-money-accessories.png`}
              alt="Old money accessories - pearls, silk scarf, leather bag, classic watch"
              className="w-full mb-8"
            />

            <p className="text-gray-700 leading-relaxed mb-6">
              In old money style, accessories are kept minimal but meaningful. Each piece should be of exceptional quality and classic design—the kind of accessories that could have belonged to your grandmother and will be passed to your grandchildren.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mt-10 mb-4">Jewelry</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Less is more when it comes to old money jewelry. Pearl earrings and a simple strand of pearls are perhaps the most iconic old money accessories—elegant, understated, and appropriate for nearly any occasion.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Pearl studs and strand necklace
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Simple gold or silver hoops
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Classic tank watch (Cartier-style)
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Signet ring or simple band
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Tennis bracelet for formal occasions
              </li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-10 mb-4">Bags & Leather Goods</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bags should be structured, made of quality leather, and completely free of visible logos. A good handbag should look better with age as the leather develops character.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Structured leather tote in brown or black
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Classic crossbody bag
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Leather belt with simple buckle
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Leather gloves for winter
              </li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-10 mb-4">Scarves & Extras</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Silk scarves in classic prints
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Cashmere scarf in camel or navy
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Tortoiseshell sunglasses
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">—</span>
                Leather headband or simple hair accessories
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl font-semibold text-gray-900 mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Old Money Style Rules
            </h2>

            <img
              src={`${BLOG_IMAGE_BASE}/old-money-dos-donts.png`}
              alt="Old money style rules - what to do and what to avoid"
              className="w-full mb-8"
            />

            <div className="grid md:grid-cols-2 gap-12 mb-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4 uppercase tracking-wide">Do</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">+</span>
                    Invest in quality basics that last decades
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">+</span>
                    Get everything tailored to fit perfectly
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">+</span>
                    Choose natural fabrics (cashmere, silk, wool, linen, cotton)
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">+</span>
                    Keep accessories minimal and elegant
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">+</span>
                    Maintain and care for your pieces properly
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">+</span>
                    Look polished but never overdone
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">+</span>
                    Shop secondhand for quality vintage pieces
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4 uppercase tracking-wide">Don't</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">-</span>
                    Wear visible logos or monograms
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">-</span>
                    Chase fast fashion trends
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">-</span>
                    Wear overly revealing or flashy clothing
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">-</span>
                    Over-accessorize or layer too much jewelry
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">-</span>
                    Choose synthetic or cheap-looking fabrics
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">-</span>
                    Wear athletic wear outside the gym
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">-</span>
                    Discuss brands or how much things cost
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasons & Occasions */}
      <section className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl font-semibold text-gray-900 mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Old Money Style by Occasion
            </h2>

            <img
              src={`${BLOG_IMAGE_BASE}/old-money-occasions.png`}
              alt="Old money outfits for different occasions - brunch, work, evening"
              className="w-full mb-8"
            />

            <h3 className="text-xl font-medium text-gray-900 mt-10 mb-4">Weekend Brunch</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Cashmere sweater over a collared shirt, tailored chinos or a midi skirt, loafers, and minimal gold jewelry. Add a silk scarf tied loosely around the neck or on a handbag for a finishing touch.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mt-10 mb-4">Office / Business</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Navy blazer over a white oxford shirt, tailored wool trousers, leather belt, and classic pumps or loafers. A structured leather tote completes the look. Keep jewelry to a watch and pearl studs.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mt-10 mb-4">Evening / Dinner</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Silk blouse tucked into a high-waisted skirt or tailored trousers. Add a strand of pearls, a classic watch, and elegant heels. A camel coat draped over shoulders for the entrance.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mt-10 mb-4">Summer / Resort</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Linen pants with a Breton stripe top, white cotton dress, or a tennis skirt with a polo. Leather sandals or espadrilles, tortoiseshell sunglasses, and a straw tote. Keep it breezy and effortless.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mt-10 mb-4">Country / Outdoor</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Barbour jacket or quilted vest over a cable-knit sweater, corduroy trousers or riding-style pants, and leather boots. This is where you can embrace the English country estate aesthetic with tweeds and earth tones.
            </p>
          </div>
        </div>
      </section>

      {/* Where to Shop */}
      <section className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl font-semibold text-gray-900 mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Where to Shop Old Money Style
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              You don't need family wealth to dress with old money style. The key is knowing where to find quality pieces—whether new or secondhand—that embody the aesthetic.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mt-10 mb-4">Heritage Brands</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Brooks Brothers, Ralph Lauren (mainline, not the logo-heavy lines), J.Crew, Massimo Dutti, Barbour, and Burberry (classic pieces, not trendy collaborations). These brands have been producing classic pieces for decades and understand the aesthetic intimately.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mt-10 mb-4">Secondhand & Vintage</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              The RealReal, Vestiaire Collective, and eBay are excellent sources for pre-owned designer pieces. Estate sales and consignment shops often have incredible finds. There's nothing more authentically old money than wearing vintage Chanel or a well-worn Hermès scarf.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mt-10 mb-4">Budget-Friendly Options</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Uniqlo, COS, Arket, and Mango offer quality basics at accessible prices. Focus on their cashmere, wool, and linen pieces. The key is being selective—look for natural fabrics, classic cuts, and neutral colors.
            </p>
          </div>
        </div>
      </section>

      {/* Related Aesthetics */}
      <section className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl font-semibold text-gray-900 mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Similar Aesthetics to Explore
            </h2>

            <div className="space-y-6">
              <Link to="/quiet-luxury-style" className="block border-b border-gray-200 pb-6 group">
                <h3 className="font-medium text-gray-900 mb-2 group-hover:underline">Quiet Luxury Style</h3>
                <p className="text-gray-600 text-sm">
                  The modern evolution of old money—understated elegance and stealth wealth fashion.
                </p>
              </Link>
              <Link to="/clean-girl-aesthetic" className="block border-b border-gray-200 pb-6 group">
                <h3 className="font-medium text-gray-900 mb-2 group-hover:underline">Clean Girl Aesthetic</h3>
                <p className="text-gray-600 text-sm">
                  Minimalist beauty and effortless style that complements old money fashion.
                </p>
              </Link>
              <Link to="/office-siren-aesthetic" className="block border-b border-gray-200 pb-6 group">
                <h3 className="font-medium text-gray-900 mb-2 group-hover:underline">Office Siren Aesthetic</h3>
                <p className="text-gray-600 text-sm">
                  Powerful and polished workwear with old money influences.
                </p>
              </Link>
              <Link to="/capsule-wardrobe" className="block border-b border-gray-200 pb-6 group">
                <h3 className="font-medium text-gray-900 mb-2 group-hover:underline">Build a Capsule Wardrobe</h3>
                <p className="text-gray-600 text-sm">
                  Create a timeless wardrobe with quality pieces—the old money approach to dressing.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final Tips */}
      <section className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl font-semibold text-gray-900 mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Final Thoughts
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The old money aesthetic is ultimately about confidence through restraint. It's knowing that you don't need to prove anything to anyone—your style speaks quietly but clearly through quality, fit, and timeless choices.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Start with what you have. Look through your closet for pieces that already fit this aesthetic and build from there. Focus on filling gaps with quality basics rather than trendy pieces. And remember: the most important element of old money style isn't what you wear, but how you wear it—with quiet confidence and effortless grace.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Take your time building your wardrobe. The old money approach is never rushed.
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-8 text-center"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Continue Reading
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link to="/what-colors-suit-me" className="group">
                <div className="bg-white p-6 h-full">
                  <h3 className="font-medium text-gray-900 mb-2 group-hover:underline">What Colors Suit Me?</h3>
                  <p className="text-gray-600 text-sm">Find the classic colors that complement your natural coloring.</p>
                </div>
              </Link>
              <Link to="/find-your-personal-style" className="group">
                <div className="bg-white p-6 h-full">
                  <h3 className="font-medium text-gray-900 mb-2 group-hover:underline">Find Your Personal Style</h3>
                  <p className="text-gray-600 text-sm">Discover your unique style identity and dress with intention.</p>
                </div>
              </Link>
              <Link to="/best-jeans-for-body-type" className="group">
                <div className="bg-white p-6 h-full">
                  <h3 className="font-medium text-gray-900 mb-2 group-hover:underline">Best Jeans for Your Body Type</h3>
                  <p className="text-gray-600 text-sm">Find the perfect jeans cut for your shape—a wardrobe essential.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OldMoneyAesthetic;
