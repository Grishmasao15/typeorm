import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./useAuth";
import { ReactElement } from "react";

export const ProtectedRoute = ({ children }:any) => {
  console.log(children, "chillll");
  const { user } = useAuth();
  const location = useLocation();
  console.log(location, "locatiommmmmmmmm");
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};