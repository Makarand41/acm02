import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import styles from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      login();
      navigate("/entry");
    } else {
      setError("Invalid username or password");
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

        <form className={styles.card} onSubmit={handleSubmit} aria-label="Login form">
          <h2 className={styles.cardTitle}>Sign in to your account</h2>

          <label className={styles.field}>
            <span className={styles.labelText}>Username</span>
            <input
              className={styles.input}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              autoComplete="username"
              aria-label="Username"
            />
          </label>

          <label className={styles.field}>
            <span className={styles.labelText}>Password</span>
            <input
              className={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              aria-label="Password"
            />
          </label>

          <div className={styles.actions}>
            <button type="submit" className={styles.primaryBtn} aria-label="Login">
              Sign In
            </button>
            <button
              type="button"
              className={styles.linkBtn}
              onClick={() => {
                setUsername("admin");
                setPassword("admin");
                setError("");
              }}
              aria-label="Fill demo credentials"
            >
              Fill demo
            </button>
          </div>

          {error && <div className={styles.error} role="alert">{error}</div>}

          <div className={styles.hint}>
            Use <strong>admin</strong> / <strong>admin</strong> for demo access
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
