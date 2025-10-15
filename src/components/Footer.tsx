
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            <span 
              className="bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              StyleGenius
            </span>
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Your personal styling and shopping assistant that elevates your style, confidence and life.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </a>
            <a href="/data-deletion" className="text-gray-400 hover:text-white transition-colors">
              Data Deletion
            </a>
            <a href="/support" className="text-gray-400 hover:text-white transition-colors">
              Support
            </a>
            <a href="mailto:ai@stylegenius.app" className="text-gray-400 hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">
              © 2025 GoMotion AB. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
