import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";

export default function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const sendOtp = async () => {
    await api.post("/auth/send-otp", { phone });
    alert("OTP sent to your phone");
    setStep(2);
  };

  const verifyOtpAndRegister = async () => {
    await api.post("/auth/verify-otp", { phone, otp, name });
    alert("Registration successful");
    navigate("/");
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0,0,0,0.6)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backdropFilter: "blur(12px)",
          background: "rgba(255,255,255,0.25)",
          padding: "40px",
          borderRadius: "20px",
          width: "400px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        <h3 className="text-center mb-3">Join AgroGuide 🚜</h3>
        <p className="text-center text-white">
          “To forget how to dig the earth is to forget ourselves.”
        </p>

        {step === 1 && (
          <>
            <input
              className="form-control mb-3"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="form-control mb-3"
              placeholder="Phone Number (+91...)"
              onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={sendOtp} className="btn btn-warning w-100">
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              className="form-control mb-3"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              onClick={verifyOtpAndRegister}
              className="btn btn-success w-100"
            >
              Verify & Register
            </button>
          </>
        )}

        <p className="mt-3 text-center text-white">
          Already have account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
