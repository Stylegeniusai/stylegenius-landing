import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";
const BODYTYPE_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/bodytype";

const RectangleBodyType = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Rectangle Body Type: Complete Style Guide 2026"
        description="Discover how to dress your rectangle body shape. Learn the best clothing styles, fits, and fashion tips to create curves and flatter your athletic figure."
        keywords="rectangle body type, rectangle body shape, how to dress rectangle shape, athletic body type, straight body shape, rectangle figure fashion"
        canonicalUrl="/rectangle-body-type"
        ogImage="/rectangle-body-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-11-16",
          modifiedTime: "2026-01-06",
          section: "Body Type",
          tags: ["rectangle", "body type", "style guide", "fashion tips"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Rectangle Body Type", url: "/rectangle-body-type" }
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
              Rectangle Body Type:{" "}
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
              The complete guide to dressing your rectangle shape - learn how to create curves and define your waist.
            </p>
          </div>
          {/* Hero Image */}
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BODYTYPE_IMAGE_BASE}/rectangle/belted-dresses.png`}
              alt="Rectangle body type fashion guide"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* What is Rectangle Shape */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a Rectangle Body Type?</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The rectangle body shape (also called straight, athletic, or banana) has shoulders, waist, and hips that are approximately the same width. This creates a straight silhouette with minimal curves.
            </p>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rectangle Shape Characteristics</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="text-gray-700 space-y-2">
                  <li>• Shoulders, waist, hips similar width</li>
                  <li>• Little waist definition</li>
                  <li>• Athletic or straight build</li>
                  <li>• Minimal curves</li>
                </ul>
                <ul className="text-gray-700 space-y-2">
                  <li>• Often lean and long</li>
                  <li>• Flat bottom</li>
                  <li>• Smaller bust</li>
                  <li>• Weight distributes evenly</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Celebrity Examples */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Rectangle Shape Celebrities</h3>
            <div className="flex flex-wrap gap-3">
              {["Cameron Diaz", "Kate Middleton", "Nicole Kidman", "Natalie Portman", "Keira Knightley", "Gisele Bündchen", "Gwyneth Paltrow", "Taylor Swift"].map((name) => (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Best Styles for Rectangle Shape</h2>

          {/* Style Tips with Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "A-Line Skirts", image: `${BODYTYPE_IMAGE_BASE}/rectangle/a-line-skirts.png` },
              { name: "Belted Dresses", image: `${BODYTYPE_IMAGE_BASE}/rectangle/belted-dresses.png` },
              { name: "Color Blocking", image: `${BODYTYPE_IMAGE_BASE}/rectangle/color-blocking.png` },
              { name: "Crop Tops with High Waist", image: `${BODYTYPE_IMAGE_BASE}/rectangle/crop-tops-with-high-waist.png` },
              { name: "Peplum Tops", image: `${BODYTYPE_IMAGE_BASE}/rectangle/peplum-tops.png` },
              { name: "Ruffled Tops", image: `${BODYTYPE_IMAGE_BASE}/rectangle/ruffled-tops.png` },
              { name: "Textured Fabrics", image: `${BODYTYPE_IMAGE_BASE}/rectangle/textured-fabrics.png` },
              { name: "Tiered Skirts", image: `${BODYTYPE_IMAGE_BASE}/rectangle/tiered-skirts.png` },
              { name: "Wrap Styles", image: `${BODYTYPE_IMAGE_BASE}/rectangle/wrap-styles.png` },
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
                  Peplum tops (create waist illusion)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Wrap tops
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Ruffled or embellished necklines
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Cropped jackets
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Layered tops
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dresses</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Fit-and-flare dresses
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Belted shirt dresses
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Wrap dresses
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  A-line with defined waist
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Peplum dresses
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bottoms</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Low-rise or mid-rise jeans
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Cargo pants and details at hips
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Pleated skirts
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Jeans with pocket details
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Wide-leg pants
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accessories</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Wide belts at the waist
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Chunky necklaces
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Statement earrings
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Scarves at the waist
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Hip bags
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
                  Shapeless, boxy clothing
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Straight shift dresses
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Clothes that emphasize straight lines
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Oversized tops with skinny jeans
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Unfitted blazers
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  Dropping shoulder seams
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Create Curves</h3>
              <p className="text-gray-700">
                Use ruffles, peplums, and layering to create the illusion of curves. Add volume at bust and hips.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Define Your Waist</h3>
              <p className="text-gray-700">
                Belts are your best friend! Use them to cinch your waist and create an hourglass shape.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Add Details</h3>
              <p className="text-gray-700">
                Choose clothes with pocket details, seaming, and embellishments that add visual interest.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Try Color Blocking</h3>
              <p className="text-gray-700">
                Different colors on top and bottom can create the illusion of curves and break up the straight line.
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
            <Link to="/hourglass-body-type" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Hourglass Body Type</h3>
              <p className="text-gray-600 text-sm">Balanced bust and hips with defined waist - style tips.</p>
            </Link>
            <Link to="/pear-body-shape" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Pear Body Shape</h3>
              <p className="text-gray-600 text-sm">Hips wider than shoulders - balance your silhouette.</p>
            </Link>
            <Link to="/inverted-triangle-body" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Inverted Triangle Body</h3>
              <p className="text-gray-600 text-sm">Broad shoulders with narrow hips - balance your silhouette.</p>
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
              <p className="text-gray-600 text-sm">Find the perfect denim style for your rectangle shape.</p>
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
              Helpful Shopping Tools
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Apps to help you find flattering styles for your rectangle body shape.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="https://wontsy.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Wontsy</h3>
                <p className="text-sm text-gray-600 mb-3">Save flattering pieces from any store, build outfit combinations, and track prices on your favorites.</p>
                <span className="text-pink-500 text-sm font-medium">Free · iOS, Android, Chrome, Safari</span>
              </a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Pinterest</h3>
                <p className="text-sm text-gray-600 mb-3">Find outfit inspiration for rectangle body types. Create boards for different occasions and style goals.</p>
                <span className="text-pink-500 text-sm font-medium">Free · iOS, Android, Web</span>
              </a>
              <a href="https://www.cladwell.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Cladwell</h3>
                <p className="text-sm text-gray-600 mb-3">Organize your existing wardrobe and get daily outfit suggestions based on what you already own.</p>
                <span className="text-pink-500 text-sm font-medium">Subscription · iOS, Android</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RectangleBodyType;
