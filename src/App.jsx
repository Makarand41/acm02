import React from "react";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import File from "./pages/File/File";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Construction from "./pages/Construction/Construction"
import Layout from "./pages/Layout/Layout";
import Functions from "./pages/Functions/Functions";
import Report from "./pages/Report/Report";
import TimeLogo from "./components/Mainbar/TimeLogo";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/file" element={<File />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/function" element={<Functions />} />
        <Route path="/Report" element={<Report />} /> 
       
        
        </Routes>

        
        
      </BrowserRouter>
    </>
  );
};

export default App;
