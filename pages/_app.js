import "../styles/globals.css";
import CookieConsent from "react-cookie-consent";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Main page */}
      <Component {...pageProps} />

      {/* Cookie banner */}
      <CookieConsent
        cookieName="stylegeniusConsent"
        enableDeclineButton
        buttonText="Accept"
        declineButtonText="Decline"
        style={{ background: "#1E1D36" }}
        buttonStyle={{ borderRadius: "9999px", padding: "0.5rem 1.25rem" }}
      >
        We use cookies for affiliate tracking only.&nbsp;
        <a href="/cookies" className="underline">Read more</a>.
      </CookieConsent>
    </>
  );
}
