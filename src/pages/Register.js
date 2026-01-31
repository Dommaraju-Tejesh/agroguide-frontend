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
    try {
      const res = await api.post("/auth/send-otp", { phone });
      alert(res.data.message);
      setStep(2);
    } catch (err) {
      alert(err.response?.data?.message || "OTP send failed");
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await api.post("/auth/verify-otp", {
        name,
        phone,
        otp,
      });
      alert(res.data.message);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "OTP verification failed");
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{
          width: "420px",
          borderRadius: "20px",
          backdropFilter: "blur(15px)",
          background: "rgba(255,255,255,0.85)",
        }}
      >
        <h3 className="text-center mb-2">Join AgroGuide 🚜</h3>
        <p className="text-center text-muted mb-4">
          “To forget how to dig the earth is to forget ourselves.”
        </p>

        {step === 1 && (
          <>
            <input
              className="form-control mb-3"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="form-control mb-3"
              placeholder="Phone Number (+91...)"
              onChange={(e) => setPhone(e.target.value)}
            />

            <button
              type="button"
              className="btn btn-warning w-100 fw-bold"
              onClick={sendOtp}
            >
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
              type="button"
              className="btn btn-success w-100 fw-bold"
              onClick={verifyOtp}
            >
              Verify & Register
            </button>
          </>
        )}

        <p className="mt-4 text-center">
          Already have account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
