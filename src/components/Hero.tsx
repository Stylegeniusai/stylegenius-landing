
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
          {/* Smart Shopping • Smart Beauty • Smart Styling tagline - LARGER */}
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row items-center justify-center text-2xl md:text-3xl lg:text-4xl font-bold gap-3 sm:gap-6 mb-8">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Smart Shopping</span>
              <span className="hidden sm:block text-gray-400">•</span>
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Smart Beauty</span>
              <span className="hidden sm:block text-gray-400">•</span>
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Smart Styling</span>
            </div>
            
            {/* Visual connection */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-px bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400"></div>
            </div>
          </div>

          {/* Main Heading with Avatar */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center md:text-left">
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
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(255, 112, 217, 0.5))'
              }}
            />
          </div>
          
          {/* Subheading - Better copy for target audience */}
          <p className="text-2xl md:text-3xl text-gray-700 font-medium mb-12 leading-relaxed max-w-4xl mx-auto">
            Your personal beauty, style & shopping expert, always at your side.
          </p>
          
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
          
          {/* Value Props - Updated from app store */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-4xl mx-auto">
            <span className="px-5 py-3 bg-white rounded-full text-gray-700 shadow-md border font-medium hover:shadow-lg transition-shadow duration-300">
              🎨 Skintone Analysis
            </span>
            <span className="px-5 py-3 bg-white rounded-full text-gray-700 shadow-md border font-medium hover:shadow-lg transition-shadow duration-300">
              👗 Style Items
            </span>
            <span className="px-5 py-3 bg-white rounded-full text-gray-700 shadow-md border font-medium hover:shadow-lg transition-shadow duration-300">
              🛍️ Smart Shopping
            </span>
            <span className="px-5 py-3 bg-white rounded-full text-gray-700 shadow-md border font-medium hover:shadow-lg transition-shadow duration-300">
              ✨ Outfit Creation
            </span>
            <span className="px-5 py-3 bg-white rounded-full text-gray-700 shadow-md border font-medium hover:shadow-lg transition-shadow duration-300">
              📸 Fit Checks
            </span>
            <span className="px-5 py-3 bg-white rounded-full text-gray-700 shadow-md border font-medium hover:shadow-lg transition-shadow duration-300">
              💬 Your Style Expert
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
