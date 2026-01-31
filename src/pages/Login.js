import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import tractor from "../assets/tractor-login.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // your existing login code here
  };

  return (
    <div
      style={{
        backgroundImage: `url(${tractor})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backdropFilter: "blur(10px)",
          background: "rgba(0,0,0,0.55)",
          padding: "40px",
          borderRadius: "15px",
          width: "350px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2>AgroGuide Login 🌿</h2>
        <p style={{ fontStyle: "italic" }}>
          “The farmer has to be an optimist or he wouldn’t still be a farmer.”
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", margin: "10px 0" }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", margin: "10px 0" }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              background: "#198754",
              border: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Login
          </button>
        </form>

        <p style={{ marginTop: "15px" }}>
          New farmer? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}
