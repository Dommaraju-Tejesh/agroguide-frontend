import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // your existing login API call here
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1592982537447-6f2a6a0b8b8a')",

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0,0,0,0.6)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backdropFilter: "blur(12px)",
          background: "rgba(0,0,0,0.55)",
          padding: "40px",
          borderRadius: "15px",
          width: "360px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2>AgroGuide Login 🌿</h2>
        <p style={{ fontStyle: "italic" }}>
          “To forget how to dig the earth and tend the soil is to forget
          ourselves.”
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              margin: "12px 0",
              borderRadius: "8px",
              border: "none",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              margin: "12px 0",
              borderRadius: "8px",
              border: "none",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#198754",
              border: "none",
              color: "white",
              fontWeight: "bold",
              borderRadius: "8px",
              marginTop: "10px",
            }}
          >
            Login
          </button>
        </form>

        <p style={{ marginTop: "15px" }}>
          New farmer?{" "}
          <Link to="/register" style={{ color: "#ffc107" }}>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
