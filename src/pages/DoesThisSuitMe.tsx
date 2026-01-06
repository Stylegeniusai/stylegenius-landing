import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { getAppStoreUrl, getDownloadButtonText } from "../utils/deviceDetection";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const DoesThisSuitMe = () => {
  const [appStoreUrl, setAppStoreUrl] = useState('');
  const [buttonText, setButtonText] = useState('Download App');

  useEffect(() => {
    setAppStoreUrl(getAppStoreUrl());
    setButtonText(getDownloadButtonText());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Does This Suit Me? AI Style Matching for Body Type & Skin Tone 2026"
        description="Learn how AI style matching tells you if clothes will flatter your body type and skin tone BEFORE you buy. The complete guide to personalized fashion recommendations."
        keywords="does this suit me, style matching, body type matching, skin tone matching, AI fashion, will this look good on me, clothes for my body type, flattering clothes, personalized fashion 2026"
        canonicalUrl="/does-this-suit-me"
        ogImage="/style-match-hero.png"
        ogType="article"
        article={{
          publishedTime: "2026-01-06",
          modifiedTime: "2026-01-06",
          section: "Technology",
          tags: ["style matching", "body type", "skin tone", "AI fashion", "personalized styling"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Does This Suit Me?", url: "/does-this-suit-me" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-amber-200 text-amber-800 rounded-full text-sm font-medium mb-6">AI Style Matching</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Does This Suit Me?{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(45deg, #F59E0B, #F43F5E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                AI Knows the Answer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The question we've all asked ourselves a thousand times while shopping. Now AI can actually answer it – before you buy.
            </p>
          </div>
          <div className="max-w-3xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/style-match-hero.png`}
              alt="AI style matching showing personalized fashion recommendations"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              "Does this suit me?" It's the eternal shopping question. You're staring at a gorgeous dress online, imagining yourself in it, trying to picture how it would look... but there's always that nagging doubt. Will it actually flatter you? Or will it be another "looked better on the model" disappointment?
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Here's the thing: <strong>whether something "suits you" isn't random.</strong> It's based on actual, measurable factors – your body proportions, your coloring, the specific cut and color of the garment. And guess what? AI can analyze all of that.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Welcome to the era of AI style matching. Let's break down exactly how it works and why it's about to change how you shop forever.
            </p>
          </div>

          {/* What Makes Something "Suit" You */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Actually Makes Something "Suit" You?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When we say something "suits" someone, we're talking about how well a garment harmonizes with their natural features. This isn't mystical – it's actually pretty scientific:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-amber-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🎨 Color Harmony</h3>
                <p className="text-gray-700 mb-3">
                  Colors interact with your skin tone. The right colors make your skin look radiant and healthy. The wrong ones can make you look tired, washed out, or sallow.
                </p>
                <p className="text-gray-600 text-sm">
                  This is why <Link to="/what-season-am-i" className="text-amber-600 hover:underline">knowing your color season</Link> matters so much.
                </p>
              </div>

              <div className="bg-orange-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">📐 Proportion Balance</h3>
                <p className="text-gray-700 mb-3">
                  Different cuts and silhouettes emphasize different parts of your body. The right proportions create visual harmony; the wrong ones can throw your whole look off.
                </p>
                <p className="text-gray-600 text-sm">
                  This is the core of <Link to="/kibbe-body-types" className="text-orange-600 hover:underline">body type styling</Link>.
                </p>
              </div>

              <div className="bg-rose-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">✂️ Cut & Fit</h3>
                <p className="text-gray-700 mb-3">
                  Where a garment hits your body matters – where the hem falls, where the waist sits, how the shoulders align. These small details make huge differences.
                </p>
                <p className="text-gray-600 text-sm">
                  A-line vs bodycon, high-waist vs low-rise – each flatters different shapes.
                </p>
              </div>

              <div className="bg-pink-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🔲 Pattern & Scale</h3>
                <p className="text-gray-700 mb-3">
                  Pattern sizes should relate to your body size. Large prints on small frames can overwhelm; tiny prints on larger frames can look busy.
                </p>
                <p className="text-gray-600 text-sm">
                  Bold stripes, delicate florals, color blocking – all suit different body types differently.
                </p>
              </div>
            </div>
          </section>

          {/* How AI Style Matching Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How AI Style Matching Actually Works</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This is where it gets cool. AI style matching takes all those factors above and analyzes them automatically. Here's the process:
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-rose-50 rounded-2xl p-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-amber-800">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Your Profile is Created</h3>
                    <p className="text-gray-700">
                      Either through a photo upload or a quick quiz, AI determines your body type (hourglass, pear, rectangle, etc.) and your coloring (skin tone, undertone, contrast level). This creates your unique style profile.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-orange-800">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Garment is Analyzed</h3>
                    <p className="text-gray-700">
                      When you look at a piece of clothing, AI identifies its key characteristics: the silhouette, the neckline, the waist placement, the length, the colors, the pattern scale. All the styling-relevant details.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-rose-800">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Match Score is Calculated</h3>
                    <p className="text-gray-700">
                      AI compares your profile to the garment's characteristics. It checks: Does this color suit their skin tone? Does this cut flatter their body shape? Does this proportion work for their height?
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-pink-800">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">You Get Clear Feedback</h3>
                    <p className="text-gray-700">
                      Not just "yes" or "no" – you get specific insights. "This color complements your warm undertones." "The A-line cut will balance your proportions." "The high waist will elongate your legs."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Body Type Match Image */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/body-type-match-result.png`}
              alt="AI body type matching results showing style recommendations"
              className="w-full rounded-2xl shadow-lg"
            />
            <p className="text-center text-gray-500 mt-3 text-sm">AI analyzing body type and showing personalized style match</p>
          </div>

          {/* Body Type Matching Deep Dive */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Body Type Matching: The Shape Factor</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Your body shape isn't about size – it's about proportions. Two people can be the same size but completely different shapes, and they'll look best in totally different styles.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What AI Looks At:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-1">•</span>
                      <span>Shoulder to hip ratio</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-1">•</span>
                      <span>Waist definition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-1">•</span>
                      <span>Torso to leg proportion</span>
                    </li>
                  </ul>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-1">•</span>
                      <span>Bust to hip balance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-1">•</span>
                      <span>Overall vertical line</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-1">•</span>
                      <span>Body frame (bone structure)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What AI Recommends Based On This:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">For balanced proportions (hourglass):</p>
                    <p className="text-gray-600 text-sm">Fitted styles that follow your curves, defined waists, balanced proportions top and bottom.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">For bottom-heavy proportions (pear):</p>
                    <p className="text-gray-600 text-sm">Statement tops, A-line skirts, darker bottoms, structured shoulders.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">For straight proportions (rectangle):</p>
                    <p className="text-gray-600 text-sm">Waist definition, peplums, belted styles, layering for dimension.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">For top-heavy proportions (inverted triangle):</p>
                    <p className="text-gray-600 text-sm">V-necks, wide-leg pants, A-line skirts, simple tops with interesting bottoms.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700">
              Want to know your body type? Check out our <Link to="/kibbe-body-types" className="text-amber-600 hover:underline">complete Kibbe body types guide</Link> or body-specific guides for <Link to="/hourglass-body-type" className="text-amber-600 hover:underline">hourglass</Link>, <Link to="/pear-body-shape" className="text-amber-600 hover:underline">pear</Link>, <Link to="/rectangle-body-type" className="text-amber-600 hover:underline">rectangle</Link>, and <Link to="/inverted-triangle-body" className="text-amber-600 hover:underline">inverted triangle</Link> shapes.
            </p>
          </section>

          {/* Skin Tone Match Image */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/skintone-match-result.png`}
              alt="AI skin tone matching showing color recommendations"
              className="w-full rounded-2xl shadow-lg"
            />
            <p className="text-center text-gray-500 mt-3 text-sm">AI analyzing skin tone for personalized color matching</p>
          </div>

          {/* Skin Tone Matching Deep Dive */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Skin Tone Matching: The Color Factor</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Color matching might be even more impactful than body type matching. The right colors near your face can make you look radiant, healthy, and vibrant. The wrong colors? Tired, sallow, or washed out.
            </p>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What AI Analyzes:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Undertone</h4>
                  <p className="text-gray-600 text-sm">
                    Warm (golden/yellow), cool (pink/blue), or neutral. This determines whether warm or cool colors suit you better.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Depth</h4>
                  <p className="text-gray-600 text-sm">
                    How light or dark your coloring is. This affects whether you look better in light, medium, or deep colors.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contrast</h4>
                  <p className="text-gray-600 text-sm">
                    The difference between your lightest and darkest features. High contrast = bold color combos. Low contrast = tonal dressing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why This Matters So Much</h3>
              <p className="text-gray-700 mb-4">
                Think about the last time you wore something and got tons of compliments – "You look so good in that color!" That wasn't random. That color was harmonizing with your natural coloring.
              </p>
              <p className="text-gray-700">
                AI can identify this systematically for every item you consider buying. No more guessing, no more "I thought this would look good" disappointments.
              </p>
            </div>

            <p className="text-lg text-gray-700">
              Curious about your color season? Start with our <Link to="/what-season-am-i" className="text-amber-600 hover:underline">color season guide</Link> or explore specific palettes like <Link to="/soft-autumn-colors" className="text-amber-600 hover:underline">Soft Autumn</Link>, <Link to="/dark-winter-colors" className="text-amber-600 hover:underline">Dark Winter</Link>, or <Link to="/bright-spring-colors" className="text-amber-600 hover:underline">Bright Spring</Link>.
            </p>
          </section>

          {/* How StyleGenius Style Matching Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How StyleGenius Answers "Does This Suit Me?"</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              StyleGenius doesn't just give you a generic "yes" or "no" – it gives you detailed, personalized analysis for every single item you look at. Here's what you get:
            </p>

            <div className="bg-gradient-to-r from-amber-100 to-rose-100 rounded-2xl p-8 mb-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">🎨 Skin Tone Match</h3>
                  <p className="text-gray-700">
                    StyleGenius analyzes the color against YOUR skin tone. Not generic advice – actual analysis of whether THIS shade will make you look radiant or washed out. You'll see exactly how well the color complements your complexion.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">📐 Body Type Match</h3>
                  <p className="text-gray-700">
                    The cut, silhouette, and proportions get analyzed against YOUR body type. Will this neckline flatter you? Does this waist placement work for your proportions? StyleGenius tells you.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">💡 Styling Tips</h3>
                  <p className="text-gray-700">
                    It's not just "this works" – you get tips on HOW to wear it. Tuck or untuck? What shoes work best? How to make it flatter your shape even more.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">👗 Outfit Ideas</h3>
                  <p className="text-gray-700">
                    Every analysis includes outfit suggestions. See how to style the piece, what to pair it with, complete look ideas that work for YOUR coloring and shape.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-8">
              <img
                src={`${BLOG_IMAGE_BASE}/stylegenius-match-analysis.png`}
                alt="StyleGenius showing detailed style match analysis for an item"
                className="w-full rounded-2xl shadow-lg"
              />
              <p className="text-center text-gray-500 mt-3 text-sm">StyleGenius style match – skin tone, body type, and styling tips for every item</p>
            </div>
          </section>

          {/* Real World Application */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Using Style Matching While You Shop</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The real magic happens when you use style matching as you browse. Here's how it works in practice:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                <div>
                  <h4 className="font-semibold text-gray-900">You browse normally</h4>
                  <p className="text-gray-600">Shop any online store like you usually would</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                <div>
                  <h4 className="font-semibold text-gray-900">AI analyzes each item</h4>
                  <p className="text-gray-600">The tool checks if the piece suits your profile as you look at it</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                <div>
                  <h4 className="font-semibold text-gray-900">You see a match score</h4>
                  <p className="text-gray-600">"Great for your body type" or "This color might wash you out"</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Combine with virtual try-on</h4>
                  <p className="text-gray-600">If it's a good match, <Link to="/online-dressing-room" className="text-amber-600 hover:underline">see it on yourself</Link> to confirm</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Buy with confidence</h4>
                  <p className="text-gray-600">No more hoping – you know it'll work for you</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why This Beats "Intuition" */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why AI Beats "I'll Know It When I See It"</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Problem with Intuition</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span>We're influenced by trends (even when they don't suit us)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span>Store lighting and styling tricks deceive us</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span>Models make everything look good</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span>We can't objectively assess ourselves</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span>Wishful thinking overrides logic</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why AI Works Better</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Purely objective – no emotional attachment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Trained on millions of data points</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Compares to YOUR specific features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>No bad lighting or camera tricks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Consistent and reliable every time</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              This doesn't mean you should ignore your preferences! AI style matching is a tool to inform your choices, not replace your taste. If you love something and it's not a "perfect match," maybe you wear it anyway. But now you're making an informed choice, not a blind guess.
            </p>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Dive Deeper</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/what-season-am-i" className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">What Season Am I?</h3>
                <p className="text-gray-600 text-sm">Find your color season for perfect color matching.</p>
              </Link>
              <Link to="/kibbe-body-types" className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Kibbe Body Types</h3>
                <p className="text-gray-600 text-sm">The complete guide to body type styling.</p>
              </Link>
              <Link to="/ai-fashion-shopping" className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">AI Fashion Shopping</h3>
                <p className="text-gray-600 text-sm">The bigger picture of how AI is changing fashion.</p>
              </Link>
            </div>
          </section>

        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Find Out What Suits YOU</h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius analyzes your body type and skin tone, then tells you if clothes will flatter you as you shop. No more guessing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(45deg, #F59E0B, #F43F5E)' }}>
                  Add to Chrome - It's Free
                </button>
              </a>
              <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 bg-white text-gray-900 font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200">
                  {buttonText}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DoesThisSuitMe;
