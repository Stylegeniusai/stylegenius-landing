import React from "react";

const Privacy = () => {
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
            Privacy Policy
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data We Collect</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>StyleGenius collects the following information to provide AI styling services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Email addresses:</strong> For account creation and communication</li>
                  <li><strong>Profile photos:</strong> For personalized color analysis and styling recommendations</li>
                  <li><strong>Wardrobe images:</strong> Photos of your clothes for outfit creation and organization</li>
                  <li><strong>Style preferences:</strong> Your fashion choices, favorite colors, and styling goals</li>
                  <li><strong>Usage data:</strong> How you interact with StyleGenius AI to improve recommendations</li>
                  <li><strong>Purchase history:</strong> Genius Club subscription and premium feature usage</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Storage</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Your data is securely stored using industry-leading services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Supabase:</strong> Primary database for user accounts, wardrobe data, and preferences</li>
                  <li><strong>Resend:</strong> Email delivery service for notifications and communications</li>
                  <li><strong>Encrypted storage:</strong> All images and personal data are encrypted at rest</li>
                  <li><strong>EU/US servers:</strong> Data stored in secure, compliant data centers</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Sharing</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>We share limited data only with essential service providers:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>OAuth providers:</strong> Apple/Google for secure sign-in (only basic profile info)</li>
                  <li><strong>AI services:</strong> Anonymous image data for color analysis and styling (no personal identifiers)</li>
                  <li><strong>Payment processors:</strong> Stripe for Genius Club subscriptions (required payment info only)</li>
                  <li><strong>Analytics:</strong> Anonymized usage data for app improvement</li>
                </ul>
                <p className="font-semibold text-gray-800">We NEVER sell your personal data or images to third parties.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>You have full control over your data:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Delete data:</strong> Remove your account and all associated data anytime through app settings</li>
                  <li><strong>Export data:</strong> Download all your wardrobe images and preferences</li>
                  <li><strong>Correct data:</strong> Update or modify any personal information</li>
                  <li><strong>Access data:</strong> View all data we have stored about you</li>
                  <li><strong>Withdraw consent:</strong> Opt out of data processing for specific features</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies & Tracking</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>StyleGenius uses minimal tracking for functionality:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential cookies:</strong> Required for app login and core functionality</li>
                  <li><strong>Analytics cookies:</strong> Anonymous usage statistics to improve the app</li>
                  <li><strong>Preference cookies:</strong> Remember your styling preferences and settings</li>
                  <li><strong>No advertising cookies:</strong> We don't use cookies for advertising or marketing</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact for Data Protection</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>For any privacy questions or data requests:</p>
                <ul className="list-none space-y-2">
                  <li><strong>Email:</strong> ai@stylegenius.app</li>
                  <li><strong>Subject line:</strong> "Privacy Request" or "Data Protection"</li>
                  <li><strong>Response time:</strong> We respond within 48 hours</li>
                  <li><strong>Data requests:</strong> Processed within 30 days as required by GDPR</li>
                </ul>
              </div>
            </section>

            <div className="text-sm text-gray-500 pt-8 border-t">
              <p>Last updated: December 2024</p>
              <p>This Privacy Policy applies to all StyleGenius users and services.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;