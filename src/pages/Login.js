import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const sendOTP = async (e) => {
    e.preventDefault();
    try {
      await api.post("/otp/send-otp", {
        phone: phone,
      });
      alert("OTP Sent ✅");
      setStep(2);
    } catch (err) {
      alert("OTP send failed ❌");
      console.log(err);
    }
  };

  const verifyOTP = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/otp/verify-otp", {
        phone: phone,
        otp: otp,
      });

      // 🔥 store user
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful ✅");
      navigate("/dashboard");
    } catch (err) {
      alert("OTP verification failed ❌");
      console.log(err);
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backdropFilter: "blur(12px)",
          background: "rgba(0,0,0,0.6)",
          padding: "40px",
          borderRadius: "20px",
          width: "360px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2>AgroGuide Login 🌿</h2>
        <p style={{ fontStyle: "italic" }}>
          “To forget how to dig the earth and tend the soil is to forget ourselves.”
        </p>

        {step === 1 && (
          <form onSubmit={sendOTP}>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                margin: "12px 0",
                borderRadius: "8px",
                border: "none",
              }}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                background: "#ffc107",
                border: "none",
                fontWeight: "bold",
                borderRadius: "8px",
              }}
            >
              Send OTP
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={verifyOTP}>
            <input
              type="number"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                margin: "12px 0",
                borderRadius: "8px",
                border: "none",
              }}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                background: "#198754",
                border: "none",
                color: "white",
                fontWeight: "bold",
                borderRadius: "8px",
              }}
            >
              Verify & Login
            </button>
          </form>
        )}

        <p style={{ marginTop: "15px" }}>
          New farmer?{" "}
          <Link to="/register" style={{ color: "#ffc107" }}>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
