import { useEffect, useMemo, useState } from "react";
import { getDistricts, getUsers, registerOfficer } from "../api/client.js";
import { formatNumber } from "../utils/format.js";

export default function Officers() {
  const [officers, setOfficers] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [query, setQuery] = useState("");
  const [districtFilter, setDistrictFilter] = useState("ALL");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [badgeNo, setBadgeNo] = useState("");
  const [districtId, setDistrictId] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setError("");

    try {
      const [districtResponse, usersResponse] = await Promise.all([
        getDistricts(),
        getUsers({ limit: 100 }),
      ]);

      setDistricts(districtResponse?.data || []);

      const officerList = (usersResponse?.data || []).filter(
        (user) => user.role === "OFFICER",
      );
      setOfficers(officerList);
    } catch (fetchError) {
      setError(fetchError.message || "Failed to fetch data from the server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRegister = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!districtId) {
      setError("Please select a district.");
      return;
    }

    setSubmitting(true);

    try {
      await registerOfficer({
        name,
        email,
        password,
        role: "OFFICER",
        phone,
        badgeNo,
        districtId: Number(districtId),
      });

      setSuccess(`Officer ${name} registered successfully!`);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setBadgeNo("");
      setDistrictId("");
      fetchData();
    } catch (registerError) {
      setError(
        registerError.message || "Server connection failed. Could not register officer.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const officerCountLabel = useMemo(
    () => `${officers.length} officer${officers.length === 1 ? "" : "s"}`,
    [officers.length],
  );

  const normalizedQuery = query.trim().toLowerCase();

  const districtNameById = useMemo(() => {
    const map = new Map();
    districts.forEach((district) => {
      map.set(String(district.id), district.name);
    });
    return map;
  }, [districts]);

  const filteredOfficers = useMemo(() => {
    return officers.filter((officer) => {
      const officerDistrictId = String(officer.officer?.districtId || officer.districtId || "");
      const officerDistrictName =
        officer.officer?.district?.name || officer.district?.name || districtNameById.get(officerDistrictId) || "";

      const matchesQuery =
        !normalizedQuery ||
        [officer.name, officer.email, officer.officer?.badgeNo, officer.officer?.phone, officerDistrictName]
          .filter(Boolean)
          .some((value) => String(value).toLowerCase().includes(normalizedQuery));

      const matchesDistrict = districtFilter === "ALL" || officerDistrictId === districtFilter;

      return matchesQuery && matchesDistrict;
    });
  }, [districtFilter, districtNameById, normalizedQuery, officers]);

  const officerStats = useMemo(
    () => ({
      total: officers.length,
      districts: new Set(
        officers.map((officer) => String(officer.officer?.districtId || officer.districtId || "")).filter(Boolean),
      ).size,
      assigned: officers.filter((officer) => Boolean(officer.officer?.district || officer.district)).length,
      filtered: filteredOfficers.length,
    }),
    [filteredOfficers.length, officers],
  );

  return (
    <div className="officers-page">
      <section className="officers-hero card">
        <div className="officers-hero-copy">
          <span className="dashboard-eyebrow officers-eyebrow">Officer administration</span>
          <h2>Manage officer accounts with a clearer, modern workflow.</h2>
          <p>
            Review the current officer directory, search across records, and register new officers in
            a calmer interface that matches the rest of the admin system.
          </p>
        </div>

        <div className="officers-hero-stats">
          <div className="officers-mini-stat">
            <span>Total officers</span>
            <strong>{loading ? "—" : formatNumber(officerStats.total)}</strong>
          </div>
          <div className="officers-mini-stat">
            <span>Districts covered</span>
            <strong>{loading ? "—" : formatNumber(officerStats.districts)}</strong>
          </div>
          <div className="officers-mini-stat">
            <span>Assigned records</span>
            <strong>{loading ? "—" : formatNumber(officerStats.assigned)}</strong>
          </div>
          <div className="officers-mini-stat">
            <span>Visible results</span>
            <strong>{loading ? "—" : formatNumber(officerStats.filtered)}</strong>
          </div>
        </div>
      </section>

      <section className="officers-toolbar card">
        <label className="officers-search">
          <span>Search</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Name, email, badge, phone, or district"
          />
        </label>

        <label className="officers-filter">
          <span>District</span>
          <select value={districtFilter} onChange={(event) => setDistrictFilter(event.target.value)}>
            <option value="ALL">All districts</option>
            {districts.map((district) => (
              <option key={district.id} value={district.id}>
                {district.name}
              </option>
            ))}
          </select>
        </label>

        <div className="officers-toolbar-note">
          {loading ? "Loading officers from the backend..." : `${formatNumber(filteredOfficers.length)} records shown`}
        </div>
      </section>

      {error ? <div className="alert alert-error">{error}</div> : null}
      {success ? <div className="success-message">{success}</div> : null}

      <section className="officers-grid">
        <article className="card officers-directory-card">
          <div className="section-header">
            <div>
              <h3>Officers Directory</h3>
              <p className="section-subtitle">The current officer roster with district and contact details.</p>
            </div>
            <span className="badge badge-neutral">{officerCountLabel}</span>
          </div>

          {loading ? (
            <div className="table-empty">Loading officers directory...</div>
          ) : filteredOfficers.length === 0 ? (
            <div className="table-empty">No officers found for the current filters.</div>
          ) : (
            <div className="table-wrap">
              <table className="table officers-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Badge Number</th>
                    <th>District</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOfficers.map((officer) => {
                    const officerDistrictName =
                      officer.officer?.district?.name || officer.district?.name || "N/A";

                    return (
                      <tr key={officer.id}>
                        <td className="table-strong">{officer.name}</td>
                        <td>
                          <span className="badge">{officer.officer?.badgeNo || "N/A"}</span>
                        </td>
                        <td>{officerDistrictName}</td>
                        <td>{officer.email}</td>
                        <td>{officer.officer?.phone || officer.phone || "N/A"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </article>

        <aside className="card officers-form-card">
          <div className="section-header">
            <div>
              <h3>Register New Officer</h3>
              <p className="section-subtitle">Add a new admin-managed officer account.</p>
            </div>
          </div>

          <form onSubmit={handleRegister} className="officers-form">
            <div className="form-group">
              <label className="form-label-light" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="form-input-light"
                placeholder="e.g. Inspector K. Perera"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                disabled={submitting}
              />
            </div>

            <div className="form-group">
              <label className="form-label-light" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="form-input-light"
                placeholder="e.g. perera@trafficfines.lk"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                disabled={submitting}
              />
            </div>

            <div className="form-group">
              <label className="form-label-light" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-input-light"
                placeholder="Min 6 characters"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                minLength={6}
                disabled={submitting}
              />
            </div>

            <div className="form-group">
              <label className="form-label-light" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="form-input-light"
                placeholder="e.g. +94771234567"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
                disabled={submitting}
              />
            </div>

            <div className="form-group">
              <label className="form-label-light" htmlFor="badgeNo">
                Badge Number
              </label>
              <input
                type="text"
                id="badgeNo"
                className="form-input-light"
                placeholder="e.g. SLP8942"
                value={badgeNo}
                onChange={(event) => setBadgeNo(event.target.value)}
                required
                disabled={submitting}
              />
            </div>

            <div className="form-group">
              <label className="form-label-light" htmlFor="district">
                Assigned District
              </label>
              <select
                id="district"
                className="form-select"
                value={districtId}
                onChange={(event) => setDistrictId(event.target.value)}
                required
                disabled={submitting}
              >
                <option value="">Select District</option>
                {districts.map((district) => (
                  <option key={district.id} value={district.id}>
                    {district.name}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn-primary" disabled={submitting}>
              {submitting ? "Registering..." : "Register Officer"}
            </button>
          </form>

          <div className="dashboard-callout officers-callout">
            <p className="dashboard-callout-label">Admin note</p>
            <h4>Keep badge numbers unique and align each officer to one district.</h4>
            <p>
              The list above updates from the backend after registration, so no manual refresh logic is needed.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
