import React, { useState } from "react";
import cost from "../../assets/images/boxB/cost.jpg";
import non_cost from "../../assets/images/boxB/non_cost.jpg";

const Calender = () => {
  const [selectedOption, setSelectedOption] = useState("Base Year");

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "20px",
        maxWidth: "1000px",
      }}
    >
      {/* --- Top Section with Radio + Images --- */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start", // aligns items to the top
          marginBottom: "2px", // reduced gap from inputs row
        }}
      >
        {/* Left Side - Radio buttons */}
        <div style={{ marginTop: "15px" }}>
          {["Base Year", "Then Year", "Same Year"].map((option) => (
            <label
              key={option}
              style={{
                marginRight: "20px",
                fontWeight: selectedOption === option ? "bold" : "500",
                cursor: "pointer",
              }}
            >
              <input
                type="radio"
                name="yearType"
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
              />{" "}
              {option}
            </label>
          ))}
        </div>

        {/* Right Side - Images */}
        <div style={{ display: "flex", gap: "15px", marginTop: "-10px" }}>
          <div style={{ textAlign: "center" }}>
            <img
              src={cost}
              alt="cost"
              style={{ width: "60px", height: "63px", cursor: "pointer" }}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src={non_cost}
              alt="non-cost"
              style={{ width: "60px", height: "63px", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      {/* --- Input Fields --- */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginRight: "15px" }}>
          $ Approp:{" "}
          <input type="text" defaultValue="3010" style={inputStyle} />
        </label>
        <label style={{ marginRight: "15px" }}>
          FY: <input type="text" style={inputStyle} />
        </label>
        <label>
          Units: <input type="text" style={inputStyle} />
        </label>
      </div>

      {/* --- Table --- */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={darkBlueCell}></th>
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
              <th key={idx} style={darkBlueCell}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr style={rowStyle}>
            <td style={darkBlueCell}>Yearly Value</td>
            <td style={fyCellStyle}></td>
            <td style={fyCellStyle}></td>
            <td style={fyCellStyle}></td>
            <td style={fyCellStyle}></td>
            <td style={fyCellStyle}></td>
            <td style={fyCellStyle}>650</td>
            <td style={fyCellStyle}>600</td>
            <td style={fyCellStyle}></td>
            <td style={fyCellStyle}></td>
            <td style={fyCellStyle}></td>
            <td style={fyCellStyle}></td>
          </tr>
        </tbody>
      </table>

      {/* --- Footer --- */}
      <div style={{ marginTop: "15px", fontSize: "14px" }}>
        <p>
          <span style={{ fontWeight: "bold" }}>Total:</span>{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>1250</span>
        </p>
        <p>
          <span >Status:</span>{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>Complete</span>
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Lead/Lag:</span> None
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>RISK Specification:</span> None
        </p>
      </div>
    </div>
  );
};

// --- Styles ---
const inputStyle = {
  padding: "5px",
  marginLeft: "5px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const darkBlueCell = {
  border: "1px solid #ccc",
  textAlign: "center",
  padding: "8px",
  backgroundColor: "#b3b3dd",
  color: "black",
  fontWeight: "bold",
};

const fyCellStyle = {
  border: "1px solid #ccc",
  textAlign: "center",
  padding: "8px",
  backgroundColor: "#e8e8eeff",
};

const rowStyle = {
  backgroundColor: "#f9f9f9", // 👈 added missing style
};

export default Calender;
