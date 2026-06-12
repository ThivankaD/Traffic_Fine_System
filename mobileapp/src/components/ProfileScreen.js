import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
  Alert,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, COMMON_STYLES } from "../theme";
import { API_BASE_URL } from "../config";

export default function ProfileScreen({ user, token, onLogout }) {
  const isOfficer = user?.role === "OFFICER" || user?.role === "ADMIN";
  const [cards, setCards] = useState([]);
  const [loadingCards, setLoadingCards] = useState(false);
  
  // New card form state
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [addingCard, setAddingCard] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    if (!isOfficer && token) {
      fetchSavedCards();
    }
  }, [token]);

  const fetchSavedCards = async () => {
    setLoadingCards(true);
    try {
      const response = await fetch(`${API_BASE_URL}/users/me/cards`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const resData = await response.json();
      if (response.ok && resData.success) {
        setCards(resData.data || []);
      }
    } catch (error) {
      console.log("Error loading saved cards:", error);
    } finally {
      setLoadingCards(false);
    }
  };

  const handleAddCard = async () => {
    if (!cardholderName.trim() || !cardNumber.trim() || !expiry.trim()) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    setAddingCard(true);
    try {
      const response = await fetch(`${API_BASE_URL}/users/me/cards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          cardholderName: cardholderName.trim(),
          cardNumber: cardNumber.trim(),
          expiry: expiry.trim(),
        }),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        Alert.alert("Success", "Payment method saved successfully!");
        setCardholderName("");
        setCardNumber("");
        setExpiry("");
        setShowAddForm(false);
        // Reload cards
        fetchSavedCards();
      } else {
        Alert.alert("Error", resData.message || "Failed to save card");
      }
    } catch (error) {
      Alert.alert("Error", "Unable to save card due to server connection issue.");
    } finally {
      setAddingCard(false);
    }
  };

  const handleDeleteCard = async (id) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to remove this saved payment method?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          style: "destructive",
          onPress: async () => {
            try {
              const response = await fetch(`${API_BASE_URL}/users/me/cards/${id}`, {
                method: "DELETE",
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              const resData = await response.json();
              if (response.ok && resData.success) {
                // Remove from local state
                setCards((prev) => prev.filter((c) => c.id !== id));
              } else {
                Alert.alert("Error", resData.message || "Failed to remove card");
              }
            } catch (error) {
              Alert.alert("Error", "Server connection issue.");
            }
          },
        },
      ]
    );
  };

  const getCardIcon = (brand) => {
    switch (brand?.toLowerCase()) {
      case "mastercard":
        return "logo-bitcoin"; // Mock logo placeholder or icon
      default:
        return "card";
    }
  };

  return (
    <ScrollView style={COMMON_STYLES.container} contentContainerStyle={styles.scrollContent}>
      {/* Avatar Header banner */}
      <View style={styles.avatarCard}>
        <View style={styles.avatarBg}>
          <Ionicons
            name={isOfficer ? "shield-checkmark" : "person"}
            size={50}
            color={COLORS.white}
          />
        </View>
        <Text style={styles.name}>{user?.name || "Driver Account"}</Text>
        <Text style={styles.roleSub}>{user?.role || "MOTORIST"}</Text>
      </View>

      {/* Account details card */}
      <Text style={styles.sectionTitle}>Account Information</Text>
      <View style={COMMON_STYLES.card}>
        <View style={styles.detailRow}>
          <View style={styles.iconCol}>
            <Ionicons name="mail" size={18} color={COLORS.textLight} />
          </View>
          <View style={styles.textCol}>
            <Text style={styles.detailLabel}>Email Address</Text>
            <Text style={styles.detailVal}>{user?.email || "N/A"}</Text>
          </View>
        </View>

        <View style={styles.detailRow}>
          <View style={styles.iconCol}>
            <Ionicons name="call" size={18} color={COLORS.textLight} />
          </View>
          <View style={styles.textCol}>
            <Text style={styles.detailLabel}>Contact Phone</Text>
            <Text style={styles.detailVal}>{user?.phone || "N/A"}</Text>
          </View>
        </View>

        {isOfficer ? (
          <>
            <View style={styles.detailRow}>
              <View style={styles.iconCol}>
                <Ionicons name="ribbon" size={18} color={COLORS.textLight} />
              </View>
              <View style={styles.textCol}>
                <Text style={styles.detailLabel}>Badge Number</Text>
                <Text style={styles.detailVal}>{user?.officer?.badgeNo || "OFF-5829"}</Text>
              </View>
            </View>

            <View style={styles.detailRow}>
              <View style={styles.iconCol}>
                <Ionicons name="map" size={18} color={COLORS.textLight} />
              </View>
              <View style={styles.textCol}>
                <Text style={styles.detailLabel}>Division / District</Text>
                <Text style={styles.detailVal}>{user?.district?.name || "Colombo District"}</Text>
              </View>
            </View>
          </>
        ) : (
          <View style={styles.detailRow}>
            <View style={styles.iconCol}>
              <Ionicons name="shield" size={18} color={COLORS.textLight} />
            </View>
            <View style={styles.textCol}>
              <Text style={styles.detailLabel}>License Status</Text>
              <Text style={[styles.detailVal, { color: COLORS.success, fontWeight: "800" }]}>
                ACTIVE / VALID
              </Text>
            </View>
          </View>
        )}
      </View>

      {/* ─── SAVED PAYMENT METHODS (CITIZEN ONLY) ────────────────────────────────── */}
      {!isOfficer && (
        <>
          <View style={COMMON_STYLES.spaceBetween}>
            <Text style={styles.sectionTitle}>Saved Payment Methods</Text>
            <TouchableOpacity
              style={styles.addCardToggleBtn}
              onPress={() => setShowAddForm(!showAddForm)}
            >
              <Text style={styles.addCardToggleText}>
                {showAddForm ? "Cancel" : "+ Add New"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Add card form */}
          {showAddForm && (
            <View style={[COMMON_STYLES.card, styles.addFormCard]}>
              <Text style={styles.formTitle}>Add Credit/Debit Card</Text>

              <Text style={styles.inputLabel}>Cardholder Name</Text>
              <TextInput
                style={COMMON_STYLES.input}
                placeholder="John Doe"
                placeholderTextColor={COLORS.textLight}
                value={cardholderName}
                onChangeText={setCardholderName}
                disabled={addingCard}
              />

              <Text style={styles.inputLabel}>Card Number</Text>
              <TextInput
                style={COMMON_STYLES.input}
                placeholder="0000 0000 0000 0000"
                placeholderTextColor={COLORS.textLight}
                keyboardType="number-pad"
                value={cardNumber}
                onChangeText={(val) => setCardNumber(val.replace(/[^0-9]/g, "").slice(0, 16))}
                disabled={addingCard}
              />

              <Text style={styles.inputLabel}>Expiry Date (MM/YY)</Text>
              <TextInput
                style={COMMON_STYLES.input}
                placeholder="MM/YY"
                placeholderTextColor={COLORS.textLight}
                keyboardType="number-pad"
                value={expiry}
                onChangeText={(val) => {
                  let cleaned = val.replace(/[^0-9]/g, "");
                  if (cleaned.length >= 2) {
                    cleaned = cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4);
                  }
                  setExpiry(cleaned.slice(0, 5));
                }}
                disabled={addingCard}
              />

              <TouchableOpacity
                style={[COMMON_STYLES.button, addingCard && COMMON_STYLES.buttonDisabled]}
                onPress={handleAddCard}
                disabled={addingCard}
              >
                {addingCard ? (
                  <ActivityIndicator color={COLORS.white} size="small" />
                ) : (
                  <Text style={COMMON_STYLES.buttonText}>Save Card Method</Text>
                )}
              </TouchableOpacity>
            </View>
          )}

          {/* Saved Cards List */}
          {loadingCards ? (
            <ActivityIndicator color={COLORS.accent} style={{ marginVertical: 15 }} />
          ) : cards.length > 0 ? (
            <View style={styles.cardsList}>
              {cards.map((item) => (
                <View key={item.id} style={styles.creditCardBox}>
                  {/* Card Background Graphics */}
                  <View style={styles.cardHeader}>
                    <View style={COMMON_STYLES.row}>
                      <Ionicons name="card" size={24} color={COLORS.white} />
                      <Text style={styles.cardBrand}>{item.brand}</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => handleDeleteCard(item.id)}
                      style={styles.cardDeleteBtn}
                    >
                      <Ionicons name="trash" size={18} color={COLORS.dangerLight} />
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.cardNoText}>{item.cardNumber}</Text>

                  <View style={COMMON_STYLES.spaceBetween}>
                    <View>
                      <Text style={styles.cardHolderLabel}>CARDHOLDER</Text>
                      <Text style={styles.cardHolderName}>{item.cardholderName}</Text>
                    </View>
                    <View style={{ alignItems: "flex-end" }}>
                      <Text style={styles.cardHolderLabel}>EXPIRES</Text>
                      <Text style={styles.cardHolderName}>{item.expiry}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ) : (
            <View style={[COMMON_STYLES.card, styles.emptyCardsCard]}>
              <Ionicons name="card-outline" size={36} color={COLORS.textLight} />
              <Text style={styles.emptyCardsText}>No saved payment cards found.</Text>
            </View>
          )}
        </>
      )}



      {/* Logout button */}
      <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
        <Ionicons name="log-out" size={20} color={COLORS.white} />
        <Text style={styles.logoutBtnText}>Sign Out Account</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  avatarCard: {
    alignItems: "center",
    marginVertical: 15,
  },
  avatarBg: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
  },
  name: {
    fontSize: 22,
    fontWeight: "800",
    color: COLORS.textPrimary,
    marginTop: 15,
  },
  roleSub: {
    fontSize: 13,
    color: COLORS.accent,
    fontWeight: "700",
    letterSpacing: 1,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.textSecondary,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 2,
  },
  detailRow: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    alignItems: "center",
  },
  iconCol: {
    width: 32,
    alignItems: "center",
  },
  textCol: {
    flex: 1,
    marginLeft: 8,
  },
  detailLabel: {
    fontSize: 11,
    color: COLORS.textLight,
    fontWeight: "600",
  },
  detailVal: {
    fontSize: 14,
    color: COLORS.textPrimary,
    fontWeight: "600",
    marginTop: 2,
  },

  logoutBtn: {
    ...COMMON_STYLES.button,
    backgroundColor: COLORS.danger,
    shadowColor: COLORS.danger,
    flexDirection: "row",
    height: 50,
    marginTop: 30,
  },
  logoutBtnText: {
    ...COMMON_STYLES.buttonText,
    marginLeft: 8,
  },
  // Saved Cards Specific Styles
  addCardToggleBtn: {
    marginTop: 18,
  },
  addCardToggleText: {
    color: COLORS.accent,
    fontWeight: "700",
    fontSize: 14,
  },
  addFormCard: {
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.accentLight,
  },
  formTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.primary,
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  emptyCardsCard: {
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyCardsText: {
    color: COLORS.textLight,
    fontSize: 13,
    marginTop: 8,
  },
  cardsList: {
    marginBottom: 15,
  },
  creditCardBox: {
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
      web: {
        boxShadow: "0px 4px 10px rgba(30, 58, 138, 0.15)",
      },
    }),
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  cardBrand: {
    color: COLORS.white,
    fontWeight: "800",
    fontSize: 15,
    marginLeft: 10,
    letterSpacing: 0.5,
  },
  cardDeleteBtn: {
    padding: 4,
  },
  cardNoText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 2,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: Platform.OS === "ios" ? "Courier New" : "monospace",
  },
  cardHolderLabel: {
    color: COLORS.accentLight,
    fontSize: 9,
    fontWeight: "500",
    letterSpacing: 1,
    marginBottom: 2,
  },
  cardHolderName: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: "700",
  },
});
