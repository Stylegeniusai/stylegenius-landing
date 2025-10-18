import { useEffect } from "react";
import { getAppStoreUrl } from "../utils/deviceDetection";

const Download = () => {
  useEffect(() => {
    // Track that someone hit the download redirect
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'download_redirect', {
        event_category: 'engagement',
        event_label: 'auto_redirect',
      });
    }

    // Get UTM parameters from URL to preserve tracking
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');

    // Get the correct app store URL based on device
    let appStoreUrl = getAppStoreUrl();

    // Add UTM parameters to iOS App Store URL if they exist
    // (Android Play Store doesn't support UTM parameters in the same way)
    if ((utmSource || utmMedium || utmCampaign) && appStoreUrl.includes('apps.apple.com')) {
      const params = new URLSearchParams();
      if (utmSource) params.append('utm_source', utmSource);
      if (utmMedium) params.append('utm_medium', utmMedium);
      if (utmCampaign) params.append('utm_campaign', utmCampaign);
      appStoreUrl = `${appStoreUrl}?${params.toString()}`;
    }

    // Redirect immediately
    window.location.href = appStoreUrl;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-8">
          <img
            src="/mainavatar.png"
            alt="StyleGenius"
            className="w-24 h-24 mx-auto rounded-full shadow-lg animate-pulse"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4">
          <span
            className="bg-clip-text text-transparent"
            style={{
              background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Taking you to the App Store...
          </span>
        </h1>
        <p className="text-gray-600 mb-4">Redirecting to download StyleGenius</p>
        <p className="text-sm text-gray-500">
          Not redirected? <a href="/" className="text-pink-500 underline hover:text-pink-600">Go to homepage</a>
        </p>
      </div>
    </div>
  );
};

export default Download;
