import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const ThreeThreeThreeRuleFashion = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="What is the 3-3-3 Rule for Fashion? The Complete Guide"
        description="Learn the 3-3-3 rule for fashion: how to create 27 outfits from just 9 pieces. A simple formula for building a mini capsule wardrobe that actually works."
        keywords="3-3-3 rule fashion, 333 rule outfits, capsule wardrobe formula, minimalist wardrobe, outfit formula, 3 3 3 method, project 333, wardrobe rules"
        canonicalUrl="/333-rule-fashion"
        ogImage="/333-rule-hero.png"
        ogType="article"
        article={{
          publishedTime: "2026-01-16",
          modifiedTime: "2026-01-16",
          section: "Style Guide",
          tags: ["capsule wardrobe", "outfit formula", "minimalist fashion", "wardrobe tips", "3-3-3 rule"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "3-3-3 Rule Fashion", url: "/333-rule-fashion" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #fff 0%, #f9fafb 100%)' }}>
        <div className="absolute top-[-100px] right-[5%] w-[400px] h-[400px] rounded-full pointer-events-none z-0" style={{ background: 'rgba(255,112,217,0.2)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-[-50px] left-[10%] w-[300px] h-[300px] rounded-full pointer-events-none z-0" style={{ background: 'rgba(110,193,228,0.2)', filter: 'blur(60px)' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(255,112,217,0.15)', color: '#FF70D9' }}>Style Guide</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              What is the{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                3-3-3 Rule
              </span>
              {" "}for Fashion?
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              How to create 27 outfits from just 9 pieces. The minimalist wardrobe formula that's all over TikTok.
            </p>
          </div>

          {/* HERO IMAGE */}
          {/*
            IMAGE 1: 333-rule-hero.png
            GEMINI PROMPT: "Aesthetic flat lay photograph of 9 clothing items arranged in a 3x3 grid on white marble background. Top row: white button-down shirt, black turtleneck, beige knit sweater. Middle row: blue jeans, black trousers, tan midi skirt. Bottom row: white sneakers, black ankle boots, nude ballet flats. Soft natural lighting, fashion editorial style, clean minimal composition, high-end fashion photography"
          */}
          <div className="max-w-5xl mx-auto mt-8">
            <div className="rounded-xl shadow-2xl overflow-hidden border border-gray-200">
              <img
                src={`${BLOG_IMAGE_BASE}/333-rule-hero.png`}
                alt="3-3-3 Rule Fashion - 9 pieces arranged in grid"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Quick Answer */}
          <div className="rounded-2xl p-8 mb-8" style={{ background: 'linear-gradient(135deg, rgba(255,112,217,0.08) 0%, rgba(110,193,228,0.08) 100%)' }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">&#9889;</span>
              <h3 className="font-bold text-gray-900">Quick Answer</h3>
            </div>
            <p className="text-gray-700 mb-4">
              The <strong>3-3-3 rule</strong> is a minimalist outfit formula: pick <strong>3 tops</strong>, <strong>3 bottoms</strong>, and <strong>3 pairs of shoes</strong>. Mix and match these 9 pieces to create up to <strong>27 different outfits</strong>.
            </p>
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <p className="text-center text-lg font-medium text-gray-800">
                3 tops × 3 bottoms × 3 shoes = <span style={{ color: '#FF70D9' }}>27 outfit combinations</span>
              </p>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">In this article</p>
            <div className="grid md:grid-cols-2 gap-2">
              <a href="#what-is-it" className="text-gray-700 hover:text-pink-500 flex items-center gap-2">
                <span style={{ color: '#FF70D9' }}>&#8594;</span> What is the 3-3-3 rule?
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-pink-500 flex items-center gap-2">
                <span style={{ color: '#FF70D9' }}>&#8594;</span> How the math works
              </a>
              <a href="#choosing-pieces" className="text-gray-700 hover:text-pink-500 flex items-center gap-2">
                <span style={{ color: '#FF70D9' }}>&#8594;</span> How to choose your 9 pieces
              </a>
              <a href="#examples" className="text-gray-700 hover:text-pink-500 flex items-center gap-2">
                <span style={{ color: '#FF70D9' }}>&#8594;</span> 3-3-3 examples
              </a>
              <a href="#project-333" className="text-gray-700 hover:text-pink-500 flex items-center gap-2">
                <span style={{ color: '#FF70D9' }}>&#8594;</span> Project 333 (the original)
              </a>
              <a href="#faq" className="text-gray-700 hover:text-pink-500 flex items-center gap-2">
                <span style={{ color: '#FF70D9' }}>&#8594;</span> FAQ
              </a>
            </div>
          </div>

          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You've probably seen it on TikTok: someone pulls out 9 items from their closet and suddenly has outfits for weeks. That's the 3-3-3 rule in action.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              It's not new – minimalist wardrobe concepts have been around for years – but this specific formula has gone viral because it's <strong>simple enough to actually use</strong>. No complicated systems, no spreadsheets, just 9 pieces that work together.
            </p>
          </div>

          {/* What Is It */}
          <section className="mb-16" id="what-is-it">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is the 3-3-3 Rule?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The 3-3-3 rule is a micro-capsule wardrobe formula. You select:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">&#128085;</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3 Tops</h3>
                <p className="text-gray-600 text-sm">Shirts, blouses, t-shirts, sweaters</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">&#128086;</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3 Bottoms</h3>
                <p className="text-gray-600 text-sm">Jeans, trousers, skirts, shorts</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">&#128095;</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3 Shoes</h3>
                <p className="text-gray-600 text-sm">Sneakers, boots, flats, heels</p>
              </div>
            </div>

            {/* IMAGE 2: 333-rule-concept.PNG */}
            {/*
              GEMINI PROMPT: "Minimalist infographic showing the 3-3-3 rule for fashion. Clean white background with three columns. Left column shows 3 illustrated tops (white shirt, striped top, gray sweater). Middle column shows 3 bottoms (blue jeans, black pants, beige skirt). Right column shows 3 shoes (white sneakers, black boots, nude flats). Arrows connecting them showing combinations. Soft pastel pink and blue accent colors. Modern clean design style"
            */}
            <div className="my-8 rounded-xl overflow-hidden border border-gray-200">
              <img
                src={`${BLOG_IMAGE_BASE}/333-rule-concept.PNG`}
                alt="3-3-3 rule visual showing tops, bottoms, and shoes"
                className="w-full"
              />
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The key is that <strong>every piece works with every other piece</strong>. Any top can be worn with any bottom and any shoe. That's what creates the outfit multiplication effect.
            </p>

            <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(255,112,217,0.08) 0%, rgba(110,193,228,0.08) 100%)', borderLeft: '4px solid #FF70D9' }}>
              <p className="text-gray-800 font-medium">
                The formula was popularized by TikTok creator Rachel Spencer (@rachspeed), though similar concepts like Project 333 have existed since 2010.
              </p>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16" id="how-it-works">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How the Math Works</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              It's simple multiplication. If every piece is interchangeable:
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  3 tops × 3 bottoms × 3 shoes = <span style={{ color: '#FF70D9' }}>27 combinations</span>
                </p>
                <p className="text-gray-600">
                  That's nearly a month of outfits from 9 items.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Add accessories – a few scarves, jewelry, or jackets – and you stretch those 27 outfits even further:
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Formula</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Items</th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: '#FF70D9' }}>Outfits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 text-gray-700">3-3-3 (basic)</td>
                    <td className="px-4 py-3 text-gray-700">9 pieces</td>
                    <td className="px-4 py-3 font-semibold" style={{ color: '#FF70D9' }}>27 outfits</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">3-3-3 + 2 jackets</td>
                    <td className="px-4 py-3 text-gray-700">11 pieces</td>
                    <td className="px-4 py-3 font-semibold" style={{ color: '#FF70D9' }}>81 outfits</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">4-4-4</td>
                    <td className="px-4 py-3 text-gray-700">12 pieces</td>
                    <td className="px-4 py-3 font-semibold" style={{ color: '#FF70D9' }}>64 outfits</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Choosing Pieces */}
          <section className="mb-16" id="choosing-pieces">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Choose Your 9 Pieces</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The formula only works if the pieces actually go together. Here's how to pick items that mix and match:
            </p>

            {/* IMAGE 4: 333-color-palette.png */}
            {/*
              GEMINI PROMPT: "Elegant color palette board for capsule wardrobe. Shows 5 color swatches arranged horizontally: black, white, navy blue, camel/tan, and soft pink. Below each swatch are small illustrations of clothing items in that color. Clean minimal design, fashion mood board aesthetic, soft shadows, white background. Text label 'Capsule Color Palette' at top"
            */}
            <div className="my-8 rounded-xl overflow-hidden border border-gray-200">
              <img
                src={`${BLOG_IMAGE_BASE}/333-color-palette.png`}
                alt="Color palette for 3-3-3 capsule wardrobe"
                className="w-full"
              />
            </div>

            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Stick to a color palette</h3>
                <p className="text-gray-700">
                  Choose 3-4 colors that work together. A classic approach: <strong>2 neutrals</strong> (black, white, navy, beige) + <strong>1-2 accent colors</strong>. This ensures any top can pair with any bottom without clashing.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Mix casual and dressy</h3>
                <p className="text-gray-700">
                  Include pieces at different formality levels. Example: 1 casual top (t-shirt), 1 smart casual (blouse), 1 dressy (nice sweater). Same for shoes. This gives you options for different occasions.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Prioritize versatility</h3>
                <p className="text-gray-700">
                  Before including a piece, ask: <strong>"Can I wear this with everything else?"</strong> If a top only works with one of your bottoms, it breaks the formula.
                </p>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section className="mb-16" id="examples">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">3-3-3 Examples</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Here are starter combinations for different styles:
            </p>

            {/* IMAGE 5: 333-casual-concept.png */}
            {/*
              GEMINI PROMPT: "Aesthetic flat lay of casual 3-3-3 capsule wardrobe on light wood floor. 9 items arranged neatly: white basic t-shirt, striped breton top, light blue denim shirt, classic blue jeans, black skinny jeans, khaki chinos, white leather sneakers, tan loafers, black ankle boots. Soft natural daylight, minimal styling, fashion blog photography"
            */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-6">
              <img
                src={`${BLOG_IMAGE_BASE}/333-casual-concept.png`}
                alt="Casual 3-3-3 capsule wardrobe example"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Casual Everyday</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Tops</p>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• White t-shirt</li>
                      <li>• Striped breton top</li>
                      <li>• Denim shirt</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Bottoms</p>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Blue jeans</li>
                      <li>• Black jeans</li>
                      <li>• Khaki chinos</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Shoes</p>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• White sneakers</li>
                      <li>• Loafers</li>
                      <li>• Ankle boots</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* IMAGE 6: 333-work-example.png */}
            {/*
              GEMINI PROMPT: "Professional flat lay of smart casual work 3-3-3 capsule wardrobe on white marble surface. 9 elegant items: crisp white button-down shirt, navy silk blouse, cream cashmere sweater, black tailored trousers, navy pencil skirt, tan wide-leg pants, black pointed pumps, nude ballet flats, brown leather loafers. Sophisticated minimal styling, soft shadows, fashion editorial photography"
            */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-6">
              <img
                src={`${BLOG_IMAGE_BASE}/333-work-example.png`}
                alt="Work/smart casual 3-3-3 capsule wardrobe example"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Office / Smart Casual</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Tops</p>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• White button-down</li>
                      <li>• Navy blouse</li>
                      <li>• Cream knit sweater</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Bottoms</p>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Black trousers</li>
                      <li>• Navy midi skirt</li>
                      <li>• Tan wide-leg pants</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Shoes</p>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Black pumps</li>
                      <li>• Nude flats</li>
                      <li>• Leather loafers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(255,112,217,0.08) 0%, rgba(110,193,228,0.08) 100%)', borderLeft: '4px solid #FF70D9' }}>
              <p className="text-gray-800 font-medium">
                <strong>Pro tip:</strong> The 3-3-3 rule is perfect for packing. Plan your 9 pieces before a trip and you'll have outfits for a week without overpacking. Use a <Link to="/best-wishlist-apps" className="underline" style={{ color: '#FF70D9' }}>fashion wishlist app</Link> to save and organize your capsule pieces before buying.
              </p>
            </div>
          </section>

          {/* Project 333 */}
          <section className="mb-16" id="project-333">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Project 333: The Original</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              There's a related but different concept: <strong>Project 333</strong>, created by Courtney Carver in 2010.
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <p className="text-lg text-gray-700">
                Project 333 challenges you to dress with only <strong>33 items for 3 months</strong>. This includes clothing, accessories, jewelry, outerwear, and shoes – but excludes underwear, sleepwear, and workout clothes.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Aspect</th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: '#FF70D9' }}>3-3-3 Rule</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Project 333</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Items</td>
                    <td className="px-4 py-3" style={{ color: '#FF70D9' }}>9 pieces</td>
                    <td className="px-4 py-3 text-gray-700">33 pieces</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Duration</td>
                    <td className="px-4 py-3" style={{ color: '#FF70D9' }}>Any time / trip</td>
                    <td className="px-4 py-3 text-gray-700">3 months</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Best for</td>
                    <td className="px-4 py-3" style={{ color: '#FF70D9' }}>Quick planning, packing</td>
                    <td className="px-4 py-3 text-gray-700">Full wardrobe minimalism</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Why It Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why It Works</h2>

            {/* IMAGE 7: 333-closet-before-after.png */}
            {/*
              GEMINI PROMPT: "Split image showing wardrobe transformation. Left side: cluttered messy closet overflowing with clothes, chaotic hangers, stressful feeling. Right side: minimal organized closet with just 9 carefully selected pieces hanging neatly, calm zen aesthetic, lots of white space. Clean photography style, soft lighting, before/after comparison"
            */}
            <div className="my-8 rounded-xl overflow-hidden border border-gray-200">
              <img
                src={`${BLOG_IMAGE_BASE}/333-closet-before-after.png`}
                alt="Closet before and after using 3-3-3 rule"
                className="w-full"
              />
              <p className="text-center text-gray-500 text-sm py-3 bg-gray-50">Less choices = less stress</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The 3-3-3 rule isn't about depriving yourself. It's about <strong>reducing decision fatigue</strong>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Studies show that having too many choices makes us less happy with our decisions. When you open a closet with 100 items, choosing what to wear becomes stressful. With 9 pieces that all work together, getting dressed takes 30 seconds.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Everything in your closet fits well and looks good together. No more standing in front of the mirror second-guessing.
            </p>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 pt-12 border-t border-gray-200" id="faq">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="pb-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">What is the 3-3-3 rule for fashion?</h3>
                <p className="text-gray-600">
                  The 3-3-3 rule is a minimalist wardrobe formula where you choose 3 tops, 3 bottoms, and 3 pairs of shoes that all mix and match. This creates up to 27 different outfit combinations from just 9 pieces.
                </p>
              </div>

              <div className="pb-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Is the 3-3-3 rule the same as Project 333?</h3>
                <p className="text-gray-600">
                  No, they're related but different. The 3-3-3 rule uses 9 pieces (3 tops, 3 bottoms, 3 shoes). Project 333 is a bigger challenge: 33 total items including accessories for 3 months.
                </p>
              </div>

              <div className="pb-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Do accessories count in the 3-3-3 rule?</h3>
                <p className="text-gray-600">
                  No, accessories aren't counted. The 9 pieces are just tops, bottoms, and shoes. You can add scarves, jewelry, bags, and jackets to create even more outfit variations.
                </p>
              </div>

              <div className="pb-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">How do I choose the right 9 pieces?</h3>
                <p className="text-gray-600">
                  Stick to a cohesive color palette (2-3 neutrals + 1 accent color), mix casual and dressy pieces, and make sure every item works with every other item.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Is the 3-3-3 rule good for travel?</h3>
                <p className="text-gray-600">
                  Yes, it's perfect for packing. Plan your 3 tops, 3 bottoms, and 3 shoes before a trip and you'll have enough outfits for a week without overpacking.
                </p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/best-wishlist-apps" className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-pink-300 transition-all">
                <h3 className="font-semibold text-gray-900 mb-2">Best Wishlist Apps for Fashion in 2025</h3>
                <p className="text-gray-600 text-sm">Save items, track prices, and plan outfits with these top apps.</p>
              </Link>
              <Link to="/carted-alternative" className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-pink-300 transition-all">
                <h3 className="font-semibold text-gray-900 mb-2">Carted Shut Down: Best Alternatives</h3>
                <p className="text-gray-600 text-sm">Where to save your wishlists now that Carted is gone.</p>
              </Link>
            </div>
          </section>

        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ThreeThreeThreeRuleFashion;
