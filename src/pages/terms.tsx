import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            <span 
              className="bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              StyleGenius
            </span>{" "}
            Terms of Service
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What StyleGenius Does</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>StyleGenius is an AI-powered styling service that provides:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>AI styling recommendations:</strong> Personalized outfit suggestions based on your style and colors</li>
                  <li><strong>Digital wardrobe:</strong> Organize and manage your clothing collection</li>
                  <li><strong>Color analysis:</strong> AI-powered analysis to find your perfect colors</li>
                  <li><strong>Shopping integration:</strong> Smart shopping recommendations through browser extension</li>
                  <li><strong>Genius Club:</strong> Premium features including advanced AI styling and exclusive content</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>By using StyleGenius, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Provide accurate information:</strong> Upload genuine photos and honest style preferences</li>
                  <li><strong>Use appropriately:</strong> Don't upload inappropriate, offensive, or copyrighted images</li>
                  <li><strong>Respect others:</strong> Don't share other people's photos without permission</li>
                  <li><strong>Follow laws:</strong> Use StyleGenius in compliance with all applicable laws</li>
                  <li><strong>Secure your account:</strong> Keep your login credentials private and secure</li>
                  <li><strong>Age requirement:</strong> You must be 13 or older to use StyleGenius</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Liability Limitations</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>StyleGenius provides AI recommendations for entertainment and inspiration purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>No guarantees:</strong> AI recommendations are suggestions, not guaranteed outcomes</li>
                  <li><strong>Personal decisions:</strong> You are responsible for your fashion and purchasing choices</li>
                  <li><strong>Technical issues:</strong> We strive for 99% uptime but cannot guarantee uninterrupted service</li>
                  <li><strong>Third-party links:</strong> Not responsible for external shopping sites or their policies</li>
                  <li><strong>Data loss:</strong> While we protect your data, you should backup important information</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payments & Genius Club</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Premium subscription terms:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Genius Club pricing:</strong> Monthly/yearly subscriptions as displayed in-app</li>
                  <li><strong>Auto-renewal:</strong> Subscriptions automatically renew unless cancelled</li>
                  <li><strong>Cancellation:</strong> Cancel anytime through App Store/Google Play or app settings</li>
                  <li><strong>Refunds:</strong> Follow App Store/Google Play refund policies</li>
                  <li><strong>Feature access:</strong> Premium features available only during active subscription</li>
                  <li><strong>Price changes:</strong> We'll notify you 30 days before any price increases</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Termination</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Accounts may be terminated for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Terms violation:</strong> Breaking these terms or community guidelines</li>
                  <li><strong>Inappropriate content:</strong> Uploading offensive or illegal material</li>
                  <li><strong>Abuse:</strong> Attempting to hack, spam, or misuse the service</li>
                  <li><strong>User request:</strong> You can delete your account anytime</li>
                  <li><strong>Data retention:</strong> Account data deleted within 30 days of termination</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Rights and ownership:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>StyleGenius AI:</strong> Our AI models, algorithms, and app design are our property</li>
                  <li><strong>Your images:</strong> You retain ownership of photos you upload</li>
                  <li><strong>Usage license:</strong> You grant us license to process your images for styling services</li>
                  <li><strong>Recommendations:</strong> AI-generated styling advice becomes your property</li>
                  <li><strong>Trademarks:</strong> StyleGenius name and logo are our registered trademarks</li>
                  <li><strong>Copyright:</strong> Don't upload copyrighted images without permission</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update these terms occasionally. Significant changes will be communicated through the app 
                or email. Continued use after changes means you accept the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Questions about these terms?</p>
                <ul className="list-none space-y-2">
                  <li><strong>Email:</strong> ai@stylegenius.app</li>
                  <li><strong>Subject:</strong> "Terms Question"</li>
                </ul>
              </div>
            </section>

            <div className="text-sm text-gray-500 pt-8 border-t">
              <p>Last updated: December 2024</p>
              <p>These terms are effective immediately and apply to all StyleGenius users.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;