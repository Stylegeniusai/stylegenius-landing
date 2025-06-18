export default function Terms() {
  return (
    <main className="min-h-screen bg-[#F6F6F6] text-[#202033]">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[36px] font-bold mb-4">
            Terms of Use
          </h1>
          <p className="text-[16px] text-[#6D6D7A]">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="bg-white rounded-[18px] p-8 shadow-lg space-y-8">
          {/* 1. Acceptance */}
          <section>
            <h2 className="text-[24px] font-bold mb-4 text-[#FF70D9]">1. Acceptance of Terms</h2>
            <p className="text-[#6D6D7A] leading-relaxed">
              By downloading, installing, or using the StyleGenius mobile application ("App"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, do not use the App.
            </p>
          </section>

          {/* 2. Service Description */}
          <section>
            <h2 className="text-[24px] font-bold mb-4 text-[#6EC1E4]">2. Service Description</h2>
            <p className="text-[#6D6D7A] leading-relaxed mb-4">
              StyleGenius is an AI-powered personal styling and shopping assistant mobile application that provides:
            </p>
            <ul className="text-[#6D6D7A] space-y-2 ml-6">
              <li>• Personalized outfit recommendations based on your style preferences</li>
              <li>• AI-powered styling advice tailored to your body type and skin tone</li>
              <li>• Wardrobe management and organization tools</li>
              <li>• Shopping recommendations and affiliate links</li>
              <li>• Style tips and fashion guidance</li>
            </ul>
          </section>

          {/* 3. Subscription Terms */}
          <section>
            <h2 className="text-[24px] font-bold mb-4 text-[#FF70D9]">3. Subscription Terms</h2>
            
            <h3 className="text-[18px] font-semibold mb-3">3.1 Subscription Plans</h3>
            <p className="text-[#6D6D7A] leading-relaxed mb-4">
              StyleGenius offers subscription-based access to premium features. Subscription plans and pricing are displayed in the App and may vary by region.
            </p>

            <h3 className="text-[18px] font-semibold mb-3">3.2 Auto-Renewal</h3>
            <p className="text-[#6D6D7A] leading-relaxed mb-4">
              Subscriptions automatically renew at the end of each billing period unless cancelled at least 24 hours before the renewal date. Your account will be charged for renewal within 24 hours prior to the end of the current period.
            </p>

            <h3 className="text-[18px] font-semibold mb-3">3.3 Cancellation</h3>
            <div className="text-[#6D6D7A] leading-relaxed mb-4 space-y-2">
              <p>You may cancel your subscription at any time through:</p>
              <p><strong>iOS:</strong> Settings → [Your Name] → Subscriptions → StyleGenius → Cancel Subscription</p>
              <p><strong>Android:</strong> Google Play Store → Menu → Subscriptions → StyleGenius → Cancel</p>
              <p>Cancellation takes effect at the end of the current billing period.</p>
            </div>

            <h3 className="text-[18px] font-semibold mb-3">3.4 Refunds</h3>
            <p className="text-[#6D6D7A] leading-relaxed mb-4">
              Refunds are subject to Apple App Store and Google Play Store policies. We do not provide direct refunds but will assist with refund requests through the respective app stores.
            </p>
          </section>

          {/* 4. User Content */}
          <section>
            <h2 className="text-[24px] font-bold mb-4 text-[#6EC1E4]">4. User Content and Data</h2>
            <p className="text-[#6D6D7A] leading-relaxed mb-4">
              You retain ownership of content you provide to StyleGenius (photos, preferences, etc.). By using the App, you grant us a limited license to use this content to provide styling services. We will not share your personal styling data with third parties except as described in our Privacy Policy.
            </p>
          </section>

          {/* 5. Acceptable Use */}
          <section>
            <h2 className="text-[24px] font-bold mb-4 text-[#FF70D9]">5. Acceptable Use</h2>
            <p className="text-[#6D6D7A] leading-relaxed mb-4">You agree not to:</p>
            <ul className="text-[#6D6D7A] space-y-2 ml-6">
              <li>• Use the App for any illegal or unauthorized purpose</li>
              <li>• Attempt to reverse engineer or hack the App</li>
              <li>• Upload inappropriate, offensive, or copyrighted content</li>
              <li>• Abuse or overload our AI services</li>
              <li>• Share your account credentials with others</li>
            </ul>
          </section>

          {/* 6. AI Limitations */}
          <section>
            <h2 className="text-[24px] font-bold mb-4 text-[#6EC1E4]">6. AI Limitations and Disclaimers</h2>
            <p className="text-[#6D6D7A] leading-relaxed mb-4">
              StyleGenius uses artificial intelligence to provide styling recommendations. While we strive for accuracy, AI recommendations are subjective and based on algorithmic analysis. We do not guarantee that you will be satisfied with every recommendation. Fashion preferences are personal, and our AI learns and improves over time based on your feedback.
            </p>
          </section>

          {/* 7. Affiliate Links */}
          <section>
            <h2 className="text-[24px] font-bold mb-4 text-[#FF70D9]">7. Affiliate Links and Shopping</h2>
            <p className="text-[#6D6D7A] leading-relaxed mb-4">
              StyleGenius may include affiliate links to third-party retailers. We may earn commissions from purchases made through these links at no additional cost to you. We are not responsible for the quality, delivery, or customer service of third-party retailers.
            </p>
          </section>

          {/* 8. Intellectual Property */}
          <section>
            <h2 className="text-[24px] font-bold mb-4 text-[#6EC1E4]">8. Intellectual Property</h2>
            <p className="text-[#6D6D7A] leading-relaxed mb-4">
              The StyleGenius App, including its AI technology, design, and content, is protected by copyright and other intellectual property laws. You may not copy, modify, or distribute any part of the App without our written permission.
            </p>
          </section>

          {/* 9. Limitation of Liability */}
          <section>
            <h2 className="text-[24px] font-bold mb-4 text-[#FF70D9]">9. Limitation of Liability</h2>
            <p className="text-[#6D6D7A] leading-relaxed mb-4">
              StyleGenius provides the App "as is" without warranties. We are not liable for any damages arising from your use of the App, including but not limited to dissatisfaction with styling recommendations or issues with third-party purchases.
            </p>
          </section>

          {/* 10. Changes to Terms */}
          <section>
            <h2 className="text-[24px] font-bold mb-4 text-[#6EC1E4]">10. Changes to Terms</h2>
            <p className="text-[#6D6D7A] leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. We will notify users of significant changes through the App or email. Continued use of the App after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          {/* 11. Contact */}
          <section>
            <h2 className="text-[24px] font-bold mb-4 text-[#FF70D9]">11. Contact Information</h2>
            <p className="text-[#6D6D7A] leading-relaxed">
              If you have questions about these Terms, please contact us at{" "}
              <a href="mailto:ai@stylegenius.app" className="text-[#FF70D9] underline hover:text-[#6EC1E4]">
                ai@stylegenius.app
              </a>
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-[12px] text-[#6D6D7A]">
          <a href="/privacy" className="underline mr-4 hover:text-[#FF70D9]">
            Privacy Policy
          </a>
          •
          <a href="/support" className="underline mx-4 hover:text-[#FF70D9]">
            Support
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