import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./AuthPage.css";

function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nic: "",
    dlNo: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const validateNIC = (nic) => {
    if (!nic) return false;
    const cleaned = nic.trim().toUpperCase();
    if (/^\d{9}[VX]$/.test(cleaned)) {
      const day = parseInt(cleaned.substring(2, 5), 10);
      return (day >= 1 && day <= 365) || (day >= 501 && day <= 865);
    }
    if (/^\d{12}$/.test(cleaned)) {
      const day = parseInt(cleaned.substring(4, 7), 10);
      return (day >= 1 && day <= 365) || (day >= 501 && day <= 865);
    }
    return false;
  };

  const validateDL = (dl) => {
    if (!dl) return false;
    const cleaned = dl.trim().toUpperCase();
    if (/^\d{9,10}[A-Z]$/.test(cleaned)) return true;
    if (/^[A-Z]\d{7,8}$/.test(cleaned)) return true;
    return false;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.nic ||
      !formData.dlNo
    ) {
      setError("Please fill all required fields");
      return;
    }

    if (!validateNIC(formData.nic)) {
      setError("Invalid NIC format");
      return;
    }

    if (!validateDL(formData.dlNo)) {
      setError("Invalid Driving License format");
      return;
    }

    setLoading(true);
    const result = await signup(formData);
    setLoading(false);

    if (result.success) {
      alert("Account created successfully! Please log in.");
      navigate("/login");
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="auth-container">
      <div
        className="auth-card"
        style={{ maxHeight: "90vh", overflowY: "auto" }}
      >
        <h1 className="auth-title">Traffic Fine System</h1>
        <p className="auth-subtitle">Create your motorist account</p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="+94771234567"
              value={formData.phone}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>NIC Number *</label>
            <input
              type="text"
              name="nic"
              placeholder="199912345V"
              value={formData.nic}
              onChange={handleChange}
              disabled={loading}
              style={{ textTransform: "uppercase" }}
            />
          </div>

          <div className="form-group">
            <label>Driving License Number *</label>
            <input
              type="text"
              name="dlNo"
              placeholder="B1234567"
              value={formData.dlNo}
              onChange={handleChange}
              disabled={loading}
              style={{ textTransform: "uppercase" }}
            />
          </div>

          <div className="form-group">
            <label>Password *</label>
            <input
              type="password"
              name="password"
              placeholder="Minimum 6 characters"
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>
      </div>

      <div className="auth-footer">
        Already have an account?{" "}
        <Link to="/login" className="auth-link">
          Login here
        </Link>
      </div>
    </div>
  );
}

export default SignupPage;
