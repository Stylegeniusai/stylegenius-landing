import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { blogPosts, getFeaturedPosts, getColorPosts, getBodyPosts, getStylePosts, getShoppingPosts } from "../data/blogPosts";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredPosts = getFeaturedPosts();
  const colorPosts = getColorPosts();
  const bodyPosts = getBodyPosts();
  const stylePosts = getStylePosts();
  const shoppingPosts = getShoppingPosts();

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="StyleGenius - Your Complete Style Guide"
        description="Discover your perfect colors, find your body type, and master your personal style with expert guides and tips."
        keywords="color analysis, body type, personal style, fashion guide, style tips, capsule wardrobe"
        canonicalUrl="/"
      />
      <Navigation />

      {/* Hero Section - Editorial */}
      <section className="py-16 lg:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Your Style Resource</p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              StyleGenius
            </h1>
            <p className="text-xl text-gray-600 max-w-xl mx-auto leading-relaxed">
              Expert guides on color analysis, body types, and personal style. Everything you need to look and feel your best.
            </p>
          </div>

          {/* Category Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <Link to="/color" className="text-sm uppercase tracking-wider text-gray-600 hover:text-black border-b border-transparent hover:border-black pb-1 transition-all">
              Color Analysis
            </Link>
            <Link to="/body" className="text-sm uppercase tracking-wider text-gray-600 hover:text-black border-b border-transparent hover:border-black pb-1 transition-all">
              Body Types
            </Link>
            <Link to="/style" className="text-sm uppercase tracking-wider text-gray-600 hover:text-black border-b border-transparent hover:border-black pb-1 transition-all">
              Style & Aesthetics
            </Link>
            <Link to="/shopping" className="text-sm uppercase tracking-wider text-gray-600 hover:text-black border-b border-transparent hover:border-black pb-1 transition-all">
              Smart Shopping
            </Link>
          </div>
        </div>
      </section>

      {/* Featured - Large Card */}
      <section className="py-16 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <a href={featuredPosts[0]?.href} className="group block">
              <div className="aspect-[21/9] overflow-hidden bg-gray-100 mb-6">
                <img
                  src={featuredPosts[0]?.image}
                  alt={featuredPosts[0]?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">{featuredPosts[0]?.category}</p>
                <h2
                  className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 group-hover:text-gray-600 transition-colors"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {featuredPosts[0]?.title}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">{featuredPosts[0]?.description}</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Color Analysis */}
      <section className="py-16 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2
              className="text-2xl font-semibold text-gray-900"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Color Analysis
            </h2>
            <Link to="/color" className="text-sm uppercase tracking-wider text-gray-500 hover:text-black transition-colors">
              View All
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {colorPosts.slice(0, 4).map((post) => (
              <a key={post.href} href={post.href} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors leading-tight">
                  {post.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Body Types */}
      <section className="py-16 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2
              className="text-2xl font-semibold text-gray-900"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Body Type Guides
            </h2>
            <Link to="/body" className="text-sm uppercase tracking-wider text-gray-500 hover:text-black transition-colors">
              View All
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bodyPosts.slice(0, 4).map((post) => (
              <a key={post.href} href={post.href} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors leading-tight">
                  {post.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Style & Aesthetics - 2 column feature */}
      <section className="py-16 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2
              className="text-2xl font-semibold text-gray-900"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Style & Aesthetics
            </h2>
            <Link to="/style" className="text-sm uppercase tracking-wider text-gray-500 hover:text-black transition-colors">
              View All
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {stylePosts.slice(0, 2).map((post) => (
              <a key={post.href} href={post.href} className="group">
                <div className="aspect-[3/2] overflow-hidden bg-gray-100 mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">{post.category}</p>
                <h3
                  className="text-xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm">{post.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Shopping */}
      <section className="py-16 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2
              className="text-2xl font-semibold text-gray-900"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Smart Shopping
            </h2>
            <Link to="/shopping" className="text-sm uppercase tracking-wider text-gray-500 hover:text-black transition-colors">
              View All
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {shoppingPosts.slice(0, 3).map((post) => (
              <a key={post.href} href={post.href} className="group">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors leading-tight">
                  {post.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
