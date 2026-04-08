import React, { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import bgimg from "../../assets/BackgroundImage.webp";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        "http://localhost:8000/users/login",
        form
      );

      console.log("LOGIN SUCCESS:", response.data);

      localStorage.setItem("token", response.data.token);

      alert("Login Successful!");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.heroBackgroundImg}
        src={bgimg}
        alt="background"
      />

      <div className={styles.heroContent}>
        <div className={styles.weatherHeroCard}>
          
          <div className={styles.heroLeft}>
            <h1 className={styles.heading}>Login</h1>

            {error && <p className={styles.error}>{error}</p>}

            <form onSubmit={handleLogin} className={styles.form}>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange}
                required
              />

              <button type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>

          <div className={styles.heroRight}>
            🔐
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;