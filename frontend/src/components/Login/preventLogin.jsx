import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./useAuth";
import React from "react";

export const PreventLogin = ({ children }) => {
  const { user } = useAuth();
  // const location = useLocation();
  // console.log(location, "locatiommmmmmmmm");
  if (user) {
    // user is not authenticated
    // state = {{ from: location }}
    return <Navigate to="/" />;
  }
  return children

};