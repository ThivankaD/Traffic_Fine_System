import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, Platform, Animated, TouchableOpacity, Text, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LoginComponent from "./src/components/loginComponent";
import SignupComponent from "./src/components/signupComponent";
import DashboardScreen from "./src/components/DashboardScreen";
import FinesScreen from "./src/components/FinesScreen";
import IssueFineScreen from "./src/components/IssueFineScreen";
import ProfileScreen from "./src/components/ProfileScreen";
import NavBar from "./src/components/NavBar";
import { COLORS } from "./src/theme";
import { registerNotificationListener, showNotification } from "./src/utils/notification";

// Intercept standard RN Alert.alert calls to display beautiful custom toasts
const originalAlert = Alert.alert;
Alert.alert = (title, message, buttons, options) => {
  // If there are multiple buttons (like interactive confirmation dialogs), fall back to native alert
  if (buttons && buttons.length > 1) {
    originalAlert(title, message, buttons, options);
    return;
  }
  
  let type = "info";
  const titleLower = (title || "").toLowerCase();
  const msgLower = (message || "").toLowerCase();
  
  if (
    titleLower.includes("error") || 
    titleLower.includes("fail") || 
    titleLower.includes("reject") ||
    msgLower.includes("error") ||
    msgLower.includes("fail") ||
    msgLower.includes("invalid")
  ) {
    type = "error";
  } else if (
    titleLower.includes("success") || 
    titleLower.includes("confirm") || 
    titleLower.includes("complete") || 
    titleLower.includes("issued") ||
    msgLower.includes("success")
  ) {
    type = "success";
  } else if (titleLower.includes("warning") || titleLower.includes("attention")) {
    type = "warning";
  }

  showNotification(title || "Alert", message || "", type);

  // If there is a single button with an onPress handler, execute it
  if (buttons && buttons.length === 1 && buttons[0].onPress) {
    setTimeout(() => {
      buttons[0].onPress();
    }, 1500);
  }
};

