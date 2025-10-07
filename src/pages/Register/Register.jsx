import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { ToastContainer, toast } from "react-toastify"; // ✅ local Toastify
import "react-toastify/dist/ReactToastify.css";
import styles from "./Register.module.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password) {
      toast.error("Please fill all fields.");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }
    if (password !== repeatPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      // 1️⃣ Create Firebase Auth user
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );
      const user = userCred.user;
      console.log("✅ User created:", user.uid);

      // 2️⃣ Show success toast and navigate immediately
     toast.success("🎉 Registered successfully!");
setTimeout(() => {
  navigate("/login", { replace: true });
}, 2000);

      // 3️⃣ Run profile and Firestore writes in background
      (async () => {
        try {
          const tasks = [
            updateProfile(user, { displayName: name.trim() }).catch((err) => {
              console.error("updateProfile failed:", err);
              toast.error("⚠️ Profile update failed (non-blocking).");
            }),
            setDoc(doc(db, "users", user.uid), {
              id: user.uid,
              name: name.trim(),
              email: email.trim().toLowerCase(),
              createdAt: new Date().toISOString(),
            }).catch((err) => {
              console.error("setDoc failed:", err);
              toast.error("⚠️ Saving profile failed (non-blocking).");
            }),
          ];
          await Promise.allSettled(tasks);
          console.log("✅ Background Firestore + profile update done");
        } catch (err) {
          console.error("Background error:", err);
        }
      })();
    } catch (err) {
      console.error("❌ Register error:", err);
      if (err.code === "auth/email-already-in-use") {
        toast.error("This email is already registered.");
      } else if (err.code === "auth/invalid-email") {
        toast.error("Invalid email address.");
      } else if (err.code === "auth/weak-password") {
        toast.error("Password is too weak.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
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
            <input
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
            />
          </label>

          <label className={styles.field}>
            <span className={styles.labelText}>Email</span>
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </label>

          <label className={styles.field}>
            <span className={styles.labelText}>Password</span>
            <input
              className={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
            />
          </label>

          <label className={styles.field}>
            <span className={styles.labelText}>Repeat password</span>
            <input
              className={styles.input}
              type="password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              placeholder="Repeat password"
            />
          </label>

          <div className={styles.actions}>
            <button type="submit" className={styles.primaryBtn}>
              Register
            </button>
            <button
              type="button"
              className={styles.linkBtn}
              onClick={() => navigate("/login")}
            >
              Back to login
            </button>
          </div>
        </form>
      </div>

      {/* ✅ Local Toastify container (specific to this page only) */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Register;
