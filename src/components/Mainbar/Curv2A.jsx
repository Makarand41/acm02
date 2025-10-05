import React from "react";
import styles from "./Curv2A.module.css";

const Curv2A = ({ setActiveSection }) => {
  return (
    <>
      <div className={styles.formSection}>
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
        <br />

        <div>
          <b>Spent (%):</b> &nbsp;
          <span style={{ marginLeft: "10px" }}>
            <input type="text" placeholder="ID" className={styles.idInput} />
          </span>
        </div>

        <br />
        <div>
          <label>
            <b>Time (%):</b> &nbsp;&nbsp;&nbsp;
          </label>
          <span style={{ marginLeft: "10px" }}>
            <input type="text" placeholder="ID" className={styles.idInput} />
          </span>
        </div>
        <br />
        <div>
          <label>
            {" "}
            <b>Peakness :</b> &nbsp;&nbsp;
          </label>
          <select style={{ width: "200px" }}>
            <option></option>
          </select>
        </div>

        <p className={styles.status}>
          <b>Status:</b> <span style={{ color: "red" }}>Value missing</span>
        </p>

        <hr className={styles.divider} />

        <div className={styles.row}>
          <label>
            <b>Calculate:</b> &nbsp;
          </label>
          <input type="text" />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <b>Lead/Lag:</b> None &nbsp;
          </label>
        </div>

        <br />

        <div style={{ marginBottom: "90px" }} className={styles.row}>
          <label>
            <b>RISK Specification:</b> None
          </label>
        </div>
      </div>
    </>
  );
};

export default Curv2A;
