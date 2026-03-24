import React, { useState } from "react";
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
}

const AnalysisForm = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    hairColor: "",
    eyeColor: "",
    skinTone: "",
    bodyType: "",
  });
  const [selfie, setSelfie] = useState<File | null>(null);
  const [selfiePreview, setSelfiePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError("File too large. Max 10MB.");
        return;
      }
      setSelfie(file);
      setSelfiePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      let selfieUrl: string | null = null;
      if (selfie) {
        const ext = selfie.name.split(".").pop();
        const fileName = `analysis/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
        const { error: uploadError } = await supabase.storage
          .from("uploads")
          .upload(fileName, selfie);
        if (uploadError) throw new Error("Failed to upload photo. Please try again.");
        const { data: urlData } = supabase.storage.from("uploads").getPublicUrl(fileName);
        selfieUrl = urlData.publicUrl;
      }

      const { error: dbError } = await supabase.from("analysis_orders").insert({
        name: form.name,
        email: form.email,
        hair_color: form.hairColor,
        eye_color: form.eyeColor,
        skin_tone: form.skinTone,
        body_type: form.bodyType,
        selfie_url: selfieUrl,
        status: "paid",
      });
      if (dbError) throw new Error("Failed to save your details. Please try again.");

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = form.name && form.email && form.hairColor && form.eyeColor && form.skinTone && form.bodyType;

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
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-colors bg-white" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email <span className="text-gray-400 font-normal">(where we'll send your PDF)</span></label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-colors bg-white" />
              </div>

              <div>
                <label htmlFor="hairColor" className="block text-sm font-medium text-gray-700 mb-1.5">Hair color</label>
                <input id="hairColor" name="hairColor" type="text" required value={form.hairColor} onChange={handleChange} placeholder="e.g. Dark brown, blonde, red..." className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-colors bg-white" />
              </div>

              <div>
                <label htmlFor="eyeColor" className="block text-sm font-medium text-gray-700 mb-1.5">Eye color</label>
                <input id="eyeColor" name="eyeColor" type="text" required value={form.eyeColor} onChange={handleChange} placeholder="e.g. Blue, green, brown, hazel..." className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-colors bg-white" />
              </div>

              <div>
                <label htmlFor="skinTone" className="block text-sm font-medium text-gray-700 mb-1.5">Skin tone</label>
                <select id="skinTone" name="skinTone" required value={form.skinTone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-colors bg-white appearance-none">
                  <option value="">Select your skin tone</option>
                  <option value="very-fair">Very fair / Porcelain</option>
                  <option value="fair">Fair</option>
                  <option value="light">Light</option>
                  <option value="medium">Medium</option>
                  <option value="olive">Olive</option>
                  <option value="tan">Tan</option>
                  <option value="dark">Dark</option>
                  <option value="deep">Deep / Rich</option>
                </select>
              </div>

              <div>
                <label htmlFor="bodyType" className="block text-sm font-medium text-gray-700 mb-1.5">Body type</label>
                <select id="bodyType" name="bodyType" required value={form.bodyType} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-colors bg-white appearance-none">
                  <option value="">Select your body type</option>
                  <option value="hourglass">Hourglass</option>
                  <option value="pear">Pear</option>
                  <option value="apple">Apple</option>
                  <option value="rectangle">Rectangle</option>
                  <option value="inverted-triangle">Inverted triangle</option>
                  <option value="not-sure">Not sure</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Selfie <span className="text-gray-400 font-normal">(optional but recommended)</span>
                </label>
                <p className="text-sm text-gray-400 mb-2">Natural lighting, no filters. Helps us determine your color season accurately.</p>
                <label htmlFor="selfie" className="flex flex-col items-center justify-center w-full p-6 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-rose-300 hover:bg-rose-50/30 transition-colors">
                  {selfiePreview ? (
                    <img src={selfiePreview} alt="Preview" className="w-24 h-24 rounded-xl object-cover mb-2" />
                  ) : (
                    <Upload className="w-8 h-8 text-gray-300 mb-2" />
                  )}
                  <span className="text-sm text-gray-500">{selfie ? selfie.name : "Click to upload a photo"}</span>
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
