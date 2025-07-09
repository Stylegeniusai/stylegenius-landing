import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Check } from "lucide-react";
import { loadStripe } from "../lib/stripe";

const Premium = () => {
  const [selectedPlan, setSelectedPlan] = useState("annual");
  const [isLoading, setIsLoading] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);

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

  const features = [
    "See what colors make you shine (and which to avoid)",
    "An expert always at your side", 
    "Never wonder if something suits you while shopping",
    "Access StyleGenius when shopping on your computer",
    "Unlimited outfit ideas for any occasion"
  ];

  const plans = [
    {
      id: "weekly",
      name: "Weekly",
      price: "$4.99",
      period: "week",
      description: "Cancel anytime",
      stripePriceId: "price_1Rhv5oRQSN3gLufNYuF1lTC7"
    },
    {
      id: "monthly", 
      name: "Monthly",
      price: "$11.99",
      period: "month",
      description: "Save 40% vs weekly",
      stripePriceId: "price_1Rhv6ORQSN3gLufNb4hKF1kL"
    },
    {
      id: "annual",
      name: "Annual",
      price: "$79.99", 
      period: "year",
      description: "Save 46% vs monthly",
      popular: true,
      stripePriceId: "price_1Rhv6qRQSN3gLufNMG4UE4MQ"
    }
  ];

  const handleCheckout = async () => {
    setIsLoading(true);
    
    try {
      const selectedPlanData = plans.find(plan => plan.id === selectedPlan);
      
      if (!selectedPlanData) {
        throw new Error('Unable to find selected plan');
      }

      // Create checkout session on backend (for now, direct redirect)
      const stripe = await loadStripe();
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      // For now, use direct checkout with price ID
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{
          price: selectedPlanData.stripePriceId,
          quantity: 1,
        }],
        mode: 'subscription',
        successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}/premium?canceled=true`,
      });

      if (error) {
        console.error('Stripe error:', error);
        alert('Something went wrong. Please try again.');
      }
      
    } catch (error) {
      console.error('Error:', error);
      alert('Unable to start checkout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

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

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Invest in your style,<br/>
            confidence and <span 
              className="bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              life
            </span>
            <img 
              src="/mainavatar.png" 
              alt="StyleGenius" 
              className="inline-block w-12 h-12 md:w-16 md:h-16 ml-4 rounded-full"
            />
          </h1>
          
          {/* Review */}
          <div className="mb-12">
            <div className="flex text-yellow-400 text-xl justify-center mb-3">
              ⭐⭐⭐⭐⭐
            </div>
            <div className="min-h-[60px] flex items-center justify-center">
              <p className="text-gray-600 italic text-lg text-center max-w-2xl transition-opacity duration-500">
                "{reviews[currentReview].text}"
              </p>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              — {reviews[currentReview].author}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="max-w-2xl mx-auto mb-16">
          <div 
            className="bg-white rounded-3xl p-8 shadow-lg border-2"
            style={{
              borderColor: '#6EC1E4'
            }}
          >
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: 'linear-gradient(45deg, #6EC1E4, #FF70D9)'
                    }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 text-lg">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {plans.map((plan) => (
              <Card 
                key={plan.id}
                className={`relative cursor-pointer transition-all duration-200 ${
                  selectedPlan === plan.id 
                    ? 'ring-2 ring-pink-400 scale-105' 
                    : 'hover:scale-102'
                } ${plan.popular ? 'border-pink-400' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div 
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-medium"
                    style={{
                      background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
                    }}
                  >
                    POPULAR
                  </div>
                )}
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600"> / {plan.period}</span>
                  </div>
                  <p className="text-sm text-pink-500 font-medium">{plan.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Download App Button */}
          <div className="text-center mb-8">
            <a href="https://apps.apple.com/app/id6747178892" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="px-12 py-4 text-xl font-semibold text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
                }}
              >
                DOWNLOAD APP TO UPGRADE
              </Button>
            </a>
          </div>

          {/* Fine Print */}
          <div className="text-center text-sm text-gray-500 space-y-2">
            <div className="flex justify-center gap-4">
              <a href="/terms" className="hover:text-gray-700">Terms of Use</a>
              <span>•</span>
              <a href="/privacy" className="hover:text-gray-700">Privacy Policy</a>
            </div>
            <p>Limited time offer • Recurring billing • Cancel anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;