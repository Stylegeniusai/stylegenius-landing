import React, { useEffect, useState } from "react";
import { Check, Mail, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const Success = () => {
  const [isProcessing, setIsProcessing] = useState(true);
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const processSuccess = async () => {
      try {
        // Get session_id from URL
        const urlParams = new URLSearchParams(window.location.search);
        const sessionId = urlParams.get('session_id');
        
        if (!sessionId) {
          setError("No session found");
          setIsProcessing(false);
          return;
        }

        // Get Stripe session details
        const stripe = await import('../lib/stripe').then(m => m.loadStripe());
        if (!stripe) {
          throw new Error('Failed to load Stripe');
        }

        // Call our edge function to process the payment
        const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/process-premium-payment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
          },
          body: JSON.stringify({
            sessionId: sessionId
          })
        });

        const result = await response.json();
        
        if (result.email) {
          setEmail(result.email);
        } else {
          setError("Failed to process payment");
        }

      } catch (err) {
        console.error('Error processing success:', err);
        setError("Something went wrong");
      } finally {
        setIsProcessing(false);
      }
    };

    processSuccess();
  }, []);

  if (isProcessing) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-pink-400 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Processing your premium upgrade...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Button onClick={() => window.location.href = '/'}>Go Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
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
            <a href="/" className="text-gray-600 hover:text-gray-900">
              ← Back to home
            </a>
          </div>
        </div>
      </div>

      {/* Success Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Success Icon */}
          <div className="mb-8">
            <div 
              className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-white mb-6"
              style={{
                background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
              }}
            >
              <Check className="w-12 h-12" />
            </div>
            <div className="flex justify-center mb-4">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to the 
            <span 
              className="bg-clip-text text-transparent block"
              style={{
                background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              StyleGenius Club!
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            🎉 You're officially StyleGenius Pro! Your premium features are now active.
          </p>

          {/* Email Confirmation Card */}
          <Card className="mb-8 border-2" style={{ borderColor: '#6EC1E4' }}>
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-4"
                  style={{
                    background: 'linear-gradient(45deg, #6EC1E4, #FF70D9)'
                  }}
                >
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900">Check your email!</h3>
                  <p className="text-gray-600">
                    We've sent your welcome guide to {email}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Don't see it? Check your spam folder or promotions tab.
              </p>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
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