import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import client from "../api/client";
import NavBar from "../components/NavBar";
import "./DashboardPage.css";

function DashboardPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [refNo, setRefNo] = useState("");
  const [searching, setSearching] = useState(false);
  const [stats, setStats] = useState({
    totalCount: 0,
    unpaidCount: 0,
    paidCount: 0,
    totalAmount: 0,
  });
  const [loadingStats, setLoadingStats] = useState(false);
  const [error, setError] = useState("");

  const isOfficer = user?.role === "OFFICER" || user?.role === "ADMIN";

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    setLoadingStats(true);
    try {
      const endpoint = isOfficer
        ? "/fines/officer/my-fines"
        : "/fines/motorist/my-fines";
      const response = await client.get(endpoint);

      if (response.data.success) {
        const fines = response.data.data || [];
        let unpaid = 0,
          paid = 0,
          totalAmt = 0;

        fines.forEach((f) => {
          if (f.status === "PAID") paid++;
          else if (f.status === "PENDING") unpaid++;
          totalAmt += f.category?.amount || 0;
        });

        setStats({
          totalCount: fines.length,
          unpaidCount: unpaid,
          paidCount: paid,
          totalAmount: totalAmt,
        });
      }
    } catch (err) {
      console.error("Error fetching stats:", err);
    } finally {
      setLoadingStats(false);
    }
  };

  const handleSearchRef = async (e) => {
    e.preventDefault();
    if (!refNo.trim()) {
      setError("Please enter a reference number");
      return;
    }

    setSearching(true);
    setError("");

    try {
      const response = await client.get(`/fines/${refNo.trim()}`);
      if (response.data.success) {
        navigate("/fines", { state: { searchedFine: response.data.data } });
      }
    } catch (err) {
      setError(err.response?.data?.message || "Fine not found");
    } finally {
      setSearching(false);
    }
  };

  return (
    <div className="app-layout">
      <div className="app-content">
        <div className="dashboard-container">
          {/* Header */}
          <div className="dashboard-header">
            <div>
              <p className="greeting">Hello,</p>
              <h1 className="user-name">{user?.name || "User"}</h1>
            </div>
            <div className="role-badge">{user?.role || "MOTORIST"}</div>
          </div>

          {/* Status Banner */}
          {!isOfficer && (
            <div
              className={`banner-card ${stats.unpaidCount > 0 ? "warning" : "success"}`}
            >
              <div className="banner-icon">
                {stats.unpaidCount > 0 ? "⚠️" : "✅"}
              </div>
              <div>
                <h3 className="banner-title">
                  {stats.unpaidCount > 0
                    ? "Pending Fines Found"
                    : "Driving Record Clear"}
                </h3>
                <p className="banner-sub">
                  {stats.unpaidCount > 0
                    ? `You have ${stats.unpaidCount} unpaid ticket(s). Pay now to avoid court action.`
                    : "No outstanding violations matching your license profile."}
                </p>
              </div>
            </div>
          )}

          {/* Stats Grid */}
          <h2 className="section-title">
            {isOfficer ? "Performance Metrics" : "Fines Overview"}
          </h2>

          {loadingStats ? (
            <p style={{ textAlign: "center" }}>Loading...</p>
          ) : (
            <div className="stats-grid">
              <div className="stat-card primary">
                <div className="stat-value">{stats.totalCount}</div>
                <div className="stat-label">
                  {isOfficer ? "Fines Issued" : "Total Fines"}
                </div>
              </div>
              <div className="stat-card warning">
                <div className="stat-value">{stats.unpaidCount}</div>
                <div className="stat-label">Unpaid</div>
              </div>
              <div className="stat-card success">
                <div className="stat-value">{stats.paidCount}</div>
                <div className="stat-label">Paid</div>
              </div>
              <div className="stat-card accent">
                <div className="stat-value">
                  {stats.totalAmount.toLocaleString()}
                </div>
                <div className="stat-label">
                  {isOfficer ? "Value Issued" : "Total Fined"}
                </div>
              </div>
            </div>
          )}

          {/* Action Section */}
          {isOfficer ? (
            <div className="action-card">
              <h3>Road Safety Operations</h3>
              <p>Issue a violation notice immediately on the spot.</p>
              <button
                className="action-button"
                onClick={() => navigate("/issue")}
              >
                ➕ Issue New Fine
              </button>
            </div>
          ) : (
            <div className="action-card">
              <h3>Ticket Quick Pay</h3>
              <p>Enter your fine reference number to pay online instantly.</p>
              <form onSubmit={handleSearchRef} className="search-form">
                <input
                  type="text"
                  placeholder="e.g. TF-20260610-XYZAB"
                  value={refNo}
                  onChange={(e) => setRefNo(e.target.value)}
                  disabled={searching}
                  style={{ textTransform: "uppercase" }}
                />
                <button
                  type="submit"
                  disabled={searching}
                  className="search-button"
                >
                  {searching ? "⏳" : "🔍"}
                </button>
              </form>
              {error && <div className="error-message">{error}</div>}
            </div>
          )}

          {/* Tips Card */}
          <div className="tips-card">
            <h4>ℹ️ Driving Guidelines</h4>
            <p>
              Always keep your driver's license and vehicle registration
              document in your possession. Ensure your vehicle insurance policy
              is current and valid.
            </p>
          </div>
        </div>
      </div>
      <NavBar currentTab="dashboard" />
    </div>
  );
}

export default DashboardPage;
