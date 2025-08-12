import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login,user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      if(user.role==="admin"){
        navigate("/mybooks");
      }else{
        navigate("/home");
      }
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Login</h2>
        {error && <p style={styles.error}>{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    background: "#3B2F2F",
  },
  form: {
    background: "linear-gradient(to bottom right, #2D2525, #3B2F2F)",
    padding: 30,
    borderRadius: 12,
    boxShadow: "0 25px 50px -12px rgba(193,154,107,0.25)",
    width: 300,
    display: "flex",
    flexDirection: "column",
    border: "1px solid rgba(193,154,107,0.3)",
  },
  input: {
    marginBottom: 15,
    padding: 12,
    fontSize: 16,
    borderRadius: 8,
    border: "1px solid rgba(193,154,107,0.4)",
    background: "#2D2525",
    color: "#FAF3E0",
    fontFamily: "Inter, sans-serif",
  },
  button: {
    padding: 12,
    background: "linear-gradient(to right, #C19A6B, #D4B17A)",
    color: "#3B2F2F",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins, sans-serif",
    boxShadow: "0 10px 25px -5px rgba(193,154,107,0.4)",
    transition: "all 0.3s ease",
  },
  error: {
    color: "#C19A6B",
    marginBottom: 10,
    fontFamily: "Inter, sans-serif",
  },
  heading: {
    color: "#FAF3E0",
    marginBottom: 20,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Poppins, sans-serif",
  },
};

export default LoginPage;
