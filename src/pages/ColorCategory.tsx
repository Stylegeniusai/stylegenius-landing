import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import SEO from "../components/SEO";
import { getColorPosts } from "../data/blogPosts";
import { Link } from "react-router-dom";

const ColorCategory = () => {
  const posts = getColorPosts();

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Color Analysis Guides - Find Your Perfect Palette | StyleGenius"
        description="Discover your color season, undertones, and the shades that make you glow. Complete guides to seasonal color analysis for every skin tone."
        keywords="color analysis, seasonal colors, skin undertone, color palette, what colors suit me, warm colors, cool colors"
        canonicalUrl="/color"
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
              Color Analysis
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Find your color season, understand your undertones, and discover the shades that make you look your absolute best.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-5xl mx-auto">
            {posts.map((post) => (
              <BlogCard key={post.href} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ColorCategory;
