import { useEffect, useMemo, useState } from "react";
import { getPayments } from "../api/client.js";
import { formatCurrencyLkr, formatDateTime, formatNumber, statusBadgeClass } from "../utils/format.js";

export default function Payments() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  useEffect(() => {
    const loadPayments = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await getPayments({ limit: 50 });
        setPayments(response?.data ?? []);
      } catch (paymentError) {
        setError(paymentError.message || "Unable to load payments.");
      } finally {
        setLoading(false);
      }
    };

    loadPayments();
  }, []);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredPayments = useMemo(() => {
    return payments.filter((payment) => {
      const matchesQuery =
        !normalizedQuery ||
        [
          payment.receiptNo,
          payment.fine?.referenceNo,
          payment.payerName,
          payment.paymentMethod,
        ]
          .filter(Boolean)
          .some((value) => String(value).toLowerCase().includes(normalizedQuery));

      const matchesStatus =
        statusFilter === "ALL" || String(payment.status || "").toUpperCase() === statusFilter;

      return matchesQuery && matchesStatus;
    });
  }, [payments, normalizedQuery, statusFilter]);

  const paymentCounts = useMemo(
    () => ({
      total: payments.length,
      paid: payments.filter((payment) =>
        ["PAID", "SUCCESS", "COMPLETED"].includes(String(payment.status || "").toUpperCase()),
      ).length,
      pending: payments.filter((payment) =>
        ["PENDING", "PROCESSING"].includes(String(payment.status || "").toUpperCase()),
      ).length,
      failed: payments.filter((payment) =>
        ["CANCELLED", "FAILED", "REJECTED"].includes(String(payment.status || "").toUpperCase()),
      ).length,
    }),
    [payments],
  );

  const totalRevenue = useMemo(
    () => payments.reduce((sum, payment) => sum + Number(payment.amount || 0), 0),
    [payments],
  );

  return (
    <div className="payments-page">
      <section className="payments-hero card">
        <div className="payments-hero-copy">
          <span className="dashboard-eyebrow payments-eyebrow">Payment register</span>
          <h2>Track payment flow with clarity and speed.</h2>
          <p>
            Review receipts, payment methods, and status updates in a streamlined control view that
            keeps the important details easy to scan.
          </p>
        </div>

        <div className="payments-hero-stats">
          <div className="payments-mini-stat">
            <span>Total</span>
            <strong>{loading ? "—" : formatNumber(paymentCounts.total)}</strong>
          </div>
          <div className="payments-mini-stat">
            <span>Paid</span>
            <strong>{loading ? "—" : formatNumber(paymentCounts.paid)}</strong>
          </div>
          <div className="payments-mini-stat">
            <span>Pending</span>
            <strong>{loading ? "—" : formatNumber(paymentCounts.pending)}</strong>
          </div>
          <div className="payments-mini-stat">
            <span>Revenue</span>
            <strong>{loading ? "—" : formatCurrencyLkr(totalRevenue)}</strong>
          </div>
        </div>
      </section>

      <section className="payments-toolbar card">
        <label className="payments-search">
          <span>Search</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Receipt, reference, payer, or channel"
          />
        </label>

        <label className="payments-filter">
          <span>Status</span>
          <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
            <option value="ALL">All statuses</option>
            <option value="PAID">Paid</option>
            <option value="SUCCESS">Success</option>
            <option value="COMPLETED">Completed</option>
            <option value="PENDING">Pending</option>
            <option value="PROCESSING">Processing</option>
            <option value="FAILED">Failed</option>
            <option value="CANCELLED">Cancelled</option>
            <option value="REJECTED">Rejected</option>
          </select>
        </label>

        <div className="payments-toolbar-note">
          {loading ? "Loading payments from the backend..." : `${formatNumber(filteredPayments.length)} records shown`}
        </div>
      </section>

      <section className="payments-grid">
        <article className="card payments-table-card">
          <div className="section-header">
            <div>
              <h3>Payments</h3>
              <p className="section-subtitle">A compact register of transaction activity.</p>
            </div>
            <span className="badge badge-neutral">{formatNumber(filteredPayments.length)} results</span>
          </div>

          {error ? <div className="alert alert-error">{error}</div> : null}

          <div className="table-wrap">
            <table className="table payments-table">
              <thead>
                <tr>
                  <th>Receipt</th>
                  <th>Reference</th>
                  <th>Payer</th>
                  <th>Channel</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Paid At</th>
                </tr>
              </thead>
              <tbody>
                {filteredPayments.length > 0 ? (
                  filteredPayments.map((payment) => (
                    <tr key={payment.id}>
                      <td className="table-strong">{payment.receiptNo}</td>
                      <td>{payment.fine?.referenceNo || "—"}</td>
                      <td>{payment.payerName}</td>
                      <td>{payment.paymentMethod}</td>
                      <td>{formatCurrencyLkr(payment.amount)}</td>
                      <td>
                        <span className={statusBadgeClass(payment.status)}>{payment.status}</span>
                      </td>
                      <td>{formatDateTime(payment.paidAt)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="table-empty">
                      {loading ? "Loading payments..." : "No payments found for the current filters."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </article>

        <aside className="card payments-side-card">
          <div className="section-header">
            <div>
              <h3>Quick Review</h3>
              <p className="section-subtitle">Fast context for payment operations.</p>
            </div>
          </div>

          <div className="insight-list">
            <div className="insight-row">
              <span>Search scope</span>
              <strong>{query.trim() ? query.trim() : "All payments"}</strong>
            </div>
            <div className="insight-row">
              <span>Status filter</span>
              <strong>{statusFilter === "ALL" ? "Any" : statusFilter}</strong>
            </div>
            <div className="insight-row">
              <span>Matching records</span>
              <strong>{loading ? "—" : formatNumber(filteredPayments.length)}</strong>
            </div>
            <div className="insight-row">
              <span>Captured revenue</span>
              <strong>{loading ? "—" : formatCurrencyLkr(totalRevenue)}</strong>
            </div>
          </div>

          <div className="dashboard-callout payments-callout">
            <p className="dashboard-callout-label">Review focus</p>
            <h4>Prioritize pending or failed transactions first.</h4>
            <p>
              Use the search and status controls to isolate a receipt quickly when reconciling
              transactions or following up on a payment.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
