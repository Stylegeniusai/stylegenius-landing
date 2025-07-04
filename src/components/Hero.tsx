
import React, { useState } from "react";
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
  const { toast } = useToast();

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
          {/* Main Heading with Avatar - vertical on mobile, horizontal on desktop */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 text-center md:text-left">
              Meet Your Personal<br/>
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
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(255, 112, 217, 0.3))'
              }}
            />
          </div>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Your personal styling and shopping assistant that elevates your style, confidence and life.
          </p>
          
          {/* Value Props - Updated with new terms */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm border">
              🎨 Skintone Analysis
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm border">
              👗 Style Items
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm border">
              🛍️ Smart Shopping
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm border">
              ✨ Outfit Creation
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm border">
              📸 Fit Checks
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm border">
              💬 Your Style Expert
            </span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://apps.apple.com/app/id6747178892" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
                }}
              >
                Download for iOS
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-gray-50"
              onClick={() => setIsWaitlistOpen(true)}
            >
              Join Android Waitlist
            </Button>
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
