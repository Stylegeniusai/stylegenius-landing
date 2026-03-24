import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Check, Sparkles, Upload, FileText, ArrowRight, ShieldCheck } from "lucide-react";

const STRIPE_PAYMENT_LINK = import.meta.env.VITE_STRIPE_PAYMENT_LINK || '#';

/* ── CSS-only PDF mockup ── */
const PdfMockup = () => {
  const palettes = {
    cool: ["#7B8794", "#A2B5BB", "#D4C2FC", "#F2E9E4", "#C9ADA7"],
    best: ["#B56576", "#E56B6F", "#EAAC8B", "#355070", "#6D597A"],
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute top-4 left-4 right-0 bg-white rounded-xl shadow-lg border border-gray-100 p-6 h-[340px] rotate-2" />
      <div className="absolute top-2 left-2 right-2 bg-white rounded-xl shadow-lg border border-gray-100 p-6 h-[340px] -rotate-1">
        <div className="space-y-4">
          <div className="h-3 w-32 bg-gray-100 rounded" />
          <div className="grid grid-cols-5 gap-2">
            {palettes.cool.map((c, i) => (
              <div key={i} className="aspect-square rounded-lg" style={{ backgroundColor: c }} />
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-2 w-full bg-gray-50 rounded" />
            <div className="h-2 w-3/4 bg-gray-50 rounded" />
            <div className="h-2 w-5/6 bg-gray-50 rounded" />
          </div>
        </div>
      </div>
      <div className="relative bg-white rounded-xl shadow-xl border border-gray-100 p-6 h-[340px]">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-rose-400 to-pink-500" />
          <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">StyleGenius</span>
        </div>
        <p className="text-xs text-gray-300 mb-4">Personal Color & Style Analysis</p>
        <div className="mb-4">
          <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-2">Your Color Season</p>
          <p className="text-sm font-semibold text-gray-800 mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Soft Summer</p>
          <p className="text-[10px] text-gray-400 leading-relaxed">Muted, cool-toned colors with low contrast. Your palette is gentle, elegant, and sophisticated.</p>
        </div>
        <div className="mb-4">
          <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-2">Your Best Colors</p>
          <div className="grid grid-cols-5 gap-1.5">
            {palettes.best.map((c, i) => (
              <div key={i} className="aspect-square rounded-md shadow-sm" style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>
        <div className="mb-4">
          <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-2">Makeup Palette</p>
          <div className="flex gap-3">
            {[
              { color: "#B56576", label: "Lip" },
              { color: "#E8A87C", label: "Blush" },
              { color: "#6D597A", label: "Shadow" },
              { color: "#FAEDCD", label: "Base" },
            ].map((m, i) => (
              <div key={i} className="text-center">
                <div className="w-6 h-6 rounded-full mx-auto mb-0.5 shadow-sm" style={{ backgroundColor: m.color }} />
                <span className="text-[8px] text-gray-400">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Avoid These</p>
          <div className="flex gap-1.5">
            {["#FF6B00", "#FFD700", "#00FF00"].map((c, i) => (
              <div key={i} className="w-5 h-5 rounded-md relative" style={{ backgroundColor: c }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-[1.5px] bg-white/80 rotate-45 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

/* ── Star Rating ── */
const Stars = () => (
  <div className="inline-flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

/* ── Mini trust bar (reused before CTA buttons) ── */
const TrustBar = () => (
  <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400 mt-4">
    <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> 7-day money-back guarantee</span>
    <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
    <span>Secure payment via Stripe</span>
    <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
    <span>PDF delivered within 48h</span>
  </div>
);

const PersonalAnalysis = () => {
  const handleCheckout = () => {
    window.location.href = STRIPE_PAYMENT_LINK;
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Personal Color & Style Analysis — Discover Your Best Colors"
        description="Get a personalized color and style analysis PDF. Discover your best colors, makeup shades, outfits for your body type, and what to avoid. Delivered within 48 hours."
        keywords="personal color analysis, style analysis, color season, best colors for me, personal styling, body type analysis, color consultation"
        canonicalUrl="/personal-analysis"
        ogType="website"
      />
      <Navigation />

      {/* ════════ HERO ════════ */}
      <section className="pt-8 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-rose-50 via-pink-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 bg-rose-100/80 text-rose-700 rounded-full text-sm font-medium mb-6 tracking-wide">
                Personal Analysis by StyleGenius
              </span>
              <h1
                className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Discover the colors & styles{" "}
                <span className="bg-clip-text text-transparent" style={{ background: "linear-gradient(135deg, #e11d48, #f472b6, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  made for you
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Stop guessing. Get a personalized PDF with your best colors, makeup shades, outfit ideas for your body type — and what to avoid. Delivered to your inbox within 48 hours.
              </p>
              <button
                onClick={handleCheckout}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all hover:scale-105 shadow-lg shadow-gray-900/20"
              >
                Discover my perfect colors — $49
                <ArrowRight className="w-5 h-5" />
              </button>
              <TrustBar />
            </div>
            <div className="flex justify-center">
              <PdfMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ════════ SOUND FAMILIAR? ════════ */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-10"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Sound familiar?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "You buy clothes that look great online — but terrible on you",
                "You stick to black because you don't know what colors work",
                "You've spent hundreds on makeup shades that don't match",
                "You feel like everyone else has \"their style\" figured out except you",
              ].map((text, i) => (
                <div key={i} className="flex gap-3 p-4 rounded-xl bg-gray-50">
                  <span className="text-rose-400 mt-0.5 text-lg leading-none">&ldquo;</span>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-gray-500">
              You're not bad at fashion — you just don't have the right information yet.
            </p>
          </div>
        </div>
      </section>

      {/* ════════ BEFORE / AFTER ════════ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="text-center">
                <p className="text-sm uppercase tracking-wider text-gray-400 mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Before</p>
                <img
                  src={`${BLOG_IMAGE_BASE}/analysis-before.png`}
                  alt="Before — wearing colors that don't match your complexion"
                  className="w-full max-w-xs mx-auto md:max-w-none h-auto rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <p className="text-sm uppercase tracking-wider text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>After</p>
                <img
                  src={`${BLOG_IMAGE_BASE}/analysis-after.png`}
                  alt="After — wearing your perfect color palette"
                  className="w-full max-w-xs mx-auto md:max-w-none h-auto rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ WHAT'S INSIDE ════════ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What you'll discover
            </h2>
            <p className="text-gray-500 text-center mb-12 text-lg">
              15–20 beautifully designed pages, personalized to your unique coloring and body type.
            </p>
            <div className="space-y-5">
              {[
                { title: "Your color season & best color palette", desc: "We analyze your skin tone, hair, and eyes to find the exact shades that make you glow." },
                { title: "Makeup colors that complement you", desc: "Lip, blush, eyeshadow, and foundation recommendations based on your coloring." },
                { title: "Colors & patterns to avoid", desc: "Learn which shades wash you out — so you stop wasting money on pieces that don't work." },
                { title: "Outfit ideas for your body type", desc: "Silhouettes, cuts, and styling tricks tailored to your proportions." },
                { title: "A capsule wardrobe starting point", desc: "Key pieces in your ideal colors to build a versatile, flattering wardrobe." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-rose-50/50 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mt-0.5">
                    <Check className="w-5 h-5 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                    <p className="text-gray-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button
                onClick={handleCheckout}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105"
              >
                Discover my perfect colors — $49
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ SOCIAL PROOF ════════ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Stars />
              <p className="text-sm text-gray-500 mt-2">4.9/5 average rating</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "I've always felt unsure shopping for clothes. After getting my analysis, I finally understand why some colors look amazing on me and others don't. It completely changed how I shop.",
                  name: "Sofia M.",
                  detail: "Soft Summer — Stockholm",
                  initial: "S",
                  gradient: "from-rose-200 to-pink-300",
                },
                {
                  quote: "I used to buy so much black because it felt 'safe'. Turns out I'm a Warm Autumn and now I wear rust, olive and terracotta. I get compliments constantly. Best $49 I've spent.",
                  name: "Emma L.",
                  detail: "Warm Autumn — Malmö",
                  initial: "E",
                  gradient: "from-amber-200 to-orange-300",
                },
                {
                  quote: "The body type section alone was worth it. I never knew why certain jeans looked weird on me — now I know exactly what cuts to look for. So much time saved.",
                  name: "Olivia K.",
                  detail: "Pear Shape — Göteborg",
                  initial: "O",
                  gradient: "from-violet-200 to-purple-300",
                },
              ].map((t, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <Stars />
                  <blockquote className="text-gray-600 text-sm leading-relaxed mt-3 mb-5">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-semibold text-sm`} style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {t.initial}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ HOW IT WORKS ════════ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              How it works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Sparkles className="w-6 h-6" />, step: "1", title: "Pay $49", desc: "Click the button below — you'll be taken to our secure Stripe checkout. One-time payment, no subscription." },
                { icon: <Upload className="w-6 h-6" />, step: "2", title: "Fill in your details", desc: "After payment, you'll fill in a short form with your coloring, body type, and upload a selfie in natural light." },
                { icon: <FileText className="w-6 h-6" />, step: "3", title: "Get your PDF in 48h", desc: "We create your personalized analysis and send it straight to your inbox within 48 hours." },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center mx-auto mb-5 text-rose-600">
                    {item.icon}
                  </div>
                  <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 text-white text-sm font-medium mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ GUARANTEE ════════ */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center">
              <ShieldCheck className="w-7 h-7 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-1">7-day money-back guarantee</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                If you're not happy with your analysis, email us within 7 days of delivery for a full refund. No questions asked.*
              </p>
              <p className="text-gray-400 text-xs mt-1">
                *Refund applies to first-time purchases. One refund per customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ SOCIAL PROOF MINI + CTA ════════ */}
      <section className="py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Mini testimonial */}
            <div className="mb-10 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 inline-block">
              <Stars />
              <p className="text-gray-600 mt-3 mb-4 italic text-sm max-w-md">
                &ldquo;I was skeptical but this was genuinely one of the best purchases I've made for myself. I wear color now and I actually love getting dressed in the morning.&rdquo;
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-200 to-cyan-300 flex items-center justify-center text-white text-xs font-semibold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  L
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-900">Linda A.</p>
                  <p className="text-xs text-gray-400">Deep Winter — Uppsala</p>
                </div>
              </div>
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Ready to discover your best look?
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
              Stop guessing and start dressing with confidence.
            </p>
            <button
              onClick={handleCheckout}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all hover:scale-105 shadow-lg shadow-gray-900/20"
            >
              Discover my perfect colors — $49
              <ArrowRight className="w-5 h-5" />
            </button>
            <TrustBar />
          </div>
        </div>
      </section>

      {/* ════════ FAQ ════════ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl font-bold text-gray-900 mb-10 text-center"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Questions?
            </h2>
            <div className="space-y-6">
              {[
                { q: "What exactly do I receive?", a: "A beautifully designed PDF (15–20 pages) with your personal color season, best colors, makeup recommendations, outfit ideas for your body type, and a capsule wardrobe starting point." },
                { q: "How long does delivery take?", a: "You'll receive your PDF via email within 48 hours on working days (Monday–Friday). Orders placed on weekends are delivered by Tuesday." },
                { q: "Can you really determine my colors from a selfie?", a: "Yes — combined with the details you provide about your hair, eyes, and skin tone, a natural-light selfie gives us what we need to identify your color season accurately. It's the same information a stylist uses in person." },
                { q: "What if I'm not happy with my analysis?", a: "We offer a full refund within 7 days of delivery. No questions asked. Just email us and we'll process it immediately." },
                { q: "Do I need to upload a selfie?", a: "It's optional but highly recommended. A photo in natural light helps us determine your color season much more accurately. Without it, we rely on your form answers alone." },
                { q: "Is this a subscription?", a: "No. It's a one-time payment of $49. You receive your PDF and that's it — no recurring charges." },
              ].map((item, i) => (
                <details key={i} className="group">
                  <summary className="flex justify-between items-center cursor-pointer py-4 px-5 rounded-xl hover:bg-gray-50 transition-colors font-medium text-gray-900">
                    {item.q}
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-5 pb-4 text-gray-500 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PersonalAnalysis;
