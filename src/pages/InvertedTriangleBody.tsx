import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnalysisCTA from "../components/AnalysisCTA";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";
const BODYTYPE_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/bodytype";

const InvertedTriangleBody = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Inverted Triangle Body: Complete Style Guide 2026"
        description="Discover how to dress your inverted triangle body shape. Learn the best clothing styles, fits, and fashion tips to balance your proportions."
        keywords="inverted triangle body, inverted triangle shape, broad shoulders, how to dress inverted triangle, V-shape body, top heavy body type"
        canonicalUrl="/inverted-triangle-body"
        ogImage="/inverted-triangle-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-11-17",
          modifiedTime: "2026-01-06",
          section: "Body Type",
          tags: ["inverted triangle", "body type", "style guide", "fashion tips"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Inverted Triangle Body", url: "/inverted-triangle-body" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-6">Body Type Guide</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Inverted Triangle{" "}
              Body Type
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The complete guide to dressing the inverted triangle shape - balance broad shoulders with the right silhouettes.
            </p>
          </div>
          {/* Hero Image */}
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BODYTYPE_IMAGE_BASE}/invertedtriangle/a-line-skirts.png`}
              alt="Inverted triangle body type fashion guide"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is an Inverted Triangle Body?</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            The inverted triangle (also called V-shape) has shoulders wider than the hips. This athletic build is common among swimmers and those who do upper body workouts.
          </p>

          <div className="bg-pink-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Characteristics</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-gray-700 space-y-2">
                <li>• Broad shoulders</li>
                <li>• Narrow hips</li>
                <li>• Little waist definition</li>
                <li>• Athletic build</li>
              </ul>
              <ul className="text-gray-700 space-y-2">
                <li>• Fuller bust</li>
                <li>• Slim legs</li>
                <li>• Flat bottom</li>
                <li>• Strong back</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Celebrity Examples</h3>
            <div className="flex flex-wrap gap-3">
              {["Angelina Jolie", "Demi Moore", "Naomi Campbell", "Renée Zellweger", "Cameron Diaz"].map((name) => (
                <span key={name} className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">{name}</span>
              ))}
            </div>
          </div>

          <AnalysisCTA />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best Styles</h3>
              <ul className="text-gray-700 space-y-2">
                <li><span className="text-green-600 mr-2">✓</span> V-necks and scoop necklines</li>
                <li><span className="text-green-600 mr-2">✓</span> A-line skirts and dresses</li>
                <li><span className="text-green-600 mr-2">✓</span> Wide-leg pants</li>
                <li><span className="text-green-600 mr-2">✓</span> Details on lower half (pockets, patterns)</li>
                <li><span className="text-green-600 mr-2">✓</span> Wrap tops and dresses</li>
              </ul>
              <p className="text-sm text-gray-400 mb-8 mt-4">These are general tips — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get a guide made for your body type</Link></p>
            </div>

            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Avoid</h3>
              <ul className="text-gray-700 space-y-2">
                <li><span className="text-red-500 mr-2">✕</span> Boat necks and wide necklines</li>
                <li><span className="text-red-500 mr-2">✕</span> Shoulder pads</li>
                <li><span className="text-red-500 mr-2">✕</span> Cap sleeves</li>
                <li><span className="text-red-500 mr-2">✕</span> Skinny jeans alone</li>
                <li><span className="text-red-500 mr-2">✕</span> Halter tops</li>
              </ul>
              <p className="text-sm text-gray-400 mb-8 mt-4">These are general tips — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get a guide made for your body type</Link></p>
            </div>
          </div>
        </div>
      </article>

      {/* Style Tips with Images */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Best Styles for Inverted Triangle</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "A-Line Skirts", image: `${BODYTYPE_IMAGE_BASE}/invertedtriangle/a-line-skirts.png` },
              { name: "Bootcut Jeans", image: `${BODYTYPE_IMAGE_BASE}/invertedtriangle/bootcut-jeans.png` },
              { name: "Dark Tops, Bright Bottoms", image: `${BODYTYPE_IMAGE_BASE}/invertedtriangle/dark-tops--bright-bottoms.png` },
              { name: "Flared Pants", image: `${BODYTYPE_IMAGE_BASE}/invertedtriangle/flared-pants.png` },
              { name: "Hip Detailing", image: `${BODYTYPE_IMAGE_BASE}/invertedtriangle/hip-detailing.png` },
              { name: "V-Necklines", image: `${BODYTYPE_IMAGE_BASE}/invertedtriangle/v-necklines.png` },
              { name: "Wide-Leg Pants", image: `${BODYTYPE_IMAGE_BASE}/invertedtriangle/wide-leg-pants.png` },
              { name: "Wrap Dresses", image: `${BODYTYPE_IMAGE_BASE}/invertedtriangle/wrap-dresses.png` },
              { name: "Printed Bottoms", image: `${BODYTYPE_IMAGE_BASE}/invertedtriangle/printed-bottoms.png` },
            ].map((tip) => (
              <div key={tip.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={tip.image}
                  alt={`${tip.name} for inverted triangle body`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 text-center">{tip.name}</h4>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mb-8 text-center">These are general tips — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get a guide made for your body type</Link></p>
        </div>
      </section>

      {/* Related Body Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore Other Body Types</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/hourglass-body-type" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Hourglass Body Type</h3>
              <p className="text-gray-600 text-sm">Balanced bust and hips with defined waist - style tips.</p>
            </Link>
            <Link to="/pear-body-shape" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Pear Body Shape</h3>
              <p className="text-gray-600 text-sm">Hips wider than shoulders - the opposite of inverted triangle.</p>
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
              <p className="text-gray-600 text-sm">Find the perfect denim style for your shape.</p>
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
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Useful Tools for Dressing Your Inverted Triangle Shape
            </h2>
            <p className="text-gray-600 text-center mb-8">
              These apps help you find flattering styles and organize your wardrobe for your body type.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="https://wontsy.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Wontsy</h3>
                <p className="text-sm text-gray-600 mb-3">Save balancing pieces from any store in one wishlist. Build outfit combinations and get price drop alerts on your favorites.</p>
                <span className="text-pink-500 text-sm font-medium">Free - iOS, Android, Chrome, Safari</span>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Pinterest</h3>
                <p className="text-sm text-gray-600 mb-3">Find outfit inspiration for inverted triangle shapes. Create boards for different occasions and style goals.</p>
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
            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                How do I know if I have an inverted triangle body shape?
                <span className="text-pink-500 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">You likely have an inverted triangle body shape if your shoulders are noticeably wider than your hips, you have a fuller bust or broad back, and your lower body is comparatively narrow. A quick test: stand in front of a mirror and compare the width of your shoulders to your hips. If your shoulders extend well beyond your hip line, you have an inverted triangle shape.</p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                What jeans are best for an inverted triangle body?
                <span className="text-pink-500 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">Bootcut, wide-leg, and flared jeans are ideal for inverted triangle shapes because they add volume to the lower half, creating a more balanced silhouette. Avoid very skinny jeans on their own as they can emphasize the difference between your broader upper body and narrow hips. If you prefer a slimmer fit, pair straight-leg jeans with a V-neck or darker top.</p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                What necklines are most flattering for broad shoulders?
                <span className="text-pink-500 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">V-necks, scoop necks, and deep U-necklines are the most flattering for broad shoulders. These necklines draw the eye downward and inward, visually narrowing the shoulder line. Wrap tops also work beautifully. Avoid boat necks, off-the-shoulder tops, and wide square necklines as they emphasize horizontal width across the shoulders.</p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                Can I wear sleeveless tops with an inverted triangle shape?
                <span className="text-pink-500 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">Yes, but choose your sleeveless styles carefully. Racerback and narrow-strap tank tops work well because they make the shoulder line appear narrower. Avoid cap sleeves and wide-set straps that sit on the outer edge of your shoulders, as these add visual width. If you want to show your arms, opt for tops with a V-neckline and narrower straps set slightly inward.</p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                What dresses suit an inverted triangle body type?
                <span className="text-pink-500 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">A-line dresses, wrap dresses, and fit-and-flare silhouettes are ideal for inverted triangle shapes. These styles cinch at the waist and flare out at the hips, creating the illusion of a more balanced figure. Look for dresses with details like ruffles, pockets, or patterns on the skirt portion to draw attention to the lower half. Darker colors on top with lighter or patterned skirts also help balance proportions.</p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                How is inverted triangle different from a rectangle body shape?
                <span className="text-pink-500 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">The key difference is in shoulder-to-hip ratio. An inverted triangle has shoulders significantly wider than the hips, while a rectangle body type has shoulders and hips that are roughly the same width with little waist definition. Both shapes can be athletic, but the inverted triangle tends to carry more width in the upper body. Styling approaches differ: inverted triangles focus on balancing the lower half, while rectangles focus on creating curves.</p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                What swimwear is best for an inverted triangle body?
                <span className="text-pink-500 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">Look for swimwear that adds volume to the hips and minimizes the shoulders. High-waisted bikini bottoms with ruffles or bold prints work well for the lower half. For tops, choose halter-neck or V-neck styles in solid, darker colors to visually narrow the upper body. One-piece swimsuits with color blocking — dark on top and bright or patterned on the bottom — are also very flattering for inverted triangle shapes.</p>
            </details>
          </div>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How do I know if I have an inverted triangle body shape?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You likely have an inverted triangle body shape if your shoulders are noticeably wider than your hips, you have a fuller bust or broad back, and your lower body is comparatively narrow. A quick test: stand in front of a mirror and compare the width of your shoulders to your hips. If your shoulders extend well beyond your hip line, you have an inverted triangle shape."
              }
            },
            {
              "@type": "Question",
              "name": "What jeans are best for an inverted triangle body?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bootcut, wide-leg, and flared jeans are ideal for inverted triangle shapes because they add volume to the lower half, creating a more balanced silhouette. Avoid very skinny jeans on their own as they can emphasize the difference between your broader upper body and narrow hips."
              }
            },
            {
              "@type": "Question",
              "name": "What necklines are most flattering for broad shoulders?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "V-necks, scoop necks, and deep U-necklines are the most flattering for broad shoulders. These necklines draw the eye downward and inward, visually narrowing the shoulder line. Wrap tops also work beautifully. Avoid boat necks, off-the-shoulder tops, and wide square necklines."
              }
            },
            {
              "@type": "Question",
              "name": "Can I wear sleeveless tops with an inverted triangle shape?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, but choose your sleeveless styles carefully. Racerback and narrow-strap tank tops work well because they make the shoulder line appear narrower. Avoid cap sleeves and wide-set straps that sit on the outer edge of your shoulders."
              }
            },
            {
              "@type": "Question",
              "name": "What dresses suit an inverted triangle body type?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A-line dresses, wrap dresses, and fit-and-flare silhouettes are ideal for inverted triangle shapes. These styles cinch at the waist and flare out at the hips, creating the illusion of a more balanced figure."
              }
            },
            {
              "@type": "Question",
              "name": "How is inverted triangle different from a rectangle body shape?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The key difference is in shoulder-to-hip ratio. An inverted triangle has shoulders significantly wider than the hips, while a rectangle body type has shoulders and hips that are roughly the same width with little waist definition."
              }
            },
            {
              "@type": "Question",
              "name": "What swimwear is best for an inverted triangle body?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Look for swimwear that adds volume to the hips and minimizes the shoulders. High-waisted bikini bottoms with ruffles or bold prints work well for the lower half. For tops, choose halter-neck or V-neck styles in solid, darker colors to visually narrow the upper body."
              }
            }
          ]
        }) }} />
      </section>

      <Footer />
    </div>
  );
};

export default InvertedTriangleBody;
