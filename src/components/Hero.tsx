
import React, { useState, useEffect } from "react";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
        }}
      />
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center min-h-screen flex flex-col justify-center py-20">
          {/* Top Section - Smart Shopping etc - Compact on mobile */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gap-2 sm:gap-6 mb-6">
              <span><span style={{ color: '#FF70D9' }}>Smart</span> Shopping</span>
              <span className="hidden sm:block text-gray-400">•</span>
              <span><span style={{ color: '#6EC1E4' }}>Smart</span> Beauty</span>
              <span className="hidden sm:block text-gray-400">•</span>
              <span><span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">Smart</span> Styling</span>
            </div>
            
            {/* Visual connection */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-px bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400"></div>
            </div>
          </div>

          {/* Main Section - StyleGenius + Avatar horizontal on mobile */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto gap-6 lg:gap-4">
              
              {/* StyleGenius + Avatar - horizontal on mobile */}
              <div className="text-center lg:text-left lg:flex-1 lg:pl-52">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
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
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Your personal beauty & style expert,<br/>
                  always at your side.
                </p>
              </div>
              
              {/* Right Side - Collage - smaller on mobile */}
              <div className="lg:flex-shrink-0 mt-8 lg:mt-0">
                <div className="relative group">
                  <img 
                    src="/smartshoppingsmartbeautysmartstyling.png" 
                    alt="StyleGenius App Features" 
                    className="w-full max-w-xs sm:max-w-sm h-auto group-hover:scale-105 transition-transform duration-300 drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Review Carousel */}
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
          
          {/* Value Props - Emotional benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-5xl mx-auto">
            <span className="px-5 py-3 bg-white rounded-full text-gray-700 shadow-md border font-medium hover:shadow-lg transition-shadow duration-300">
              💪 Better Confidence
            </span>
            <span className="px-5 py-3 bg-white rounded-full text-gray-700 shadow-md border font-medium hover:shadow-lg transition-shadow duration-300">
              💰 Save Money
            </span>
            <span className="px-5 py-3 bg-white rounded-full text-gray-700 shadow-md border font-medium hover:shadow-lg transition-shadow duration-300">
              ✨ Look Your Best
            </span>
            <span className="px-5 py-3 bg-white rounded-full text-gray-700 shadow-md border font-medium hover:shadow-lg transition-shadow duration-300">
              🛍️ Smart Shopping
            </span>
            <span className="px-5 py-3 bg-white rounded-full text-gray-700 shadow-md border font-medium hover:shadow-lg transition-shadow duration-300">
              💄 Perfect Colors
            </span>
            <span className="px-5 py-3 bg-white rounded-full text-gray-700 shadow-md border font-medium hover:shadow-lg transition-shadow duration-300">
              💬 Always There
            </span>
          </div>
          
          {/* CTA Buttons - iOS, Android, Browser Extension */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
