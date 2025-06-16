export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#F6F6F6] text-[#202033]">
      {/* Navigation */}
      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-[#FF70D9] to-[#6EC1E4] bg-clip-text text-transparent">
            StyleGenius
          </span>
        </h1>
        <a
          href="#download"
          className="rounded-[30px] bg-gradient-to-r from-[#FF70D9] to-[#6EC1E4] px-6 py-3 text-white font-semibold text-[15px] shadow-lg hover:scale-105 transition"
        >
          Download App
        </a>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center max-w-4xl">
        <h2 className="text-[28px] md:text-[32px] font-bold leading-tight mb-6">
          Finally - a personal stylist who actually knows{" "}
          <span className="bg-gradient-to-r from-[#FF70D9] to-[#6EC1E4] bg-clip-text text-transparent">
            YOU
          </span>
        </h2>
        <p className="text-[16px] text-[#6D6D7A] mb-8 max-w-2xl mx-auto leading-relaxed">
          StyleGenius learns your unique style, remembers your wardrobe, and understands your body type to give you perfect outfit advice every single time.
        </p>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          {/* Feature 1 */}
          <div className="bg-white rounded-[18px] p-8 shadow-lg">
            <h3 className="text-[24px] font-bold mb-4">
              Your personal expert who remembers everything
            </h3>
            <p className="text-[#6D6D7A] text-[15px] leading-relaxed mb-6">
              Unlike generic apps, your StyleGenius knows your skin tone, body type, personal style, and every piece in your wardrobe. Ask anything - "what goes with my black jeans?" or "outfit for dinner tonight?" - and get answers tailored specifically to YOU.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-[18px] p-8 shadow-lg">
            <h3 className="text-[24px] font-bold mb-4">
              The more you use it, the smarter it gets
            </h3>
            <p className="text-[#6D6D7A] text-[15px] leading-relaxed mb-6">
              Your expert learns what you love, what flatters you, and what you already own. No more generic advice that doesn't work for your real life and real closet.
            </p>
          </div>

          {/* Feature 3 - Full Width */}
          <div className="md:col-span-2 bg-white rounded-[18px] p-8 shadow-lg">
            <h3 className="text-[24px] font-bold mb-6 text-center">
              Get help with everything
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="text-[#6D6D7A] text-[15px] space-y-3">
                  <li>• Outfit advice that knows your wardrobe</li>
                  <li>• Color recommendations for YOUR skin tone</li>
                  <li>• Style tips for YOUR body type</li>
                </ul>
              </div>
              <div>
                <ul className="text-[#6D6D7A] text-[15px] space-y-3">
                  <li>• Shopping suggestions that match what you own</li>
                  <li>• "What should I wear?" instant answers</li>
                  <li>• Build outfits from pieces you already have</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="bg-white rounded-[18px] p-12 shadow-lg max-w-3xl mx-auto">
          <h3 className="text-[26px] font-bold mb-6">
            It's like having a best friend who's amazing at style
          </h3>
          <p className="text-[#6D6D7A] text-[16px] mb-8 leading-relaxed">
            Someone who knows your entire closet by heart, and is available 24/7 to help you look incredible.
          </p>
          
          <div id="download" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#"
              className="rounded-[30px] bg-gradient-to-r from-[#FF70D9] to-[#6EC1E4] px-8 py-4 text-white font-semibold text-[16px] shadow-lg hover:scale-105 transition"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="rounded-[30px] bg-[#E8E8E8] px-8 py-4 text-[#202033] font-semibold text-[16px] hover:bg-[#ddd] transition"
            >
              Download for Android
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-[12px] text-[#6D6D7A] border-t border-[#E8E8E8]">
        <div className="container mx-auto px-6">
          © {new Date().getFullYear()} StyleGenius — affiliate links may earn us a commission.
          <div className="mt-2">
            <a href="/privacy" className="underline mr-3 hover:text-[#FF70D9]">
              Privacy
            </a>
            •
            <a href="/cookies" className="underline mx-3 hover:text-[#FF70D9]">
              Cookies
            </a>
            •
            <a href="mailto:ai@stylegenius.app" className="underline ml-3 hover:text-[#FF70D9]">
              ai@stylegenius.app
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}