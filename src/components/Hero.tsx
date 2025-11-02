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
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-start justify-center max-w-6xl mx-auto">
          {/* Left side - Text content */}
          <div className="text-left lg:text-left order-1 lg:order-1">
            <div className="mx-auto lg:mx-0 lg:pl-16 hero-outer-wrapper">
              <style>
                {`
                  .hero-outer-wrapper {
                    padding-top: 48px;
                  }
                  @media (min-width: 1024px) {
                    .hero-outer-wrapper {
                      padding-top: 96px;
                    }
                  }
                `}
              </style>
              <div className="hero-text-container">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mb-24 text-center lg:text-left" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
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

                {/* Desktop subheadline */}
                <p className="hidden lg:block text-xl sm:text-2xl md:text-3xl font-semibold mb-12" style={{ color: '#4a5568', textShadow: '0 2px 6px rgba(0, 0, 0, 0.08)' }}>
                  Your personal stylist when shopping,<br />styling outfits or getting ready
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Hero image */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-start items-start lg:-ml-4 pt-4 lg:pt-12 relative">
            {/* Before/After transformation image */}
            <img
              src="/aistylisthero.png"
              alt="Style transformation - before and after"
              className="w-full h-auto max-w-[280px] sm:max-w-[350px] lg:max-w-[450px]"
            />

            {/* Rating badge - floating over image */}
            <div className="absolute left-1/2 lg:left-[45%] bottom-[15%] -translate-x-1/2 z-20">
              <img
                src="/high-rated-styling-app.png"
                alt="4.9 Rating"
                className="w-auto h-[100px] sm:h-[120px] lg:h-[140px] drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Subheadline - mobile only, after image */}
        <div className="lg:hidden mx-auto px-4 mt-6">
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


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 mt-0 lg:mt-16">
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
