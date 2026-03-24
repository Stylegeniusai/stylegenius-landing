import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AnalysisSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/analysis-form", { replace: true });
  }, [navigate]);

  return null;
};

export default AnalysisSuccess;
