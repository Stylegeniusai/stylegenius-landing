import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnalysisCTA from "../components/AnalysisCTA";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const faqItems = [
  { q: "How do I know my skin's undertone?", a: "Check the veins on your inner wrist. Blue or purple veins indicate cool undertones, green veins indicate warm, and a mix of both suggests neutral. You can also test by holding gold and silver jewelry against your skin — if gold looks better, you're warm; silver, you're cool; both, you're neutral." },
  { q: "What is an MLBB lipstick?", a: "MLBB stands for 'My Lips But Better.' It's a lipstick shade that closely matches your natural lip color but slightly enhanced — a bit more pigmented, a bit more polished. The exact shade depends on your skin tone and undertone, but it's typically a muted pink, mauve, or rosy brown." },
  { q: "Can I wear red lipstick with any skin tone?", a: "Yes — but the shade of red matters. Cool undertones look best in blue-based reds like cherry and wine red. Warm undertones shine in orange-based reds like brick red and tomato red. Neutral undertones can pull off a classic true red. The key is matching the red's undertone to yours." },
  { q: "Why does my nude lipstick make me look washed out?", a: "Most likely the shade is too close to your actual skin tone, which erases your lips and flattens your face. A good nude should be one to two shades darker or warmer than your skin, not an exact match. Also check the undertone — a warm nude on cool skin (or vice versa) will always look off." },
  { q: "Should I match my lipstick to my outfit?", a: "Not exactly. Your lipstick should complement your skin tone first, outfit second. A lipstick that flatters your undertone will work with almost anything. If you want to coordinate, pick up a color from your outfit in a shade that also suits your skin — don't sacrifice skin-flattery for a matchy look." },
  { q: "Do lip colors change with age?", a: "Your undertone stays the same, but lips tend to lose pigment and definition over time. Cream and satin finishes are more forgiving than matte. Lip liner becomes more useful. The color principles stay the same — just lean slightly more toward hydrating formulas and away from very dark, drying shades." },
  { q: "How do I find my exact best lip shades?", a: "The most precise way is through a personal color analysis. We offer a full personalized style guide that includes your ideal lip colors based on your individual skin tone, undertone, and color season — along with your full wardrobe palette and makeup recommendations." },
];

