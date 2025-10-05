import React from "react";
import beta from "../../assets/images/vector1/beta.jpg";
import milestone from "../../assets/images/vector1/milestone.jpg";
import percent from "../../assets/images/vector1/percent.jpg";
import rayleigh from "../../assets/images/vector1/rayleigh.jpg";
import trapezoid from "../../assets/images/vector1/trapezoid.jpg";
import weibull from "../../assets/images/vector1/weibull.jpg";
import styles from "./Percent.module.css";

const Percent = ({ setActiveSection }) => {
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
          <label>FY:</label>&nbsp;&nbsp;
          <input type="text" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label>Units:</label>&nbsp;&nbsp;
          <input type="text" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <br />
        <p>
          Enter percent spread year/Month. Enter as whole number totaling 100.
        </p>
        {/* --- Table --- */}
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.darkBlueCell}></th>
              {[
                "FY 2020",
                "FY 2021",
                "FY 2022",
                "FY 2023",
                "FY 2024",
                "FY 2025",
                "FY 2026",
                "FY 2027",
                "FY 2028",
                "FY 2029",
                "FY 2030",
              ].map((heading, idx) => (
                <th key={idx} className={styles.darkBlueCell}>
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className={styles.rowStyle}>
              <td className={styles.darkBlueCell}>Yearly Value</td>
              <td className={styles.fyCell}></td>
              <td className={styles.fyCell}></td>
              <td className={styles.fyCell}></td>
              <td className={styles.fyCell}></td>
              <td className={styles.fyCell}></td>
              <td className={styles.fyCell}>650</td>
              <td className={styles.fyCell}>600</td>
              <td className={styles.fyCell}></td>
              <td className={styles.fyCell}></td>
              <td className={styles.fyCell}></td>
              <td className={styles.fyCell}></td>
            </tr>
          </tbody>
        </table>

        <div className={styles.row} style={{ marginTop: "45px" }}>
          <label>
            <b>Calculate:</b>
          </label>
          <button className={styles.annualBtn}>Annual</button>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <b>Lead/Lag:</b> None
          </label>
        </div>

        <div className={styles.row}>
          <label>
            <b>RISK Specification:</b> None
          </label>
        </div>
      </div>
    </div>
  );
};

export default Percent;
