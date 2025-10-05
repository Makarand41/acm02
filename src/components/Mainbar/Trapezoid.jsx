import React from "react";
import beta from "../../assets/images/vector1/beta.jpg";
import milestone from "../../assets/images/vector1/milestone.jpg";
import percent from "../../assets/images/vector1/percent.jpg";
import rayleigh from "../../assets/images/vector1/rayleigh.jpg";
import trapezoid from "../../assets/images/vector1/trapezoid.jpg";
import weibull from "../../assets/images/vector1/weibull.jpg";
import styles from "./Trapezoid.module.css";

const Trapezoid = ({ setActiveSection }) => {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <img src={beta} onClick={() => setActiveSection("beta")} alt="beta" />
        <img
          src={weibull}
          onClick={() => setActiveSection("weibull")}
          alt="weibull"
        />
        <img
          src={rayleigh}
          onClick={() => setActiveSection("rayleigh")}
          alt="rayleigh"
        />
        <img
          src={trapezoid}
          onClick={() => setActiveSection("trapezoid")}
          alt="trapezoid"
        />
        <img
          src={percent}
          onClick={() => setActiveSection("percent")}
          alt="percent"
        />
        <img
          src={milestone}
          onClick={() => setActiveSection("milestone")}
          alt="milestone"
        />
      </div>

      {/* Form Section */}
      <div className={styles.formSection}>
        <div>
          <span className={styles.title}>Equation/Value</span>
          <br />
          <input
            type="text"
            className={styles.inputWide}
            value="PayUC$ * ISQty"
            //readOnly
          />
        </div>
        <br />
        {/* Cost row */}
        <div>
          <span style={{ color: "green" }}>
            <b>$</b>
          </span>
          <label> Approp:</label>
          <span style={{ marginRight: "20px", marginLeft: "10px" }}>
            <input type="text" defaultValue="3010" />
          </span>

          <label>FY:</label>
          <span style={{ marginRight: "20px", marginLeft: "10px" }}>
            <input type="text" />
          </span>

          <label>Units:</label>
          <span style={{ marginRight: "20px", marginLeft: "10px" }}>
            <input type="text" />
          </span>
        </div>

        {/* Dates */}
        <div className={styles.row}>
          <label>
            <b>Start Date:</b>
          </label>
          <input type="text" />
          <label>
            <b>Finish Date:</b>
          </label>
          <input type="text" />
        </div>

        {/* Spread based on */}
        <div className={styles.row}>
          <label>Spread based on:</label>
          <input type="radio" name="spread" defaultChecked /> Schedule
          <input type="radio" name="spread" /> Cost
        </div>

        {/* Ramp Up */}
        <div className={styles.row}>
          <label>Ramp Up (%):</label>
          <input type="text" placeholder="ƒx" className={styles.idInput} />
        </div>

        <div className={styles.row}>
          <label>Steady State (%):</label>
          <input type="text" placeholder="ƒx" className={styles.idInput} />
        </div>

        {/* Ramp Down */}
        <div className={styles.row}>
          <label>Ramp Down (%):</label>
          <span>Unknown</span>
        </div>

        {/* Status */}
        <p className={styles.status}>
          <b>Status:</b> <span style={{ color: "red" }}>Value missing</span>
        </p>

        <hr className={styles.divider} />

        {/* Calculate + Lead/Lag */}
        <div className={styles.row}>
          <label>
            <b>Calculate:</b>
          </label>
          <button className={styles.annualBtn}>Annual</button>
          <label className={styles.label}>
            <b>Lead/Lag:</b> None
          </label>
        </div>

        {/* Risk */}
        <div className={styles.row}>
          <label>
            <b>RISK Specification:</b> None
          </label>
        </div>
      </div>
    </div>
  );
};

export default Trapezoid;
