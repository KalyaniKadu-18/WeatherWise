import React, { useState } from "react";
import axios from "axios";
import styles from "./Signup.module.css";
import bgimg from "../../assets/BackgroundImage.webp";

function Signup() {
  const [form, setForm] = useState({
    name: "",
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

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        "http://localhost:8000/users/register", // ✅ correct route
        form
      );

      console.log("REGISTER SUCCESS:", response.data);

      alert("Signup Successful! Now Login");

    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message || "Signup failed"
      );
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
            <h1 className={styles.heading}>Signup</h1>

            {error && <p className={styles.error}>{error}</p>}

            <form onSubmit={handleSignup} className={styles.form}>
              
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={form.name}
                onChange={handleChange}
                required
              />

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
                {loading ? "Signing up..." : "Signup"}
              </button>
            </form>
          </div>

          <div className={styles.heroRight}>
            📝
          </div>

        </div>
      </div>
    </div>
  );
}

export default Signup;