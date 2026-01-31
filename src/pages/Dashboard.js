import { useEffect, useState } from "react";
import { getHistory } from "../api/advisory";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const loadHistory = async () => {
      const res = await getHistory(user._id);
      setHistory(res.data);
    };
    loadHistory();
  }, [user._id]);

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef')",
        backgroundSize: "cover",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <div className="container">
        <div
          className="card shadow-lg p-4"
          style={{ backgroundColor: "rgba(255,255,255,0.95)", borderRadius: "15px" }}
        >
          <div className="text-center mb-4">
            <h2>Welcome, {user.name} 🌾</h2>
            <p className="text-muted">Smart Farming Advisory Dashboard</p>
          </div>

          <div className="text-center mb-4">
            <Link className="btn btn-success me-3 px-4" to="/advisory">
              Get New Advice
            </Link>
            <Link className="btn btn-warning px-4" to="/admin">
              Suggest / Admin
            </Link>
          </div>

          <h4 className="mb-3">Your Advisory History</h4>

          {history.length === 0 ? (
            <div className="alert alert-info">No history yet</div>
          ) : (
            <div className="row">
              {history.map((item, index) => (
                <div key={index} className="col-md-6 mb-3">
                  <div className="card border-0 shadow-sm">
                    <div className="card-body">
                      <h5 className="text-success">
                        {item.crop} - {item.stage}
                      </h5>
                      <p><b>Soil:</b> {item.soil}</p>
                      <p><b>Advice:</b> {item.advice}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
