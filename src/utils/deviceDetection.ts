export const getDeviceType = () => {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  
  // iOS detection
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return 'ios';
  }
  
  // Android detection
  if (/android/i.test(userAgent)) {
    return 'android';
  }
  
  // Default to iOS for desktop/unknown
  return 'ios';
};

export const getAppStoreUrl = () => {
  const device = getDeviceType();
  
  if (device === 'android') {
    return 'https://play.google.com/store/apps/details?id=app.stylegenius&pcampaignid=web_share';
  }
  
  return 'https://apps.apple.com/app/id6747178892'; // iOS App Store
};

export const getDownloadButtonText = () => {
  const device = getDeviceType();
  
  if (device === 'android') {
    return '📱 Get on Google Play';
  }
  
  return '📱 Download on App Store';
};