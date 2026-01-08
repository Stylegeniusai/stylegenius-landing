import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { getAppStoreUrl, getDownloadButtonText } from "../utils/deviceDetection";
import ExtensionCTA from "../components/ExtensionCTA";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const AIFashionShopping = () => {
  const [appStoreUrl, setAppStoreUrl] = useState('');
  const [buttonText, setButtonText] = useState('Download App');

  useEffect(() => {
    setAppStoreUrl(getAppStoreUrl());
    setButtonText(getDownloadButtonText());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="AI Fashion Shopping: How Smart Technology is Changing How We Shop 2026"
        description="Discover how AI is revolutionizing fashion shopping in 2026. From virtual try-on to personalized style matching, learn how smart shopping technology helps you find clothes that actually suit you."
        keywords="AI fashion, smart shopping, AI styling, personalized fashion, fashion technology, AI clothes shopping, smart wardrobe, AI personal stylist, fashion tech 2026"
        canonicalUrl="/ai-fashion-shopping"
        ogImage="/ai-fashion-hero.png"
        ogType="article"
        article={{
          publishedTime: "2026-01-06",
          modifiedTime: "2026-01-06",
          section: "Technology",
          tags: ["AI fashion", "smart shopping", "fashion technology", "personalized styling"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "AI Fashion Shopping", url: "/ai-fashion-shopping" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #fff 0%, #f9fafb 100%)' }}>
        {/* Floating gradient blobs */}
        <div className="absolute top-[-100px] right-[5%] w-[400px] h-[400px] rounded-full pointer-events-none z-0" style={{ background: 'rgba(255,112,217,0.2)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-[-50px] left-[10%] w-[300px] h-[300px] rounded-full pointer-events-none z-0" style={{ background: 'rgba(110,193,228,0.2)', filter: 'blur(60px)' }} />
        <div className="absolute top-[40%] left-[30%] w-[200px] h-[200px] rounded-full pointer-events-none z-0" style={{ background: 'rgba(255,112,217,0.12)', filter: 'blur(60px)' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(255,112,217,0.15)', color: '#FF70D9' }}>Fashion Technology</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Fashion Shopping:{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                The Future is Here
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              How artificial intelligence is completely transforming the way we discover, try, and buy clothes online. And honestly? It's about time.
            </p>
          </div>
          <div className="max-w-3xl mx-auto mt-8">
            <div className="p-1 rounded-2xl" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }}>
              <img
                src={`${BLOG_IMAGE_BASE}/ai-fashion-hero.png`}
                alt="AI Fashion Shopping - Smart technology transforming how we shop for clothes"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Let's be real: online shopping is amazing... until it isn't. You find the perfect top, order it in three sizes "just in case," wait a week, try them all on, and return two. Sound familiar? You're not alone – the fashion industry sees return rates of 30-40% for online purchases. That's insane.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              But here's the thing: <strong>AI is finally solving this problem</strong>. And no, we're not talking about some sci-fi future – this technology exists right now, in 2026, and it's changing everything about how we shop for clothes.
            </p>
          </div>

          {/* What is AI Fashion */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Even Is "AI Fashion"?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              AI fashion is basically using artificial intelligence to make shopping smarter. Instead of guessing if something will look good on you, AI can actually analyze and predict it. We're talking about technology that can:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-[3px] rounded-2xl" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }}>
                <div className="bg-gradient-to-b from-pink-50 to-pink-100/50 rounded-[13px] p-6 h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Analyze Your Body Type</h3>
                  <p className="text-gray-700">
                    AI can look at your proportions and tell you which cuts and silhouettes will actually flatter your shape. No more "this looked great on the model" disappointments.
                  </p>
                </div>
              </div>
              <div className="p-[3px] rounded-2xl" style={{ background: 'linear-gradient(45deg, #6EC1E4, #FF70D9)' }}>
                <div className="bg-gradient-to-b from-blue-50 to-blue-100/50 rounded-[13px] p-6 h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Match Your Skin Tone</h3>
                  <p className="text-gray-700">
                    Ever bought a color that looked amazing online but washed you out completely? AI color matching ensures the shades you pick actually complement your complexion.
                  </p>
                </div>
              </div>
              <div className="p-[3px] rounded-2xl" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }}>
                <div className="bg-gradient-to-b from-pink-50 to-pink-100/50 rounded-[13px] p-6 h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Virtual Try-On</h3>
                  <p className="text-gray-700">
                    See clothes on YOUR body before buying. Not a model, not an avatar – you. This is the <Link to="/online-dressing-room" className="hover:underline" style={{ color: '#FF70D9' }}>online dressing room</Link> revolution.
                  </p>
                </div>
              </div>
              <div className="p-[3px] rounded-2xl" style={{ background: 'linear-gradient(45deg, #6EC1E4, #FF70D9)' }}>
                <div className="bg-gradient-to-b from-blue-50 to-blue-100/50 rounded-[13px] p-6 h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Recommendations</h3>
                  <p className="text-gray-700">
                    AI learns your style preferences over time and suggests pieces you'll actually love – not just what's trending or what they want to sell you.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Image: Body Type Match */}
          <div className="my-12">
            <div className="rounded-xl shadow-2xl overflow-hidden border border-gray-200">
              <img
                src={`${BLOG_IMAGE_BASE}/style-match-result.png`}
                alt="AI body type matching showing personalized style recommendations"
                className="w-full"
              />
            </div>
            <p className="text-center text-gray-500 mt-3 text-sm">AI analyzing body type and showing which styles work best</p>
          </div>

          {/* The Problem AI Solves */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Real Problem AI Fashion Solves</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Here's a stat that should make every fashion retailer nervous: <strong>62% of shoppers say they've stopped buying from a brand after a bad online shopping experience</strong>. And the #1 complaint? "It didn't look like I expected."
            </p>

            <div className="bg-gray-100 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Traditional Online Shopping Problem:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>Models don't look like us (shocking, right?)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>Size charts are inconsistent across brands</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>Colors look different on every screen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>No way to know if a style suits your body until it arrives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>The "styled on the model" look never translates to real life</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The AI Fashion Solution:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>See clothes on YOUR body with <Link to="/virtual-try-on-guide" className="hover:underline" style={{ color: '#FF70D9' }}>virtual try-on</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Get personalized size recommendations based on your measurements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>AI matches colors to your actual skin tone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><Link to="/does-this-suit-me" className="hover:underline" style={{ color: '#FF70D9' }}>Body type analysis</Link> tells you if a silhouette will flatter you</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Style suggestions based on what actually works for your shape</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Image: Skin Tone Match */}
          <div className="my-12">
            <div className="rounded-xl shadow-2xl overflow-hidden border border-gray-200">
              <img
                src={`${BLOG_IMAGE_BASE}/style-match-result.png`}
                alt="AI skin tone matching showing color recommendations"
                className="w-full"
              />
            </div>
            <p className="text-center text-gray-500 mt-3 text-sm">AI analyzing skin tone to recommend flattering colors</p>
          </div>

          {/* How AI Fashion Actually Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How AI Fashion Shopping Actually Works (No PhD Required)</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Okay, let's break this down without getting too nerdy. Here's what's happening behind the scenes when you use AI fashion tools:
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }}>
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Computer Vision Analyzes Your Photo</h3>
                  <p className="text-gray-700">
                    When you upload a photo, AI doesn't just "see" you – it identifies key points on your body, maps your proportions, and calculates ratios. It's looking at shoulder width vs hip width, torso length, leg proportions... all the stuff a personal stylist would assess, but in milliseconds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(45deg, #6EC1E4, #FF70D9)' }}>
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Machine Learning Matches You to Data</h3>
                  <p className="text-gray-700">
                    The AI has been trained on millions of data points: what styles look good on which body types, what colors complement different skin tones, which cuts flatter certain proportions. It matches your unique characteristics to this massive knowledge base.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }}>
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Recommendations Generated</h3>
                  <p className="text-gray-700">
                    Based on this analysis, AI gives you actual actionable advice: "This wrap dress will emphasize your waist" or "This neckline will balance your shoulders" or "This color will make your skin glow." No more guessing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(45deg, #6EC1E4, #FF70D9)' }}>
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Virtual Try-On Shows Results</h3>
                  <p className="text-gray-700">
                    The best part? You can actually SEE how items look on you before buying. <Link to="/online-dressing-room" className="hover:underline" style={{ color: '#FF70D9' }}>Virtual dressing rooms</Link> render clothing onto your body so you know exactly what you're getting.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Types of AI Fashion Tools */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of AI Fashion Tools You Can Use Right Now</h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Virtual Try-On Technology</h3>
                <p className="text-gray-700 mb-3">
                  This is the big one. Virtual try-on lets you see clothes on your actual body using AR (augmented reality) or AI image generation. Some work through your phone camera in real-time, others use a photo you upload. Read our full <Link to="/virtual-try-on-guide" className="hover:underline" style={{ color: '#FF70D9' }}>Virtual Try-On Guide</Link> to learn more.
                </p>
                <p className="text-sm text-gray-500">Best for: Seeing how clothes actually look on YOU before buying</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Body Type Analysis Tools</h3>
                <p className="text-gray-700 mb-3">
                  These analyze your proportions and tell you your body shape (hourglass, pear, rectangle, etc.) plus which styles will flatter you most. Way more accurate than trying to figure it out yourself with a tape measure and a confusing blog post. Check out our <Link to="/kibbe-body-types" className="hover:underline" style={{ color: '#FF70D9' }}>Kibbe Body Types guide</Link> for the deep dive.
                </p>
                <p className="text-sm text-gray-500">Best for: Understanding which silhouettes and cuts work for your shape</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Color Analysis AI</h3>
                <p className="text-gray-700 mb-3">
                  Upload a photo and AI determines your skin's undertone (warm, cool, neutral) and your <Link to="/what-season-am-i" className="hover:underline" style={{ color: '#FF70D9' }}>color season</Link>. Then it tells you exactly which colors will make you look radiant vs which ones will wash you out. Game changer if you've ever bought a "nude" that was anything but.
                </p>
                <p className="text-sm text-gray-500">Best for: Finding your most flattering colors for clothes and makeup</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Shopping Assistants</h3>
                <p className="text-gray-700 mb-3">
                  Browser extensions and apps that work while you shop, telling you if items match your profile. Think of it as having a personal stylist looking over your shoulder saying "yes girl, that's perfect for you" or "hmm, maybe skip that one." Plus features like <Link to="/smart-shopping-tools" className="hover:underline" style={{ color: '#FF70D9' }}>price tracking and wishlists</Link>.
                </p>
                <p className="text-sm text-gray-500">Best for: Real-time guidance while browsing any online store</p>
              </div>
            </div>
          </section>

          {/* Real Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Real Benefits (Beyond Just "It's Cool")</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Save Money</h3>
                <p className="text-gray-700">
                  Stop buying things that end up in the "I'll wear this someday" pile. When you know something will actually look good on you, you make smarter purchases. Fewer returns, fewer regret-buys, more pieces you actually wear.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Save Time</h3>
                <p className="text-gray-700">
                  No more endless scrolling hoping something will work. AI filters out the noise and shows you what's actually worth your time. Plus, no returns to deal with = hours of your life back.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Better for the Planet</h3>
                <p className="text-gray-700">
                  Fashion returns have a massive carbon footprint. Many returned items end up in landfills. By reducing returns through smarter shopping, you're actually helping the environment. Sustainable shopping hack!
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Confidence Boost</h3>
                <p className="text-gray-700">
                  When you actually understand what works for your body and coloring, getting dressed stops being stressful. You build a wardrobe of things that make you feel amazing, not just "okay I guess."
                </p>
              </div>
            </div>
          </section>

          {/* The Future Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Next for AI Fashion?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We're just getting started. Here's what's coming in the <Link to="/future-online-shopping" className="hover:underline" style={{ color: '#FF70D9' }}>future of online shopping</Link>:
            </p>

            <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, rgba(255,112,217,0.1) 0%, rgba(110,193,228,0.1) 100%)' }}>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 mt-1" style={{ color: '#FF70D9' }}>→</span>
                  <span><strong>AI-designed clothes:</strong> Custom pieces designed specifically for your body and style preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1" style={{ color: '#FF70D9' }}>→</span>
                  <span><strong>Predictive shopping:</strong> AI that knows what you need before you do (new season coming? Here are pieces that match your existing wardrobe)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1" style={{ color: '#FF70D9' }}>→</span>
                  <span><strong>Real-time virtual styling:</strong> AI stylists that can create complete looks for any occasion, instantly</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1" style={{ color: '#FF70D9' }}>→</span>
                  <span><strong>Social shopping:</strong> Share virtual try-ons with friends and get AI-powered group recommendations</span>
                </li>
              </ul>
            </div>
          </section>

          {/* How StyleGenius Does This */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How StyleGenius Brings This to Every Store</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              All this AI fashion tech sounds great, but most tools only work on specific stores or require clunky apps. StyleGenius is different – it's a Chrome extension that works on ANY online store. Here's what you get:
            </p>

            <div className="rounded-2xl p-8 mb-8" style={{ background: 'linear-gradient(135deg, rgba(255,112,217,0.1) 0%, rgba(110,193,228,0.1) 100%)' }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🪞 Virtual Try-On Anywhere</h3>
                  <p className="text-gray-700 mb-2">
                    See clothes on YOUR body on any shopping site. Run multiple try-ons at once and keep browsing while they process – no waiting around.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Instant Style Matching</h3>
                  <p className="text-gray-700 mb-2">
                    Every item gets analyzed for your skin tone and body type. Get a match score plus tips on how to style it – and outfit ideas that work with the piece.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">💰 Universal Wishlist & Price Tracking</h3>
                  <p className="text-gray-700 mb-2">
                    Save items from Zara, H&M, ASOS, anywhere – all in one place. Track prices and get alerts when something drops. Never miss a sale.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">📱 App That Syncs</h3>
                  <p className="text-gray-700 mb-2">
                    Build your own outfits in the app, test looks with virtual try-on, and everything syncs with your extension. Your style tools, everywhere.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-8">
              <div className="rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                <img
                  src={`${BLOG_IMAGE_BASE}/stylegenius-extension-demo.png`}
                  alt="StyleGenius extension showing AI style matching on a shopping site"
                  className="w-full"
                />
              </div>
              <p className="text-center text-gray-500 mt-3 text-sm">StyleGenius analyzing an item for body type and skin tone match</p>
            </div>
          </section>

          {/* How to Get Started */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Start Using AI Fashion Today</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ready to shop smarter? Here's how to get started:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                <span className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }}>1</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Find Your Color Season</h4>
                  <p className="text-gray-600">Start with our <Link to="/what-season-am-i" className="hover:underline" style={{ color: '#FF70D9' }}>color analysis guide</Link> to discover which colors make you glow.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                <span className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0" style={{ background: 'linear-gradient(45deg, #6EC1E4, #FF70D9)' }}>2</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Know Your Body Type</h4>
                  <p className="text-gray-600">Check out our <Link to="/kibbe-body-types" className="hover:underline" style={{ color: '#FF70D9' }}>body type guides</Link> to understand which silhouettes flatter your shape.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                <span className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }}>3</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Get a Smart Shopping Tool</h4>
                  <p className="text-gray-600">Install a browser extension that analyzes items as you shop and tells you if they suit you.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                <span className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0" style={{ background: 'linear-gradient(45deg, #6EC1E4, #FF70D9)' }}>4</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Try Virtual Try-On</h4>
                  <p className="text-gray-600">Test out <Link to="/online-dressing-room" className="hover:underline" style={{ color: '#FF70D9' }}>virtual dressing rooms</Link> to see clothes on you before buying.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Keep Reading</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/online-dressing-room" className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Online Dressing Room Guide</h3>
                <p className="text-gray-600 text-sm">How virtual fitting rooms work and why they're game-changing.</p>
              </Link>
              <Link to="/does-this-suit-me" className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Does This Suit Me?</h3>
                <p className="text-gray-600 text-sm">AI style matching explained - how to know if clothes will flatter you.</p>
              </Link>
              <Link to="/smart-shopping-tools" className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Smart Shopping Tools</h3>
                <p className="text-gray-600 text-sm">Price tracking, wishlists, and tools that save you money.</p>
              </Link>
            </div>
          </section>

        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #fff 0%, #f9fafb 100%)' }}>
        {/* Floating gradient blobs */}
        <div className="absolute top-[-50px] right-[10%] w-[300px] h-[300px] rounded-full pointer-events-none z-0" style={{ background: 'rgba(255,112,217,0.15)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-[-50px] left-[15%] w-[250px] h-[250px] rounded-full pointer-events-none z-0" style={{ background: 'rgba(110,193,228,0.15)', filter: 'blur(60px)' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Shop Smarter?</h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius brings AI fashion to every store you shop. Get body type matching, skin tone analysis, virtual try-on, and smart shopping tools – all in one free extension.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ExtensionCTA />
              <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ background: '#6EC1E4', color: 'white', boxShadow: '0 4px 20px rgba(110, 193, 228, 0.3)' }}>
                  {buttonText}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIFashionShopping;
