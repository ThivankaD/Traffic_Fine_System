import { useEffect, useState } from "react";
import StatCard from "../components/StatCard.jsx";
import { getDashboardSummary, getPayments } from "../api/client.js";
import {
  formatCurrencyLkr,
  formatDateTime,
  formatNumber,
  statusBadgeClass,
} from "../utils/format.js";

export default function Dashboard() {
  const [summary, setSummary] = useState(null);
  const [recentPayments, setRecentPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadDashboard = async () => {
      setLoading(true);
      setError("");

      try {
        const [summaryResponse, paymentsResponse] = await Promise.all([
          getDashboardSummary(),
          getPayments({ limit: 5 }),
        ]);

        setSummary(summaryResponse?.data ?? null);
        setRecentPayments(paymentsResponse?.data ?? []);
      } catch (dashboardError) {
        setError(dashboardError.message || "Unable to load dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  const stats = summary
    ? [
        {
          title: "Total Fines",
          value: formatNumber(summary.totalFines),
          trend: `${formatNumber(summary.totalPaid)} paid`,
          accent: "slate",
        },
        {
          title: "Total Revenue",
          value: formatCurrencyLkr(summary.totalRevenue),
          trend: `${formatNumber(summary.totalCancelled)} cancelled`,
          accent: "teal",
        },
        {
          title: "Paid Fines",
          value: formatNumber(summary.totalPaid),
          trend: `${formatNumber(summary.totalPending)} pending`,
          accent: "blue",
        },
        {
          title: "Pending Fines",
          value: formatNumber(summary.totalPending),
          trend: "Live count from backend",
          accent: "amber",
        },
      ]
    : [
        { title: "Total Fines", value: loading ? "Loading..." : "—", accent: "slate" },
        { title: "Total Revenue", value: loading ? "Loading..." : "—", accent: "teal" },
        { title: "Paid Fines", value: loading ? "Loading..." : "—", accent: "blue" },
        { title: "Pending Fines", value: loading ? "Loading..." : "—", accent: "amber" },
      ];

  const overviewCards = summary
    ? [
        { label: "Revenue collected", value: formatCurrencyLkr(summary.totalRevenue) },
        { label: "Open fines", value: formatNumber(summary.totalPending) },
        { label: "Resolved fines", value: formatNumber(summary.totalPaid) },
      ]
    : [
        { label: "Revenue collected", value: loading ? "Loading..." : "—" },
        { label: "Open fines", value: loading ? "Loading..." : "—" },
        { label: "Resolved fines", value: loading ? "Loading..." : "—" },
      ];

  return (
    <div className="dashboard-page">
      <section className="dashboard-hero">
        <div className="dashboard-hero-copy">
          <span className="dashboard-eyebrow">Traffic fine operations</span>
          <h2>Control center for fines, payments, and recovery.</h2>
          <p>
            A focused overview for monitoring collections, pending cases, and live payment activity
            without clutter.
          </p>
          <div className="dashboard-badges">
            <span className="badge badge-success">Live backend connected</span>
            <span className="badge badge-neutral">Secure admin workspace</span>
          </div>
        </div>

        <div className="dashboard-hero-panel card">
          <div className="hero-panel-head">
            <span>Operational snapshot</span>
            <span className="hero-panel-pill">Updated live</span>
          </div>
          <div className="hero-panel-grid">
            {overviewCards.map((item) => (
              <div key={item.label} className="hero-panel-item">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-4 dashboard-stat-grid">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </section>

      <section className="dashboard-grid">
        <article className="section card dashboard-card dashboard-payments-card">
          <div className="section-header">
            <div>
              <h3>Recent Payments</h3>
              <p className="section-subtitle">The latest payment activity from the backend.</p>
            </div>
            <span className="badge badge-neutral">Last 5 records</span>
          </div>

          {error ? <div className="alert alert-error">{error}</div> : null}

          <div className="table-wrap">
            <table className="table dashboard-table">
              <thead>
                <tr>
                  <th>Reference</th>
                  <th>Officer</th>
                  <th>Amount</th>
                  <th>Paid At</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentPayments.length > 0 ? (
                  recentPayments.map((payment) => (
                    <tr key={payment.id}>
                      <td className="table-strong">{payment.fine?.referenceNo || payment.receiptNo}</td>
                      <td>{payment.fine?.officer?.user?.name || payment.fine?.officer?.badgeNo || "—"}</td>
                      <td>{formatCurrencyLkr(payment.amount)}</td>
                      <td>{formatDateTime(payment.paidAt)}</td>
                      <td>
                        <span className={statusBadgeClass(payment.status)}>{payment.status}</span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="table-empty">
                      {loading ? "Loading payments..." : "No recent payments found."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </article>

        <aside className="section card dashboard-side-card">
          <div className="section-header">
            <div>
              <h3>Insight Snapshot</h3>
              <p className="section-subtitle">Key signals for a quick operational read.</p>
            </div>
          </div>

          <div className="insight-list">
            <div className="insight-row">
              <span>Pending fines</span>
              <strong>{summary ? formatNumber(summary.totalPending) : loading ? "Loading..." : "—"}</strong>
            </div>
            <div className="insight-row">
              <span>Paid fines</span>
              <strong>{summary ? formatNumber(summary.totalPaid) : loading ? "Loading..." : "—"}</strong>
            </div>
            <div className="insight-row">
              <span>Cancelled fines</span>
              <strong>{summary ? formatNumber(summary.totalCancelled) : loading ? "Loading..." : "—"}</strong>
            </div>
            <div className="insight-row">
              <span>Total revenue</span>
              <strong>{summary ? formatCurrencyLkr(summary.totalRevenue) : loading ? "Loading..." : "—"}</strong>
            </div>
          </div>

          <div className="dashboard-callout">
            <p className="dashboard-callout-label">Review focus</p>
            <h4>Prioritize open fines and payment follow-up.</h4>
            <p>
              Keep attention on the pending queue first, then use the recent payments list to verify
              completed transactions.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
