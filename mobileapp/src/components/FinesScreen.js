import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, COMMON_STYLES } from "../theme";
import { API_BASE_URL } from "../config";

export default function FinesScreen({ user, token, initialSearchedFine, onClearInitialFine }) {
  const isOfficer = user?.role === "OFFICER" || user?.role === "ADMIN";
  
  const showAlert = (title, message, buttons) => {
    console.log(`Alert [${title}]: ${message}`);
    if (Platform.OS === "web") {
      alert(`${title}\n\n${message}`);
      if (buttons && buttons.length > 0) {
        const okButton = buttons.find(b => b.text === "OK" || b.onPress);
        if (okButton && okButton.onPress) {
          okButton.onPress();
        }
      }
    } else {
      Alert.alert(title, message, buttons);
    }
  };
  
  // State variables
  const [finesList, setFinesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Motorist search state
  const [searchedFines, setSearchedFines] = useState([]);
  
  // Payment Modal State
  const [selectedFine, setSelectedFine] = useState(null);
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);
  const [payerName, setPayerName] = useState(user?.name || "");
  const [payerPhone, setPayerPhone] = useState(user?.phone || "");
  
  // Card input states
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [paying, setPaying] = useState(false);

  // Saved Cards integration
  const [savedCards, setSavedCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null); // SavedCard object or null (for new card)
  const [saveCardToggle, setSaveCardToggle] = useState(false);
  const [loadingSavedCards, setLoadingSavedCards] = useState(false);

  // Detail Modal State (Officer)
  const [detailModalVisible, setDetailModalVisible] = useState(false);

  // Initialize with any fine searched from the Dashboard
  useEffect(() => {
    if (initialSearchedFine) {
      setSearchedFines((prev) => {
        const exists = prev.some((f) => f.id === initialSearchedFine.id);
        if (exists) {
          return prev.map((f) => f.id === initialSearchedFine.id ? initialSearchedFine : f);
        }
        return [initialSearchedFine, ...prev];
      });
      setSelectedFine(initialSearchedFine);
      if (!isOfficer) {
        setPaymentModalVisible(true);
      } else {
        setDetailModalVisible(true);
      }
      onClearInitialFine();
    }
  }, [initialSearchedFine]);

  useEffect(() => {
    if (isOfficer) {
      fetchOfficerFines();
    } else {
      fetchMotoristFines();
    }
  }, []);

  // Pre-populate payer name and phone when user changes
  useEffect(() => {
    if (user) {
      setPayerName(user.name || "");
      setPayerPhone(user.phone || "");
    }
  }, [user]);

  // Fetch saved cards when payment modal is opened
  useEffect(() => {
    if (paymentModalVisible && !isOfficer && token) {
      fetchSavedCardsForPayment();
    }
  }, [paymentModalVisible]);

  const fetchOfficerFines = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/fines/officer/my-fines`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const resData = await response.json();
      if (response.ok && resData.success) {
        setFinesList(resData.data || []);
      } else {
        showAlert("Error", resData.message || "Failed to fetch fines");
      }
    } catch (error) {
      console.log("Error fetching officer fines:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMotoristFines = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/fines/motorist/my-fines`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const resData = await response.json();
      if (response.ok && resData.success) {
        setSearchedFines(resData.data || []);
      } else {
        showAlert("Error", resData.message || "Failed to fetch fines");
      }
    } catch (error) {
      console.log("Error fetching motorist fines:", error);
    } finally {
      setLoading(false);
    }
  };

  const getFilteredFines = () => {
    if (!searchQuery.trim()) {
      return finesList;
    }
    const query = searchQuery.toLowerCase().trim();
    return finesList.filter((fine) => {
      const vehicleNo = fine.vehicleNo?.toLowerCase() || "";
      const referenceNo = fine.referenceNo?.toLowerCase() || "";
      const driverNIC = fine.driverNIC?.toLowerCase() || "";
      const driverName = fine.driverName?.toLowerCase() || "";
      return (
        vehicleNo.includes(query) ||
        referenceNo.includes(query) ||
        driverNIC.includes(query) ||
        driverName.includes(query)
      );
    });
  };

  const fetchSavedCardsForPayment = async () => {
    setLoadingSavedCards(true);
    try {
      const response = await fetch(`${API_BASE_URL}/users/me/cards`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const resData = await response.json();
      if (response.ok && resData.success) {
        const userCards = resData.data || [];
        setSavedCards(userCards);
        if (userCards.length > 0) {
          // Pre-select the first card
          setSelectedCard(userCards[0]);
        } else {
          setSelectedCard(null);
        }
      }
    } catch (error) {
      console.log("Error loading saved cards:", error);
    } finally {
      setLoadingSavedCards(false);
    }
  };

  // Motorist search handler (fines endpoint)
  const handleLookupReference = async () => {
    if (!searchQuery.trim()) {
      showAlert("Error", "Please enter a reference number");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/fines/${searchQuery.trim().toUpperCase()}`);
      const resData = await response.json();
      if (response.ok && resData.success) {
        const fine = resData.data;
        setSearchedFines((prev) => {
          const exists = prev.some((f) => f.id === fine.id);
          if (exists) {
            return prev.map((f) => f.id === fine.id ? fine : f);
          }
          return [fine, ...prev];
        });
      } else {
        showAlert("Not Found", "No traffic fine matching this reference number.");
      }
    } catch (err) {
      showAlert("Error", "Unable to contact the server.");
    } finally {
      setLoading(false);
    }
  };

  // Payment execution handler (payments endpoint)
  const handlePayFine = async () => {
    if (!payerName || !payerPhone) {
      showAlert("Error", "Please fill payer details");
      return;
    }



    setPaying(true);
    try {
      // Step 1: If new card entered and "Save Card" is checked, call backend saved card POST endpoint
      if (!selectedCard && saveCardToggle && token) {
        try {
          await fetch(`${API_BASE_URL}/users/me/cards`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              cardholderName: payerName,
              cardNumber,
              expiry,
            }),
          });
        } catch (cardErr) {
          console.log("Failed to save card to database but continuing payment:", cardErr);
        }
      }

      // Step 2: Post payment to backend
      const transactionId = "TXN-" + Date.now().toString().slice(-8).toUpperCase();
      const response = await fetch(`${API_BASE_URL}/payments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          referenceNo: selectedFine.referenceNo,
          payerName,
          payerPhone,
          paymentMethod: "ONLINE",
          transactionId,
        }),
      });

      const resData = await response.json();
      if (response.ok && resData.success) {
        showAlert("Success", `Fine paid successfully!\nReceipt No: ${resData.data?.receiptNo || "ONLINE-PAY"}`);
        setPaymentModalVisible(false);
        
        // Update the fine status locally in history list
        const updatedFine = { ...selectedFine, status: "PAID" };
        setSearchedFines((prev) =>
          prev.map((f) => (f.id === selectedFine.id ? updatedFine : f))
        );
        setSelectedFine(null);
        setCardNumber("");
        setExpiry("");
        setCvv("");
        setSaveCardToggle(false);
        fetchMotoristFines();
      } else {
        showAlert("Payment Failed", resData.message || "Something went wrong.");
      }
    } catch (error) {
      showAlert("Error", "Unable to process payment due to network issue.");
    } finally {
      setPaying(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "PAID":
        return COLORS.success;
      case "PENDING":
        return COLORS.danger;
      default:
        return COLORS.textLight;
    }
  };

  const getStatusBgColor = (status) => {
    switch (status) {
      case "PAID":
        return COLORS.successLight;
      case "PENDING":
        return COLORS.dangerLight;
      default:
        return COLORS.border;
    }
  };

  const renderFineCard = ({ item }) => {
    const isPaid = item.status === "PAID";
    return (
      <View style={COMMON_STYLES.card}>
        <View style={COMMON_STYLES.spaceBetween}>
          <Text style={styles.refNo}>{item.referenceNo}</Text>
          <View style={[COMMON_STYLES.badge, { backgroundColor: getStatusBgColor(item.status) }]}>
            <Text style={[styles.badgeText, { color: getStatusColor(item.status) }]}>
              {item.status}
            </Text>
          </View>
        </View>

        <View style={styles.cardDivider} />

        <View style={styles.cardRow}>
          <Text style={styles.cardLabel}>Vehicle No:</Text>
          <Text style={styles.cardVal}>{item.vehicleNo}</Text>
        </View>
        <View style={styles.cardRow}>
          <Text style={styles.cardLabel}>Violation:</Text>
          <Text style={styles.cardVal}>{item.category?.name || "Traffic Violation"}</Text>
        </View>
        <View style={styles.cardRow}>
          <Text style={styles.cardLabel}>Amount:</Text>
          <Text style={[styles.cardVal, styles.amountVal]}>LKR {(item.category?.amount || 0).toLocaleString()}</Text>
        </View>
        <View style={styles.cardRow}>
          <Text style={styles.cardLabel}>Date:</Text>
          <Text style={styles.cardVal}>{new Date(item.offenseDate).toLocaleDateString()}</Text>
        </View>

        {!isOfficer && !isPaid && (
          <TouchableOpacity
            style={styles.payNowBtn}
            onPress={() => {
              setSelectedFine(item);
              setPaymentModalVisible(true);
            }}
          >
            <Ionicons name="card" size={18} color={COLORS.white} />
            <Text style={styles.payNowBtnText}>Pay Ticket</Text>
          </TouchableOpacity>
        )}

        {isOfficer && (
          <TouchableOpacity
            style={styles.detailsBtn}
            onPress={() => {
              setSelectedFine(item);
              setDetailModalVisible(true);
            }}
          >
            <Text style={styles.detailsBtnText}>View Details</Text>
            <Ionicons name="chevron-forward" size={16} color={COLORS.accent} />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={COMMON_STYLES.container}>
      {/* Top Bar / Search Widget */}
      <View style={styles.searchHeader}>
        <Text style={styles.headerTitle}>{isOfficer ? "Tickets Issued" : "Search Traffic Tickets"}</Text>
        <View style={styles.searchBoxRow}>
          <TextInput
            style={styles.searchInput}
            placeholder={isOfficer ? "Search by vehicle, ref, or NIC..." : "Enter Ticket Reference (TF-...)"}
            placeholderTextColor={COLORS.textLight}
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoCapitalize="characters"
          />
          {isOfficer ? (
            <View style={styles.searchIconContainer}>
              <Ionicons name="search" size={20} color={COLORS.textLight} />
            </View>
          ) : (
            <TouchableOpacity style={styles.lookupBtn} onPress={handleLookupReference}>
              <Text style={styles.lookupBtnText}>Find</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Main List */}
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator color={COLORS.accent} size="large" />
          <Text style={styles.loaderText}>Retrieving record details...</Text>
        </View>
      ) : (
        <FlatList
          data={isOfficer ? getFilteredFines() : searchedFines}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderFineCard}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Ionicons
                name={isOfficer ? "document-text-outline" : "search-outline"}
                size={64}
                color={COLORS.textLight}
              />
              <Text style={styles.emptyTitle}>
                {isOfficer ? "No tickets issued yet" : "No tickets loaded"}
              </Text>
              <Text style={styles.emptySub}>
                {isOfficer
                  ? "Violations you issue will appear in this feed."
                  : "Enter a ticket reference number above to load and pay."}
              </Text>
            </View>
          }
        />
      )}

      {/* 1. Payment Modal (For Motorist) */}
      <Modal
        visible={paymentModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setPaymentModalVisible(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.modalBg}
        >
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Secure Checkout</Text>
              <TouchableOpacity onPress={() => setPaymentModalVisible(false)}>
                <Ionicons name="close" size={24} color={COLORS.textPrimary} />
              </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.modalScroll}>
              {/* Fine Details Invoice */}
              <View style={styles.invoiceCard}>
                <Text style={styles.invoiceTitle}>INVOICE DETAILS</Text>
                <View style={styles.invoiceRow}>
                  <Text style={styles.invoiceLabel}>Reference No:</Text>
                  <Text style={styles.invoiceValue}>{selectedFine?.referenceNo}</Text>
                </View>
                <View style={styles.invoiceRow}>
                  <Text style={styles.invoiceLabel}>Vehicle Registration:</Text>
                  <Text style={styles.invoiceValue}>{selectedFine?.vehicleNo}</Text>
                </View>
                <View style={styles.invoiceRow}>
                  <Text style={styles.invoiceLabel}>Offense:</Text>
                  <Text style={styles.invoiceValue}>{selectedFine?.category?.name}</Text>
                </View>
                <View style={styles.invoiceDivider} />
                <View style={styles.invoiceRow}>
                  <Text style={styles.totalLabel}>Amount Due:</Text>
                  <Text style={styles.totalValue}>LKR {(selectedFine?.category?.amount || 0).toLocaleString()}</Text>
                </View>
              </View>

              {/* Payer Fields */}
              <Text style={styles.paymentSecTitle}>Payer Information</Text>
              <Text style={styles.fieldLabel}>Payer Full Name</Text>
              <TextInput
                style={COMMON_STYLES.input}
                value={payerName}
                onChangeText={setPayerName}
                placeholder="Enter payer name"
              />

              <Text style={styles.fieldLabel}>Payer Mobile Number</Text>
              <TextInput
                style={COMMON_STYLES.input}
                value={payerPhone}
                onChangeText={setPayerPhone}
                keyboardType="phone-pad"
                placeholder="e.g. +94771234567"
              />

              {/* Saved Cards Selector */}
              {!isOfficer && savedCards.length > 0 && (
                <View style={styles.savedCardsBlock}>
                  <Text style={styles.paymentSecTitle}>Select Payment Method</Text>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.savedCardSelectorScroll}>
                    {savedCards.map((card) => {
                      const isSelected = selectedCard?.id === card.id;
                      return (
                        <TouchableOpacity
                          key={card.id}
                          style={[styles.savedCardBadge, isSelected && styles.savedCardBadgeActive]}
                          onPress={() => setSelectedCard(card)}
                        >
                          <Ionicons
                            name="card"
                            size={16}
                            color={isSelected ? COLORS.white : COLORS.primary}
                          />
                          <Text style={[styles.savedCardBadgeText, isSelected && styles.savedCardBadgeTextActive]}>
                            {card.brand} ({card.cardNumber.slice(-4)})
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                    <TouchableOpacity
                      style={[styles.savedCardBadge, !selectedCard && styles.savedCardBadgeActive]}
                      onPress={() => setSelectedCard(null)}
                    >
                      <Ionicons
                        name="add"
                        size={16}
                        color={!selectedCard ? COLORS.white : COLORS.primary}
                      />
                      <Text style={[styles.savedCardBadgeText, !selectedCard && styles.savedCardBadgeTextActive]}>
                        New Card
                      </Text>
                    </TouchableOpacity>
                  </ScrollView>
                </View>
              )}

              {/* Card Inputs conditional display */}
              {selectedCard ? (
                // Display Readonly Selected Card representation
                <View style={styles.selectedSavedCardWrapper}>
                  <View style={COMMON_STYLES.row}>
                    <Ionicons name="shield-checkmark" size={24} color={COLORS.success} />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={styles.selectedCardLabel}>Paying with Saved Card</Text>
                      <Text style={styles.selectedCardDetails}>
                        {selectedCard.brand} • {selectedCard.cardNumber}
                      </Text>
                    </View>
                  </View>
                </View>
              ) : (
                // Display Card inputs + Save Card Toggle
                <View>
                  <Text style={styles.paymentSecTitle}>Card Details</Text>
                  
                  <Text style={styles.fieldLabel}>Card Number</Text>
                  <View style={styles.cardInputWrapper}>
                    <Ionicons name="card" size={20} color={COLORS.textLight} style={styles.cardIcon} />
                    <TextInput
                      style={styles.cardNoInput}
                      value={cardNumber}
                      onChangeText={(val) => setCardNumber(val.replace(/[^0-9]/g, "").slice(0, 16))}
                      keyboardType="number-pad"
                      placeholder="0000 0000 0000 0000"
                      placeholderTextColor={COLORS.textLight}
                    />
                  </View>

                  <View style={COMMON_STYLES.spaceBetween}>
                    <View style={{ width: "47%" }}>
                      <Text style={styles.fieldLabel}>Expiry Date</Text>
                      <TextInput
                        style={COMMON_STYLES.input}
                        value={expiry}
                        onChangeText={(val) => {
                          let cleaned = val.replace(/[^0-9]/g, "");
                          if (cleaned.length >= 2) {
                            cleaned = cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4);
                          }
                          setExpiry(cleaned.slice(0, 5));
                        }}
                        keyboardType="number-pad"
                        placeholder="MM/YY"
                        placeholderTextColor={COLORS.textLight}
                      />
                    </View>
                    <View style={{ width: "47%" }}>
                      <Text style={styles.fieldLabel}>CVV</Text>
                      <TextInput
                        style={COMMON_STYLES.input}
                        value={cvv}
                        onChangeText={(val) => setCvv(val.replace(/[^0-9]/g, "").slice(0, 3))}
                        keyboardType="number-pad"
                        secureTextEntry
                        placeholder="123"
                        placeholderTextColor={COLORS.textLight}
                      />
                    </View>
                  </View>

                  {/* Save Card Toggle */}
                  {token && (
                    <View style={styles.saveCardToggleRow}>
                      <Text style={styles.saveCardToggleLabel}>Save card for future payments</Text>
                      <Switch
                        value={saveCardToggle}
                        onValueChange={setSaveCardToggle}
                        trackColor={{ false: COLORS.border, true: COLORS.accentLight }}
                        thumbColor={saveCardToggle ? COLORS.accent : COLORS.textLight}
                      />
                    </View>
                  )}
                </View>
              )}

              <TouchableOpacity
                style={[styles.paySubmitBtn, paying && COMMON_STYLES.buttonDisabled]}
                onPress={handlePayFine}
                disabled={paying}
              >
                {paying ? (
                  <ActivityIndicator color={COLORS.white} size="small" />
                ) : (
                  <>
                    <Ionicons name="lock-closed" size={16} color={COLORS.white} style={{ marginRight: 6 }} />
                    <Text style={COMMON_STYLES.buttonText}>
                      Pay LKR {(selectedFine?.category?.amount || 0).toLocaleString()}
                    </Text>
                  </>
                )}
              </TouchableOpacity>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      {/* 2. Detail Modal (For Officer) */}
      <Modal
        visible={detailModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setDetailModalVisible(false)}
      >
        <View style={styles.modalBgCentered}>
          <View style={styles.detailCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Violation Record</Text>
              <TouchableOpacity onPress={() => setDetailModalVisible(false)}>
                <Ionicons name="close" size={24} color={COLORS.textPrimary} />
              </TouchableOpacity>
            </View>

            <ScrollView>
              <View style={styles.detailSec}>
                <Text style={styles.detailSecTitle}>STATUS</Text>
                <View style={[COMMON_STYLES.row, { marginTop: 6 }]}>
                  <View style={[COMMON_STYLES.badge, { backgroundColor: getStatusBgColor(selectedFine?.status) }]}>
                    <Text style={[styles.badgeText, { color: getStatusColor(selectedFine?.status) }]}>
                      {selectedFine?.status}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.detailSec}>
                <Text style={styles.detailLabel}>Reference Number</Text>
                <Text style={styles.detailValueBold}>{selectedFine?.referenceNo}</Text>
              </View>

              <View style={styles.detailSec}>
                <Text style={styles.detailLabel}>Vehicle Plate Number</Text>
                <Text style={styles.detailValue}>{selectedFine?.vehicleNo}</Text>
              </View>

              <View style={styles.detailSec}>
                <Text style={styles.detailLabel}>Driver Details</Text>
                <Text style={styles.detailValue}>Name: {selectedFine?.driverName}</Text>
                <Text style={styles.detailValue}>NIC: {selectedFine?.driverNIC || "N/A"}</Text>
                <Text style={styles.detailValue}>Phone: {selectedFine?.driverPhone || "N/A"}</Text>
              </View>

              <View style={styles.detailSec}>
                <Text style={styles.detailLabel}>Offense Category</Text>
                <Text style={styles.detailValue}>{selectedFine?.category?.name}</Text>
                <Text style={styles.detailValue}>Fine Amount: LKR {selectedFine?.category?.amount}</Text>
              </View>

              <View style={styles.detailSec}>
                <Text style={styles.detailLabel}>Location & Date</Text>
                <Text style={styles.detailValue}>Location: {selectedFine?.location}</Text>
                <Text style={styles.detailValue}>
                  Date: {selectedFine ? new Date(selectedFine.offenseDate).toLocaleString() : ""}
                </Text>
              </View>

              {selectedFine?.notes && (
                <View style={styles.detailSec}>
                  <Text style={styles.detailLabel}>Officer Notes</Text>
                  <Text style={styles.detailValueNotes}>{selectedFine.notes}</Text>
                </View>
              )}
            </ScrollView>

            <TouchableOpacity
              style={styles.closeDetailBtn}
              onPress={() => setDetailModalVisible(false)}
            >
              <Text style={COMMON_STYLES.buttonText}>Dismiss</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  searchHeader: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: COLORS.white,
    marginBottom: 12,
  },
  searchBoxRow: {
    flexDirection: "row",
    height: 48,
  },
  searchInput: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    color: COLORS.textPrimary,
  },
  lookupBtn: {
    backgroundColor: COLORS.accent,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  lookupBtnText: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 15,
  },
  searchIconContainer: {
    backgroundColor: COLORS.white,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  listContent: {
    padding: 20,
    paddingBottom: 40,
  },
  refNo: {
    fontSize: 16,
    fontWeight: "800",
    color: COLORS.primary,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "800",
  },
  cardDivider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 12,
  },
  cardRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  cardLabel: {
    width: 90,
    fontSize: 13,
    color: COLORS.textLight,
    fontWeight: "500",
  },
  cardVal: {
    flex: 1,
    fontSize: 13,
    color: COLORS.textSecondary,
    fontWeight: "600",
  },
  amountVal: {
    color: COLORS.textPrimary,
    fontWeight: "700",
  },
  payNowBtn: {
    backgroundColor: COLORS.accent,
    flexDirection: "row",
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  payNowBtnText: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 14,
    marginLeft: 6,
  },
  detailsBtn: {
    flexDirection: "row",
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  detailsBtnText: {
    color: COLORS.accent,
    fontWeight: "700",
    fontSize: 14,
    marginRight: 4,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  loaderText: {
    marginTop: 12,
    color: COLORS.textSecondary,
    fontSize: 15,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.primary,
    marginTop: 15,
  },
  emptySub: {
    fontSize: 14,
    color: COLORS.textLight,
    textAlign: "center",
    marginTop: 8,
    paddingHorizontal: 30,
    lineHeight: 20,
  },
  // Modal styles
  modalBg: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "flex-end",
  },
  modalBgCentered: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalCard: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: "90%",
    paddingBottom: 20,
  },
  detailCard: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    width: "100%",
    maxHeight: "80%",
    padding: 20,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: COLORS.primary,
  },
  modalScroll: {
    padding: 20,
  },
  invoiceCard: {
    backgroundColor: COLORS.background,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  invoiceTitle: {
    fontSize: 11,
    fontWeight: "800",
    color: COLORS.textLight,
    letterSpacing: 1,
    marginBottom: 10,
  },
  invoiceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  invoiceLabel: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  invoiceValue: {
    fontSize: 13,
    fontWeight: "700",
    color: COLORS.textPrimary,
  },
  invoiceDivider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 10,
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.textPrimary,
  },
  totalValue: {
    fontSize: 16,
    fontWeight: "800",
    color: COLORS.danger,
  },
  paymentSecTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.primary,
    marginTop: 10,
    marginBottom: 12,
  },
  fieldLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  cardInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.cardBackground,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    height: 48,
    paddingHorizontal: 12,
    marginBottom: 15,
  },
  cardIcon: {
    marginRight: 8,
  },
  cardNoInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  paySubmitBtn: {
    ...COMMON_STYLES.button,
    flexDirection: "row",
    height: 50,
    marginTop: 15,
    marginBottom: 20,
  },
  closeDetailBtn: {
    ...COMMON_STYLES.button,
    marginTop: 20,
    height: 48,
  },
  detailSec: {
    marginBottom: 15,
  },
  detailSecTitle: {
    fontSize: 11,
    fontWeight: "800",
    color: COLORS.textLight,
    letterSpacing: 1,
  },
  detailLabel: {
    fontSize: 12,
    color: COLORS.textLight,
    fontWeight: "500",
  },
  detailValue: {
    fontSize: 14,
    color: COLORS.textPrimary,
    fontWeight: "600",
    marginTop: 2,
  },
  detailValueBold: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "800",
    marginTop: 2,
  },
  detailValueNotes: {
    fontSize: 13,
    fontStyle: "italic",
    color: COLORS.textSecondary,
    backgroundColor: COLORS.background,
    padding: 10,
    borderRadius: 8,
    marginTop: 4,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  // Saved cards selector inside checkout styles
  savedCardsBlock: {
    marginBottom: 15,
  },
  savedCardSelectorScroll: {
    flexDirection: "row",
    marginTop: 4,
  },
  savedCardBadge: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10,
    backgroundColor: COLORS.white,
    height: 38,
  },
  savedCardBadgeActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  savedCardBadgeText: {
    color: COLORS.primary,
    fontWeight: "700",
    fontSize: 12,
    marginLeft: 6,
  },
  savedCardBadgeTextActive: {
    color: COLORS.white,
  },
  selectedSavedCardWrapper: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 16,
    marginVertical: 15,
  },
  selectedCardLabel: {
    fontSize: 11,
    color: COLORS.textLight,
    fontWeight: "600",
  },
  selectedCardDetails: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.textPrimary,
    marginTop: 2,
  },
  saveCardToggleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 15,
  },
  saveCardToggleLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.textSecondary,
  },
});
