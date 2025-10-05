import React from "react";
import "./Constant.css";

const Constant = () => {
  return (
    <div className="constant-page">
      <h4 className="equation-label">Equation/Value</h4>
      <input
        type="text"
        className="equation-input"
        value="BatteryUC$ * ProdQty" // readOnly
      />

      <div className="calc-section">
        <h4>Calculate Constant</h4>
        <div className="checkbox-row">
          <input type="checkbox" id="tyCost" />
          <label htmlFor="tyCost">TY Cost</label>
        </div>

        <div className="cost-row">
          <span className="dollar">$</span>
          <label className="label">Approp:</label>
          <input type="text" defaultValue="3010" className="small-input" />
          <label className="label">FY:</label>
          <input type="text" className="small-input" />
          <label className="label">Units:</label>
          <input type="text" className="small-input" />
        </div>
      </div>

      <div className="risk-section">
        <strong>RISK Specification:</strong> <span>None</span>
      </div>
    </div>
  );
};
export default Constant;
