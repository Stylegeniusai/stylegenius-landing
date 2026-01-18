import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import SEO from "../components/SEO";
import { getStylePosts } from "../data/blogPosts";
import { Link } from "react-router-dom";

const StyleCategory = () => {
  const posts = getStylePosts();

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Style & Aesthetics Guides | StyleGenius"
        description="Explore fashion aesthetics from clean girl to old money, build your capsule wardrobe, and find your unique personal style."
        keywords="fashion aesthetic, personal style, clean girl, old money, coquette, capsule wardrobe, style guide"
        canonicalUrl="/style"
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
              Style & Aesthetics
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              From trending aesthetics to timeless style rules. Find your look and learn how to build a wardrobe you love.
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

export default StyleCategory;
