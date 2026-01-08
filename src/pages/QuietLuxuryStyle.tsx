import React from "react";
import { Link } from "react-router-dom";
import ExtensionCTA from "../components/ExtensionCTA";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const QuietLuxuryStyle = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Quiet Luxury Style Guide: Stealth Wealth Fashion 2026"
        description="Master quiet luxury fashion with our complete guide. Learn the art of understated elegance, stealth wealth dressing, and how to build a timeless wardrobe."
        keywords="quiet luxury, stealth wealth, old money style, understated fashion, minimalist luxury, quiet luxury brands, capsule wardrobe, timeless style"
        canonicalUrl="/quiet-luxury-style"
        ogImage="/quiet-luxury-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-10-20",
          modifiedTime: "2026-01-06",
          section: "Fashion Aesthetics",
          tags: ["quiet luxury", "stealth wealth", "minimalist fashion", "timeless style"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Quiet Luxury Style", url: "/quiet-luxury-style" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-stone-100 to-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-stone-200 text-stone-800 rounded-full text-sm font-medium mb-6">
              Fashion Aesthetic
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Quiet Luxury{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #8B7355, #2F4F4F)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Style Guide
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The complete guide to quiet luxury fashion - understated elegance that whispers wealth rather than shouts it. Master the art of stealth wealth dressing in 2026.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/quiet-luxury-hero.png`}
              alt="Quiet luxury style guide featuring understated elegant fashion"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* What is Quiet Luxury Section */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Quiet Luxury? Understanding the Stealth Wealth Phenomenon</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Quiet luxury, also known as stealth wealth, is a fashion philosophy that prioritizes understated elegance over ostentatious displays of wealth. Unlike traditional luxury fashion that relies on prominent logos and recognizable designer patterns, quiet luxury focuses on exceptional quality, impeccable craftsmanship, and timeless design that only those "in the know" can truly appreciate.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The term gained massive popularity following the success of HBO's "Succession," where characters like Shiv Roy and Kendall Roy showcased wardrobes worth thousands of dollars without a single visible logo. This aesthetic represents a shift away from the logo-heavy fashion of the 2010s toward a more refined, sophisticated approach to dressing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At its core, quiet luxury is about investing in pieces that will last for years, if not decades. It's the cashmere sweater that feels like a cloud, the perfectly tailored trousers that fit like they were made for you, and the leather bag that ages beautifully over time. The philosophy extends beyond just clothing - it's a mindset that values quality over quantity, craftsmanship over trends, and discretion over display.
            </p>

            <div className="bg-gradient-to-r from-stone-50 to-neutral-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Philosophy Behind Stealth Wealth</h3>
              <p className="text-gray-700 mb-4">
                Stealth wealth dressing communicates success without the need for external validation. Those who embrace this aesthetic understand that true luxury doesn't need to announce itself - it simply exists in the quality of the fabric, the precision of the stitching, and the perfect drape of a garment.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What Quiet Luxury IS:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>- Investment in exceptional quality</li>
                    <li>- Timeless, classic silhouettes</li>
                    <li>- Impeccable fit and tailoring</li>
                    <li>- Natural, luxurious fabrics</li>
                    <li>- Understated color palettes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What Quiet Luxury IS NOT:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>- Logo-covered designer items</li>
                    <li>- Flashy or trendy pieces</li>
                    <li>- Fast fashion regardless of price</li>
                    <li>- Statement pieces for attention</li>
                    <li>- Synthetic or low-quality materials</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Key Elements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Elements of the Quiet Luxury Aesthetic</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Understanding the fundamental elements of quiet luxury will help you curate a wardrobe that exudes sophistication and refinement without trying too hard.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-stone-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Exceptional Fabric Quality</h3>
              <p className="text-gray-700 mb-4">
                The foundation of quiet luxury lies in premium fabrics. Look for cashmere, silk, merino wool, fine cotton, and quality leather. These materials not only feel luxurious against the skin but also drape beautifully and age gracefully over time.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>- 100% cashmere over cashmere blends</li>
                <li>- Silk charmeuse and crepe de chine</li>
                <li>- Super 120s wool or higher</li>
                <li>- Full-grain leather goods</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-stone-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Impeccable Tailoring and Fit</h3>
              <p className="text-gray-700 mb-4">
                Nothing screams quiet luxury more than perfectly fitted clothing. The wealthy have long understood that tailoring transforms even modest pieces into sophisticated garments. Every seam should lie flat, every hem should hit at the right point.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>- Shoulders that align perfectly</li>
                <li>- Trousers that break correctly</li>
                <li>- Blazers that follow body contours</li>
                <li>- Dresses that skim, not cling</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-stone-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Absence of Visible Branding</h3>
              <p className="text-gray-700 mb-4">
                The hallmark of quiet luxury is the complete absence of logos and obvious designer identifiers. True connoisseurs recognize quality through fabric, construction, and silhouette - not through monograms or signature patterns.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>- No visible logos or monograms</li>
                <li>- Subtle hardware in gold or silver</li>
                <li>- Clean, unadorned surfaces</li>
                <li>- Quality speaks for itself</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-stone-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Timeless Over Trendy</h3>
              <p className="text-gray-700 mb-4">
                Quiet luxury rejects the fast fashion cycle in favor of pieces that transcend seasons. The goal is to build a wardrobe of investment pieces that remain relevant and stylish for years, even decades.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>- Classic silhouettes that never date</li>
                <li>- Neutral colors as the foundation</li>
                <li>- Versatile pieces for multiple occasions</li>
                <li>- Quality that improves with age</li>
              </ul>
            </div>
          </div>

          <div className="bg-stone-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">The "If You Know, You Know" Factor</h3>
            <p className="text-gray-700 text-center">
              Quiet luxury creates an exclusive form of recognition. When someone spots your unbranded Loro Piana cardigan or recognizes the distinctive cut of The Row's trousers, it creates a subtle connection between those who appreciate true quality. This "IYKYK" (If You Know, You Know) element is central to the aesthetic's appeal.
            </p>
          </div>
        </div>
      </section>

      {/* Building Your Wardrobe Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Building a Quiet Luxury Wardrobe: Essential Pieces</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Creating a quiet luxury wardrobe is about strategic investment in versatile, high-quality pieces that work seamlessly together. Here are the essential items every quiet luxury wardrobe needs. For more guidance on building a versatile wardrobe, check out our <Link to="/capsule-wardrobe" className="text-stone-600 hover:text-stone-800 underline">capsule wardrobe guide</Link>.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tops and Knitwear</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">1.</span>
                  <div>
                    <span className="font-medium">Cashmere Crewneck Sweater</span>
                    <p className="text-sm text-gray-600">The cornerstone of quiet luxury - invest in 2-ply or 4-ply cashmere in neutral tones</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">2.</span>
                  <div>
                    <span className="font-medium">Silk Button-Down Blouse</span>
                    <p className="text-sm text-gray-600">Look for heavy silk (19+ momme) that drapes beautifully and resists wrinkling</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">3.</span>
                  <div>
                    <span className="font-medium">Fine Gauge Merino Turtleneck</span>
                    <p className="text-sm text-gray-600">Essential for layering, choose extra-fine merino for a refined appearance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">4.</span>
                  <div>
                    <span className="font-medium">Cotton Poplin Shirt</span>
                    <p className="text-sm text-gray-600">Crisp, clean, and versatile - the foundation of effortless elegance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">5.</span>
                  <div>
                    <span className="font-medium">Cashmere Cardigan</span>
                    <p className="text-sm text-gray-600">Perfect for layering and creating polished, put-together looks</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bottoms</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">1.</span>
                  <div>
                    <span className="font-medium">Wool Tailored Trousers</span>
                    <p className="text-sm text-gray-600">Wide-leg or straight-leg in camel, navy, or charcoal - have them tailored perfectly</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">2.</span>
                  <div>
                    <span className="font-medium">High-Quality Dark Denim</span>
                    <p className="text-sm text-gray-600">Japanese selvedge or premium Italian denim with no distressing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">3.</span>
                  <div>
                    <span className="font-medium">Silk or Wool Midi Skirt</span>
                    <p className="text-sm text-gray-600">A-line or pencil silhouette in timeless neutral tones</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">4.</span>
                  <div>
                    <span className="font-medium">Linen Trousers</span>
                    <p className="text-sm text-gray-600">Essential for warm weather elegance - embrace the natural creasing</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Outerwear</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">1.</span>
                  <div>
                    <span className="font-medium">Camel Wool Coat</span>
                    <p className="text-sm text-gray-600">The ultimate quiet luxury statement piece - look for double-faced wool</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">2.</span>
                  <div>
                    <span className="font-medium">Navy Wool Blazer</span>
                    <p className="text-sm text-gray-600">Unstructured or lightly structured, perfect for elevating any outfit</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">3.</span>
                  <div>
                    <span className="font-medium">Cotton Trench Coat</span>
                    <p className="text-sm text-gray-600">A timeless investment in classic khaki or sophisticated black</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">4.</span>
                  <div>
                    <span className="font-medium">Cashmere Wrap or Cape</span>
                    <p className="text-sm text-gray-600">Elegant layering piece for travel and transitional weather</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Footwear and Accessories</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">1.</span>
                  <div>
                    <span className="font-medium">Leather Loafers</span>
                    <p className="text-sm text-gray-600">Penny or horsebit style in black or cognac - the quiet luxury shoe</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">2.</span>
                  <div>
                    <span className="font-medium">Structured Leather Tote</span>
                    <p className="text-sm text-gray-600">Clean lines, no logos, quality leather that develops patina</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">3.</span>
                  <div>
                    <span className="font-medium">Simple Gold Jewelry</span>
                    <p className="text-sm text-gray-600">Delicate chains, small hoops, classic watch - understated elegance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">4.</span>
                  <div>
                    <span className="font-medium">Leather Belt</span>
                    <p className="text-sm text-gray-600">Simple buckle, quality leather - functional and refined</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">The Quiet Luxury Color Palette: Embracing Neutrals</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            The quiet luxury palette is intentionally restrained, focusing on sophisticated neutrals that create a cohesive, elegant wardrobe. These colors are timeless, easy to mix and match, and always look expensive. Learn more about finding colors that flatter you in our <Link to="/what-colors-suit-me" className="text-stone-600 hover:text-stone-800 underline">color analysis guide</Link>.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Core Neutral Colors</h3>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-8">
              {[
                { name: "Cream", hex: "#FFFDD0", description: "Soft, warm white" },
                { name: "Camel", hex: "#C19A6B", description: "The signature quiet luxury shade" },
                { name: "Navy", hex: "#000080", description: "Sophisticated alternative to black" },
                { name: "Black", hex: "#000000", description: "Timeless foundation" },
                { name: "White", hex: "#FFFFFF", description: "Crisp and clean" },
                { name: "Charcoal", hex: "#36454F", description: "Elevated gray" },
                { name: "Taupe", hex: "#483C32", description: "Warm, earthy neutral" },
                { name: "Oatmeal", hex: "#D9CAB3", description: "Soft, natural tone" }
              ].map((color) => (
                <div key={color.name} className="text-center">
                  <div
                    className="w-full aspect-square rounded-lg shadow-sm border border-gray-200 mb-2"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-sm font-medium text-gray-900 block">{color.name}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Accent Colors (Use Sparingly)</h3>
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4 max-w-2xl mx-auto">
              {[
                { name: "Burgundy", hex: "#722F37" },
                { name: "Forest", hex: "#228B22" },
                { name: "Chocolate", hex: "#7B3F00" },
                { name: "Slate Blue", hex: "#6A5ACD" },
                { name: "Dusty Rose", hex: "#DCAE96" },
                { name: "Olive", hex: "#808000" }
              ].map((color) => (
                <div key={color.name} className="text-center">
                  <div
                    className="w-full aspect-square rounded-lg shadow-sm border border-gray-200 mb-2"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-xs text-gray-700 block">{color.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4">Why Neutrals Work</h4>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">-</span>
                  Every piece works with every other piece
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">-</span>
                  Neutrals never go out of style
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">-</span>
                  Quality fabrics shine in solid colors
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">-</span>
                  Creates an instantly polished look
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">-</span>
                  Easy to dress up or down
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4">Color Combinations That Work</h4>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">-</span>
                  Camel + cream + navy (classic combo)
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">-</span>
                  All black (elegant and easy)
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">-</span>
                  Charcoal + white + burgundy accent
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">-</span>
                  Oatmeal + taupe + chocolate
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">-</span>
                  Navy + cream + camel accessories
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Brands That Embody Quiet Luxury</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            From ultra-high-end to accessible alternatives, these brands understand the quiet luxury philosophy. We have organized them by price point to help you build your wardrobe at any budget.
          </p>

          <div className="space-y-8">
            <div className="bg-stone-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">High-End Quiet Luxury Brands</h3>
              <p className="text-gray-600 mb-6">Investment pieces that define the aesthetic - expect to pay premium prices for exceptional quality</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">The Icons</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-stone-500 mr-2 font-bold">-</span>
                      <div>
                        <span className="font-medium">The Row</span>
                        <p className="text-sm text-gray-600">Mary-Kate and Ashley Olsen's brand - the epitome of quiet luxury</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-stone-500 mr-2 font-bold">-</span>
                      <div>
                        <span className="font-medium">Loro Piana</span>
                        <p className="text-sm text-gray-600">Italian heritage brand known for the finest cashmere and wool</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-stone-500 mr-2 font-bold">-</span>
                      <div>
                        <span className="font-medium">Brunello Cucinelli</span>
                        <p className="text-sm text-gray-600">Humanistic capitalism meets exceptional Italian craftsmanship</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-stone-500 mr-2 font-bold">-</span>
                      <div>
                        <span className="font-medium">Bottega Veneta</span>
                        <p className="text-sm text-gray-600">Known for intrecciato weave - luxury that needs no logo</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Designer Favorites</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-stone-500 mr-2 font-bold">-</span>
                      <div>
                        <span className="font-medium">Jil Sander</span>
                        <p className="text-sm text-gray-600">Minimalist design, maximum impact</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-stone-500 mr-2 font-bold">-</span>
                      <div>
                        <span className="font-medium">Max Mara</span>
                        <p className="text-sm text-gray-600">Iconic coats and refined Italian tailoring</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-stone-500 mr-2 font-bold">-</span>
                      <div>
                        <span className="font-medium">Khaite</span>
                        <p className="text-sm text-gray-600">American luxury with effortless elegance</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-stone-500 mr-2 font-bold">-</span>
                      <div>
                        <span className="font-medium">Toteme</span>
                        <p className="text-sm text-gray-600">Scandinavian minimalism at its finest</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable Quiet Luxury Alternatives</h3>
              <p className="text-gray-600 mb-6">Get the look without the luxury price tag - these brands offer quality basics at accessible prices</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Best Value Options</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-stone-500 mr-2 font-bold">-</span>
                      <div>
                        <span className="font-medium">COS</span>
                        <p className="text-sm text-gray-600">H&M's elevated brand - excellent quality for the price</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-stone-500 mr-2 font-bold">-</span>
                      <div>
                        <span className="font-medium">Arket</span>
                        <p className="text-sm text-gray-600">Scandinavian simplicity with attention to materials</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-stone-500 mr-2 font-bold">-</span>
                      <div>
                        <span className="font-medium">Uniqlo</span>
                        <p className="text-sm text-gray-600">Exceptional basics, especially cashmere and heattech</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-stone-500 mr-2 font-bold">-</span>
                      <div>
                        <span className="font-medium">Massimo Dutti</span>
                        <p className="text-sm text-gray-600">Zara's sophisticated sibling with better quality</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Online Direct-to-Consumer</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-stone-500 mr-2 font-bold">-</span>
                      <div>
                        <span className="font-medium">Quince</span>
                        <p className="text-sm text-gray-600">Luxury materials at transparent pricing</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-stone-500 mr-2 font-bold">-</span>
                      <div>
                        <span className="font-medium">Everlane</span>
                        <p className="text-sm text-gray-600">Radical transparency and quality basics</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-stone-500 mr-2 font-bold">-</span>
                      <div>
                        <span className="font-medium">J.Crew</span>
                        <p className="text-sm text-gray-600">American classic style with quality construction</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-stone-500 mr-2 font-bold">-</span>
                      <div>
                        <span className="font-medium">Cuyana</span>
                        <p className="text-sm text-gray-600">"Fewer, better" philosophy with elegant leather goods</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Guide Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How to Spot Quality: Fabrics and Construction</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            To truly embrace quiet luxury, you need to develop an eye for quality. Here is how to evaluate garments like a professional stylist and ensure you are investing in pieces that will last.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fabric Quality Indicators</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">1.</span>
                  <div>
                    <span className="font-medium">Weight and Drape</span>
                    <p className="text-sm text-gray-600">Quality fabrics have substance and drape beautifully - they do not feel flimsy or stiff</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">2.</span>
                  <div>
                    <span className="font-medium">Touch Test</span>
                    <p className="text-sm text-gray-600">Quality cashmere feels buttery; quality cotton feels crisp yet soft; quality silk feels substantial</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">3.</span>
                  <div>
                    <span className="font-medium">Recovery</span>
                    <p className="text-sm text-gray-600">Gently scrunch the fabric - quality materials bounce back without permanent creasing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">4.</span>
                  <div>
                    <span className="font-medium">Light Test</span>
                    <p className="text-sm text-gray-600">Hold fabric up to light - quality materials have consistent, dense weave without thin spots</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Construction Details to Check</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">1.</span>
                  <div>
                    <span className="font-medium">Seam Allowances</span>
                    <p className="text-sm text-gray-600">Turn the garment inside out - generous seam allowances indicate quality construction</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">2.</span>
                  <div>
                    <span className="font-medium">Stitching Consistency</span>
                    <p className="text-sm text-gray-600">Look for even, straight stitches with no loose threads or puckering</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">3.</span>
                  <div>
                    <span className="font-medium">Pattern Matching</span>
                    <p className="text-sm text-gray-600">Stripes and patterns should align perfectly at seams - a sign of careful cutting</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 font-bold">4.</span>
                  <div>
                    <span className="font-medium">Button Quality</span>
                    <p className="text-sm text-gray-600">Look for mother of pearl, horn, or quality resin - plastic buttons indicate lower quality</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-stone-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Fabric Guide: What to Look For</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cashmere</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>- 2-ply or 4-ply weight</li>
                  <li>- Mongolian or Scottish origin</li>
                  <li>- No pilling after gentle rub</li>
                  <li>- Grade A fibers preferred</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Wool</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>- Super 100s+ for suits</li>
                  <li>- Merino for knitwear</li>
                  <li>- Double-faced for coats</li>
                  <li>- Italian or British mills</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Silk</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>- 19+ momme weight</li>
                  <li>- Charmeuse or crepe de chine</li>
                  <li>- Smooth, no snags</li>
                  <li>- Rich, even color</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Quiet Luxury vs Old Money Aesthetic: What is the Difference?</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            While often used interchangeably, quiet luxury and the <Link to="/old-money-aesthetic" className="text-stone-600 hover:text-stone-800 underline">old money aesthetic</Link> have subtle but important differences. Understanding these distinctions will help you define your personal style.
          </p>

          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-gray-50 rounded-2xl overflow-hidden">
              <thead className="bg-stone-200">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Aspect</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Quiet Luxury</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Old Money Aesthetic</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Origin</td>
                  <td className="px-6 py-4 text-gray-700">Modern minimalist movement, popularized 2020s</td>
                  <td className="px-6 py-4 text-gray-700">Rooted in generational wealth, prep school traditions</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Key Pieces</td>
                  <td className="px-6 py-4 text-gray-700">Cashmere, silk blouses, tailored trousers</td>
                  <td className="px-6 py-4 text-gray-700">Cable knits, blazers, tennis skirts, loafers</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Aesthetic Mood</td>
                  <td className="px-6 py-4 text-gray-700">Urban sophistication, modern minimalism</td>
                  <td className="px-6 py-4 text-gray-700">Country club, Ivy League, European nobility</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Brand Focus</td>
                  <td className="px-6 py-4 text-gray-700">The Row, Loro Piana, contemporary designers</td>
                  <td className="px-6 py-4 text-gray-700">Ralph Lauren, Barbour, heritage brands</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Color Palette</td>
                  <td className="px-6 py-4 text-gray-700">Muted neutrals, camel, cream, charcoal</td>
                  <td className="px-6 py-4 text-gray-700">Navy, forest green, burgundy, tartans</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Accessories</td>
                  <td className="px-6 py-4 text-gray-700">Minimal gold jewelry, clean-lined bags</td>
                  <td className="px-6 py-4 text-gray-700">Pearls, silk scarves, monogrammed items</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-stone-50 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">When to Choose Quiet Luxury</h4>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">-</span>
                  You prefer modern, minimalist aesthetics
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">-</span>
                  You live in an urban environment
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">-</span>
                  You want versatile pieces for work and leisure
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">-</span>
                  You appreciate contemporary designers
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">When to Choose Old Money</h4>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">-</span>
                  You love preppy, classic American style
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">-</span>
                  You appreciate heritage and tradition
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">-</span>
                  You enjoy country club and coastal aesthetics
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2">-</span>
                  You prefer established, legacy brands
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions About Quiet Luxury</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What is the difference between quiet luxury and minimalism?</h3>
              <p className="text-gray-700">
                While both aesthetics favor simplicity, quiet luxury specifically emphasizes high-quality materials and craftsmanship. Minimalism focuses on owning less regardless of quality, while quiet luxury is about owning fewer but exceptionally well-made items. You can be a minimalist with affordable basics, but quiet luxury specifically requires investment in premium materials and construction.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can you achieve quiet luxury on a budget?</h3>
              <p className="text-gray-700">
                Yes, to an extent. Focus on building a <Link to="/capsule-wardrobe" className="text-stone-600 hover:text-stone-800 underline">capsule wardrobe</Link> of fewer, better pieces. Shop brands like COS, Uniqlo, and Quince for quality basics. Invest in tailoring to ensure perfect fit. Buy secondhand from luxury consignment stores. Prioritize one high-quality item at a time rather than multiple cheaper alternatives.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What makes The Row the ultimate quiet luxury brand?</h3>
              <p className="text-gray-700">
                The Row, founded by Mary-Kate and Ashley Olsen, embodies quiet luxury through exceptional fabric sourcing, meticulous construction, and timeless silhouettes. Their pieces feature no visible branding, focus on perfect proportions, and use materials like vicuna and double-faced cashmere. While expensive, each piece is designed to last decades.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I transition from fast fashion to quiet luxury?</h3>
              <p className="text-gray-700">
                Start by auditing your current wardrobe and identifying gaps. Instead of buying multiple trend pieces, save for one quality item at a time. Begin with versatile basics like a cashmere sweater or tailored trousers. Learn to recognize quality fabrics and construction. Embrace the mindset of buying less but buying better - it is a gradual shift in habits.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Is quiet luxury only for women?</h3>
              <p className="text-gray-700">
                Absolutely not. Quiet luxury for men includes the same principles: quality cashmere sweaters, well-tailored wool trousers, premium leather goods, and unbranded luxury items. Brands like Loro Piana, Zegna, and Brunello Cucinelli offer extensive menswear collections. The key is the same - exceptional quality without obvious logos.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Why has quiet luxury become so popular?</h3>
              <p className="text-gray-700">
                Several factors contributed to the rise of quiet luxury: economic uncertainty making flashy displays less appropriate, the "Succession" effect showcasing stealth wealth on screen, a backlash against logo-heavy fashion, growing awareness of sustainability and quality, and a shift toward more sophisticated, adult aesthetics post-pandemic.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I care for quiet luxury pieces to make them last?</h3>
              <p className="text-gray-700">
                Proper care is essential. Hand wash or dry clean cashmere; store knitwear folded, not hung. Use cedar blocks to protect woolens. Keep leather goods stuffed and away from direct sunlight. Steam rather than iron silk when possible. Follow care labels meticulously. Quality pieces can last decades with proper maintenance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What shoes work best for quiet luxury style?</h3>
              <p className="text-gray-700">
                Classic leather loafers (penny or horsebit style) are the quintessential quiet luxury shoe. Other options include simple leather pumps with minimal hardware, quality ballet flats, clean leather boots, and understated sneakers in white or neutral leather. Avoid logos, chunky platforms, and trendy styles. Focus on quality leather and timeless silhouettes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Continue Your Style Journey</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/old-money-aesthetic" className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Old Money Aesthetic</h4>
              <p className="text-sm text-gray-600">Explore the preppy, heritage-inspired style that complements quiet luxury</p>
            </Link>
            <Link to="/capsule-wardrobe" className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Capsule Wardrobe Guide</h4>
              <p className="text-sm text-gray-600">Learn how to build a minimalist wardrobe with versatile pieces</p>
            </Link>
            <Link to="/what-colors-suit-me" className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Find Your Best Colors</h4>
              <p className="text-sm text-gray-600">Discover which neutral tones flatter your skin tone the most</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Aesthetics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore Similar Aesthetics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/old-money-aesthetic" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-stone-600">Old Money Aesthetic</h3>
              <p className="text-gray-600 text-sm">Timeless elegance and classic sophistication.</p>
            </Link>
            <Link to="/clean-girl-aesthetic" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-stone-600">Clean Girl Aesthetic</h3>
              <p className="text-gray-600 text-sm">Minimalist beauty and effortless style.</p>
            </Link>
            <Link to="/office-siren-aesthetic" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-stone-600">Office Siren Aesthetic</h3>
              <p className="text-gray-600 text-sm">Powerful and polished workwear style.</p>
            </Link>
            <Link to="/coquette-aesthetic" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-stone-600">Coquette Aesthetic</h3>
              <p className="text-gray-600 text-sm">Feminine bows, lace, and romantic details.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-stone-100 to-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Build Your Quiet Luxury Wardrobe
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius helps you find timeless, quality pieces at every price point. Get personalized recommendations based on your body type and skin tone - so every investment piece is perfect for you.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-stone-100 to-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Color Match</h4>
                  <p className="text-sm text-gray-600">Find the perfect neutral tones that flatter your unique coloring</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-stone-100 to-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Virtual Try-On</h4>
                  <p className="text-sm text-gray-600">See how investment pieces look on you before purchasing</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-stone-100 to-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Price Tracking</h4>
                  <p className="text-sm text-gray-600">Get alerts when quality pieces from top brands go on sale</p>
                </div>
              </div>
            </div>

            <ExtensionCTA />
            <p className="text-sm text-gray-500 mt-4">Works on Zara, H&M, ASOS, COS, Massimo Dutti, and 1000+ more stores</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuietLuxuryStyle;
