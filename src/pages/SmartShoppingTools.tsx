import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { getAppStoreUrl, getDownloadButtonText } from "../utils/deviceDetection";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const SmartShoppingTools = () => {
  const [appStoreUrl, setAppStoreUrl] = useState('');
  const [buttonText, setButtonText] = useState('Download App');

  useEffect(() => {
    setAppStoreUrl(getAppStoreUrl());
    setButtonText(getDownloadButtonText());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Smart Shopping Tools: Price Tracking & Universal Wishlist Guide 2026"
        description="Master smart shopping with price tracking, universal wishlists, and sale alerts. Save money and never miss a deal with these essential shopping tools for 2026."
        keywords="price tracking, universal wishlist, price drop alert, sale alert, smart shopping, shopping tools, save money shopping, price comparison, fashion deals 2026"
        canonicalUrl="/smart-shopping-tools"
        ogImage="/smart-shopping-hero.png"
        ogType="article"
        article={{
          publishedTime: "2026-01-06",
          modifiedTime: "2026-01-06",
          section: "Technology",
          tags: ["price tracking", "wishlist", "smart shopping", "shopping tools", "save money"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Smart Shopping Tools", url: "/smart-shopping-tools" }
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
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(255,112,217,0.15)', color: '#FF70D9' }}>Save Money Shopping</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Smart Shopping Tools:{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Never Overpay Again
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Price tracking, universal wishlists, and sale alerts – the tools that make sure you get what you want at the best price.
            </p>
          </div>
          <div className="max-w-3xl mx-auto mt-8">
            <div className="p-1 rounded-2xl" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }}>
              <img
                src={`${BLOG_IMAGE_BASE}/smart-shopping-hero.png`}
                alt="Smart shopping tools - price tracking and wishlist"
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
              Here's a scenario that probably sounds familiar: You find the perfect jacket on Zara. You add it to your cart, but €89 feels steep. You tell yourself you'll wait for a sale. Three weeks later, you remember, go back to check... and it's either full price or sold out entirely.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              OR the alternative disaster: You buy it at full price on Tuesday. On Friday, it goes 30% off. You want to cry.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <strong>Smart shopping tools exist to prevent both of these tragedies.</strong> Let's talk about how to actually use technology to shop smarter, save money, and never miss another deal.
            </p>
          </div>

          {/* Price Tracking */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Price Tracking: Your Secret Weapon for Savings</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Price tracking is exactly what it sounds like – tools that monitor prices for you and alert you when they drop. But there's more nuance to it than just "price went down, buy now."
            </p>

            <div className="rounded-2xl p-8 mb-8" style={{ background: 'linear-gradient(135deg, rgba(255,112,217,0.1) 0%, rgba(110,193,228,0.1) 100%)' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How Price Tracking Works</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }}>
                    <span className="font-bold text-white">1</span>
                  </div>
                  <div>
                    <p className="text-gray-700"><strong>You save an item</strong> – Add it to your tracking list when you find something you want</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(45deg, #6EC1E4, #FF70D9)' }}>
                    <span className="font-bold text-white">2</span>
                  </div>
                  <div>
                    <p className="text-gray-700"><strong>The tool monitors</strong> – It checks the price regularly (usually multiple times per day)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }}>
                    <span className="font-bold text-white">3</span>
                  </div>
                  <div>
                    <p className="text-gray-700"><strong>You get alerted</strong> – When the price drops, you get a notification instantly</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(45deg, #6EC1E4, #FF70D9)' }}>
                    <span className="font-bold text-white">4</span>
                  </div>
                  <div>
                    <p className="text-gray-700"><strong>You buy at the right time</strong> – Catch sales the moment they happen, before items sell out</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Alert Screenshot */}
            <div className="my-8">
              <img
                src={`${BLOG_IMAGE_BASE}/price-alert-demo.png`}
                alt="Price drop alert notification showing savings"
                className="w-full rounded-2xl shadow-lg"
              />
              <p className="text-center text-gray-500 mt-3 text-sm">Price drop alert – never miss a sale again</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why This Matters</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1" style={{ color: '#FF70D9' }}>•</span>
                    <span>Fashion prices fluctuate constantly – sometimes hourly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1" style={{ color: '#FF70D9' }}>•</span>
                    <span>Flash sales often last only hours before selling out</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1" style={{ color: '#FF70D9' }}>•</span>
                    <span>You can't manually check every item every day</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1" style={{ color: '#FF70D9' }}>•</span>
                    <span>Waiting without tracking = forgetting or missing out</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Average Savings</h3>
                <p className="text-gray-700 mb-4">
                  Smart shoppers using price tracking typically save:
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Fashion items</span>
                    <span className="font-bold" style={{ color: '#FF70D9' }}">15-40% off</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Designer pieces</span>
                    <span className="font-bold" style={{ color: '#FF70D9' }}">20-50% off</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">End of season</span>
                    <span className="font-bold" style={{ color: '#FF70D9' }}">Up to 70% off</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Universal Wishlist */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Universal Wishlist: All Your Favorites, One Place</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ever had this problem? You're browsing ASOS, find something cute, add it to your ASOS wishlist. Then you're on H&M, find something else, add to H&M wishlist. Then Zara. Then & Other Stories. Then some random boutique you found on Instagram.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Now you have 6 different wishlists across 6 different accounts, and you can't remember what's where, and comparing items is impossible.
            </p>

            <div className="rounded-2xl p-8 mb-8" style={{ background: 'linear-gradient(135deg, rgba(110,193,228,0.1) 0%, rgba(255,112,217,0.1) 100%)' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enter: The Universal Wishlist</h3>
              <p className="text-gray-700 mb-6">
                A universal wishlist is a single place to save items from ANY online store. One list, all your favorites, easy to compare and organize.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🛍️</div>
                  <p className="text-sm text-gray-700">Save from any store</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">📊</div>
                  <p className="text-sm text-gray-700">Compare items easily</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">👯</div>
                  <p className="text-sm text-gray-700">Share with friends</p>
                </div>
              </div>
            </div>

            {/* Wishlist Screenshot */}
            <div className="my-8">
              <img
                src={`${BLOG_IMAGE_BASE}/universal-wishlist-demo.png`}
                alt="Universal wishlist showing items from multiple stores"
                className="w-full rounded-2xl shadow-lg"
              />
              <p className="text-center text-gray-500 mt-3 text-sm">One wishlist for all your favorite stores</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why a Universal Wishlist Changes Everything</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1" style={{ color: '#6EC1E4' }}>✓</span>
                    <span>See everything you want in one view</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1" style={{ color: '#6EC1E4' }}>✓</span>
                    <span>Compare similar items from different stores</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1" style={{ color: '#6EC1E4' }}>✓</span>
                    <span>No more "where did I save that?" moments</span>
                  </li>
                </ul>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1" style={{ color: '#6EC1E4' }}>✓</span>
                    <span>Share collections for birthdays/holidays</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1" style={{ color: '#6EC1E4' }}>✓</span>
                    <span>Get price alerts for all items</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1" style={{ color: '#6EC1E4' }}>✓</span>
                    <span>Never forget about something you loved</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pro Shopping Strategies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pro Shopping Strategies That Actually Work</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Having the tools is one thing. Using them strategically is another. Here's how to maximize your savings:
            </p>

            <div className="space-y-6">
              <div className="rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(255,112,217,0.08) 0%, rgba(110,193,228,0.08) 100%)' }} rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 The "Wait and See" Strategy</h3>
                <p className="text-gray-700 mb-3">
                  When you find something you like, don't buy immediately. Add it to your wishlist with price tracking. Wait 2-4 weeks. Fashion retail runs on cycles – most items will go on sale eventually.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Exception:</strong> Limited drops or collaborations that might sell out. Then buy fast.
                </p>
              </div>

              <div className="rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(110,193,228,0.08) 0%, rgba(255,112,217,0.08) 100%)' }} rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">📅 Know the Sale Calendar</h3>
                <p className="text-gray-700 mb-3">
                  Big sales happen predictably. Track items before these dates:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                  <div className="bg-white rounded-lg p-3 text-center">
                    <p className="font-semibold text-gray-900">Jan</p>
                    <p className="text-xs text-gray-600">Winter sales</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <p className="font-semibold text-gray-900">Jun-Jul</p>
                    <p className="text-xs text-gray-600">Summer sales</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <p className="font-semibold text-gray-900">Nov</p>
                    <p className="text-xs text-gray-600">Black Friday</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <p className="font-semibold text-gray-900">Dec</p>
                    <p className="text-xs text-gray-600">Boxing Day</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(255,112,217,0.08) 0%, rgba(110,193,228,0.08) 100%)' }} rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">💡 The "Similar Item" Hack</h3>
                <p className="text-gray-700 mb-3">
                  Found a €200 dress you love? Search for similar styles across other stores and add them all to your wishlist. You might find nearly identical pieces for half the price – or catch one on sale first.
                </p>
              </div>

              <div className="rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(110,193,228,0.08) 0%, rgba(255,112,217,0.08) 100%)' }} rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🧹 Monthly Wishlist Cleanup</h3>
                <p className="text-gray-700 mb-3">
                  Once a month, review your wishlist. Remove things you no longer want (tastes change!). This keeps your list focused and your alerts relevant. No point tracking prices on items you've lost interest in.
                </p>
              </div>
            </div>
          </section>

          {/* StyleGenius Smart Shopping */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">StyleGenius: All Your Smart Shopping Tools in One Place</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Most price trackers are just... price trackers. StyleGenius combines smart shopping tools with AI styling, so you save money AND buy things that actually suit you.
            </p>

            <div className="rounded-2xl p-8 mb-8" style={{ background: 'linear-gradient(135deg, rgba(255,112,217,0.1) 0%, rgba(110,193,228,0.1) 100%)' }}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">📋 Universal Wishlist Across ALL Stores</h3>
                  <p className="text-gray-700">
                    Zara, H&M, ASOS, Net-a-Porter, that random boutique you found on Instagram – save them all to ONE wishlist. No more scattered favorites across 20 different accounts.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">🔔 Price Drop Alerts That Actually Work</h3>
                  <p className="text-gray-700">
                    Get notified the moment something on your wishlist goes on sale. Not daily digest emails you ignore – instant alerts when prices drop so you can grab it before your size sells out.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">📊 Price History</h3>
                  <p className="text-gray-700">
                    See if that "sale" is actually a deal or if the item was cheaper last month. Make informed decisions based on actual price trends.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">📱 Extension + App Sync</h3>
                  <p className="text-gray-700">
                    Save items from your laptop, check your wishlist on your phone. Everything syncs automatically. Your shopping list is always with you.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-8">
              <img
                src={`${BLOG_IMAGE_BASE}/stylegenius-wishlist-demo.png`}
                alt="StyleGenius universal wishlist with price tracking"
                className="w-full rounded-2xl shadow-lg"
              />
              <p className="text-center text-gray-500 mt-3 text-sm">StyleGenius wishlist – all your favorites from every store, with price alerts</p>
            </div>
          </section>

          {/* Combining with AI Tools */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Power Move: Combine with AI Style Matching</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Smart shopping tools get even more powerful when combined with <Link to="/ai-fashion-shopping" className="hover:underline" style={{ color: '#FF70D9' }}>AI fashion technology</Link>:
            </p>

            <div className="bg-gray-100 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Smart Shopping Stack:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 text-white rounded-full" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }} flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Find items you like</h4>
                    <p className="text-gray-600">Browse normally, save anything that catches your eye</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 text-white rounded-full" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }} flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI checks if it suits you</h4>
                    <p className="text-gray-600"><Link to="/does-this-suit-me" className="hover:underline" style={{ color: '#FF70D9' }}>Style matching</Link> tells you if it flatters your body type and coloring</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 text-white rounded-full" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }} flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Virtual try-on shows you</h4>
                    <p className="text-gray-600"><Link to="/online-dressing-room" className="hover:underline" style={{ color: '#FF70D9' }}>See it on yourself</Link> before committing</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 text-white rounded-full" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }} flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Price tracking waits for the deal</h4>
                    <p className="text-gray-600">Now you know you want it – tracking gets you the best price</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 text-white rounded-full" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }} flex items-center justify-center font-bold flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Buy with total confidence</h4>
                    <p className="text-gray-600">Right item, right price, no returns, no regrets</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              This is the difference between impulsive shopping (buy → hope → return) and smart shopping (research → confirm → save → buy right). It takes the same amount of time but gets way better results.
            </p>
          </section>

          {/* Common Mistakes */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Smart Shopping Mistakes (And How to Avoid Them)</h2>

            <div className="space-y-6">
              <div className="bg-red-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">❌ Tracking Too Many Items</h3>
                <p className="text-gray-700 mb-2">
                  If everything is on your wishlist, nothing is special. You'll get alert fatigue and miss the ones that matter.
                </p>
                <p className="font-medium" style={{ color: '#FF70D9' }}">
                  ✅ Fix: Be selective. If you wouldn't buy it at 20% off, don't track it.
                </p>
              </div>

              <div className="bg-red-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">❌ Waiting Too Long</h3>
                <p className="text-gray-700 mb-2">
                  Yes, prices drop. But popular items in popular sizes also sell out. If something is already on sale and your size is limited, don't wait for another 5%.
                </p>
                <p className="font-medium" style={{ color: '#FF70D9' }}">
                  ✅ Fix: Know when "good enough" is good enough. A 30% discount on something perfect beats 50% off something that's sold out.
                </p>
              </div>

              <div className="bg-red-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">❌ Ignoring the "Why"</h3>
                <p className="text-gray-700 mb-2">
                  Getting alerts is great, but buying things just because they're on sale is still wasteful. A deal on something you don't need isn't saving money – it's spending money.
                </p>
                <p className="font-medium" style={{ color: '#FF70D9' }}">
                  ✅ Fix: Before adding to wishlist, ask "Would I buy this at full price if money was no object?" If no, don't track it.
                </p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">More Smart Shopping Guides</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/ai-fashion-shopping" className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">AI Fashion Shopping</h3>
                <p className="text-gray-600 text-sm">How AI is transforming the way we shop for clothes.</p>
              </Link>
              <Link to="/capsule-wardrobe" className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Capsule Wardrobe Guide</h3>
                <p className="text-gray-600 text-sm">Build a wardrobe of pieces you actually wear.</p>
              </Link>
              <Link to="/future-online-shopping" className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Future of Online Shopping</h3>
                <p className="text-gray-600 text-sm">What's next for fashion technology and e-commerce.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Start Shopping Smarter Today</h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius includes price tracking, universal wishlist, AND AI style matching. Save money and buy clothes that actually suit you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)', boxShadow: '0 4px 20px rgba(255, 112, 217, 0.3)' }}>
                  Add to Chrome - It's Free
                </button>
              </a>
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

export default SmartShoppingTools;
