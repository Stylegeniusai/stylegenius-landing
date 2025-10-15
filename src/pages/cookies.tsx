import React from "react";

const Cookies = () => {
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
            Cookie Policy
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files stored on your device when you use StyleGenius web services, 
                including our website and browser extension. They help us provide a better experience 
                and remember your preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies We Use</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                  <p className="text-gray-600 mb-2">Required for basic functionality:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Authentication tokens for secure login</li>
                    <li>Session management for StyleGenius browser extension</li>
                    <li>Security cookies to prevent unauthorized access</li>
                    <li>Language and region preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                  <p className="text-gray-600 mb-2">Enhance your StyleGenius experience:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Style preferences and AI recommendations settings</li>
                    <li>Wardrobe organization preferences</li>
                    <li>Browser extension customization settings</li>
                    <li>Shopping site integration preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                  <p className="text-gray-600 mb-2">Help us improve StyleGenius (anonymized data):</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Usage statistics for app and browser extension</li>
                    <li>Feature popularity and performance metrics</li>
                    <li>Error tracking for technical improvements</li>
                    <li>AI recommendation effectiveness analysis</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Browser Extension Cookies</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Our browser extension uses cookies to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Shopping integration:</strong> Remember your styling preferences on shopping sites</li>
                  <li><strong>Product analysis:</strong> Temporarily store product data for AI styling recommendations</li>
                  <li><strong>User authentication:</strong> Keep you logged in securely across shopping websites</li>
                  <li><strong>Recommendation sync:</strong> Sync your app preferences with browser extension</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Control</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>You can control cookies through:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Browser settings:</strong> Block or delete cookies in your browser preferences</li>
                  <li><strong>Extension settings:</strong> Disable specific cookies in StyleGenius browser extension</li>
                  <li><strong>App preferences:</strong> Control data sharing and analytics in StyleGenius app</li>
                  <li><strong>Opt-out:</strong> Contact ai@stylegenius.app to opt out of non-essential cookies</li>
                </ul>
                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                  <p className="text-yellow-800"><strong>Note:</strong> Disabling essential cookies may affect StyleGenius functionality, including login and browser extension features.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>StyleGenius may interact with third-party cookies from:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Shopping websites:</strong> When using our browser extension (we don't control these)</li>
                  <li><strong>Payment processors:</strong> Stripe for Genius Club subscriptions (secure payment processing)</li>
                  <li><strong>Authentication providers:</strong> Apple/Google for OAuth login (secure sign-in only)</li>
                </ul>
                <p>We don't share your StyleGenius data with these third parties beyond what's necessary for functionality.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Retention</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent cookies:</strong> Expire after 1 year or when you delete them</li>
                  <li><strong>Authentication cookies:</strong> Expire after 30 days of inactivity</li>
                  <li><strong>Preference cookies:</strong> Retained until you change or delete them</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Questions about our cookie usage?</p>
                <ul className="list-none space-y-2">
                  <li><strong>Email:</strong> ai@stylegenius.app</li>
                  <li><strong>Subject:</strong> "Cookie Policy Question"</li>
                </ul>
              </div>
            </section>

            <div className="text-sm text-gray-500 pt-8 border-t">
              <p>Last updated: December 2024</p>
              <p>This Cookie Policy applies to all StyleGenius web services and browser extension.</p>
              <p className="mt-2">StyleGenius is operated by GoMotion AB.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;