import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import client from "../api/client";
import NavBar from "../components/NavBar";
import "./IssuFinePage.css";

function IssuFinePage() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState("form"); // 'form' | 'confirm'
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Vehicle plate format
  const [plateFormat, setPlateFormat] = useState("modern");
  const [vehicleProvince, setVehicleProvince] = useState("");
  const [vehicleLetters, setVehicleLetters] = useState("");
  const [vehicleDigits, setVehicleDigits] = useState("");
  const [vintagePrefix, setVintagePrefix] = useState("");
  const [vintageSuffix, setVintageSuffix] = useState("");
  const [driverIdentifier, setDriverIdentifier] = useState("");
  const [notes, setNotes] = useState("");

  // Categories
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loadingCategories, setLoadingCategories] = useState(false);

  // Resolved driver
  const [resolvedDriver, setResolvedDriver] = useState(null);
  const [resolvingDriver, setResolvingDriver] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoadingCategories(true);
    try {
      const response = await client.get("/fine-categories");
      if (response.data.success) {
        setCategories(response.data.data || []);
      }
    } catch (error) {
      console.error("Error loading categories:", error);
    } finally {
      setLoadingCategories(false);
    }
  };

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

  const handleReviewFine = async (e) => {
    e.preventDefault();
    setError("");

    if (plateFormat === "modern") {
      if (!vehicleProvince || !vehicleLetters || !vehicleDigits) {
        setError("Please fill all vehicle plate fields");
        return;
      }
    } else {
      if (!vintagePrefix || !vintageSuffix) {
        setError("Please fill all vehicle plate fields");
        return;
      }
    }

    if (!driverIdentifier || !selectedCategory || !notes) {
      setError("Please fill all required fields");
      return;
    }

    const cleanIdentifier = driverIdentifier.trim().toUpperCase();
    if (!validateNIC(cleanIdentifier) && !validateDL(cleanIdentifier)) {
      setError("Invalid driver identifier format");
      return;
    }

    setResolvingDriver(true);
    try {
      const response = await client.get(
        `/fines/driver-lookup/${cleanIdentifier}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );

      if (response.data.success) {
        setResolvedDriver(response.data.data);
        setFormStep("confirm");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Motorist not found");
    } finally {
      setResolvingDriver(false);
    }
  };

  const handleIssueFine = async (e) => {
    e.preventDefault();
    setError("");

    let formattedVehicleNo = "";
    if (plateFormat === "modern") {
      formattedVehicleNo = `${vehicleProvince} ${vehicleLetters}-${vehicleDigits}`;
    } else {
      formattedVehicleNo = `${vintagePrefix} ශ්රී ${vintageSuffix}`;
    }

    setSubmitting(true);
    try {
      const response = await client.post("/fines", {
        vehicleNo: formattedVehicleNo,
        driverIdentifier: driverIdentifier.trim().toUpperCase(),
        categoryId: selectedCategory.id,
        notes: notes.trim(),
      });

      if (response.data.success) {
        alert("Fine issued successfully!");

        // Reset form
        setVehicleProvince("");
        setVehicleLetters("");
        setVehicleDigits("");
        setVintagePrefix("");
        setVintageSuffix("");
        setPlateFormat("modern");
        setDriverIdentifier("");
        setNotes("");
        setSelectedCategory(null);
        setFormStep("form");
        setResolvedDriver(null);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to issue fine");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="app-layout">
      <div className="app-content">
        <div className="issue-container">
          <h1 className="page-title">New Fine Notice</h1>
          <p className="page-subtitle">Issue a traffic violation notice</p>

          {error && <div className="error-message">{error}</div>}

          {formStep === "form" ? (
            <form onSubmit={handleReviewFine} className="issue-form">
              <div className="form-section">
                <h3>Vehicle Information</h3>

                <div className="format-toggle">
                  <label>
                    <input
                      type="radio"
                      value="modern"
                      checked={plateFormat === "modern"}
                      onChange={(e) => setPlateFormat(e.target.value)}
                    />
                    Modern Format (WP ABC-1234)
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="vintage"
                      checked={plateFormat === "vintage"}
                      onChange={(e) => setPlateFormat(e.target.value)}
                    />
                    Vintage Format (1 ශ්රී 1234)
                  </label>
                </div>

                {plateFormat === "modern" ? (
                  <div className="plate-inputs">
                    <input
                      type="text"
                      placeholder="Province (e.g. WP)"
                      maxLength="2"
                      value={vehicleProvince}
                      onChange={(e) =>
                        setVehicleProvince(e.target.value.toUpperCase())
                      }
                      style={{ textTransform: "uppercase" }}
                    />
                    <input
                      type="text"
                      placeholder="Letters (e.g. ABC)"
                      maxLength="3"
                      value={vehicleLetters}
                      onChange={(e) =>
                        setVehicleLetters(e.target.value.toUpperCase())
                      }
                      style={{ textTransform: "uppercase" }}
                    />
                    <input
                      type="text"
                      placeholder="Digits (e.g. 1234)"
                      maxLength="4"
                      value={vehicleDigits}
                      onChange={(e) => setVehicleDigits(e.target.value)}
                    />
                  </div>
                ) : (
                  <div className="plate-inputs">
                    <input
                      type="text"
                      placeholder="Prefix (e.g. 1)"
                      maxLength="3"
                      value={vintagePrefix}
                      onChange={(e) => setVintagePrefix(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Suffix (e.g. 1234)"
                      maxLength="4"
                      value={vintageSuffix}
                      onChange={(e) => setVintageSuffix(e.target.value)}
                    />
                  </div>
                )}
              </div>

              <div className="form-section">
                <h3>Driver Information</h3>
                <input
                  type="text"
                  placeholder="NIC or Driving License *"
                  value={driverIdentifier}
                  onChange={(e) =>
                    setDriverIdentifier(e.target.value.toUpperCase())
                  }
                  style={{ textTransform: "uppercase" }}
                />
              </div>

              <div className="form-section">
                <h3>Fine Details</h3>
                <select
                  value={selectedCategory?.id || ""}
                  onChange={(e) => {
                    const cat = categories.find(
                      (c) => c.id === parseInt(e.target.value),
                    );
                    setSelectedCategory(cat);
                  }}
                  disabled={loadingCategories}
                >
                  <option value="">Select a category *</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name} - LKR {cat.amount.toLocaleString()}
                    </option>
                  ))}
                </select>

                <textarea
                  placeholder="Notes/Description of violation *"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows="4"
                />
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={resolvingDriver || submitting}
              >
                {resolvingDriver ? "⏳ Verifying..." : "✓ Review Fine"}
              </button>
            </form>
          ) : (
            <div className="confirmation-screen">
              <h2>Confirm Fine Details</h2>
              <div className="confirm-card">
                <div className="confirm-item">
                  <span>Driver:</span>
                  <strong>{resolvedDriver?.name || "N/A"}</strong>
                </div>
                <div className="confirm-item">
                  <span>Category:</span>
                  <strong>{selectedCategory?.name}</strong>
                </div>
                <div className="confirm-item">
                  <span>Amount:</span>
                  <strong>
                    LKR {selectedCategory?.amount.toLocaleString()}
                  </strong>
                </div>
              </div>

              <div className="button-group">
                <button
                  onClick={() => setFormStep("form")}
                  className="cancel-button"
                >
                  ← Back
                </button>
                <button
                  onClick={handleIssueFine}
                  className="submit-button"
                  disabled={submitting}
                >
                  {submitting ? "⏳ Issuing..." : "✓ Issue Fine"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <NavBar currentTab="issue" />
    </div>
  );
}

export default IssuFinePage;
