import React from "react";

interface LogoProps {
  variant?: "header" | "footer";
}

const Logo: React.FC<LogoProps> = ({ variant = "header" }) => {
  const iconBaseStyle: React.CSSProperties = {
    borderRadius: '50%',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    maxWidth: 'none',
    display: 'block'
  };

  if (variant === "footer") {
    return (
      <span
        style={{
          fontSize: '1.25rem',
          fontWeight: 700,
          color: 'white'
        }}
      >
        StyleGen
        <span style={{ position: 'relative', display: 'inline-block' }}>
          <img
            src="/mainavatar.png"
            alt=""
            style={{
              ...iconBaseStyle,
              width: '9px',
              height: '9px',
              top: '-1px'
            }}
          />
          ı
        </span>
        us
      </span>
    );
  }

  // Header variant
  return (
    <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#561269' }}>
      <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>
        StyleGen
        <span style={{ position: 'relative', display: 'inline-block' }}>
          <img
            src="/mainavatar.png"
            alt=""
            style={{
              ...iconBaseStyle,
              width: '10px',
              height: '10px',
              top: '2px'
            }}
          />
          ı
        </span>
        us
      </span>
    </a>
  );
};

export default Logo;
