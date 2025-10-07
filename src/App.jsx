import React from "react";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import File from "./pages/File/File";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import Construction from "./pages/Construction/Construction";
import Layout from "./pages/Layout/Layout";
import Functions from "./pages/Functions/Functions";
import Report from "./pages/Report/Report";
import TimeLogo from "./components/Mainbar/TimeLogo";
import Entry from "./pages/Entry/Entry";
// 👇 Added imports
import Login from "./pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Register from "./pages/Register/Register";

const App = () => {
  return (
    <>
    
      <BrowserRouter>
      <AuthProvider>
        <Navbar />

        <Routes>
          {/* Public route */}
          <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register/>} />

          {/* Protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/file"
            element={
              <ProtectedRoute>
                <File />
              </ProtectedRoute>
            }
          />
          <Route
            path="/construction"
            element={
              <ProtectedRoute>
                <Construction />
              </ProtectedRoute>
            }
          />
          <Route
            path="/layout"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/function"
            element={
              <ProtectedRoute>
                <Functions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Report"
            element={
              <ProtectedRoute>
                <Report />
              </ProtectedRoute>
            }
          />
          <Route
          path="/entry"
          element={
          <ProtectedRoute>
            <Entry />
          </ProtectedRoute>
          }
          />
        
        </Routes>
        </AuthProvider>
      </BrowserRouter>
     
    </>
  );
};

export default App;
