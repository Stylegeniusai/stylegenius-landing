import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BLOG_IMAGE_BASE = "https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog";

const AnalysisCTA = () => (
  <div className="my-12 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50/50 border border-rose-100 p-6 md:p-8">
    <div className="flex flex-col md:flex-row items-center gap-6">
      <img
        src={`${BLOG_IMAGE_BASE}/style-analysis-preview.png`}
        alt="Personal color & style analysis preview"
        className="w-32 md:w-40 h-auto rounded-xl shadow-md flex-shrink-0"
        loading="lazy"
      />
      <div className="text-center md:text-left">
        <h3
          className="text-xl md:text-2xl font-bold text-gray-900 mb-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Want your own personal analysis?
        </h3>
        <p className="text-gray-500 mb-4 text-sm leading-relaxed">
          Get your color season, best colors, makeup palette, and outfit ideas — personalized to you. Delivered to your inbox within 48 hours.
        </p>
        <Link
          to="/personal-analysis"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 text-sm"
        >
          Discover my perfect colors — <span className="line-through text-gray-400 mr-1">$129</span> $89
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </div>
);

export default AnalysisCTA;
