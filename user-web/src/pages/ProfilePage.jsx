import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./ProfilePage.css";

function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to logout?")) {
      await logout();
      navigate("/login");
    }
  };

  return (
    <div className="app-layout">
      <div className="app-content">
        <div className="profile-container">
          <h1 className="page-title">Profile</h1>

          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar">
                {user?.name?.charAt(0)?.toUpperCase()}
              </div>
              <div>
                <h2>{user?.name}</h2>
                <p className="profile-role">{user?.role}</p>
              </div>
            </div>

            <div className="profile-details">
              <div className="detail-section">
                <h3>Personal Information</h3>
                <div className="detail-item">
                  <span>Email</span>
                  <strong>{user?.email}</strong>
                </div>
                {user?.phone && (
                  <div className="detail-item">
                    <span>Phone</span>
                    <strong>{user?.phone}</strong>
                  </div>
                )}
                {user?.nic && (
                  <div className="detail-item">
                    <span>NIC</span>
                    <strong>{user?.nic}</strong>
                  </div>
                )}
                {user?.dlNo && (
                  <div className="detail-item">
                    <span>Driving License</span>
                    <strong>{user?.dlNo}</strong>
                  </div>
                )}
              </div>

              {user?.officer && (
                <div className="detail-section">
                  <h3>Officer Information</h3>
                  <div className="detail-item">
                    <span>Badge Number</span>
                    <strong>{user?.officer?.badgeNo}</strong>
                  </div>
                  {user?.officer?.district && (
                    <div className="detail-item">
                      <span>District</span>
                      <strong>{user?.officer?.district?.name}</strong>
                    </div>
                  )}
                </div>
              )}
            </div>

            <button className="logout-button" onClick={handleLogout}>
              🚪 Logout
            </button>
          </div>
        </div>
      </div>
      <NavBar currentTab="profile" />
    </div>
  );
}

export default ProfilePage;
