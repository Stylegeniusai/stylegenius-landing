import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnalysisCTA from "../components/AnalysisCTA";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

/* ── Undertone Quiz ── */
const makeupQuizQuestions = [
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

const makeupQuizResults: Record<string, { title: string; description: string; lip: { name: string; hex: string }[]; blush: { name: string; hex: string }[]; eyes: { name: string; hex: string }[] }> = {
  cool: {
    title: "You're most likely cool-toned",
    description: "Your best makeup shades are rosy, berry, and blue-based. Avoid anything too warm or orange.",
    lip: [{ name: "Cool Rose", hex: "#C76B8E" }, { name: "Berry", hex: "#8E4585" }, { name: "Cherry Red", hex: "#9B111E" }],
    blush: [{ name: "Dusty Rose", hex: "#DCAE96" }, { name: "Soft Mauve", hex: "#C98FB0" }],
    eyes: [{ name: "Cool Taupe", hex: "#8B7D6B" }, { name: "Soft Plum", hex: "#8E4585" }, { name: "Champagne", hex: "#F7E7CE" }],
  },
  warm: {
    title: "You're most likely warm-toned",
    description: "Your best makeup shades are peachy, coral, and golden. Avoid anything too cool or icy.",
    lip: [{ name: "Warm Peach", hex: "#FFDAB9" }, { name: "Coral", hex: "#FF7F50" }, { name: "Warm Nude", hex: "#C48793" }],
    blush: [{ name: "Peach", hex: "#FFDAB9" }, { name: "Apricot", hex: "#FBCEB1" }],
    eyes: [{ name: "Warm Bronze", hex: "#CD7F32" }, { name: "Copper", hex: "#B87333" }, { name: "Gold Shimmer", hex: "#FFD700" }],
  },
  neutral: {
    title: "You're most likely neutral",
    description: "You can pull off both warm and cool shades. Soft, muted tones are your sweet spot.",
    lip: [{ name: "Dusty Rose", hex: "#DCAE96" }, { name: "Soft Berry", hex: "#A8516E" }, { name: "MLBB Pink", hex: "#C48793" }],
    blush: [{ name: "Soft Pink", hex: "#F4B4C6" }, { name: "Dusty Peach", hex: "#E8B4A0" }],
    eyes: [{ name: "Taupe", hex: "#8B7D6B" }, { name: "Mauve", hex: "#C98FB0" }, { name: "Soft Brown", hex: "#A0785A" }],
  },
};

const MakeupQuiz = () => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    if (newAnswers.length === makeupQuizQuestions.length) {
      const counts: Record<string, number> = { cool: 0, warm: 0, neutral: 0 };
      newAnswers.forEach((a) => counts[a]++);
      const winner = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
      setResult(winner);
    }
  };

  const reset = () => { setAnswers([]); setResult(null); };

  if (result) {
    const r = makeupQuizResults[result];
    return (
      <div className="my-8 rounded-xl p-[2px] bg-gradient-to-br from-rose-300 via-purple-300 to-amber-200">
        <div className="bg-white rounded-[10px] p-6 md:p-8">
          <p className="font-semibold text-gray-900 text-lg mb-2">{r.title}</p>
          <p className="text-gray-700 mb-4">{r.description}</p>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">Lips</p>
              <div className="flex gap-1.5">
                {r.lip.map((c) => <div key={c.hex} className="w-6 h-6 rounded-full border border-gray-100 shadow-sm" style={{ backgroundColor: c.hex }} title={c.name} />)}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">Blush</p>
              <div className="flex gap-1.5">
                {r.blush.map((c) => <div key={c.hex} className="w-6 h-6 rounded-full border border-gray-100 shadow-sm" style={{ backgroundColor: c.hex }} title={c.name} />)}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">Eyes</p>
              <div className="flex gap-1.5">
                {r.eyes.map((c) => <div key={c.hex} className="w-6 h-6 rounded-full border border-gray-100 shadow-sm" style={{ backgroundColor: c.hex }} title={c.name} />)}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <Link to="/personal-analysis" className="text-sm text-rose-500 hover:text-rose-600 transition-colors">Want your exact makeup shades? Get your personal analysis</Link>
            <span className="text-gray-300">|</span>
            <button onClick={reset} className="text-sm text-gray-500 underline hover:no-underline">Retake quiz</button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = makeupQuizQuestions[answers.length];
  return (
    <div className="my-8 rounded-xl p-[2px] bg-gradient-to-br from-rose-300 via-purple-300 to-amber-200">
      <div className="bg-white rounded-[10px] p-6 md:p-8">
        <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">Question {answers.length + 1} of {makeupQuizQuestions.length}</p>
        <p className="font-semibold text-gray-900 text-lg mb-4">{currentQ.question}</p>
        <div className="space-y-2">
          {currentQ.options.map((opt) => (
            <button key={opt.value} onClick={() => handleAnswer(opt.value)} className="block w-full text-left px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-rose-200 hover:bg-rose-50/30 transition-colors text-gray-700">
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const MakeupForPaleSkin = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Best Makeup for Pale Skin: Foundation, Blush, Lips & Eyes by Undertone (2026)"
        description="The complete makeup guide for pale and fair skin. Find the best foundation, blush, lipstick, and eyeshadow shades for your undertone — plus the mistakes to avoid."
        keywords="makeup for pale skin, best foundation pale skin, blush for fair skin, lipstick for pale skin, eyeshadow pale skin, makeup mistakes fair skin, bronzer pale skin, makeup undertone guide"
        canonicalUrl="/makeup-for-pale-skin"
        ogImage="/makeup-pale-skin-hero.png"
        ogType="article"
        article={{
          publishedTime: "2026-03-27",
          modifiedTime: "2026-03-27",
          section: "Color Analysis",
          tags: ["pale skin", "fair skin", "makeup guide", "undertones", "foundation", "blush", "lipstick"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Color Analysis", url: "/color" },
          { name: "Makeup for Pale Skin", url: "/makeup-for-pale-skin" }
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
              Best Makeup for Pale Skin
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The complete guide to finding makeup shades that actually work with fair skin — not against it. Foundation, blush, lips, eyes, and the mistakes everyone makes.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      {/* IMAGE NEEDED: makeup-pale-skin-hero.png — Flatlay of makeup products in soft pinks, mauves, and nudes on white/marble background. Think editorial beauty spread. Landscape 16:9. */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={`${BLOG_IMAGE_BASE}/makeup-pale-skin-hero.png`}
              alt="Makeup products flatlay for pale skin — foundations, blush, lipstick in flattering shades"
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
            Pale skin is beautiful — but it's also unforgiving when it comes to makeup. The wrong foundation shade, an overly warm bronzer, or a blush that's too bright can make you look off in seconds. The good news? Once you know your undertone and a few key rules, finding flattering makeup becomes simple.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            This guide breaks it all down by product and undertone, so you know exactly what to reach for — and what to leave on the shelf.
          </p>

          {/* Table of Contents */}
          <nav className="bg-gray-50 p-6 md:p-8 mb-12">
            <p className="font-semibold text-gray-900 mb-4">In this guide:</p>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#undertone" className="hover:text-black underline">Find your undertone (quick quiz)</a></li>
              <li><a href="#foundation" className="hover:text-black underline">Foundation for pale skin</a></li>
              <li><a href="#blush" className="hover:text-black underline">Best blush shades</a></li>
              <li><a href="#lips" className="hover:text-black underline">Lipstick & lip color</a></li>
              <li><a href="#eyes" className="hover:text-black underline">Eyeshadow & eyeliner</a></li>
              <li><a href="#bronzer" className="hover:text-black underline">Bronzer & contour</a></li>
              <li><a href="#mistakes" className="hover:text-black underline">5 makeup mistakes to avoid</a></li>
              <li><a href="#faq" className="hover:text-black underline">FAQ</a></li>
            </ul>
          </nav>

          {/* Undertone Section */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            First: Know Your Undertone
          </h2>
          <div id="undertone" className="scroll-mt-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Pale skin has less melanin, which means your undertone is more visible than on deeper skin tones. That undertone — cool, warm, or neutral — determines which makeup shades will complement you versus clash.
          </p>

          <div className="bg-gray-50 p-8 my-8">
            <h3 className="font-semibold text-gray-900 mb-4">Quick check:</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Cool undertones:</strong> Veins look blue/purple. Pink or rosy undertones. Silver jewelry flatters more.</li>
              <li><strong>Warm undertones:</strong> Veins look green. Peachy or golden undertones. Gold jewelry looks better.</li>
              <li><strong>Neutral undertones:</strong> Mix of both. Both metals work. Your skin doesn't lean strongly pink or yellow.</li>
            </ul>
          </div>

          <MakeupQuiz />

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Still unsure? Our complete guide on <Link to="/warm-vs-cool-undertones" className="text-black underline hover:no-underline">warm vs cool undertones</Link> goes deeper, or check out <Link to="/best-colors-for-pale-skin" className="text-black underline hover:no-underline">best colors for pale skin</Link> for clothing colors.
          </p>

          {/* Foundation */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Foundation for Pale Skin
          </h2>
          <div id="foundation" className="scroll-mt-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The biggest mistake with pale skin foundation: grabbing the lightest shade without checking the undertone. The lightest shade in most lines is often too pink or too yellow — and on pale skin, that mismatch is extremely visible.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Cool undertones</h4>
              <p className="text-gray-700">Look for foundations labeled "porcelain," "ivory," or "fair" with pink undertones. Avoid anything with "golden" or "warm" in the name.</p>
              <div className="flex flex-wrap gap-3 mt-3">
                {[
                  { name: "Porcelain Pink", hex: "#F5E1DA" },
                  { name: "Cool Ivory", hex: "#F5F0E8" },
                  { name: "Fair Rose", hex: "#F2DDD5" },
                ].map((c) => (
                  <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                    <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                    {c.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Warm undertones</h4>
              <p className="text-gray-700">Go for "light beige," "sand," or "nude" with yellow or peachy undertones. Avoid shades that look pink — they'll make you look flushed.</p>
              <div className="flex flex-wrap gap-3 mt-3">
                {[
                  { name: "Light Beige", hex: "#F5E6D3" },
                  { name: "Warm Sand", hex: "#F0DCC8" },
                  { name: "Fair Golden", hex: "#F5E0C4" },
                ].map((c) => (
                  <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                    <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                    {c.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Neutral undertones</h4>
              <p className="text-gray-700">Shades labeled "natural," "nude," or "buff" usually work. They sit between pink and yellow without leaning heavily either way.</p>
            </div>
          </div>

          <div className="border-l-4 border-gray-300 pl-6 mb-8">
            <p className="text-gray-700"><strong>Pro tip:</strong> Less is more on pale skin. Heavy, full-coverage foundation can look cakey fast. A sheer skin tint or light-coverage foundation usually looks better — use concealer for targeted areas instead.</p>
          </div>

          <p className="text-sm text-gray-400 mb-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get makeup shades picked specifically for you</Link></p>

          {/* IMAGE NEEDED: makeup-pale-skin-foundation.png — Side-by-side of wrong vs right foundation shade on fair skin. Or foundation swatches on pale arm. Square format. */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/makeup-pale-skin-foundation.png`}
              alt="Foundation shade matching for pale skin — cool, warm, and neutral undertones"
              className="w-full aspect-square object-cover"
            />
            <p className="text-sm text-gray-500 mt-3 text-center">Finding the right foundation undertone makes all the difference</p>
          </div>

          {/* Blush */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Best Blush Shades for Pale Skin
          </h2>
          <div id="blush" className="scroll-mt-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Blush is your best friend with pale skin — it adds life and dimension. But the wrong shade looks like a sunburn or disappears entirely.
          </p>

          <div className="bg-gray-50 p-6 mb-6">
            <p className="font-medium text-gray-900 mb-3">Best blush by undertone:</p>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Cool undertones:</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Dusty Rose", hex: "#DCAE96" },
                    { name: "Soft Mauve", hex: "#C98FB0" },
                    { name: "Cool Pink", hex: "#F4B4C6" },
                    { name: "Light Berry", hex: "#B5738B" },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                      <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                      {c.name}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Warm undertones:</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Peach", hex: "#FFDAB9" },
                    { name: "Apricot", hex: "#FBCEB1" },
                    { name: "Warm Coral", hex: "#F0A08A" },
                    { name: "Soft Peach", hex: "#F5CDB6" },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                      <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                      {c.name}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Neutral undertones:</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Soft Pink", hex: "#F4B4C6" },
                    { name: "Dusty Peach", hex: "#E8B4A0" },
                    { name: "Rose", hex: "#C76B8E" },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                      <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                      {c.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-4">
            <strong>Skip:</strong> Hot pink, bright fuchsia, and orange-toned blush. On pale skin these create a harsh, unnatural flush.
          </p>
          <p className="text-sm text-gray-400 mb-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get makeup shades picked specifically for you</Link></p>

          {/* IMAGE NEEDED: makeup-pale-skin-blush.png — Blush swatches or blush applied on pale skin showing cool vs warm shades. Square format. */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/makeup-pale-skin-blush.png`}
              alt="Best blush shades for pale skin — dusty rose, peach, and soft pink"
              className="w-full aspect-square object-cover"
            />
            <p className="text-sm text-gray-500 mt-3 text-center">The right blush adds warmth without looking unnatural</p>
          </div>

          {/* Lips */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Best Lipstick Shades for Pale Skin
          </h2>
          <div id="lips" className="scroll-mt-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Lip color has the biggest impact on how your skin looks. The right shade brightens your entire face. The wrong one drains it.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-gray-50 p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Everyday shades</h4>
              <p className="text-gray-700 mb-3">Look for MLBB ("my lips but better") shades — one shade deeper than your natural lip color. This is your go-to for a natural, polished look.</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Cool: Rose Nude", hex: "#C48793" },
                  { name: "Warm: Peach Nude", hex: "#D4A088" },
                  { name: "Neutral: Dusty Pink", hex: "#C9A0A0" },
                ].map((c) => (
                  <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                    <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                    {c.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Bold shades</h4>
              <p className="text-gray-700 mb-3">Pale skin can absolutely wear bold lips — in fact, they look amazing because of the contrast. The key is picking the right bold.</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Cool: Cherry Red", hex: "#9B111E" },
                  { name: "Cool: Deep Berry", hex: "#8E4585" },
                  { name: "Warm: Coral Red", hex: "#E25C5C" },
                  { name: "Warm: Brick Red", hex: "#CB4154" },
                ].map((c) => (
                  <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                    <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                    {c.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-4">
            <strong>Skip:</strong> Orange-toned lipstick, very dark brown, and nudes that match your skin exactly (they'll make you look washed out, not chic).
          </p>
          <p className="text-sm text-gray-400 mb-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get makeup shades picked specifically for you</Link></p>

          {/* Mid-article CTA */}
          <AnalysisCTA />

          {/* Eyes */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Best Eyeshadow for Pale Skin
          </h2>
          <div id="eyes" className="scroll-mt-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Eyeshadow on pale skin shows up more intensely than on deeper skin tones. That's a superpower — you get more impact from softer shades. But it also means harsh colors are less forgiving.
          </p>

          <div className="bg-gray-50 p-6 mb-6">
            <p className="font-medium text-gray-900 mb-3">Universal winners for pale skin:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Warm Taupe", hex: "#8B7D6B" },
                { name: "Champagne", hex: "#F7E7CE" },
                { name: "Soft Plum", hex: "#8E4585" },
                { name: "Cool Brown", hex: "#7B6B63" },
                { name: "Icy Pink", hex: "#F4C2C2" },
                { name: "Mauve", hex: "#C98FB0" },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                  <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                  {c.name}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-gray-300 pl-6">
              <h4 className="font-semibold text-gray-900 mb-2">For everyday</h4>
              <p className="text-gray-700">Warm taupe is the most versatile shade — it adds definition without looking heavy. Pair with champagne on the lid for a quick, polished eye.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-6">
              <h4 className="font-semibold text-gray-900 mb-2">For a smoky eye</h4>
              <p className="text-gray-700">Use dark brown or charcoal instead of jet black. Same drama, but softer against fair skin. Smudge rather than line for the most flattering effect.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-6">
              <h4 className="font-semibold text-gray-900 mb-2">For color</h4>
              <p className="text-gray-700">Pale skin is amazing with jewel-toned eyeshadow — emerald, sapphire, and plum create stunning contrast. Start with a wash of color and build up.</p>
            </div>
          </div>

          {/* IMAGE NEEDED: makeup-pale-skin-eyeshadow.png — Eyeshadow palette or swatches in taupes, mauves, champagne tones. Or eye makeup look on pale skin. Square format. */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/makeup-pale-skin-eyeshadow.png`}
              alt="Best eyeshadow shades for pale skin — taupe, champagne, plum, and mauve"
              className="w-full aspect-square object-cover"
            />
            <p className="text-sm text-gray-500 mt-3 text-center">Soft, muted shades create the most flattering eye looks on fair skin</p>
          </div>

          {/* Bronzer */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Bronzer & Contour for Pale Skin
          </h2>
          <div id="bronzer" className="scroll-mt-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This is where most pale-skinned people go wrong. The bronzer that looks sunkissed on medium skin looks muddy and orange on fair skin.
          </p>

          <div className="bg-gray-50 p-8 my-8">
            <h3 className="font-semibold text-gray-900 mb-4">The rules:</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Go max 1-2 shades deeper</strong> than your skin tone. Anything more looks dirty, not bronzed.</li>
              <li><strong>Cool-toned contour, warm-toned bronzer.</strong> Contour should mimic shadow (cool/grey). Bronzer adds warmth (warm/peachy). They're not the same product.</li>
              <li><strong>Avoid shimmer for contour.</strong> Matte only. Shimmer bronzer is fine on cheekbones but keep it sheer.</li>
              <li><strong>Blend, blend, blend.</strong> Streaks are 10x more visible on pale skin. Use a fluffy brush and a light hand.</li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { name: "Fair Bronzer", hex: "#D4A574" },
              { name: "Cool Contour", hex: "#B0A090" },
              { name: "Light Peach Bronze", hex: "#E8C4A0" },
            ].map((c) => (
              <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
                <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                {c.name}
              </div>
            ))}
          </div>

          {/* Mistakes */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            5 Makeup Mistakes That Make Pale Skin Look Worse
          </h2>
          <div id="mistakes" className="scroll-mt-8" />

          <div className="space-y-6 mb-12">
            <div className="flex items-start">
              <span className="text-gray-400 mr-4 mt-1">01</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Choosing foundation by shade, not undertone</h4>
                <p className="text-gray-700">The lightest shade isn't always right. A slightly deeper shade with the right undertone will always look more natural than a too-light shade with the wrong one.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-gray-400 mr-4 mt-1">02</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Orange bronzer</h4>
                <p className="text-gray-700">The number one makeup crime on pale skin. Most bronzers are designed for medium skin tones. On fair skin they just look muddy and orange. Stick to very light, cool-toned bronzers.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-gray-400 mr-4 mt-1">03</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Too much powder</h4>
                <p className="text-gray-700">Powder clings to pale skin and makes it look flat and cakey. Use a setting spray instead, or powder only your T-zone with a translucent formula.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-gray-400 mr-4 mt-1">04</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Skipping blush</h4>
                <p className="text-gray-700">Without blush, pale skin can look flat and one-dimensional. Even a sheer wash of the right shade adds life and dimension.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-gray-400 mr-4 mt-1">05</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Nude lip that matches your skin</h4>
                <p className="text-gray-700">A "nude" lip on pale skin often just erases your lips. Choose a nude that's one shade deeper and has a pink or rosy tint — not beige.</p>
              </div>
            </div>
          </div>

          {/* Summary Box */}
          <div className="bg-gray-50 p-8 my-12">
            <h3 className="font-semibold text-gray-900 mb-4">The Quick Guide</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-900">Foundation:</p>
                <p className="text-gray-700">Match your undertone first, shade second. Less coverage is usually better.</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Blush:</p>
                <p className="text-gray-700">Cool = dusty rose/mauve. Warm = peach/apricot. Always blend well.</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Lips:</p>
                <p className="text-gray-700">MLBB shades for everyday. Cherry or berry for bold. Avoid orange and matching-skin nudes.</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Eyes:</p>
                <p className="text-gray-700">Taupe and champagne for everyday. Brown not black for smoky. Jewel tones for fun.</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Bronzer:</p>
                <p className="text-gray-700">Max 1-2 shades deeper. Cool for contour, warm for bronzer. Light hand always.</p>
              </div>
            </div>
          </div>

          {/* Related Content */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Keep Reading
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/best-colors-for-pale-skin" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">Best Colors for Pale Skin</h4>
              <p className="text-sm text-gray-600">Find the most flattering clothing colors for your undertone.</p>
            </Link>
            <Link to="/what-season-am-i" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">What Season Am I?</h4>
              <p className="text-sm text-gray-600">Discover your color season for a full personalized palette.</p>
            </Link>
            <Link to="/warm-vs-cool-undertones" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">Warm vs Cool Undertones</h4>
              <p className="text-sm text-gray-600">The complete guide to finding your undertone.</p>
            </Link>
            <Link to="/soft-summer-colors" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">Soft Summer Colors</h4>
              <p className="text-sm text-gray-600">A common season for pale skin — see if it's you.</p>
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
              { q: "Can pale skin wear dark lipstick?", a: "Absolutely — dark lips look stunning on pale skin because of the contrast. Deep berry, wine, and oxblood are all great choices. The key is clean application — dark shades show every imperfection, so use lip liner and apply carefully." },
              { q: "What's the best drugstore foundation for very pale skin?", a: "Look for brands that offer a wide shade range in the lightest end. The most important thing isn't the brand — it's matching your undertone. Test on your jaw in natural light, not your hand." },
              { q: "Should pale skin use bronzer?", a: "Yes, but carefully. Choose a bronzer that's only 1-2 shades deeper than your skin and avoid anything orange. Apply with a light hand on the high points where the sun would naturally hit — temples, cheekbones, bridge of the nose." },
              { q: "Why does my foundation look orange after a few hours?", a: "This is called oxidation — the foundation reacts with your skin's oils and darkens. It's more noticeable on pale skin. Try a primer first, look for foundations labeled 'non-oxidizing,' or choose a shade that's slightly lighter than your skin to compensate." },
              { q: "What eyeshadow colors should pale skin avoid?", a: "There are no hard rules, but be careful with very warm oranges and yellows — they can make fair skin look sallow. Jet black can also look harsh for everyday; try dark brown or charcoal instead for a softer effect." },
              { q: "How do I stop looking washed out with makeup?", a: "Three things: 1) Always wear blush — it adds life. 2) Define your brows — they frame your face. 3) Choose lip and cheek colors that have some saturation, not shades that blend into your skin." },
              { q: "How do I find my exact makeup shades?", a: "A personal color analysis gives you your specific undertone, color season, and recommended makeup shades — including lip, blush, eyeshadow, and foundation guidance. It takes the guesswork out completely." },
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
          { "@type": "Question", "name": "Can pale skin wear dark lipstick?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely — dark lips look stunning on pale skin because of the contrast. Deep berry, wine, and oxblood are all great choices. The key is clean application — dark shades show every imperfection, so use lip liner and apply carefully." }},
          { "@type": "Question", "name": "What's the best drugstore foundation for very pale skin?", "acceptedAnswer": { "@type": "Answer", "text": "Look for brands that offer a wide shade range in the lightest end. The most important thing isn't the brand — it's matching your undertone. Test on your jaw in natural light, not your hand." }},
          { "@type": "Question", "name": "Should pale skin use bronzer?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, but carefully. Choose a bronzer that's only 1-2 shades deeper than your skin and avoid anything orange. Apply with a light hand on the high points where the sun would naturally hit." }},
          { "@type": "Question", "name": "Why does my foundation look orange after a few hours?", "acceptedAnswer": { "@type": "Answer", "text": "This is called oxidation — the foundation reacts with your skin's oils and darkens. It's more noticeable on pale skin. Try a primer first, look for foundations labeled 'non-oxidizing,' or choose a shade slightly lighter to compensate." }},
          { "@type": "Question", "name": "What eyeshadow colors should pale skin avoid?", "acceptedAnswer": { "@type": "Answer", "text": "Be careful with very warm oranges and yellows — they can make fair skin look sallow. Jet black can also look harsh for everyday; try dark brown or charcoal instead." }},
          { "@type": "Question", "name": "How do I stop looking washed out with makeup?", "acceptedAnswer": { "@type": "Answer", "text": "Three things: Always wear blush, define your brows, and choose lip and cheek colors with some saturation rather than shades that blend into your skin." }},
          { "@type": "Question", "name": "How do I find my exact makeup shades?", "acceptedAnswer": { "@type": "Answer", "text": "A personal color analysis gives you your specific undertone, color season, and recommended makeup shades — including lip, blush, eyeshadow, and foundation guidance." }},
        ]
      })}} />

      <div className="container mx-auto px-4 max-w-4xl">
        <AnalysisCTA />
      </div>
      <Footer />
    </div>
  );
};

export default MakeupForPaleSkin;
