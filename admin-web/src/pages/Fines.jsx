import { useEffect, useMemo, useState } from "react";
import { getFines } from "../api/client.js";
import { formatCurrencyLkr, formatDateTime, formatNumber, statusBadgeClass } from "../utils/format.js";

export default function Fines() {
  const [fines, setFines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  useEffect(() => {
    const loadFines = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await getFines({ limit: 50 });
        setFines(response?.data ?? []);
      } catch (fineError) {
        setError(fineError.message || "Unable to load fines.");
      } finally {
        setLoading(false);
      }
    };

    loadFines();
  }, []);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredFines = useMemo(() => {
    return fines.filter((fine) => {
      const matchesQuery =
        !normalizedQuery ||
        [fine.referenceNo, fine.vehicleNo, fine.driverName, fine.category?.name]
          .filter(Boolean)
          .some((value) => String(value).toLowerCase().includes(normalizedQuery));

      const matchesStatus =
        statusFilter === "ALL" || String(fine.status || "").toUpperCase() === statusFilter;

      return matchesQuery && matchesStatus;
    });
  }, [fines, normalizedQuery, statusFilter]);

  const fineCounts = useMemo(
    () => ({
      total: fines.length,
      paid: fines.filter((fine) => String(fine.status || "").toUpperCase() === "PAID").length,
      pending: fines.filter((fine) => String(fine.status || "").toUpperCase() === "PENDING").length,
      cancelled: fines.filter((fine) =>
        ["CANCELLED", "FAILED", "REJECTED"].includes(String(fine.status || "").toUpperCase()),
      ).length,
    }),
    [fines],
  );

  return (
    <div className="fines-page">
      <section className="fines-hero card">
        <div className="fines-hero-copy">
          <span className="dashboard-eyebrow fines-eyebrow">Fine register</span>
          <h2>Organize every fine in one clean control view.</h2>
          <p>
            Search, filter, and review traffic fines with a layout designed for faster scanning and
            clearer operational focus.
          </p>
        </div>

        <div className="fines-hero-stats">
          <div className="fines-mini-stat">
            <span>Total</span>
            <strong>{loading ? "—" : formatNumber(fineCounts.total)}</strong>
          </div>
          <div className="fines-mini-stat">
            <span>Paid</span>
            <strong>{loading ? "—" : formatNumber(fineCounts.paid)}</strong>
          </div>
          <div className="fines-mini-stat">
            <span>Pending</span>
            <strong>{loading ? "—" : formatNumber(fineCounts.pending)}</strong>
          </div>
          <div className="fines-mini-stat">
            <span>Cancelled</span>
            <strong>{loading ? "—" : formatNumber(fineCounts.cancelled)}</strong>
          </div>
        </div>
      </section>

      <section className="fines-toolbar card">
        <label className="fines-search">
          <span>Search</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Reference, vehicle, driver, or category"
          />
        </label>

        <label className="fines-filter">
          <span>Status</span>
          <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
            <option value="ALL">All statuses</option>
            <option value="PENDING">Pending</option>
            <option value="PAID">Paid</option>
            <option value="CANCELLED">Cancelled</option>
            <option value="FAILED">Failed</option>
            <option value="REJECTED">Rejected</option>
          </select>
        </label>

        <div className="fines-toolbar-note">
          {loading ? "Loading fines from the backend..." : `${formatNumber(filteredFines.length)} records shown`}
        </div>
      </section>

      <section className="fines-grid">
        <article className="card fines-table-card">
          <div className="section-header">
            <div>
              <h3>Fine Register</h3>
              <p className="section-subtitle">A structured view of the latest fine records.</p>
            </div>
            <span className="badge badge-neutral">{formatNumber(filteredFines.length)} results</span>
          </div>

          {error ? <div className="alert alert-error">{error}</div> : null}

          <div className="table-wrap">
            <table className="table fines-table">
              <thead>
                <tr>
                  <th>Reference</th>
                  <th>Vehicle</th>
                  <th>Driver</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Created</th>
                </tr>
              </thead>
              <tbody>
                {filteredFines.length > 0 ? (
                  filteredFines.map((fine) => (
                    <tr key={fine.id}>
                      <td className="table-strong">{fine.referenceNo}</td>
                      <td>{fine.vehicleNo}</td>
                      <td>{fine.driverName}</td>
                      <td>{fine.category?.name || "—"}</td>
                      <td>{formatCurrencyLkr(fine.category?.amount)}</td>
                      <td>
                        <span className={statusBadgeClass(fine.status)}>{fine.status}</span>
                      </td>
                      <td>{formatDateTime(fine.createdAt)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="table-empty">
                      {loading ? "Loading fines..." : "No fines found for the current filters."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </article>

        <aside className="card fines-side-card">
          <div className="section-header">
            <div>
              <h3>Quick Review</h3>
              <p className="section-subtitle">Fast context for the current register.</p>
            </div>
          </div>

          <div className="insight-list">
            <div className="insight-row">
              <span>Search scope</span>
              <strong>{query.trim() ? query.trim() : "All fines"}</strong>
            </div>
            <div className="insight-row">
              <span>Status filter</span>
              <strong>{statusFilter === "ALL" ? "Any" : statusFilter}</strong>
            </div>
            <div className="insight-row">
              <span>Matching records</span>
              <strong>{loading ? "—" : formatNumber(filteredFines.length)}</strong>
            </div>
            <div className="insight-row">
              <span>Highest priority</span>
              <strong>Pending cases</strong>
            </div>
          </div>

          <div className="dashboard-callout fines-callout">
            <p className="dashboard-callout-label">Workflow tip</p>
            <h4>Focus first on pending fines, then review paid items.</h4>
            <p>
              Use the search field to quickly isolate a driver, vehicle, or reference number when
              following up on a case.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
