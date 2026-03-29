import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Check, Sparkles, Upload, FileText, ArrowRight, ShieldCheck, X } from "lucide-react";

const STRIPE_PAYMENT_LINK = import.meta.env.VITE_STRIPE_PAYMENT_LINK || '#';

/* ── CSS-only PDF mockup — stacked cards ── */
const PdfMockup = () => (
  <div className="relative w-full max-w-sm mx-auto pt-10 pb-4 pr-2">
    {/* Card 3 — back */}
    <div className="absolute -top-4 left-10 -right-4 bottom-8 bg-white rounded-2xl shadow-md border border-gray-100 rotate-[4deg]" />
    {/* Card 2 — middle */}
    <div className="absolute -top-2 left-5 -right-2 bottom-4 bg-white rounded-2xl shadow-lg border border-gray-100 rotate-[2deg] p-6">
      <p className="text-[10px] uppercase tracking-wider text-gray-300 mb-3">Body Type Guide</p>
      <div className="flex justify-center gap-4 mt-4">
        <div className="w-10 h-16 bg-rose-100 rounded-lg" />
        <div className="w-10 h-16 bg-rose-200 rounded-lg" />
        <div className="w-10 h-16 bg-rose-100 rounded-lg" />
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-2 w-full bg-gray-50 rounded" />
        <div className="h-2 w-3/4 bg-gray-50 rounded" />
        <div className="h-2 w-5/6 bg-gray-50 rounded" />
      </div>
    </div>
    {/* Card 1 — front (color analysis) */}
    <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-7">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-rose-400 to-pink-500" />
        <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">StyleGenius</span>
      </div>
      <p className="text-[10px] text-gray-300 mb-5">Personal Color & Style Analysis</p>

      <div className="mb-5">
        <p className="text-[9px] uppercase tracking-wider text-gray-400 mb-1.5">Your Color Season</p>
        <p className="text-base font-semibold text-gray-800 mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Soft Summer</p>
        <p className="text-[10px] text-gray-400 leading-relaxed">Muted, cool-toned colors with low contrast.</p>
      </div>

      <div className="mb-5">
        <p className="text-[9px] uppercase tracking-wider text-gray-400 mb-2">Your Best Colors</p>
        <div className="grid grid-cols-5 gap-2">
          {["#B56576", "#E56B6F", "#EAAC8B", "#355070", "#6D597A",
            "#C9ADA7", "#D4C2FC", "#A2B5BB", "#F2E9E4", "#7B8794"].map((c, i) => (
            <div key={i} className="aspect-square rounded-lg shadow-sm" style={{ backgroundColor: c }} />
          ))}
        </div>
      </div>

      <div className="mb-5">
        <p className="text-[9px] uppercase tracking-wider text-gray-400 mb-2">Makeup Palette</p>
        <div className="flex gap-4">
          {[
            { color: "#B56576", label: "Lip" },
            { color: "#E8A87C", label: "Blush" },
            { color: "#6D597A", label: "Shadow" },
            { color: "#FAEDCD", label: "Base" },
          ].map((m, i) => (
            <div key={i} className="text-center">
              <div className="w-7 h-7 rounded-full mx-auto mb-0.5 shadow-sm" style={{ backgroundColor: m.color }} />
              <span className="text-[8px] text-gray-400">{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[9px] uppercase tracking-wider text-gray-400 mb-2">Avoid These</p>
        <div className="flex gap-2">
          {["#FF6B00", "#FFD700", "#00FF00", "#000000"].map((c, i) => (
            <div key={i} className="w-7 h-7 rounded-lg relative" style={{ backgroundColor: c }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-[1.5px] bg-white/80 rotate-45 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

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
    <span>Delivered within 48h</span>
  </div>
);

const CheckoutModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10">
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          <h3
            className="text-2xl font-bold text-gray-900 mb-1"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Your personal style guide
          </h3>
          <p className="text-gray-500 text-sm mb-4">Here's exactly what you'll get within 48 hours.</p>

          {/* Social proof */}
          <div className="flex gap-3 mb-6 text-xs">
            <div className="flex-1 bg-gray-50 rounded-lg p-2.5">
              <p className="text-gray-600 italic">"The makeup changed my look completely"</p>
              <p className="text-gray-400 mt-1">— Emma L.</p>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-2.5">
              <p className="text-gray-600 italic">"Body type tips and colors — dressing is more fun now!"</p>
              <p className="text-gray-400 mt-1">— Sofia M.</p>
            </div>
          </div>

          {/* Preview images */}
          <div className="grid grid-cols-2 gap-3 mb-5 px-2 md:px-16">
            <img
              src={`${BLOG_IMAGE_BASE}/style-analysis-cover.png`}
              alt="Report cover"
              className="w-full rounded-lg shadow-md"
            />
            <img
              src={`${BLOG_IMAGE_BASE}/style-analysis-colors.png`}
              alt="Color season page"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* How it works */}
          <div className="flex items-start gap-3 mb-5 bg-gray-50 rounded-xl p-4">
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-medium flex items-center justify-center mb-1.5">1</div>
              <p className="text-xs text-gray-600 font-medium">You share your details & selfie</p>
            </div>
            <div className="h-px bg-gray-200 flex-1 max-w-[30px] mt-3.5" />
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-medium flex items-center justify-center mb-1.5">2</div>
              <p className="text-xs text-gray-600 font-medium">Your style coach creates your guide</p>
            </div>
            <div className="h-px bg-gray-200 flex-1 max-w-[30px] mt-3.5" />
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-medium flex items-center justify-center mb-1.5">3</div>
              <p className="text-xs text-gray-600 font-medium">Delivered to your inbox in 48h</p>
            </div>
          </div>

          {/* What's included */}
          <div className="grid grid-cols-2 gap-2.5 mb-5 text-sm">
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Your color season & best colors</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Makeup palette (lips, blush, eyes)</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Colors & patterns to avoid</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Body type guide & best styles</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Capsule wardrobe starter</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Saveable phone swatch</span>
            </div>
          </div>

          {/* CTA */}
          <a
            href={STRIPE_PAYMENT_LINK}
            className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-gray-900 text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all hover:scale-[1.02] shadow-lg shadow-gray-900/20"
          >
            Continue to payment — <span className="line-through text-gray-400 mr-1">$129</span>$89
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Trust */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400 mt-4">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> 7-day money-back guarantee</span>
            <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
            <span>Secure payment via Stripe</span>
            <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
            <span>Delivered within 48h</span>
          </div>

        </div>
      </div>
    </div>
  );
};

const PersonalAnalysis = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCheckout = () => {
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Personal Color & Style Analysis Online — Find Your Best Colors, Season & Outfits"
        description="Get your colors done online. Upload a selfie and receive a personalized color season analysis, makeup palette, body type guide, and capsule wardrobe — delivered in 48 hours. $89 with 7-day money-back guarantee."
        keywords="personal color analysis online, get my colors done online, what colors suit me, find my color season, seasonal color analysis, am I cool or warm toned, color analysis with selfie, style analysis, body type analysis, what season am I, color consultation online, personal style guide"
        canonicalUrl="/personal-analysis"
        ogType="website"
        faq={[
          { question: "How much does it cost to get your colors analyzed?", answer: "Our personal color & style analysis costs $89 (normally $129) — a one-time payment with no subscription. You receive a full personalized guide with your color season, best colors, makeup palette, body type outfits, and a saveable phone swatch within 48 hours." },
          { question: "Can I do a color analysis online with a selfie?", answer: "Yes. You upload a selfie in natural light along with details about your hair, eyes, and skin tone. Our stylists use this to determine your exact color season and create your personalized guide." },
          { question: "What is included in a personal color analysis?", answer: "Your color season, a palette of your 15 best colors, colors to avoid, makeup recommendations (lip, blush, eyeshadow, foundation), outfit ideas for your body type, a saveable phone swatch, and a capsule wardrobe starting point." },
          { question: "How long does an online color analysis take?", answer: "After you complete checkout and submit your details, your personalized guide is delivered to your email within 48 hours on working days. Orders placed on weekends are delivered by Tuesday." },
          { question: "Is an online color analysis accurate?", answer: "Yes — combined with your selfie in natural light and the details you provide about your hair, eyes, and skin tone, we can accurately determine your color season. It's the same information a stylist uses in person." },
        ]}
      />
      <CheckoutModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Navigation />

      {/* ════════ HERO ════════ */}
      <section className="pt-12 pb-24 lg:pt-20 lg:pb-32 bg-gradient-to-b from-rose-50 via-pink-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 bg-rose-100/80 text-rose-700 rounded-full text-sm font-medium mb-6 tracking-wide">
                Personal Analysis by StyleGenius
              </span>
              <h1
                className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Discover the colors & styles{" "}
                made for you
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Stop guessing what works. Get a personalized guide with your best colors, makeup shades, outfit ideas for your body type — and what to avoid. Straight to your inbox within 48 hours.
              </p>
              <button
                onClick={handleCheckout}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all hover:scale-105 shadow-lg shadow-gray-900/20"
              >
                Discover my perfect colors — <span className="line-through text-gray-400 mr-1">$129</span> $89
                <ArrowRight className="w-5 h-5" />
              </button>
              <TrustBar />
            </div>
            <div className="flex justify-center gap-4">
              <img
                src={`${BLOG_IMAGE_BASE}/style-analysis-cover.png`}
                alt="Style analysis report cover — Unleash Your Style"
                className="w-1/2 max-w-[220px] rounded-xl shadow-xl -rotate-2"
              />
              <img
                src={`${BLOG_IMAGE_BASE}/style-analysis-colors.png`}
                alt="Style analysis color season page — Your best colors"
                className="w-1/2 max-w-[220px] rounded-xl shadow-xl rotate-2 mt-6"
              />
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

      {/* ════════ HOW YOUR GUIDE IS MADE ════════ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              How your guide is made
            </h2>
            <p className="text-gray-500 text-center mb-12 text-lg">
              This isn't auto-generated. A real person creates your guide from scratch.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gray-900 text-white text-lg font-medium flex items-center justify-center mx-auto mb-4">1</div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">You share your details</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  After checkout, you fill in a quick form — hair color, eye color, skin tone, body type, and a selfie in natural light. Takes about 2 minutes.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gray-900 text-white text-lg font-medium flex items-center justify-center mx-auto mb-4">2</div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">Your style coach analyzes everything</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  A trained style coach personally reviews your coloring, undertone, and proportions to determine your color season and most flattering styles. No templates, no AI guesswork.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gray-900 text-white text-lg font-medium flex items-center justify-center mx-auto mb-4">3</div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">Your personal guide arrives</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  A 12-page PDF with your colors, makeup palette, body type guide, capsule wardrobe, and outfit ideas — straight to your inbox within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ REPORT PREVIEW ════════ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              See what's inside your guide
            </h2>
            <p className="text-gray-500 text-center mb-12 text-lg">
              A real preview from one of our personalized reports.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <img
                src={`${BLOG_IMAGE_BASE}/style-analysis-cover.png`}
                alt="Style analysis report cover — Unleash Your Style"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
              <img
                src={`${BLOG_IMAGE_BASE}/style-analysis-colors.png`}
                alt="Style analysis color season page — Your best colors"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
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
              Everything personalized to your unique coloring and body type.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Color season & palette */}
              <div className="p-6 rounded-2xl bg-gray-50 flex flex-col">
                <h3 className="font-semibold text-gray-900 text-lg mb-3">Your color season & best palette</h3>
                <div className="h-24 flex items-center mb-3">
                  <div className="grid grid-cols-5 gap-1.5 w-full">
                    {["#B56576", "#E56B6F", "#355070", "#6D597A", "#EAAC8B", "#C9ADA7", "#D4C2FC", "#A2B5BB", "#F2E9E4", "#7B8794"].map((c, i) => (
                      <div key={i} className="aspect-square rounded-lg" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-auto">We analyze your skin tone, hair, and eyes to find the exact shades that make you glow.</p>
              </div>

              {/* Makeup */}
              <div className="p-6 rounded-2xl bg-gray-50 flex flex-col">
                <h3 className="font-semibold text-gray-900 text-lg mb-3">Makeup colors that complement you</h3>
                <div className="h-24 flex items-center">
                  <div className="flex gap-4">
                    {[
                      { color: "#B56576", label: "Lip" },
                      { color: "#E8A87C", label: "Blush" },
                      { color: "#6D597A", label: "Shadow" },
                      { color: "#FAEDCD", label: "Base" },
                    ].map((m, i) => (
                      <div key={i} className="text-center">
                        <div className="w-10 h-10 rounded-full shadow-sm mx-auto" style={{ backgroundColor: m.color }} />
                        <span className="text-xs text-gray-400 mt-1 block">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-auto">Lip, blush, eyeshadow, and foundation recommendations based on your coloring.</p>
              </div>

              {/* Colors to avoid */}
              <div className="p-6 rounded-2xl bg-gray-50 flex flex-col">
                <h3 className="font-semibold text-gray-900 text-lg mb-3">Colors & patterns to avoid</h3>
                <div className="h-24 flex items-center">
                  <div className="flex gap-2">
                    {["#FF6B00", "#FFD700", "#00FF00", "#000000"].map((c, i) => (
                      <div key={i} className="w-10 h-10 rounded-lg relative" style={{ backgroundColor: c }}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-7 h-[2px] bg-white/80 rotate-45 rounded" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-auto">Learn which shades wash you out — so you stop wasting money on pieces that don't work.</p>
              </div>

              {/* Outfit ideas */}
              <div className="p-6 rounded-2xl bg-gray-50 flex flex-col">
                <h3 className="font-semibold text-gray-900 text-lg mb-3">Outfit ideas for your body type</h3>
                <div className="h-24 flex items-center justify-center">
                  <div className="flex gap-2">
                    {[
                      "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/bodytype/round/structured-jackets.png",
                      "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/bodytype/invertedtriangle/v-neck-tops.png",
                      "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/bodytype/fullhourglass/strategic-color-placement.png",
                    ].map((src, i) => (
                      <img key={i} src={src} alt="Body type outfit example" className="h-24 w-auto object-contain" loading="lazy" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-auto">Silhouettes, cuts, and styling tricks tailored to your proportions — plus real shopping links.</p>
              </div>

              {/* Capsule wardrobe */}
              <div className="p-6 rounded-2xl bg-gray-50 flex flex-col">
                <h3 className="font-semibold text-gray-900 text-lg mb-3">A capsule wardrobe starting point</h3>
                <div className="flex items-center">
                  <img
                    src="https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog/333-closet-before-after.png"
                    alt="Capsule wardrobe example"
                    className="w-full h-auto object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
                <p className="text-gray-500 text-sm mt-auto">Key pieces in your ideal colors to build a versatile, flattering wardrobe.</p>
              </div>

              {/* Saveable swatch — phone mockup */}
              <div className="p-6 rounded-2xl bg-gray-50 flex flex-col items-center">
                <h3 className="font-semibold text-gray-900 text-lg mb-4">Your colors, always with you</h3>
                <div className="relative w-[180px] mb-4">
                  <div className="bg-gray-900 rounded-[2rem] p-2.5 shadow-2xl">
                    <div className="bg-white rounded-[1.5rem] overflow-hidden">
                      <div className="flex justify-between items-center px-4 pt-2.5 pb-1">
                        <span className="text-[8px] text-gray-400">9:41</span>
                        <div className="w-12 h-3 bg-gray-900 rounded-full" />
                        <div className="w-2.5 h-1.5 bg-gray-400 rounded-sm" />
                      </div>
                      <div className="px-4 pt-3 pb-5">
                        <p className="text-[8px] uppercase tracking-wider text-gray-400 mb-1">Your palette</p>
                        <p className="text-xs font-semibold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Light Summer</p>
                        <div className="grid grid-cols-5 gap-1 mb-3">
                          {["#B0C4DE", "#D4C2FC", "#C9ADA7", "#B56576", "#6D597A",
                            "#A2B5BB", "#E8A87C", "#F2E9E4", "#355070", "#EAAC8B",
                            "#7B8794", "#CCD5AE", "#FAEDCD", "#E56B6F", "#D4A373"].map((c, i) => (
                            <div key={i} className="aspect-square rounded-sm shadow-sm" style={{ backgroundColor: c }} />
                          ))}
                        </div>
                        <p className="text-[8px] uppercase tracking-wider text-gray-400 mb-1">Makeup</p>
                        <div className="flex gap-1.5">
                          {[{ color: "#B56576", label: "Lip" }, { color: "#E8A87C", label: "Blush" }, { color: "#6D597A", label: "Eye" }].map((m, i) => (
                            <div key={i}>
                              <div className="w-4 h-4 rounded-full shadow-sm" style={{ backgroundColor: m.color }} />
                              <span className="text-[6px] text-gray-400">{m.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm text-center max-w-sm mt-auto">Save your personal palette to your phone and take it shopping. No more guessing in the fitting room.</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <button
                onClick={handleCheckout}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105"
              >
                Get my personal style guide — <span className="line-through text-gray-400 mr-1">$129</span> $89
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
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Really liked the combo of body type tips and all the colors. Dressing is more fun now!",
                  name: "Sofia M.",
                  detail: "Soft Summer",
                  initial: "S",
                  gradient: "from-rose-200 to-pink-300",
                },
                {
                  quote: "Its great! The makeup changed my look completely and most of the colors really suit me",
                  name: "Emma L.",
                  detail: "Warm Autumn",
                  initial: "E",
                  gradient: "from-amber-200 to-orange-300",
                },
                {
                  quote: "Great content and did a good job explaining why certain colors and styles suit me better",
                  name: "Olivia K.",
                  detail: "Pear Shape",
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
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center mx-auto mb-5 text-rose-600">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 text-white text-sm font-medium mb-3">1</div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">Place your order</h3>
                <p className="text-gray-500">Click the button and check out securely. One-time purchase — no subscription, no hidden fees.</p>
              </div>

              {/* Step 2 — with form previews */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center mx-auto mb-5 text-rose-600">
                  <Upload className="w-6 h-6" />
                </div>
                <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 text-white text-sm font-medium mb-3">2</div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">Tell us about you</h3>
                <p className="text-gray-500 mb-4">Pick your skin tone, body type, hair & eye color — then snap a selfie. Takes 2 minutes.</p>
                <div className="flex justify-center gap-3 mt-2">
                  {["form-1", "form-2", "form-3"].map((f, i) => (
                    <img
                      key={i}
                      src={`${BLOG_IMAGE_BASE}/${f}.png`}
                      alt="Form preview"
                      className="w-28 md:w-32 h-auto rounded-xl shadow-md border border-gray-100"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center mx-auto mb-5 text-rose-600">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 text-white text-sm font-medium mb-3">3</div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">Get your guide</h3>
                <p className="text-gray-500 mb-4">Your personalized analysis lands in your inbox within 48 hours — ready to save, screenshot, and take shopping.</p>
                <img
                  src={`${BLOG_IMAGE_BASE}/style-analysis-preview.png`}
                  alt="Style analysis preview"
                  className="w-32 md:w-36 h-auto mx-auto rounded-xl shadow-md"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="text-center mt-12">
              <button
                onClick={handleCheckout}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all hover:scale-105 shadow-lg shadow-gray-900/20"
              >
                Get my personal style guide — <span className="line-through text-gray-400 mr-1">$129</span> $89
                <ArrowRight className="w-5 h-5" />
              </button>
              <TrustBar />
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
                If you're not happy with your analysis, email us at ai@stylegenius.app within 7 days of delivery for a full refund. No questions asked.*
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
                &ldquo;Super helpful! I finally know what works for me and shopping feels way easier now&rdquo;
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
              Start my style transformation — <span className="line-through text-gray-400 mr-1">$129</span> $89
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
                { q: "What exactly do I receive?", a: "A beautifully designed personal guide with your color season, best colors, a saveable palette for your phone, makeup recommendations, outfit ideas for your body type, shopping links, and a capsule wardrobe starting point." },
                { q: "How long does delivery take?", a: "Your guide will be in your inbox within 48 hours on working days (Monday–Friday). Orders placed on weekends are delivered by Tuesday." },
                { q: "Can you really determine my colors from a selfie?", a: "Yes — combined with the details you provide about your hair, eyes, and skin tone, a natural-light selfie gives us what we need to identify your color season accurately. It's the same information a stylist uses in person." },
                { q: "What if I'm not happy with my analysis?", a: "We offer a full refund within 7 days of delivery. No questions asked. Just email ai@stylegenius.app and we'll process it immediately." },
                { q: "Why do I need to upload a selfie?", a: "A photo in natural light lets us see your true coloring and determine your color season accurately. It's required — but it only takes a second. Just face a window, no makeup or filters, and snap a pic." },
                { q: "Is this a subscription?", a: "No — it's a one-time purchase of $89 (normally $129). You get your personal guide and that's it. No recurring charges, ever." },
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
