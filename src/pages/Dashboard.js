import { useEffect, useState } from "react";
import { getHistory } from "../api/advisory";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const loadHistory = async () => {
      const res = await getHistory(user._id);
      setHistory(res.data);
    };

    loadHistory();
  }, [user._id]);

  return (
    <div>
      <h2>Welcome {user.name}</h2>

      <Link to="/advisory">Get New Advice</Link>
      <br />
      <Link to="/admin">Admin Panel</Link>

      <h3>Your Advisory History</h3>

      {history.length === 0 ? (
        <p>No history yet</p>
      ) : (
        history.map((item, index) => (
          <div
            key={index}
            style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
          >
            <p><b>Crop:</b> {item.crop}</p>
            <p><b>Soil:</b> {item.soil}</p>
            <p><b>Stage:</b> {item.stage}</p>
            <p><b>Advice:</b> {item.advice}</p>
          </div>
        ))
      )}
    </div>
  );
}
