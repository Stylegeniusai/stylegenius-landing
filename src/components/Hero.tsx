import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";
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
    <section ref={sectionRef} className="relative min-h-screen lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Girl Background - Mobile */}
      <div 
        className="absolute inset-0 z-0 lg:hidden"
        style={{
          backgroundImage: 'url("/hero-girl-mobile.jpg")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0.4
        }}
      />
      
      {/* Hero Girl Background - Desktop */}
      <div 
        className="absolute inset-0 z-0 hidden lg:block"
        style={{
          backgroundImage: 'url("/hero-girl.jpg")',
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-20 z-[1]"
        style={{
          background: 'linear-gradient(135deg, rgba(255,112,217,0.3), rgba(110,193,228,0.3))'
        }}
      />
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center flex flex-col justify-center py-12 lg:py-20 lg:min-h-screen">
          {/* 1. StyleGenius + Avatar */}
          <div className="mb-8 lg:mb-24">
            {/* StyleGenius + Avatar BREDVID på mobil */}
            <div className="flex flex-row items-center justify-center gap-4 mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
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
              </h1>
              <img 
                src="/mainavatar.png" 
                alt="StyleGenius Avatar" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(255, 112, 217, 0.5))'
                }}
              />
            </div>
            
            {/* Underrubrik - alla enheter */}
            <div className="mb-12">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium leading-relaxed max-w-lg mx-auto text-center">
                Your personal beauty, shopping & style expert,<br/>
                always at your side.
              </p>
            </div>
          </div>

          {/* 2. Smart Shopping/Beauty/Styling */}
          <div className="mb-8 lg:mb-24">
            {/* Mobile: 2 top, 1 bottom. Desktop: horizontal with separators */}
            <div className="mb-6 max-w-4xl mx-auto">
              {/* Mobile grid layout */}
              <div className={`grid grid-cols-2 gap-3 mb-3 lg:hidden text-lg sm:text-xl font-bold transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`} style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}>
                <span className="text-center">
                  <span style={{ color: '#FF70D9' }}>Smart</span> Shopping
                </span>
                <span className="text-center">
                  <span style={{ color: '#6EC1E4' }}>Smart</span> Beauty
                </span>
              </div>
              <div className={`text-center lg:hidden transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`} style={{ transitionDelay: isVisible ? '1000ms' : '0ms' }}>
                <span className="text-lg sm:text-xl font-bold">
                  <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">Smart</span> Styling
                </span>
              </div>
              
              {/* Desktop flex layout */}
              <div className={`hidden lg:flex lg:items-center lg:justify-center lg:text-4xl font-bold lg:gap-6 transition-all duration-1500 ${
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
                  <span style={{ color: '#6EC1E4' }}>Smart</span> Beauty
                </span>
                <span className={`text-gray-400 transition-all duration-500 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`} style={{ transitionDelay: isVisible ? '1500ms' : '0ms' }}>•</span>
                <span className={`text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                }`} style={{ transitionDelay: isVisible ? '1700ms' : '0ms' }}>
                  <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">Smart</span> Styling
                </span>
              </div>
            </div>
            
            {/* Visual connection */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-px bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400"></div>
            </div>
          </div>



          {/* CTA Buttons - iOS, Android, Browser Extension */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="https://apps.apple.com/app/id6747178892" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
                }}
              >
                📱 Download iOS App
              </Button>
            </a>
            
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 transition-all duration-300"
              onClick={() => setIsWaitlistOpen(true)}
            >
              🤖 Join Android Waitlist
            </Button>
            
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold border-2 hover:bg-blue-50 transition-all duration-300"
                style={{
                  borderColor: '#6EC1E4',
                  color: '#6EC1E4'
                }}
              >
                🌐 Browser Extension
              </Button>
            </a>
          </div>
          
          {/* 5. Value Props - 3x2 grid on mobile, flex on desktop */}
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-3 grid-rows-2 gap-3 lg:flex lg:flex-wrap lg:justify-center lg:gap-4">
              <span className="px-2 py-2 lg:px-5 lg:py-3 bg-white rounded-full text-gray-700 shadow-md border font-medium hover:shadow-lg transition-shadow duration-300 text-xs lg:text-base text-center">
                💪 Better Confidence
              </span>
              <span className="px-2 py-2 lg:px-5 lg:py-3 bg-white rounded-full text-gray-700 shadow-md border font-medium hover:shadow-lg transition-shadow duration-300 text-xs lg:text-base text-center">
                💰 Save<br className="lg:hidden"/>Money
              </span>
              <span className="px-2 py-2 lg:px-5 lg:py-3 bg-white rounded-full text-gray-700 shadow-md border font-medium hover:shadow-lg transition-shadow duration-300 text-xs lg:text-base text-center">
                ✨ Look Your Best
              </span>
              <span className="px-2 py-2 lg:px-5 lg:py-3 bg-white rounded-full text-gray-700 shadow-md border font-medium hover:shadow-lg transition-shadow duration-300 text-xs lg:text-base text-center">
                🛍️ Smart Shopping
              </span>
              <span className="px-2 py-2 lg:px-5 lg:py-3 bg-white rounded-full text-gray-700 shadow-md border font-medium hover:shadow-lg transition-shadow duration-300 text-xs lg:text-base text-center">
                💄 Perfect Colors
              </span>
              <span className="px-2 py-2 lg:px-5 lg:py-3 bg-white rounded-full text-gray-700 shadow-md border font-medium hover:shadow-lg transition-shadow duration-300 text-xs lg:text-base text-center">
                💬 Always There
              </span>
            </div>
          </div>
          
          {/* Review Carousel - after CTA */}
          <div className="mb-10 max-w-2xl mx-auto">
            <div className="flex text-yellow-400 text-lg justify-center mb-4">
              ⭐⭐⭐⭐⭐
            </div>
            <div className="transition-all duration-500 ease-in-out min-h-[120px] flex flex-col justify-center">
              <p className="text-gray-700 font-semibold text-lg mb-3 text-center">
                "{reviews[currentReview].text}"
              </p>
              <p className="text-gray-500 text-sm text-center">
                — {reviews[currentReview].author}
              </p>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-gray-400" size={32} />
          </div>
        </div>
      </div>

      {/* Android Waitlist Dialog */}
      <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Join Android Waitlist</DialogTitle>
            <DialogDescription>
              Be the first to know when StyleGenius launches on Android!
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleWaitlistSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading}
              style={{
                background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
              }}
            >
              {isLoading ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
