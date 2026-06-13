import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import client from "../api/client";
import "./PaymentModal.css";

function PaymentModal({ fine, onClose, onSuccess }) {
  const { user, token } = useAuth();
  const [payerName, setPayerName] = useState(user?.name || "");
  const [payerPhone, setPayerPhone] = useState(user?.phone || "");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState("");
  const [savedCards, setSavedCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [saveCardToggle, setSaveCardToggle] = useState(false);
  const [loadingSavedCards, setLoadingSavedCards] = useState(false);

  useEffect(() => {
    fetchSavedCards();
  }, []);

  const fetchSavedCards = async () => {
    setLoadingSavedCards(true);
    try {
      const response = await client.get("/users/me/cards");
      if (response.data.success) {
        const cards = response.data.data || [];
        setSavedCards(cards);
        if (cards.length > 0) {
          setSelectedCard(cards[0]);
        }
      }
    } catch (error) {
      console.error("Error loading saved cards:", error);
    } finally {
      setLoadingSavedCards(false);
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setError("");

    if (!payerName || !payerPhone) {
      setError("Please fill payer details");
      return;
    }

    if (!selectedCard && !cardNumber) {
      setError("Please select or enter card details");
      return;
    }

    setPaying(true);
    try {
      // Save card if needed
      if (!selectedCard && saveCardToggle && token) {
        try {
          await client.post("/users/me/cards", {
            cardholderName: payerName,
            cardNumber,
            expiry,
          });
        } catch (cardErr) {
          console.log("Failed to save card but continuing payment");
        }
      }

      // Process payment
      const transactionId =
        "TXN-" + Date.now().toString().slice(-8).toUpperCase();
      const response = await client.post("/payments", {
        referenceNo: fine.referenceNo,
        payerName,
        payerPhone,
        paymentMethod: "ONLINE",
        transactionId,
      });

      if (response.data.success) {
        alert(
          `Payment successful! Receipt No: ${response.data.data?.receiptNo || "ONLINE-PAY"}`,
        );
        onSuccess();
      }
    } catch (err) {
      setError(err.response?.data?.message || "Payment failed");
    } finally {
      setPaying(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Pay Fine</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="fine-summary">
          <div className="summary-item">
            <span>Reference No</span>
            <strong>{fine.referenceNo}</strong>
          </div>
          <div className="summary-item">
            <span>Amount Due</span>
            <strong>LKR {fine.category?.amount?.toLocaleString()}</strong>
          </div>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handlePayment}>
          <div className="form-group">
            <label>Payer Name</label>
            <input
              type="text"
              value={payerName}
              onChange={(e) => setPayerName(e.target.value)}
              disabled={paying}
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              value={payerPhone}
              onChange={(e) => setPayerPhone(e.target.value)}
              disabled={paying}
            />
          </div>

          {!loadingSavedCards && savedCards.length > 0 && (
            <div className="form-group">
              <label>Saved Cards</label>
              <select
                value={selectedCard?.id || ""}
                onChange={(e) => {
                  const card = savedCards.find(
                    (c) => c.id === parseInt(e.target.value),
                  );
                  setSelectedCard(card);
                  setCardNumber("");
                }}
                disabled={paying}
              >
                <option value="">Use new card</option>
                {savedCards.map((card) => (
                  <option key={card.id} value={card.id}>
                    {card.brand} {card.cardNumber}
                  </option>
                ))}
              </select>
            </div>
          )}

          {!selectedCard && (
            <>
              <div className="form-group">
                <label>Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  disabled={paying}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Expiry (MM/YY)</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    disabled={paying}
                  />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    maxLength="4"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    disabled={paying}
                  />
                </div>
              </div>

              <div className="form-group checkbox">
                <label>
                  <input
                    type="checkbox"
                    checked={saveCardToggle}
                    onChange={(e) => setSaveCardToggle(e.target.checked)}
                    disabled={paying}
                  />
                  Save card for future payments
                </label>
              </div>
            </>
          )}

          <div className="modal-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
              disabled={paying}
            >
              Cancel
            </button>
            <button type="submit" className="pay-btn" disabled={paying}>
              {paying
                ? "⏳ Processing..."
                : `💳 Pay LKR ${fine.category?.amount?.toLocaleString()}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaymentModal;
