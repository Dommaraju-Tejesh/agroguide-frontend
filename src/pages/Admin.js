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
              maxWidth: "600px",
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
              <p>
                Share your farming knowledge to help farmers make smarter
                decisions.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                className="form-control mb-3"
                placeholder="Crop (e.g. Rice)"
                onChange={(e) => setForm({ ...form, crop: e.target.value })}
              />

              <input
                className="form-control mb-3"
                placeholder="Soil (e.g. Black Soil)"
                onChange={(e) => setForm({ ...form, soil: e.target.value })}
              />

              <input
                className="form-control mb-3"
                placeholder="Stage (e.g. Seeding)"
                onChange={(e) => setForm({ ...form, stage: e.target.value })}
              />

              <textarea
                className="form-control mb-3"
                placeholder="Write farming advice here..."
                rows="4"
                onChange={(e) => setForm({ ...form, advice: e.target.value })}
              />

              <button className="btn btn-success w-100" type="submit">
                Add Rule
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
