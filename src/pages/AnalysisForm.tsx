import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { supabase } from "../lib/supabase";
import { Upload, Check } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  hairColor: string;
  eyeColor: string;
  skinTone: string;
  bodyType: string;
  height: string;
}

const AnalysisForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (!sessionId) {
      navigate("/personal-analysis", { replace: true });
    }
  }, [sessionId, navigate]);

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    hairColor: "",
    eyeColor: "",
    skinTone: "",
    bodyType: "",
    height: "",
  });
  const [selfie, setSelfie] = useState<File | null>(null);
  const [selfiePreview, setSelfiePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError("File too large. Max 10MB.");
      return;
    }
    setSelfie(file);
    setSelfiePreview(URL.createObjectURL(file));
    setError(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      let selfieUrl: string | null = null;
      if (selfie) {
        const ext = selfie.name.split(".").pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
        const { error: uploadError } = await supabase.storage
          .from("styleanalys")
          .upload(fileName, selfie);
        if (uploadError) { console.error("Upload error:", uploadError); throw new Error("Failed to upload photo. Please try again."); }
        const { data: urlData } = supabase.storage.from("styleanalys").getPublicUrl(fileName);
        selfieUrl = urlData.publicUrl;
      }

      const { error: dbError } = await supabase.from("analysis_orders").insert({
        stripe_session_id: sessionId,
        email: form.email,
        hair_color: form.hairColor,
        eye_color: form.eyeColor,
        skin_tone: form.skinTone || null,
        body_type: form.bodyType,
        height: form.height,
        selfie_url: selfieUrl,
        status: "paid",
      });
      if (dbError) throw new Error("Failed to save your details. Please try again.");

      // Discord notification
      try {
        await fetch(import.meta.env.VITE_DISCORD_WEBHOOK || "", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `**New Style Analysis Order!**\n📧 **Email:** ${form.email}\n💇 **Hair:** ${form.hairColor}\n👁️ **Eyes:** ${form.eyeColor}\n🎨 **Skin tone:** ${form.skinTone || "Not selected"}\n👗 **Body type:** ${form.bodyType}\n📏 **Height:** ${form.height}\n📸 **Selfie:** ${selfieUrl ? "Yes" : "No"}\n💳 **Stripe:** ${sessionId}\n🕐 **Time:** ${new Date().toISOString()}`,
            username: "StyleGenius Orders",
          }),
        });
      } catch (e) {
        // Don't block submission if Discord fails
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = form.email && form.hairColor && form.eyeColor && form.bodyType && form.height && selfie;

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        <SEO title="Thank You — Details Submitted" description="Your details have been submitted." canonicalUrl="/analysis-form" />
        <Navigation />
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Thank you!
              </h1>
              <p className="text-lg text-gray-600 mb-2">Your details have been submitted.</p>
              <p className="text-gray-500">
                We'll send your personalized color & style analysis to <strong className="text-gray-700">{form.email}</strong> within 48 hours.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Complete Your Analysis — Tell Us About You"
        description="Fill in your details so we can create your personalized color & style analysis."
        canonicalUrl="/analysis-form"
      />
      <Navigation />

      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-green-600 font-medium mb-2">Payment successful!</p>
              <h1
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Now tell us about you
              </h1>
              <p className="text-gray-500 text-lg">
                Fill in your details so we can create your personalized analysis. This takes about 2 minutes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email <span className="text-gray-400 font-normal">(where we'll send your PDF)</span></label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-colors bg-white" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Hair color</label>
                <img
                  src="https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog/hair-color-chart.jpg"
                  alt="Hair color reference chart"
                  className="w-full rounded-xl mb-3"
                  loading="lazy"
                />
                <select id="hairColor" name="hairColor" required value={form.hairColor} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-colors bg-white appearance-none">
                  <option value="">Select your hair color</option>
                  <optgroup label="Blonde">
                    <option value="sunflower-blonde">Sunflower Blonde</option>
                    <option value="pure-diamond">Pure Diamond</option>
                    <option value="light-ash-blonde">Light Ash Blonde</option>
                    <option value="light-blonde">Light Blonde</option>
                    <option value="reddish-blonde">Reddish Blonde</option>
                    <option value="medium-champagne">Medium Champagne</option>
                  </optgroup>
                  <optgroup label="Brown">
                    <option value="caramel">Caramel</option>
                    <option value="beeline-honey">Beeline Honey</option>
                    <option value="light-cool-brown">Light Cool Brown</option>
                    <option value="light-brown">Light Brown</option>
                    <option value="havana-brown">Havana Brown</option>
                    <option value="chocolate-brown">Chocolate Brown</option>
                    <option value="dark-golden-brown">Dark Golden Brown</option>
                    <option value="hot-toffee">Hot Toffee</option>
                    <option value="espresso">Espresso</option>
                    <option value="french-roast">French Roast</option>
                  </optgroup>
                  <optgroup label="Red / Auburn">
                    <option value="sparkling-amber">Sparkling Amber</option>
                    <option value="copper-shimmer">Copper Shimmer</option>
                    <option value="light-auburn">Light Auburn</option>
                    <option value="ruby-fusion">Ruby Fusion</option>
                    <option value="crushed-garnet">Crushed Garnet</option>
                  </optgroup>
                  <optgroup label="Dark / Black">
                    <option value="blowout-burgundy">Blowout Burgundy</option>
                    <option value="chocolate-cherry">Chocolate Cherry</option>
                    <option value="midnight-ruby">Midnight Ruby</option>
                    <option value="leather-black">Leather Black</option>
                  </optgroup>
                  <optgroup label="Other">
                    <option value="gray-silver">Gray / Silver</option>
                    <option value="dyed-other">Dyed / Other</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Eye color</label>
                <img
                  src="https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog/eye-color-chart.jpg"
                  alt="Eye color reference chart"
                  className="w-full rounded-xl mb-3"
                  loading="lazy"
                />
                <select id="eyeColor" name="eyeColor" required value={form.eyeColor} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-colors bg-white appearance-none">
                  <option value="">Select your eye color</option>
                  <optgroup label="Blue">
                    <option value="agate">Agate</option>
                    <option value="baby-blue">Baby Blue</option>
                    <option value="old-world-blue">Old World Blue</option>
                    <option value="blue-star">Blue Star</option>
                    <option value="nordic">Nordic</option>
                    <option value="cobalt">Cobalt</option>
                    <option value="azure">Azure</option>
                    <option value="lapis">Lapis</option>
                  </optgroup>
                  <optgroup label="Green / Teal">
                    <option value="dream">Dream</option>
                    <option value="serene">Serene</option>
                    <option value="liz">Liz</option>
                    <option value="creole-iris">Creole Iris</option>
                    <option value="forest">Forest</option>
                    <option value="vale">Vale</option>
                  </optgroup>
                  <optgroup label="Hazel / Gray">
                    <option value="gbv-hazel">G, B & V Hazel</option>
                    <option value="rain-cloud">Rain Cloud</option>
                    <option value="winter-gray">Winter Gray</option>
                    <option value="chuck-hazel">Chuck Hazel</option>
                    <option value="nomad">Nomad</option>
                    <option value="frisco">Frisco</option>
                  </optgroup>
                  <optgroup label="Brown / Dark">
                    <option value="toasty-topaz">Toasty Topaz</option>
                    <option value="teak-wood">Teak Wood</option>
                    <option value="sable">Sable</option>
                    <option value="paris-brun">Paris Brun</option>
                    <option value="ebony">Ebony</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Skin tone <span className="text-gray-400 font-normal">(optional)</span></label>
                <p className="text-xs text-gray-400 mb-3">Tap the one closest to you</p>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { value: "very-pale-porcelain", label: "Porcelain", img: "u1745554767_very_pale_porcelain_skin_tone_woman_almost_white__9baa4ae4-eff1-4252-9f61-baa33b82c5de_0.png" },
                    { value: "fair-ivory", label: "Fair Ivory", img: "u1745554767_fair_ivory_skin_tone_woman_peachy_pale_complexion_27e20e2b-37a6-46c9-8311-717ba99f8eda_3.png" },
                    { value: "light-cool-pink", label: "Light Cool", img: "u1745554767_light_skin_tone_woman_with_cool_pink_undertones_r_1063f6c5-b69e-4ca0-993b-0fe2762b5e48_2.png" },
                    { value: "light-golden-beige", label: "Light Golden", img: "u1745554767_light_golden_beige_skin_tone_woman_warm_undertone_9997be2e-7a22-4453-a39a-9eaf97e1637f_0.png" },
                    { value: "light-olive", label: "Light Olive", img: "u1745554767_light_olive_skin_tone_woman_subtle_green_underton_552b7929-9d82-4ba1-896b-df9dcb7f7063_1.png" },
                    { value: "medium-light-peachy", label: "Medium Light", img: "u1745554767_medium_light_skin_tone_woman_peachy_golden_comple_d181c468-83ec-48be-b301-92a268589cca_1.png" },
                    { value: "medium-warm-golden", label: "Medium Warm", img: "u1745554767_medium_skin_tone_woman_with_warm_golden_undertone_5de2c384-404d-4096-9b89-a2e42bf02002_2.png" },
                    { value: "medium-yellow", label: "Medium Yellow", img: "u1745554767_medium_skin_tone_woman_with_yellow_undertones_gol_aad212c7-9868-4217-a962-6f6b8692bc53_3.png" },
                    { value: "medium-red", label: "Medium Red", img: "u1745554767_medium_skin_tone_woman_with_red_undertones_warm_r_1b8e51d4-a203-4428-bec7-bfd59d8515f2_1.png" },
                    { value: "medium-olive", label: "Medium Olive", img: "u1745554767_medium_olive_skin_tone_woman_green_undertones_neu_9fd5a54c-2276-4894-9b4b-a9999b3f3531_2.png" },
                    { value: "medium-tan-golden", label: "Tan Golden", img: "u1745554767_medium_tan_skin_tone_woman_golden_brown_complexio_33f0b714-01c6-43a8-aeb2-a58b1baa4f5d_0.png" },
                    { value: "caramel-brown", label: "Caramel", img: "u1745554767_caramel_brown_skin_tone_woman_rich_medium_dark_co_9131d80d-6aff-4cd4-93f8-ba79410ab85f_1.png" },
                    { value: "dark-olive", label: "Dark Olive", img: "u1745554767_dark_olive_skin_tone_woman_deep_green_undertones__befc8b6e-aa8f-4c3e-b8ea-6a746374a934_3.png" },
                    { value: "light-dark-brown", label: "Dark Brown", img: "u1745554767_light_dark_brown_skin_tone_woman_milk_chocolate_c_b6b03f4d-5909-471b-84d7-b5c47dc2d534_0.png" },
                    { value: "deep-chocolate", label: "Deep", img: "u1745554767_deep_chocolate_brown_skin_tone_woman_dark_rich_co_281cbac2-7af4-4b0c-9899-fc1d0a0d5190_3.png" },
                    { value: "very-dark-ebony", label: "Ebony", img: "u1745554767_very_dark_ebony_skin_tone_woman_deepest_brown_com_46a0163d-20d4-4c1f-9f87-8db6b6acf8c2_3.png" },
                  ].map((st) => (
                    <button
                      key={st.value}
                      type="button"
                      onClick={() => setForm({ ...form, skinTone: st.value })}
                      className={`flex flex-col items-center p-1.5 rounded-xl border-2 transition-all ${
                        form.skinTone === st.value
                          ? "border-rose-400 bg-rose-50"
                          : "border-transparent hover:border-gray-200"
                      }`}
                    >
                      <img
                        src={`https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog/${st.img}`}
                        alt={st.label}
                        className="w-full aspect-square rounded-lg object-cover mb-1"
                        loading="lazy"
                      />
                      <span className="text-[10px] text-gray-500 leading-tight text-center">{st.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Body type</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "fullhourglass", label: "Full Hourglass", img: "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/bodytype/fullhourglass.png" },
                    { value: "hourglass", label: "Hourglass", img: "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/bodytype/hourglass.png" },
                    { value: "invertedtriangle", label: "Inverted Triangle", img: "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/bodytype/invertedtriangle.png" },
                    { value: "rectangle", label: "Rectangle", img: "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/bodytype/rectangle.png" },
                    { value: "round", label: "Round", img: "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/bodytype/round.png" },
                    { value: "triangle", label: "Triangle", img: "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/bodytype/triangle.png" },
                  ].map((bt) => (
                    <button
                      key={bt.value}
                      type="button"
                      onClick={() => setForm({ ...form, bodyType: bt.value })}
                      className={`flex flex-col items-center p-3 rounded-xl border-2 transition-all ${
                        form.bodyType === bt.value
                          ? "border-rose-400 bg-rose-50"
                          : "border-gray-100 bg-gray-50 hover:border-gray-200"
                      }`}
                    >
                      {bt.img ? (
                        <img src={bt.img} alt={bt.label} className="w-10 h-16 object-contain mb-1.5" loading="lazy" />
                      ) : (
                        <div className="w-10 h-16 flex items-center justify-center text-gray-300 text-2xl mb-1.5">?</div>
                      )}
                      <span className="text-xs text-gray-600">{bt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1.5">Height</label>
                <input id="height" name="height" type="text" required value={form.height} onChange={handleChange} placeholder="e.g. 165 cm or 5'5&quot;" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-colors bg-white" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Photo <span className="text-gray-400 font-normal">(required)</span>
                </label>

                {/* How to take a good photo */}
                <div className="bg-gray-50 rounded-xl p-4 mb-3">
                  <p className="text-sm font-medium text-gray-700 mb-2">How to take a good photo:</p>
                  <div className="grid grid-cols-2 gap-3 text-xs text-gray-500">
                    <div className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Face a window for natural light</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0 text-sm leading-none">✕</span>
                      <span>No makeup or minimal makeup</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Show face, neck & shoulders</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0 text-sm leading-none">✕</span>
                      <span>No filters or flash</span>
                    </div>
                  </div>
                </div>

                <label htmlFor="selfie" onDrop={handleDrop} onDragOver={handleDragOver} className="flex flex-col items-center justify-center w-full p-8 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-rose-300 hover:bg-rose-50/30 transition-colors">
                  {selfiePreview ? (
                    <img src={selfiePreview} alt="Preview" className="w-32 h-32 rounded-xl object-cover mb-3" />
                  ) : (
                    <>
                      <Upload className="w-10 h-10 text-gray-300 mb-3" />
                      <span className="text-sm font-medium text-gray-600 mb-1">Tap to upload or drag a photo here</span>
                    </>
                  )}
                  <span className="text-xs text-gray-400">{selfie ? selfie.name : "JPG, PNG — max 10MB"}</span>
                  {!selfie && <span className="text-xs text-gray-300 mt-2">On Mac? Drag your photo from the Photos app directly here.</span>}
                </label>
                <input id="selfie" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
              </div>

              {error && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm">{error}</div>
              )}

              <button
                type="submit"
                disabled={!isFormValid || loading}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl text-lg font-medium hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-gray-900/10"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit my details"
                )}
              </button>
              <p className="text-center text-sm text-gray-400">
                Your PDF will be emailed within 48 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnalysisForm;
