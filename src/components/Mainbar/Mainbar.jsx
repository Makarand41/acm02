// Mainbar.jsx
import React, { useState } from 'react';
import './Mainbar.css';

import InfoBar from './InfoBar';
import TimeLogo from './TimeLogo';
import Calender from './Calender';
import Vector1 from './Vector1';
import Vector2 from './Vector2';


const Mainbar = () => {
  const [activeSection, setActiveSection] = useState("time"); 
  // can be "time" or "calendar"

  return (
    <div className="mainbar">
      {/* Tabs */}
      <div className="tab-container">
        <div className="tab">RESULTS–PHASED</div>
        <div className="tab">OVERRIDES–PHASED</div>
      </div>

      {/* Pass toggle handler to InfoBar */}
      <InfoBar 
        onToggleTime={() => setActiveSection("time")} 
        onToggleCalender={() => setActiveSection("calendar")}
        onToggleVector1={() => setActiveSection("vector1")}
        onToggleVector2={() => setActiveSection("vector2")}
      />

      {/* Dynamic section */}
      {activeSection === "time" && (
        <div className="dynamic-section">
          <TimeLogo />
        </div>
      )}

      {activeSection === "calendar" && (
        <div className="dynamic-section">
          <Calender />
        </div>
      )}


      {activeSection === "vector1" && (
        <div className="dynamic-section">
          <Vector1 />
        </div>
      )}


      {activeSection === "vector2" && (
        <div className="dynamic-section">
          <Vector2 />
        </div>
      )}

      









    </div>
  );
};

export default Mainbar;
