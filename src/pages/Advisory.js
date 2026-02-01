import { useState } from "react";
import { getAdvice } from "../api/advisory";

export default function Advisory() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [crop, setCrop] = useState("");
  const [soil, setSoil] = useState("");
  const [stage, setStage] = useState("");
  const [advice, setAdvice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await getAdvice({
      crop,
      soil,
      stage,
      farmerId: user._id,
    });

    setAdvice(res.data.advice || res.data.message);
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backdropFilter: "blur(12px)",
          background: "rgba(255,255,255,0.25)",
          borderRadius: "20px",
          padding: "40px",
          width: "500px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          border: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        <h2 className="text-center mb-4">🌾 Get Smart Farming Advice</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Select Crop</label>
            <select
              className="form-control"
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
              required
            >
              <option value="">Choose Crop</option>
              <option value="rice">Rice</option>
              <option value="wheat">Wheat</option>
              <option value="maize">Maize</option>
              <option value="sunflower">Sunflower</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Select Soil</label>
            <select
              className="form-control"
              value={soil}
              onChange={(e) => setSoil(e.target.value)}
              required
            >
              <option value="">Choose Soil</option>
              <option value="black">Black</option>
              <option value="red">Red</option>
              <option value="sandy">Sandy</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Select Stage</label>
            <select
              className="form-control"
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              required
            >
              <option value="">Choose Stage</option>
              <option value="seedling">Seedling</option>
              <option value="growing">Growing</option>
              <option value="flowering">Flowering</option>
              <option value="harvest">Harvest</option>
            </select>
          </div>

          <button className="btn btn-success w-100 mt-3">
            Get Advice 🌱
          </button>
        </form>

        {advice && (
          <div
            className="mt-4"
            style={{
              backdropFilter: "blur(8px)",
              background: "rgba(255,255,255,0.35)",
              borderRadius: "15px",
              padding: "20px",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <h5 className="text-success">Advisory Result</h5>
            <p>{advice}</p>
          </div>
        )}
      </div>
    </div>
  );
}
