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
  console.log('Environment check:');
  console.log('VITE_STRIPE_PUBLISHABLE_KEY:', import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  console.log('All env vars:', import.meta.env);
  console.log('STRIPE_PUBLISHABLE_KEY value:', STRIPE_PUBLISHABLE_KEY);
  
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
    throw new Error('Stripe publishable key not found. Check environment variables.');
  }
  
  return window.Stripe(STRIPE_PUBLISHABLE_KEY);
};