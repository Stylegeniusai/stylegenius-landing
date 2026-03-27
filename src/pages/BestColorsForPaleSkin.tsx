import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnalysisCTA from "../components/AnalysisCTA";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const quizQuestions = [
  {
    question: "Look at the veins on your inner wrist. What color are they?",
    options: [
      { label: "Blue or purple", value: "cool" },
      { label: "Green or olive", value: "warm" },
      { label: "A mix of both", value: "neutral" },
    ],
  },
  {
    question: "Which jewelry looks better on you?",
    options: [
      { label: "Silver", value: "cool" },
      { label: "Gold", value: "warm" },
      { label: "Both look equally good", value: "neutral" },
    ],
  },
  {
    question: "When you're in the sun, what happens?",
    options: [
      { label: "I burn easily and rarely tan", value: "cool" },
      { label: "I tan pretty easily", value: "warm" },
      { label: "I burn first, then tan", value: "neutral" },
    ],
  },
];

const quizResults: Record<string, { title: string; description: string; scrollTo: string }> = {
  cool: {
    title: "You're most likely cool-toned",
    description: "Your best colors are jewel tones, navy, emerald, berry, and blue-based reds. Scroll down to your section for the full breakdown.",
    scrollTo: "#cool-undertones",
  },
  warm: {
    title: "You're most likely warm-toned",
    description: "Your best colors are coral, peach, mustard, olive green, and warm reds. Scroll down to your section for the full breakdown.",
    scrollTo: "#warm-undertones",
  },
  neutral: {
    title: "You're most likely neutral",
    description: "Lucky you — you can pull off both warm and cool colors. Soft, muted tones like dusty rose, sage, and mauve are your sweet spot.",
    scrollTo: "#neutral-undertones",
  },
};

