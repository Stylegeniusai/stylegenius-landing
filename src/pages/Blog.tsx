import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const blogPosts = [
  // Color Analysis
  {
    title: "What Season Am I? Color Analysis Guide",
    description: "Discover your color season with our complete guide to seasonal color analysis - find out if you're a Spring, Summer, Autumn, or Winter.",
    image: "/blog/what-season-am-i.jpg",
    href: "/what-season-am-i",
    category: "Color Analysis"
  },
  {
    title: "Soft Autumn Color Palette",
    description: "The complete guide to Soft Autumn colors - muted, warm, and earthy shades that make your natural coloring glow.",
    image: "/blog/soft-autumn-colors.jpg",
    href: "/soft-autumn-colors",
    category: "Color Analysis"
  },
  {
    title: "Dark Winter Color Palette",
    description: "Discover the bold, cool, and dramatic colors that flatter Dark Winter coloring.",
    image: "/blog/dark-winter-colors.jpg",
    href: "/dark-winter-colors",
    category: "Color Analysis"
  },
  {
    title: "Deep Winter Color Palette",
    description: "The complete guide to Deep Winter colors - dramatic, bold, and high-contrast shades for striking beauty.",
    image: "/blog/deep-winter-colors.jpg",
    href: "/deep-winter-colors",
    category: "Color Analysis"
  },
  {
    title: "Soft Summer Color Palette",
    description: "Soft, muted, and cool colors that make Soft Summer coloring look effortlessly elegant.",
    image: "/blog/soft-summer-colors.jpg",
    href: "/soft-summer-colors",
    category: "Color Analysis"
  },
  {
    title: "Light Summer Color Palette",
    description: "Delicate, airy shades for naturally fair, cool-toned beauty.",
    image: "/blog/light-summer-colors.jpg",
    href: "/light-summer-colors",
    category: "Color Analysis"
  },
  {
    title: "Bright Spring Color Palette",
    description: "Vibrant, clear, and warm colors that make Bright Spring coloring radiate.",
    image: "/blog/bright-spring-colors.jpg",
    href: "/bright-spring-colors",
    category: "Color Analysis"
  },
  {
    title: "True Autumn Color Palette",
    description: "Rich, warm, and saturated colors perfect for True Autumn coloring.",
    image: "/blog/true-autumn-colors.jpg",
    href: "/true-autumn-colors",
    category: "Color Analysis"
  },
  {
    title: "Warm vs Cool Undertones",
    description: "Learn how to determine your undertone and why it matters for choosing flattering colors.",
    image: "/blog/warm-vs-cool-undertones.jpg",
    href: "/warm-vs-cool-undertones",
    category: "Color Analysis"
  },
  {
    title: "Best Colors for Pale Skin",
    description: "Find the most flattering colors for fair and pale skin tones.",
    image: "/blog/best-colors-pale-skin.jpg",
    href: "/best-colors-for-pale-skin",
    category: "Color Analysis"
  },
  {
    title: "Best Colors for Olive Skin",
    description: "Discover which colors complement olive skin tones beautifully.",
    image: "/blog/best-colors-olive-skin.jpg",
    href: "/best-colors-for-olive-skin",
    category: "Color Analysis"
  },
  {
    title: "Best Colors for Dark Skin",
    description: "The ultimate guide to colors that look stunning on dark skin tones.",
    image: "/blog/best-colors-dark-skin.jpg",
    href: "/best-colors-for-dark-skin",
    category: "Color Analysis"
  },
  {
    title: "What Colors Suit Me?",
    description: "The complete guide to finding your perfect color palette based on your skin tone and undertones.",
    image: "/what-colors-suit-me-skin-tone-guide.jpg",
    href: "/what-colors-suit-me",
    category: "Color Analysis"
  },
  // Body Type
  {
    title: "Kibbe Body Types Explained",
    description: "The complete guide to all 13 Kibbe body types - discover your unique body ID and how to dress for it.",
    image: "/blog/kibbe-body-types.jpg",
    href: "/kibbe-body-types",
    category: "Body Type"
  },
  {
    title: "Hourglass Body Type Guide",
    description: "How to dress the hourglass figure - styles that celebrate your balanced proportions.",
    image: "/blog/hourglass-body-type.jpg",
    href: "/hourglass-body-type",
    category: "Body Type"
  },
  {
    title: "Pear Body Shape Guide",
    description: "The best styles, cuts, and silhouettes for pear-shaped bodies.",
    image: "/blog/pear-body-shape.jpg",
    href: "/pear-body-shape",
    category: "Body Type"
  },
  {
    title: "Apple Body Shape Guide",
    description: "Flattering styles and tips for dressing the apple body shape.",
    image: "/blog/apple-body-shape.jpg",
    href: "/apple-body-shape",
    category: "Body Type"
  },
  {
    title: "Rectangle Body Type Guide",
    description: "Create curves and dimension with the right styles for rectangular body shapes.",
    image: "/blog/rectangle-body-type.jpg",
    href: "/rectangle-body-type",
    category: "Body Type"
  },
  {
    title: "Inverted Triangle Body Type",
    description: "Balance broad shoulders with the right silhouettes for inverted triangle shapes.",
    image: "/blog/inverted-triangle-body.jpg",
    href: "/inverted-triangle-body",
    category: "Body Type"
  },
  {
    title: "Best Jeans for Your Body Type",
    description: "Find the perfect jeans for your body shape - from high-rise to bootcut.",
    image: "/blog/best-jeans-body-type.jpg",
    href: "/best-jeans-for-body-type",
    category: "Body Type"
  },
  {
    title: "Body Type Style Guide",
    description: "Discover the most flattering outfits and styling tips for your unique body shape.",
    image: "/body-type-style-guide-different-shapes.jpg",
    href: "/what-body-type-suits-me",
    category: "Body Type"
  },
  // Fashion Aesthetics
  {
    title: "Clean Girl Aesthetic",
    description: "Master the effortless, minimal, and polished Clean Girl look that's taking over social media.",
    image: "/blog/clean-girl-aesthetic.jpg",
    href: "/clean-girl-aesthetic",
    category: "Fashion Aesthetic"
  },
  {
    title: "Old Money Aesthetic",
    description: "The complete guide to achieving timeless, inherited elegance style.",
    image: "/blog/old-money-aesthetic.jpg",
    href: "/old-money-aesthetic",
    category: "Fashion Aesthetic"
  },
  {
    title: "Quiet Luxury Style Guide",
    description: "Understated elegance that whispers wealth rather than shouts it.",
    image: "/blog/quiet-luxury-style.jpg",
    href: "/quiet-luxury-style",
    category: "Fashion Aesthetic"
  },
  {
    title: "Office Siren Aesthetic",
    description: "The viral TikTok trend combining corporate polish with seductive elegance.",
    image: "/blog/office-siren-aesthetic.jpg",
    href: "/office-siren-aesthetic",
    category: "Fashion Aesthetic"
  },
  {
    title: "Coquette Aesthetic",
    description: "Feminine, flirty, and romantic style inspired by bows, lace, and all things girly.",
    image: "/blog/coquette-aesthetic.jpg",
    href: "/coquette-aesthetic",
    category: "Fashion Aesthetic"
  },
  // Style Guides
  {
    title: "How to Find Your Personal Style",
    description: "A step-by-step guide to discovering your unique fashion identity.",
    image: "/blog/find-your-personal-style.jpg",
    href: "/find-your-personal-style",
    category: "Style Guide"
  },
  {
    title: "How to Build a Capsule Wardrobe",
    description: "Create a versatile wardrobe with fewer pieces that work harder for you.",
    image: "/blog/capsule-wardrobe.jpg",
    href: "/capsule-wardrobe",
    category: "Style Guide"
  },
  {
    title: "What to Wear to a Job Interview",
    description: "Professional outfit ideas for every industry and interview type.",
    image: "/blog/job-interview-outfits.jpg",
    href: "/what-to-wear-job-interview",
    category: "Style Guide"
  },
  {
    title: "Wedding Guest Outfit Ideas",
    description: "What to wear to weddings - from beach ceremonies to black tie events.",
    image: "/blog/wedding-guest-outfits.jpg",
    href: "/wedding-guest-outfits",
    category: "Style Guide"
  },
  // Technology & Trends
  {
    title: "Virtual Try-On Guide 2025",
    description: "Everything you need to know about virtual try-on technology and how to shop online confidently.",
    image: "/blog/virtual-try-on-guide.jpg",
    href: "/virtual-try-on-guide",
    category: "Shopping Tech"
  },
  {
    title: "Spring 2025 Fashion Trends",
    description: "The biggest fashion trends for Spring 2025 - from runway to real life.",
    image: "/blog/spring-2025-trends.jpg",
    href: "/spring-2025-fashion-trends",
    category: "Fashion Trends"
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
                <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
