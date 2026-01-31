import { useState } from "react";
import api from "../api";

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
    alert("Rule added successfully");
  };

  return (
    <div>
      <h2>Add Advisory Rule (Admin)</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Crop"
          onChange={(e) => setForm({ ...form, crop: e.target.value })}
        />
        <input
          placeholder="Soil"
          onChange={(e) => setForm({ ...form, soil: e.target.value })}
        />
        <input
          placeholder="Stage"
          onChange={(e) => setForm({ ...form, stage: e.target.value })}
        />
        <textarea
          placeholder="Advice"
          onChange={(e) => setForm({ ...form, advice: e.target.value })}
        />
        <button type="submit">Add Rule</button>
      </form>
    </div>
  );
}
