import Login from "./Login";
import { Navigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const user = localStorage.getItem("employee_id");
  return user ? children : <Navigate to="/login" />;
};

export default AuthProvider;
