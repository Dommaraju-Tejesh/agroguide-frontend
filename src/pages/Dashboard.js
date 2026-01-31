import { useEffect, useState } from "react";
import { getHistory } from "../api/advisory";

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
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <div className="container">
        {/* GLASS CARD */}
        <div
          style={{
            backdropFilter: "blur(12px)",
            background: "rgba(255, 255, 255, 0.25)",
            borderRadius: "20px",
            padding: "40px",
            color: "#000",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          <div className="text-center mb-4">
            <h2>Welcome, {user.name} 🌾</h2>
            <p className="fs-5">
              "Farming is a profession of hope. Every seed planted is a promise for tomorrow."
            </p>
            <p>
              Smart decisions today lead to healthier crops and better yields.
              Let AgroGuide assist you in every stage of your farming journey.
            </p>
          </div>

          <h4 className="mb-3">Your Advisory History</h4>

          {history.length === 0 ? (
            <div className="alert alert-light">No history yet</div>
          ) : (
            <div className="row">
              {history.map((item, index) => (
                <div key={index} className="col-md-6 mb-3">
                  <div
                    style={{
                      backdropFilter: "blur(8px)",
                      background: "rgba(255,255,255,0.35)",
                      borderRadius: "15px",
                      padding: "20px",
                      border: "1px solid rgba(255,255,255,0.3)",
                    }}
                  >
                    <h5 className="text-success">
                      {item.crop} - {item.stage}
                    </h5>
                    <p><b>Soil:</b> {item.soil}</p>
                    <p><b>Advice:</b> {item.advice}</p>
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
