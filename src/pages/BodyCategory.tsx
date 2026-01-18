import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import SEO from "../components/SEO";
import { getBodyPosts } from "../data/blogPosts";
import { Link } from "react-router-dom";

const BodyCategory = () => {
  const posts = getBodyPosts();

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Body Type Guides - Dress for Your Shape | StyleGenius"
        description="Discover your body type and learn how to dress for your unique shape. From hourglass to pear, find the most flattering styles for you."
        keywords="body type, body shape, kibbe, hourglass, pear shape, apple shape, rectangle body, how to dress"
        canonicalUrl="/body"
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
              Body Types
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Learn your body type and discover the cuts, silhouettes, and styles that flatter your unique shape.
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

export default BodyCategory;