const BestLipstickForSkinTone = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Best Lipstick Color for Your Skin Tone: Cool, Warm & Neutral Guide (2026)"
        description="Find the most flattering lipstick shades for your skin tone and undertone. From everyday MLBB to bold reds — see exactly which lip colors suit cool, warm, and neutral undertones."
        keywords="best lipstick for skin tone, lipstick color for undertone, best lip color for cool undertones, best lip color for warm undertones, MLBB lipstick, lipstick for neutral undertone, lip color guide, lipstick by skin tone"
        canonicalUrl="/best-lipstick-for-skin-tone"
        ogImage="/lipstick-skin-tone-hero.png"
        ogType="article"
        article={{
          publishedTime: "2026-03-31",
          modifiedTime: "2026-03-31",
          section: "Color Analysis",
          tags: ["lipstick", "skin tone", "undertone", "lip color", "makeup", "color analysis"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Color Analysis", url: "/color" },
          { name: "Best Lipstick Color for Your Skin Tone", url: "/best-lipstick-for-skin-tone" }
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
              Best Lipstick Color for Your Skin Tone
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The right lip color can brighten your entire face. The wrong one can make you look tired, washed out, or like you're playing dress-up. Here's how to find shades that actually work for you.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={`${BLOG_IMAGE_BASE}/lipstick-skin-tone-hero.png`}
              alt="Lipstick color guide showing flattering shades for different skin tones and undertones"
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
            Lipstick is the one makeup product that can completely transform your look in seconds. But swatching random shades at the beauty counter isn't a strategy. The shade that looks stunning on your friend might make you look sallow or unwell.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            The difference between a lipstick that flatters and one that falls flat almost always comes down to <strong>undertone</strong>. Not your skin's surface color — but the cool, warm, or neutral tones underneath it. Once you know yours, choosing lip colors becomes surprisingly simple.
          </p>

          {/* Table of Contents */}
          <nav className="bg-gray-50 p-6 md:p-8 mb-12">
            <p className="font-semibold text-gray-900 mb-4">In this guide:</p>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#find-undertone" className="hover:text-black underline">How to find your undertone</a></li>
              <li><a href="#cool-undertones" className="hover:text-black underline">Best lipstick for cool undertones</a></li>
              <li><a href="#warm-undertones" className="hover:text-black underline">Best lipstick for warm undertones</a></li>
              <li><a href="#neutral-undertones" className="hover:text-black underline">Best lipstick for neutral undertones</a></li>
              <li><a href="#lipstick-mistakes" className="hover:text-black underline">Common lipstick mistakes</a></li>
              <li><a href="#color-seasons" className="hover:text-black underline">Lip colors by color season</a></li>
              <li><a href="#faq" className="hover:text-black underline">FAQ</a></li>
            </ul>
          </nav>

          {/* Find Your Undertone */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            First: Know Your Undertone
          </h2>
          <div id="find-undertone" className="scroll-mt-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Your undertone is the baseline that determines which lip colors harmonize with your skin. Two people with the same skin depth (light, medium, dark) can look completely different in the same shade of lipstick if their undertones differ.
          </p>

          <div className="bg-gray-50 p-8 my-8">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Undertone Check:</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Cool undertones:</strong> Veins appear blue or purple. Silver jewelry looks better on you. You burn easily in the sun.</li>
              <li><strong>Warm undertones:</strong> Veins appear green. Gold jewelry is more flattering. You tend to tan rather than burn.</li>
              <li><strong>Neutral undertones:</strong> Veins look blue-green. Both gold and silver suit you equally.</li>
            </ul>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Want a deeper dive? Check out our full guide on <Link to="/warm-vs-cool-undertones" className="text-black underline hover:no-underline">warm vs cool undertones</Link> to nail down your type before choosing lip colors.
          </p>

          {/* Cool Undertones */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Best Lipstick for Cool Undertones
          </h2>
          <div id="cool-undertones" className="scroll-mt-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Cool undertones have pink, red, or blue hues beneath the surface of the skin. Your best lip colors will have a <strong>blue or pink base</strong> — these harmonize naturally with your skin's coolness and make your complexion look brighter and more alive.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">Everyday MLBB Shades</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            For a polished, natural look, reach for cool-toned pinks and mauves. These give your lips definition without looking "done."
          </p>
          <div className="bg-gray-50 p-6 mb-6">
            <p className="font-medium text-gray-900 mb-3">Your everyday shades:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Cool Rose", hex: "#C76B8E" },
                { name: "Mauve", hex: "#C98FB0" },
                { name: "Dusty Pink", hex: "#D4A0A0" },
                { name: "Soft Berry", hex: "#9E6B7B" },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                  <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                  {c.name}
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">Bold Lip Shades</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            When you want to make a statement, cool undertones come alive in berry, plum, and blue-based reds. These create beautiful contrast without clashing.
          </p>
          <div className="bg-gray-50 p-6 mb-6">
            <p className="font-medium text-gray-900 mb-3">Your bold shades:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Cherry Red", hex: "#9B111E" },
                { name: "Berry", hex: "#8E4585" },
                { name: "Plum", hex: "#673147" },
                { name: "Wine", hex: "#722F37" },
                { name: "Raspberry", hex: "#E30B5C" },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                  <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                  {c.name}
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">Nude Lip Shades</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The trick to a flattering nude on cool skin: pick a shade with pink or mauve undertones, one to two shades darker than your natural lip color. Avoid anything too beige or yellow-based.
          </p>
          <div className="bg-gray-50 p-6 mb-6">
            <p className="font-medium text-gray-900 mb-3">Your nude shades:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Pink Nude", hex: "#D4A5A5" },
                { name: "Rosy Beige", hex: "#C9A9A6" },
                { name: "Mauve Nude", hex: "#B8879E" },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                  <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                  {c.name}
                </div>
              ))}
            </div>
          </div>

          <p className="text-gray-600 mb-4">
            <strong>Avoid:</strong> Orange-based lipsticks, warm coral, peach, and anything with strong yellow or golden undertones. These clash with your natural coolness and can make your skin look grayish or sallow.
          </p>
          <p className="text-sm text-gray-400 mb-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get your exact lip shades in your personal style guide</Link></p>

          {/* IMAGE: Cool undertone */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/lipstick-cool-undertone.png`}
              alt="Best lipstick shades for cool undertones - berry, plum, cherry red, mauve"
              className="w-full aspect-[9/16] object-cover"
              loading="lazy"
            />
            <p className="text-sm text-gray-500 mt-3 text-center">Lip shades that flatter cool undertones</p>
          </div>

          {/* Warm Undertones */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Best Lipstick for Warm Undertones
          </h2>
          <div id="warm-undertones" className="scroll-mt-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Warm undertones have yellow, peach, or golden hues beneath the skin. Your most flattering lip colors will have an <strong>orange, peach, or warm red base</strong>. These enhance the natural warmth in your skin and give you a healthy, sun-kissed look.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">Everyday MLBB Shades</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Warm-toned nudes and soft corals create a natural, put-together look that complements rather than competes with your warmth.
          </p>
          <div className="bg-gray-50 p-6 mb-6">
            <p className="font-medium text-gray-900 mb-3">Your everyday shades:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Warm Pink", hex: "#D4827E" },
                { name: "Soft Coral", hex: "#E8967D" },
                { name: "Peach", hex: "#FFDAB9" },
                { name: "Warm Nude", hex: "#C4956A" },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                  <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                  {c.name}
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">Bold Lip Shades</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Warm undertones look incredible in warm reds, burnt oranges, and rich terracotta. These shades feel powerful without looking out of place on your skin.
          </p>
          <div className="bg-gray-50 p-6 mb-6">
            <p className="font-medium text-gray-900 mb-3">Your bold shades:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Brick Red", hex: "#CB4154" },
                { name: "Warm Orange-Red", hex: "#CC3333" },
                { name: "Terracotta", hex: "#C05B3C" },
                { name: "Burnt Sienna", hex: "#A0522D" },
                { name: "Warm Coral Red", hex: "#E2583E" },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                  <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                  {c.name}
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">Nude Lip Shades</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            A flattering nude for warm skin has caramel, peach, or golden-brown undertones. Think "my lips but warmer" rather than "my skin but on my lips."
          </p>
          <div className="bg-gray-50 p-6 mb-6">
            <p className="font-medium text-gray-900 mb-3">Your nude shades:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Caramel Nude", hex: "#C09060" },
                { name: "Peach Beige", hex: "#D9A687" },
                { name: "Warm Sand", hex: "#C2A283" },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                  <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                  {c.name}
                </div>
              ))}
            </div>
          </div>

          <p className="text-gray-600 mb-4">
            <strong>Avoid:</strong> Blue-based pinks, fuchsia, bright magenta, and cool berry tones. These create a visual clash with your warm skin and can make your complexion look dull or muddy.
          </p>
          <p className="text-sm text-gray-400 mb-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get your exact lip shades in your personal style guide</Link></p>

          {/* IMAGE: Warm undertone */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/lipstick-warm-undertone.png`}
              alt="Best lipstick shades for warm undertones - coral, brick red, terracotta, peach"
              className="w-full aspect-[9/16] object-cover"
              loading="lazy"
            />
            <p className="text-sm text-gray-500 mt-3 text-center">Lip shades that flatter warm undertones</p>
          </div>

          {/* Mid-article CTA */}
          <AnalysisCTA />

          {/* Neutral Undertones */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Best Lipstick for Neutral Undertones
          </h2>
          <div id="neutral-undertones" className="scroll-mt-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Neutral undertones sit between cool and warm, which means you have the widest range of flattering lip colors. You can lean slightly warm or cool depending on the look you want. Your sweet spot is shades that aren't too blue-based or too orange-based — think <strong>balanced, muted, and versatile</strong>.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">Everyday MLBB Shades</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Dusty roses and mauve-pinks are your everyday heroes. They strike the perfect balance between warm and cool.
          </p>
          <div className="bg-gray-50 p-6 mb-6">
            <p className="font-medium text-gray-900 mb-3">Your everyday shades:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Dusty Rose", hex: "#C4767C" },
                { name: "Mauve Pink", hex: "#C98FB0" },
                { name: "MLBB Pink", hex: "#C48793" },
                { name: "Soft Plum", hex: "#A67B8A" },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                  <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                  {c.name}
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">Bold Lip Shades</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The advantage of neutral undertones: you can wear a true red. No need to stress about whether it's too blue or too orange — a balanced red is your signature bold shade.
          </p>
          <div className="bg-gray-50 p-6 mb-6">
            <p className="font-medium text-gray-900 mb-3">Your bold shades:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "True Red", hex: "#C41E3A" },
                { name: "Soft Berry", hex: "#915F6D" },
                { name: "Rose Red", hex: "#C21E56" },
                { name: "Deep Mauve", hex: "#874C62" },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                  <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                  {c.name}
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">Nude Lip Shades</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Neutral nudes in the rosy-beige family are universally flattering on neutral undertones. Avoid anything that pulls strongly warm or strongly cool.
          </p>
          <div className="bg-gray-50 p-6 mb-6">
            <p className="font-medium text-gray-900 mb-3">Your nude shades:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Rose Nude", hex: "#C4A198" },
                { name: "Soft Beige Pink", hex: "#C9A9A6" },
                { name: "Muted Mauve", hex: "#B8879E" },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                  <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                  {c.name}
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-400 mb-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get your exact lip shades in your personal style guide</Link></p>

          {/* Common Lipstick Mistakes */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Common Lipstick Mistakes
          </h2>
          <div id="lipstick-mistakes" className="scroll-mt-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Even if you know your undertone, these mistakes can undermine an otherwise perfect lip color choice.
          </p>

          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-gray-300 pl-6">
              <h4 className="font-semibold text-gray-900 mb-2">Matching Lipstick to Your Outfit Instead of Your Skin</h4>
              <p className="text-gray-700">This is the most common mistake. Your lipstick needs to work with your face first. A red dress doesn't require red lipstick — especially if that red clashes with your undertone. Pick lip colors that flatter your skin, and they'll coordinate with your outfits naturally.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-6">
              <h4 className="font-semibold text-gray-900 mb-2">Going Too Light with Nude Lips</h4>
              <p className="text-gray-700">A "nude" lip should enhance your natural lip color, not erase it. When your lipstick matches your skin tone exactly, your lips disappear and your face looks flat. The fix: choose a nude that's one to two shades deeper than your actual skin, with an undertone that matches yours.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-6">
              <h4 className="font-semibold text-gray-900 mb-2">Ignoring Undertone Entirely</h4>
              <p className="text-gray-700">Buying lipstick based only on how it looks in the tube or on a model is a gamble. A shade labeled "pink" can be blue-pink (cool) or peach-pink (warm) — and that difference matters more than the color name. Always swatch on your hand or lips, not the back of your wrist.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-6">
              <h4 className="font-semibold text-gray-900 mb-2">Testing Lipstick in Store Lighting</h4>
              <p className="text-gray-700">Fluorescent store lights distort every color. If possible, step outside or near a window to check how a shade looks against your skin in natural light before committing.</p>
            </div>
          </div>

          {/* IMAGE: Bold shades */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/lipstick-bold-shades.png`}
              alt="Bold lipstick shades for different undertones - reds, berries, and corals"
              className="w-full aspect-[9/16] object-cover"
              loading="lazy"
            />
            <p className="text-sm text-gray-500 mt-3 text-center">Bold lip colors organized by undertone</p>
          </div>

          {/* Lip Colors by Color Season */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Lip Colors by Color Season
          </h2>
          <div id="color-seasons" className="scroll-mt-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            If you know your color season, you can narrow your lip shade choices even further. Each season has a specific energy that your lipstick should match.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="p-6 bg-gray-50 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Spring</h4>
              <p className="text-sm text-gray-600 mb-3">Light, warm, and fresh. Your lip colors should feel bright but not heavy.</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Coral", hex: "#FF7F50" },
                  { name: "Peach", hex: "#FFCBA4" },
                  { name: "Warm Pink", hex: "#E8828A" },
                ].map((c) => (
                  <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                    <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                    {c.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 bg-gray-50 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Summer</h4>
              <p className="text-sm text-gray-600 mb-3">Cool, soft, and muted. Your best lips are gentle and understated.</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Dusty Rose", hex: "#C4767C" },
                  { name: "Mauve", hex: "#C98FB0" },
                  { name: "Soft Berry", hex: "#9E6B7B" },
                ].map((c) => (
                  <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                    <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                    {c.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 bg-gray-50 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Autumn</h4>
              <p className="text-sm text-gray-600 mb-3">Warm, deep, and rich. Your lips should feel grounded and earthy.</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Warm Red", hex: "#C0392B" },
                  { name: "Brick", hex: "#CB4154" },
                  { name: "Terracotta", hex: "#C05B3C" },
                ].map((c) => (
                  <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                    <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                    {c.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 bg-gray-50 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Winter</h4>
              <p className="text-sm text-gray-600 mb-3">Cool, bold, and high-contrast. Your lips can handle drama.</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "True Red", hex: "#C41E3A" },
                  { name: "Berry", hex: "#8E4585" },
                  { name: "Wine", hex: "#722F37" },
                ].map((c) => (
                  <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                    <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                    {c.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Not sure which season you are? Take our <Link to="/what-season-am-i" className="text-black underline hover:no-underline">What Season Am I?</Link> guide to find out your full color season and palette.
          </p>

          {/* Summary Box */}
          <div className="bg-gray-50 p-8 my-12">
            <h3 className="font-semibold text-gray-900 mb-4">The Quick Guide</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-900">Cool undertones:</p>
                <p className="text-gray-700">Blue-based pinks, berry, plum, wine, cherry red, mauve, cool rose</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Warm undertones:</p>
                <p className="text-gray-700">Coral, peach, warm nude, brick red, warm orange-red, terracotta</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Neutral undertones:</p>
                <p className="text-gray-700">Dusty rose, soft berry, MLBB pink, true red, mauve-pink</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Remember:</p>
                <p className="text-gray-700">Match your lipstick to your skin's undertone, not your outfit. A shade that works with your undertone will work with everything.</p>
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
            Lipstick is just one piece of the puzzle. Explore more about finding colors that flatter your unique coloring:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/best-colors-for-pale-skin" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">Best Colors for Pale Skin</h4>
              <p className="text-sm text-gray-600">Full wardrobe color guide for fair complexions by undertone.</p>
            </Link>
            <Link to="/makeup-for-pale-skin" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">Best Makeup for Pale Skin</h4>
              <p className="text-sm text-gray-600">Foundation, blush, eyeshadow, and more — all by undertone.</p>
            </Link>
            <Link to="/what-season-am-i" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">What Season Am I?</h4>
              <p className="text-sm text-gray-600">Discover your color season for a complete personalized palette.</p>
            </Link>
            <Link to="/warm-vs-cool-undertones" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">Warm vs Cool Undertones</h4>
              <p className="text-sm text-gray-600">The definitive guide to figuring out your undertone once and for all.</p>
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
            {faqItems.map((item, i) => (
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
        "mainEntity": faqItems.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      })}} />

      <div className="container mx-auto px-4 max-w-4xl">
        <AnalysisCTA />
      </div>
      <Footer />
    </div>
  );
};

export default BestLipstickForSkinTone;
