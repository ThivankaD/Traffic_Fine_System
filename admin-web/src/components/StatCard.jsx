export default function StatCard({ title, value, trend, accent = "slate" }) {
  return (
    <div className={`stat-card stat-card-${accent}`}>
      <div className="stat-card-header">
        <h3>{title}</h3>
      </div>
      <p className="stat-card-value">{value}</p>
      {trend ? <div className="stat-card-trend">{trend}</div> : null}
    </div>
  );
}
