import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({ phone: "", password: "" });
  const nav = useNavigate();

  const handle = async () => {
  try {
    const res = await api.post("/auth/login", data);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    nav("/dashboard");
  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
  }
};


  return (
  <div>
    <h2>Login</h2>

    <input
      placeholder="Phone"
      onChange={e => setData({ ...data, phone: e.target.value })}
    />
    <input
      placeholder="Password"
      type="password"
      onChange={e => setData({ ...data, password: e.target.value })}
    />

    <button onClick={handle}>Login</button>

    <p>
      New user? <a href="/register">Register here</a>
    </p>
  </div>
);

}