export default function App() {
  const [screen, setScreen] = useState("login"); // 'login' | 'signup' | 'app'
  const [currentTab, setCurrentTab] = useState("dashboard"); // 'dashboard' | 'fines' | 'issue' | 'myfines' | 'profile'
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [searchedFineFromDashboard, setSearchedFineFromDashboard] = useState(null);

  // Floating notification state
  const [notification, setNotification] = useState(null); // { title, message, type }
  const animatedValue = useRef(new Animated.Value(-150)).current;
  const notificationTimeoutRef = useRef(null);

  useEffect(() => {
    registerNotificationListener((title, message, type) => {
      if (notificationTimeoutRef.current) {
        clearTimeout(notificationTimeoutRef.current);
      }
      
      setNotification({ title, message, type });
      
      // Animate in
      Animated.spring(animatedValue, {
        toValue: 20,
        useNativeDriver: true,
        tension: 40,
        friction: 8,
      }).start();
      
      // Auto dismiss after 4 seconds
      notificationTimeoutRef.current = setTimeout(() => {
        handleDismissNotification();
      }, 4000);
    });

    return () => {
      if (notificationTimeoutRef.current) {
        clearTimeout(notificationTimeoutRef.current);
      }
    };
  }, []);

  const handleDismissNotification = () => {
    Animated.timing(animatedValue, {
      toValue: -150,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setNotification(null);
    });
  };

  const getNotificationStyles = () => {
    if (!notification) return {};
    switch (notification.type) {
      case "success":
        return {
          backgroundColor: "#ECFDF5",
          borderColor: "#A7F3D0",
          icon: "checkmark-circle",
          iconColor: "#10B981",
          textColor: "#065F46",
          titleColor: "#047857",
        };
      case "error":
        return {
          backgroundColor: "#FEF2F2",
          borderColor: "#FCA5A5",
          icon: "close-circle",
          iconColor: "#EF4444",
          textColor: "#991B1B",
          titleColor: "#B91C1C",
        };
      case "warning":
        return {
          backgroundColor: "#FFFBEB",
          borderColor: "#FDE68A",
          icon: "warning",
          iconColor: "#F59E0B",
          textColor: "#92400E",
          titleColor: "#B45309",
        };
      case "info":
      default:
        return {
          backgroundColor: "#EFF6FF",
          borderColor: "#BFDBFE",
          icon: "information-circle",
          iconColor: "#3B82F6",
          textColor: "#1E40AF",
          titleColor: "#1D4ED8",
        };
    }
  };

  // Authentication Handlers
  const handleLoginSuccess = (userData, tokenData) => {
    setUser(userData);
    setToken(tokenData);
    setScreen("app");
    setCurrentTab("dashboard");
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    setScreen("login");
    setCurrentTab("dashboard");
  };

  const handleSearchReferenceFromDashboard = (fineData) => {
    setSearchedFineFromDashboard(fineData);
    // Navigate to respective fine tab depending on role
    const isOfficer = user?.role === "OFFICER" || user?.role === "ADMIN";
    setCurrentTab(isOfficer ? "myfines" : "fines");
  };

  // Render Screens based on active tab in 'app' state
  const renderTabContent = () => {
    switch (currentTab) {
      case "dashboard":
        return (
          <DashboardScreen
            user={user}
            token={token}
            onNavigateToTab={(tabId) => setCurrentTab(tabId)}
            onSearchReference={handleSearchReferenceFromDashboard}
          />
        );
      case "fines":
      case "myfines":
        return (
          <FinesScreen
            user={user}
            token={token}
            initialSearchedFine={searchedFineFromDashboard}
            onClearInitialFine={() => setSearchedFineFromDashboard(null)}
          />
        );
      case "issue":
        return (
          <IssueFineScreen
            token={token}
            onFineIssued={() => {
              // Redirect back to dashboard or officer fines list
              setCurrentTab("myfines");
            }}
          />
        );
      case "profile":
        return <ProfileScreen user={user} token={token} onLogout={handleLogout} />;
      default:
        return (
          <DashboardScreen
            user={user}
            token={token}
            onNavigateToTab={(tabId) => setCurrentTab(tabId)}
            onSearchReference={handleSearchReferenceFromDashboard}
          />
        );
    }
  };

  const renderAppContent = () => {
    if (screen === "signup") {
      return <SignupComponent onLoginPress={() => setScreen("login")} />;
    }

    if (screen === "login") {
      return (
        <LoginComponent
          onRegisterPress={() => setScreen("signup")}
          onLoginSuccess={handleLoginSuccess}
        />
      );
    }

    return (
      <View style={styles.appContainer}>
        {/* Render active tab screen */}
        <View style={styles.mainContent}>{renderTabContent()}</View>

        {/* Dynamic bottom navigation bar */}
        <NavBar
          currentTab={currentTab}
          onTabPress={(tabId) => {
            // Clear search buffer when changing tabs manually
            setSearchedFineFromDashboard(null);
            setCurrentTab(tabId);
          }}
          role={user?.role}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      
      {renderAppContent()}

      {notification && (
        <Animated.View
          style={[
            styles.notificationBanner,
            {
              transform: [{ translateY: animatedValue }],
              backgroundColor: getNotificationStyles().backgroundColor,
              borderColor: getNotificationStyles().borderColor,
            },
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={handleDismissNotification}
            style={styles.notificationTouch}
          >
            <Ionicons
              name={getNotificationStyles().icon}
              size={24}
              color={getNotificationStyles().iconColor}
              style={styles.notificationIcon}
            />
            <View style={styles.notificationTextContainer}>
              <Text
                style={[
                  styles.notificationTitle,
                  { color: getNotificationStyles().titleColor },
                ]}
              >
                {notification.title}
              </Text>
              <Text
                style={[
                  styles.notificationMessage,
                  { color: getNotificationStyles().textColor },
                ]}
              >
                {notification.message}
              </Text>
            </View>
            <Ionicons
              name="close"
              size={18}
              color={getNotificationStyles().iconColor}
              style={styles.notificationClose}
            />
          </TouchableOpacity>
        </Animated.View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  appContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  mainContent: {
    flex: 1,
  },
  notificationBanner: {
    position: "absolute",
    top: Platform.OS === "ios" ? 40 : 10,
    left: 16,
    right: 16,
    borderRadius: 16,
    borderWidth: 1.5,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
    zIndex: 9999,
  },
  notificationTouch: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationIcon: {
    marginRight: 12,
  },
  notificationTextContainer: {
    flex: 1,
    marginRight: 8,
  },
  notificationTitle: {
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 0.3,
  },
  notificationMessage: {
    fontSize: 12,
    fontWeight: "500",
    marginTop: 2,
    lineHeight: 16,
  },
  notificationClose: {
    marginLeft: 6,
    alignSelf: "flex-start",
    marginTop: 2,
  },
});
