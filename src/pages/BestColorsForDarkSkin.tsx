import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import ExtensionCTA from "../components/ExtensionCTA";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

// Color data for each dark skin tone
const skinTones = {
  caramel: {
    name: "Caramel",
    description: "Rich medium-dark complexion with golden-brown undertones. Think honey, toffee, and warm brown sugar.",
    harmony: [
      { hex: "#D4AF37", name: "Gold" },
      { hex: "#CD853F", name: "Peru" },
      { hex: "#C19A6B", name: "Camel" },
      { hex: "#DEB887", name: "Burlywood" },
      { hex: "#D2691E", name: "Chocolate" },
      { hex: "#B87333", name: "Copper" },
      { hex: "#F4A460", name: "Sandy Brown" },
      { hex: "#DAA520", name: "Goldenrod" }
    ],
    harmonyExplanation: "Warm, rich tones create beautiful harmony with caramel skin, enhancing your natural golden-brown glow. These colors complement your warm undertones and bring out the depth and richness of your complexion.",
    contrasting: [
      { hex: "#50C878", name: "Emerald Green" },
      { hex: "#0F52BA", name: "Sapphire Blue" },
      { hex: "#E0115F", name: "Ruby Red" },
      { hex: "#9966CC", name: "Amethyst" },
      { hex: "#800020", name: "Burgundy" },
      { hex: "#5F9EA0", name: "Teal" },
      { hex: "#6A0DAD", name: "Deep Purple" },
      { hex: "#B7410E", name: "Rust" }
    ],
    contrastingExplanation: "Jewel tones and saturated colors provide stunning contrast against caramel skin, making your complexion radiate. Deep, vibrant hues add dimension and create visual drama while highlighting your warm undertones.",
    avoid: [
      { hex: "#F5F5DC", name: "Beige" },
      { hex: "#FAF0E6", name: "Linen" },
      { hex: "#C0C0C0", name: "Silver" },
      { hex: "#556B2F", name: "Olive Drab" },
      { hex: "#6B8E23", name: "Olive Green" },
      { hex: "#DCDCDC", name: "Gray White" },
      { hex: "#F0EAD6", name: "Eggshell" },
      { hex: "#8B8680", name: "Gray Brown" }
    ],
    avoidExplanation: "Colors too close to your skin tone wash you out and create a flat appearance. Off-whites with yellow or gray undertones make your skin look dull. Certain olive greens with gray undertones clash with your warm complexion."
  },
  bronze: {
    name: "Bronze",
    description: "Deep warm brown with rich copper and golden undertones. Your skin has a natural metallic warmth that glows in sunlight.",
    harmony: [
      { hex: "#CD7F32", name: "Bronze" },
      { hex: "#B87333", name: "Copper" },
      { hex: "#E67E22", name: "Terracotta" },
      { hex: "#B7410E", name: "Rust" },
      { hex: "#FFD700", name: "Gold" },
      { hex: "#8B4513", name: "Saddle Brown" },
      { hex: "#DAA520", name: "Goldenrod" },
      { hex: "#FFDB58", name: "Mustard" }
    ],
    harmonyExplanation: "Warm earth tones and metallic shades create beautiful harmony with bronze skin, enhancing your natural richness and depth. These colors complement your warm undertones and bring out the luxurious quality of your complexion.",
    contrasting: [
      { hex: "#50C878", name: "Emerald Green" },
      { hex: "#0F52BA", name: "Sapphire Blue" },
      { hex: "#E0115F", name: "Ruby Red" },
      { hex: "#9966CC", name: "Amethyst Purple" },
      { hex: "#000080", name: "Navy" },
      { hex: "#36454F", name: "Charcoal" },
      { hex: "#FFFFFF", name: "Pure White" },
      { hex: "#6A0DAD", name: "Royal Purple" }
    ],
    contrastingExplanation: "Vibrant jewel tones and deep saturated colors provide stunning contrast against bronze skin, making your complexion glow magnificently. Bold, rich colors add dimension and create visual drama while highlighting your beautiful dark tone.",
    avoid: [
      { hex: "#D2B48C", name: "Tan" },
      { hex: "#F5DEB3", name: "Wheat" },
      { hex: "#C0C0C0", name: "Silver" },
      { hex: "#FFB6C1", name: "Pastel Pink" },
      { hex: "#E0FFFF", name: "Light Cyan" },
      { hex: "#00FF00", name: "Neon Green" },
      { hex: "#FF1493", name: "Neon Pink" },
      { hex: "#BDB76B", name: "Dark Khaki" }
    ],
    avoidExplanation: "Muddy beiges too close to your skin tone wash you out and lack definition. Washed-out colors make your complexion appear dull. Harsh pastels and neons clash with your rich undertones."
  },
  espresso: {
    name: "Espresso",
    description: "Deep, rich brown like fresh coffee. Your skin has incredible depth with either warm or cool undertones that can carry bold, vibrant colors.",
    harmony: [
      { hex: "#FFD700", name: "Gold" },
      { hex: "#FF4500", name: "Orange Red" },
      { hex: "#8B0000", name: "Dark Red" },
      { hex: "#4B0082", name: "Indigo" },
      { hex: "#228B22", name: "Forest Green" },
      { hex: "#FF1493", name: "Deep Pink" },
      { hex: "#DC143C", name: "Crimson" },
      { hex: "#00CED1", name: "Dark Turquoise" }
    ],
    harmonyExplanation: "Bold, saturated colors and vibrant jewel tones create beautiful harmony with espresso skin, celebrating your rich, deep complexion. These powerful colors match the intensity and depth of your skin tone, creating a striking appearance.",
    contrasting: [
      { hex: "#50C878", name: "Emerald" },
      { hex: "#0F52BA", name: "Sapphire" },
      { hex: "#E0115F", name: "Ruby" },
      { hex: "#4169E1", name: "Royal Blue" },
      { hex: "#FFFFFF", name: "True White" },
      { hex: "#00FFFF", name: "Cyan" },
      { hex: "#FFFF00", name: "Lemon Yellow" },
      { hex: "#FF69B4", name: "Hot Pink" }
    ],
    contrastingExplanation: "Bright, vivid colors and icy pastels provide stunning contrast against espresso skin, making your complexion radiate. High-contrast combinations create dramatic, eye-catching looks that showcase the beauty of your deep skin tone.",
    avoid: [
      { hex: "#654321", name: "Dark Brown" },
      { hex: "#000000", name: "Black" },
      { hex: "#B0E0E6", name: "Powder Blue" },
      { hex: "#FFDAB9", name: "Peach Puff" },
      { hex: "#D2B48C", name: "Tan" },
      { hex: "#F5DEB3", name: "Wheat" },
      { hex: "#E6E6FA", name: "Lavender" },
      { hex: "#8B4513", name: "Saddle Brown" }
    ],
    avoidExplanation: "Very dark colors like deep brown or black fade into your skin tone and lack definition. Muted browns and light pastels don't provide enough contrast and can make you appear washed out."
  },
  richBronze: {
    name: "Rich Bronze / Deep Chocolate",
    description: "Deep, luxurious brown with chocolate undertones. Your skin has incredible richness that looks stunning with both bold and metallic colors.",
    harmony: [
      { hex: "#8B4513", name: "Saddle Brown" },
      { hex: "#A0522D", name: "Sienna" },
      { hex: "#CD853F", name: "Peru" },
      { hex: "#B87333", name: "Copper" },
      { hex: "#D2691E", name: "Chocolate" },
      { hex: "#B7410E", name: "Rust" },
      { hex: "#E97451", name: "Burnt Sienna" },
      { hex: "#DAA520", name: "Goldenrod" }
    ],
    harmonyExplanation: "Deep, warm earth tones create beautiful harmony with rich bronze skin, enhancing your chocolate undertones. These colors complement your natural depth and bring out the luxurious richness of your complexion.",
    contrasting: [
      { hex: "#50C878", name: "Emerald" },
      { hex: "#0F52BA", name: "Sapphire" },
      { hex: "#E0115F", name: "Ruby" },
      { hex: "#9966CC", name: "Amethyst" },
      { hex: "#FFD700", name: "Gold" },
      { hex: "#FFFFFF", name: "Pure White" },
      { hex: "#FF1493", name: "Deep Pink" },
      { hex: "#4169E1", name: "Royal Blue" }
    ],
    contrastingExplanation: "Vibrant jewel tones and bold saturated colors provide stunning contrast against rich bronze skin, making your complexion glow magnificently. These contrasting shades add dimension and create visual drama.",
    avoid: [
      { hex: "#654321", name: "Dark Brown" },
      { hex: "#000000", name: "Black" },
      { hex: "#D2B48C", name: "Tan" },
      { hex: "#F5DEB3", name: "Wheat" },
      { hex: "#FFB6C1", name: "Light Pink" },
      { hex: "#E0FFFF", name: "Light Cyan" },
      { hex: "#808080", name: "Gray" },
      { hex: "#DCDCDC", name: "Gainsboro" }
    ],
    avoidExplanation: "Very dark browns and blacks fade into your skin tone and lack definition. Muddy beiges create a washed-out appearance. Light pastels don't provide enough contrast and can make you appear dull."
  }
};

