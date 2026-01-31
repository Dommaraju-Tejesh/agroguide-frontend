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
    <div style={{ padding: "20px" }}>
      <h2>Get Farming Advice</h2>

      <form onSubmit={handleSubmit}>
        {/* Crop Dropdown */}
        <select value={crop} onChange={(e) => setCrop(e.target.value)} required>
          <option value="">Select Crop</option>
          <option value="rice">Rice</option>
          <option value="wheat">Wheat</option>
          <option value="maize">Maize</option>
          <option value="sunflower">Sunflower</option>
        </select>

        {/* Soil Dropdown */}
        <select value={soil} onChange={(e) => setSoil(e.target.value)} required>
          <option value="">Select Soil</option>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="sandy">Sandy</option>
        </select>

        {/* Stage Dropdown */}
        <select value={stage} onChange={(e) => setStage(e.target.value)} required>
          <option value="">Select Stage</option>
          <option value="seedling">Seedling</option>
          <option value="growing">Growing</option>
          <option value="flowering">Flowering</option>
          <option value="harvest">Harvest</option>
        </select>

        <br /><br />
        <button type="submit">Get Advice</button>
      </form>

      {advice && (
        <div style={{ marginTop: "20px", border: "1px solid green", padding: "10px" }}>
          <h3>{advice}</h3>
        </div>
      )}
    </div>
  );
}
