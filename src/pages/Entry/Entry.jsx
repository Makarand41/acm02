import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Entry.jsx
 * Step shown after successful login.
 * Lets user choose between "New Project" and "Open Existing Project"
 * Both redirect to your main site (Home page for now).
 */

const Entry = () => {
  const navigate = useNavigate();

  const goToHome = (mode) => {
    // In the future, you can use mode if needed (like mode === "new" or "open")
    console.log("Selected mode:", mode);
    navigate("/"); // ✅ go to Home page
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome</h1>
        <p style={styles.subtitle}>Choose what you’d like to do next</p>

        <div style={styles.actions}>
          <button
            onClick={() => goToHome("new")}
            style={{ ...styles.button, ...styles.primary }}
          >
            ➕ New Project
            <div style={styles.smallText}>Start a fresh workspace</div>
          </button>

          <button
            onClick={() => goToHome("open")}
            style={{ ...styles.button, ...styles.secondary }}
          >
            📂 Open Existing Project
            <div style={styles.smallText}>Continue with your existing one</div>
          </button>
        </div>

        <div style={styles.footer}>
          <small>Session active — you will be auto-logged out after inactivity.</small>
        </div>
      </div>
    </div>
  );
};

export default Entry;

/* Simple inline styles so no CSS file is needed */
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f6f8",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 700,
    background: "#fff",
    borderRadius: 12,
    boxShadow: "0 8px 32px rgba(2,6,23,0.1)",
    padding: 36,
    textAlign: "center",
  },
  title: {
    margin: 0,
    fontSize: 30,
    fontWeight: 700,
    color: "#0f172a",
  },
  subtitle: {
    marginTop: 8,
    marginBottom: 28,
    color: "#475569",
  },
  actions: {
    display: "flex",
    gap: 20,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  button: {
    minWidth: 250,
    padding: "18px 22px",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    fontSize: 16,
    fontWeight: 600,
    boxShadow: "0 6px 18px rgba(2,6,23,0.08)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  primary: {
    backgroundColor: "#0b5fff",
    color: "#fff",
  },
  secondary: {
    backgroundColor: "#eef2ff",
    color: "#0b3a8a",
  },
  smallText: {
    fontSize: 12,
    fontWeight: 500,
    opacity: 0.9,
  },
  footer: {
    marginTop: 24,
    color: "#64748b",
  },
};
