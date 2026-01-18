import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About StyleGenius - Your Style Resource"
        description="StyleGenius is your go-to resource for color analysis, body type guides, and personal style tips. Learn more about us."
        keywords="about stylegenius, style blog, fashion blog, color analysis blog"
        canonicalUrl="/about"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/" className="text-sm uppercase tracking-wider text-gray-500 hover:text-black mb-6 inline-block">
              Home
            </Link>
            <h1
              className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              About
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We believe everyone deserves to feel confident in what they wear. That's why we created StyleGenius - a resource dedicated to helping you discover your best colors, understand your body type, and develop your personal style.
            </p>

            <h2
              className="text-2xl font-semibold text-gray-900 mt-16 mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What We Cover
            </h2>

            <div className="space-y-6 mb-16">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-medium text-gray-900 mb-2">Color Analysis</h3>
                <p className="text-gray-600">
                  Discover your color season and find the shades that make you glow. From warm undertones to cool palettes, we break it all down.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-medium text-gray-900 mb-2">Body Type Guides</h3>
                <p className="text-gray-600">
                  Learn how to dress for your unique shape. We cover everything from Kibbe types to practical styling tips for every body.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-medium text-gray-900 mb-2">Style & Aesthetics</h3>
                <p className="text-gray-600">
                  Explore trending aesthetics and timeless style principles. Find your look and learn how to put outfits together.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-medium text-gray-900 mb-2">Smart Shopping</h3>
                <p className="text-gray-600">
                  Stay ahead with the latest in fashion technology. From virtual try-on to AI styling, we cover how tech is changing how we shop.
                </p>
              </div>
            </div>

            <h2
              className="text-2xl font-semibold text-gray-900 mt-16 mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Style shouldn't be complicated. Our mission is to make fashion accessible and practical for everyone. We cut through the noise and give you actionable advice you can actually use.
            </p>
            <p className="text-gray-700 leading-relaxed mb-16">
              Every guide we write is researched, tested, and designed to help you make better style decisions - whether you're building a capsule wardrobe, figuring out your color season, or just trying to find jeans that actually fit.
            </p>

            <h2
              className="text-2xl font-semibold text-gray-900 mt-16 mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Get in Touch
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Have questions or suggestions? We'd love to hear from you. Reach out at{" "}
              <a href="mailto:ai@stylegenius.app" className="text-black underline hover:no-underline">
                ai@stylegenius.app
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
