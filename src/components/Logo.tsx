import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "header" | "footer";
}

const Logo: React.FC<LogoProps> = ({ variant = "header" }) => {
  if (variant === "footer") {
    return (
      <span
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '1.5rem',
          fontWeight: 600,
          color: 'white',
          letterSpacing: '-0.02em'
        }}
      >
        StyleGenius
      </span>
    );
  }

  // Header variant
  return (
    <Link
      to="/"
      style={{
        textDecoration: 'none',
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: '1.5rem',
        fontWeight: 600,
        color: '#111',
        letterSpacing: '-0.02em'
      }}
    >
      StyleGenius
    </Link>
  );
};

export default Logo;