const BestColorsForDarkSkin = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Best Colors for Dark Skin: Ultimate Guide for Every Tone (2026)"
        description="Complete guide to the best colors for dark skin tones. Find your perfect palette for caramel, bronze, espresso & deep skin. Harmony colors, contrasting colors & what to avoid."
        keywords="best colors for dark skin, colors for dark skin tone, dark skin fashion, melanin rich skin colors, what colors suit dark skin, colors for caramel skin, colors for espresso skin, colors for bronze skin, dark skin color palette, flattering colors dark complexion"
        canonicalUrl="/best-colors-for-dark-skin"
        ogImage="/dark-skin-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-11-20",
          modifiedTime: "2026-01-10",
          section: "Color Analysis",
          tags: ["dark skin", "deep skin tone", "color guide", "melanin", "color analysis", "fashion"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Best Colors for Dark Skin", url: "/best-colors-for-dark-skin" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">Complete Color Guide</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Best Colors for{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(45deg, #8B4513, #FFD700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Dark Skin
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The ultimate guide to colors that make dark skin tones absolutely radiate. From caramel to espresso - find your perfect palette.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/dark-skin-hero.png`}
              alt="Best colors for dark skin - vibrant outfit inspiration"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-lg font-bold text-gray-900 mb-4">In This Guide:</h2>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <a href="#why-color-matters" className="text-pink-600 hover:underline">Why Color Matters for Dark Skin</a>
            <a href="#understanding-undertones" className="text-pink-600 hover:underline">Understanding Your Undertone</a>
            <a href="#caramel" className="text-pink-600 hover:underline">Colors for Caramel Skin</a>
            <a href="#bronze" className="text-pink-600 hover:underline">Colors for Bronze Skin</a>
            <a href="#espresso" className="text-pink-600 hover:underline">Colors for Espresso Skin</a>
            <a href="#deep-chocolate" className="text-pink-600 hover:underline">Colors for Deep Chocolate Skin</a>
            <a href="#universal-colors" className="text-pink-600 hover:underline">Universal Colors That Work</a>
            <a href="#colors-to-avoid" className="text-pink-600 hover:underline">Colors to Avoid</a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Introduction */}
          <section className="mb-16" id="why-color-matters">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Color Matters for Dark Skin</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Dark skin is incredibly versatile and can carry bold, vibrant colors that would overwhelm lighter complexions. The rich melanin in darker skin creates a natural canvas that makes colors pop in stunning ways.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The key principle: <strong>don't be afraid of color!</strong> Your skin can handle saturation and brightness that would wash out lighter tones. This is your superpower - embrace it.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              But not all dark skin is the same. Understanding your specific tone - from caramel to espresso - and your undertone (warm, cool, or neutral) will help you find the colors that make you absolutely glow.
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Three Types of Colors</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">&#127912;</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Harmony Colors</h4>
                  <p className="text-gray-600 text-sm">Colors that blend beautifully with your skin tone, creating a cohesive, elegant look. Perfect for everyday wear and professional settings.</p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">&#10024;</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Contrasting Colors</h4>
                  <p className="text-gray-600 text-sm">Bold colors that pop against your skin, creating drama and making you stand out. Great for events and when you want to make a statement.</p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">&#128683;</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Colors to Avoid</h4>
                  <p className="text-gray-600 text-sm">Colors that wash you out, blend too much with your skin, or create unflattering effects. Skip these for the most part.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Understanding Undertones */}
          <section className="mb-16" id="understanding-undertones">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Your Undertone</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Even within dark skin tones, undertones vary significantly. Your undertone is the color beneath the surface of your skin - and it determines which colors make you glow vs. look dull.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-amber-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Warm Undertones</h4>
                <p className="text-gray-600 text-sm mb-4">Your skin has golden, red, yellow, or amber undertones. Gold jewelry looks amazing on you.</p>
                <p className="text-amber-700 text-sm font-medium">Common in: Caramel, Bronze, Warm Caramel tones</p>
                <div className="flex gap-2 mt-4">
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#FFD700' }} title="Gold"></div>
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#B87333' }} title="Copper"></div>
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#CD853F' }} title="Peru"></div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Cool Undertones</h4>
                <p className="text-gray-600 text-sm mb-4">Your skin has blue, purple, or red undertones. Silver jewelry complements you best.</p>
                <p className="text-blue-700 text-sm font-medium">Common in: Espresso, Deep Chocolate tones</p>
                <div className="flex gap-2 mt-4">
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#C0C0C0' }} title="Silver"></div>
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#4169E1' }} title="Royal Blue"></div>
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#9966CC' }} title="Amethyst"></div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Neutral Undertones</h4>
                <p className="text-gray-600 text-sm mb-4">You have a mix of warm and cool, or neither dominates. Both gold and silver look great on you.</p>
                <p className="text-gray-600 text-sm font-medium">Lucky you - most colors work!</p>
                <div className="flex gap-2 mt-4">
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#FFD700' }} title="Gold"></div>
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#C0C0C0' }} title="Silver"></div>
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#E5AA70' }} title="Neutral"></div>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-2">Quick Test: Check Your Veins</h4>
              <p className="text-gray-600">Look at the veins on your inner wrist in natural light. Green veins = warm undertone. Blue/purple veins = cool undertone. Mix of both = neutral undertone.</p>
            </div>
          </section>

          {/* Caramel Skin Section */}
          <section className="mb-20" id="caramel">
            <div className="border-l-4 border-amber-400 pl-6 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Colors for Caramel Skin</h2>
              <p className="text-lg text-gray-600">{skinTones.caramel.description}</p>
            </div>

            <div className="mb-8 flex justify-center">
              <img
                src="/u1745554767_caramel_brown_skin_tone_woman_rich_medium_dark_co_9131d80d-6aff-4cd4-93f8-ba79410ab85f_1.png"
                alt="Caramel skin tone example - rich medium-dark complexion with golden-brown undertones"
                className="w-64 h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Harmony Colors */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-lg">&#127912;</span>
                Harmony Colors
              </h3>
              <p className="text-gray-700 mb-6">{skinTones.caramel.harmonyExplanation}</p>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                {skinTones.caramel.harmony.map((color) => (
                  <div key={color.hex} className="text-center">
                    <div
                      className="w-full aspect-square rounded-xl shadow-md border border-gray-100 mb-2"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                    <span className="text-xs text-gray-600">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contrasting Colors */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-lg">&#10024;</span>
                Contrasting Colors
              </h3>
              <p className="text-gray-700 mb-6">{skinTones.caramel.contrastingExplanation}</p>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                {skinTones.caramel.contrasting.map((color) => (
                  <div key={color.hex} className="text-center">
                    <div
                      className="w-full aspect-square rounded-xl shadow-md border border-gray-100 mb-2"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                    <span className="text-xs text-gray-600">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Colors to Avoid */}
            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-xl">&#128683;</span>
                Colors to Avoid
              </h3>
              <p className="text-gray-700 mb-6">{skinTones.caramel.avoidExplanation}</p>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                {skinTones.caramel.avoid.map((color) => (
                  <div key={color.hex} className="text-center opacity-60">
                    <div
                      className="w-full aspect-square rounded-xl shadow-md border border-gray-200 mb-2 relative"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-red-500 text-2xl font-bold">&#10005;</span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Bronze Skin Section */}
          <section className="mb-20" id="bronze">
            <div className="border-l-4 border-orange-400 pl-6 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Colors for Bronze Skin</h2>
              <p className="text-lg text-gray-600">{skinTones.bronze.description}</p>
            </div>

            <div className="mb-8 flex justify-center">
              <img
                src="/u1745554767_light_dark_brown_skin_tone_woman_milk_chocolate_c_b6b03f4d-5909-471b-84d7-b5c47dc2d534_0.png"
                alt="Bronze skin tone example - deep warm brown with copper and golden undertones"
                className="w-64 h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Harmony Colors */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-lg">&#127912;</span>
                Harmony Colors
              </h3>
              <p className="text-gray-700 mb-6">{skinTones.bronze.harmonyExplanation}</p>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                {skinTones.bronze.harmony.map((color) => (
                  <div key={color.hex} className="text-center">
                    <div
                      className="w-full aspect-square rounded-xl shadow-md border border-gray-100 mb-2"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                    <span className="text-xs text-gray-600">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contrasting Colors */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-lg">&#10024;</span>
                Contrasting Colors
              </h3>
              <p className="text-gray-700 mb-6">{skinTones.bronze.contrastingExplanation}</p>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                {skinTones.bronze.contrasting.map((color) => (
                  <div key={color.hex} className="text-center">
                    <div
                      className="w-full aspect-square rounded-xl shadow-md border border-gray-100 mb-2"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                    <span className="text-xs text-gray-600">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Colors to Avoid */}
            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-xl">&#128683;</span>
                Colors to Avoid
              </h3>
              <p className="text-gray-700 mb-6">{skinTones.bronze.avoidExplanation}</p>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                {skinTones.bronze.avoid.map((color) => (
                  <div key={color.hex} className="text-center opacity-60">
                    <div
                      className="w-full aspect-square rounded-xl shadow-md border border-gray-200 mb-2 relative"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-red-500 text-2xl font-bold">&#10005;</span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Espresso Skin Section */}
          <section className="mb-20" id="espresso">
            <div className="border-l-4 border-amber-800 pl-6 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Colors for Espresso Skin</h2>
              <p className="text-lg text-gray-600">{skinTones.espresso.description}</p>
            </div>

            <div className="mb-8 flex justify-center">
              <img
                src="/u1745554767_deep_chocolate_brown_skin_tone_woman_dark_rich_co_281cbac2-7af4-4b0c-9899-fc1d0a0d5190_3.png"
                alt="Espresso skin tone example - deep rich brown like fresh coffee"
                className="w-64 h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Harmony Colors */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-lg">&#127912;</span>
                Harmony Colors
              </h3>
              <p className="text-gray-700 mb-6">{skinTones.espresso.harmonyExplanation}</p>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                {skinTones.espresso.harmony.map((color) => (
                  <div key={color.hex} className="text-center">
                    <div
                      className="w-full aspect-square rounded-xl shadow-md border border-gray-100 mb-2"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                    <span className="text-xs text-gray-600">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contrasting Colors */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-lg">&#10024;</span>
                Contrasting Colors
              </h3>
              <p className="text-gray-700 mb-6">{skinTones.espresso.contrastingExplanation}</p>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                {skinTones.espresso.contrasting.map((color) => (
                  <div key={color.hex} className="text-center">
                    <div
                      className="w-full aspect-square rounded-xl shadow-md border border-gray-100 mb-2"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                    <span className="text-xs text-gray-600">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Colors to Avoid */}
            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-xl">&#128683;</span>
                Colors to Avoid
              </h3>
              <p className="text-gray-700 mb-6">{skinTones.espresso.avoidExplanation}</p>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                {skinTones.espresso.avoid.map((color) => (
                  <div key={color.hex} className="text-center opacity-60">
                    <div
                      className="w-full aspect-square rounded-xl shadow-md border border-gray-200 mb-2 relative"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-red-500 text-2xl font-bold">&#10005;</span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Deep Chocolate / Rich Bronze Section */}
          <section className="mb-20" id="deep-chocolate">
            <div className="border-l-4 border-amber-900 pl-6 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Colors for Deep Chocolate / Ebony Skin</h2>
              <p className="text-lg text-gray-600">{skinTones.richBronze.description}</p>
            </div>

            <div className="mb-8 flex justify-center">
              <img
                src="/u1745554767_very_dark_ebony_skin_tone_woman_deepest_brown_com_46a0163d-20d4-4c1f-9f87-8db6b6acf8c2_3.png"
                alt="Deep chocolate / ebony skin tone example - deepest brown complexion"
                className="w-64 h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Harmony Colors */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-lg">&#127912;</span>
                Harmony Colors
              </h3>
              <p className="text-gray-700 mb-6">{skinTones.richBronze.harmonyExplanation}</p>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                {skinTones.richBronze.harmony.map((color) => (
                  <div key={color.hex} className="text-center">
                    <div
                      className="w-full aspect-square rounded-xl shadow-md border border-gray-100 mb-2"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                    <span className="text-xs text-gray-600">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contrasting Colors */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-lg">&#10024;</span>
                Contrasting Colors
              </h3>
              <p className="text-gray-700 mb-6">{skinTones.richBronze.contrastingExplanation}</p>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                {skinTones.richBronze.contrasting.map((color) => (
                  <div key={color.hex} className="text-center">
                    <div
                      className="w-full aspect-square rounded-xl shadow-md border border-gray-100 mb-2"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                    <span className="text-xs text-gray-600">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Colors to Avoid */}
            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-xl">&#128683;</span>
                Colors to Avoid
              </h3>
              <p className="text-gray-700 mb-6">{skinTones.richBronze.avoidExplanation}</p>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                {skinTones.richBronze.avoid.map((color) => (
                  <div key={color.hex} className="text-center opacity-60">
                    <div
                      className="w-full aspect-square rounded-xl shadow-md border border-gray-200 mb-2 relative"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-red-500 text-2xl font-bold">&#10005;</span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Universal Colors */}
          <section className="mb-16" id="universal-colors">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Universal Colors That Work on All Dark Skin Tones</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              These colors look stunning on virtually every dark skin tone, regardless of undertone. When in doubt, reach for these:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Jewel Tones</h3>
                <p className="text-gray-600 mb-4">Rich, saturated colors that make dark skin glow.</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { hex: "#50C878", name: "Emerald" },
                    { hex: "#0F52BA", name: "Sapphire" },
                    { hex: "#E0115F", name: "Ruby" },
                    { hex: "#9966CC", name: "Amethyst" },
                    { hex: "#40E0D0", name: "Turquoise" }
                  ].map((color) => (
                    <div key={color.hex} className="flex items-center gap-2 bg-white rounded-full px-3 py-1">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color.hex }}></div>
                      <span className="text-sm text-gray-700">{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Warm Metallics</h3>
                <p className="text-gray-600 mb-4">Gold, copper, and bronze enhance your natural warmth.</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { hex: "#FFD700", name: "Gold" },
                    { hex: "#B87333", name: "Copper" },
                    { hex: "#CD7F32", name: "Bronze" },
                    { hex: "#DAA520", name: "Goldenrod" }
                  ].map((color) => (
                    <div key={color.hex} className="flex items-center gap-2 bg-white rounded-full px-3 py-1">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color.hex }}></div>
                      <span className="text-sm text-gray-700">{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bold Brights</h3>
                <p className="text-gray-600 mb-4">Vibrant colors that create stunning contrast.</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { hex: "#FFFFFF", name: "Pure White" },
                    { hex: "#FF1493", name: "Hot Pink" },
                    { hex: "#FF4500", name: "Orange Red" },
                    { hex: "#FFFF00", name: "Yellow" },
                    { hex: "#00FFFF", name: "Cyan" }
                  ].map((color) => (
                    <div key={color.hex} className="flex items-center gap-2 bg-white rounded-full px-3 py-1">
                      <div className="w-4 h-4 rounded-full border border-gray-200" style={{ backgroundColor: color.hex }}></div>
                      <span className="text-sm text-gray-700">{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Classic Darks</h3>
                <p className="text-gray-600 mb-4">Deep colors that add sophistication without blending in.</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { hex: "#000080", name: "Navy" },
                    { hex: "#800020", name: "Burgundy" },
                    { hex: "#36454F", name: "Charcoal" },
                    { hex: "#228B22", name: "Forest Green" }
                  ].map((color) => (
                    <div key={color.hex} className="flex items-center gap-2 bg-white rounded-full px-3 py-1">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color.hex }}></div>
                      <span className="text-sm text-gray-700">{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Colors to Avoid Summary */}
          <section className="mb-16" id="colors-to-avoid">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Colors to Generally Avoid</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              While dark skin is incredibly versatile, some colors tend to wash out or clash with most dark complexions:
            </p>

            <div className="bg-red-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Colors Too Close to Your Skin Tone</h3>
                  <p className="text-gray-600 mb-4">Browns, beiges, and tans that match your skin create a washed-out, flat appearance with no definition.</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { hex: "#D2B48C", name: "Tan" },
                      { hex: "#F5DEB3", name: "Wheat" },
                      { hex: "#8B4513", name: "Dark Brown" },
                      { hex: "#654321", name: "Deep Brown" }
                    ].map((color) => (
                      <div key={color.hex} className="flex items-center gap-2 bg-white rounded-full px-3 py-1 opacity-60">
                        <div className="w-4 h-4 rounded-full relative" style={{ backgroundColor: color.hex }}>
                          <span className="absolute inset-0 flex items-center justify-center text-red-500 text-xs font-bold">&#10005;</span>
                        </div>
                        <span className="text-sm text-gray-500 line-through">{color.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Washed-Out Pastels</h3>
                  <p className="text-gray-600 mb-4">Very pale, muted colors don't provide enough contrast and can make you look dull.</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { hex: "#E0FFFF", name: "Light Cyan" },
                      { hex: "#FFB6C1", name: "Light Pink" },
                      { hex: "#E6E6FA", name: "Lavender" },
                      { hex: "#B0E0E6", name: "Powder Blue" }
                    ].map((color) => (
                      <div key={color.hex} className="flex items-center gap-2 bg-white rounded-full px-3 py-1 opacity-60">
                        <div className="w-4 h-4 rounded-full border border-gray-200 relative" style={{ backgroundColor: color.hex }}>
                          <span className="absolute inset-0 flex items-center justify-center text-red-500 text-xs font-bold">&#10005;</span>
                        </div>
                        <span className="text-sm text-gray-500 line-through">{color.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pro Tips */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pro Tips for Dark Skin</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Go Bold</h3>
                <p className="text-gray-600">Don't shy away from bright, saturated colors. Your skin can handle intensity that would overwhelm lighter tones.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Embrace White</h3>
                <p className="text-gray-600">Pure white creates stunning contrast against dark skin. It's one of your best neutrals.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Play with Prints</h3>
                <p className="text-gray-600">Bold prints and patterns that might overwhelm others look amazing on dark skin. Don't be afraid to experiment.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Consider the Occasion</h3>
                <p className="text-gray-600">Use harmony colors for everyday elegance. Save contrasting colors for when you want to make a statement.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-gray-900 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Find Your Perfect Colors Instantly</h2>
              <p className="text-xl text-gray-300 mb-8">
                StyleGenius analyzes your skin tone and tells you if colors suit you - while you shop. No guessing, no bad buys.
              </p>
              <ExtensionCTA
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all"
              />
              <p className="text-gray-500 text-sm mt-4">
                Free Chrome & Safari extension. Works on 1500+ stores.
              </p>
            </div>
          </section>

          {/* Related Articles */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/dark-winter-colors" className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 group-hover:text-pink-600 mb-2">Dark Winter Color Palette</h3>
                <p className="text-gray-600 text-sm">Bold, cool, and dramatic colors for Dark Winter coloring.</p>
              </Link>
              <Link to="/what-colors-suit-me" className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 group-hover:text-pink-600 mb-2">What Colors Suit Me?</h3>
                <p className="text-gray-600 text-sm">Complete guide to finding your perfect color palette.</p>
              </Link>
              <Link to="/warm-vs-cool-undertones" className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 group-hover:text-pink-600 mb-2">Warm vs Cool Undertones</h3>
                <p className="text-gray-600 text-sm">Learn how to determine your undertone.</p>
              </Link>
            </div>
          </section>

        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BestColorsForDarkSkin;
