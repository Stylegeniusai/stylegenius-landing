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
            {/* Founders */}
            <div className="flex justify-center gap-8 mb-10">
              <div className="text-center">
                <img
                  src="https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog/markus-profile.png"
                  alt="Markus — co-founder of StyleGenius"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-2 shadow-md"
                  loading="lazy"
                />
                <p className="text-sm font-medium text-gray-900">Markus</p>
              </div>
              <div className="text-center">
                <img
                  src="https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog/anna-profile.png"
                  alt="Anna — co-founder of StyleGenius"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-2 shadow-md"
                  loading="lazy"
                />
                <p className="text-sm font-medium text-gray-900">Anna</p>
              </div>
            </div>

            <h2
              className="text-2xl font-semibold text-gray-900 mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Why we built this
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We never felt confident walking into a store. Trends didn't work, colors felt random, and every shopping trip ended in frustration. We'd try on something that looked great on someone else and wonder why it looked completely wrong on us.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Turns out, the answer wasn't about trends or brands — it was about understanding your own coloring, body type, and what actually works for you specifically. Once we figured that out, everything changed. Shopping got easier, getting dressed got faster, and we actually felt good in what we wore.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-16">
              So we built StyleGenius — to help other women skip the years of trial and error and just know what works. Whether it's through our free guides or a personal style analysis, the goal is always the same: help you feel confident in what you wear, without overthinking it.
            </p>

            <h2
              className="text-2xl font-semibold text-gray-900 mt-16 mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What we do
            </h2>

            <div className="space-y-6 mb-16">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-medium text-gray-900 mb-2">Free Style Guides</h3>
                <p className="text-gray-600">
                  In-depth guides on color analysis, body types, aesthetics, and smart shopping — all free, no sign-up needed. Written to actually help, not just rank on Google.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-medium text-gray-900 mb-2">Personal Style Analysis</h3>
                <p className="text-gray-600">
                  A 12-page personalized guide created by a style coach — covering your color season, best colors, makeup palette, body type guide, capsule wardrobe, and outfit ideas. Based on your unique features, delivered in 48 hours.{" "}
                  <Link to="/personal-analysis" className="text-black underline hover:no-underline">Learn more</Link>
                </p>
              </div>
            </div>

            <h2
              className="text-2xl font-semibold text-gray-900 mt-16 mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Get in Touch
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Have questions or suggestions? We'd love to hear from you. Reach out at{" "}
              <a href="mailto:anna@stylegenius.app" className="text-black underline hover:no-underline">
                anna@stylegenius.app
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
