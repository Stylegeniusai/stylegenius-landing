import Stripe from 'stripe'
import { supabaseAdmin } from '../lib/supabase-admin.js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-06-30.basil',
})

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || ''

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const sig = req.headers['stripe-signature']
  let event

  try {
    // Verify webhook signature
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message)
    return res.status(400).json({ message: 'Webhook signature verification failed' })
  }

  // Handle successful payment
  if (event.type === 'invoice.payment_succeeded') {
    const invoice = event.data.object
    
    try {
      // Get customer email from Stripe
      const customer = await stripe.customers.retrieve(invoice.customer)
      const email = customer.email

      if (!email) {
        console.error('No email found for customer:', invoice.customer)
        return res.status(400).json({ message: 'No email found for customer' })
      }

      // Update user's premium status in Supabase
      const { data, error } = await supabaseAdmin
        .from('Userdata')
        .update({ 'Premium Access': true })
        .eq('Email', email)

      if (error) {
        console.error('Error updating user premium status:', error)
        return res.status(500).json({ message: 'Error updating user premium status' })
      }

      console.log('Successfully updated premium access for:', email)
      return res.status(200).json({ message: 'Premium access granted successfully' })

    } catch (error) {
      console.error('Error processing webhook:', error)
      return res.status(500).json({ message: 'Error processing webhook' })
    }
  }

  // Handle subscription cancellation
  if (event.type === 'customer.subscription.deleted') {
    const subscription = event.data.object
    
    try {
      // Get customer email from Stripe
      const customer = await stripe.customers.retrieve(subscription.customer)
      const email = customer.email

      if (!email) {
        console.error('No email found for customer:', subscription.customer)
        return res.status(400).json({ message: 'No email found for customer' })
      }

      // Remove user's premium status in Supabase
      const { data, error } = await supabaseAdmin
        .from('Userdata')
        .update({ 'Premium Access': false })
        .eq('Email', email)

      if (error) {
        console.error('Error removing user premium status:', error)
        return res.status(500).json({ message: 'Error removing user premium status' })
      }

      console.log('Successfully removed premium access for:', email)
      return res.status(200).json({ message: 'Premium access removed successfully' })

    } catch (error) {
      console.error('Error processing cancellation webhook:', error)
      return res.status(500).json({ message: 'Error processing cancellation webhook' })
    }
  }

  return res.status(200).json({ message: 'Webhook received' })
}

// Disable body parsing to get raw body for webhook verification
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}