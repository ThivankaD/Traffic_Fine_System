import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./NavBar.css";

function NavBar({ currentTab }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const isOfficer = user?.role === "OFFICER" || user?.role === "ADMIN";

  const tabs = isOfficer
    ? [
        { id: "dashboard", label: "Home", icon: "🏠" },
        { id: "issue", label: "Issue Fine", icon: "➕" },
        { id: "fines", label: "My Fines", icon: "📄" },
        { id: "profile", label: "Profile", icon: "👤" },
      ]
    : [
        { id: "dashboard", label: "Home", icon: "🏠" },
        { id: "fines", label: "Pay Fines", icon: "💳" },
        { id: "profile", label: "Profile", icon: "👤" },
      ];

  const handleTabClick = (tabId) => {
    if (tabId === "dashboard") {
      navigate("/");
    } else {
      navigate(`/${tabId}`);
    }
  };

  return (
    <nav className="nav-bar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`nav-item ${currentTab === tab.id ? "active" : ""}`}
          onClick={() => handleTabClick(tab.id)}
        >
          <span className="nav-icon">{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
