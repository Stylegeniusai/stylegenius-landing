import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const AnalysisCTA = () => (
  <div className="my-12 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50/50 border border-rose-100 p-6 md:p-8">
    <div className="flex flex-col md:flex-row items-center gap-6">
      <img
        src={`${BLOG_IMAGE_BASE}/style-analysis-colors.png`}
        alt="Example color season page from your personal style guide"
        className="w-32 md:w-40 h-auto rounded-xl shadow-md flex-shrink-0"
        loading="lazy"
      />
      <div className="text-center md:text-left">
        <h3
          className="text-xl md:text-2xl font-bold text-gray-900 mb-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Stop guessing — get your recommendations from a stylist
        </h3>
        <p className="text-gray-500 mb-4 text-sm leading-relaxed">
          Your exact colors, makeup shades, and wardrobe — picked by a real stylist based on your features. Not generic tips. Made for you.
        </p>
        <Link
          to="/personal-analysis"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 text-sm"
        >
          Get my stylist recommendations — $39
          <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-gray-400 text-xs mt-3">12-page personal guide · Delivered in 48h · 7-day money-back guarantee</p>
      </div>
    </div>
  </div>
);

export default AnalysisCTA;
