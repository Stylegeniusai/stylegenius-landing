import React from "react";

const Support = () => {
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
            Support
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Support</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Need help with StyleGenius? We're here to assist you!</p>
                <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg">
                  <ul className="list-none space-y-3">
                    <li><strong>📧 Email:</strong> ai@stylegenius.app</li>
                    <li><strong>⏰ Response time:</strong> Within 24 hours</li>
                    <li><strong>📱 In-app support:</strong> Available through StyleGenius app settings</li>
                    <li><strong>🌍 Languages:</strong> English, Swedish</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How does StyleGenius AI work?</h3>
                  <p className="text-gray-600">StyleGenius uses advanced AI to analyze your photos for color analysis, skin tone detection, and personalized styling recommendations. Upload your wardrobe photos and receive instant outfit suggestions tailored to your style.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What is Genius Club?</h3>
                  <p className="text-gray-600">Genius Club is our premium subscription offering advanced AI styling, unlimited outfit creation, priority support, and exclusive features. Choose monthly or yearly billing through the App Store or Google Play.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I organize my digital wardrobe?</h3>
                  <p className="text-gray-600">Take photos of your clothes and let StyleGenius categorize them automatically. You can create outfits, track what you wear, and get recommendations based on your existing wardrobe.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Does the browser extension work on all shopping sites?</h3>
                  <p className="text-gray-600">Our browser extension works on most major fashion and shopping websites. It provides real-time styling advice and helps you build outfits while shopping online.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my data secure?</h3>
                  <p className="text-gray-600">Yes! All your photos and data are encrypted and stored securely. We never share your personal information with third parties. You can delete your account and data anytime.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Support</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Having technical issues? Try these solutions:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>App crashes:</strong> Force close and restart the StyleGenius app</li>
                  <li><strong>Slow loading:</strong> Check your internet connection and restart the app</li>
                  <li><strong>Photo upload issues:</strong> Ensure photos are under 10MB and in JPG/PNG format</li>
                  <li><strong>Login problems:</strong> Try resetting your password or using OAuth sign-in</li>
                  <li><strong>Browser extension:</strong> Disable and re-enable the StyleGenius extension</li>
                  <li><strong>Still need help?</strong> Contact ai@stylegenius.app with your device model and iOS/Android version</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Billing & Payment Support</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Questions about Genius Club subscriptions?</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Subscription management:</strong> Handle through App Store (iOS) or Google Play (Android)</li>
                  <li><strong>Refunds:</strong> Request through your app store within 14 days of purchase</li>
                  <li><strong>Billing issues:</strong> Check your app store account or contact ai@stylegenius.app</li>
                  <li><strong>Cancel subscription:</strong> Turn off auto-renewal in your app store settings</li>
                  <li><strong>Restore purchases:</strong> Use "Restore Purchases" button in StyleGenius app settings</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Management</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Managing your StyleGenius account:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Delete account:</strong> Go to Settings → Account → Delete Account (this removes all your data)</li>
                  <li><strong>Export data:</strong> Download your wardrobe photos and preferences before deletion</li>
                  <li><strong>Change email:</strong> Update in app settings or contact support</li>
                  <li><strong>Privacy settings:</strong> Control data sharing and analysis preferences in app</li>
                  <li><strong>Reset recommendations:</strong> Clear AI learning data to start fresh</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Report Issues</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>When contacting support, please include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your device model (iPhone 14, Samsung Galaxy S23, etc.)</li>
                  <li>Operating system version (iOS 17.2, Android 14, etc.)</li>
                  <li>StyleGenius app version (found in Settings → About)</li>
                  <li>Description of the issue and steps to reproduce</li>
                  <li>Screenshots if applicable (remove personal information)</li>
                </ul>
              </div>
            </section>

            <div className="text-sm text-gray-500 pt-8 border-t">
              <p>For faster support, use the in-app help feature which includes diagnostic information automatically.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;