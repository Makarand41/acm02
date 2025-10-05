import React from 'react';
import vector1 from '../../assets/images/boxA/vector1.png';
import vector2 from '../../assets/images/boxA/vector2.png';
import timeLogo from '../../assets/images/boxA/timeLogo.png';
import calenderLogo from '../../assets/images/boxA/calenderLogo.png';

const InfoBar = ({ onToggleTime,onToggleCalender,onToggleVector1,onToggleVector2 }) => {
  return (
    <div className="BoxA">
      {/* Top form */}
      <div className="form-section">
        <div className="input-group">
          <label style={{paddingLeft:"20px",paddingRight:"17px"}}>Title:</label>
          <input type="text" style={{ width: "300px" }} />
          <label style={{paddingLeft:"20px",paddingRight:"10px"}}>Unique ID:</label>
          <input type="text" style={{ width: "300px" }} />
        </div>
        <br/>
        <div className="input-group">
          <label style={{paddingLeft:"20px",paddingRight:"5px"}}>CES#:</label>
          <input type="text" style={{ width: "200px" }} />
          <label style={{paddingLeft:"20px",paddingRight:"5px"}}>PE Value:</label>
          <input type="text" style={{ width: "160px" }} />
          <label style={{paddingLeft:"20px",paddingRight:"5px"}}>WBS#:</label>
          <input type="text" style={{ width: "170px" }} />
        </div>
        <br/>
      </div>

      {/* Icons row */}
      <div className="icon">
        {/* ⏰ Click = call parent handler */}
        <div className="tool" onClick={onToggleTime} style={{ cursor: "pointer" }}>
          <img src={timeLogo} alt="time"/>
        </div>
        <div className="tool"  onClick={onToggleCalender}            style={{ filter: "brightness(0.8)" }}>
          <img src={calenderLogo} alt="calendar"/>
        </div>
        <div className="tool"  onClick={onToggleVector1}        style={{ filter: "brightness(0.2)" }}>
          <img src={vector1} alt="vector1"/>
        </div>
        <div className="tool" onClick={onToggleVector2}     style={{ filter: "brightness(0.2)" }}>
          <img src={vector2} alt="vector2"/>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
