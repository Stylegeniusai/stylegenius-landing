import { useEffect, useState } from 'react';

const CHROME_URL = 'https://chromewebstore.google.com/detail/stylegenius-virtual-try-o/bggndhefooccenjglglakcfgifgdpbmn';
const SAFARI_URL = 'macappstore://apps.apple.com/app/id6757370492';

function isSafari(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
         /Apple/.test(navigator.vendor);
}

interface ExtensionCTAProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const ExtensionCTA = ({ className, style, children }: ExtensionCTAProps) => {
  const [url, setUrl] = useState(CHROME_URL);

  useEffect(() => {
    if (isSafari()) {
      setUrl(SAFARI_URL);
    }
  }, []);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button
        className={className || "px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"}
        style={style || { background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)', boxShadow: '0 4px 20px rgba(255, 112, 217, 0.3)' }}
      >
        {children || "Start Shopping Smarter — It's Free"}
      </button>
    </a>
  );
};

export const getExtensionUrl = (): string => {
  if (typeof navigator !== 'undefined' && isSafari()) {
    return SAFARI_URL;
  }
  return CHROME_URL;
};

export default ExtensionCTA;
