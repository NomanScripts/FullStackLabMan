import { Outlet, Navigate } from "react-router-dom";
import { isAuthenticated } from "../../pages/auth/AuthService";

export default function ProtectedRoute() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
}
