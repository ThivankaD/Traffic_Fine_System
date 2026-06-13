import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import FinesPage from "./pages/FinesPage";
import IssuFinePage from "./pages/IssuFinePage";
import ProfilePage from "./pages/ProfilePage";
import "./App.css";

function PrivateRoute({ children }) {
  const { token, loading } = useAuth();

  if (loading) {
    return <div className="loading-container">Loading...</div>;
  }

  return token ? children : <Navigate to="/login" />;
}

function AppContent() {
  const { token, loading } = useAuth();

  if (loading) {
    return <div className="loading-container">Loading...</div>;
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={token ? <Navigate to="/" /> : <LoginPage />}
      />
      <Route
        path="/signup"
        element={token ? <Navigate to="/" /> : <SignupPage />}
      />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/fines"
        element={
          <PrivateRoute>
            <FinesPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/issue"
        element={
          <PrivateRoute>
            <IssuFinePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
