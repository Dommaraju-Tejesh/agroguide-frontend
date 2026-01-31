import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [data, setData] = useState({ name: "", phone: "", password: "" });
  const nav = useNavigate();

  const handle = async () => {
  try {
    await api.post("/auth/register", data);
    alert("Registered successfully");
    nav("/");
  } catch (err) {
    alert(err.response?.data?.message || "Registration failed");
  }
};


  return (
  <div>
    <h2>Register</h2>

    <input
      placeholder="Name"
      onChange={e => setData({ ...data, name: e.target.value })}
    />
    <input
      placeholder="Phone"
      onChange={e => setData({ ...data, phone: e.target.value })}
    />
    <input
      placeholder="Password"
      type="password"
      onChange={e => setData({ ...data, password: e.target.value })}
    />

    <button onClick={handle}>Register</button>

    <p>
      Already have account? <a href="/">Login here</a>
    </p>
  </div>
);

}
