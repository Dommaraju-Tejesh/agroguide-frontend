import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    await api.post("/auth/register", { name, email, password });
    navigate("/");
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1464226184884-fa280b87c399')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0,0,0,0.45)",
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
        <h3 className="text-center mb-3">Join AgroGuide 🌾</h3>
        <p className="text-center">
          "Agriculture is our wisest pursuit, because it will in the end
          contribute most to real wealth."
        </p>

        <form onSubmit={handleRegister}>
          <input
            className="form-control mb-3"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
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
          <button className="btn btn-warning w-100">Register</button>
        </form>

        <p className="mt-3 text-center">
          Already have account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
