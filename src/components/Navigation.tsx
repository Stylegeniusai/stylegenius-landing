import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Browser Extension", href: "/extension" },
    { name: "Download App", href: "https://apps.apple.com/app/id6747178892", external: true }
  ];

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Logo variant="header" />

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleMenu}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="block py-3 px-4 text-lg font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed nav */}
      <div className="h-16"></div>
    </>
  );
};

export default Navigation;