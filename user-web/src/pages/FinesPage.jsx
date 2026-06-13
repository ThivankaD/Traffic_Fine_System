import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import client from "../api/client";
import NavBar from "../components/NavBar";
import PaymentModal from "../components/PaymentModal";
import "./FinesPage.css";

function FinesPage() {
  const { user } = useAuth();
  const [fines, setFines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFine, setSelectedFine] = useState(null);
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isOfficer = user?.role === "OFFICER" || user?.role === "ADMIN";

  useEffect(() => {
    fetchFines();
  }, []);

  const fetchFines = async () => {
    setLoading(true);
    try {
      const endpoint = isOfficer
        ? "/fines/officer/my-fines"
        : "/fines/motorist/my-fines";
      const response = await client.get(endpoint);
      if (response.data.success) {
        setFines(response.data.data || []);
      }
    } catch (error) {
      console.error("Error fetching fines:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePayClick = (fine) => {
    setSelectedFine(fine);
    setPaymentModalVisible(true);
  };

  const handlePaymentSuccess = () => {
    setPaymentModalVisible(false);
    setSelectedFine(null);
    fetchFines();
  };

  const filteredFines = fines.filter((fine) => {
    const query = searchQuery.toLowerCase();
    return (
      fine.referenceNo?.toLowerCase().includes(query) ||
      fine.vehicleNo?.toLowerCase().includes(query) ||
      fine.driverName?.toLowerCase().includes(query) ||
      fine.driverNIC?.toLowerCase().includes(query)
    );
  });

  const getStatusBadge = (status) => {
    return (
      <span className={`status-badge ${status.toLowerCase()}`}>{status}</span>
    );
  };

  return (
    <div className="app-layout">
      <div className="app-content">
        <div className="fines-container">
          <h1 className="page-title">
            {isOfficer ? "My Issued Fines" : "My Fines"}
          </h1>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by reference, vehicle, or driver..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {loading ? (
            <p style={{ textAlign: "center" }}>Loading fines...</p>
          ) : filteredFines.length === 0 ? (
            <div className="empty-state">
              <p>No fines found</p>
            </div>
          ) : (
            <div className="fines-list">
              {filteredFines.map((fine) => (
                <div key={fine.id} className="fine-card">
                  <div className="fine-header">
                    <div>
                      <h3 className="fine-ref">{fine.referenceNo}</h3>
                      <p className="fine-vehicle">{fine.vehicleNo}</p>
                    </div>
                    {getStatusBadge(fine.status)}
                  </div>

                  <div className="fine-details">
                    <div className="detail-item">
                      <span className="detail-label">Driver</span>
                      <span className="detail-value">{fine.driverName}</span>
                    </div>
                    {fine.driverNIC && (
                      <div className="detail-item">
                        <span className="detail-label">NIC</span>
                        <span className="detail-value">{fine.driverNIC}</span>
                      </div>
                    )}
                    <div className="detail-item">
                      <span className="detail-label">Category</span>
                      <span className="detail-value">
                        {fine.category?.name}
                      </span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Amount</span>
                      <span
                        className="detail-value"
                        style={{ color: "var(--accent)" }}
                      >
                        LKR {fine.category?.amount.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {!isOfficer && fine.status === "PENDING" && (
                    <button
                      className="pay-button"
                      onClick={() => handlePayClick(fine)}
                    >
                      💳 Pay Now
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedFine && paymentModalVisible && (
        <PaymentModal
          fine={selectedFine}
          onClose={() => setPaymentModalVisible(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}

      <NavBar currentTab="fines" />
    </div>
  );
}

export default FinesPage;
