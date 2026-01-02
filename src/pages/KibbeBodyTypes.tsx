import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const KibbeBodyTypes = () => {
  const kibbeTypes = [
    {
      name: "Dramatic",
      yinYang: "Pure Yang",
      description: "Tall, angular, and narrow with sharp features. The most yang of all types.",
      characteristics: ["Long vertical line", "Angular bone structure", "Sharp facial features", "Narrow silhouette"],
      styleEssence: "Bold, sleek, and architectural",
      bestStyles: ["Structured pieces", "Sharp shoulders", "Long vertical lines", "Bold geometric patterns"],
      celebrities: "Tilda Swinton, Cate Blanchett, Taylor Swift"
    },
    {
      name: "Soft Dramatic",
      yinYang: "Yang with Yin undercurrent",
      description: "Tall and dramatic frame with soft, sensual flesh. Striking combination of yang structure with yin curves.",
      characteristics: ["Long vertical line", "Large bone structure", "Soft, fleshy body", "Full lips, cheeks"],
      styleEssence: "Glamorous diva, bold and sensual",
      bestStyles: ["Draped fabrics", "Bold jewelry", "Soft shoulders with structure", "Luxurious textures"],
      celebrities: "Sofia Vergara, Sophia Loren, Adele"
    },
    {
      name: "Natural",
      yinYang: "Moderate Yang",
      description: "Broad, athletic build with blunt edges. Fresh and approachable look.",
      characteristics: ["Broad shoulders", "Blunt bone structure", "Straight body", "Wide, blunt features"],
      styleEssence: "Relaxed, fresh, free-spirited",
      bestStyles: ["Relaxed fits", "Natural fabrics", "Unconstructed pieces", "Earth tones"],
      celebrities: "Jennifer Aniston, Cameron Diaz"
    },
    {
      name: "Soft Natural",
      yinYang: "Yang with Yin influence",
      description: "Broad frame with soft edges and curves. Approachable and sensual combination.",
      characteristics: ["Slightly broad shoulders", "Blunt bone structure", "Soft flesh", "Rounded features"],
      styleEssence: "Effortlessly chic, relaxed glamour",
      bestStyles: ["Soft, flowing fabrics", "Relaxed silhouettes", "Gentle draping", "Soft textures"],
      celebrities: "Scarlett Johansson, Jennifer Lawrence, Gigi Hadid"
    },
    {
      name: "Flamboyant Natural",
      yinYang: "Strong Yang",
      description: "Tall, broad, and angular with a free-spirited essence. Bold and unconventional.",
      characteristics: ["Tall stature", "Broad and angular", "Long limbs", "Blunt, irregular features"],
      styleEssence: "Bold, unconventional, free",
      bestStyles: ["Oversized pieces", "Bold patterns", "Asymmetry", "Natural textures"],
      celebrities: "Julia Roberts, Anne Hathaway, Princess Diana"
    },
    {
      name: "Classic",
      yinYang: "Balanced Yin/Yang",
      description: "Perfectly balanced proportions with moderate features. Elegant and symmetrical.",
      characteristics: ["Moderate height", "Balanced bone structure", "Even proportions", "Symmetrical features"],
      styleEssence: "Timeless, refined, elegant",
      bestStyles: ["Tailored pieces", "Balanced silhouettes", "Quality fabrics", "Classic patterns"],
      celebrities: "Grace Kelly, Kate Middleton"
    },
    {
      name: "Soft Classic",
      yinYang: "Balanced with Yin",
      description: "Balanced proportions with soft, rounded edges. Graceful and approachable elegance.",
      characteristics: ["Moderate height", "Balanced but soft bone structure", "Slightly rounded features", "Soft flesh"],
      styleEssence: "Graceful, feminine elegance",
      bestStyles: ["Soft tailoring", "Rounded details", "Feminine classics", "Soft colors"],
      celebrities: "Marion Cotillard, Meryl Streep, Naomi Watts"
    },
    {
      name: "Dramatic Classic",
      yinYang: "Balanced with Yang",
      description: "Balanced proportions with angular edges. Sophisticated and slightly edgy elegance.",
      characteristics: ["Moderate to tall height", "Balanced but angular bone structure", "Sharp features", "Moderate flesh"],
      styleEssence: "Sophisticated, polished, sharp",
      bestStyles: ["Structured classics", "Angular details", "Sharp tailoring", "Bold accessories"],
      celebrities: "Olivia Munn, Diane Kruger, Jackie Kennedy"
    },
    {
      name: "Gamine",
      yinYang: "Mixed opposites",
      description: "Petite with a mix of sharp and rounded features. Fresh, youthful, and spunky.",
      characteristics: ["Short stature", "Angular bone structure", "Mixed features", "Compact body"],
      styleEssence: "Playful, youthful, spirited",
      bestStyles: ["Cropped pieces", "Bold contrasts", "Playful patterns", "Sharp details"],
      celebrities: "Audrey Hepburn, Twiggy, Emma Watson"
    },
    {
      name: "Soft Gamine",
      yinYang: "Mixed with Yin",
      description: "Petite with a mix of features, leaning softer. Cute, fresh, and approachable.",
      characteristics: ["Short stature", "Delicate bone structure", "Rounded edges", "Soft features"],
      styleEssence: "Fresh, cute, playful feminine",
      bestStyles: ["Soft contrasts", "Rounded details", "Playful prints", "Feminine touches"],
      celebrities: "Reese Witherspoon, Halle Berry, Winona Ryder"
    },
    {
      name: "Flamboyant Gamine",
      yinYang: "Mixed with Yang",
      description: "Petite with angular, bold features. Edgy, fresh, and striking.",
      characteristics: ["Short stature", "Angular bone structure", "Sharp features", "Compact, lean body"],
      styleEssence: "Edgy, bold, striking",
      bestStyles: ["Bold contrasts", "Geometric shapes", "Sharp details", "Statement pieces"],
      celebrities: "Liza Minnelli, Zendaya, Pink"
    },
    {
      name: "Romantic",
      yinYang: "Pure Yin",
      description: "Soft, rounded, and sensual. The most yin of all types with lush curves.",
      characteristics: ["Short to moderate height", "Rounded bone structure", "Soft, curvy body", "Full, soft features"],
      styleEssence: "Sensual, feminine, dreamy",
      bestStyles: ["Soft, flowing fabrics", "Rounded silhouettes", "Romantic details", "Delicate textures"],
      celebrities: "Marilyn Monroe, Beyoncé, Kate Winslet"
    },
    {
      name: "Theatrical Romantic",
      yinYang: "Yin with Yang undercurrent",
      description: "Soft and curvy with slight sharpness. Dramatic femininity with an edge.",
      characteristics: ["Petite stature", "Delicate bone structure", "Soft, curvy body", "Some sharpness in features"],
      styleEssence: "Dramatic femininity, glamorous",
      bestStyles: ["Ornate details", "Fitted silhouettes", "Luxurious fabrics", "Bold feminine touches"],
      celebrities: "Salma Hayek, Vivien Leigh, Mila Kunis"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Kibbe Body Types:{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Complete Guide
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Discover your Kibbe body type and learn how to dress for your unique bone structure, flesh, and facial features. The TikTok-viral system explained.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The Kibbe body type system, created by image consultant David Kibbe in the 1980s, has exploded on TikTok and social media. Unlike traditional body typing that focuses on measurements, Kibbe looks at your overall essence - your bone structure, body flesh, and facial features - to determine your "Image Identity."
            </p>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Makes Kibbe Different?</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Instead of trying to "balance" your body or create an illusion, Kibbe celebrates your natural lines. The goal is to dress in harmony with your body's natural geometry - whether that's sharp and angular (Yang) or soft and rounded (Yin). When you honor your natural lines, you look authentically yourself.
              </p>
            </div>
          </div>

          {/* Yin vs Yang */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Understanding Yin and Yang</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Yang (Sharp/Angular)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Bone Structure:</strong> Sharp, angular, prominent</li>
                  <li><strong>Body:</strong> Tall, narrow, lean</li>
                  <li><strong>Facial Features:</strong> Angular, sharp nose, defined jaw</li>
                  <li><strong>Overall:</strong> Dramatic, striking, bold</li>
                </ul>
              </div>

              <div className="bg-pink-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Yin (Soft/Rounded)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Bone Structure:</strong> Delicate, rounded, small</li>
                  <li><strong>Body:</strong> Petite, curved, soft</li>
                  <li><strong>Facial Features:</strong> Round eyes, full lips, soft jaw</li>
                  <li><strong>Overall:</strong> Romantic, sensual, dreamy</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </article>

      {/* All 13 Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            The 13 Kibbe Body Types
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Find your type and discover your most flattering styles
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kibbeTypes.map((type) => (
              <div key={type.name} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{type.name}</h3>
                  <span className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                    {type.yinYang}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 text-sm">{type.description}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Key Characteristics:</p>
                  <div className="flex flex-wrap gap-1">
                    {type.characteristics.slice(0, 3).map((char, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                        {char}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Style Essence:</p>
                  <p className="text-sm text-pink-600 font-medium">{type.styleEssence}</p>
                </div>

                <p className="text-xs text-gray-500">
                  <strong>Examples:</strong> {type.celebrities}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Find Your Type */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Find Your Kibbe Type</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Look at Your Bone Structure</h3>
              <p className="text-gray-700">Are your bones sharp and angular (yang), or delicate and rounded (yin)? Look at your shoulders, collar bone, hands, and facial bones.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Assess Your Body Flesh</h3>
              <p className="text-gray-700">Does your body tend to be lean and angular, or soft and curvy? This is separate from weight - it's about how your flesh naturally sits on your bones.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Examine Your Facial Features</h3>
              <p className="text-gray-700">Are your features sharp and angular (yang), or soft and rounded (yin)? Look at your eyes, nose, lips, and jawline.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Consider Your Overall Silhouette</h3>
              <p className="text-gray-700">Step back and look at your overall impression. Are you tall and narrow, short and compact, or balanced and moderate?</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Shop Clothes That Flatter Your Body Type
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius analyzes clothing silhouettes and tells you if they'll work for your body type - while you browse any online store.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Smart Shopping Features</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📐</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Body Type Match</h4>
                  <p className="text-sm text-gray-600">See instantly if a piece will flatter your unique body shape</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👗</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Virtual Try-On</h4>
                  <p className="text-sm text-gray-600">Try clothes on virtually and share looks with friends before buying</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💝</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Universal Wishlist</h4>
                  <p className="text-sm text-gray-600">Save items from any store in one place with price drop alerts</p>
                </div>
              </div>
            </div>

            <a href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn" target="_blank" rel="noopener noreferrer">
              <button
                className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }}
              >
                Add to Chrome - It's Free
              </button>
            </a>
            <p className="text-sm text-gray-500 mt-4">Works on Zara, H&M, ASOS, and 1000+ more stores</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KibbeBodyTypes;
