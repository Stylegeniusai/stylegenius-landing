import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const blogPosts = [
  {
    title: "What Colors Suit Me?",
    description: "The complete guide to finding your perfect color palette based on your skin tone and undertones.",
    image: "/what-colors-suit-me-skin-tone-guide.jpg",
    href: "/what-colors-suit-me",
    category: "Color Analysis"
  },
  {
    title: "Body Type Style Guide",
    description: "Discover the most flattering outfits and styling tips for your unique body shape.",
    image: "/body-type-style-guide-different-shapes.jpg",
    href: "/what-body-type-suits-me",
    category: "Body Type"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            StyleGenius{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Blog
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert style guides, tips, and insights to help you look and feel your best.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <a
                key={post.href}
                href={post.href}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-pink-600 bg-pink-50 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600">
                    {post.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Coming Soon Placeholder */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-lg">
              More style guides coming soon...
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
