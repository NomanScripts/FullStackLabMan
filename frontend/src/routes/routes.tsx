import MainLayout from "../layouts/MainLayout";
import Login from "../pages/auth/login/index";
import Signup from "../pages/auth/signup/index";
import Categories from "../pages/home/Categories";
import LabsList from "../pages/home/LabsList";
import Dashboard from "../pages/home/index";
import AttemptLab from "../pages/labs/AttemptLab";
import Labs from "../pages/labs/index";
import ProtectedRoute from "./guard/LoginGuard";
import Profile from "../pages/profile/index";
import Settings from "../pages/settings/index";
import Notification from "../pages/Notification/index";
import Upgarde from "../pages/upgrade/index"
import Payment from "../pages/upgrade/Payment";
import { Routes, Route, Navigate } from "react-router-dom";
import PaymentLayout from "../layouts/PaymentLayout";

export default function AppRoutes() {
  const isAuthenticated = false;
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/"
        element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />}
      />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/labs"
          element={
            <MainLayout>
              <Labs />
            </MainLayout>
          }
        />
        <Route
          path="/categories"
          element={
            <MainLayout>
              <Categories />
            </MainLayout>
          }
        />
        <Route
          path="/labslist"
          element={
            <MainLayout>
              <LabsList />
            </MainLayout>
          }
        />
        <Route
          path="/attemptlab/:id"
          element={
            <MainLayout>
              <AttemptLab />
            </MainLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <MainLayout>
              <Profile /> 
            </MainLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <MainLayout>
              <Settings />
            </MainLayout>
          }
        />
        <Route
          path="/notification"
          element={
            <MainLayout>
              <Notification />
            </MainLayout>
          } 
        />
         <Route
          path="/upgrade"
          element={
            <MainLayout>
              <Upgarde />
            </MainLayout>
          } 
        />
        <Route
          path="/payment"
          element={
            <PaymentLayout>
              <Payment />
            </PaymentLayout>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
