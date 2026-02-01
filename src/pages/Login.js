import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      { size: "invisible" },
      auth
    );
  };

  const sendOTP = async (e) => {
    e.preventDefault();

    try {
      setupRecaptcha();

      const appVerifier = window.recaptchaVerifier;
      const formattedPhone = `+91${phone}`;

      const confirmation = await signInWithPhoneNumber(
        auth,
        formattedPhone,
        appVerifier
      );

      window.confirmationResult = confirmation;
      alert("OTP Sent ✅");
      setStep(2);
    } catch (err) {
      alert(err.message);
    }
  };

  const verifyOTP = async (e) => {
    e.preventDefault();

    try {
      const result = await window.confirmationResult.confirm(otp);

      // store user locally
      localStorage.setItem(
        "user",
        JSON.stringify({
          phone: result.user.phoneNumber,
        })
      );

      alert("Login Successful ✅");
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid OTP ❌");
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

        <div id="recaptcha-container"></div>

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

