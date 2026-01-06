import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { getAppStoreUrl, getDownloadButtonText } from "../utils/deviceDetection";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const OnlineDressingRoom = () => {
  const [appStoreUrl, setAppStoreUrl] = useState('');
  const [buttonText, setButtonText] = useState('Download App');

  useEffect(() => {
    setAppStoreUrl(getAppStoreUrl());
    setButtonText(getDownloadButtonText());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Online Dressing Room: Try Clothes Virtually Before You Buy 2026"
        description="Discover how online dressing rooms and virtual fitting rooms work in 2026. Try on clothes from home using AR and AI technology. The complete guide to virtual try-on shopping."
        keywords="online dressing room, virtual fitting room, try clothes online, virtual try-on, AR fashion, digital fitting room, try before you buy, virtual clothing try-on 2026"
        canonicalUrl="/online-dressing-room"
        ogImage="/dressing-room-hero.png"
        ogType="article"
        article={{
          publishedTime: "2026-01-06",
          modifiedTime: "2026-01-06",
          section: "Technology",
          tags: ["online dressing room", "virtual fitting room", "virtual try-on", "fashion technology"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Online Dressing Room", url: "/online-dressing-room" }
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
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(255,112,217,0.15)', color: '#FF70D9' }}>Virtual Try-On Technology</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Online Dressing Room:{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Try It On From Home
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Virtual fitting rooms are finally here, and they're about to make "does this fit?" anxiety a thing of the past.
            </p>
          </div>
          <div className="max-w-3xl mx-auto mt-8">
            <div className="p-1 rounded-2xl" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }}>
              <img
                src={`${BLOG_IMAGE_BASE}/dressing-room-hero.png`}
                alt="Online dressing room - virtual fitting room technology"
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
              Remember the last time you bought something online, convinced it would look perfect, only to have it arrive and... not? We've all been there. The top that looked amazing on the model looks weirdly boxy on you. The dress that seemed like the perfect length hits at the most awkward spot on your legs.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              This is exactly why <strong>online dressing rooms</strong> (also called virtual fitting rooms) exist. And in 2026, this technology has gotten seriously impressive. Let's talk about how it works and how it can transform your online shopping experience.
            </p>
          </div>

          {/* What is an Online Dressing Room */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Exactly Is an Online Dressing Room?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              An online dressing room (or virtual fitting room) is technology that lets you see how clothes look on YOU without physically trying them on. Instead of imagining how that cute top might fit based on a photo of a model, you can actually see it on your body – or at least a digital version of your body.
            </p>

            <div className="rounded-2xl p-8 mb-8" style={{ background: 'linear-gradient(135deg, rgba(255,112,217,0.1) 0%, rgba(110,193,228,0.1) 100%)' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">It's Like Having a Fitting Room in Your Pocket</h3>
              <p className="text-gray-700 mb-4">
                Think about what makes in-store shopping feel "safer" – you can try things on. You can see how the fabric falls, how the color looks against your skin, how the cut flatters (or doesn't flatter) your shape. Online dressing rooms bring that same confidence to online shopping.
              </p>
              <p className="text-gray-700">
                No more ordering 5 sizes and returning 4. No more "this looked nothing like the photo" disappointments. Just informed, confident purchases.
              </p>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Do Virtual Fitting Rooms Actually Work?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              There are a few different approaches to virtual try-on technology, each with its own strengths. Here's what's happening behind the scenes:
            </p>

            <div className="space-y-8 mb-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,112,217,0.15)' }}>
                    <span className="text-xl">📸</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Photo-Based Try-On</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  You upload a photo of yourself, and AI "dresses" you in the clothes you want to try. Advanced algorithms map your body shape and proportions, then realistically render the garment onto your image. This is the most common type and works great for getting a sense of how styles look on you.
                </p>
                <p className="text-sm text-gray-500">Best for: Trying multiple items quickly, comparing styles</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(110,193,228,0.15)' }}>
                    <span className="text-xl">🎥</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Real-Time AR Try-On</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Using your phone's camera, augmented reality overlays clothes onto your live video feed. Move around and see how the clothes move with you. It's like a magic mirror – point your camera at yourself and see the outfit in real-time.
                </p>
                <p className="text-sm text-gray-500">Best for: Seeing how clothes move, checking fit in motion</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,112,217,0.15)' }}>
                    <span className="text-xl">👤</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">3D Avatar Try-On</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  You create a 3D avatar based on your measurements, and clothes are rendered on this digital twin. You can rotate the view, see the outfit from all angles, and even simulate different poses. Super detailed, though less "personal" feeling than seeing actual you.
                </p>
                <p className="text-sm text-gray-500">Best for: Detailed fit analysis, seeing all angles</p>
              </div>
            </div>
          </section>

          {/* Image: VTO Demo */}
          <div className="my-12">
            <img
              src={`${BLOG_IMAGE_BASE}/vto-demo.png`}
              alt="Virtual try-on demo showing clothes on a real person"
              className="w-full rounded-2xl shadow-lg"
            />
            <p className="text-center text-gray-500 mt-3 text-sm">Virtual try-on showing how a garment looks before purchasing</p>
          </div>

          {/* Why This Matters */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why This Actually Matters (It's Not Just a Gimmick)</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              You might be thinking "okay cool tech, but do I really need this?" Here's why online dressing rooms are genuinely game-changing:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Return Problem</h3>
                <p className="text-gray-700 mb-3">
                  <strong>30-40% of online fashion purchases get returned.</strong> That's insane. It costs retailers billions and is terrible for the environment (many returns end up in landfills).
                </p>
                <p className="text-gray-700">
                  Virtual try-on can reduce returns by up to 36%. That's good for everyone.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Confidence Factor</h3>
                <p className="text-gray-700 mb-3">
                  <strong>73% of shoppers say they'd buy more online if they could try clothes virtually.</strong> The main barrier to online shopping isn't price or selection – it's uncertainty.
                </p>
                <p className="text-gray-700">
                  Remove that uncertainty, and people shop more confidently (and happily).
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Time Factor</h3>
                <p className="text-gray-700 mb-3">
                  Think about all the time spent: scrolling, second-guessing, ordering multiple sizes, waiting for delivery, trying on, returning, waiting for refunds...
                </p>
                <p className="text-gray-700">
                  Virtual try-on cuts through all that. Try it virtually, order the right thing, done.
                </p>
              </div>

              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Body Diversity Issue</h3>
                <p className="text-gray-700 mb-3">
                  Models don't represent most of us. Seeing clothes on a size 2, 5'10" model tells you basically nothing about how it'll look on your unique body.
                </p>
                <p className="text-gray-700">
                  Virtual try-on shows YOU – your actual shape, proportions, and coloring.
                </p>
              </div>
            </div>
          </section>

          {/* What to Look For */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Look for in a Virtual Fitting Room</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Not all online dressing rooms are created equal. Here's what separates the good from the "meh":
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Good Stuff:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>Realistic fabric rendering</strong> – The clothes should drape and fold naturally, not look pasted on</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>Accurate body mapping</strong> – It should capture your actual proportions, not just overlay a flat image</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>Works on your body type</strong> – Should handle diverse body shapes, not just model-sized bodies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>Size recommendations</strong> – Best tools also suggest which size to buy based on your measurements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>Works across stores</strong> – Universal tools that work anywhere, not just one brand</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Red Flags:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>Clothes look stiff or "photoshopped on"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>Only works with their own brand's products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>Generic avatars instead of your actual body</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>No size guidance – just visual without fit info</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Pro Tips */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pro Tips for Getting the Best Results</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }}>1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Good Lighting is Everything</h3>
                  <p className="text-gray-700">Take photos in natural, even light. Harsh shadows confuse the AI and mess with body detection. Face a window during the day for best results.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0" style={{ background: 'linear-gradient(45deg, #6EC1E4, #FF70D9)' }}>2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Wear Fitted Clothes for Photos</h3>
                  <p className="text-gray-700">Baggy clothes hide your actual shape. Wear something fitted so the AI can accurately map your body proportions. Leggings and a tank top work great.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }}>3</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Plain Background Helps</h3>
                  <p className="text-gray-700">Busy backgrounds can confuse the technology. Stand against a plain wall – the AI needs to clearly distinguish you from your surroundings.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0" style={{ background: 'linear-gradient(45deg, #6EC1E4, #FF70D9)' }}>4</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Try Different Poses</h3>
                  <p className="text-gray-700">Don't just try one angle. See how clothes look when you're standing straight vs more natural poses. This shows how pieces move and fall.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0" style={{ background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)' }}>5</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Combine with Style Analysis</h3>
                  <p className="text-gray-700">Virtual try-on shows you how things look, but <Link to="/does-this-suit-me" className="hover:underline" style={{ color: '#FF70D9' }}>style matching</Link> tells you if they'll actually suit your body type and coloring. Use both!</p>
                </div>
              </div>
            </div>
          </section>

          {/* Beyond Just Trying On */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Beyond Just "Trying On" – The Full Smart Shopping Stack</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Virtual try-on is awesome, but it's even more powerful when combined with other <Link to="/ai-fashion-shopping" className="hover:underline" style={{ color: '#FF70D9' }}>AI fashion shopping</Link> tools:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/does-this-suit-me" className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Body Type Matching</h3>
                <p className="text-gray-700">
                  AI that analyzes whether specific styles will flatter YOUR body shape. Not just "does this look okay" but "will this silhouette work for my proportions?"
                </p>
              </Link>

              <Link to="/what-season-am-i" className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Color Analysis</h3>
                <p className="text-gray-700">
                  Match clothes to your skin tone. See virtually that a color works, AND know it complements your undertones. Double confidence boost.
                </p>
              </Link>

              <Link to="/smart-shopping-tools" className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Price Tracking</h3>
                <p className="text-gray-700">
                  Found something perfect in the virtual dressing room? Track the price and get alerted when it goes on sale. Smart shopping = saving money.
                </p>
              </Link>

              <Link to="/smart-shopping-tools" className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Universal Wishlist</h3>
                <p className="text-gray-700">
                  Save all your virtual try-on favorites from any store in one place. Compare options, share with friends, and buy when ready.
                </p>
              </Link>
            </div>
          </section>

          {/* How StyleGenius Does Virtual Try-On */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How StyleGenius Virtual Try-On Works</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Most virtual try-on tools only work on one store. StyleGenius brings virtual fitting rooms to EVERY online store. Here's what makes it different:
            </p>

            <div className="rounded-2xl p-8 mb-8" style={{ background: 'linear-gradient(135deg, rgba(255,112,217,0.1) 0%, rgba(110,193,228,0.1) 100%)' }}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">🚀 Multi-Tasking Try-On</h3>
                  <p className="text-gray-700">
                    Start a virtual try-on and keep shopping. Queue up multiple items at once. No waiting around staring at loading screens – browse while StyleGenius processes in the background.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">🎯 Not Just "How It Looks" – But "Will It Suit Me?"</h3>
                  <p className="text-gray-700">
                    Unlike basic try-on tools, StyleGenius also analyzes if the item matches your skin tone and body type. You see HOW it looks AND get advice on whether the style actually flatters you.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">👗 Outfit Suggestions Included</h3>
                  <p className="text-gray-700">
                    Every analysis comes with styling tips and outfit ideas. See how to wear the piece, what to pair it with, and how to make it work for YOUR style.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">📱 Build Full Looks in the App</h3>
                  <p className="text-gray-700">
                    Want to test complete outfits? The StyleGenius app lets you build looks from scratch, mix pieces from different stores, and try them on together. See the full vision before you buy.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-8">
              <img
                src={`${BLOG_IMAGE_BASE}/stylegenius-vto-demo.png`}
                alt="StyleGenius virtual try-on showing clothes on user"
                className="w-full rounded-2xl shadow-lg"
              />
              <p className="text-center text-gray-500 mt-3 text-sm">StyleGenius virtual try-on – see it on yourself before buying</p>
            </div>
          </section>

          {/* The Future */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Where Is This Technology Going?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Virtual fitting rooms are evolving fast. Here's what's coming in the <Link to="/future-online-shopping" className="hover:underline" style={{ color: '#FF70D9' }}>future of online shopping</Link>:
            </p>

            <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, rgba(255,112,217,0.1) 0%, rgba(110,193,228,0.1) 100%)' }}>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 mt-1" style={{ color: '#FF70D9' }}>→</span>
                  <span><strong>Fabric simulation:</strong> Feel (virtually) how materials drape and move</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1" style={{ color: '#FF70D9' }}>→</span>
                  <span><strong>Social try-on:</strong> Try clothes with friends in real-time, share instantly</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1" style={{ color: '#FF70D9' }}>→</span>
                  <span><strong>AR mirrors in homes:</strong> Smart mirrors that let you try entire wardrobes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1" style={{ color: '#FF70D9' }}>→</span>
                  <span><strong>Instant styling:</strong> AI that styles complete outfits and lets you try them all</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1" style={{ color: '#FF70D9' }}>→</span>
                  <span><strong>Fit prediction:</strong> Exact size recommendations based on the specific garment, not just general sizing</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Keep Exploring</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/virtual-try-on-guide" className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Virtual Try-On Complete Guide</h3>
                <p className="text-gray-600 text-sm">Deep dive into all types of virtual try-on technology.</p>
              </Link>
              <Link to="/ai-fashion-shopping" className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">AI Fashion Shopping</h3>
                <p className="text-gray-600 text-sm">The bigger picture of how AI is transforming fashion retail.</p>
              </Link>
              <Link to="/does-this-suit-me" className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Does This Suit Me?</h3>
                <p className="text-gray-600 text-sm">AI style matching for body type and skin tone.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Try Virtual Try-On Yourself</h2>
            <p className="text-xl text-gray-600 mb-8">
              StyleGenius brings virtual fitting rooms to every online store. See how clothes look on you, check if they suit your style, and shop with confidence.
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

export default OnlineDressingRoom;
