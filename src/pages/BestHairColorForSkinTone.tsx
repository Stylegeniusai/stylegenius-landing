import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnalysisCTA from "../components/AnalysisCTA";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const BestHairColorForSkinTone = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Best Hair Color for Your Skin Tone: By Undertone & Season (2026)"
        description="Find the most flattering hair color for your skin tone. Cool, warm, or neutral undertone? See exactly which shades suit you — from ash blonde to copper to brunette."
        keywords="best hair color for skin tone, hair color for cool undertones, hair color for warm undertones, hair color by skin tone, flattering hair color, hair color undertone guide, best hair color 2026"
        canonicalUrl="/best-hair-color-for-skin-tone"
        ogImage="/hair-color-skin-tone-hero.png"
        ogType="article"
        article={{
          publishedTime: "2026-03-31",
          modifiedTime: "2026-03-31",
          section: "Color Analysis",
          tags: ["hair color", "skin tone", "undertones", "color analysis", "hair trends 2026"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Color Analysis", url: "/color" },
          { name: "Best Hair Color for Your Skin Tone", url: "/best-hair-color-for-skin-tone" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/color" className="text-sm uppercase tracking-wider text-gray-500 hover:text-black mb-6 inline-block">
              Color Analysis
            </Link>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Best Hair Color for Your Skin Tone
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The complete guide to choosing a hair color that works with your natural coloring — not against it. Based on your undertone and color season.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={`${BLOG_IMAGE_BASE}/hair-color-skin-tone-hero.png`}
              alt="Guide to choosing the best hair color for your skin tone showing different shades on different undertones"
              className="w-full aspect-[16/9] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">

          {/* Intro */}
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Choosing a new hair color can feel overwhelming. There are hundreds of shades to choose from, and the wrong one can make your skin look dull, washed out, or even add years to your face. The right one? It makes you look like you just came back from vacation.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            The key is your skin's undertone. Once you know whether you're cool, warm, or neutral, picking a flattering hair color becomes surprisingly simple. Let's break it all down.
          </p>

          {/* Table of Contents */}
          <nav className="bg-gray-50 p-6 md:p-8 mb-12">
            <p className="font-semibold text-gray-900 mb-4">In this guide:</p>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#undertone" className="hover:text-black underline">How your undertone affects hair color</a></li>
              <li><a href="#cool-undertones" className="hover:text-black underline">Best hair colors for cool undertones</a></li>
              <li><a href="#warm-undertones" className="hover:text-black underline">Best hair colors for warm undertones</a></li>
              <li><a href="#neutral-undertones" className="hover:text-black underline">Best hair colors for neutral undertones</a></li>
              <li><a href="#color-seasons" className="hover:text-black underline">Hair color by color season</a></li>
              <li><a href="#colors-to-avoid" className="hover:text-black underline">Hair colors to avoid by undertone</a></li>
              <li><a href="#trends-2026" className="hover:text-black underline">2026 hair color trends</a></li>
              <li><a href="#faq" className="hover:text-black underline">FAQ</a></li>
            </ul>
          </nav>

          {/* Why Undertone Matters */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Why Your Undertone Matters More Than Your Skin Shade
          </h2>
          <div id="undertone" className="scroll-mt-8" />
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            People with the same skin shade can have completely different undertones. That's why your best friend's caramel highlights look gorgeous on her but felt off when you tried the same shade. Your undertone — the subtle color beneath the surface of your skin — determines which hair colors create harmony and which create clash.
          </p>

          <div className="bg-gray-50 p-8 my-8">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Undertone Check:</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Cool undertones:</strong> Veins look blue or purple. Silver jewelry flatters you more. You tend to burn in the sun.</li>
              <li><strong>Warm undertones:</strong> Veins look green or olive. Gold jewelry looks better. You tan relatively easily.</li>
              <li><strong>Neutral undertones:</strong> Veins are a mix of blue and green. Both gold and silver look good on you.</li>
            </ul>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Still unsure? Our guide on <Link to="/warm-vs-cool-undertones" className="text-black underline hover:no-underline">warm vs cool undertones</Link> will help you figure it out.
          </p>

          {/* Cool Undertones */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Best Hair Colors for Cool Undertones
          </h2>
          <div id="cool-undertones" className="scroll-mt-8" />
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Cool undertones have pink, red, or blue hints beneath the skin. Your hair color should have the same cool base — think ash, platinum, and blue-based tones. These keep your complexion looking bright and even, rather than sallow or yellowed.
          </p>

          <div className="bg-gray-50 p-6 mb-6">
            <p className="font-medium text-gray-900 mb-3">Your best hair colors:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Ash Blonde", hex: "#C8B7A6" },
                { name: "Platinum Blonde", hex: "#E5E4E2" },
                { name: "Ash Brown", hex: "#8B7D6B" },
                { name: "Cool Dark Brown", hex: "#4A3728" },
                { name: "Burgundy Wine", hex: "#722F37" },
                { name: "Espresso", hex: "#3C2415" },
                { name: "Mushroom Brown", hex: "#9B8E7E" },
                { name: "Icy Blonde", hex: "#EBEBEB" },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                  <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                  {c.name}
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Ash blonde</strong> is one of the most universally flattering shades for cool undertones. It neutralizes any redness in the skin and gives a polished, modern look. <strong>Platinum</strong> is bolder — it works best if you have fair skin with very cool undertones and can commit to maintenance. <strong>Burgundy wine</strong> adds richness without warmth, which is perfect for cooler skin tones wanting a change.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            If you prefer brunette, stick to <strong>ash brown</strong> or <strong>cool dark brown</strong> — shades that have a grayish or blueish base rather than a red or golden one. <strong>Mushroom brown</strong> (a gray-toned light brown) has been trending and works beautifully on cool skin.
          </p>

          <p className="text-sm text-gray-400 mb-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get personalized recommendations in your style guide</Link></p>

          {/* IMAGE: Cool undertone hair */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/hair-color-cool-undertone.png`}
              alt="Best hair colors for cool undertones - ash blonde, platinum, cool brown, burgundy"
              className="w-full aspect-[9/16] object-cover"
              loading="lazy"
            />
            <p className="text-sm text-gray-500 mt-3 text-center">Hair colors that flatter cool undertones</p>
          </div>

          {/* Warm Undertones */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Best Hair Colors for Warm Undertones
          </h2>
          <div id="warm-undertones" className="scroll-mt-8" />
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Warm undertones have golden, peachy, or olive hints beneath the skin. You want hair colors with warm bases — golden, coppery, caramel, and rich warm browns. These bring out the warmth in your skin and create a healthy, glowing effect.
          </p>

          <div className="bg-gray-50 p-6 mb-6">
            <p className="font-medium text-gray-900 mb-3">Your best hair colors:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Honey Blonde", hex: "#D4A76A" },
                { name: "Golden Brown", hex: "#996515" },
                { name: "Caramel", hex: "#C68E5B" },
                { name: "Copper", hex: "#B87333" },
                { name: "Auburn", hex: "#A52A2A" },
                { name: "Warm Chocolate", hex: "#5C3317" },
                { name: "Strawberry Blonde", hex: "#CB8E6C" },
                { name: "Chestnut", hex: "#954535" },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                  <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                  {c.name}
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Honey blonde</strong> is the warm-undertone equivalent of ash blonde — effortless, flattering, and low-maintenance since it works with your natural coloring. <strong>Copper</strong> has been having a moment (more on that in the trends section), and for good reason — it's stunning on warm skin tones.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Caramel</strong> and <strong>golden brown</strong> are excellent choices if you want something subtle. They add warmth and dimension without a dramatic change. <strong>Auburn</strong> and <strong>chestnut</strong> offer more depth — they read as rich brunette with a warm, reddish glow that looks particularly beautiful in sunlight.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Strawberry blonde</strong> sits at the intersection of blonde and red. It's an underrated option for warm undertones — soft, natural-looking, and distinctly warm without being as high-commitment as full copper.
          </p>

          <p className="text-sm text-gray-400 mb-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get personalized recommendations in your style guide</Link></p>

          {/* IMAGE: Warm undertone hair */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/hair-color-warm-undertone.png`}
              alt="Best hair colors for warm undertones - honey blonde, copper, caramel, auburn"
              className="w-full aspect-[9/16] object-cover"
              loading="lazy"
            />
            <p className="text-sm text-gray-500 mt-3 text-center">Hair colors that flatter warm undertones</p>
          </div>

          {/* Neutral Undertones */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Best Hair Colors for Neutral Undertones
          </h2>
          <div id="neutral-undertones" className="scroll-mt-8" />
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Neutral undertones are the most flexible. You don't lean strongly cool or warm, which means you can pull off shades from both camps. The key is choosing balanced tones — not too ashy, not too golden.
          </p>

          <div className="bg-gray-50 p-6 mb-6">
            <p className="font-medium text-gray-900 mb-3">Your best hair colors:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Bronde", hex: "#A67B5B" },
                { name: "Soft Brown", hex: "#8B6914" },
                { name: "Natural Copper", hex: "#B5651D" },
                { name: "Toffee", hex: "#8B6508" },
                { name: "Sandy Blonde", hex: "#C2B280" },
                { name: "Dark Chocolate", hex: "#3B2F2F" },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                  <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                  {c.name}
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Bronde</strong> (the blend of brown and blonde) is practically made for neutral undertones. It's neither fully warm nor fully cool, which mirrors your natural coloring perfectly. <strong>Sandy blonde</strong> works the same way at a lighter level.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Soft brown</strong> and <strong>toffee</strong> give you a rich, natural-looking result. <strong>Natural copper</strong> — not the super orange kind, but a balanced, earthy copper — can also work beautifully since neutral skin doesn't fight against warm or cool tones.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The biggest advantage of neutral undertones? You can experiment more freely. If you want to test the waters with a cool ash tone or a warm caramel, both are fair game — just avoid going to extremes on either end.
          </p>

          <p className="text-sm text-gray-400 mb-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get personalized recommendations in your style guide</Link></p>

          {/* Mid-article CTA */}
          <AnalysisCTA />

          {/* Hair Color by Season */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Hair Color by Color Season
          </h2>
          <div id="color-seasons" className="scroll-mt-8" />
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Your color season takes things a step further than undertone alone. It factors in your overall contrast level and whether your natural coloring is muted or bright. Here's how each season translates to hair color:
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-gray-50 p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Spring</h3>
              <p className="text-gray-700 mb-3">Warm undertone, light to medium coloring. You look best in hair colors that are <strong>warm and light</strong>.</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Golden Blonde", hex: "#DAA520" },
                  { name: "Strawberry Blonde", hex: "#CB8E6C" },
                  { name: "Light Copper", hex: "#DA8A67" },
                  { name: "Honey", hex: "#D4A76A" },
                ].map((c) => (
                  <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                    <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                    {c.name}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-3">Avoid: Anything too dark or ashy. Jet black or ash brown will make you look tired.</p>
            </div>

            <div className="bg-gray-50 p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Summer</h3>
              <p className="text-gray-700 mb-3">Cool undertone, soft and muted coloring. You look best in hair colors that are <strong>cool and soft</strong>.</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Ash Blonde", hex: "#C8B7A6" },
                  { name: "Cool Light Brown", hex: "#9B8E7E" },
                  { name: "Mushroom Brown", hex: "#8B7D6B" },
                  { name: "Rose Brown", hex: "#9E7B6B" },
                ].map((c) => (
                  <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                    <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                    {c.name}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-3">Avoid: Warm golden tones, bright copper, or very dark colors. They overpower your soft coloring.</p>
            </div>

            <div className="bg-gray-50 p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Autumn</h3>
              <p className="text-gray-700 mb-3">Warm undertone, rich and earthy coloring. You look best in hair colors that are <strong>warm and deep</strong>.</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Copper", hex: "#B87333" },
                  { name: "Auburn", hex: "#A52A2A" },
                  { name: "Chestnut", hex: "#954535" },
                  { name: "Warm Chocolate", hex: "#5C3317" },
                ].map((c) => (
                  <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                    <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                    {c.name}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-3">Avoid: Platinum, ash blonde, cool-toned anything. They clash with your natural warmth.</p>
            </div>

            <div className="bg-gray-50 p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Winter</h3>
              <p className="text-gray-700 mb-3">Cool undertone, high contrast coloring. You look best in hair colors that are <strong>bold and defined</strong>.</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Jet Black", hex: "#0A0A0A" },
                  { name: "Platinum", hex: "#E5E4E2" },
                  { name: "Dark Espresso", hex: "#3C2415" },
                  { name: "Blue-Black", hex: "#1C1C2E" },
                ].map((c) => (
                  <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                    <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                    {c.name}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-3">Avoid: Golden tones, warm browns, and anything that looks "natural sun-kissed." It dulls your striking contrast.</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Not sure which season you are? Our <Link to="/what-season-am-i" className="text-black underline hover:no-underline">What Season Am I?</Link> guide walks you through it step by step.
          </p>

          {/* Colors to Avoid */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Hair Colors to Avoid by Undertone
          </h2>
          <div id="colors-to-avoid" className="scroll-mt-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Knowing what to avoid is just as useful as knowing what works. The wrong hair color can make your skin look sallow, washed out, or ruddy — even if the shade itself is beautiful.
          </p>

          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-gray-300 pl-6">
              <h4 className="font-semibold text-gray-900 mb-2">Cool Undertones Should Avoid</h4>
              <p className="text-gray-700 mb-2"><strong>Golden blonde, warm copper, and caramel.</strong> These warm tones create a disconnect between your hair and skin that makes your complexion look pink or ruddy. The golden warmth in the hair highlights any redness in the skin.</p>
              <div className="flex flex-wrap gap-3 mt-3">
                {[
                  { name: "Golden Blonde", hex: "#DAA520" },
                  { name: "Warm Copper", hex: "#D2691E" },
                  { name: "Caramel", hex: "#C68E5B" },
                ].map((c) => (
                  <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                    <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                    {c.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="border-l-4 border-gray-300 pl-6">
              <h4 className="font-semibold text-gray-900 mb-2">Warm Undertones Should Avoid</h4>
              <p className="text-gray-700 mb-2"><strong>Ash tones, platinum blonde, and blue-black.</strong> Cool-based shades drain the warmth from your skin, making you look grey, sallow, or washed out. Ash blonde in particular can make warm skin look lifeless.</p>
              <div className="flex flex-wrap gap-3 mt-3">
                {[
                  { name: "Ash Blonde", hex: "#C8B7A6" },
                  { name: "Platinum", hex: "#E5E4E2" },
                  { name: "Blue-Black", hex: "#1C1C2E" },
                ].map((c) => (
                  <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                    <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                    {c.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="border-l-4 border-gray-300 pl-6">
              <h4 className="font-semibold text-gray-900 mb-2">Neutral Undertones Should Avoid</h4>
              <p className="text-gray-700">You have the most flexibility, but <strong>avoid extreme ends of the spectrum</strong>. Very ashy platinum or very warm orange-copper can still look off. Stick to balanced, natural-looking shades and you'll be fine.</p>
            </div>
          </div>

          {/* 2026 Hair Color Trends */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            2026 Hair Color Trends Worth Trying
          </h2>
          <div id="trends-2026" className="scroll-mt-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The current mood in hair color is moving away from high-maintenance, multi-tonal looks toward richer, warmer, more natural-looking shades. Here's what's trending in 2026 and who they work for:
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-gray-50 p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Cowgirl Copper</h3>
              <p className="text-gray-700 mb-3">The biggest trend of the year. It's a warm, cozy copper — less fiery red and more like a penny in sunlight. Think natural-looking warmth with dimension and depth.</p>
              <p className="text-sm text-gray-600"><strong>Best for:</strong> Warm and neutral undertones. If you're cool-toned but want in on the trend, ask your colorist for a burgundy copper — it has the reddish warmth of copper with a cooler base.</p>
            </div>
            <div className="bg-gray-50 p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Natural-Looking Color</h3>
              <p className="text-gray-700 mb-3">Subtle, "did she or didn't she" color that enhances your natural shade rather than replacing it. Think glosses, glazes, and slight shifts rather than dramatic transformations.</p>
              <p className="text-sm text-gray-600"><strong>Best for:</strong> Everyone. This trend is about working with your existing tone. A good colorist will enhance your natural warmth or coolness rather than fighting it.</p>
            </div>
            <div className="bg-gray-50 p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Warmer Brunettes</h3>
              <p className="text-gray-700 mb-3">Cool-girl brunette is out. Rich, warm, dimensional brown is in. Think warm chocolate, cinnamon, and toffee tones that catch the light beautifully.</p>
              <p className="text-sm text-gray-600"><strong>Best for:</strong> Warm and neutral undertones. Cool undertones can try a cooler version — dark espresso with subtle warm highlights, rather than fully warm all over.</p>
            </div>
            <div className="bg-gray-50 p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Cooler Reds</h3>
              <p className="text-gray-700 mb-3">While copper is the warm-toned red of the moment, cooler reds are gaining momentum too. Think wine, cranberry, and deep berry tones that feel luxurious and a bit unexpected.</p>
              <p className="text-sm text-gray-600"><strong>Best for:</strong> Cool undertones who want something bold. Also works on neutrals who lean slightly cool.</p>
            </div>
          </div>

          {/* IMAGE: Trends 2026 */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/hair-color-trends-2026.png`}
              alt="2026 hair color trends including cowgirl copper, natural color, warmer brunettes"
              className="w-full aspect-[9/16] object-cover"
              loading="lazy"
            />
            <p className="text-sm text-gray-500 mt-3 text-center">Top hair color trends for 2026</p>
          </div>

          {/* Summary Box */}
          <div className="bg-gray-50 p-8 my-12">
            <h3 className="font-semibold text-gray-900 mb-4">The Quick Guide</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-900">Cool undertones:</p>
                <p className="text-gray-700">Ash blonde, platinum, ash brown, cool dark brown, burgundy wine. Avoid golden or warm tones.</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Warm undertones:</p>
                <p className="text-gray-700">Honey blonde, copper, caramel, auburn, warm chocolate, strawberry blonde. Avoid ash or platinum tones.</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Neutral undertones:</p>
                <p className="text-gray-700">Bronde, soft brown, toffee, sandy blonde, natural copper. Avoid extreme ash or extreme gold.</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Remember:</p>
                <p className="text-gray-700">Your undertone matters more than your skin shade. A flattering hair color works with your natural coloring, not against it.</p>
              </div>
            </div>
          </div>

          {/* Related Content */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Continue Your Color Journey
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Hair color is just one piece of the puzzle. Dive deeper into understanding your personal coloring:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/best-colors-for-pale-skin" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">Best Colors for Pale Skin</h4>
              <p className="text-sm text-gray-600">Find your most flattering clothing colors by undertone.</p>
            </Link>
            <Link to="/what-season-am-i" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">What Season Am I?</h4>
              <p className="text-sm text-gray-600">Discover your color season for a full personalized palette.</p>
            </Link>
            <Link to="/warm-vs-cool-undertones" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">Warm vs Cool Undertones</h4>
              <p className="text-sm text-gray-600">The complete guide to figuring out your undertone once and for all.</p>
            </Link>
            <Link to="/best-lipstick-for-skin-tone" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">Best Lipstick for Your Skin Tone</h4>
              <p className="text-sm text-gray-600">Match your lip color to your coloring for an instantly polished look.</p>
            </Link>
          </div>

          {/* FAQ */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Frequently Asked Questions
          </h2>
          <div id="faq" className="scroll-mt-8" />

          <div className="space-y-0 mb-12 border-t border-gray-200">
            {[
              { q: "Can I dye my hair a warm color if I have cool undertones?", a: "You can, but it's trickier to pull off. If you're set on a warm shade, choose one with some cool balance — like a reddish copper instead of orange copper, or a neutral caramel rather than a golden one. Your colorist can help adjust the tone to work with your skin." },
              { q: "Does my natural hair color match my undertone?", a: "Usually, yes. Your natural hair color is part of your overall coloring and tends to harmonize with your skin. That's why staying close to your natural shade (or enhancing it) almost always looks flattering. Big deviations from your natural tone require more careful undertone matching." },
              { q: "How do I know if a hair color will suit me before committing?", a: "Try a temporary gloss or demi-permanent color first — they wash out over a few weeks. You can also use virtual try-on tools or hold fabric swatches in that color near your face. If the color makes your skin look brighter and healthier, it's a good sign." },
              { q: "Should I match my hair color to my eye color?", a: "Eye color can be a helpful secondary guide, but skin undertone matters more. That said, warm hair colors tend to complement brown and hazel eyes beautifully, while cool tones bring out blue and gray eyes. Green eyes are versatile and look great with both copper and ash tones." },
              { q: "Is copper hair flattering on everyone?", a: "Not quite. Copper is inherently warm, so it looks most natural on warm and neutral undertones. Cool undertones can try a cooler version — like burgundy copper or wine red — to get the red-hair effect without the golden warmth that clashes with cool skin." },
              { q: "How often should I touch up my color to keep it flattering?", a: "It depends on the shade. Blondes and reds tend to fade fastest and need refreshing every 4-6 weeks. Brunettes can go longer, around 6-8 weeks. Using color-safe shampoo and avoiding excessive heat styling helps your color last longer." },
              { q: "Can a personal color analysis help me choose hair color?", a: "Absolutely. A color analysis identifies your exact season and undertone, which takes the guesswork out of choosing hair color. We offer a personalized analysis that includes hair color recommendations based on your individual coloring." },
            ].map((item, i) => (
              <details key={i} className="group border-b border-gray-200">
                <summary className="flex justify-between items-center cursor-pointer py-4 font-medium text-gray-900 hover:text-gray-600 transition-colors">
                  {item.q}
                  <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl ml-4 flex-shrink-0">+</span>
                </summary>
                <p className="text-gray-700 pb-4 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>

        </div>
      </article>

      {/* FAQ Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Can I dye my hair a warm color if I have cool undertones?", "acceptedAnswer": { "@type": "Answer", "text": "You can, but it's trickier to pull off. If you're set on a warm shade, choose one with some cool balance — like a reddish copper instead of orange copper, or a neutral caramel rather than a golden one. Your colorist can help adjust the tone to work with your skin." }},
          { "@type": "Question", "name": "Does my natural hair color match my undertone?", "acceptedAnswer": { "@type": "Answer", "text": "Usually, yes. Your natural hair color is part of your overall coloring and tends to harmonize with your skin. That's why staying close to your natural shade (or enhancing it) almost always looks flattering. Big deviations from your natural tone require more careful undertone matching." }},
          { "@type": "Question", "name": "How do I know if a hair color will suit me before committing?", "acceptedAnswer": { "@type": "Answer", "text": "Try a temporary gloss or demi-permanent color first — they wash out over a few weeks. You can also use virtual try-on tools or hold fabric swatches in that color near your face. If the color makes your skin look brighter and healthier, it's a good sign." }},
          { "@type": "Question", "name": "Should I match my hair color to my eye color?", "acceptedAnswer": { "@type": "Answer", "text": "Eye color can be a helpful secondary guide, but skin undertone matters more. That said, warm hair colors tend to complement brown and hazel eyes beautifully, while cool tones bring out blue and gray eyes. Green eyes are versatile and look great with both copper and ash tones." }},
          { "@type": "Question", "name": "Is copper hair flattering on everyone?", "acceptedAnswer": { "@type": "Answer", "text": "Not quite. Copper is inherently warm, so it looks most natural on warm and neutral undertones. Cool undertones can try a cooler version — like burgundy copper or wine red — to get the red-hair effect without the golden warmth that clashes with cool skin." }},
          { "@type": "Question", "name": "How often should I touch up my color to keep it flattering?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on the shade. Blondes and reds tend to fade fastest and need refreshing every 4-6 weeks. Brunettes can go longer, around 6-8 weeks. Using color-safe shampoo and avoiding excessive heat styling helps your color last longer." }},
          { "@type": "Question", "name": "Can a personal color analysis help me choose hair color?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. A color analysis identifies your exact season and undertone, which takes the guesswork out of choosing hair color. We offer a personalized analysis that includes hair color recommendations based on your individual coloring." }},
        ]
      })}} />

      <div className="container mx-auto px-4 max-w-4xl">
        <AnalysisCTA />
      </div>
      <Footer />
    </div>
  );
};

export default BestHairColorForSkinTone;
