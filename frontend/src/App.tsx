// import React, { useState, useEffect } from 'react';
import "./App.css";
// import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { RegenerateLink } from "./components/ActivationPage/activatedPage";
import { LoginPage } from "./components/Login/login";
import { Activation } from "./components/ActivationPage/activationPage";
import { Register } from "./components/Register/register";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from "./components/HomePage/home";
import { Forgotpassword } from "./components/Login/forgotpass";
// import { ResetPasswordForm } from "./components/Login/resetPass";
import { ResetPassForm } from "./components/Login/resetPass";
import { ProtectedRoute } from "./components/Login/protectedRoute";
import { AuthProvider } from "./components/Login/useAuth";
import { PreventLogin } from "./components/Login/preventLogin";

function App() {

  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} /> */}

            {/* <Route element={<PreventLogin />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<Register />} />
              </Route> */}

            <Route path="/login" element={<PreventLogin><LoginPage /></PreventLogin>} />
            <Route path="/register" element={<PreventLogin><Register /></PreventLogin>} />
            <Route path="/activation" element={<PreventLogin><Activation /></PreventLogin>} />
            <Route path="/regenerate-link" element={<PreventLogin><RegenerateLink /></PreventLogin>} />
            <Route path="/forgot-password" element={<PreventLogin><Forgotpassword /></PreventLogin>} />
            <Route path="/forgot-password/reset-password" element={<PreventLogin><ResetPassForm /></PreventLogin>} />

            {/* <Route path="/home" element={<Home />} /> */}



          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App