const UndertoneQuiz = () => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (newAnswers.length === quizQuestions.length) {
      const counts: Record<string, number> = { cool: 0, warm: 0, neutral: 0 };
      newAnswers.forEach((a) => counts[a]++);
      const winner = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
      setResult(winner);
    }
  };

  const reset = () => {
    setAnswers([]);
    setResult(null);
  };

  const resultColors: Record<string, string[]> = {
    cool: ["#1B2951", "#046A38", "#4A0E4E", "#8E4585", "#9B111E"],
    warm: ["#FF7F50", "#FFDAB9", "#CC3333", "#FFDB58", "#6B8E23"],
    neutral: ["#DE5D83", "#B2AC88", "#6699CC", "#C98FB0", "#8B7D6B"],
  };

  if (result) {
    const r = quizResults[result];
    return (
      <div className="my-8 rounded-xl p-[2px] bg-gradient-to-br from-rose-300 via-purple-300 to-amber-200">
        <div className="bg-white rounded-[10px] p-6 md:p-8">
          <p className="font-semibold text-gray-900 text-lg mb-2">{r.title}</p>
          <div className="flex gap-2 my-4">
            {resultColors[result].map((hex) => (
              <div key={hex} className="w-8 h-8 rounded-full border border-gray-100 shadow-sm" style={{ backgroundColor: hex }} />
            ))}
          </div>
          <p className="text-gray-700 mb-4">{r.description}</p>
          <div className="flex flex-wrap gap-3 items-center">
            <a href={r.scrollTo} className="text-sm font-medium text-gray-900 underline hover:no-underline">Jump to your colors</a>
            <span className="text-gray-300">|</span>
            <Link to="/personal-analysis" className="text-sm text-rose-500 hover:text-rose-600 transition-colors">Want your exact palette? Get your personal analysis</Link>
            <span className="text-gray-300">|</span>
            <button onClick={reset} className="text-sm text-gray-500 underline hover:no-underline">Retake quiz</button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = quizQuestions[answers.length];
  return (
    <div className="my-8 rounded-xl p-[2px] bg-gradient-to-br from-rose-300 via-purple-300 to-amber-200">
      <div className="bg-white rounded-[10px] p-6 md:p-8">
        <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">Question {answers.length + 1} of {quizQuestions.length}</p>
        <p className="font-semibold text-gray-900 text-lg mb-4">{currentQ.question}</p>
        <div className="space-y-2">
          {currentQ.options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleAnswer(opt.value)}
              className="block w-full text-left px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-rose-200 hover:bg-rose-50/30 transition-colors text-gray-700"
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const BestColorsForPaleSkin = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Best Colors for Pale Skin: What to Wear & Avoid by Undertone (2026)"
        description="Find your most flattering colors for pale skin. Cool, warm, or neutral undertone? See exactly which shades make you glow and which wash you out - with photo examples."
        keywords="best colors for pale skin, colors for fair skin, what colors look good on pale skin, colors that suit pale skin, colors to avoid pale skin, jewel tones pale skin, cool undertone colors, warm undertone colors"
        canonicalUrl="/best-colors-for-pale-skin"
        ogImage="/pale-skin-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-11-18",
          modifiedTime: "2026-01-19",
          section: "Color Analysis",
          tags: ["pale skin", "fair skin", "color guide", "skin tone", "undertones"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Color Analysis", url: "/color" },
          { name: "Best Colors for Pale Skin", url: "/best-colors-for-pale-skin" }
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
              Best Colors for Pale Skin
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The complete guide to finding colors that make fair skin glow - not wash out. From jewel tones to the perfect red, based on your undertone.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={`${BLOG_IMAGE_BASE}/pale-skin-hero.png`}
              alt="Color palette guide for pale skin showing jewel tones and flattering colors"
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
            If you have pale or fair skin, you've probably been told to "add some color" more times than you can count. But here's the thing: the right colors can make pale skin look radiant and healthy, while the wrong ones can leave you looking washed out or even sickly.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            The secret isn't just about picking bright colors - it's about understanding your undertone and choosing shades that create the right contrast with your complexion. Let's break it down.
          </p>

          {/* Table of Contents */}
          <nav className="bg-gray-50 p-6 md:p-8 mb-12">
            <p className="font-semibold text-gray-900 mb-4">In this guide:</p>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#undertone" className="hover:text-black underline">Find your undertone (quick quiz)</a></li>
              <li><a href="#colors-by-undertone" className="hover:text-black underline">Best colors by undertone</a></li>
              <li><a href="#universal-colors" className="hover:text-black underline">Universal colors that work for all pale skin</a></li>
              <li><a href="#colors-to-avoid" className="hover:text-black underline">Colors that wash you out</a></li>
              <li><a href="#makeup" className="hover:text-black underline">Best makeup shades for pale skin</a></li>
              <li><a href="#your-season" className="hover:text-black underline">What color season are you?</a></li>
              <li><a href="#styling-tips" className="hover:text-black underline">Styling tips</a></li>
              <li><a href="#faq" className="hover:text-black underline">FAQ</a></li>
            </ul>
          </nav>

          {/* Understanding Undertones */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            First: Know Your Undertone
          </h2>
          <div id="undertone" className="scroll-mt-8" />
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Pale skin can have cool, warm, or neutral undertones. This matters more than your skin's surface color because undertones determine which colors harmonize with your complexion.
          </p>

          <div className="bg-gray-50 p-8 my-8">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Undertone Test:</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Cool undertones:</strong> Your veins appear blue or purple. Silver jewelry looks better than gold. You burn easily in the sun.</li>
              <li><strong>Warm undertones:</strong> Your veins appear green. Gold jewelry flatters you more. You might get a slight tan before burning.</li>
              <li><strong>Neutral undertones:</strong> Your veins look blue-green. Both gold and silver suit you equally well.</li>
            </ul>
          </div>

          <UndertoneQuiz />

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Not sure? Check out our complete guide on <Link to="/warm-vs-cool-undertones" className="text-black underline hover:no-underline">warm vs cool undertones</Link> or take a deeper dive into <Link to="/what-colors-suit-me" className="text-black underline hover:no-underline">finding your color season</Link>.
          </p>

          {/* IMAGE: Undertone comparison */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/pale-skin-undertones.png`}
              alt="Comparison of cool, warm, and neutral undertones on pale skin"
              className="w-full aspect-square object-cover"
            />
            <p className="text-sm text-gray-500 mt-3 text-center">Cool, warm, and neutral undertones on fair skin</p>
          </div>

          {/* Best Colors by Undertone */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Best Colors by Undertone
          </h2>
          <div id="colors-by-undertone" className="scroll-mt-8" />

          {/* Cool Undertones */}
          <h3 id="cool-undertones" className="text-2xl font-semibold text-gray-900 mb-4 mt-12 scroll-mt-8">Cool Undertones</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            If you have cool undertones, you'll look best in colors with blue or pink bases. These create harmony with the natural coolness in your skin.
          </p>
          <div className="bg-gray-50 p-6 mb-6">
            <p className="font-medium text-gray-900 mb-3">Your best colors:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Navy", hex: "#1B2951" },
                { name: "Emerald", hex: "#046A38" },
                { name: "Deep Purple", hex: "#4A0E4E" },
                { name: "Berry", hex: "#8E4585" },
                { name: "Ruby Red", hex: "#9B111E" },
                { name: "Soft Pink", hex: "#F4C2C2" },
                { name: "Icy Blue", hex: "#D6E8EE" },
                { name: "Lavender", hex: "#B57EDC" },
                { name: "Cool Gray", hex: "#8C92AC" },
                { name: "True White", hex: "#FFFFFF" },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                  <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                  {c.name}
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            <strong>Skip:</strong> Orange, mustard yellow, warm browns, coral, peach, and anything with golden undertones.
          </p>
          <p className="text-sm text-gray-400 mb-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>

          {/* IMAGE: Cool undertone colors */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/pale-skin-cool-colors.png`}
              alt="Best colors for pale skin with cool undertones - navy, emerald, purple, berry"
              className="w-full aspect-square object-cover"
            />
            <p className="text-sm text-gray-500 mt-3 text-center">Colors that flatter cool-toned pale skin</p>
          </div>

          {/* Warm Undertones */}
          <h3 id="warm-undertones" className="text-2xl font-semibold text-gray-900 mb-4 mt-12 scroll-mt-8">Warm Undertones</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Warm undertones pair beautifully with colors that have yellow, orange, or golden bases. These enhance the natural warmth in your complexion.
          </p>
          <div className="bg-gray-50 p-6 mb-6">
            <p className="font-medium text-gray-900 mb-3">Your best colors:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Coral", hex: "#FF7F50" },
                { name: "Peach", hex: "#FFDAB9" },
                { name: "Warm Red", hex: "#CC3333" },
                { name: "Mustard", hex: "#FFDB58" },
                { name: "Olive Green", hex: "#6B8E23" },
                { name: "Cream", hex: "#FFFDD0" },
                { name: "Turquoise", hex: "#40E0D0" },
                { name: "Camel", hex: "#C19A6B" },
                { name: "Warm Brown", hex: "#8B5E3C" },
                { name: "Ivory", hex: "#FFFFF0" },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                  <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                  {c.name}
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            <strong>Skip:</strong> Black (too harsh), icy pink, powder blue, cool gray, and silver-toned colors.
          </p>
          <p className="text-sm text-gray-400 mb-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>

          {/* IMAGE: Warm undertone colors */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/pale-skin-warm-colors.png`}
              alt="Best colors for pale skin with warm undertones - coral, peach, mustard, olive"
              className="w-full aspect-square object-cover"
            />
            <p className="text-sm text-gray-500 mt-3 text-center">Colors that flatter warm-toned pale skin</p>
          </div>

          {/* Neutral Undertones */}
          <h3 id="neutral-undertones" className="text-2xl font-semibold text-gray-900 mb-4 mt-12 scroll-mt-8">Neutral Undertones</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Lucky you - neutral undertones mean you can wear both warm and cool colors. Focus on mid-tone shades that aren't too extreme in either direction.
          </p>
          <div className="bg-gray-50 p-6 mb-6">
            <p className="font-medium text-gray-900 mb-3">Your best colors:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Soft White", hex: "#F5F5F0" },
                { name: "Blush Pink", hex: "#DE5D83" },
                { name: "Sage Green", hex: "#B2AC88" },
                { name: "Dusty Blue", hex: "#6699CC" },
                { name: "Mauve", hex: "#C98FB0" },
                { name: "Taupe", hex: "#8B7D6B" },
                { name: "Soft Navy", hex: "#2C3E6B" },
                { name: "Rose", hex: "#C76B8E" },
                { name: "Jade", hex: "#00A86B" },
                { name: "Dusty Rose", hex: "#DCAE96" },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                  <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                  {c.name}
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            <strong>Skip:</strong> Neon colors and very harsh contrasts. Stick to softer, muted versions of most colors.
          </p>
          <p className="text-sm text-gray-400 mb-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>

          {/* Universal Best Colors */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Universal Winners: Colors That Work for Most Pale Skin
          </h2>
          <div id="universal-colors" className="scroll-mt-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Regardless of your undertone, certain colors tend to flatter fair skin across the board. These are your safest bets.
          </p>

          {/* Jewel Tones */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">Jewel Tones</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Emerald, sapphire, ruby, amethyst - these rich, saturated colors create beautiful contrast against pale skin without being harsh. They're bold enough to make a statement but sophisticated enough for any occasion.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Emerald green is particularly stunning on fair skin. It's intense enough to create contrast but has enough depth to feel elegant rather than overwhelming.
          </p>

          {/* IMAGE: Jewel tones */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/pale-skin-jewel-tones.png`}
              alt="Jewel tones on pale skin - emerald, sapphire, ruby, amethyst"
              className="w-full aspect-square object-cover"
            />
            <p className="text-sm text-gray-500 mt-3 text-center">Jewel tones create beautiful contrast with fair skin</p>
          </div>

          {/* Navy */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">Navy Blue (Your New Black)</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Here's a styling secret: navy is often more flattering than black for pale skin. Black can create too harsh a contrast, making skin look even paler or washed out. Navy provides the same sophisticated, polished effect while being gentler on fair complexions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This doesn't mean you can never wear black - just consider keeping it away from your face (black pants are fine) or softening it with jewelry and makeup.
          </p>

          {/* IMAGE: Navy vs black */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/pale-skin-navy-vs-black.png`}
              alt="Navy blue versus black on pale skin comparison"
              className="w-full aspect-square object-cover"
            />
            <p className="text-sm text-gray-500 mt-3 text-center">Navy creates a softer contrast than black</p>
          </div>

          {/* Reds */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">The Right Red</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Red is a power color on pale skin - but the shade matters. Cool undertones suit blue-based reds like cherry, crimson, and wine. Warm undertones look better in orange-based reds like brick, tomato, and warm scarlet.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Not sure? True red (not too orange, not too pink) tends to work for most people. Start there and adjust based on how it looks against your skin.
          </p>

          {/* IMAGE: Red shades */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/pale-skin-red-shades.png`}
              alt="Different red shades on pale skin - cool reds vs warm reds"
              className="w-full aspect-square object-cover"
            />
            <p className="text-sm text-gray-500 mt-3 text-center">Finding the right red for your undertone</p>
          </div>

          {/* Colors to Avoid */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Colors That Wash Out Pale Skin
          </h2>
          <div id="colors-to-avoid" className="scroll-mt-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The biggest mistake with pale skin is wearing colors too close to your skin tone. Without enough contrast, you can look flat, tired, or even unwell. Here's what to approach with caution:
          </p>

          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-gray-300 pl-6">
              <h4 className="font-semibold text-gray-900 mb-2">Beige and Nude Tones</h4>
              <p className="text-gray-700">These blend into fair skin rather than complementing it. If you love neutrals, opt for cream, camel, or taupe instead.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-6">
              <h4 className="font-semibold text-gray-900 mb-2">Pale Pastels</h4>
              <p className="text-gray-700">Washed-out pastels don't provide enough contrast. If you want to wear pastels, choose more saturated versions or pair them with stronger colors.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-6">
              <h4 className="font-semibold text-gray-900 mb-2">Neon Colors</h4>
              <p className="text-gray-700">Too harsh and can reflect unflattering tones onto your skin. Stick to jewel-tone versions of bright colors instead.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-6">
              <h4 className="font-semibold text-gray-900 mb-2">Stark White</h4>
              <p className="text-gray-700">Can make pale skin look even paler. Off-white, cream, or ivory are softer alternatives that still read as "white."</p>
            </div>
          </div>

          {/* IMAGE: Colors to avoid */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/pale-skin-colors-avoid.png`}
              alt="Colors that wash out pale skin - beige, pale pastels, neon"
              className="w-full aspect-square object-cover"
            />
            <p className="text-sm text-gray-500 mt-3 text-center">Colors that can wash out fair complexions</p>
          </div>

          {/* Mid-article CTA */}
          <AnalysisCTA />

          {/* Makeup Section */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Best Makeup Shades for Pale Skin
          </h2>
          <div id="makeup" className="scroll-mt-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The same undertone rules apply to makeup. Wearing the wrong shade of foundation, blush, or lipstick can undo a perfectly chosen outfit. For the full breakdown, check out our complete <Link to="/makeup-for-pale-skin" className="text-black underline hover:no-underline">makeup guide for pale skin</Link>.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-gray-50 p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Foundation</h4>
              <p className="text-gray-700 mb-3">The biggest mistake: going too dark or too yellow. Pale skin needs foundations with the right undertone, not just the lightest shade.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li><strong>Cool:</strong> Look for porcelain or ivory shades with pink undertones</li>
                <li><strong>Warm:</strong> Go for light beige or sand with yellow undertones</li>
                <li><strong>Neutral:</strong> Shades labeled "nude" or "natural" tend to work well</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Blush</h4>
              <p className="text-gray-700 mb-3">Blush is your best friend for adding dimension. But the wrong shade looks like a sunburn.</p>
              <div className="flex flex-wrap gap-3 mt-3">
                {[
                  { name: "Cool: Soft Pink", hex: "#F4B4C6" },
                  { name: "Cool: Mauve", hex: "#C98FB0" },
                  { name: "Warm: Peach", hex: "#FFDAB9" },
                  { name: "Warm: Apricot", hex: "#FBCEB1" },
                  { name: "Neutral: Dusty Rose", hex: "#DCAE96" },
                ].map((c) => (
                  <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                    <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                    {c.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Lipstick</h4>
              <p className="text-gray-700 mb-3">Lip color can completely change how your skin looks. The right shade brightens your whole face.</p>
              <div className="flex flex-wrap gap-3 mt-3">
                {[
                  { name: "Cool: Cherry", hex: "#9B111E" },
                  { name: "Cool: Berry", hex: "#8E4585" },
                  { name: "Warm: Coral", hex: "#FF7F50" },
                  { name: "Warm: Brick Red", hex: "#CB4154" },
                  { name: "Everyday: Rose", hex: "#C76B8E" },
                  { name: "Everyday: MLBB Pink", hex: "#C48793" },
                ].map((c) => (
                  <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                    <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                    {c.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Eyeshadow</h4>
              <p className="text-gray-700">Taupe, soft brown, plum, and champagne work on almost all pale skin. Avoid jet black smokey eyes for everyday — dark brown or charcoal creates the same effect without being as harsh.</p>
            </div>
          </div>

          {/* Season Breakdown */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            What Color Season Are You?
          </h2>
          <div id="your-season" className="scroll-mt-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            If you have pale skin, you most likely fall into one of these four color seasons. Each one has a specific palette that goes beyond just "cool" or "warm."
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Link to="/light-spring-colors" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Light Spring</h4>
              <p className="text-sm text-gray-600 mb-2">Pale skin + warm undertone + light hair. Your colors are warm, light, and fresh — peach, coral, light turquoise, warm pink.</p>
              <span className="text-xs text-gray-400">Read full guide</span>
            </Link>
            <Link to="/light-summer-colors" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Light Summer</h4>
              <p className="text-sm text-gray-600 mb-2">Pale skin + cool undertone + light hair. Your colors are soft, cool, and muted — lavender, powder blue, soft rose, light gray.</p>
              <span className="text-xs text-gray-400">Read full guide</span>
            </Link>
            <Link to="/soft-summer-colors" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Soft Summer</h4>
              <p className="text-sm text-gray-600 mb-2">Pale skin + cool-neutral undertone + muted coloring. Your colors are dusty and toned-down — sage, dusty blue, mauve, cocoa.</p>
              <span className="text-xs text-gray-400">Read full guide</span>
            </Link>
            <Link to="/soft-autumn-colors" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Soft Autumn</h4>
              <p className="text-sm text-gray-600 mb-2">Pale skin + warm-neutral undertone + muted coloring. Your colors are earthy and soft — olive, terracotta, warm taupe, burnt sienna.</p>
              <span className="text-xs text-gray-400">Read full guide</span>
            </Link>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Not sure which one you are? Our <Link to="/what-season-am-i" className="text-black underline hover:no-underline">What Season Am I?</Link> guide walks you through it step by step.
          </p>

          {/* Styling Tips */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Styling Tips for Pale Skin
          </h2>
          <div id="styling-tips" className="scroll-mt-8" />

          <div className="space-y-6 mb-12">
            <div className="flex items-start">
              <span className="text-gray-400 mr-4 mt-1">01</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Keep strong colors near your face</h4>
                <p className="text-gray-700">A jewel-toned scarf or statement necklace can brighten your complexion even if you're wearing neutrals.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-gray-400 mr-4 mt-1">02</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Use makeup strategically</h4>
                <p className="text-gray-700">If you want to wear a less-flattering color, balance it with blush and lip color that brings warmth back to your face.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-gray-400 mr-4 mt-1">03</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Test in natural light</h4>
                <p className="text-gray-700">Store lighting lies. Always check how a color looks against your skin in daylight before buying.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-gray-400 mr-4 mt-1">04</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Consider your hair color</h4>
                <p className="text-gray-700">Dark hair with pale skin can handle more contrast. Light hair with pale skin often looks better in softer, muted tones.</p>
              </div>
            </div>
          </div>

          {/* Summary Box */}
          <div className="bg-gray-50 p-8 my-12">
            <h3 className="font-semibold text-gray-900 mb-4">The Quick Guide</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-900">Best universal colors:</p>
                <p className="text-gray-700">Jewel tones, navy, true red, emerald, deep purple</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Colors to avoid:</p>
                <p className="text-gray-700">Beige, pale pastels, neon, colors matching your skin tone</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Remember:</p>
                <p className="text-gray-700">Contrast is key. Your undertone (cool, warm, neutral) matters more than just having pale skin.</p>
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
            Understanding which colors suit you is just the beginning. Dive deeper into color analysis:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/what-season-am-i" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">What Season Am I?</h4>
              <p className="text-sm text-gray-600">Discover your complete color season for a full personalized palette.</p>
            </Link>
            <Link to="/warm-vs-cool-undertones" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">Warm vs Cool Undertones</h4>
              <p className="text-sm text-gray-600">Still unsure about your undertone? Our complete guide breaks it down.</p>
            </Link>
            <Link to="/soft-summer-colors" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">Soft Summer Colors</h4>
              <p className="text-sm text-gray-600">Many people with pale skin fall into this category.</p>
            </Link>
            <Link to="/light-summer-colors" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">Light Summer Colors</h4>
              <p className="text-sm text-gray-600">Another common season for fair-skinned individuals.</p>
            </Link>
            <Link to="/makeup-for-pale-skin" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">Best Makeup for Pale Skin</h4>
              <p className="text-sm text-gray-600">Foundation, blush, lipstick, and eyeshadow — all by undertone.</p>
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
              { q: "Can pale skin wear yellow?", a: "Yes — but stick to the right shade. Warm undertones can pull off mustard and golden yellow. Cool undertones should try lemon yellow or pair it away from the face. Avoid pale, washed-out yellows that blend into fair skin." },
              { q: "Is black a good color for pale skin?", a: "Black can work, but it creates very high contrast against pale skin which can look harsh. Navy is often a more flattering alternative. If you love black, keep it in bottoms or layer it with softer colors near your face." },
              { q: "What colors make pale skin look tanned?", a: "Warm earth tones like terracotta, warm brown, and bronze can create a sun-kissed illusion. Peach and coral blush also helps add warmth without looking unnatural." },
              { q: "Should pale skin avoid white?", a: "Stark, bright white can wash out very fair skin. Off-white, cream, and ivory are more flattering alternatives that still read as white but create a softer contrast." },
              { q: "What color looks best on everyone with pale skin?", a: "If we had to pick one: navy blue. It works across cool, warm, and neutral undertones, provides enough contrast without being harsh, and looks polished in almost any setting." },
              { q: "Do redheads with pale skin follow the same rules?", a: "Mostly, but red hair adds a warm element. Redheads with pale skin tend to look amazing in emerald green, navy, cream, and rust. Avoid colors that clash with red hair like bright orange or hot pink." },
              { q: "How do I find my exact colors and color season?", a: "The most accurate way is a personal color analysis. We offer a full personalized analysis where you get your color season, best colors, makeup palette, and styling guide — all based on your individual coloring." },
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
          { "@type": "Question", "name": "Can pale skin wear yellow?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — but stick to the right shade. Warm undertones can pull off mustard and golden yellow. Cool undertones should try lemon yellow or pair it away from the face. Avoid pale, washed-out yellows that blend into fair skin." }},
          { "@type": "Question", "name": "Is black a good color for pale skin?", "acceptedAnswer": { "@type": "Answer", "text": "Black can work, but it creates very high contrast against pale skin which can look harsh. Navy is often a more flattering alternative. If you love black, keep it in bottoms or layer it with softer colors near your face." }},
          { "@type": "Question", "name": "What colors make pale skin look tanned?", "acceptedAnswer": { "@type": "Answer", "text": "Warm earth tones like terracotta, warm brown, and bronze can create a sun-kissed illusion. Peach and coral blush also helps add warmth without looking unnatural." }},
          { "@type": "Question", "name": "Should pale skin avoid white?", "acceptedAnswer": { "@type": "Answer", "text": "Stark, bright white can wash out very fair skin. Off-white, cream, and ivory are more flattering alternatives that still read as white but create a softer contrast." }},
          { "@type": "Question", "name": "What color looks best on everyone with pale skin?", "acceptedAnswer": { "@type": "Answer", "text": "If we had to pick one: navy blue. It works across cool, warm, and neutral undertones, provides enough contrast without being harsh, and looks polished in almost any setting." }},
          { "@type": "Question", "name": "Do redheads with pale skin follow the same rules?", "acceptedAnswer": { "@type": "Answer", "text": "Mostly, but red hair adds a warm element. Redheads with pale skin tend to look amazing in emerald green, navy, cream, and rust. Avoid colors that clash with red hair like bright orange or hot pink." }},
          { "@type": "Question", "name": "How do I find my exact colors and color season?", "acceptedAnswer": { "@type": "Answer", "text": "The most accurate way is a personal color analysis. We offer a full personalized analysis where you get your color season, best colors, makeup palette, and styling guide — all based on your individual coloring." }},
        ]
      })}} />

      <div className="container mx-auto px-4 max-w-4xl">
        <AnalysisCTA />
      </div>
      <Footer />
    </div>
  );
};

export default BestColorsForPaleSkin;
