// src/pages/Register/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import styles from "./Register.module.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name.trim() || !email.trim() || !password) {
      setError("Please fill all fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== repeatPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // Create auth user
      const userCred = await createUserWithEmailAndPassword(auth, email.trim(), password);
      const user = userCred.user;

      // Set displayName on the auth user
      await updateProfile(user, { displayName: name.trim() });

      // Optional: store profile in Firestore (useful later)
      await setDoc(doc(db, "users", user.uid), {
        id: user.uid,
        name: name.trim(),
        email: email.trim().toLowerCase(),
        createdAt: new Date().toISOString(),
      });

      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 900);
    } catch (err) {
      console.error("Register error:", err);
      // Firebase error messages are descriptive — map or show raw
      setError(err.message || "Registration failed");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logo}>CE</div>
          <div className={styles.appTitle}>
            <div className={styles.projectName}>Cost Estimation Project</div>
            <div className={styles.projectSub}>Register New Account</div>
          </div>
        </header>

        <form className={styles.card} onSubmit={handleSubmit} noValidate>
          <h2 className={styles.cardTitle}>Create an account</h2>

          <label className={styles.field}>
            <span className={styles.labelText}>Full name</span>
            <input className={styles.input} value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" />
          </label>

          <label className={styles.field}>
            <span className={styles.labelText}>Email</span>
            <input className={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          </label>

          <label className={styles.field}>
            <span className={styles.labelText}>Password</span>
            <input className={styles.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create a password" />
          </label>

          <label className={styles.field}>
            <span className={styles.labelText}>Repeat password</span>
            <input className={styles.input} type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} placeholder="Repeat password" />
          </label>

          <div className={styles.actions}>
            <button type="submit" className={styles.primaryBtn}>Register</button>
            <button type="button" className={styles.linkBtn} onClick={() => navigate("/login")}>Back to login</button>
          </div>

          {error && <div className={styles.error} role="alert">{error}</div>}
          {success && <div className={styles.success}>{success}</div>}
        </form>
      </div>
    </div>
  );
};

export default Register;
