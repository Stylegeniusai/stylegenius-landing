import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnalysisCTA from "../components/AnalysisCTA";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const ColorCombinations2026 = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="5 Color Combinations Trending in 2026 — Straight From the Runway"
        description="The biggest color pairings of 2026: ballet pink + cherry red, burgundy + icy blue, cobalt + white, turquoise + chocolate, violet + candy red. How to wear each one."
        keywords="color combinations 2026, trending colors 2026, fashion color trends, ballet pink cherry red, cobalt blue outfit, burgundy icy blue, color pairing trends, runway color trends 2026"
        canonicalUrl="/color-combinations-2026"
        ogImage="/color-combos-2026-hero.png"
        ogType="article"
        article={{
          publishedTime: "2026-03-29",
          modifiedTime: "2026-03-29",
          section: "Fashion Trends",
          tags: ["color trends", "2026 fashion", "color combinations", "runway trends", "outfit ideas"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Shopping & Trends", url: "/shopping" },
          { name: "Color Combinations 2026", url: "/color-combinations-2026" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/shopping" className="text-sm uppercase tracking-wider text-gray-500 hover:text-black mb-6 inline-block">
              Fashion Trends
            </Link>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              5 Color Combinations Trending Right Now
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Straight from the Spring/Summer 2026 runways — the color pairings fashion editors can't stop wearing, and how to style each one.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      {/* IMAGE NEEDED: color-combos-2026-hero.png — Editorial style flatlay or collage of the 5 color combos (fabric swatches, color blocks). Landscape 16:9. */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={`${BLOG_IMAGE_BASE}/color-combos-2026-hero.png`}
              alt="Trending color combinations for 2026 — ballet pink, cobalt, burgundy, turquoise, violet"
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
            2026 is the year of clashing on purpose. Designers aren't playing it safe — the biggest color pairings from Chanel, Loewe, Victoria Beckham, and Tory Burch are bold, unexpected, and almost wrong enough to be completely right.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            Here are the five combinations dominating runways and fashion feeds right now — plus a wearable bonus if you want to ease into the trend.
          </p>

          {/* Table of Contents */}
          <nav className="bg-gray-50 p-6 md:p-8 mb-12">
            <p className="font-semibold text-gray-900 mb-4">The 2026 color pairings:</p>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#ballet-cherry" className="hover:text-black underline">1. Ballet Pink + Cherry Red</a></li>
              <li><a href="#burgundy-icy" className="hover:text-black underline">2. Burgundy + Icy Blue</a></li>
              <li><a href="#cobalt-white" className="hover:text-black underline">3. Cobalt + White</a></li>
              <li><a href="#turquoise-chocolate" className="hover:text-black underline">4. Turquoise + Chocolate Brown</a></li>
              <li><a href="#violet-candy" className="hover:text-black underline">5. Violet + Candy Red</a></li>
              <li><a href="#bonus" className="hover:text-black underline">Bonus: Sage + Cloud White</a></li>
            </ul>
          </nav>

          {/* 1. Ballet Pink + Cherry Red */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-4 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            1. Ballet Pink + Cherry Red
          </h2>
          <div id="ballet-cherry" className="scroll-mt-8" />

          <div className="flex gap-3 mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: "#F4C2C2" }} />
              Ballet Pink
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: "#9B111E" }} />
              Cherry Red
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This was all over Chanel SS26. A powder-pink button-down styled with a dramatic cherry red skirt. Romantic but edgy — the softness of ballet pink stops the red from being aggressive, while the red keeps the pink from looking too sweet.
          </p>

          <div className="bg-gray-50 p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">How to wear it</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>Pink top + red bottoms (the Chanel way)</li>
              <li>Red dress + pink bag or shoes</li>
              <li>All pink outfit with a cherry red lip</li>
              <li>Works best with cool and neutral undertones</li>
            </ul>
          </div>

          {/* IMAGE NEEDED: color-combo-ballet-cherry.png — Outfit or moodboard showing ballet pink + cherry red combination. Square. */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/color-combo-ballet-cherry.png`}
              alt="Ballet pink and cherry red color combination — Chanel SS26 inspired"
              className="w-full aspect-square object-cover"
            />
          </div>

          {/* 2. Burgundy + Icy Blue */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-4 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            2. Burgundy + Icy Blue
          </h2>
          <div id="burgundy-icy" className="scroll-mt-8" />

          <div className="flex gap-3 mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: "#800020" }} />
              Burgundy
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: "#A5D8E6" }} />
              Icy Blue
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Oxblood burgundy has been around, but pairing it with icy, almost frozen blue? That's the 2026 update. The contrast is striking — warm depth meets cold crispness. It feels expensive without trying.
          </p>

          <div className="bg-gray-50 p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">How to wear it</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>Burgundy knit + icy blue trousers</li>
              <li>Icy blue blouse under a burgundy blazer</li>
              <li>Burgundy bag as an accent to an all-blue outfit</li>
              <li>Universally flattering — works on all undertones</li>
            </ul>
          </div>

          {/* IMAGE NEEDED: color-combo-burgundy-icy.png — Outfit or moodboard showing burgundy + icy blue. Square. */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/color-combo-burgundy-icy.png`}
              alt="Burgundy and icy blue color combination — 2026 runway trend"
              className="w-full aspect-square object-cover"
            />
          </div>

          <p className="text-sm text-gray-400 mb-8">Wondering which of these combos work for your coloring? <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">Get your personal style guide</Link></p>

          {/* 3. Cobalt + White */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-4 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            3. Cobalt + White
          </h2>
          <div id="cobalt-white" className="scroll-mt-8" />

          <div className="flex gap-3 mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: "#0047AB" }} />
              Cobalt
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: "#FFFFFF" }} />
              White
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Cobalt is the undisputed color of 2026. Loewe, Victoria Beckham, and practically every major house featured it. Paired with crisp white, it's clean, bold, and the easiest trend on this list to actually wear.
          </p>

          <div className="bg-gray-50 p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">How to wear it</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>White tee + cobalt trousers (instant outfit)</li>
              <li>Cobalt blazer over all-white</li>
              <li>White dress + cobalt accessories</li>
              <li>Especially stunning on cool and neutral undertones — warm undertones can go for a slightly deeper cobalt</li>
            </ul>
          </div>

          {/* IMAGE NEEDED: color-combo-cobalt-white.png — Outfit or moodboard showing cobalt + white. Square. */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/color-combo-cobalt-white.png`}
              alt="Cobalt blue and white color combination — 2026's biggest pairing"
              className="w-full aspect-square object-cover"
            />
          </div>

          {/* Mid-article CTA */}
          <AnalysisCTA />

          {/* 4. Turquoise + Chocolate Brown */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-4 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            4. Turquoise + Chocolate Brown
          </h2>
          <div id="turquoise-chocolate" className="scroll-mt-8" />

          <div className="flex gap-3 mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: "#40E0D0" }} />
              Turquoise
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: "#3C1414" }} />
              Chocolate Brown
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Unexpected but undeniable. Tory Burch and Burberry led this one — turquoise as the new "it" color paired with rich, earthy chocolate. It shouldn't work but it absolutely does. Earthy meets bold in the best way.
          </p>

          <div className="bg-gray-50 p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">How to wear it</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>Turquoise top + chocolate brown leather pants or skirt</li>
              <li>Brown coat + turquoise scarf or bag</li>
              <li>Turquoise jewelry with an all-brown earthy outfit</li>
              <li>Amazing on warm and neutral undertones — gives cool-toned skin a fresh glow too</li>
            </ul>
          </div>

          {/* IMAGE NEEDED: color-combo-turquoise-chocolate.png — Outfit or moodboard showing turquoise + chocolate brown. Square. */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/color-combo-turquoise-chocolate.png`}
              alt="Turquoise and chocolate brown color combination — Tory Burch inspired"
              className="w-full aspect-square object-cover"
            />
          </div>

          {/* 5. Violet + Candy Red */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-4 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            5. Violet + Candy Red
          </h2>
          <div id="violet-candy" className="scroll-mt-8" />

          <div className="flex gap-3 mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: "#7F00FF" }} />
              Violet
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: "#E40046" }} />
              Candy Red
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The most controversial pairing on this list — and the most shared on fashion feeds. Violet and candy red clash in theory but create an electric, head-turning effect in practice. This is for when you want to be noticed.
          </p>

          <div className="bg-gray-50 p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">How to wear it</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>Start small — violet outfit + red bag or shoes</li>
              <li>Red top + violet skirt (commit to it)</li>
              <li>Violet nail polish + red lip (easiest entry point)</li>
              <li>Best on high-contrast coloring — if you have dark hair and fair skin, this is your moment</li>
            </ul>
          </div>

          {/* IMAGE NEEDED: color-combo-violet-candy.png — Outfit or moodboard showing violet + candy red. Square. */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/color-combo-violet-candy.png`}
              alt="Violet and candy red color combination — bold 2026 trend"
              className="w-full aspect-square object-cover"
            />
          </div>

          <p className="text-sm text-gray-400 mb-8">Not sure which trends suit your coloring? <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">Get your personal style guide — find out exactly what works on you</Link></p>

          {/* Bonus */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-4 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Bonus: Sage + Cloud White
          </h2>
          <div id="bonus" className="scroll-mt-8" />

          <div className="flex gap-3 mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: "#B2AC88" }} />
              Sage
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: "#F0EDE5" }} />
              Cloud White
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            If the other pairings feel too bold, this is your entry point. Cloud White (Pantone's 2026 Color of the Year) combined with sage is everywhere — calming, effortless, and flattering on practically everyone. It's the quiet confidence option.
          </p>

          <div className="bg-gray-50 p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">How to wear it</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>Sage linen trousers + white tee (summer uniform)</li>
              <li>White dress + sage blazer or cardigan</li>
              <li>All sage with white sneakers</li>
              <li>Universally flattering — especially beautiful on Soft Summer and Soft Autumn seasons</li>
            </ul>
          </div>

          {/* Summary */}
          <div className="bg-gray-50 p-8 my-12">
            <h3 className="font-semibold text-gray-900 mb-4">The Quick Reference</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#F4C2C2" }} />
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#9B111E" }} />
                </div>
                <span className="text-gray-700"><strong>Ballet Pink + Cherry Red</strong> — romantic, edgy, Chanel-approved</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#800020" }} />
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#A5D8E6" }} />
                </div>
                <span className="text-gray-700"><strong>Burgundy + Icy Blue</strong> — striking, expensive-looking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#0047AB" }} />
                  <span className="w-4 h-4 rounded-full border border-gray-200" style={{ backgroundColor: "#FFFFFF" }} />
                </div>
                <span className="text-gray-700"><strong>Cobalt + White</strong> — clean, bold, easiest to wear</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#40E0D0" }} />
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#3C1414" }} />
                </div>
                <span className="text-gray-700"><strong>Turquoise + Chocolate</strong> — unexpected, earthy meets bold</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#7F00FF" }} />
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#E40046" }} />
                </div>
                <span className="text-gray-700"><strong>Violet + Candy Red</strong> — controversial, electric, head-turning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#B2AC88" }} />
                  <span className="w-4 h-4 rounded-full border border-gray-200" style={{ backgroundColor: "#F0EDE5" }} />
                </div>
                <span className="text-gray-700"><strong>Sage + Cloud White</strong> — calm, effortless, universally flattering</span>
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
            <Link to="/what-season-am-i" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">What Season Am I?</h4>
              <p className="text-sm text-gray-600">Find your color season to know which trends work on you.</p>
            </Link>
            <Link to="/best-colors-for-pale-skin" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">Best Colors for Pale Skin</h4>
              <p className="text-sm text-gray-600">The complete guide to colors that flatter fair skin.</p>
            </Link>
            <Link to="/capsule-wardrobe" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">How to Build a Capsule Wardrobe</h4>
              <p className="text-sm text-gray-600">Build a versatile wardrobe with fewer, better pieces.</p>
            </Link>
            <Link to="/soft-summer-colors" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">Soft Summer Colors</h4>
              <p className="text-sm text-gray-600">The full palette for one of the most common seasons.</p>
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
              { q: "What is the biggest color trend for 2026?", a: "Cobalt blue is the standout color of 2026, featured across Loewe, Victoria Beckham, and most major fashion houses. Paired with crisp white, it's the easiest and most impactful trend to wear this year." },
              { q: "How do I know which color combinations suit me?", a: "It depends on your undertone and color season. Cool undertones tend to suit the pink/red and burgundy/blue pairings. Warm undertones look great in turquoise/chocolate. A personal color analysis can tell you exactly which trends work for your specific coloring." },
              { q: "Can you wear clashing colors in 2026?", a: "Yes — intentional color clashing is one of the defining trends of 2026. Pairings like violet + candy red are meant to look 'wrong' in a way that feels electric and modern. The key is committing to it with confidence." },
              { q: "What is Pantone's Color of the Year for 2026?", a: "Pantone's 2026 Color of the Year is Cloud Dancer — a warm, sophisticated off-white. It pairs beautifully with sage green, cobalt, and practically any other color as a neutral base." },
              { q: "How do I start wearing bolder colors?", a: "Start with accessories — a cobalt bag, a burgundy scarf, turquoise earrings. Once you're comfortable, try one bold piece (a colored trouser or blazer) with neutrals. The sage + cloud white combination is also a gentle entry point." },
              { q: "Do color trends work for all skin tones?", a: "Most of these trends can be adapted to any skin tone by adjusting the specific shade. For example, cobalt suits cool undertones perfectly, while warm undertones might prefer a slightly deeper royal blue. Knowing your color season makes it much easier to adapt trends." },
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

      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is the biggest color trend for 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Cobalt blue is the standout color of 2026, featured across Loewe, Victoria Beckham, and most major fashion houses. Paired with crisp white, it's the easiest and most impactful trend to wear this year." }},
          { "@type": "Question", "name": "How do I know which color combinations suit me?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on your undertone and color season. Cool undertones suit pink/red and burgundy/blue pairings. Warm undertones look great in turquoise/chocolate. A personal color analysis tells you exactly which trends work for you." }},
          { "@type": "Question", "name": "Can you wear clashing colors in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — intentional color clashing is one of the defining trends of 2026. Pairings like violet + candy red are meant to look 'wrong' in a way that feels electric and modern." }},
          { "@type": "Question", "name": "What is Pantone's Color of the Year for 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Pantone's 2026 Color of the Year is Cloud Dancer — a warm, sophisticated off-white that pairs with sage green, cobalt, and practically any color." }},
          { "@type": "Question", "name": "How do I start wearing bolder colors?", "acceptedAnswer": { "@type": "Answer", "text": "Start with accessories like a cobalt bag or burgundy scarf. Then try one bold piece with neutrals. Sage + cloud white is a gentle entry point." }},
          { "@type": "Question", "name": "Do color trends work for all skin tones?", "acceptedAnswer": { "@type": "Answer", "text": "Most trends can be adapted by adjusting the specific shade. Knowing your color season makes it much easier to adapt trends to your coloring." }},
        ]
      })}} />

      <div className="container mx-auto px-4 max-w-4xl">
        <AnalysisCTA />
      </div>
      <Footer />
    </div>
  );
};

export default ColorCombinations2026;
