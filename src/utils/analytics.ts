// Google Analytics event tracking
export const trackDownloadClick = (source: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'download_click', {
      event_category: 'engagement',
      event_label: source,
      value: 1
    });
  }
};

export const trackBrowserExtensionClick = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'browser_extension_click', {
      event_category: 'engagement',
      event_label: 'chrome_extension',
      value: 1
    });
  }
};
