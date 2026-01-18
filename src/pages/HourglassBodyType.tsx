import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";
const BODYTYPE_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/bodytype";

const HourglassBodyType = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Hourglass Body Type: Complete Style Guide 2026"
        description="Discover how to dress your hourglass figure. Learn the best clothing styles, fits, and fashion tips to flatter your balanced proportions and defined waist."
        keywords="hourglass body type, hourglass figure, how to dress hourglass, hourglass body shape, curvy fashion, waist emphasis, hourglass style tips"
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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hourglass Body Type:{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Style Guide
              </span>
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

      <Footer />
    </div>
  );
};

export default HourglassBodyType;
