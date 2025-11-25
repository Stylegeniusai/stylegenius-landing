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
            <div className="space-y-2 mb-8">
              <p className="text-lg font-semibold text-gray-800"><strong>Effective Date:</strong> October 1, 2025</p>
              <p className="text-lg font-semibold text-gray-800"><strong>Last Updated:</strong> November 24, 2025</p>
            </div>

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
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                  <p className="font-semibold text-gray-800">We NEVER sell your personal data or images to third parties.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Services & Data Processing</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>StyleGenius uses third-party AI services to provide styling recommendations:</p>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Sent to AI Providers</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Photos & Selfies:</strong> Images you upload for color analysis, makeup recommendations, or outfit feedback are sent to AI services (such as Google Gemini, OpenAI) for processing</li>
                  <li><strong>Body Information:</strong> Height, body type selections, and measurements you provide</li>
                  <li><strong>Style Preferences:</strong> Your indicated style preferences, favorite colors, and fashion goals</li>
                  <li><strong>Skin Tone Data:</strong> Skin tone selections and analysis results</li>
                  <li><strong>Wardrobe Items:</strong> Photos and descriptions of clothing items in your wardrobe</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">How AI Providers Handle Your Data</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Processing Purpose:</strong> Data is sent solely to generate styling recommendations and analysis</li>
                  <li><strong>No Permanent Storage:</strong> According to our agreements, AI providers process data temporarily and do not retain it for training purposes</li>
                  <li><strong>No Facial Recognition:</strong> We do not use AI for facial recognition or biometric identification</li>
                  <li><strong>Provider Policies:</strong> AI providers have their own privacy policies that govern how they handle data during processing</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                  <p className="font-semibold text-gray-800">By using StyleGenius AI features, you consent to your data being processed by our third-party AI providers for the purpose of generating personalized styling recommendations.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Marketing & Communications</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">How We Use Your Email</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Transactional Emails:</strong> Account confirmations, password resets, subscription receipts, and important service updates</li>
                  <li><strong>Marketing Emails:</strong> Style tips, new feature announcements, promotions, and personalized recommendations (with your consent)</li>
                  <li><strong>Price Alerts:</strong> Notifications when items you're tracking drop in price</li>
                  <li><strong>Service Updates:</strong> Important changes to our terms, privacy policy, or service functionality</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Your Marketing Choices</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Opt-In Required:</strong> Marketing communications require your explicit consent</li>
                  <li><strong>Easy Unsubscribe:</strong> Every marketing email includes an unsubscribe link</li>
                  <li><strong>Manage Preferences:</strong> Control your communication preferences in app settings</li>
                  <li><strong>No Third-Party Marketing:</strong> We do not share your email with third parties for their marketing purposes</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Data Used for Personalization</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Style Profile:</strong> We may use your style preferences to send relevant product recommendations</li>
                  <li><strong>Usage Patterns:</strong> Your app usage helps us send more relevant tips and suggestions</li>
                  <li><strong>Purchase History:</strong> Subscription status affects what communications you receive</li>
                </ul>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                  <p className="font-semibold text-gray-800">You can opt out of marketing communications at any time without affecting your access to StyleGenius services.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Basis for Data Processing</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Under GDPR, we process your data based on the following legal bases:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Consent:</strong> For optional features like AI styling analysis and marketing communications</li>
                  <li><strong>Contract:</strong> To provide our core services and fulfill subscription obligations</li>
                  <li><strong>Legitimate Interest:</strong> For service improvement, fraud prevention, and technical support</li>
                  <li><strong>Legal Obligation:</strong> To comply with tax, accounting, and regulatory requirements</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights Under GDPR</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>As an EU resident, you have comprehensive data protection rights:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Right to Access (Article 15):</strong> Request all personal data we hold about you</li>
                  <li><strong>Right to Rectification (Article 16):</strong> Correct any inaccurate personal data</li>
                  <li><strong>Right to Erasure (Article 17):</strong> Delete your account and all associated data</li>
                  <li><strong>Right to Restrict Processing (Article 18):</strong> Limit how we use your data</li>
                  <li><strong>Right to Data Portability (Article 20):</strong> Export your data in machine-readable format</li>
                  <li><strong>Right to Object (Article 21):</strong> Opt out of processing for marketing or legitimate interests</li>
                  <li><strong>Right to Withdraw Consent (Article 7):</strong> Revoke consent for specific features anytime</li>
                  <li><strong>Right to Lodge Complaints:</strong> File complaints with your local data protection authority</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>We retain your data for specific periods based on legal requirements and business needs:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Account data:</strong> Retained until account deletion, then permanently deleted within 30 days</li>
                  <li><strong>Wardrobe images:</strong> Stored while account is active, deleted immediately upon account closure</li>
                  <li><strong>Usage analytics:</strong> Anonymized after 24 months, aggregated data retained indefinitely</li>
                  <li><strong>Payment records:</strong> Retained for 7 years for tax and accounting purposes (EU law requirement)</li>
                  <li><strong>Support communications:</strong> Deleted after 3 years or upon account closure</li>
                  <li><strong>Marketing data:</strong> Deleted within 30 days of unsubscribing or account closure</li>
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
                  <li><strong>No advertising cookies:</strong> We don't use cookies for advertising or retargeting</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Google Analytics</h3>
                <p>We use Google Analytics to understand how users interact with StyleGenius on our website and in the mobile app:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>What We Track:</strong> Page views (website), screen views (app), feature usage, button clicks, session duration, and general user flow</li>
                  <li><strong>In-App Events:</strong> We track anonymous events like "makeup analysis started", "wardrobe item added", "outfit created" (but NOT the actual content of photos or items)</li>
                  <li><strong>Data Collected:</strong> Anonymous usage data, device type, OS version, browser type, app version, approximate location (country/city level)</li>
                  <li><strong>IP Anonymization:</strong> IP addresses are anonymized before being stored by Google</li>
                  <li><strong>No Personal Data:</strong> We do not send personal information (name, email, photos, selfies, wardrobe images, body measurements) to Google Analytics</li>
                  <li><strong>Data Retention:</strong> Analytics data is retained for 14 months, then automatically deleted</li>
                  <li><strong>Google's Role:</strong> Google acts as a data processor and may process data on servers outside the EU</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Your Tracking Choices</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>In-App Consent:</strong> You can manage analytics consent in app settings</li>
                  <li><strong>Browser Controls:</strong> You can block cookies through your browser settings</li>
                  <li><strong>Google Opt-Out:</strong> Install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-pink-500 underline">Google Analytics Opt-out Browser Add-on</a></li>
                  <li><strong>Do Not Track:</strong> We respect browser "Do Not Track" signals where technically feasible</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                  <p className="font-semibold text-gray-800">For more information about how Google processes data, see <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-pink-500 underline">Google's Privacy Policy</a>.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Browser Extension Specific Data</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>When using the StyleGenius browser extension:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Product data:</strong> Information from shopping sites you choose to analyze (prices, descriptions, images)</li>
                  <li><strong>User-initiated actions:</strong> Only processes data when you actively click "Analyze Product" or similar buttons</li>
                  <li><strong>Saved items:</strong> Products you choose to save for future reference or price tracking</li>
                  <li><strong>Local storage:</strong> Extension preferences and temporary data stored locally in your browser</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Your data may be transferred to and processed in countries outside the European Economic Area:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Supabase (US):</strong> Protected by adequacy decisions and standard contractual clauses</li>
                  <li><strong>OpenAI/AI Services:</strong> Data anonymized before transfer, no personal identifiers included</li>
                  <li><strong>Stripe (US):</strong> Payment processing under Privacy Shield and adequacy frameworks</li>
                  <li><strong>Safeguards:</strong> All transfers use GDPR-approved mechanisms including SCCs and adequacy decisions</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact for Data Protection</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>For any privacy questions or data requests:</p>
                <ul className="list-none space-y-2">
                  <li><strong>Data Protection Officer:</strong> privacy@stylegenius.app</li>
                  <li><strong>General inquiries:</strong> ai@stylegenius.app</li>
                  <li><strong>Subject line:</strong> "Privacy Request" or "Data Protection" or "GDPR Request"</li>
                  <li><strong>Response time:</strong> We respond within 48 hours</li>
                  <li><strong>Data requests:</strong> Processed within 30 days as required by GDPR Article 12</li>
                  <li><strong>EU Representative:</strong> Contact privacy@stylegenius.app for EU representative details if required</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="font-semibold text-gray-800"><strong>Age Restriction:</strong> StyleGenius is not intended for use by children under 16 years of age. We do not knowingly collect personal information from children under 16. If you believe a child under 16 has provided us with personal information, please contact us immediately at privacy@stylegenius.app.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Company Information</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>StyleGenius is operated by:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Company Name:</strong> GoMotion AB</li>
                  <li><strong>Brand Name:</strong> StyleGenius</li>
                  <li><strong>Business Registration:</strong> Swedish Limited Company (Aktiebolag)</li>
                  <li><strong>Data Controller:</strong> GoMotion AB trading as StyleGenius</li>
                </ul>
              </div>
            </section>

            <div className="text-center bg-gray-50 rounded-lg p-6 mt-8">
              <p className="text-lg font-bold text-gray-900">StyleGenius - Your Personal AI Shopping Assistant</p>
              <p className="text-gray-600">Operated by GoMotion AB • This Privacy Policy applies to all StyleGenius users and services.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;