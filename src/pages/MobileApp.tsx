import { useEffect } from "react";

const MobileApp = () => {
  useEffect(() => {
    window.location.href = "/app.html";
  }, []);

  return null;
};

export default MobileApp;
