import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Advisory from "./pages/Advisory";
import Admin from "./pages/Admin";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <Link className="navbar-brand" to="/dashboard">
            🌾 AgroGuide
          </Link>

          <div>
            <Link className="btn btn-light me-2" to="/dashboard">
              Dashboard
            </Link>
            <Link className="btn btn-light me-2" to="/advisory">
              Get Advice
            </Link>
            <Link className="btn btn-warning" to="/admin">
              Suggest / Admin
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
