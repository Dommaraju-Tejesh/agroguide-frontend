import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div
      style={{
        background: "rgba(0,0,0,0.7)",
        padding: "12px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <h3>AgroGuide 🌿</h3>

      <div style={{ display: "flex", gap: "25px" }}>
        <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>
          Dashboard
        </Link>
        <Link to="/advisory" style={{ color: "white", textDecoration: "none" }}>
          Advisory
        </Link>
        <Link to="/admin" style={{ color: "white", textDecoration: "none" }}>
          Admin
        </Link>
        <span onClick={logout} style={{ cursor: "pointer", color: "#ffc107" }}>
          Logout
        </span>
      </div>
    </div>
  );
}
