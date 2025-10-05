import React from "react";

const Curve2C = () => {
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: "Arial, sans-serif",
    fontSize: "13px",
  };

  const cell = {
    border: "1px solid #9aa0a6",
    padding: "6px 10px",
    verticalAlign: "middle",
    background: "#fff",
  };

  const headerCell = {
    ...cell,
    background: "#dfe8ea",
    fontWeight: 700,
    textAlign: "left",
  };

  const indent1 = { paddingLeft: "20px" };
  const indent2 = { paddingLeft: "40px" };
  const indent3 = { paddingLeft: "60px" };

  return (
    <div style={{ margin: 16, overflowX: "auto", border: "1px solid #c7c9cb" }}>
      <table style={tableStyle}>
        <colgroup>
          <col style={{ width: "30%" }} />
          <col style={{ width: "15%" }} />
          <col style={{ width: "8%" }} />
          <col style={{ width: "8%" }} />
          <col style={{ width: "8%" }} />
          <col style={{ width: "8%" }} />
          <col style={{ width: "8%" }} />
          <col style={{ width: "10%" }} />
        </colgroup>

        <thead>
          <tr>
            <th style={headerCell}>WBS/CES Description</th>
            <th style={headerCell}>Total: Point Estimate</th>
            <th style={headerCell}>FY 2020</th>
            <th style={headerCell}>FY 2021</th>
            <th style={headerCell}>FY 2022</th>
            <th style={headerCell}>FY 2023</th>
            <th style={headerCell}>FY 2024</th>
            <th style={headerCell}>FY 2025</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={cell}>▾ Dodo Drone (DDD) Estimate</td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
          </tr>

          <tr>
            <td style={{ ...cell, ...indent1 }}>▾ Dodo Drone (DDD) Aircraft System</td>
            <td style={cell}>126,471.704 (49%)</td>
            <td style={cell}>$935.545</td>
            <td style={cell}>$1,534.299</td>
            <td style={cell}>$1,926.566</td>
            <td style={cell}>$2,064.707</td>
            <td style={cell}>$1,483.810</td>
            <td style={cell}>$8,662.482</td>
          </tr>

          <tr>
            <td style={{ ...cell, ...indent2 }}>▾ Dodo Drone (DDD) Engineering, Manufacturing</td>
            <td style={cell}>7,832.311 (50%)</td>
            <td style={cell}>$935.545</td>
            <td style={cell}>$1,534.299</td>
            <td style={cell}>$1,926.566</td>
            <td style={cell}>$2,064.707</td>
            <td style={cell}>$1,371.194</td>
            <td style={cell}></td>
          </tr>

          <tr>
            <td style={{ ...cell, ...indent3 }}>Aircraft System, Integration, Assembly</td>
            <td style={cell}>1,450.427</td>
            <td style={cell}>$278.712</td>
            <td style={cell}>$284.286</td>
            <td style={cell}>$289.972</td>
            <td style={cell}>$295.771</td>
            <td style={cell}>$301.687</td>
            <td style={cell}></td>
          </tr>

          <tr>
            <td style={{ ...cell, ...indent1 }}>▾ Air Vehicle</td>
            <td style={cell}>3,846.924 (50%)</td>
            <td style={cell}>$292.242</td>
            <td style={cell}>$690.564</td>
            <td style={cell}>$1,018.033</td>
            <td style={cell}>$1,172.648</td>
            <td style={cell}>$673.437</td>
            <td style={cell}></td>
          </tr>

          <tr>
            <td style={{ ...cell, ...indent2 }}>Airframe</td>
            <td style={cell}>86.683</td>
            <td style={cell}>$16.684</td>
            <td style={cell}>$16.971</td>
            <td style={cell}>$17.311</td>
            <td style={cell}>$17.657</td>
            <td style={cell}>$18.060</td>
            <td style={cell}></td>
          </tr>

          <tr>
            <td style={{ ...cell, ...indent2 }}>Propulsion</td>
            <td style={cell}>54.826 (50%)</td>
            <td style={cell}>$7.063</td>
            <td style={cell}>$14.345</td>
            <td style={cell}>$14.632</td>
            <td style={cell}></td>
            <td style={cell}>$5.105</td>
            <td style={cell}></td>
          </tr>

          <tr>
            <td style={{ ...cell, ...indent2 }}>Vehicle Subsystems</td>
            <td style={cell}>53.229 (50%)</td>
            <td style={cell}>$5.105</td>
            <td style={cell}>$10.414</td>
            <td style={cell}>$15.933</td>
            <td style={cell}>$16.252</td>
            <td style={cell}></td>
            <td style={cell}></td>
          </tr>

          <tr>
            <td style={{ ...cell, ...indent1 }}>▾ Avionics</td>
            <td style={cell}>3,617.686 (50%)</td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
          </tr>

          <tr>
            <td style={{ ...cell, ...indent2 }}>Avionics Hardware</td>
            <td style={cell}>1,096.542 (52%)</td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
          </tr>

          <tr>
            <td style={{ ...cell, ...indent2 }}>Avionics Software</td>
            <td style={cell}>2,521.144 (52%)</td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
          </tr>

          <tr>
            <td style={{ ...cell, ...indent2 }}>Auxiliary Equipment</td>
            <td style={cell}>34.500 (50%)</td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
          </tr>

          <tr>
            <td style={{ ...cell, ...indent2 }}>Payload/Mission System</td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
          </tr>

          <tr>
            <td style={{ ...cell, ...indent2 }}>Systems Engineering</td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
          </tr>

          <tr>
            <td style={{ ...cell, ...indent2 }}>Program Management</td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
          </tr>

          <tr>
            <td style={cell}>▾ Dodo Drone (DDD) Production & Deploy</td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
          </tr>

          <tr>
            <td style={cell}>Dodo Drone (DDD) Production & Deploy</td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
            <td style={cell}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Curve2C;
