import React from "react";
import styles from "./Curv2B.module.css";

const Curv2B = () => {
  return (
    <div className={styles.formSection}>
      {/* Title */}
      <div>
        <span className={styles.title}>Reference Cost Equation/Value</span>
        <br />
        <input
          type="text"
          className={styles.inputWide}
          value="PayUC$ * ISQty"
          readOnly
        />
      </div>
      <br />

      {/* Appropr / FY / Units */}
      <div>
        <span className={styles.dollar}>$</span>
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
      <br />

      {/* Shared Keyword */}
      <div className={styles.row}>
        <label>
          <b>Shared Keyword:</b>
        </label>
        <select className={styles.selectBox}>
          <option></option>
        </select>
      </div>

      {/* Profile ID */}
      <div style={{ marginTop: "20px" }} className={styles.row}>
        <label>
          <b>Profile ID:</b>
        </label>
        <select className={styles.selectBox}>
          <option></option>
        </select>
      </div>

      {/* Reference Cost Type */}
      <div style={{ marginTop: "18px" }} className={styles.row}>
        <label>
          <b>Reference Cost Type:</b>
        </label>
        <input type="radio" name="refType" /> Unit
        <input type="radio" name="refType" style={{ marginLeft: "15px" }} />
        Cumulative Average
        <input type="radio" name="refType" style={{ marginLeft: "15px" }} /> Lot
        Total
      </div>

      {/* Theory */}
      <div style={{ marginTop: "15px" }} className={styles.row}>
        <label>
          <b>Theory:</b>
        </label>
        <input type="radio" name="theory" /> Unit Theory
        <input type="radio" name="theory" style={{ marginLeft: "15px" }} />
        Cumulative Average Theory
      </div>

      {/* Prior / Buy / Slope */}
      <div style={{ marginTop: "15px" }} className={styles.row}>
        <label>
          <b>Prior Quantity:</b>
        </label>
        <span style={{ marginLeft: "10px" }}>
          <input type="text" placeholder="ID" className={styles.idInput} />
        </span>
      </div>

      <div className={styles.row}>
        <label>
          <b>Buy Quantity:</b>
        </label>
        <span style={{ marginLeft: "18px" }}>
          <input type="text" placeholder="ID" className={styles.idInput} />
        </span>
      </div>

      <div className={styles.row}>
        <label>
          <b>Slope (%):</b>
        </label>
        <span style={{ marginLeft: "44px" }}>
          <input type="text" placeholder="ID" className={styles.idInput} />
        </span>
      </div>

      {/* Status */}
      <p className={styles.status}>
        <b>Status:</b>{" "}
        <span style={{ color: "red" }}>Required parameters are missing</span>
      </p>

      <hr className={styles.divider} />

      {/* Footer */}
      <div className={styles.row}>
        <label>
          <b>Calculate:</b>
        </label>
        <button className={styles.annualBtn}>Annual</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label>
          <b>Lead/Lag:</b> None
        </label>
      </div>

      <div className={styles.row}>
        <div className={`${styles.row} ${styles.footer}`}>
          <label>
            <b>RISK Specification:</b> None
          </label>
        </div>
      </div>
    </div>
  );
};

export default Curv2B;
