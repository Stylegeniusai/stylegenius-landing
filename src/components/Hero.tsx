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
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-center py-8 lg:py-12 justify-center max-w-6xl mx-auto">
          {/* Left side - Text content */}
          <div className="text-left lg:text-left order-1 lg:order-1">
            <div className="mx-auto lg:mx-0 lg:pl-16">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8">
                <div className="text-gray-900 mb-2">Why Be Dumb?</div>
                <div className="h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 mb-6 mx-auto lg:mx-0" style={{ width: 'min(320px, calc(100vw - 2rem))' }}></div>
                <div>
                  Use
                </div>
                <div>
                  <span 
                    className="bg-clip-text text-transparent font-black"
                    style={{
                      background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    StyleGenius
                  </span>
                </div>
              </h1>
            </div>
          </div>
          
          {/* Right side - Hero image */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-start items-center lg:-ml-4">
            {/* Desktop blob */}
            <img 
              src="/hero-girl-desktop.png" 
              alt="Happy StyleGenius user" 
              className="hidden lg:block w-auto h-auto max-w-[400px]"
            />
            {/* Mobile blob */}
            <img 
              src="/hero-girl-mobile.png" 
              alt="Happy StyleGenius user" 
              className="lg:hidden w-auto h-auto max-w-[250px]"
            />
          </div>
        </div>
        
        {/* Content below hero - matching hero width */}
        <div className="pb-16">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-center max-w-6xl mx-auto mt-6 lg:mt-8">
            {/* Smart features spanning hero width */}
            <div className="col-span-2">
              {/* Mobile grid layout */}
              <div className={`grid grid-cols-2 gap-3 lg:hidden text-lg sm:text-xl font-bold transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`} style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}>
                <span className="text-center">
                  <span style={{ color: '#FF70D9' }}>Smart</span> Shopping
                </span>
                <span className="text-center">
                  <span style={{ color: '#9333EA' }}>Smart</span> Beauty
                </span>
              </div>
              <div className={`text-center lg:hidden transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`} style={{ transitionDelay: isVisible ? '1000ms' : '0ms' }}>
                <span className="text-lg sm:text-xl font-bold">
                  <span style={{ color: '#6EC1E4' }}>Smart</span> Styling
                </span>
              </div>
              
              {/* Desktop flex layout */}
              <div className={`hidden lg:flex lg:items-center lg:justify-between lg:text-4xl font-bold max-w-5xl mx-auto px-8 transition-all duration-1500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`} style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}>
                <span className={`text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                }`} style={{ transitionDelay: isVisible ? '900ms' : '0ms' }}>
                  <span style={{ color: '#FF70D9' }}>Smart</span> Shopping
                </span>
                <span className={`text-gray-400 transition-all duration-500 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`} style={{ transitionDelay: isVisible ? '1100ms' : '0ms' }}>•</span>
                <span className={`text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`} style={{ transitionDelay: isVisible ? '1300ms' : '0ms' }}>
                  <span style={{ color: '#9333EA' }}>Smart</span> Beauty
                </span>
                <span className={`text-gray-400 transition-all duration-500 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`} style={{ transitionDelay: isVisible ? '1500ms' : '0ms' }}>•</span>
                <span className={`text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                }`} style={{ transitionDelay: isVisible ? '1700ms' : '0ms' }}>
                  <span style={{ color: '#6EC1E4' }}>Smart</span> Styling
                </span>
              </div>
            </div>
          </div>
          </div>

          {/* CTA Buttons - iOS, Android, Browser Extension */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
                }}
              >
                {buttonText}
              </Button>
            </a>
            
            
            <a href="https://chromewebstore.google.com/detail/stylegenius-smart-shopping/nlkjogjlcljcfolmloeedefnhbkmmihb" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold border-2 hover:bg-blue-50 transition-all duration-300 rounded-full"
                style={{
                  borderColor: '#6EC1E4',
                  color: '#6EC1E4'
                }}
              >
                💻 For Computer
              </Button>
            </a>
          </div>
          
          {/* Pills and Review side by side */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
            {/* Left side - Value Props Pills */}
            <div className="relative bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 shadow-xl border-2 border-transparent bg-clip-padding">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 p-0.5">
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl h-full w-full"></div>
              </div>
              <div className="relative grid grid-cols-2 gap-3 lg:gap-4">
                <span className="px-3 py-2 bg-white/70 rounded-full text-gray-700 shadow-md border font-medium text-sm text-center hover:bg-white transition-all duration-200">
                  💪 Better Confidence
                </span>
                <span className="px-3 py-2 bg-white/70 rounded-full text-gray-700 shadow-md border font-medium text-sm text-center hover:bg-white transition-all duration-200">
                  💰 Save Money
                </span>
                <span className="px-3 py-2 bg-white/70 rounded-full text-gray-700 shadow-md border font-medium text-sm text-center hover:bg-white transition-all duration-200">
                  ✨ Look Your Best
                </span>
                <span className="px-3 py-2 bg-white/70 rounded-full text-gray-700 shadow-md border font-medium text-sm text-center hover:bg-white transition-all duration-200">
                  🛍️ Smart Shopping
                </span>
                <span className="px-3 py-2 bg-white/70 rounded-full text-gray-700 shadow-md border font-medium text-sm text-center hover:bg-white transition-all duration-200">
                  💄 Perfect Colors
                </span>
                <span className="px-3 py-2 bg-white/70 rounded-full text-gray-700 shadow-md border font-medium text-sm text-center hover:bg-white transition-all duration-200">
                  💬 Always There
                </span>
              </div>
            </div>
            
            {/* Right side - Review */}
            <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-xl border-2 border-transparent bg-clip-padding flex flex-col justify-center">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-400 p-0.5">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl h-full w-full"></div>
              </div>
              <div className="relative">
              <div className="flex text-yellow-400 text-lg justify-center mb-4">
                ⭐⭐⭐⭐⭐
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gray-700 font-semibold text-lg mb-3 text-center">
                  "{reviews[currentReview].text}"
                </p>
                <p className="text-gray-500 text-sm text-center">
                  — {reviews[currentReview].author}
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
