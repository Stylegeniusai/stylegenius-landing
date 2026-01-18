import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="text-center mb-12">
            <Link
              to="/"
              className="text-2xl font-semibold text-gray-900"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              StyleGenius
            </Link>
            <p className="text-gray-500 mt-3 text-sm">
              Your complete guide to color, body type, and personal style.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm">
            <Link to="/color" className="text-gray-500 hover:text-black transition-colors">
              Color Analysis
            </Link>
            <Link to="/body" className="text-gray-500 hover:text-black transition-colors">
              Body Types
            </Link>
            <Link to="/style" className="text-gray-500 hover:text-black transition-colors">
              Style & Aesthetics
            </Link>
            <Link to="/shopping" className="text-gray-500 hover:text-black transition-colors">
              Smart Shopping
            </Link>
            <Link to="/about" className="text-gray-500 hover:text-black transition-colors">
              About
            </Link>
          </div>

          {/* Legal */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-xs text-gray-400">
            <Link to="/privacy" className="hover:text-gray-600 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-gray-600 transition-colors">
              Terms
            </Link>
            <a href="mailto:ai@stylegenius.app" className="hover:text-gray-600 transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center text-xs text-gray-400">
            © 2026 GoMotion AB
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
