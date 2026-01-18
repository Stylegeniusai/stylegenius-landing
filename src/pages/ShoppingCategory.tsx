import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import SEO from "../components/SEO";
import { getShoppingPosts } from "../data/blogPosts";
import { Link } from "react-router-dom";

const ShoppingCategory = () => {
  const posts = getShoppingPosts();

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Smart Shopping & Fashion Tech | StyleGenius"
        description="Discover the latest in fashion technology - from virtual try-on to AI styling. Learn how to shop smarter online."
        keywords="virtual try on, AI fashion, online shopping, wishlist apps, price tracking, fashion technology"
        canonicalUrl="/shopping"
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
              Smart Shopping
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              The future of fashion shopping is here. Virtual try-on, AI styling, and tools that help you shop smarter.
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

export default ShoppingCategory;
