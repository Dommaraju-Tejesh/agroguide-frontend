import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

export default function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const sendOTP = async () => {
    try {
      await api.post("/otp/send-otp", {
        phone: phone,   // ❗ no +91 here
      });
      alert("OTP Sent ✅");
      setStep(2);
    } catch (err) {
      alert("OTP send failed ❌");
      console.log(err);
    }
  };

  const verifyOTP = async () => {
    try {
      await api.post("/otp/verify-otp", {
        phone: phone,
        otp: otp,   // ❗ correct key
      });

      // after OTP verified, create user
      await api.post("/auth/register", {
        name,
        phone,
        password: "default123",
      });

      alert("Registered Successfully ✅");
      window.location.href = "/";
    } catch (err) {
      alert("OTP verification failed ❌");
      console.log(err);
    }
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
      }}
    >
      <div
        style={{
          backdropFilter: "blur(12px)",
          background: "rgba(0,0,0,0.55)",
          padding: "40px",
          borderRadius: "20px",
          width: "380px",
          color: "white",
          textAlign: "center",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        <h2>Join AgroGuide 🚜</h2>
        <p style={{ fontStyle: "italic" }}>
          “To forget how to dig the earth is to forget ourselves.”
        </p>

        {step === 1 && (
          <>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%", padding: "10px", margin: "10px 0" }}
            />

            <input
              type="number"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ width: "100%", padding: "10px", margin: "10px 0" }}
            />

            <button
              onClick={sendOTP}
              style={{
                width: "100%",
                padding: "10px",
                background: "#ffc107",
                border: "none",
                fontWeight: "bold",
              }}
            >
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="number"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={{ width: "100%", padding: "10px", margin: "10px 0" }}
            />

            <button
              onClick={verifyOTP}
              style={{
                width: "100%",
                padding: "10px",
                background: "#198754",
                border: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Verify & Register
            </button>
          </>
        )}

        <p style={{ marginTop: "15px" }}>
          Already have account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
