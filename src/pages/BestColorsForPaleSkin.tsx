import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const BestColorsForPaleSkin = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Best Colors for Pale Skin: The Complete Guide (2026)"
        description="Discover which colors make pale skin glow and which to avoid. Expert tips for cool, warm, and neutral undertones - from jewel tones to the perfect red."
        keywords="best colors for pale skin, colors for fair skin, pale skin fashion, what colors suit pale skin, fair complexion colors, colors to avoid pale skin, jewel tones pale skin"
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

          {/* Understanding Undertones */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            First: Know Your Undertone
          </h2>
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

          {/* Cool Undertones */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-12">Cool Undertones</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            If you have cool undertones, you'll look best in colors with blue or pink bases. These create harmony with the natural coolness in your skin.
          </p>
          <div className="bg-gray-50 p-6 mb-6">
            <p className="font-medium text-gray-900 mb-3">Your best colors:</p>
            <div className="flex flex-wrap gap-2">
              {["Navy blue", "Emerald green", "Deep purple", "Berry", "Ruby red", "Soft pink", "Icy blue", "Lavender", "Cool gray", "True white"].map((color) => (
                <span key={color} className="px-3 py-1 bg-white border border-gray-200 text-sm text-gray-700">{color}</span>
              ))}
            </div>
          </div>
          <p className="text-gray-600 mb-8">
            <strong>Skip:</strong> Orange, mustard yellow, warm browns, coral, peach, and anything with golden undertones.
          </p>

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
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-12">Warm Undertones</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Warm undertones pair beautifully with colors that have yellow, orange, or golden bases. These enhance the natural warmth in your complexion.
          </p>
          <div className="bg-gray-50 p-6 mb-6">
            <p className="font-medium text-gray-900 mb-3">Your best colors:</p>
            <div className="flex flex-wrap gap-2">
              {["Coral", "Peach", "Warm red", "Mustard", "Olive green", "Cream", "Turquoise", "Camel", "Warm brown", "Ivory"].map((color) => (
                <span key={color} className="px-3 py-1 bg-white border border-gray-200 text-sm text-gray-700">{color}</span>
              ))}
            </div>
          </div>
          <p className="text-gray-600 mb-8">
            <strong>Skip:</strong> Black (too harsh), icy pink, powder blue, cool gray, and silver-toned colors.
          </p>

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
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-12">Neutral Undertones</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Lucky you - neutral undertones mean you can wear both warm and cool colors. Focus on mid-tone shades that aren't too extreme in either direction.
          </p>
          <div className="bg-gray-50 p-6 mb-6">
            <p className="font-medium text-gray-900 mb-3">Your best colors:</p>
            <div className="flex flex-wrap gap-2">
              {["Soft white", "Blush pink", "Sage green", "Dusty blue", "Mauve", "Taupe", "Soft navy", "Rose", "Jade", "Dusty rose"].map((color) => (
                <span key={color} className="px-3 py-1 bg-white border border-gray-200 text-sm text-gray-700">{color}</span>
              ))}
            </div>
          </div>
          <p className="text-gray-600 mb-8">
            <strong>Skip:</strong> Neon colors and very harsh contrasts. Stick to softer, muted versions of most colors.
          </p>

          {/* Universal Best Colors */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Universal Winners: Colors That Work for Most Pale Skin
          </h2>

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

          {/* Styling Tips */}
          <h2
            className="text-3xl font-semibold text-gray-900 mb-6 mt-16"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Styling Tips for Pale Skin
          </h2>

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
          </div>

        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BestColorsForPaleSkin;
