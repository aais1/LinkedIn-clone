import { Navigate, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const ProtectedRoute = ({ children }) => {
  let location = useLocation();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  });
  return <>{children}</>;
};

export default ProtectedRoute;
