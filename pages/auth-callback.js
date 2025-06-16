import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function AuthCallback() {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleAuthCallback = () => {
      try {
        // Parse tokens from URL hash (#access_token=xxx&refresh_token=yyy)
        const hash = window.location.hash.substring(1);
        const params = new URLSearchParams(hash);
        
        const accessToken = params.get('access_token');
        const refreshToken = params.get('refresh_token');
        
        if (accessToken && refreshToken) {
          setIsRedirecting(true);
          
          // Redirect to app with tokens
          const appUrl = `stylegenius://auth-callback?access_token=${accessToken}&refresh_token=${refreshToken}`;
          window.location.href = appUrl;
          
          // Fallback: redirect to app store if deep link fails
          setTimeout(() => {
            // iOS App Store
            if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
              window.location.href = 'https://apps.apple.com/app/stylegenius';
            } 
            // Google Play Store
            else if (/Android/.test(navigator.userAgent)) {
              window.location.href = 'https://play.google.com/store/apps/details?id=com.stylegenius';
            }
            // Desktop fallback
            else {
              window.location.href = '/';
            }
          }, 3000);
        } else {
          // No tokens found, redirect to home
          router.push('/');
        }
      } catch (error) {
        console.error('Auth callback error:', error);
        router.push('/');
      }
    };

    // Run on client side only
    if (typeof window !== 'undefined') {
      handleAuthCallback();
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {isRedirecting ? 'Opening StyleGenius...' : 'Completing login...'}
        </h2>
        <p className="text-gray-600">
          {isRedirecting 
            ? 'You will be redirected to the app shortly.' 
            : 'Please wait while we complete your login.'}
        </p>
        {isRedirecting && (
          <p className="text-sm text-gray-500 mt-4">
            If the app doesn't open automatically, 
            <a href="/" className="text-blue-600 underline ml-1">click here</a> 
            to return to the homepage.
          </p>
        )}
      </div>
    </div>
  );
}