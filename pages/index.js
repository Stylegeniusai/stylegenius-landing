import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1E1D36] to-[#10101A] text-white flex flex-col">
      {/* ── Navigation */}
      <header className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-wide">
          <span className="text-[#FF70D9]">Style</span>
          <span className="text-[#6EC1E4]">Genius</span>
        </h1>
        <a
          href="#waitlist"
          className="rounded-full bg-gradient-to-r from-[#FF70D9] to-[#6EC1E4] px-4 py-2 text-sm font-semibold shadow-md hover:scale-105 transition"
        >
          Join Waitlist →
        </a>
      </header>

      {/* ── Hero */}
      <section className="container flex flex-col items-center text-center mt-20 px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl">
          Unlock&nbsp;<span className="text-[#FF70D9]">your</span>&nbsp;style&nbsp;and always look your best.<br />
          Get a Personal&nbsp;AI&nbsp;stylist&nbsp;&amp;&nbsp;shopper that guides you towards perfect. 
        </h2>
      
      </section>

      {/* ── AI Stylist */}
      <section className="container mt-32 text-center px-6">
        

        <div className="mt-10 flex gap-8 flex-wrap justify-evenly">
          {["aistylistchat.png", "aistylistresponse.png"].map((file) => (
            <div
              key={file}
              className="rounded-2xl shadow-xl w-40 md:w-48"
            >
              <Image
                src={`/mockups/${file}`}
                alt={file}
                width={520}
                height={1040}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Your colours */}
      <section className="container mt-32 text-center px-6">
        <h3 className="text-4xl md:text-5xl font-extrabold mb-8">
          See your best&nbsp;— and worst&nbsp;— colors
        </h3>
        <p className="opacity-80 max-w-2xl mx-auto">
          One swipe reveals the hues that flatter you the most, and the shades that drain you.
        </p>

        <div className="mt-10 flex gap-8 flex-wrap justify-center">
          {["bestcolors.png", "worstcolors.png"].map((file) => (
            <div key={file} className="rounded-2xl shadow-xl w-40 md:w-48">
              <Image
                src={`/mockups/${file}`}
                alt={file}
                width={520}
                height={1040}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Personal shopper */}
      <section className="container mt-32 grid md:grid-cols-2 gap-14 items-center px-6">
        <div>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
            Meet your personal shopper
          </h3>
          <p className="opacity-80 leading-relaxed text-center">
            Ask for an outfit, a colour‑match or “something for a beach
            wedding.” We surf Zalando, ASOS &amp; more — serving links that
            actually suit <em>you</em>.
          </p>
        </div>
        <div className="flex gap-8 flex-wrap justify-evenly">
          {["shoppingassistant.png", "shopresult.png", "shopresultmini.png"].map(
            (file) => (
              <div
                key={file}
                className="rounded-2xl shadow-lg w-36 md:w-44"
              >
                <Image
                  src={`/mockups/${file}`}
                  alt={file}
                  width={400}
                  height={800}
                  className="object-contain"
                />
              </div>
            )
          )}
        </div>
      </section>

      {/* ── Smart recommendations */}
      <section className="container mt-32 grid md:grid-cols-2 gap-14 items-center px-6">
        <div className="order-2 md:order-1 flex gap-8 flex-wrap justify-evenly">
          {["preferences.png", "occasion.png", "stylegoal.png"].map((file) => (
            <div
              key={file}
              className="rounded-2xl shadow-lg w-36 md:w-44"
            >
              <Image
                src={`/mockups/${file}`}
                alt={file}
                width={360}
                height={720}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <div className="order-1 md:order-2">
          <h3 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
            Recommendations that get <i>you</i>
          </h3>
          <p className="opacity-80 leading-relaxed text-center">
            Set your occasion, vibe and body‑type once. Every look, tip and shopping
            pick is filtered through that lens — zero overwhelm, maximum glow‑up.
          </p>
        </div>
      </section>

      {/* ── Waitlist CTA */}
      <section
        id="waitlist"
        className="container mt-32 mb-36 text-center px-6 max-w-xl"
      >
        <h2 className="text-2xl font-bold mb-4">
          Ready to join the&nbsp;
          <span className="text-[#6EC1E4]">waitlist</span>?
        </h2>
        <p className="opacity-80 mb-8">
          Launching soon on iOS &amp; Android. Sign up and we’ll ping you the
          moment StyleGenius drops.
        </p>
        <form
          action="https://formcarry.com/s/your-form-id"
          method="POST"
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full flex-1 rounded-full px-5 py-3 text-black focus:outline-none"
          />
          <button
            type="submit"
            className="whitespace-nowrap rounded-full bg-gradient-to-r from-[#FF70D9] to-[#6EC1E4] px-6 py-3 font-semibold shadow-md hover:scale-105 transition"
          >
            Join Waitlist
          </button>
        </form>
      </section>

      {/* ── Privacy placeholder */}
      <section
        id="privacy"
        className="container mt-32 text-center px-6 max-w-xl"
      >
        <h2 className="text-2xl font-bold mb-4">Privacy&nbsp;Policy</h2>
        <p className="opacity-80">
          Full privacy policy coming soon. For now, we only use your e‑mail to
          notify you about StyleGenius updates.
        </p>
      </section>

      {/* ── Footer */}
      <footer className="mt-auto py-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} StyleGenius — affiliate links may earn us a
        commission.
        <div className="mt-2">
          <a href="#privacy" className="underline mr-3">
            Privacy
          </a>
          •
          <a href="mailto:ai@stylegenius.app" className="underline ml-3">
            ai@stylegenius.app
          </a>
        </div>
      </footer>
    </main>
  );
}
