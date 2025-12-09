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
            <div className="space-y-2 mb-8">
              <p className="text-lg font-semibold text-gray-800"><strong>Effective Date:</strong> October 1, 2025</p>
              <p className="text-lg font-semibold text-gray-800"><strong>Last Updated:</strong> November 24, 2025</p>
            </div>
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Service Overview</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>StyleGenius is an AI-powered shopping assistant that helps users make informed purchasing decisions through:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Product Analysis:</strong> AI-driven analysis of product information when YOU request it</li>
                  <li><strong>Price Tracking:</strong> Monitoring price changes on products you choose to save</li>
                  <li><strong>Style Recommendations:</strong> Personalized fashion advice based on your preferences</li>
                  <li><strong>Wardrobe Management:</strong> Tools to organize and match your clothing items</li>
                  <li><strong>Data Extraction:</strong> Processing publicly available product information for your personal use</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. AI-Powered Features & Limitations</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <p className="font-semibold text-gray-800"><strong>Important:</strong> StyleGenius uses artificial intelligence to provide styling recommendations. AI technology has inherent limitations and may not always provide perfect or accurate advice.</p>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1 AI Disclaimer</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Not Professional Advice:</strong> StyleGenius AI recommendations are for informational and entertainment purposes only. They do not constitute professional fashion, beauty, dermatological, or medical advice.</li>
                  <li><strong>AI Limitations:</strong> Our AI may make mistakes, provide inaccurate color analysis, suggest unflattering styles, or give recommendations that don't suit your personal preferences or body type.</li>
                  <li><strong>No Guarantees:</strong> We do not guarantee that following our recommendations will result in improved appearance, confidence, or satisfaction with purchases.</li>
                  <li><strong>Subjective Nature:</strong> Fashion and style are subjective. AI recommendations are based on general principles and may not align with your personal taste or cultural preferences.</li>
                  <li><strong>Use Your Judgment:</strong> Always use your own judgment when making purchasing decisions or styling choices based on our recommendations.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">2.2 Third-Party AI Services</h3>
                <p>StyleGenius utilizes third-party AI services to power our features:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>AI Providers:</strong> We use services such as Google Gemini, OpenAI, and similar AI platforms to process styling requests</li>
                  <li><strong>Data Sent to AI:</strong> When you use AI features, relevant information (such as photos, body measurements, style preferences, skin tone selections) is sent to these third-party AI services</li>
                  <li><strong>No Control Over AI Processing:</strong> While we select reputable AI providers, we cannot control or guarantee how these services process your data internally</li>
                  <li><strong>AI Provider Terms:</strong> Your use of StyleGenius features is also subject to the terms and privacy policies of our AI providers</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">2.3 Photo & Image Analysis</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Selfies & Body Photos:</strong> When you upload selfies or full-body photos, these images are sent to AI services for processing to provide personalized styling features</li>
                  <li><strong>How We Use Your Photos:</strong> Your images may be used for color analysis, body type assessment, virtual try-on previews, makeup look generation, and personalized outfit recommendations</li>
                  <li><strong>AI-Generated Content:</strong> We use your photos to generate visual content such as virtual try-on images showing how clothes might look on you, and makeup looks applied to your selfie</li>
                  <li><strong>User-Provided Information:</strong> You provide information such as height, body type, skin tone, and style preferences which are used to personalize recommendations</li>
                  <li><strong>No Facial Recognition:</strong> We do not use facial recognition technology to identify individuals. Photo analysis is used solely for styling and visual features</li>
                  <li><strong>Temporary Processing:</strong> Photos sent for AI analysis are processed temporarily and not permanently stored by AI providers according to their data policies</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Subscriptions & Pricing</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">3.1 Genius Club Subscription</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Premium Features:</strong> Genius Club provides access to premium features including unlimited AI styling advice, advanced color analysis, and priority support</li>
                  <li><strong>Billing Cycle:</strong> Subscriptions are billed on a recurring basis (monthly or annually) depending on your chosen plan</li>
                  <li><strong>Auto-Renewal:</strong> Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing period</li>
                  <li><strong>Cancellation:</strong> You may cancel your subscription at any time through your App Store or Google Play account settings</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">3.2 Price Changes</h3>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <p className="font-semibold text-gray-800 mb-2">StyleGenius reserves the right to modify subscription prices at any time.</p>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Notice Period:</strong> We will provide at least 30 days advance notice of any price increases via email and/or in-app notification</li>
                  <li><strong>Current Subscribers:</strong> Price changes will take effect at your next billing cycle after the notice period</li>
                  <li><strong>Right to Cancel:</strong> If you do not agree with a price change, you may cancel your subscription before the new price takes effect</li>
                  <li><strong>Reasons for Changes:</strong> Prices may change due to increased operational costs, new features, market conditions, or changes in third-party service fees (such as AI provider costs)</li>
                  <li><strong>Promotional Pricing:</strong> Promotional or introductory prices are temporary and will revert to standard pricing after the promotional period</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">3.3 Refunds</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>App Store Purchases:</strong> Refunds for iOS subscriptions are handled by Apple according to their refund policy</li>
                  <li><strong>Google Play Purchases:</strong> Refunds for Android subscriptions are handled by Google according to their refund policy</li>
                  <li><strong>No Partial Refunds:</strong> We generally do not provide partial refunds for unused portions of a subscription period</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User-Initiated Data Processing</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="font-semibold text-gray-800"><strong>Key Principle:</strong> StyleGenius operates ONLY when you actively choose to use our features. We never automatically scrape websites or collect data without your direct action.</p>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1 How Data Processing Works</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="bg-blue-100 px-2 py-1 rounded">Manual Activation:</span> All data extraction occurs when YOU click buttons like "Analyze Product," "Save Item," or "Track Price"</li>
                  <li><span className="bg-blue-100 px-2 py-1 rounded">Public Information Only:</span> We process only publicly available information (prices, descriptions, images, availability)</li>
                  <li><span className="bg-blue-100 px-2 py-1 rounded">Personal Use Focus:</span> Analysis is performed solely for your individual shopping decisions</li>
                  <li><span className="bg-blue-100 px-2 py-1 rounded">No Bulk Scraping:</span> We do not perform automated, large-scale data collection</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">2.2 Types of Data We Process</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Product titles, descriptions, and specifications</li>
                  <li>Pricing information and availability status</li>
                  <li>Product images for analysis purposes</li>
                  <li>Website metadata relevant to shopping decisions</li>
                  <li>User-provided preferences and wardrobe information</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Legal Compliance and User Responsibilities</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">3.1 Website Terms of Service</h3>
                <p>By using StyleGenius, you acknowledge and agree that:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You are responsible for complying with the terms of service of websites you visit</li>
                  <li>StyleGenius does not encourage or endorse violation of website policies</li>
                  <li>You will not use our service to access restricted or protected content</li>
                  <li>You understand that some websites may prohibit data extraction in their terms</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">3.2 Robots.txt and Technical Restrictions</h3>
                <p>StyleGenius implements technical measures to ensure respectful data collection:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Rate Limiting:</strong> Maximum 1 request per 3 seconds per domain to prevent server overload</li>
                  <li><strong>Robots.txt Awareness:</strong> While browser-based actions aren't bound by robots.txt, we encourage ethical use</li>
                  <li><strong>User-Agent Identification:</strong> Our extension identifies itself appropriately in requests</li>
                  <li><strong>Request Throttling:</strong> Automatic delays between requests to minimize server impact</li>
                  <li><strong>Timeout Limits:</strong> Requests timeout after 10 seconds to prevent hanging connections</li>
                  <li><strong>Error Handling:</strong> Graceful handling of 403, 429, and other restriction responses</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">3.3 Prohibited Scraping Activities</h3>
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <p className="font-semibold text-gray-800 mb-2">Users must NOT use StyleGenius to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Bypass login requirements, paywalls, or access restrictions</li>
                    <li>Scrape personal data, contact information, or private user content</li>
                    <li>Overwhelm websites with excessive automated requests</li>
                    <li>Violate website terms that explicitly prohibit automated access</li>
                    <li>Access or scrape content behind authentication barriers</li>
                    <li>Collect data for competitive intelligence or commercial resale</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Commercial Use and Data Rights</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">4.1 Personal Use Only</h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="font-semibold text-gray-800 mb-2">StyleGenius is designed for personal shopping assistance only. Users may not:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Resell or redistribute extracted data</li>
                    <li>Use our service for commercial data mining</li>
                    <li>Create competing services using our extracted data</li>
                    <li>Share analyzed product data with third parties for commercial purposes</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">4.2 Intellectual Property</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Product images and descriptions remain the property of their original owners</li>
                  <li>StyleGenius AI analysis and recommendations are our intellectual property</li>
                  <li>Users retain ownership of their personal preferences and wardrobe data</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Storage and Privacy</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">5.1 What We Store</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>User Profile:</strong> Style preferences, measurements, and wardrobe items you add</li>
                  <li><strong>Saved Products:</strong> Items you choose to save for future reference</li>
                  <li><strong>Analysis History:</strong> Results of product analyses you request</li>
                  <li><strong>Price Alerts:</strong> Information needed to monitor prices you've chosen to track</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">5.2 Usage Analytics</h3>
                <p>To improve our service and understand how users interact with StyleGenius, we collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Feature Usage:</strong> Which features you use, buttons you click, and screens you visit within the app</li>
                  <li><strong>Session Data:</strong> How often you use the app, session duration, and general usage patterns</li>
                  <li><strong>Interaction Data:</strong> What you test, try on, or analyze (e.g., clothing categories, color preferences, style choices)</li>
                  <li><strong>Device Information:</strong> Device type, operating system, and app version for compatibility purposes</li>
                  <li><strong>Error Logs:</strong> Technical errors and crashes to help us fix bugs and improve stability</li>
                </ul>
                <p className="mt-2">This data helps us understand what features are popular, identify problems, and make StyleGenius better for everyone. Analytics data is used in aggregate and is not sold to third parties.</p>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">5.3 Data Retention</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Saved items and preferences: Stored until you delete them</li>
                  <li>Analysis results: Temporarily stored to improve service quality</li>
                  <li>Price tracking data: Maintained while alerts are active</li>
                  <li>Account data: Deleted when you close your account</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Service Limitations and Disclaimers</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">6.1 Accuracy of Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Product prices and availability can change rapidly</li>
                  <li>We cannot guarantee 100% accuracy of extracted information</li>
                  <li>Users should verify important details on retailer websites</li>
                  <li>Price tracking may have delays or interruptions</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">6.2 Service Availability</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>StyleGenius is provided "as is" without warranties</li>
                  <li>We may temporarily suspend service for maintenance</li>
                  <li>Some websites may block or limit our functionality</li>
                  <li>Browser updates may affect extension compatibility</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Prohibited Uses</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Users may not use StyleGenius to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Circumvent website security measures or paywalls</li>
                  <li>Access private or protected user data</li>
                  <li>Impersonate other users or entities</li>
                  <li>Interfere with or disrupt our service or third-party websites</li>
                  <li>Use the service for fraudulent or deceptive purposes</li>
                  <li>Extract data for training competing AI models</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Account Termination</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>We may suspend or terminate your account if you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate these Terms of Service</li>
                  <li>Use the service in ways that harm StyleGenius or third parties</li>
                  <li>Engage in prohibited activities</li>
                  <li>Fail to comply with website terms of service after warning</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>StyleGenius and its operators shall not be liable for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Inaccurate product information or pricing</li>
                  <li>Missed deals or price changes</li>
                  <li>Website blocking or restricting our service</li>
                  <li>Any disputes between users and retailers</li>
                  <li>Consequential or indirect damages arising from service use</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>We may update these Terms of Service periodically. Users will be notified of significant changes through:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>In-app notifications</li>
                  <li>Email notifications to registered users</li>
                  <li>Updates to this page with revised effective dates</li>
                </ul>
                <p>Continued use of StyleGenius after changes constitutes acceptance of new terms.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law and Dispute Resolution</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>These Terms of Service are governed by and interpreted under:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Jurisdiction:</strong> Swedish law (where StyleGenius is operated)</li>
                  <li><strong>EU Regulations:</strong> GDPR, Digital Services Act, and applicable EU directives</li>
                  <li><strong>Dispute Resolution:</strong> Initial disputes resolved through good-faith negotiation</li>
                  <li><strong>Mediation:</strong> Unresolved disputes subject to binding arbitration in Stockholm, Sweden</li>
                  <li><strong>Consumer Rights:</strong> EU consumer protection laws remain in full effect</li>
                  <li><strong>Class Actions:</strong> Users retain rights to participate in class action lawsuits where legally permitted</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Compliance and Enforcement</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>StyleGenius reserves the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Monitor Usage:</strong> Review extension usage patterns for Terms violations</li>
                  <li><strong>Issue Warnings:</strong> Notify users of potential Terms violations before account restrictions</li>
                  <li><strong>Temporary Suspension:</strong> Suspend service for investigation of serious violations</li>
                  <li><strong>Permanent Termination:</strong> Close accounts for repeated or severe Terms violations</li>
                  <li><strong>Legal Cooperation:</strong> Cooperate with law enforcement and website owners regarding misuse</li>
                  <li><strong>Appeal Process:</strong> Users may appeal account actions through legal@stylegenius.app</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>For questions about these Terms of Service or our data practices, please contact us at:</p>
                <ul className="list-none space-y-2">
                  <li><strong>Legal inquiries:</strong> legal@stylegenius.app</li>
                  <li><strong>Technical support:</strong> ai@stylegenius.app</li>
                  <li><strong>Privacy matters:</strong> privacy@stylegenius.app</li>
                  <li><strong>Website:</strong> https://stylegenius.app/legal</li>
                  <li><strong>Response time:</strong> Legal inquiries answered within 5 business days</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Company Information</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>These Terms of Service are between you and:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Company Name:</strong> GoMotion AB</li>
                  <li><strong>Trading Name:</strong> StyleGenius</li>
                  <li><strong>Business Type:</strong> Swedish Limited Company (Aktiebolag)</li>
                  <li><strong>Registration:</strong> Registered in Sweden</li>
                  <li><strong>Service Provider:</strong> GoMotion AB operates StyleGenius services</li>
                </ul>
              </div>
            </section>

            <div className="text-center bg-gray-50 rounded-lg p-6 mt-8">
              <p className="text-lg font-bold text-gray-900">StyleGenius - Your Personal AI Shopping Assistant</p>
              <p className="text-gray-600">Operated by GoMotion AB • Making smarter shopping decisions through user-controlled, ethical data analysis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;