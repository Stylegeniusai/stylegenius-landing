import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";
const BODYTYPE_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/bodytype";

const blogPosts = [
  // Color Analysis
  {
    title: "What Season Am I? Color Analysis Guide",
    description: "Discover your color season with our complete guide to seasonal color analysis - find out if you're a Spring, Summer, Autumn, or Winter.",
    image: `${BLOG_IMAGE_BASE}/what-season-hero.png`,
    href: "/what-season-am-i",
    category: "Color Analysis"
  },
  {
    title: "Soft Autumn Color Palette",
    description: "The complete guide to Soft Autumn colors - muted, warm, and earthy shades that make your natural coloring glow.",
    image: `${BLOG_IMAGE_BASE}/soft-autumn-hero.png`,
    href: "/soft-autumn-colors",
    category: "Color Analysis"
  },
  {
    title: "Dark Winter Color Palette",
    description: "Discover the bold, cool, and dramatic colors that flatter Dark Winter coloring.",
    image: `${BLOG_IMAGE_BASE}/dark-winter-hero.png`,
    href: "/dark-winter-colors",
    category: "Color Analysis"
  },
  {
    title: "Deep Winter Color Palette",
    description: "The complete guide to Deep Winter colors - dramatic, bold, and high-contrast shades for striking beauty.",
    image: `${BLOG_IMAGE_BASE}/deep-winter-hero.png`,
    href: "/deep-winter-colors",
    category: "Color Analysis"
  },
  {
    title: "Soft Summer Color Palette",
    description: "Soft, muted, and cool colors that make Soft Summer coloring look effortlessly elegant.",
    image: `${BLOG_IMAGE_BASE}/soft-summer-hero.png`,
    href: "/soft-summer-colors",
    category: "Color Analysis"
  },
  {
    title: "Light Summer Color Palette",
    description: "Delicate, airy shades for naturally fair, cool-toned beauty.",
    image: `${BLOG_IMAGE_BASE}/light-summer-hero.png`,
    href: "/light-summer-colors",
    category: "Color Analysis"
  },
  {
    title: "Bright Spring Color Palette",
    description: "Vibrant, clear, and warm colors that make Bright Spring coloring radiate.",
    image: `${BLOG_IMAGE_BASE}/bright-spring-hero.png`,
    href: "/bright-spring-colors",
    category: "Color Analysis"
  },
  {
    title: "True Autumn Color Palette",
    description: "Rich, warm, and saturated colors perfect for True Autumn coloring.",
    image: `${BLOG_IMAGE_BASE}/true-autumn-hero.png`,
    href: "/true-autumn-colors",
    category: "Color Analysis"
  },
  {
    title: "Warm vs Cool Undertones",
    description: "Learn how to determine your undertone and why it matters for choosing flattering colors.",
    image: `${BLOG_IMAGE_BASE}/undertones-hero.png`,
    href: "/warm-vs-cool-undertones",
    category: "Color Analysis"
  },
  {
    title: "Best Colors for Pale Skin",
    description: "Find the most flattering colors for fair and pale skin tones.",
    image: `${BLOG_IMAGE_BASE}/pale-skin-hero.png`,
    href: "/best-colors-for-pale-skin",
    category: "Color Analysis"
  },
  {
    title: "Best Colors for Olive Skin",
    description: "Discover which colors complement olive skin tones beautifully.",
    image: `${BLOG_IMAGE_BASE}/olive-skin-hero.png`,
    href: "/best-colors-for-olive-skin",
    category: "Color Analysis"
  },
  {
    title: "Best Colors for Dark Skin",
    description: "The ultimate guide to colors that look stunning on dark skin tones.",
    image: `${BLOG_IMAGE_BASE}/dark-skin-hero.png`,
    href: "/best-colors-for-dark-skin",
    category: "Color Analysis"
  },
  {
    title: "What Colors Suit Me?",
    description: "The complete guide to finding your perfect color palette based on your skin tone and undertones.",
    image: `${BLOG_IMAGE_BASE}/what-season-hero.png`,
    href: "/what-colors-suit-me",
    category: "Color Analysis"
  },
  // Body Type
  {
    title: "Kibbe Body Types Explained",
    description: "The complete guide to all 13 Kibbe body types - discover your unique body ID and how to dress for it.",
    image: `${BLOG_IMAGE_BASE}/kibbe-hero.png`,
    href: "/kibbe-body-types",
    category: "Body Type"
  },
  {
    title: "Hourglass Body Type Guide",
    description: "How to dress the hourglass figure - styles that celebrate your balanced proportions.",
    image: `${BODYTYPE_IMAGE_BASE}/hourglass/wrap-dresses.png`,
    href: "/hourglass-body-type",
    category: "Body Type"
  },
  {
    title: "Pear Body Shape Guide",
    description: "The best styles, cuts, and silhouettes for pear-shaped bodies.",
    image: `${BODYTYPE_IMAGE_BASE}/triangle/a-line-skirts.png`,
    href: "/pear-body-shape",
    category: "Body Type"
  },
  {
    title: "Apple Body Shape Guide",
    description: "Flattering styles and tips for dressing the apple body shape.",
    image: `${BODYTYPE_IMAGE_BASE}/round/empire-waist-dresses.png`,
    href: "/apple-body-shape",
    category: "Body Type"
  },
  {
    title: "Rectangle Body Type Guide",
    description: "Create curves and dimension with the right styles for rectangular body shapes.",
    image: `${BODYTYPE_IMAGE_BASE}/rectangle/belted-dresses.png`,
    href: "/rectangle-body-type",
    category: "Body Type"
  },
  {
    title: "Inverted Triangle Body Type",
    description: "Balance broad shoulders with the right silhouettes for inverted triangle shapes.",
    image: `${BODYTYPE_IMAGE_BASE}/invertedtriangle/a-line-skirts.png`,
    href: "/inverted-triangle-body",
    category: "Body Type"
  },
  {
    title: "Best Jeans for Your Body Type",
    description: "Find the perfect jeans for your body shape - from high-rise to bootcut.",
    image: `${BLOG_IMAGE_BASE}/jeans-hero.png`,
    href: "/best-jeans-for-body-type",
    category: "Body Type"
  },
  {
    title: "Body Type Style Guide",
    description: "Discover the most flattering outfits and styling tips for your unique body shape.",
    image: `${BODYTYPE_IMAGE_BASE}/hourglass/wrap-dresses.png`,
    href: "/what-body-type-suits-me",
    category: "Body Type"
  },
  // Fashion Aesthetics
  {
    title: "Clean Girl Aesthetic",
    description: "Master the effortless, minimal, and polished Clean Girl look that's taking over social media.",
    image: `${BLOG_IMAGE_BASE}/clean-girl-hero.png`,
    href: "/clean-girl-aesthetic",
    category: "Fashion Aesthetic"
  },
  {
    title: "Old Money Aesthetic",
    description: "The complete guide to achieving timeless, inherited elegance style.",
    image: `${BLOG_IMAGE_BASE}/old-money-hero.png`,
    href: "/old-money-aesthetic",
    category: "Fashion Aesthetic"
  },
  {
    title: "Quiet Luxury Style Guide",
    description: "Understated elegance that whispers wealth rather than shouts it.",
    image: `${BLOG_IMAGE_BASE}/quiet-luxury-hero.png`,
    href: "/quiet-luxury-style",
    category: "Fashion Aesthetic"
  },
  {
    title: "Office Siren Aesthetic",
    description: "The viral TikTok trend combining corporate polish with seductive elegance.",
    image: `${BLOG_IMAGE_BASE}/office-siren-hero.png`,
    href: "/office-siren-aesthetic",
    category: "Fashion Aesthetic"
  },
  {
    title: "Coquette Aesthetic",
    description: "Feminine, flirty, and romantic style inspired by bows, lace, and all things girly.",
    image: `${BLOG_IMAGE_BASE}/coquette-hero.png`,
    href: "/coquette-aesthetic",
    category: "Fashion Aesthetic"
  },
  // Style Guides
  {
    title: "How to Find Your Personal Style",
    description: "A step-by-step guide to discovering your unique fashion identity.",
    image: `${BLOG_IMAGE_BASE}/personal-style-hero.png`,
    href: "/find-your-personal-style",
    category: "Style Guide"
  },
  {
    title: "How to Build a Capsule Wardrobe",
    description: "Create a versatile wardrobe with fewer pieces that work harder for you.",
    image: `${BLOG_IMAGE_BASE}/capsule-hero.png`,
    href: "/capsule-wardrobe",
    category: "Style Guide"
  },
  {
    title: "What to Wear to a Job Interview",
    description: "Professional outfit ideas for every industry and interview type.",
    image: `${BLOG_IMAGE_BASE}/interview-hero.png`,
    href: "/what-to-wear-job-interview",
    category: "Style Guide"
  },
  {
    title: "Wedding Guest Outfit Ideas",
    description: "What to wear to weddings - from beach ceremonies to black tie events.",
    image: `${BLOG_IMAGE_BASE}/wedding-guest-hero.png`,
    href: "/wedding-guest-outfits",
    category: "Style Guide"
  },
  // Technology & Trends
  {
    title: "Can You Try On Clothes Online?",
    description: "The honest truth about virtual try-on. It's not perfect, but it helps you see how outfits look on you before buying.",
    image: `${BLOG_IMAGE_BASE}/virtual-tryon-hero.png`,
    href: "/try-on-clothes-online",
    category: "Shopping Tech"
  },
  {
    title: "Virtual Try-On Guide 2026",
    description: "Everything you need to know about virtual try-on technology and how to shop online confidently.",
    image: `${BLOG_IMAGE_BASE}/virtual-tryon-hero.png`,
    href: "/virtual-try-on-guide",
    category: "Shopping Tech"
  },
  {
    title: "Spring 2025 Fashion Trends",
    description: "The biggest fashion trends for Spring 2025 - from runway to real life.",
    image: `${BLOG_IMAGE_BASE}/spring-2025-hero.png`,
    href: "/spring-2025-fashion-trends",
    category: "Fashion Trends"
  },
  {
    title: "AI Fashion Shopping: How Smart Tech is Changing Everything",
    description: "Discover how AI is revolutionizing fashion shopping - from body type matching to personalized recommendations.",
    image: `${BLOG_IMAGE_BASE}/ai-fashion-hero.png`,
    href: "/ai-fashion-shopping",
    category: "Shopping Tech"
  },
  {
    title: "Online Dressing Room: Try Clothes Virtually",
    description: "How virtual fitting rooms work and why they're changing online shopping forever.",
    image: `${BLOG_IMAGE_BASE}/dressing-room-hero.png`,
    href: "/online-dressing-room",
    category: "Shopping Tech"
  },
  {
    title: "Smart Shopping: Price Tracking & Universal Wishlist",
    description: "Master price tracking, sale alerts, and universal wishlists. Save money and never miss a deal.",
    image: `${BLOG_IMAGE_BASE}/smart-shopping-hero.png`,
    href: "/smart-shopping-tools",
    category: "Shopping Tech"
  },
  {
    title: "Does This Suit Me? AI Style Matching Explained",
    description: "How AI tells you if clothes flatter your body type and skin tone before you buy.",
    image: `${BLOG_IMAGE_BASE}/style-match-hero.png`,
    href: "/does-this-suit-me",
    category: "Shopping Tech"
  },
  {
    title: "Future of Online Shopping 2026",
    description: "AI stylists, virtual try-on, AR mirrors - what's coming next for fashion tech.",
    image: `${BLOG_IMAGE_BASE}/future-shopping-hero.png`,
    href: "/future-online-shopping",
    category: "Shopping Tech"
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
