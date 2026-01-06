import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const FindYourPersonalStyle = () => {
  const styleArchetypes = [
    {
      name: "Minimalist",
      description: "Clean lines, neutral palettes, and timeless pieces define this aesthetic. You believe that less is more and prefer quality over quantity.",
      keyPieces: ["White button-down shirts", "Well-fitted blazers", "Tailored trousers", "Simple leather accessories"],
      colors: ["Black", "White", "Navy", "Camel", "Grey"],
      icons: "Carolyn Bessette-Kennedy, Sofia Coppola, The Row"
    },
    {
      name: "Romantic",
      description: "Soft textures, flowing fabrics, and feminine details characterize your wardrobe. You gravitate toward delicate prints, lace, and flattering silhouettes.",
      keyPieces: ["Floral dresses", "Silk blouses", "A-line skirts", "Delicate jewelry"],
      colors: ["Blush pink", "Soft lavender", "Cream", "Rose", "Dusty blue"],
      icons: "Grace Kelly, Taylor Swift, Selena Gomez"
    },
    {
      name: "Edgy",
      description: "Bold statements, unexpected combinations, and a rebellious spirit define your look. You are not afraid to stand out and push boundaries.",
      keyPieces: ["Leather jackets", "Combat boots", "Graphic tees", "Statement accessories"],
      colors: ["Black", "Deep red", "Silver", "Charcoal", "Burgundy"],
      icons: "Zoe Kravitz, Rihanna, Bella Hadid"
    },
    {
      name: "Classic",
      description: "Timeless elegance and sophisticated simplicity guide your choices. You invest in quality pieces that never go out of style.",
      keyPieces: ["Tailored blazers", "Pencil skirts", "Pearl jewelry", "Structured handbags"],
      colors: ["Navy", "Ivory", "Camel", "Burgundy", "Forest green"],
      icons: "Audrey Hepburn, Kate Middleton, Amal Clooney"
    },
    {
      name: "Bohemian",
      description: "Free-spirited and artistic, you embrace flowing fabrics, ethnic prints, and natural textures. Your style tells a story of travel and creativity.",
      keyPieces: ["Maxi dresses", "Fringe details", "Layered jewelry", "Embroidered pieces"],
      colors: ["Terracotta", "Mustard", "Olive", "Burnt orange", "Teal"],
      icons: "Sienna Miller, Vanessa Hudgens, Florence Welch"
    },
    {
      name: "Preppy",
      description: "Polished and put-together, you favor classic American style with a collegiate twist. Think country clubs and Ivy League campuses.",
      keyPieces: ["Polo shirts", "Cable-knit sweaters", "Pleated skirts", "Loafers"],
      colors: ["Navy", "Kelly green", "Red", "White", "Pink"],
      icons: "Blake Lively, Reese Witherspoon, Princess Diana"
    },
    {
      name: "Athleisure",
      description: "You blend comfort with style, creating effortlessly cool looks that transition from workout to weekend. Function meets fashion in your wardrobe.",
      keyPieces: ["High-quality leggings", "Oversized hoodies", "Clean sneakers", "Bomber jackets"],
      colors: ["Black", "Grey", "White", "Neon accents", "Earth tones"],
      icons: "Kendall Jenner, Hailey Bieber, Gigi Hadid"
    },
    {
      name: "Glamorous",
      description: "You dress to impress and love making an entrance. Sparkle, shine, and statement pieces are your signature elements.",
      keyPieces: ["Sequin pieces", "Statement earrings", "Body-con dresses", "High heels"],
      colors: ["Gold", "Silver", "Emerald", "Ruby red", "Black"],
      icons: "Jennifer Lopez, Beyonce, Zendaya"
    }
  ];

  const commonMistakes = [
    {
      mistake: "Following Every Trend",
      explanation: "Trends are fun to experiment with, but blindly following every viral fashion moment leads to a disjointed wardrobe full of pieces that do not work together. Instead, filter trends through your personal style lens and only adopt those that genuinely resonate with your aesthetic.",
      solution: "Before buying a trendy item, ask yourself: Would I still wear this if it was not trendy? Does it fit with at least three pieces I already own?"
    },
    {
      mistake: "Ignoring Your Body Type",
      explanation: "Wearing clothes that do not flatter your figure, regardless of how stylish they look on others, will never make you feel confident. Understanding your body proportions is essential for building a wardrobe that works for you.",
      solution: "Learn your body type and embrace silhouettes that highlight your best features. This does not mean hiding parts of yourself, but rather dressing in a way that makes you feel balanced and confident."
    },
    {
      mistake: "Neglecting Fit and Tailoring",
      explanation: "Even the most expensive designer piece will look cheap if it does not fit properly. Many people overlook the transformative power of good tailoring, settling for clothes that almost fit.",
      solution: "Invest in alterations for key pieces. A well-fitted item from a budget brand will always look better than an ill-fitting luxury piece."
    },
    {
      mistake: "Shopping Without a Plan",
      explanation: "Impulse buying leads to a closet full of random pieces that do not work together. Without a clear vision of your personal style, you end up with wardrobe chaos.",
      solution: "Create a shopping list based on gaps in your wardrobe and stick to it. Always consider how a new piece will integrate with what you already own."
    },
    {
      mistake: "Dressing for Someone Else",
      explanation: "Whether it is trying to impress a partner, fit in at work, or match a friend group, dressing to please others rather than yourself leads to dissatisfaction and a disconnected relationship with your wardrobe.",
      solution: "Your style should reflect your authentic self. While dressing appropriately for different contexts is important, your personality should always shine through."
    },
    {
      mistake: "Sticking Only to Safe Choices",
      explanation: "Playing it too safe with only black, white, and beige means missing out on colors and styles that could make you look incredible. Fear of standing out often holds people back from discovering their true style potential.",
      solution: "Gradually experiment with new colors, patterns, or silhouettes. Start with accessories or a single statement piece to build confidence."
    }
  ];

  const faqItems = [
    {
      question: "How long does it take to find your personal style?",
      answer: "Finding your personal style is a journey, not a destination. Most people need several months to a year of conscious experimentation and refinement. The key is to approach it as an ongoing evolution rather than a one-time achievement. Your style will continue to develop as you grow and change throughout your life."
    },
    {
      question: "Can I have more than one personal style?",
      answer: "Absolutely! Many people have what is called a style blend, combining elements from multiple aesthetics. For example, you might be primarily minimalist but incorporate romantic details, or have an edgy base with classic influences. The goal is authenticity, not strict category adherence."
    },
    {
      question: "How do I find my style on a budget?",
      answer: "Start with thrift stores and consignment shops where you can experiment inexpensively. Focus on building a core wardrobe of versatile basics first, then add personality pieces gradually. Learn basic sewing skills for alterations, and utilize clothing swaps with friends."
    },
    {
      question: "What if my lifestyle and style preferences do not match?",
      answer: "This is a common challenge. The solution is to find ways to incorporate your preferred aesthetic into appropriate versions for your lifestyle. If you love glamorous style but work in a casual office, focus on elevated basics with subtle glamorous touches like statement jewelry or a structured bag."
    },
    {
      question: "Should I dress for my age?",
      answer: "Dress for who you are, not a number. Age-appropriate dressing is largely outdated. What matters is wearing clothes that fit well, make you feel confident, and are appropriate for the context. Personal style has no age limit."
    },
    {
      question: "How do I stay true to my style when trends change?",
      answer: "Use trends as inspiration rather than rules. When a new trend emerges, ask yourself if it aligns with your personal aesthetic. If it does, incorporate it in a way that feels authentic. If not, feel free to skip it entirely. Your personal style should be the foundation that trends are filtered through, not replaced by."
    },
    {
      question: "What is the difference between fashion and personal style?",
      answer: "Fashion refers to current trends and what is popular in the industry at any given time. Personal style is your unique way of expressing yourself through clothing, regardless of trends. Fashion changes seasonally, but personal style evolves gradually and remains authentically yours."
    },
    {
      question: "How do I know if a piece suits my personal style?",
      answer: "Ask yourself these questions: Does this feel like me? Can I imagine wearing this multiple times? Does it work with other pieces in my wardrobe? Do I feel confident and comfortable in it? If you answer yes to most of these, the piece likely fits your personal style."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="How to Find Your Personal Style: Complete Guide 2025"
        description="Discover your unique personal style with our comprehensive guide. Learn about style archetypes, common mistakes, and how to build a wardrobe you love."
        keywords="find your personal style, personal style quiz, style archetypes, fashion identity, wardrobe personality, style guide, fashion tips"
        canonicalUrl="/find-your-personal-style"
        ogImage="/personal-style-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-10-18",
          modifiedTime: "2026-01-06",
          section: "Style Guides",
          tags: ["personal style", "style guide", "fashion identity", "wardrobe tips"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Find Your Personal Style", url: "/find-your-personal-style" }
        ]}
        faq={faqItems.map(item => ({ question: item.question, answer: item.answer }))}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              How to Find Your{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Personal Style
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The ultimate guide to discovering your unique fashion identity, understanding different style aesthetics, and building a wardrobe that truly reflects who you are.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <img
              src={`${BLOG_IMAGE_BASE}/personal-style-hero.png`}
              alt="Find your personal style guide - woman discovering her unique fashion identity"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* What is Personal Style Section */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Personal Style and Why Does It Matter?</h2>

            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Personal style is far more than just the clothes you wear. It is a visual representation of your personality, values, lifestyle, and the image you want to project to the world. Unlike fashion, which changes with each season and trend cycle, personal style is deeply individual and evolves with you throughout your life.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              When you have a clear sense of your personal style, getting dressed becomes effortless and enjoyable rather than stressful. You no longer stand in front of a full closet feeling like you have nothing to wear. Instead, every piece in your wardrobe works together and reflects who you are authentically.
            </p>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Benefits of Developing Your Personal Style</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2 mt-1">-</span>
                    <span><strong>Increased confidence:</strong> When you wear clothes that feel authentically you, it shows in how you carry yourself</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2 mt-1">-</span>
                    <span><strong>Simplified decisions:</strong> No more morning wardrobe paralysis when everything in your closet works together</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2 mt-1">-</span>
                    <span><strong>Financial savings:</strong> You stop buying random pieces that end up unworn and invest in items you truly love</span>
                  </li>
                </ul>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2 mt-1">-</span>
                    <span><strong>Stronger first impressions:</strong> Your style communicates who you are before you even speak</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2 mt-1">-</span>
                    <span><strong>Self-expression:</strong> Clothing becomes a creative outlet and a form of personal art</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2 mt-1">-</span>
                    <span><strong>Consistency:</strong> You develop a recognizable look that becomes your signature</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Understanding your personal style also connects to knowing your <Link to="/what-colors-suit-me" className="text-pink-500 hover:text-pink-600 underline">best colors</Link> and <Link to="/what-body-type-suits-me" className="text-pink-500 hover:text-pink-600 underline">body type</Link>. When you combine knowledge of what aesthetically suits you with an understanding of what resonates with your personality, you create a powerful style formula that works every time.
            </p>
          </div>
        </div>
      </article>

      {/* Step by Step Guide Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Find Your Personal Style: A Step-by-Step Guide</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discovering your personal style is a journey of self-exploration. Follow these steps to uncover the aesthetic that truly represents you.
          </p>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Create a Comprehensive Style Mood Board</h3>
                  <p className="text-gray-700 mb-4">
                    The foundation of finding your personal style starts with visual research. Spend time collecting images of outfits that speak to you from Pinterest, Instagram, fashion magazines, street style blogs, and even screenshots from movies or TV shows. The key is to save anything that catches your eye without overthinking it.
                  </p>
                  <p className="text-gray-700 mb-4">
                    After gathering at least 50 to 100 images, step back and analyze your collection. Look for recurring patterns that reveal your unconscious preferences:
                  </p>
                  <ul className="text-gray-700 space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">-</span>
                      <span>What colors appear most frequently? Are they muted or vibrant, warm or cool?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">-</span>
                      <span>What silhouettes dominate? Fitted and structured or loose and flowing?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">-</span>
                      <span>Is there a common vibe? Minimal, romantic, edgy, classic, bohemian?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">-</span>
                      <span>What textures and fabrics attract you? Leather, silk, cotton, knitwear?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">-</span>
                      <span>Do you notice any specific accessories or styling details repeating?</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Conduct an Honest Closet Audit</h3>
                  <p className="text-gray-700 mb-4">
                    Your current wardrobe holds valuable clues about your true style preferences. Take everything out and separate your clothes into three categories: pieces you wear constantly, pieces you occasionally wear, and pieces that just hang there gathering dust.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Focus on analyzing your most-worn pieces. These are the items that passed the ultimate test because they made the cut when you had to choose what to wear every single day. Ask yourself:
                  </p>
                  <ul className="text-gray-700 space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">-</span>
                      <span>What do my favorite pieces have in common?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">-</span>
                      <span>Why do I reach for these over others? Is it comfort, confidence, or compliments?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">-</span>
                      <span>What makes these pieces feel like me?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">-</span>
                      <span>How do I feel when I wear them versus other items?</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    Consider building a <Link to="/capsule-wardrobe" className="text-pink-500 hover:text-pink-600 underline">capsule wardrobe</Link> based on these insights to create a more cohesive closet.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Identify Your Lifestyle Requirements</h3>
                  <p className="text-gray-700 mb-4">
                    A dream wardrobe is useless if it does not align with your actual life. Be honest about how you spend your days and what environments you navigate. The most successful personal style balances aspiration with practicality.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Consider these lifestyle factors when defining your style:
                  </p>
                  <ul className="text-gray-700 space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">-</span>
                      <span>What is your work environment? Corporate office, creative space, work from home, outdoor job?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">-</span>
                      <span>How do you spend your free time? Active hobbies, socializing, relaxing at home?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">-</span>
                      <span>What social events do you regularly attend? Brunches, concerts, formal dinners, casual hangouts?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">-</span>
                      <span>What is your climate? Do you need clothes for multiple seasons or primarily one?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">-</span>
                      <span>Do you have any physical requirements? Comfort for long hours, ease of movement, practicality for parenting?</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Understand Your Body and Coloring</h3>
                  <p className="text-gray-700 mb-4">
                    Knowing what physically flatters you is an essential piece of the personal style puzzle. This is not about hiding parts of yourself or conforming to arbitrary standards. It is about understanding the principles of proportion, color harmony, and fit so you can use them to your advantage.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Key areas to explore include:
                  </p>
                  <ul className="text-gray-700 space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">-</span>
                      <span><Link to="/hourglass-body-type" className="text-pink-500 hover:text-pink-600 underline">Your body type</Link> and which silhouettes create the most flattering proportions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">-</span>
                      <span><Link to="/what-season-am-i" className="text-pink-500 hover:text-pink-600 underline">Your color season</Link> and the palette that makes your skin glow</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">-</span>
                      <span>Your undertone (warm, cool, or neutral) and how it affects which colors suit you</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">-</span>
                      <span>Your contrast level and how to balance colors and patterns accordingly</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    Understanding body types like <Link to="/pear-body-shape" className="text-pink-500 hover:text-pink-600 underline">pear</Link>, <Link to="/apple-body-shape" className="text-pink-500 hover:text-pink-600 underline">apple</Link>, <Link to="/rectangle-body-type" className="text-pink-500 hover:text-pink-600 underline">rectangle</Link>, and <Link to="/inverted-triangle-body" className="text-pink-500 hover:text-pink-600 underline">inverted triangle</Link> can help you choose the most flattering cuts.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Define Your Style Words</h3>
                  <p className="text-gray-700 mb-4">
                    One of the most powerful exercises in developing personal style is choosing three to five words that describe the image you want to project. These words become your style compass, guiding every purchase and outfit decision.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Your style words should reflect both how you want to be perceived and how you want to feel. Consider words like:
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Elegant", "Effortless", "Bold", "Sophisticated", "Playful", "Polished", "Creative", "Relaxed", "Powerful", "Refined", "Edgy", "Feminine", "Minimalist", "Artistic", "Classic", "Modern", "Timeless", "Confident", "Chic", "Distinctive"].map((word) => (
                      <span key={word} className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-pink-100 transition-colors">{word}</span>
                    ))}
                  </div>
                  <p className="text-gray-700">
                    Once you have your words, write them down and reference them before shopping. If a potential purchase does not align with at least two of your style words, it probably does not belong in your wardrobe.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                  6
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Experiment and Refine</h3>
                  <p className="text-gray-700 mb-4">
                    Finding your personal style is not a one-time event but an ongoing process of experimentation and refinement. Give yourself permission to try new things, make mistakes, and evolve. The goal is progress, not perfection.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Strategies for effective experimentation include:
                  </p>
                  <ul className="text-gray-700 space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">-</span>
                      <span>Try pieces before committing by using <Link to="/virtual-try-on-guide" className="text-pink-500 hover:text-pink-600 underline">virtual try-on technology</Link></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">-</span>
                      <span>Shop at thrift stores to experiment with styles risk-free</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">-</span>
                      <span>Take outfit photos to see what works and what does not</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">-</span>
                      <span>Pay attention to compliments and notice which outfits get positive reactions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">-</span>
                      <span>Give new pieces a fair trial before deciding to keep or return them</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Style Archetypes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Understanding Style Archetypes and Aesthetics</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            While personal style is unique to each individual, understanding common style archetypes can help you identify which aesthetics resonate with you. Most people are a blend of two or three styles rather than fitting perfectly into one category.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {styleArchetypes.map((archetype) => (
              <div key={archetype.name} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{archetype.name}</h3>
                <p className="text-gray-700 mb-4">{archetype.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">Key Pieces</h4>
                  <div className="flex flex-wrap gap-2">
                    {archetype.keyPieces.map((piece) => (
                      <span key={piece} className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 border border-gray-200">{piece}</span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">Color Palette</h4>
                  <div className="flex flex-wrap gap-2">
                    {archetype.colors.map((color) => (
                      <span key={color} className="px-3 py-1 bg-pink-50 rounded-full text-sm text-pink-700">{color}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">Style Icons</h4>
                  <p className="text-sm text-gray-600">{archetype.icons}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Trending Aesthetics to Explore</h3>
            <p className="text-gray-700 text-center mb-6">
              Beyond traditional archetypes, contemporary fashion has given rise to specific aesthetics that have gained popularity through social media and cultural movements.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/clean-girl-aesthetic" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow block">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Clean Girl Aesthetic</h4>
                <p className="text-gray-600 text-sm">Effortless, dewy, polished looks with minimal makeup and sleek styling</p>
              </Link>
              <Link to="/old-money-aesthetic" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow block">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Old Money Aesthetic</h4>
                <p className="text-gray-600 text-sm">Classic, understated luxury inspired by generational wealth and timeless elegance</p>
              </Link>
              <Link to="/quiet-luxury-style" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow block">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Quiet Luxury</h4>
                <p className="text-gray-600 text-sm">Subtle sophistication that whispers wealth through quality over logos</p>
              </Link>
              <Link to="/coquette-aesthetic" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow block">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Coquette Aesthetic</h4>
                <p className="text-gray-600 text-sm">Feminine, flirty, and romantic with bows, lace, and soft colors</p>
              </Link>
              <Link to="/office-siren-aesthetic" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow block">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Office Siren</h4>
                <p className="text-gray-600 text-sm">Powerful, sophisticated workwear with a seductive edge</p>
              </Link>
              <Link to="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow block">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">More Aesthetics</h4>
                <p className="text-gray-600 text-sm">Explore all style guides and aesthetic breakdowns on our blog</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Building Your Wardrobe Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Building a Wardrobe That Reflects You</h2>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Once you have clarity on your personal style, the next step is translating that understanding into a tangible wardrobe. This process takes time and should be approached strategically rather than through impulsive shopping sprees.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Start with Your Foundation Pieces</h3>
              <p className="text-gray-700 mb-4">
                Every well-curated wardrobe begins with versatile basics that form the backbone of your outfits. These pieces should be high-quality, well-fitting, and in colors that work with your personal palette.
              </p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">-</span>
                  <span>Quality basics in your best neutral colors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">-</span>
                  <span>Well-fitted jeans or trousers that flatter your body type</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">-</span>
                  <span>A versatile jacket or blazer for layering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">-</span>
                  <span>Comfortable yet polished shoes for everyday wear</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Add Personality Pieces Gradually</h3>
              <p className="text-gray-700 mb-4">
                With your basics in place, layer in pieces that express your unique style personality. These are the items that make your wardrobe distinctly yours and set you apart from generic dressing.
              </p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">-</span>
                  <span>Statement pieces that align with your style words</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">-</span>
                  <span>Accessories that add your signature touch</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">-</span>
                  <span>Prints or textures that reflect your aesthetic preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">-</span>
                  <span>Special occasion pieces that make you feel incredible</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Practice the One-In-One-Out Rule</h3>
              <p className="text-gray-700 mb-4">
                To maintain a cohesive and manageable wardrobe, adopt the practice of removing an item for every new piece you add. This prevents closet overwhelm and ensures every item earns its place.
              </p>
              <p className="text-gray-600">
                Learn more about maintaining a streamlined wardrobe in our <Link to="/capsule-wardrobe" className="text-pink-500 hover:text-pink-600 underline">capsule wardrobe guide</Link>.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Invest in Quality Over Quantity</h3>
              <p className="text-gray-700 mb-4">
                A smaller wardrobe of well-made pieces will always outperform a closet stuffed with cheap, trendy items. Quality garments fit better, last longer, and look more polished. When budgeting, prioritize quality for pieces you will wear frequently and closer to your face.
              </p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">-</span>
                  <span>Check fabric composition and construction details</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">-</span>
                  <span>Consider cost per wear rather than just the price tag</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">-</span>
                  <span>Learn to spot quality indicators like finished seams and good hardware</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Common Personal Style Mistakes to Avoid</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Knowing what not to do is just as valuable as knowing what to do. These common pitfalls derail many people on their style journey.
          </p>

          <div className="space-y-6">
            {commonMistakes.map((item, index) => (
              <div key={index} className="bg-red-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.mistake}</h3>
                <p className="text-gray-700 mb-4">{item.explanation}</p>
                <div className="bg-white rounded-xl p-4">
                  <p className="text-gray-700">
                    <span className="font-semibold text-green-600">Solution: </span>
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Frequently Asked Questions About Personal Style</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Get answers to the most common questions about discovering and developing your unique fashion identity.
          </p>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Guides Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Continue Your Style Journey</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Explore these related guides to deepen your understanding of personal style and fashion.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/what-colors-suit-me" className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow block">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What Colors Suit Me?</h3>
              <p className="text-gray-600 text-sm">Discover your perfect color palette based on your skin tone and undertones</p>
            </Link>
            <Link to="/capsule-wardrobe" className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 hover:shadow-lg transition-shadow block">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Capsule Wardrobe Guide</h3>
              <p className="text-gray-600 text-sm">Build a streamlined wardrobe of versatile pieces you love</p>
            </Link>
            <Link to="/what-season-am-i" className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 hover:shadow-lg transition-shadow block">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What Season Am I?</h3>
              <p className="text-gray-600 text-sm">Learn about seasonal color analysis and find your season</p>
            </Link>
            <Link to="/hourglass-body-type" className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 hover:shadow-lg transition-shadow block">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Body Type Guides</h3>
              <p className="text-gray-600 text-sm">Learn which silhouettes and styles flatter your unique shape</p>
            </Link>
            <Link to="/what-to-wear-job-interview" className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow block">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What to Wear to a Job Interview</h3>
              <p className="text-gray-600 text-sm">Professional dressing tips for making the right impression</p>
            </Link>
            <Link to="/wedding-guest-outfits" className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-shadow block">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Wedding Guest Outfits</h3>
              <p className="text-gray-600 text-sm">Stylish outfit ideas for every type of wedding celebration</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Aesthetics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore Fashion Aesthetics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/clean-girl-aesthetic" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">Clean Girl Aesthetic</h3>
              <p className="text-gray-600 text-sm">Minimalist beauty and effortless style.</p>
            </Link>
            <Link to="/old-money-aesthetic" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">Old Money Aesthetic</h3>
              <p className="text-gray-600 text-sm">Timeless elegance and classic sophistication.</p>
            </Link>
            <Link to="/coquette-aesthetic" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">Coquette Aesthetic</h3>
              <p className="text-gray-600 text-sm">Feminine bows, lace, and romantic details.</p>
            </Link>
            <Link to="/office-siren-aesthetic" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">Office Siren Aesthetic</h3>
              <p className="text-gray-600 text-sm">Powerful and polished workwear style.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Shop Your Personal Style?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius helps you find pieces that match your body type, coloring, and personal aesthetic. Get personalized recommendations while you shop online.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Style Analysis</h4>
                  <p className="text-sm text-gray-600">Get personalized style recommendations based on your preferences</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Color Matching</h4>
                  <p className="text-sm text-gray-600">Find colors that complement your skin tone and undertone</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Virtual Try-On</h4>
                  <p className="text-sm text-gray-600">See how clothes look on you before you buy</p>
                </div>
              </div>
            </div>

            <a
              href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }}
              >
                Add to Chrome - It's Free
              </button>
            </a>
            <p className="text-sm text-gray-500 mt-4">Works on Zara, H&M, ASOS, Nordstrom, and 1000+ more stores</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FindYourPersonalStyle;
