// src/pages/Login/Login.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useAuth } from "../../context/AuthProvider";
import styles from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState(""); // treat as email
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) navigate("/", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username.trim() || !password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      const userCred = await signInWithEmailAndPassword(auth, username.trim().toLowerCase(), password);
      // success
      login(); // update your app-level auth state
      navigate("/entry");
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid credentials or account not found.");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logo}>CE</div>
          <div className={styles.appTitle}>
            <div className={styles.projectName}>Cost Estimation Project</div>
            <div className={styles.projectSub}>Admin Login</div>
          </div>
        </header>

        <form className={styles.card} onSubmit={handleSubmit} noValidate>
          <h2 className={styles.cardTitle}>Sign in to your account</h2>

          <label className={styles.field}>
            <span className={styles.labelText}>Email</span>
            <input className={styles.input} type="email" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="you@example.com" />
          </label>

          <label className={styles.field}>
            <span className={styles.labelText}>Password</span>
            <input className={styles.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
          </label>

          <div className={styles.actions}>
            <button type="submit" className={styles.primaryBtn}>Sign In</button>
            <button type="button" className={styles.linkBtn} onClick={() => { setUsername("admin"); setPassword("admin"); setError(""); }}>Fill demo</button>
          </div>

          {error && <div className={styles.error} role="alert">{error}</div>}

          <div className={styles.hint}>
            Don't have an account?{" "}
            <button type="button" onClick={() => navigate("/register")} style={{ background: "none", border: "none", color: "#0b5fff", fontWeight: 700, cursor: "pointer" }}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
