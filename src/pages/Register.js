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
      phone: `+91${phone}`,
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
      phone: `+91${phone}`,
      code: otp,
    });

    await api.post("/auth/register", {
      name,
      phone: `+91${phone}`,
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
          "url('https://images.unsplash.com/photo-1606788075761-9a88d90c05d5')",
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
          width: "380px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2>Join AgroGuide 🚜</h2>

        {step === 1 && (
          <>
            <input
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%", padding: "10px", margin: "10px 0" }}
            />
            <input
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              style={{ width: "100%", padding: "10px", margin: "10px 0" }}
            />
            <button
              onClick={sendOTP}
              style={{ width: "100%", padding: "10px", background: "#ffc107" }}
            >
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
              style={{ width: "100%", padding: "10px", margin: "10px 0" }}
            />
            <button
              onClick={verifyOTP}
              style={{ width: "100%", padding: "10px", background: "#198754", color: "white" }}
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
