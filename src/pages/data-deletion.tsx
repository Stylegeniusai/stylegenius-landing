import React from "react";

const DataDeletion = () => {
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
            Data Deletion
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Delete Your Account & Data</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to delete your StyleGenius account and all associated data at any time. 
                This process is permanent and cannot be undone.
              </p>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-800"><strong>Warning:</strong> Account deletion is permanent. All your wardrobe photos, style preferences, and AI recommendations will be lost forever.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Gets Deleted</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>When you delete your account, we permanently remove:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Profile information:</strong> Name, email, profile photos, and account settings</li>
                  <li><strong>Wardrobe data:</strong> All uploaded clothing photos and organization</li>
                  <li><strong>Style preferences:</strong> Color analysis results, styling preferences, and AI recommendations</li>
                  <li><strong>Chat history:</strong> All conversations with StyleGenius AI</li>
                  <li><strong>Usage data:</strong> App interaction history and analytics data</li>
                  <li><strong>Subscription info:</strong> Genius Club preferences (billing handled by app stores)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Delete Your Account</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Method 1: Through the App (Recommended)</h3>
                  <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                    <li>Open the StyleGenius app</li>
                    <li>Go to <strong>Settings</strong> (gear icon)</li>
                    <li>Scroll down to <strong>Account</strong> section</li>
                    <li>Tap <strong>"Delete Account"</strong></li>
                    <li>Read the warning and confirm deletion</li>
                    <li>Enter your password to confirm</li>
                    <li>Tap <strong>"Delete Forever"</strong></li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Method 2: Email Request</h3>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 mb-2"><strong>Email:</strong> ai@stylegenius.app</p>
                    <p className="text-blue-800 mb-2"><strong>Subject:</strong> "Account Deletion Request"</p>
                    <p className="text-blue-800"><strong>Include:</strong> Your registered email address and confirmation that you want to delete all data</p>
                  </div>
                  <p className="text-gray-600 mt-2">We'll process email requests within 48 hours and send confirmation once complete.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Before You Delete</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Export Your Data First</h3>
                <p>Consider downloading your data before deletion:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Go to Settings → Privacy → <strong>"Export Data"</strong></li>
                  <li>Choose what to export (wardrobe photos, preferences, etc.)</li>
                  <li>Wait for the export email (usually within 24 hours)</li>
                  <li>Download your data from the secure link</li>
                </ol>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-6">Cancel Subscriptions</h3>
                <p>Remember to cancel Genius Club subscription through:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>iOS:</strong> Settings → Apple ID → Subscriptions → StyleGenius</li>
                  <li><strong>Android:</strong> Google Play → Subscriptions → StyleGenius</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Deletion Timeline</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Immediate:</strong> Account access disabled, login no longer works</li>
                  <li><strong>Within 24 hours:</strong> Data removed from active systems and databases</li>
                  <li><strong>Within 30 days:</strong> Data purged from backup systems and caches</li>
                  <li><strong>Exception:</strong> Legal requirement may delay deletion (rare, we'll notify you)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Keep (Minimal)</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>For legal and security reasons, we may retain minimal data for 90 days:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Transaction records (for accounting/tax purposes)</li>
                  <li>Security logs (to prevent abuse)</li>
                  <li>Anonymized analytics (no personal identifiers)</li>
                </ul>
                <p className="font-semibold">This data cannot be linked back to you and is automatically deleted after 90 days.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Partial Data Deletion</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Want to delete specific data but keep your account? You can:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Delete individual photos:</strong> Swipe left on any wardrobe item</li>
                  <li><strong>Clear AI recommendations:</strong> Settings → Privacy → "Reset AI Learning"</li>
                  <li><strong>Delete specific data types:</strong> Contact ai@stylegenius.app with specific requests</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Questions about data deletion?</p>
                <ul className="list-none space-y-2">
                  <li><strong>Email:</strong> ai@stylegenius.app</li>
                  <li><strong>Subject:</strong> "Data Deletion Question"</li>
                  <li><strong>Response time:</strong> Within 24 hours</li>
                </ul>
              </div>
            </section>

            <div className="text-sm text-gray-500 pt-8 border-t">
              <p>Last updated: December 2024</p>
              <p>This data deletion policy complies with GDPR, CCPA, and app store requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDeletion;