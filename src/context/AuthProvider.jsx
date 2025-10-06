// src/context/AuthProvider.jsx
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const timeoutRef = useRef(null);
  const ACTIVITY_EVENTS = ["click", "mousemove", "keydown", "scroll", "touchstart"];
   const MAX_DURATION = 5 * 60 * 1000; // 5 minutes
 // const MAX_DURATION = 30 * 1000; // 30 seconds


  // Login function called from Login.jsx
  const login = () => {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("loginTime", String(Date.now()));
    setIsAuthenticated(true);
    startAutoLogoutTimer();
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("loginTime");
    setIsAuthenticated(false);
    clearAutoLogoutTimer();
    navigate("/login");
  };

  // clear any existing timer
  const clearAutoLogoutTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // start timer based on remaining time (if any)
  const startAutoLogoutTimer = () => {
    clearAutoLogoutTimer();
    const loginTimeStr = localStorage.getItem("loginTime");
    const loginTime = loginTimeStr ? Number(loginTimeStr) : Date.now();
    const now = Date.now();
    const elapsed = now - loginTime;
    const remaining = Math.max(0, MAX_DURATION - elapsed);

    timeoutRef.current = setTimeout(() => {
      // auto logout when timer finishes
      logout();
    }, remaining);
  };

  // Reset the timer and update stored loginTime (call on user interaction)
  const resetTimerOnActivity = () => {
    if (!localStorage.getItem("isAuthenticated")) return;
    localStorage.setItem("loginTime", String(Date.now()));
    startAutoLogoutTimer();
  };

  // Hook up activity listeners when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      // start/refresh timer when auth changes to true
      startAutoLogoutTimer();

      // attach listeners to reset timer on activity
      for (const ev of ACTIVITY_EVENTS) {
        window.addEventListener(ev, resetTimerOnActivity);
      }
    }

    return () => {
      clearAutoLogoutTimer();
      for (const ev of ACTIVITY_EVENTS) {
        window.removeEventListener(ev, resetTimerOnActivity);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  // On mount, if already logged in, ensure timer is started
  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "true") {
      setIsAuthenticated(true);
      startAutoLogoutTimer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// helper hook
export const useAuth = () => useContext(AuthContext);
