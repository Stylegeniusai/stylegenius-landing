import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { getAppStoreUrl, getDownloadButtonText } from "../utils/deviceDetection";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { useToast } from "../hooks/use-toast";
import { supabase } from "../lib/supabase";
import { trackDownloadClick, trackBrowserExtensionClick } from "../utils/analytics";

const Hero = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [appStoreUrl, setAppStoreUrl] = useState('');
  const [buttonText, setButtonText] = useState('📱 Download App');
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const reviews = [
    {
      text: "Love having a friend and expert always ready to talk to about style, clothes, outfits and shopping",
      author: "iOS User"
    },
    {
      text: "StyleGenius has totally changed how I get dressed. It saves me so much time! It feels like having a personal stylist in your pocket - love it!",
      author: "App Store Review"
    }
  ];

  useEffect(() => {
    setAppStoreUrl(getAppStoreUrl());
    setButtonText(getDownloadButtonText());
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('android_waitlist')
        .insert([{ email }]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "You've been added to the Android waitlist.",
      });
      setIsWaitlistOpen(false);
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-start justify-center overflow-hidden bg-gray-50">
      {/* Marble texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/marble-texture.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      />

      <style>
        {`
          @keyframes slideInFromRight {
            from {
              opacity: 0;
              transform: translateX(100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInFromLeft {
            from {
              opacity: 0;
              transform: translateX(-80px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-browser {
            animation: slideInFromRight 0.8s ease-out forwards;
          }

          .animate-app {
            animation: slideInFromLeft 0.8s ease-out 0.3s forwards;
            opacity: 0;
          }

          .animate-title {
            animation: fadeIn 0.6s ease-out forwards;
          }

          .animate-subtitle {
            animation: fadeIn 0.6s ease-out 0.2s forwards;
            opacity: 0;
          }
        `}
      </style>

      <div className="container mx-auto px-4 z-10">
        {/* Mobile Layout */}
        <div className="lg:hidden pt-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ color: '#1a1f36' }}>
              Discover Your Perfect{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Style.
              </span>
            </div>
          </h1>

          {/* Mobile: Show only app screenshot */}
          <div className="relative flex justify-center mb-6">
            <img
              src="/appstylegeniuseverywhere.png"
              alt="StyleGenius app showing Style Profile with your best colors and AI stylist"
              className="w-full h-auto max-w-[240px] sm:max-w-[280px] drop-shadow-2xl"
            />

            {/* Rating badge - floating upper left corner of Best Colors card */}
            <div className="absolute left-[25%] top-[30%] -translate-x-1/2 -translate-y-1/2 z-20">
              <img
                src="/high-rated-styling-app.png"
                alt="4.9 Rating"
                className="w-auto h-[75px] sm:h-[90px] drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Mobile subheadline */}
          <p className="text-xl sm:text-2xl font-semibold mb-8 text-center" style={{ color: '#4a5568', textShadow: '0 2px 6px rgba(0, 0, 0, 0.08)' }}>
            Your{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Personal
            </span>
            {" "}AI Stylist for Smart Shopping, Beauty & Styling
          </p>
        </div>

        {/* Desktop Layout - Centered */}
        <div className="hidden lg:block pt-16 max-w-7xl mx-auto">
          {/* Title centered at top */}
          <div className="text-center mb-12 animate-title">
            <h1 className="text-6xl xl:text-7xl font-bold" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ color: '#1a1f36' }}>
                Discover Your Perfect{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Style.
                </span>
              </div>
            </h1>
          </div>

          {/* Mockups - overlapping */}
          <div className="relative flex justify-center items-end min-h-[450px] mb-12">
            {/* Browser Extension - centered at middle of app height */}
            <div className="absolute right-[15%] bottom-[15%] animate-browser z-10">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-[480px]">
                {/* Browser Chrome */}
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded px-3 py-1 mx-4 text-sm text-gray-500">
                    zalando.co.uk
                  </div>
                  <img
                    src="/mainavatar.png"
                    alt="StyleGenius Extension"
                    className="w-6 h-6 rounded-full shadow-md"
                  />
                </div>

                {/* Browser Content */}
                <div className="overflow-hidden">
                  <img
                    src="/browserextensionsmartshopping.jpg"
                    alt="StyleGenius Browser Extension"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* App screenshot - foreground, overlapping, aligned to bottom */}
            <div className="absolute left-[18%] bottom-0 animate-app z-20">
              <img
                src="/appstylegeniuseverywhere.png"
                alt="StyleGenius app showing Style Profile"
                className="w-full h-auto max-w-[220px] drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Subtitle under mockups */}
          <p className="text-2xl xl:text-3xl font-semibold text-center mb-8 animate-subtitle" style={{ color: '#4a5568', textShadow: '0 2px 6px rgba(0, 0, 0, 0.08)' }}>
            Your personal stylist when shopping, styling outfits or getting ready
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackDownloadClick('hero_download_button')}>
            <button
              className="w-full sm:w-auto px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
              }}
            >
              {buttonText}
            </button>
          </a>

          <a href="https://chromewebstore.google.com/detail/stylegenius-%E2%80%93-your-person/bggndhefooccenjglglakcfgifgdpbmn" target="_blank" rel="noopener noreferrer" onClick={() => trackBrowserExtensionClick()}>
            <button
              className="w-full sm:w-auto px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{
                background: '#6EC1E4'
              }}
            >
              💻 For Your Browser
            </button>
          </a>
        </div>

        {/* Reviews side by side */}
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 mb-8 lg:mb-12 max-w-6xl mx-auto">
          {/* Left review */}
          <div className="relative bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl lg:rounded-2xl p-3 lg:p-6 shadow-md lg:shadow-xl border-2 border-transparent bg-clip-padding flex flex-col justify-center">
            <div className="absolute inset-0 rounded-xl lg:rounded-2xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 p-0.5">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl lg:rounded-2xl h-full w-full"></div>
            </div>
            <div className="relative">
              <div className="flex text-yellow-400 text-sm lg:text-lg justify-center mb-2 lg:mb-4">
                ⭐⭐⭐⭐⭐
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gray-700 font-medium lg:font-semibold text-xs lg:text-lg mb-2 lg:mb-3 text-center leading-tight lg:leading-normal">
                  "{reviews[0].text}"
                </p>
                <p className="text-gray-500 text-[10px] lg:text-sm text-center">
                  — {reviews[0].author}
                </p>
              </div>
            </div>
          </div>

          {/* Right review */}
          <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl lg:rounded-2xl p-3 lg:p-6 shadow-md lg:shadow-xl border-2 border-transparent bg-clip-padding flex flex-col justify-center">
            <div className="absolute inset-0 rounded-xl lg:rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-400 p-0.5">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl lg:rounded-2xl h-full w-full"></div>
            </div>
            <div className="relative">
              <div className="flex text-yellow-400 text-sm lg:text-lg justify-center mb-2 lg:mb-4">
                ⭐⭐⭐⭐⭐
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gray-700 font-medium lg:font-semibold text-xs lg:text-lg mb-2 lg:mb-3 text-center leading-tight lg:leading-normal">
                  "{reviews[1].text}"
                </p>
                <p className="text-gray-500 text-[10px] lg:text-sm text-center">
                  — {reviews[1].author}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
