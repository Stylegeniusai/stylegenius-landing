import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.location.href = "/home.html";
  }, []);

  return null;
};

export default Index;
