import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const CartedAlternative = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Carted Alternative 2026 – Best Apps After Carted Shutdown"
        description="Looking for a Carted alternative after the app shutdown? Compare the best wishlist apps that replace Carted's features for saving clothes and tracking prices in 2026."
        keywords="carted alternative, carted app replacement, app like carted, what happened to carted, carted shutdown, wishlist app, save clothes app, fashion wishlist, price tracking app"
        canonicalUrl="/carted-alternative"
        ogImage="/carted-alternative-hero.png"
        ogType="article"
        article={{
          publishedTime: "2026-01-16",
          modifiedTime: "2026-01-16",
          section: "Shopping Tech",
          tags: ["carted alternative", "wishlist app", "price tracking", "fashion shopping", "outfit builder"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Carted Alternative", url: "/carted-alternative" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #fff 0%, #f9fafb 100%)' }}>
        <div className="absolute top-[-100px] right-[5%] w-[400px] h-[400px] rounded-full pointer-events-none z-0" style={{ background: 'rgba(255,112,217,0.2)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-[-50px] left-[10%] w-[300px] h-[300px] rounded-full pointer-events-none z-0" style={{ background: 'rgba(110,193,228,0.2)', filter: 'blur(60px)' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(255,112,217,0.15)', color: '#FF70D9' }}>Shopping Apps</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Carted Alternative:{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Best Apps After the Shutdown
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Carted shut down in October 2025. Here are the best alternatives for saving clothes, tracking prices, and building outfits.
            </p>
          </div>
          <div className="max-w-5xl mx-auto mt-8">
            <div className="rounded-xl shadow-2xl overflow-hidden border border-gray-200">
              <img
                src={`${BLOG_IMAGE_BASE}/carted-alternative-hero.png`}
                alt="Carted Alternative Apps 2026"
                className="w-full"
                onError={(e) => {
                  e.currentTarget.src = `${BLOG_IMAGE_BASE}/smart-shopping-hero.png`;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Warning Box */}
          <div className="bg-amber-50 border border-amber-400 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">&#9888;</span>
              <h2 className="text-xl font-bold text-amber-800">Carted Has Shut Down</h2>
            </div>
            <p className="text-amber-800">
              Carted closed in October 2025 after 4 years. If you're a former user looking for somewhere to save your shopping finds, here are the best alternatives that actually work.
            </p>
          </div>

          {/* Quick Answer */}
          <div className="rounded-2xl p-8 mb-8" style={{ background: 'linear-gradient(135deg, rgba(255,112,217,0.08) 0%, rgba(110,193,228,0.08) 100%)' }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">&#9889;</span>
              <h3 className="font-bold text-gray-900">Quick Answer</h3>
            </div>
            <p className="text-gray-700 mb-4">Looking for a Carted replacement? The best alternative depends on what you used Carted for:</p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white border border-gray-200 rounded-lg px-4 py-2">
                <span className="font-semibold" style={{ color: '#561269' }}>Gift lists & sharing:</span> Moonsift
              </div>
              <div className="bg-white border border-gray-200 rounded-lg px-4 py-2">
                <span className="font-semibold" style={{ color: '#561269' }}>Social discovery:</span> Locker
              </div>
              <div className="bg-white border border-gray-200 rounded-lg px-4 py-2">
                <span className="font-semibold" style={{ color: '#561269' }}>Fashion & outfits:</span> <a href="https://wontsy.com" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#FF70D9' }}>Wontsy</a>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">In this article</p>
            <div className="grid md:grid-cols-2 gap-2">
              <a href="#what-happened" className="text-gray-700 hover:text-pink-500 flex items-center gap-2">
                <span style={{ color: '#FF70D9' }}>&#8594;</span> What happened to Carted?
              </a>
              <a href="#what-to-look-for" className="text-gray-700 hover:text-pink-500 flex items-center gap-2">
                <span style={{ color: '#FF70D9' }}>&#8594;</span> What to look for in a replacement
              </a>
              <a href="#alternatives" className="text-gray-700 hover:text-pink-500 flex items-center gap-2">
                <span style={{ color: '#FF70D9' }}>&#8594;</span> Best Carted alternatives
              </a>
              <a href="#comparison" className="text-gray-700 hover:text-pink-500 flex items-center gap-2">
                <span style={{ color: '#FF70D9' }}>&#8594;</span> Feature comparison
              </a>
              <a href="#which-to-choose" className="text-gray-700 hover:text-pink-500 flex items-center gap-2">
                <span style={{ color: '#FF70D9' }}>&#8594;</span> Which should you choose?
              </a>
              <a href="#faq" className="text-gray-700 hover:text-pink-500 flex items-center gap-2">
                <span style={{ color: '#FF70D9' }}>&#8594;</span> FAQ
              </a>
            </div>
          </div>

          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <strong>If you're reading this, you're probably one of the many shoppers who relied on Carted to save and track items across different stores.</strong> When Carted announced its shutdown in October 2025, a lot of users were left without their carefully curated wishlists.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              The good news: there are solid alternatives. The bad news: none of them are exact copies of Carted. Each app has different strengths, so the right choice depends on how you shop.
            </p>
          </div>

          {/* Section 1: What Happened */}
          <section className="mb-16" id="what-happened">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Happened to Carted?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Carted was an Australian wishlist app that raised $13 million in seed funding back in 2021. It let you save items from any online store, track prices, and get notifications when things went on sale or came back in stock.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In October 2025, the company announced it was shutting down. Co-founder Holly Cardew cited "current market conditions" and competition from social media platforms adding their own shopping features. TikTok Shop and Instagram's built-in shopping tools had made the standalone wishlist app harder to sustain.
            </p>

            <div className="rounded-2xl p-6 mb-8" style={{ background: 'linear-gradient(135deg, rgba(255,112,217,0.08) 0%, rgba(110,193,228,0.08) 100%)', borderLeft: '4px solid #FF70D9' }}>
              <p className="text-gray-800 font-medium">
                The shutdown caught many users off guard. Years of saved items and organized lists disappeared overnight with no way to export data.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>What former Carted users miss most:</strong>
            </p>
            <ul className="text-lg text-gray-700 space-y-2 mb-6">
              <li className="flex items-start">
                <span className="mr-2 mt-1" style={{ color: '#FF70D9' }}>&bull;</span>
                <span>Price tracking across multiple URLs for the same item</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1" style={{ color: '#FF70D9' }}>&bull;</span>
                <span>Size and color variant tracking</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1" style={{ color: '#FF70D9' }}>&bull;</span>
                <span>Notifications when specific sizes came back in stock</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1" style={{ color: '#FF70D9' }}>&bull;</span>
                <span>Clean, simple interface without social clutter</span>
              </li>
            </ul>
          </section>

          {/* Section 2: What to Look For */}
          <section className="mb-16" id="what-to-look-for">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Look For in a Carted Replacement</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Before jumping to a new app, think about what you actually used Carted for. Most people used it for one of these:
            </p>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Saving items from any store</h3>
                <p className="text-gray-700">
                  The "universal wishlist" feature was Carted's core. You need an app with a browser extension that works on any site, not just specific retailers.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Price tracking</h3>
                <p className="text-gray-700">
                  Getting notified when prices drop was huge for deal hunters. Not all alternatives have this, and some do it better than others.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Organization</h3>
                <p className="text-gray-700">
                  If you had multiple lists (birthday ideas, home stuff, clothes), you need an app that lets you create collections and categorize properly.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fashion-specific features</h3>
                <p className="text-gray-700">
                  If you mainly saved clothes and wanted to see how items work together, you might want something with outfit planning &mdash; which Carted didn't have but some alternatives do.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Best Alternatives */}
          <section className="mb-16" id="alternatives">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Carted Alternatives in 2026</h2>

            {/* Moonsift */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-2xl flex-shrink-0">
                  &#127769;
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">Moonsift</h3>
                  <p className="text-gray-500 text-sm">Free &middot; <a href="https://moonsift.com" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#FF70D9' }}>moonsift.com</a></p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Moonsift is probably the closest direct replacement for Carted's basic functionality. It's a universal wishlist that works on any store, has price drop alerts, and includes a gift registry mode that's popular for birthdays and weddings. The sharing features are particularly strong &mdash; people can view your list without creating an account.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-50 border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-600">Universal saving</span>
                <span className="bg-gray-50 border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-600">Price alerts</span>
                <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ background: 'rgba(255,112,217,0.1)', color: '#FF70D9' }}>Gift registry mode</span>
                <span className="bg-gray-50 border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-600">No account needed to view</span>
                <span className="px-3 py-1 rounded-full text-sm" style={{ background: '#fef2f2', color: '#dc2626' }}>No outfit building</span>
              </div>
            </div>

            {/* Locker */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-2xl flex-shrink-0">
                  &#128274;
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">Locker</h3>
                  <p className="text-gray-500 text-sm">Free &middot; <a href="https://wantlocker.com" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#FF70D9' }}>wantlocker.com</a></p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Locker calls itself "Pinterest for online shopping." Beyond saving items, it has a social discovery component where you can see what other users are saving and create collages of items. Good if you like browsing for inspiration, though the social features can feel cluttered if you just want a simple wishlist.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-50 border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-600">Universal saving</span>
                <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ background: 'rgba(255,112,217,0.1)', color: '#FF70D9' }}>Collage feature</span>
                <span className="bg-gray-50 border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-600">Social discovery</span>
                <span className="bg-gray-50 border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-600">Cash back on some purchases</span>
                <span className="px-3 py-1 rounded-full text-sm" style={{ background: '#fef2f2', color: '#dc2626' }}>More social than practical</span>
              </div>
            </div>

            {/* Lyst */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-2xl flex-shrink-0">
                  &#128269;
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">Lyst</h3>
                  <p className="text-gray-500 text-sm">Free &middot; <a href="https://lyst.com" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#FF70D9' }}>lyst.com</a></p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Lyst is more of a fashion search engine than a pure wishlist app. It aggregates products from over 17,000 brands and retailers, with personalized recommendations based on your browsing. Great for discovery and finding deals across different stores, but less focused on the personal wishlist experience Carted offered.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ background: 'rgba(255,112,217,0.1)', color: '#FF70D9' }}>17,000+ brands</span>
                <span className="bg-gray-50 border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-600">Price tracking</span>
                <span className="bg-gray-50 border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-600">Personalized recommendations</span>
                <span className="px-3 py-1 rounded-full text-sm" style={{ background: '#fef2f2', color: '#dc2626' }}>More discovery than wishlist</span>
              </div>
            </div>

            {/* Wontsy - Featured */}
            <div className="relative rounded-2xl p-8 mb-6" style={{ background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #FF70D9, #6EC1E4) border-box', border: '2px solid transparent' }}>
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: 'linear-gradient(135deg, #FF70D9, #6EC1E4)' }}></div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                  <img src="https://wontsy.com/mainavatar.png" alt="Wontsy" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">Wontsy</h3>
                  <p className="text-gray-500 text-sm">Free &middot; Chrome, Safari, iOS, Android &middot; <a href="https://wontsy.com" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#FF70D9' }}>wontsy.com</a></p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide" style={{ background: 'rgba(255,112,217,0.1)', color: '#FF70D9' }}>Fashion-focused</span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Wontsy is built specifically for fashion shopping. The main difference from other wishlists is the <strong>outfit builder</strong> &mdash; you can drag and drop saved items to see how they look together before buying, see the total cost of an outfit, and share looks to Pinterest or with friends. If you used Carted mainly for clothes and accessories, this fills that gap plus adds outfit planning that Carted never had.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-50 border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-600">Universal saving</span>
                <span className="bg-gray-50 border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-600">Price alerts</span>
                <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ background: 'rgba(255,112,217,0.1)', color: '#FF70D9' }}>Outfit builder</span>
                <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ background: 'rgba(255,112,217,0.1)', color: '#FF70D9' }}>Pinterest sharing</span>
                <span className="bg-gray-50 border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-600">Collections</span>
                <span className="px-3 py-1 rounded-full text-sm" style={{ background: '#fef2f2', color: '#dc2626' }}>Fashion-only focus</span>
              </div>
            </div>
          </section>

          {/* Section 4: Comparison Table */}
          <section className="mb-16" id="comparison">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Feature Comparison</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Here's how the main Carted alternatives stack up on the features that mattered most:
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
              <table className="w-full min-w-[600px]">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: '#561269' }}>Feature</th>
                    <th className="px-4 py-3 text-left font-semibold text-red-600">Carted</th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: '#561269' }}>Moonsift</th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: '#561269' }}>Locker</th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: '#561269', background: 'rgba(255,112,217,0.05)' }}>Wontsy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Status</td>
                    <td className="px-4 py-3 text-red-600 font-medium">Shut down</td>
                    <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                    <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                    <td className="px-4 py-3 text-green-600 font-bold" style={{ background: 'rgba(255,112,217,0.05)' }}>&#10003;</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Save from any store</td>
                    <td className="px-4 py-3 text-gray-400">&ndash;</td>
                    <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                    <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                    <td className="px-4 py-3 text-green-600 font-bold" style={{ background: 'rgba(255,112,217,0.05)' }}>&#10003;</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Price drop alerts</td>
                    <td className="px-4 py-3 text-gray-400">&ndash;</td>
                    <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                    <td className="px-4 py-3 text-gray-400">&ndash;</td>
                    <td className="px-4 py-3 text-green-600 font-bold" style={{ background: 'rgba(255,112,217,0.05)' }}>&#10003;</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Gift list / sharing</td>
                    <td className="px-4 py-3 text-gray-400">&ndash;</td>
                    <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                    <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                    <td className="px-4 py-3 text-green-600 font-bold" style={{ background: 'rgba(255,112,217,0.05)' }}>&#10003;</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Outfit building</td>
                    <td className="px-4 py-3 text-gray-400">&ndash;</td>
                    <td className="px-4 py-3 text-gray-400">&ndash;</td>
                    <td className="px-4 py-3 text-gray-500">Collages only</td>
                    <td className="px-4 py-3 text-green-600 font-bold" style={{ background: 'rgba(255,112,217,0.05)' }}>&#10003;</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Mobile app</td>
                    <td className="px-4 py-3 text-gray-400">&ndash;</td>
                    <td className="px-4 py-3 text-gray-700">iOS, Android</td>
                    <td className="px-4 py-3 text-gray-700">iOS</td>
                    <td className="px-4 py-3 text-gray-700" style={{ background: 'rgba(255,112,217,0.05)' }}>iOS, Android</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Browser extension</td>
                    <td className="px-4 py-3 text-gray-400">&ndash;</td>
                    <td className="px-4 py-3 text-gray-700">Chrome</td>
                    <td className="px-4 py-3 text-gray-700">Chrome</td>
                    <td className="px-4 py-3 text-gray-700" style={{ background: 'rgba(255,112,217,0.05)' }}>Chrome, Safari</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Price</td>
                    <td className="px-4 py-3 text-gray-400">&ndash;</td>
                    <td className="px-4 py-3 text-gray-700">Free</td>
                    <td className="px-4 py-3 text-gray-700">Free</td>
                    <td className="px-4 py-3 text-gray-700" style={{ background: 'rgba(255,112,217,0.05)' }}>Free</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: Which to Choose */}
          <section className="mb-16" id="which-to-choose">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Which Should You Choose?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              There's no single "best" Carted replacement &mdash; it depends on your shopping habits:
            </p>

            <ul className="text-lg text-gray-700 space-y-4 mb-8">
              <li className="flex items-start">
                <span className="mr-3 mt-1" style={{ color: '#FF70D9' }}>&bull;</span>
                <span><strong>For gift lists and sharing with family:</strong> Moonsift. The gift registry features are the most polished, and recipients don't need accounts to view lists.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1" style={{ color: '#FF70D9' }}>&bull;</span>
                <span><strong>For social shopping and discovery:</strong> Locker. If you like seeing what others are buying and getting inspiration, the community features are good.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1" style={{ color: '#FF70D9' }}>&bull;</span>
                <span><strong>For fashion and outfit planning:</strong> <a href="https://wontsy.com" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#FF70D9' }}>Wontsy</a>. If you saved clothes on Carted and wished you could see how items work together, the outfit builder fills that gap.</span>
              </li>
            </ul>

            <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(255,112,217,0.08) 0%, rgba(110,193,228,0.08) 100%)', borderLeft: '4px solid #FF70D9' }}>
              <p className="text-gray-800 font-medium">
                <strong>Honest take:</strong> If you used Carted for everything &mdash; home goods, electronics, gifts, AND clothes &mdash; you might need more than one app. Moonsift for general wishlisting, Wontsy for fashion.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center rounded-2xl p-10 mb-16" style={{ background: 'linear-gradient(135deg, rgba(255,112,217,0.08) 0%, rgba(110,193,228,0.08) 100%)' }}>
            <p className="text-xl text-gray-700 mb-6">Miss planning outfits from your saved items? Try the wishlist with outfit building.</p>
            <a
              href="https://wontsy.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-white font-semibold text-lg rounded-full transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #FF70D9, #6EC1E4)', boxShadow: '0 4px 20px rgba(255, 112, 217, 0.3)' }}
            >
              Try Wontsy Free
            </a>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 pt-12 border-t border-gray-200" id="faq">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="pb-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Why is the Carted app closing?</h3>
                <p className="text-gray-600">
                  Carted shut down in October 2025 after 4 years. The company said they didn't reach the scale needed to continue, citing changing e-commerce conditions and competition from social media platforms like TikTok and Instagram adding their own shopping features.
                </p>
              </div>

              <div className="pb-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Is there another app like Carted?</h3>
                <p className="text-gray-600">
                  Yes. Moonsift, Locker, and <a href="https://wontsy.com" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#FF70D9' }}>Wontsy</a> all offer universal wishlist features similar to Carted. Each has different strengths &mdash; Moonsift for gift lists, Locker for social discovery, Wontsy for fashion and outfit building.
                </p>
              </div>

              <div className="pb-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">What is the app that saves clothes you want to buy?</h3>
                <p className="text-gray-600">
                  Universal wishlist apps like Moonsift and Wontsy let you save clothing from any store using browser extensions. <a href="https://wontsy.com" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#FF70D9' }}>Wontsy</a> is specifically built for fashion and includes an outfit builder to see how saved items work together.
                </p>
              </div>

              <div className="pb-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Is there an app that tracks when things go on sale?</h3>
                <p className="text-gray-600">
                  Yes. Moonsift and Wontsy both include price drop notifications. Save items to your wishlist and you'll get alerted when prices change.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I recover my Carted wishlist?</h3>
                <p className="text-gray-600">
                  Unfortunately, no. When Carted shut down, saved data was not transferable. You'll need to rebuild your wishlist in a new app. The good news is most alternatives have quick browser extensions that make adding items easy.
                </p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/smart-shopping-tools" className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-pink-300 transition-all">
                <h3 className="font-semibold text-gray-900 mb-2">Smart Shopping: Price Tracking & Universal Wishlist</h3>
                <p className="text-gray-600 text-sm">Master price tracking, sale alerts, and universal wishlists.</p>
              </Link>
              <Link to="/ai-fashion-shopping" className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-pink-300 transition-all">
                <h3 className="font-semibold text-gray-900 mb-2">AI Fashion Shopping</h3>
                <p className="text-gray-600 text-sm">How AI is transforming the way we shop for clothes.</p>
              </Link>
            </div>
          </section>

        </div>
      </article>

      <Footer />
    </div>
  );
};

export default CartedAlternative;
