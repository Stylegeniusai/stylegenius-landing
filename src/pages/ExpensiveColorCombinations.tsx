import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnalysisCTA from "../components/AnalysisCTA";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const ExpensiveColorCombinations = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="5 Color Combinations That Always Look Expensive (No Matter the Price Tag)"
        description="These 5 timeless color pairings instantly make any outfit look more expensive: navy + cream, black + ivory, burgundy + grey, and more. How to wear each one."
        keywords="color combinations that look expensive, expensive looking outfits, navy and cream outfit, black and ivory, burgundy and grey, elegant color pairings, how to look expensive, timeless outfit colors"
        canonicalUrl="/color-combinations-that-look-expensive"
        ogImage="/expensive-combos-hero.png"
        ogType="article"
        article={{
          publishedTime: "2026-03-31",
          modifiedTime: "2026-03-31",
          section: "Style Guide",
          tags: ["color combinations", "look expensive", "styling tips", "outfit ideas", "timeless style"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Style & Aesthetics", url: "/style" },
          { name: "Color Combinations That Look Expensive", url: "/color-combinations-that-look-expensive" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/style" className="text-sm uppercase tracking-wider text-gray-500 hover:text-black mb-6 inline-block">
              Style Guide
            </Link>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              5 Color Combinations That Always Look Expensive
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              You don't need designer labels to look expensive. You need the right colors together. These five pairings work every time.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      {/* IMAGE NEEDED: expensive-combos-hero.png — Editorial flatlay or outfit grid showing 2-3 of the combos (navy+cream, black+ivory). Luxe, minimal, clean. 16:9. */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={`${BLOG_IMAGE_BASE}/expensive-combos-hero.png`}
              alt="Color combinations that always look expensive — navy, cream, black, ivory"
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
            Some outfits just look more expensive than others — and it's rarely about the price tag. The secret? Color. Certain color combinations create an instant "expensive" effect because they're low-contrast, tonal, and let the fabric and fit do the talking.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            These are the five pairings that stylists, fashion editors, and quietly well-dressed women rely on year after year. No trends, no gimmicks — just combinations that always work.
          </p>

          {/* Table of Contents */}
          <nav className="bg-gray-50 p-6 md:p-8 mb-12">
            <p className="font-semibold text-gray-900 mb-4">The 5 combos:</p>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#navy-cream" className="hover:text-black underline">1. Navy + Cream</a></li>
              <li><a href="#black-ivory" className="hover:text-black underline">2. Black + Ivory</a></li>
              <li><a href="#burgundy-grey" className="hover:text-black underline">3. Burgundy + Grey</a></li>
              <li><a href="#chocolate-camel" className="hover:text-black underline">4. Chocolate Brown + Camel</a></li>
              <li><a href="#sage-cream" className="hover:text-black underline">5. Sage Green + Camel</a></li>
              <li><a href="#why" className="hover:text-black underline">Why these combos work</a></li>
              <li><a href="#faq" className="hover:text-black underline">FAQ</a></li>
            </ul>
          </nav>

          {/* Why it works — short primer */}
          <div className="bg-gray-50 p-8 mb-12">
            <h3 className="font-semibold text-gray-900 mb-3">The rule behind "expensive" colors</h3>
            <p className="text-gray-700 leading-relaxed">
              Expensive-looking outfits almost always share three things: <strong>muted tones</strong> (no neon, no bright primaries), <strong>low-to-medium contrast</strong> (the colors don't scream against each other), and <strong>tonal harmony</strong> (they feel like they belong together). That's why a $30 navy sweater with cream trousers looks more polished than a $200 bright red jacket with orange pants.
            </p>
          </div>

          {/* 1. Navy + Cream */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-4 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            1. Navy + Cream
          </h2>
          <div id="navy-cream" className="scroll-mt-8" />

          <div className="flex gap-3 mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: "#1B2951" }} />
              Navy
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: "#FFFDD0" }} />
              Cream
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The most reliable "expensive" combination in existence. Navy has the sophistication of black but with more warmth and depth. Cream softens it without washing it out. Together they create an effortlessly polished look that works from boardroom to brunch.
          </p>

          <div className="bg-gray-50 p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">How to wear it</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>Navy blazer + cream wide-leg trousers (the classic)</li>
              <li>Cream knit + navy tailored skirt</li>
              <li>Navy coat over all-cream outfit</li>
              <li>Gold accessories elevate this combo even further</li>
            </ul>
          </div>

          <div className="border-l-4 border-gray-300 pl-6 mb-6">
            <p className="text-gray-700"><strong>Why it looks expensive:</strong> Navy reads as intentional (not lazy like black), and cream reads as luxe (not basic like white). The contrast is gentle enough to feel cohesive but strong enough to create definition.</p>
          </div>

          {/* IMAGE NEEDED: expensive-navy-cream.png — Outfit collage: navy blazer + cream trousers, cream knit + navy skirt. Clean, editorial. Square 1:1. */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/expensive-navy-cream.png`}
              alt="Navy and cream outfit combinations — always looks expensive"
              className="w-full aspect-[9/16] object-cover"
            />
          </div>

          {/* 2. Black + Ivory */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-4 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            2. Black + Ivory
          </h2>
          <div id="black-ivory" className="scroll-mt-8" />

          <div className="flex gap-3 mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: "#000000" }} />
              Black
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: "#FFFFF0" }} />
              Ivory
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Not black and white — black and <em>ivory</em>. That one shade difference changes everything. Bright white against black is high-contrast and can look stark. Ivory softens the pairing into something that feels refined and considered rather than default.
          </p>

          <div className="bg-gray-50 p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">How to wear it</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>Black turtleneck + ivory silk skirt</li>
              <li>Ivory blouse tucked into black tailored trousers</li>
              <li>Black blazer over ivory slip dress</li>
              <li>Silver jewelry keeps it cool and sharp</li>
            </ul>
          </div>

          <div className="border-l-4 border-gray-300 pl-6 mb-6">
            <p className="text-gray-700"><strong>Why it looks expensive:</strong> Ivory signals that you chose it deliberately — it's not just "white." It says you understand undertones and care about the details. That attention to nuance is what makes an outfit look expensive.</p>
          </div>

          {/* IMAGE NEEDED: expensive-black-ivory.png — Outfit collage: black turtleneck + ivory skirt, ivory blouse + black trousers. Square 1:1. */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/expensive-black-ivory.png`}
              alt="Black and ivory outfit combinations — refined and elegant"
              className="w-full aspect-[9/16] object-cover"
            />
          </div>

          <p className="text-sm text-gray-400 mb-8">Want to know which of these combos work best for your coloring? <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">Get your personal style guide</Link></p>

          {/* 3. Burgundy + Grey */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-4 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            3. Burgundy + Grey
          </h2>
          <div id="burgundy-grey" className="scroll-mt-8" />

          <div className="flex gap-3 mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: "#800020" }} />
              Burgundy
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: "#9DA3A8" }} />
              Grey
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This one flies under the radar but it's incredibly effective. Burgundy is the most "expensive" color in fashion — it has the richness of red without the loudness. Paired with grey, it becomes moody, sophisticated, and completely timeless.
          </p>

          <div className="bg-gray-50 p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">How to wear it</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>Burgundy knit + grey wool trousers</li>
              <li>Grey coat + burgundy scarf and bag</li>
              <li>Burgundy leather jacket + grey tee + grey jeans</li>
              <li>Works in every season — lighter grey for summer, charcoal for winter</li>
            </ul>
          </div>

          <div className="border-l-4 border-gray-300 pl-6 mb-6">
            <p className="text-gray-700"><strong>Why it looks expensive:</strong> Burgundy is inherently luxurious — think wine, velvet, old money. Grey grounds it without competing. The combo is understated enough to feel effortless but distinctive enough to stand out.</p>
          </div>

          {/* IMAGE NEEDED: expensive-burgundy-grey.png — Outfit collage: burgundy knit + grey trousers, grey coat + burgundy accessories. Square 1:1. */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/expensive-burgundy-grey.png`}
              alt="Burgundy and grey outfit combinations — moody and sophisticated"
              className="w-full aspect-[9/16] object-cover"
            />
          </div>

          {/* Mid-article CTA */}
          <AnalysisCTA />

          {/* 4. Chocolate Brown + Camel */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-4 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            4. Chocolate Brown + Camel
          </h2>
          <div id="chocolate-camel" className="scroll-mt-8" />

          <div className="flex gap-3 mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: "#3C1414" }} />
              Chocolate
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: "#C19A6B" }} />
              Camel
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Tonal dressing at its best. Dark brown and camel are in the same color family but different enough to create depth and dimension. This is the combination you see on women in Milan — zero effort, maximum impact.
          </p>

          <div className="bg-gray-50 p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">How to wear it</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>Camel coat + chocolate brown everything underneath</li>
              <li>Chocolate turtleneck + camel wide-leg trousers</li>
              <li>Mix textures — wool, leather, suede, cashmere</li>
              <li>Gold jewelry and tan leather accessories complete it</li>
            </ul>
          </div>

          <div className="border-l-4 border-gray-300 pl-6 mb-6">
            <p className="text-gray-700"><strong>Why it looks expensive:</strong> Tonal outfits (same color family, different shades) always look more considered. It tells people you thought about your outfit without screaming "I tried hard." Plus, brown tones look rich in quality fabrics.</p>
          </div>

          {/* IMAGE NEEDED: expensive-chocolate-camel.png — Outfit collage: camel coat + chocolate pieces, tonal brown looks. Square 1:1. */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/expensive-chocolate-camel.png`}
              alt="Chocolate brown and camel outfit combinations — tonal dressing"
              className="w-full aspect-[9/16] object-cover"
            />
          </div>

          {/* 5. Sage Green + Camel */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-4 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            5. Sage Green + Camel
          </h2>
          <div id="sage-cream" className="scroll-mt-8" />

          <div className="flex gap-3 mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: "#B2AC88" }} />
              Sage Green
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: "#C19A6B" }} />
              Camel
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The earthy, natural pairing that's everywhere right now — but will still look good in ten years. Sage is muted enough to act as a neutral but interesting enough to add depth. Paired with camel, it's warm, grounded, and incredibly flattering.
          </p>

          <div className="bg-gray-50 p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">How to wear it</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>Sage knit + camel trousers or skirt</li>
              <li>Camel blazer + sage linen dress</li>
              <li>All sage with camel leather accessories</li>
              <li>Especially beautiful on warm and neutral undertones</li>
            </ul>
          </div>

          <div className="border-l-4 border-gray-300 pl-6 mb-6">
            <p className="text-gray-700"><strong>Why it looks expensive:</strong> Both colors are muted and earthy — they whisper instead of shout. The combination feels intentional and editorial, like you stepped out of a Scandinavian fashion editorial.</p>
          </div>

          {/* IMAGE NEEDED: expensive-sage-camel.png — Outfit collage: sage + camel combinations, earthy editorial. Square 1:1. */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/expensive-sage-camel.png`}
              alt="Sage green and camel outfit combinations — earthy and elegant"
              className="w-full aspect-[9/16] object-cover"
            />
          </div>

          <p className="text-sm text-gray-400 mb-8">Not sure which colors look most expensive on you specifically? <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">Get your personal style guide — includes your best colors, outfit ideas, and more</Link></p>

          {/* Why these work */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Why These Combinations Always Work
          </h2>
          <div id="why" className="scroll-mt-8" />

          <div className="space-y-6 mb-12">
            <div className="flex items-start">
              <span className="text-gray-400 mr-4 mt-1">01</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">They're low contrast</h4>
                <p className="text-gray-700">High-contrast combos (like red + green) grab attention but can look chaotic. These pairings are close enough in tone to feel calm and put-together.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-gray-400 mr-4 mt-1">02</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Muted beats bright</h4>
                <p className="text-gray-700">Bright, saturated colors can look cheap in the wrong fabric. Muted, toned-down shades are more forgiving and look premium even in affordable materials.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-gray-400 mr-4 mt-1">03</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">They let fit and fabric shine</h4>
                <p className="text-gray-700">When colors don't compete for attention, people notice the cut, the drape, the texture. That's what makes a $50 outfit look like $500.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-gray-400 mr-4 mt-1">04</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">They're season-proof</h4>
                <p className="text-gray-700">Trends come and go. Navy + cream worked in 1960 and it'll work in 2060. These combos are investments in your wardrobe knowledge.</p>
              </div>
            </div>
          </div>

          {/* Quick reference */}
          <div className="bg-gray-50 p-8 my-12">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Reference</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#1B2951" }} />
                  <span className="w-4 h-4 rounded-full border border-gray-200" style={{ backgroundColor: "#FFFDD0" }} />
                </div>
                <span className="text-gray-700"><strong>Navy + Cream</strong> — the most reliable, works everywhere</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#000000" }} />
                  <span className="w-4 h-4 rounded-full border border-gray-200" style={{ backgroundColor: "#FFFFF0" }} />
                </div>
                <span className="text-gray-700"><strong>Black + Ivory</strong> — timeless, refined, elevated B&W</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#800020" }} />
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#9DA3A8" }} />
                </div>
                <span className="text-gray-700"><strong>Burgundy + Grey</strong> — moody, understated, rich</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#3C1414" }} />
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#C19A6B" }} />
                </div>
                <span className="text-gray-700"><strong>Chocolate + Camel</strong> — tonal, effortless, Milanese</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#B2AC88" }} />
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#C19A6B" }} />
                </div>
                <span className="text-gray-700"><strong>Sage + Camel</strong> — earthy, warm, editorial</span>
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
            <Link to="/color-combinations-2026" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">Color Combinations Trending in 2026</h4>
              <p className="text-sm text-gray-600">The boldest color pairings from this year's runways.</p>
            </Link>
            <Link to="/what-season-am-i" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">What Season Am I?</h4>
              <p className="text-sm text-gray-600">Find your color season to know which combos flatter you most.</p>
            </Link>
            <Link to="/capsule-wardrobe" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">How to Build a Capsule Wardrobe</h4>
              <p className="text-sm text-gray-600">Use these color combos as the foundation for a versatile wardrobe.</p>
            </Link>
            <Link to="/quiet-luxury-style" className="block p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">Quiet Luxury Style Guide</h4>
              <p className="text-sm text-gray-600">The aesthetic built on exactly these kinds of color pairings.</p>
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
              { q: "What color combination looks most expensive?", a: "Navy and cream is consistently rated as the most expensive-looking color combination. It works across all occasions, seasons, and body types. The key is that navy reads as intentional (unlike default black) and cream reads as luxurious (unlike plain white)." },
              { q: "Why do some colors look cheap?", a: "Bright, saturated colors — especially neon, hot pink, and bright orange — can look cheap because they highlight imperfections in fabric quality. Muted, toned-down shades are more forgiving and look premium even in affordable materials." },
              { q: "Can I wear these combos if I have warm undertones?", a: "Absolutely. Navy + cream and chocolate + camel are especially flattering on warm undertones. Burgundy + grey works for everyone. If you know your color season, you can fine-tune the exact shades to match your coloring." },
              { q: "How do I make black look expensive?", a: "Pair it with ivory instead of bright white — the contrast is softer and more refined. Also: invest in good fabrics for black pieces (cheap black shows lint and fading fast), and keep black near your face only if it suits your contrast level." },
              { q: "Do these color combinations work for all skin tones?", a: "Yes — all five are universally flattering. The specific shades might vary slightly (deeper navy vs lighter navy, warm grey vs cool grey), but the pairings themselves work across all skin tones and undertones." },
              { q: "What accessories go with these combinations?", a: "Gold jewelry with warm combos (chocolate+camel, sage+camel). Silver with cool combos (black+ivory, burgundy+grey). Navy+cream works with both. Tan or cognac leather accessories elevate any of these pairings." },
              { q: "How do I find the exact colors that look expensive on me?", a: "A personal color analysis tells you your specific undertone and color season, which determines the exact shades of navy, cream, grey, and brown that work best on your skin. It takes the guesswork out completely." },
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
          { "@type": "Question", "name": "What color combination looks most expensive?", "acceptedAnswer": { "@type": "Answer", "text": "Navy and cream is consistently rated as the most expensive-looking color combination. It works across all occasions, seasons, and body types." }},
          { "@type": "Question", "name": "Why do some colors look cheap?", "acceptedAnswer": { "@type": "Answer", "text": "Bright, saturated colors — especially neon, hot pink, and bright orange — can look cheap because they highlight imperfections in fabric quality. Muted, toned-down shades are more forgiving." }},
          { "@type": "Question", "name": "Can I wear these combos if I have warm undertones?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Navy + cream and chocolate + camel are especially flattering on warm undertones. Burgundy + grey works for everyone." }},
          { "@type": "Question", "name": "How do I make black look expensive?", "acceptedAnswer": { "@type": "Answer", "text": "Pair it with ivory instead of bright white — the contrast is softer and more refined. Invest in good fabrics for black pieces." }},
          { "@type": "Question", "name": "Do these color combinations work for all skin tones?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — all five are universally flattering. The specific shades might vary slightly, but the pairings work across all skin tones." }},
          { "@type": "Question", "name": "What accessories go with these combinations?", "acceptedAnswer": { "@type": "Answer", "text": "Gold jewelry with warm combos (chocolate+camel, sage+camel). Silver with cool combos (black+ivory, burgundy+grey). Tan or cognac leather accessories elevate any of these." }},
          { "@type": "Question", "name": "How do I find the exact colors that look expensive on me?", "acceptedAnswer": { "@type": "Answer", "text": "A personal color analysis tells you your specific undertone and color season, which determines the exact shades that work best on your skin." }},
        ]
      })}} />

      <div className="container mx-auto px-4 max-w-4xl">
        <AnalysisCTA />
      </div>
      <Footer />
    </div>
  );
};

export default ExpensiveColorCombinations;
