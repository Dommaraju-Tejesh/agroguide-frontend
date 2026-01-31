import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await api.post("/auth/login", { email, password });
    localStorage.setItem("user", JSON.stringify(res.data));
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0,0,0,0.55)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backdropFilter: "blur(12px)",
          background: "rgba(255,255,255,0.25)",
          padding: "40px",
          borderRadius: "20px",
          width: "400px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        <h3 className="text-center mb-3">AgroGuide Login 🌿</h3>
        <p className="text-center">
          "The farmer has to be an optimist or he wouldn’t still be a farmer."
        </p>

        <form onSubmit={handleLogin}>
          <input
            className="form-control mb-3"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-success w-100">Login</button>
        </form>

        <p className="mt-3 text-center">
          New farmer? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}
