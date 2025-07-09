import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import Stripe from 'https://esm.sh/stripe@14.21.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { sessionId } = await req.json();
    
    if (!sessionId) {
      throw new Error('Session ID is required');
    }

    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2025-06-30.basil',
    });

    // Get session details from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    if (session.payment_status !== 'paid') {
      throw new Error('Payment not completed');
    }

    // Get customer details
    const customer = await stripe.customers.retrieve(session.customer as string);
    const email = (customer as any).email;

    if (!email) {
      throw new Error('No email found for customer');
    }

    // Initialize Supabase Admin
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Update user's premium status
    const { error: updateError } = await supabase
      .from('Userdata')
      .update({ 'Premium Access': true })
      .eq('Email', email);

    if (updateError) {
      console.error('Error updating premium status:', updateError);
      throw new Error('Failed to update premium status');
    }

    // Send welcome email
    const welcomeEmailResponse = await fetch(`${supabaseUrl}/functions/v1/premium-welcome-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseServiceKey}`
      },
      body: JSON.stringify({
        email: email,
        firstName: 'Stylegenius User'
      })
    });

    if (!welcomeEmailResponse.ok) {
      console.error('Failed to send welcome email');
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        email: email,
        message: 'Premium access granted and welcome email sent' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    );

  } catch (error) {
    console.error('Error processing payment:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Failed to process payment' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400
      }
    );
  }
});