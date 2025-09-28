import React, { useEffect, useState } from "react";
import { Check, Mail, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";

const Success = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Trigger confetti animation
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-300 rounded-full opacity-15 animate-pulse delay-300"></div>
        <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-pink-400 rounded-full opacity-20 animate-bounce delay-500"></div>
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              <div className={`w-2 h-2 rounded-full ${
                ['bg-pink-400', 'bg-blue-400', 'bg-purple-400', 'bg-yellow-400', 'bg-green-400'][Math.floor(Math.random() * 5)]
              }`}></div>
            </div>
          ))}
        </div>
      )}
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-white/20 relative z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">
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
            <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              ← Back to home
            </a>
          </div>
        </div>
      </div>

      {/* Success Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Success Icon */}
          <div className="mb-8">
            <div className="relative mx-auto w-32 h-32 mb-6">
              <Avatar className="w-32 h-32 border-4 border-white shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <AvatarImage src="/mainavatar.png" alt="StyleGenius Avatar" />
                <AvatarFallback>SG</AvatarFallback>
              </Avatar>
              <div
                className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                }}
              >
                <Check className="w-6 h-6" />
              </div>
            </div>
            <div className="flex justify-center mb-4 space-x-2">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-bounce" />
              <Sparkles className="w-6 h-6 text-pink-400 animate-bounce delay-100" />
              <Sparkles className="w-8 h-8 text-blue-400 animate-bounce delay-200" />
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to the
            <span
              className="bg-clip-text text-transparent block mt-2"
              style={{
                background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              StyleGenius Club!
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
            🎉 You're officially StyleGenius Pro!
          </p>

          <p className="text-lg text-gray-600 mb-12">
            Your premium features are now active and ready to use
          </p>

          {/* Email Confirmation Card */}
          <Card className="mb-8 border-2 backdrop-blur-sm bg-white/80" style={{ borderColor: '#6EC1E4' }}>
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-4 shadow-lg"
                  style={{
                    background: 'linear-gradient(45deg, #6EC1E4, #FF70D9)'
                  }}
                >
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900">Check your email!</h3>
                  <p className="text-gray-600">
                    We've sent your welcome guide and instructions
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Don't see it? Check your spam folder or promotions tab.
              </p>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8 border border-white/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What's next?</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1"
                  style={{
                    background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
                  }}
                >
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Download the browser extension</h3>
                  <p className="text-gray-600 text-sm">Get AI style advice while shopping online</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1"
                  style={{
                    background: 'linear-gradient(45deg, #6EC1E4, #FF70D9)'
                  }}
                >
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Open the StyleGenius app</h3>
                  <p className="text-gray-600 text-sm">Start chatting with unlimited AI credits</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.open('https://apps.apple.com/app/id6747178892', '_blank')}
              size="lg"
              className="px-8 py-3 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
              }}
            >
              Open StyleGenius App
            </Button>
            <Button
              onClick={() => window.location.href = '/'}
              variant="outline"
              size="lg"
              className="px-8 py-3 font-semibold rounded-full border-2 hover:bg-gray-50"
              style={{
                borderColor: '#6EC1E4'
              }}
            >
              Back to Home
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Success;