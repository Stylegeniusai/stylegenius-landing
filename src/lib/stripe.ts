// Stripe configuration
export const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '';

// Price IDs for subscription plans
export const STRIPE_PRICE_IDS = {
  weekly: import.meta.env.VITE_STRIPE_PRICE_WEEKLY || '',
  monthly: import.meta.env.VITE_STRIPE_PRICE_MONTHLY || '',
  annual: import.meta.env.VITE_STRIPE_PRICE_ANNUAL || ''
};

// Load Stripe.js
export const loadStripe = async () => {
  console.log('Loading Stripe with key:', STRIPE_PUBLISHABLE_KEY ? 'Key exists' : 'No key found');
  
  if (!window.Stripe) {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/';
    script.async = true;
    document.head.appendChild(script);
    
    await new Promise((resolve) => {
      script.onload = resolve;
    });
  }
  
  if (!STRIPE_PUBLISHABLE_KEY) {
    throw new Error('Stripe publishable key not found');
  }
  
  return window.Stripe(STRIPE_PUBLISHABLE_KEY);
};