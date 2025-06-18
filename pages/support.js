export default function Support() {
  return (
    <main className="min-h-screen bg-[#F6F6F6] text-[#202033]">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[36px] font-bold mb-4">
            <span className="bg-gradient-to-r from-[#FF70D9] to-[#6EC1E4] bg-clip-text text-transparent">
              StyleGenius
            </span>{" "}
            Support
          </h1>
          <p className="text-[18px] text-[#6D6D7A]">
            We're here to help you get the most out of your personal AI stylist
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-[18px] p-8 shadow-lg mb-12">
          <h2 className="text-[24px] font-bold mb-6">Contact Us</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-[18px] font-semibold mb-2">Email Support</h3>
              <p className="text-[#6D6D7A] mb-2">
                For all support questions, subscription issues, or general inquiries:
              </p>
              <a 
                href="mailto:ai@stylegenius.app" 
                className="text-[#FF70D9] underline text-[16px] font-medium hover:text-[#6EC1E4]"
              >
                ai@stylegenius.app
              </a>
            </div>
            <div>
              <h3 className="text-[18px] font-semibold mb-2">Response Time</h3>
              <p className="text-[#6D6D7A]">
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-[18px] p-8 shadow-lg">
          <h2 className="text-[24px] font-bold mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            {/* Subscription Management */}
            <div>
              <h3 className="text-[20px] font-semibold mb-4 text-[#FF70D9]">Subscription & Billing</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-[16px] font-semibold mb-2">How do I cancel my subscription?</h4>
                  <div className="text-[#6D6D7A] space-y-2">
                    <p><strong>iOS:</strong> Settings → [Your Name] → Subscriptions → StyleGenius → Cancel Subscription</p>
                    <p><strong>Android:</strong> Google Play Store → Menu → Subscriptions → StyleGenius → Cancel</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-[16px] font-semibold mb-2">How do I restore my purchases?</h4>
                  <div className="text-[#6D6D7A] space-y-2">
                    <p>In the StyleGenius app, go to Settings → Restore Purchases. Make sure you're logged in with the same Apple ID or Google account used for the original purchase.</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-[16px] font-semibold mb-2">When will I be charged?</h4>
                  <p className="text-[#6D6D7A]">
                    Subscriptions auto-renew 24 hours before the current period ends. You can cancel anytime to avoid future charges.
                  </p>
                </div>

                <div>
                  <h4 className="text-[16px] font-semibold mb-2">Can I get a refund?</h4>
                  <p className="text-[#6D6D7A]">
                    Refunds are handled by Apple/Google. Contact Apple Support or Google Play Support directly, or email us for assistance.
                  </p>
                </div>
              </div>
            </div>

            {/* AI & Features */}
            <div>
              <h3 className="text-[20px] font-semibold mb-4 text-[#6EC1E4]">AI Styling & Features</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-[16px] font-semibold mb-2">How does the AI styling work?</h4>
                  <p className="text-[#6D6D7A]">
                    StyleGenius uses advanced AI to learn your personal style preferences, body type, skin tone, and wardrobe. The more you interact with it, the better it becomes at giving you personalized outfit advice and shopping recommendations.
                  </p>
                </div>

                <div>
                  <h4 className="text-[16px] font-semibold mb-2">Is my data secure?</h4>
                  <p className="text-[#6D6D7A]">
                    Yes, we take privacy seriously. Your personal styling data is encrypted and never shared with third parties. See our Privacy Policy for full details.
                  </p>
                </div>

                <div>
                  <h4 className="text-[16px] font-semibold mb-2">Can I use StyleGenius offline?</h4>
                  <p className="text-[#6D6D7A]">
                    Some features require an internet connection for AI processing and shopping recommendations. However, you can browse your saved outfits offline.
                  </p>
                </div>

                <div>
                  <h4 className="text-[16px] font-semibold mb-2">What if the AI gives me bad advice?</h4>
                  <p className="text-[#6D6D7A]">
                    The AI learns from your feedback! Rate recommendations and correct the AI when it's wrong. This helps it understand your preferences better over time.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Support */}
            <div>
              <h3 className="text-[20px] font-semibold mb-4 text-[#FF70D9]">Technical Issues</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-[16px] font-semibold mb-2">The app is crashing or slow</h4>
                  <div className="text-[#6D6D7A] space-y-2">
                    <p>1. Force close and restart the app</p>
                    <p>2. Restart your device</p>
                    <p>3. Update to the latest version</p>
                    <p>4. If issues persist, contact us at ai@stylegenius.app</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-[16px] font-semibold mb-2">I can't log in</h4>
                  <p className="text-[#6D6D7A]">
                    Make sure you're using the same login method (Apple, Google) as when you first signed up. Contact us if you need help recovering your account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-[12px] text-[#6D6D7A]">
          <a href="/privacy" className="underline mr-4 hover:text-[#FF70D9]">
            Privacy Policy
          </a>
          •
          <a href="/terms" className="underline mx-4 hover:text-[#FF70D9]">
            Terms of Use
          </a>
          •
          <a href="/cookies" className="underline ml-4 hover:text-[#FF70D9]">
            Cookie Policy
          </a>
        </div>
      </div>
    </main>
  );
}