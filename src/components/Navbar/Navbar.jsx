import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <li><Link to="/file">File</Link></li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/layout">Layout</Link></li>
      <li><Link to="/construction">Construction</Link></li>
      <li><Link to="/function">Function</Link></li>
      <li><Link to="/report">Report</Link></li>
    </div>
  );
};

export default Navbar;
