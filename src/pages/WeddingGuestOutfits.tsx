import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const WeddingGuestOutfits = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-6">
              Style Guide
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Wedding Guest{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #F472B6, #EC4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Outfit Ideas
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The complete guide to wedding guest attire - what to wear for every dress code, season, and venue. From black tie galas to beach ceremonies, we have got you covered.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/wedding-guest-hero.png`}
              alt="Wedding guest outfit ideas and inspiration"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Ultimate Wedding Guest Outfit Guide for 2025</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Being invited to a wedding is an honor, and showing up in the right outfit is a sign of respect for the couple and their special day. But navigating wedding dress codes can feel overwhelming - what exactly does "cocktail attire" mean? Can you wear black to a wedding? What about a beach ceremony in December?
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              This comprehensive guide will help you decode every wedding dress code, find the perfect outfit for any season, and avoid common fashion faux pas that could make you the subject of wedding gossip for all the wrong reasons. Whether you are attending your first wedding or your fiftieth, we will help you look and feel confident.
            </p>
          </div>

          {/* Quick Rules Box */}
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The Golden Rules of Wedding Guest Attire</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-3">1.</span>
                  Never wear white, ivory, cream, or anything that could be mistaken for bridal attire
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-3">2.</span>
                  Always check the invitation for dress code specifications
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-3">3.</span>
                  Consider the venue, time of day, and season
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-3">4.</span>
                  When in doubt, slightly overdress rather than underdress
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-3">5.</span>
                  Do not upstage the bride with overly flashy or revealing outfits
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-3">6.</span>
                  Bring comfortable shoes for dancing or have a backup pair
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-3">7.</span>
                  Check if the couple has specified any color preferences or themes
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-3">8.</span>
                  Plan your outfit in advance to avoid last-minute stress
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/* Wedding Dress Codes Explained */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Wedding Dress Codes Explained</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Understanding what each dress code actually means will help you choose the perfect outfit and feel confident on the big day.
          </p>

          {/* White Tie */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 rounded-full bg-black mr-3"></div>
              <h3 className="text-2xl font-bold text-gray-900">White Tie (Ultra-Formal)</h3>
            </div>
            <p className="text-gray-700 mb-6">
              The most formal dress code, typically reserved for royal events, state dinners, and the most elegant evening weddings. This is rare for weddings but demands the height of formality.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">What to Wear:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Floor-length ball gown or evening gown
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Luxurious fabrics like silk, satin, or velvet
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Opera-length gloves (optional)
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Elegant updo hairstyle
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Fine jewelry and a sophisticated clutch
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Color Suggestions:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Black", "Navy", "Emerald", "Burgundy", "Sapphire", "Deep Purple"].map((color) => (
                    <span key={color} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">{color}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Black Tie */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 rounded-full bg-gray-800 mr-3"></div>
              <h3 className="text-2xl font-bold text-gray-900">Black Tie (Formal)</h3>
            </div>
            <p className="text-gray-700 mb-6">
              A formal evening dress code that calls for elegant, sophisticated attire. This is common for evening weddings at upscale venues, ballrooms, or country clubs. Think glamorous and polished.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">What to Wear:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Floor-length evening gown or elegant formal dress
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Sophisticated midi dress that feels special
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Dressy jumpsuit in luxe fabric
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Statement jewelry and heels
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Small clutch or evening bag
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Color Suggestions:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Black", "Navy", "Burgundy", "Emerald", "Champagne", "Midnight Blue", "Jewel Tones"].map((color) => (
                    <span key={color} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">{color}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Black Tie Optional */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 rounded-full bg-gray-600 mr-3"></div>
              <h3 className="text-2xl font-bold text-gray-900">Black Tie Optional</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Slightly less formal than black tie, giving guests flexibility while still expecting elevated attire. You can go full formal or opt for a dressy cocktail look.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">What to Wear:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Floor-length gown or elegant midi dress
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Dressy cocktail dress in luxe fabric
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Formal separates (silk top with tailored pants)
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Elegant jumpsuit
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Dressy heels and refined accessories
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Pro Tip:</h4>
                <p className="text-gray-600 text-sm">
                  When in doubt with black tie optional, lean more formal. It is better to match the most dressed-up guests than to feel underdressed.
                </p>
              </div>
            </div>
          </div>

          {/* Cocktail / Semi-Formal */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 rounded-full bg-pink-500 mr-3"></div>
              <h3 className="text-2xl font-bold text-gray-900">Cocktail / Semi-Formal</h3>
            </div>
            <p className="text-gray-700 mb-6">
              The most common wedding dress code, striking a balance between formal and casual. Perfect for afternoon or evening celebrations. Think dressy but not over-the-top.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">What to Wear:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Knee-length or midi cocktail dress
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Dressy separates (blouse with tailored skirt or pants)
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Chic jumpsuit or romper
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Heels, dressy flats, or block heels
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Statement earrings or delicate jewelry
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Color Suggestions:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Navy", "Blush", "Sage", "Dusty Blue", "Mauve", "Coral", "Burgundy", "Teal"].map((color) => (
                    <span key={color} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">{color}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dressy Casual / Smart Casual */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 rounded-full bg-purple-400 mr-3"></div>
              <h3 className="text-2xl font-bold text-gray-900">Dressy Casual / Smart Casual</h3>
            </div>
            <p className="text-gray-700 mb-6">
              A relaxed but polished dress code common for daytime weddings, brunch receptions, or less traditional celebrations. Comfortable yet put-together is the goal.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">What to Wear:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Sundress or day dress with polished accessories
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Midi skirt with a nice blouse
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Dressy wide-leg pants with elegant top
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Block heels, wedges, or dressy flats
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Simple, elegant jewelry
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Important Note:</h4>
                <p className="text-gray-600 text-sm">
                  Dressy casual still means elevated - avoid jeans, t-shirts, or anything you would wear to run errands. Think polished brunch outfit.
                </p>
              </div>
            </div>
          </div>

          {/* Beach / Destination */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 rounded-full bg-cyan-400 mr-3"></div>
              <h3 className="text-2xl font-bold text-gray-900">Beach / Destination Wedding</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Beach weddings require outfits that are elegant yet practical for sand, sun, and potentially wind. Think flowy, lightweight fabrics that move beautifully but will not trip you up on uneven terrain.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">What to Wear:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Flowy maxi dress in lightweight fabric
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Midi dress with movement
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Linen pants with elegant blouse
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Wedges, block heels, or dressy sandals
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Straw or woven clutch
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Practical Tips:</h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>- Avoid stilettos (they sink in sand)</li>
                  <li>- Choose fabrics that will not wrinkle</li>
                  <li>- Bring a wrap for air conditioning indoors</li>
                  <li>- Consider the wind when choosing skirt length</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Garden / Outdoor */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 rounded-full bg-green-400 mr-3"></div>
              <h3 className="text-2xl font-bold text-gray-900">Garden / Outdoor Wedding</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Outdoor garden weddings call for romantic, nature-inspired looks. Consider the terrain when choosing shoes and be prepared for varying temperatures as the sun sets.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">What to Wear:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Floral or botanical print dress
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Tea-length or midi dress
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Dressy jumpsuit in soft colors
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Block heels or wedges (for grass)
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Light cardigan or wrap for evening
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Color Suggestions:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Sage", "Dusty Rose", "Lavender", "Soft Yellow", "Peach", "Dusty Blue", "Coral"].map((color) => (
                    <span key={color} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">{color}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Rustic / Barn */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 rounded-full bg-amber-600 mr-3"></div>
              <h3 className="text-2xl font-bold text-gray-900">Rustic / Barn Wedding</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Rustic barn weddings blend casual charm with celebration. The vibe is typically relaxed but still requires an elevated outfit. Think country elegance meets modern romance.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">What to Wear:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Flowy dress in earthy or muted tones
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Midi dress with boots option
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Dressy separates in natural fabrics
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Ankle boots, block heels, or wedges
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">-</span>
                    Leather or natural texture accessories
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Color Suggestions:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Terracotta", "Sage", "Dusty Rose", "Burgundy", "Camel", "Olive", "Mustard"].map((color) => (
                    <span key={color} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">{color}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outfit Ideas by Season */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Wedding Guest Outfits by Season</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Your outfit should complement the season. Here is what to wear for weddings throughout the year.
          </p>

          {/* Spring */}
          <div className="bg-green-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Spring Weddings (March - May)</h3>
            <p className="text-gray-700 mb-6">
              Spring weddings call for fresh, romantic looks. Think soft pastels, floral prints, and lightweight fabrics. Be prepared for unpredictable weather with layers.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Best Outfit Choices:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>- Floral midi or maxi dress</li>
                  <li>- Pastel-colored cocktail dress</li>
                  <li>- Soft, romantic silhouettes</li>
                  <li>- Light blazer or cardigan for cooler moments</li>
                  <li>- Strappy heels or elegant flats</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Perfect Colors:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Blush Pink", "Lavender", "Sage Green", "Soft Yellow", "Powder Blue", "Peach", "Mint"].map((color) => (
                    <span key={color} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{color}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Summer */}
          <div className="bg-yellow-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Summer Weddings (June - August)</h3>
            <p className="text-gray-700 mb-6">
              Summer weddings are perfect for bright, bold colors and lightweight fabrics. Choose breathable materials and consider the venue - outdoor ceremonies can get hot.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Best Outfit Choices:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>- Flowy maxi dress in light fabric</li>
                  <li>- Bright, bold cocktail dress</li>
                  <li>- Linen separates for casual venues</li>
                  <li>- Tropical or botanical prints</li>
                  <li>- Wedges or block heels for outdoor events</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Perfect Colors:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Coral", "Turquoise", "Hot Pink", "Cobalt Blue", "Sunny Yellow", "Orange", "Fuchsia"].map((color) => (
                    <span key={color} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{color}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Fall */}
          <div className="bg-orange-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Fall Weddings (September - November)</h3>
            <p className="text-gray-700 mb-6">
              Fall weddings embrace rich, warm colors and luxe textures. Think velvet, satin, and jewel tones that complement the changing leaves and cozy atmosphere.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Best Outfit Choices:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>- Velvet midi dress</li>
                  <li>- Rich jewel-toned cocktail dress</li>
                  <li>- Long-sleeve or three-quarter sleeve options</li>
                  <li>- Luxe separates with texture</li>
                  <li>- Closed-toe heels or ankle boots</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Perfect Colors:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Burgundy", "Emerald", "Rust", "Navy", "Mustard", "Plum", "Burnt Orange", "Forest Green"].map((color) => (
                    <span key={color} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{color}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Winter */}
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Winter Weddings (December - February)</h3>
            <p className="text-gray-700 mb-6">
              Winter weddings are glamorous affairs perfect for dramatic looks. Embrace rich velvets, sequins, and deep colors. Do not forget a stylish coat for outdoor photos.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Best Outfit Choices:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>- Velvet or satin evening gown</li>
                  <li>- Long-sleeve cocktail dress</li>
                  <li>- Sequined or metallic dress for NYE weddings</li>
                  <li>- Elegant jumpsuit with blazer</li>
                  <li>- Closed-toe heels and a statement coat</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Perfect Colors:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Black", "Midnight Blue", "Emerald", "Burgundy", "Silver", "Gold", "Deep Purple", "Champagne"].map((color) => (
                    <span key={color} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{color}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Colors Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Best Colors for Wedding Guests</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-3 h-3 rounded-full bg-green-500 mr-3"></span>
                Colors That Always Work
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Navy Blue</h4>
                  <p className="text-gray-600 text-sm">The most universally flattering and appropriate wedding color. Works for any formality level.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Burgundy / Wine</h4>
                  <p className="text-gray-600 text-sm">Rich and romantic, perfect for fall and winter weddings.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Emerald Green</h4>
                  <p className="text-gray-600 text-sm">Elegant and eye-catching without being too bold.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Dusty Blue / Sage</h4>
                  <p className="text-gray-600 text-sm">Soft and romantic, ideal for spring and summer celebrations.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Blush / Mauve</h4>
                  <p className="text-gray-600 text-sm">Feminine and flattering for most skin tones.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-3 h-3 rounded-full bg-red-500 mr-3"></span>
                Colors to Approach with Caution
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">White / Ivory / Cream</h4>
                  <p className="text-gray-600 text-sm">Never wear these - they are reserved for the bride only.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Black</h4>
                  <p className="text-gray-600 text-sm">Generally fine for evening/formal weddings, but avoid for daytime or casual events in some cultures.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Red</h4>
                  <p className="text-gray-600 text-sm">Can be seen as attention-seeking. If wearing red, choose a muted shade like burgundy or wine.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Neon / Overly Bright</h4>
                  <p className="text-gray-600 text-sm">Too attention-grabbing for a wedding setting.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Bridal Colors</h4>
                  <p className="text-gray-600 text-sm">Check if the bridesmaids have a specific color - avoid matching them.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-pink-50 rounded-2xl p-6 text-center">
            <p className="text-gray-700">
              Not sure which colors flatter you best? Understanding your <Link to="/what-season-am-i" className="text-pink-600 hover:text-pink-700 font-semibold underline">color season</Link> and <Link to="/what-colors-suit-me" className="text-pink-600 hover:text-pink-700 font-semibold underline">best colors for your skin tone</Link> can help you choose the perfect wedding guest outfit.
            </p>
          </div>
        </div>
      </section>

      {/* What NOT to Wear */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">What NOT to Wear to a Wedding</h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Avoid these common wedding guest fashion mistakes to ensure you are remembered for the right reasons.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Absolute No-Gos</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3">X</span>
                  <div>
                    <span className="font-semibold">White, ivory, cream, or champagne</span>
                    <p className="text-sm text-gray-600">These colors are exclusively for the bride</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3">X</span>
                  <div>
                    <span className="font-semibold">Anything too revealing</span>
                    <p className="text-sm text-gray-600">Deep plunging necklines, very short skirts, or overly sheer fabrics</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3">X</span>
                  <div>
                    <span className="font-semibold">Jeans and casual wear</span>
                    <p className="text-sm text-gray-600">Unless specifically stated as the dress code</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3">X</span>
                  <div>
                    <span className="font-semibold">Flip flops or sneakers</span>
                    <p className="text-sm text-gray-600">Even for casual weddings, choose dressy sandals or flats</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Proceed with Caution</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-500 font-bold mr-3">!</span>
                  <div>
                    <span className="font-semibold">All-black outfits</span>
                    <p className="text-sm text-gray-600">Fine for formal evening weddings, but can seem somber for daytime events</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 font-bold mr-3">!</span>
                  <div>
                    <span className="font-semibold">Bright red</span>
                    <p className="text-sm text-gray-600">Can be seen as attention-seeking or bad luck in some cultures</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 font-bold mr-3">!</span>
                  <div>
                    <span className="font-semibold">Floor-length gowns at casual weddings</span>
                    <p className="text-sm text-gray-600">Can make you look overdressed and uncomfortable</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 font-bold mr-3">!</span>
                  <div>
                    <span className="font-semibold">The same color as the bridesmaids</span>
                    <p className="text-sm text-gray-600">Check with the couple if you are unsure about their color scheme</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Other Etiquette Tips</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <ul className="space-y-2">
                <li>- Do not wear anything that could upstage the bride</li>
                <li>- Avoid logos, political statements, or graphic prints</li>
                <li>- Skip strong perfumes that might bother other guests</li>
                <li>- Do not wear workout clothes even if the invitation says casual</li>
              </ul>
              <ul className="space-y-2">
                <li>- Avoid excessive jewelry that clinks or jingles</li>
                <li>- Do not carry oversized bags - opt for a small clutch</li>
                <li>- Skip hats that block views during the ceremony</li>
                <li>- Avoid anything wrinkled or stained</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Outfit Ideas by Body Type */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Wedding Guest Outfits by Body Type</h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Choose silhouettes that flatter your unique figure for maximum confidence on the big day.
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hourglass Body Type</h3>
              <p className="text-gray-700 mb-3">Your balanced proportions look stunning in fitted styles that highlight your waist.</p>
              <p className="text-gray-600 text-sm">
                Best options: Wrap dresses, belted midi dresses, fitted sheath dresses, and anything with a defined waistline.
                <Link to="/hourglass-body-type" className="text-pink-600 hover:text-pink-700 ml-1 font-medium">Learn more about dressing hourglass shapes</Link>
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pear Body Shape</h3>
              <p className="text-gray-700 mb-3">Draw attention upward with interesting necklines and structured shoulders.</p>
              <p className="text-gray-600 text-sm">
                Best options: A-line dresses, fit-and-flare silhouettes, statement sleeves, and bold tops with simpler bottoms.
                <Link to="/pear-body-shape" className="text-pink-600 hover:text-pink-700 ml-1 font-medium">Explore pear body shape styling tips</Link>
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apple Body Shape</h3>
              <p className="text-gray-700 mb-3">Empire waists and flowing fabrics create beautiful, comfortable silhouettes.</p>
              <p className="text-gray-600 text-sm">
                Best options: Empire waist dresses, V-necklines, A-line shapes, and flowy midi dresses that skim the midsection.
                <Link to="/apple-body-shape" className="text-pink-600 hover:text-pink-700 ml-1 font-medium">Discover apple body shape style guide</Link>
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rectangle Body Type</h3>
              <p className="text-gray-700 mb-3">Create curves with ruching, peplums, and strategic details.</p>
              <p className="text-gray-600 text-sm">
                Best options: Ruched dresses, peplum styles, belted designs, and dresses with interesting texture or draping.
                <Link to="/rectangle-body-type" className="text-pink-600 hover:text-pink-700 ml-1 font-medium">See rectangle body type outfit ideas</Link>
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inverted Triangle Body</h3>
              <p className="text-gray-700 mb-3">Balance broader shoulders with fuller skirts and detailed bottoms.</p>
              <p className="text-gray-600 text-sm">
                Best options: A-line dresses, full midi skirts, V-necklines, and styles that add volume to the lower half.
                <Link to="/inverted-triangle-body" className="text-pink-600 hover:text-pink-700 ml-1 font-medium">Read inverted triangle styling advice</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Completing Your Wedding Guest Look</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-pink-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Shoes</h3>
              <ul className="text-gray-700 space-y-2">
                <li>- Consider the venue terrain</li>
                <li>- Block heels for outdoor events</li>
                <li>- Bring backup flats for dancing</li>
                <li>- Break in new shoes beforehand</li>
                <li>- Match formality to dress code</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bags</h3>
              <ul className="text-gray-700 space-y-2">
                <li>- Small clutch or crossbody</li>
                <li>- Fits phone, lipstick, and ID</li>
                <li>- Coordinate with outfit colors</li>
                <li>- Avoid oversized totes</li>
                <li>- Consider a wristlet for dancing</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Jewelry</h3>
              <ul className="text-gray-700 space-y-2">
                <li>- Match metals to your skin tone</li>
                <li>- Statement earrings OR necklace</li>
                <li>- Avoid anything too noisy</li>
                <li>- Consider the neckline</li>
                <li>- Simple elegance over flashy</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Pro Tip: Your Wedding Guest Checklist</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-4 h-4 border-2 border-gray-400 rounded mr-3"></span>
                  Outfit matches dress code
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 border-2 border-gray-400 rounded mr-3"></span>
                  Comfortable shoes packed
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 border-2 border-gray-400 rounded mr-3"></span>
                  Weather-appropriate layers
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 border-2 border-gray-400 rounded mr-3"></span>
                  Outfit tested for sitting/dancing
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-4 h-4 border-2 border-gray-400 rounded mr-3"></span>
                  Small clutch with essentials
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 border-2 border-gray-400 rounded mr-3"></span>
                  Jewelry selected and cleaned
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 border-2 border-gray-400 rounded mr-3"></span>
                  Outfit steamed/ironed
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 border-2 border-gray-400 rounded mr-3"></span>
                  Backup options identified
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can I wear black to a wedding?</h3>
              <p className="text-gray-700">
                Yes, black is generally acceptable for evening and formal weddings. It is considered elegant and sophisticated. However, for daytime, casual, or outdoor weddings, black can feel too somber. In some cultures, black is associated with mourning, so consider the couple's background. When in doubt, add colorful accessories to brighten the look.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Is it okay to wear red to a wedding?</h3>
              <p className="text-gray-700">
                Red can be controversial. In Western cultures, some see it as attention-seeking, while in Chinese culture, red is the traditional bridal color. If you want to wear red, opt for deeper shades like burgundy or wine rather than bright red. Also, keep the style elegant and not too revealing. When in doubt, choose a different color.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What does cocktail attire mean?</h3>
              <p className="text-gray-700">
                Cocktail attire is semi-formal dress code that falls between formal and casual. For women, this typically means a knee-length or midi cocktail dress, dressy separates, or an elegant jumpsuit. Think polished and put-together but not as formal as black tie. You can express more personality here while still looking refined.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can I wear pants or a jumpsuit to a wedding?</h3>
              <p className="text-gray-700">
                Absolutely! A well-tailored jumpsuit or dressy pants with an elegant top are perfectly appropriate for most weddings. For formal events, choose luxe fabrics like silk or satin. For cocktail attire, a chic wide-leg pant with a beautiful blouse works wonderfully. Just ensure your outfit matches the formality of the event.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What if the invitation does not specify a dress code?</h3>
              <p className="text-gray-700">
                When no dress code is mentioned, consider the venue, time, and season. A hotel ballroom suggests semi-formal to formal, while a backyard ceremony indicates dressy casual. Evening weddings are typically more formal than daytime. When truly unsure, cocktail attire is usually a safe middle ground. You can also reach out to the couple or someone in the wedding party for guidance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How early should I plan my wedding guest outfit?</h3>
              <p className="text-gray-700">
                Ideally, start planning 4-6 weeks before the wedding. This gives you time to shop, try on options, make alterations if needed, and find the perfect accessories. Last-minute shopping often leads to stress and settling for something that does not feel quite right. Plus, if you are ordering online, you will have time for exchanges if something does not fit.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can I wear the same dress to multiple weddings?</h3>
              <p className="text-gray-700">
                Yes, absolutely! Unless you are attending multiple weddings with the same guest list, there is no reason not to rewear a great dress. To make it feel fresh, style it differently with new accessories, a different hairstyle, or varied shoes. Investing in one quality, versatile piece is actually more sustainable than buying multiple cheap dresses.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What should I wear to a winter beach wedding?</h3>
              <p className="text-gray-700">
                Winter beach weddings require balancing the casual beach setting with weather-appropriate choices. Opt for longer hemlines, long sleeves or a stylish wrap, and closed-toe shoes like ankle boots or block heels. Rich jewel tones or deeper earth tones work well. Bring layers for temperature changes and choose fabrics that will not be ruined by wind or sand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Style Guides</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/capsule-wardrobe" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Capsule Wardrobe Guide</h3>
              <p className="text-gray-600 text-sm">Build a versatile wardrobe with pieces that work for any occasion.</p>
            </Link>

            <Link to="/what-to-wear-job-interview" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Interview Outfit Ideas</h3>
              <p className="text-gray-600 text-sm">Professional outfit inspiration for making great first impressions.</p>
            </Link>

            <Link to="/find-your-personal-style" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Find Your Personal Style</h3>
              <p className="text-gray-600 text-sm">Discover your unique fashion identity and build confidence.</p>
            </Link>

            <Link to="/old-money-aesthetic" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Old Money Aesthetic</h3>
              <p className="text-gray-600 text-sm">Timeless elegance perfect for formal wedding events.</p>
            </Link>

            <Link to="/quiet-luxury-style" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Quiet Luxury Style</h3>
              <p className="text-gray-600 text-sm">Understated elegance that whispers sophistication.</p>
            </Link>

            <Link to="/spring-2025-fashion-trends" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Spring 2025 Trends</h3>
              <p className="text-gray-600 text-sm">Stay current with the latest fashion for upcoming weddings.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Find Your Perfect Wedding Guest Outfit
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius helps you find dresses and outfits that flatter your body type and complement your skin tone - so you look and feel amazing at every wedding.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Color Match</h4>
                  <p className="text-sm text-gray-600">See if dress colors complement your skin tone while browsing</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👗</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Virtual Try-On</h4>
                  <p className="text-sm text-gray-600">See how dresses look on you before you buy</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Price Tracking</h4>
                  <p className="text-sm text-gray-600">Save wedding guest dresses and get alerts when prices drop</p>
                </div>
              </div>
            </div>

            <a
              href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(45deg, #F472B6, #EC4899)' }}
              >
                Add to Chrome - It is Free
              </button>
            </a>
            <p className="text-sm text-gray-500 mt-4">Works on Zara, H&M, ASOS, Nordstrom, and 1000+ more stores</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WeddingGuestOutfits;
