import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnalysisCTA from "../components/AnalysisCTA";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";
const BODYTYPE_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/bodytype";

const HourglassBodyType = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Hourglass Body Shape: Best Clothes, Jeans & Styles to Wear (2026)"
        description="What to wear with an hourglass figure: best dresses, jeans, tops & what to avoid. See outfit ideas and styling tips for your body type."
        keywords="hourglass body shape, hourglass body type, hourglass figure, how to dress hourglass body, best jeans for hourglass, best dresses for hourglass, curvy fashion, hourglass outfits"
        canonicalUrl="/hourglass-body-type"
        ogImage="/hourglass-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-11-10",
          modifiedTime: "2026-01-06",
          section: "Body Type",
          tags: ["hourglass", "body type", "style guide", "curvy fashion"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Hourglass Body Type", url: "/hourglass-body-type" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-6">
              Body Type Guide
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Hourglass Body Type:{" "}
              Style Guide
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The complete guide to dressing your hourglass figure - learn what silhouettes, cuts, and styles will flatter your curves.
            </p>
          </div>
          {/* Hero Image */}
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BODYTYPE_IMAGE_BASE}/hourglass/wrap-dresses.png`}
              alt="Hourglass body type fashion guide"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* What is Hourglass */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is an Hourglass Body Type?</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The hourglass body type is characterized by a well-defined waist with hips and bust of approximately equal width. This creates the classic "hourglass" silhouette that has been celebrated throughout fashion history.
            </p>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hourglass Characteristics</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="text-gray-700 space-y-2">
                  <li>• Shoulders and hips roughly same width</li>
                  <li>• Well-defined, narrow waist</li>
                  <li>• Fuller bust and hips</li>
                  <li>• Curved hips</li>
                </ul>
                <ul className="text-gray-700 space-y-2">
                  <li>• Weight distributes evenly</li>
                  <li>• Natural curves at bust and hips</li>
                  <li>• Waist is 8-10" smaller than hips</li>
                  <li>• Rounded bottom</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Celebrity Examples */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Hourglass Celebrities</h3>
            <div className="flex flex-wrap gap-3">
              {["Marilyn Monroe", "Scarlett Johansson", "Sofia Vergara", "Kim Kardashian", "Beyoncé", "Salma Hayek", "Dita Von Teese", "Blake Lively"].map((name) => (
                <span key={name} className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* What to Wear - with Images */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Best Styles for Hourglass</h2>

          {/* Style Tips with Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Wrap Dresses", image: `${BODYTYPE_IMAGE_BASE}/hourglass/wrap-dresses.png` },
              { name: "Bodycon Dresses", image: `${BODYTYPE_IMAGE_BASE}/hourglass/bodycon-dresses.png` },
              { name: "High-Waisted Everything", image: `${BODYTYPE_IMAGE_BASE}/hourglass/high-waisted-everything.png` },
              { name: "Belted Coats", image: `${BODYTYPE_IMAGE_BASE}/hourglass/belted-coats.png` },
              { name: "Fitted Tops", image: `${BODYTYPE_IMAGE_BASE}/hourglass/fitted-tops.png` },
              { name: "Pencil Skirts", image: `${BODYTYPE_IMAGE_BASE}/hourglass/pencil-skirts.png` },
              { name: "V-Necks & Scoop Necks", image: `${BODYTYPE_IMAGE_BASE}/hourglass/v-necks--scoop-necks.png` },
              { name: "Tailored Blazers", image: `${BODYTYPE_IMAGE_BASE}/hourglass/tailored-blazers.png` },
              { name: "Soft Draped Fabrics", image: `${BODYTYPE_IMAGE_BASE}/hourglass/soft--draped-fabrics.png` },
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 text-center">{item.name}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tops & Blouses</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  V-necks and wrap tops
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Fitted shirts that show your waist
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Peplum tops
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Belted cardigans
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Scoop necks
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dresses</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Wrap dresses (your best friend!)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Fit-and-flare silhouettes
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Bodycon dresses
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  A-line with defined waist
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Belted shirt dresses
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bottoms</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  High-waisted jeans and pants
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Bootcut or flared jeans
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Pencil skirts
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  A-line skirts
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Wide-leg trousers with fitted waist
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Outerwear</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Belted coats and trenches
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Fitted blazers
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Wrap coats
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Cropped jackets
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Peplum jackets
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-8">These are general tips — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get a guide made for your body type</Link></p>

          <AnalysisCTA />

          {/* What to Avoid */}
          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Styles to Be Careful With</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Shapeless, boxy tops that hide your waist
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Empire waist dresses (waist hits wrong spot)
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Low-rise jeans (creates muffin top illusion)
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Oversized, baggy clothing
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Straight shift dresses with no waist
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Stiff, bulky fabrics
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-6 mb-8">These are general tips — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get a guide made for your body type</Link></p>
        </div>
      </section>

      {/* Style Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pro Styling Tips</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Golden Rule</h3>
              <p className="text-gray-700">
                Always define your waist! Your waist is your greatest asset. Use belts, fitted clothing, and wrap styles to highlight it.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Balance is Key</h3>
              <p className="text-gray-700">
                Your body is already balanced - don't add volume to bust OR hips alone. Keep proportions even top and bottom.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fabric Choice</h3>
              <p className="text-gray-700">
                Choose fabrics with some stretch and drape. Stiff fabrics can add bulk where you don't need it.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tuck It In</h3>
              <p className="text-gray-700">
                French tuck or full tuck your tops into high-waisted bottoms to show off your waist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Body Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore Other Body Types</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/pear-body-shape" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Pear Body Shape</h3>
              <p className="text-gray-600 text-sm">Hips wider than shoulders - learn how to balance your silhouette.</p>
            </Link>
            <Link to="/apple-body-shape" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Apple Body Shape</h3>
              <p className="text-gray-600 text-sm">Fuller midsection with slimmer legs - style tips for your shape.</p>
            </Link>
            <Link to="/rectangle-body-type" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Rectangle Body Type</h3>
              <p className="text-gray-600 text-sm">Athletic and straight - how to create curves with clothing.</p>
            </Link>
            <Link to="/kibbe-body-types" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Kibbe Body Types</h3>
              <p className="text-gray-600 text-sm">Discover your Kibbe type for a more detailed style analysis.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Style Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/best-jeans-for-body-type" className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Best Jeans for Your Body</h3>
              <p className="text-gray-600 text-sm">Find the perfect denim style for your hourglass figure.</p>
            </Link>
            <Link to="/capsule-wardrobe" className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Build a Capsule Wardrobe</h3>
              <p className="text-gray-600 text-sm">Create a versatile wardrobe that flatters your shape.</p>
            </Link>
            <Link to="/what-colors-suit-me" className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">What Colors Suit Me?</h3>
              <p className="text-gray-600 text-sm">Find your perfect color palette to complement your style.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Useful Tools for Dressing Your Hourglass Figure
            </h2>
            <p className="text-gray-600 text-center mb-8">
              These apps help you find flattering styles and organize your wardrobe for your body type.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="https://wontsy.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Wontsy</h3>
                <p className="text-sm text-gray-600 mb-3">Save curve-flattering pieces from any store in one wishlist. Build outfit combinations and get price drop alerts on your favorites.</p>
                <span className="text-pink-500 text-sm font-medium">Free - iOS, Android, Chrome, Safari</span>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Pinterest</h3>
                <p className="text-sm text-gray-600 mb-3">Find outfit inspiration specifically for hourglass figures. Create boards for different occasions and style goals.</p>
                <span className="text-pink-500 text-sm font-medium">Free - iOS, Android, Web</span>
              </a>
              <a href="https://www.cladwell.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Cladwell</h3>
                <p className="text-sm text-gray-600 mb-3">Organize your existing wardrobe and get daily outfit suggestions based on what you already own.</p>
                <span className="text-pink-500 text-sm font-medium">Subscription - iOS, Android</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl">
        <AnalysisCTA />
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-gray-50 rounded-2xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                How do I know if I have an hourglass body type?
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                You likely have an hourglass body type if your bust and hip measurements are roughly equal (within 1-2 inches of each other) and your waist is significantly narrower — typically 8 to 10 inches smaller than your hips. Your weight tends to distribute evenly between your upper and lower body, and you have a naturally defined waist.
              </p>
            </details>

            <details className="bg-gray-50 rounded-2xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                What are the best jeans for an hourglass figure?
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                High-waisted jeans are the best choice for hourglass figures because they sit at your natural waist and prevent gapping at the back. Bootcut and flared styles balance out your hips, while straight-leg jeans offer a classic look. Look for jeans with some stretch to accommodate the difference between your waist and hips.
              </p>
            </details>

            <details className="bg-gray-50 rounded-2xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                Can hourglass body types wear oversized clothing?
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Yes, but the key is to balance it. If you wear an oversized top, pair it with fitted bottoms and tuck or belt the top to define your waist. An oversized blazer works great when cinched with a belt. The goal is to avoid hiding your waist completely, as that is your most flattering feature.
              </p>
            </details>

            <details className="bg-gray-50 rounded-2xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                What necklines are most flattering for hourglass shapes?
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                V-necks, scoop necks, sweetheart necklines, and wrap-style necklines are the most flattering for hourglass figures. These necklines elongate your torso and complement your bust without adding bulk. Avoid high crew necks and turtlenecks that can make your upper body look heavier.
              </p>
            </details>

            <details className="bg-gray-50 rounded-2xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                What is the difference between hourglass and pear body shapes?
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The main difference is in the upper body. Hourglass figures have a bust that is roughly the same width as their hips, while pear shapes have a narrower bust and shoulders compared to their hips. Both share a defined waist, but hourglass bodies are more symmetrical between the upper and lower halves.
              </p>
            </details>

            <details className="bg-gray-50 rounded-2xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                How should I dress my hourglass body for the office?
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                For professional settings, opt for tailored blazers that nip in at the waist, pencil skirts, wrap dresses, and high-waisted trousers with a tucked-in blouse. Structured fabrics in classic colors create a polished look. A belted coat or trench is perfect for outerwear. Avoid anything too boxy or too tight — aim for a fitted but not clingy silhouette.
              </p>
            </details>

            <details className="bg-gray-50 rounded-2xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                What swimsuits look best on an hourglass figure?
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                High-waisted bikinis, one-piece swimsuits with ruching at the waist, and wrap-style swimsuits all look fantastic on hourglass figures. Look for supportive tops with underwire or thicker straps for the bust. Styles with a defined waist or cut-outs at the midsection emphasize your shape beautifully.
              </p>
            </details>
          </div>
        </div>

        {/* FAQ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How do I know if I have an hourglass body type?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You likely have an hourglass body type if your bust and hip measurements are roughly equal (within 1-2 inches of each other) and your waist is significantly narrower — typically 8 to 10 inches smaller than your hips. Your weight tends to distribute evenly between your upper and lower body, and you have a naturally defined waist."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the best jeans for an hourglass figure?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "High-waisted jeans are the best choice for hourglass figures because they sit at your natural waist and prevent gapping at the back. Bootcut and flared styles balance out your hips, while straight-leg jeans offer a classic look. Look for jeans with some stretch to accommodate the difference between your waist and hips."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can hourglass body types wear oversized clothing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, but the key is to balance it. If you wear an oversized top, pair it with fitted bottoms and tuck or belt the top to define your waist. An oversized blazer works great when cinched with a belt. The goal is to avoid hiding your waist completely, as that is your most flattering feature."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What necklines are most flattering for hourglass shapes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "V-necks, scoop necks, sweetheart necklines, and wrap-style necklines are the most flattering for hourglass figures. These necklines elongate your torso and complement your bust without adding bulk. Avoid high crew necks and turtlenecks that can make your upper body look heavier."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between hourglass and pear body shapes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The main difference is in the upper body. Hourglass figures have a bust that is roughly the same width as their hips, while pear shapes have a narrower bust and shoulders compared to their hips. Both share a defined waist, but hourglass bodies are more symmetrical between the upper and lower halves."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How should I dress my hourglass body for the office?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For professional settings, opt for tailored blazers that nip in at the waist, pencil skirts, wrap dresses, and high-waisted trousers with a tucked-in blouse. Structured fabrics in classic colors create a polished look. A belted coat or trench is perfect for outerwear. Avoid anything too boxy or too tight — aim for a fitted but not clingy silhouette."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What swimsuits look best on an hourglass figure?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "High-waisted bikinis, one-piece swimsuits with ruching at the waist, and wrap-style swimsuits all look fantastic on hourglass figures. Look for supportive tops with underwire or thicker straps for the bust. Styles with a defined waist or cut-outs at the midsection emphasize your shape beautifully."
                  }
                }
              ]
            })
          }}
        />
      </section>

      <Footer />
    </div>
  );
};

export default HourglassBodyType;
