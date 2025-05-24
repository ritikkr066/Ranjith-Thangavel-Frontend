import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "./utils/auth";

const ProtectRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return isAuthenticated() ? children : null; // Render nothing while redirecting
};

export default ProtectRoute;
