import { useState } from "react";
import api from "../api";
import Navbar from "../components/Navbar";

export default function Admin() {
  const [form, setForm] = useState({
    crop: "",
    soil: "",
    stage: "",
    advice: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/advisory/add", form);
    alert("Rule added successfully 🌾");
  };

  const innerCard = {
    backdropFilter: "blur(8px)",
    background: "rgba(255,255,255,0.35)",
    borderRadius: "15px",
    padding: "20px",
    border: "1px solid rgba(255,255,255,0.3)",
    marginBottom: "20px",
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524486361537-8ad15938e1a3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          padding: "40px",
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: "700px",
              margin: "auto",
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
              <h2>🌾 Add Advisory Rule</h2>
              <p>Help farmers with your valuable knowledge</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={innerCard}>
                <label>Crop</label>
                <input
                  className="form-control"
                  placeholder="e.g. Rice"
                  onChange={(e) =>
                    setForm({ ...form, crop: e.target.value })
                  }
                />
              </div>

              <div style={innerCard}>
                <label>Soil Type</label>
                <input
                  className="form-control"
                  placeholder="e.g. Black Soil"
                  onChange={(e) =>
                    setForm({ ...form, soil: e.target.value })
                  }
                />
              </div>

              <div style={innerCard}>
                <label>Crop Stage</label>
                <input
                  className="form-control"
                  placeholder="e.g. Seeding"
                  onChange={(e) =>
                    setForm({ ...form, stage: e.target.value })
                  }
                />
              </div>

              <div style={innerCard}>
                <label>Advice</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Write farming advice..."
                  onChange={(e) =>
                    setForm({ ...form, advice: e.target.value })
                  }
                />
              </div>

              <button className="btn btn-success w-100 mt-3">
                Add Rule
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

