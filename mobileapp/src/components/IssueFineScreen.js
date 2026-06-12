import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  FlatList,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, COMMON_STYLES } from "../theme";
import { API_BASE_URL } from "../config";

export default function IssueFineScreen({ token, onFineIssued }) {
  const [plateFormat, setPlateFormat] = useState("modern"); // 'modern' | 'vintage'
  const [vehicleProvince, setVehicleProvince] = useState("");
  const [vehicleLetters, setVehicleLetters] = useState("");
  const [vehicleDigits, setVehicleDigits] = useState("");
  const [vintagePrefix, setVintagePrefix] = useState("");
  const [vintageSuffix, setVintageSuffix] = useState("");
  const [driverIdentifier, setDriverIdentifier] = useState("");
  const [notes, setNotes] = useState("");

  const provinceRef = useRef(null);
  const lettersRef = useRef(null);
  const digitsRef = useRef(null);
  const vintagePrefixRef = useRef(null);
  const vintageSuffixRef = useRef(null);

  // Categories Picker
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(false);

  // Submitting state
  const [submitting, setSubmitting] = useState(false);

  // Confirmation step state
  const [step, setStep] = useState("form"); // 'form' | 'confirm'
  const [resolvedDriver, setResolvedDriver] = useState(null);
  const [resolvingDriver, setResolvingDriver] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoadingCategories(true);
    try {
      const response = await fetch(`${API_BASE_URL}/fine-categories`);
      const resData = await response.json();
      if (response.ok && resData.success) {
        // Filter active categories
        setCategories(resData.data || []);
      }
    } catch (error) {
      console.log("Error loading fine categories:", error);
    } finally {
      setLoadingCategories(false);
    }
  };

  const validateNIC = (val) => {
    if (!val) return false;
    const cleaned = val.trim().toUpperCase();
    if (/^\d{9}[VX]$/.test(cleaned)) {
      const day = parseInt(cleaned.substring(2, 5), 10);
      return (day >= 1 && day <= 365) || (day >= 501 && day <= 865);
    }
    if (/^\d{12}$/.test(cleaned)) {
      const day = parseInt(cleaned.substring(4, 7), 10);
      return (day >= 1 && day <= 365) || (day >= 501 && day <= 865);
    }
    return false;
  };

  const validateDL = (val) => {
    if (!val) return false;
    const cleaned = val.trim().toUpperCase();
    if (/^\d{9,10}[A-Z]$/.test(cleaned)) return true;
    if (/^[A-Z]\d{7,8}$/.test(cleaned)) return true;
    return false;
  };

  const handleReviewFine = async () => {
    if (plateFormat === "modern") {
      const cleanProvince = vehicleProvince.trim().toUpperCase();
      const cleanLetters = vehicleLetters.trim().toUpperCase();
      const cleanDigits = vehicleDigits.trim();

      if (
        !cleanProvince ||
        !cleanLetters ||
        !cleanDigits ||
        !driverIdentifier.trim() ||
        !selectedCategory ||
        !notes.trim()
      ) {
        Alert.alert("Validation Error", "Please fill all required (*) fields.");
        return;
      }

      if (cleanProvince.length !== 2 || !/^[A-Z]{2}$/.test(cleanProvince)) {
        Alert.alert(
          "Validation Error",
          "Provincial Code must be exactly 2 letters (e.g. WP).",
        );
        return;
      }

      if (
        cleanLetters.length < 2 ||
        cleanLetters.length > 3 ||
        !/^[A-Z]{2,3}$/.test(cleanLetters)
      ) {
        Alert.alert(
          "Validation Error",
          "Letter Series must be 2 or 3 letters (e.g. CAB).",
        );
        return;
      }

      if (cleanDigits.length !== 4 || !/^\d{4}$/.test(cleanDigits)) {
        Alert.alert(
          "Validation Error",
          "Numeric Sequence must be exactly 4 digits (e.g. 1234).",
        );
        return;
      }
    } else {
      const cleanPrefix = vintagePrefix.trim();
      const cleanSuffix = vintageSuffix.trim();

      if (
        !cleanPrefix ||
        !cleanSuffix ||
        !driverIdentifier.trim() ||
        !selectedCategory ||
        !notes.trim()
      ) {
        Alert.alert("Validation Error", "Please fill all required (*) fields.");
        return;
      }

      if (!/^\d{1,3}$/.test(cleanPrefix)) {
        Alert.alert(
          "Validation Error",
          "Prefix Number must be 1 to 3 digits (e.g. 1).",
        );
        return;
      }

      if (cleanSuffix.length !== 4 || !/^\d{4}$/.test(cleanSuffix)) {
        Alert.alert(
          "Validation Error",
          "Suffix Number must be exactly 4 digits (e.g. 1234).",
        );
        return;
      }
    }

    const cleanIdentifier = driverIdentifier.trim().toUpperCase();
    if (!validateNIC(cleanIdentifier) && !validateDL(cleanIdentifier)) {
      Alert.alert(
        "Validation Error",
        "Driver identifier must be a valid National Identity Card (NIC) number or Driving License (DL) number.",
      );
      return;
    }

    setResolvingDriver(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/fines/driver-lookup/${cleanIdentifier}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const resData = await response.json();

      if (response.ok && resData.success) {
        setResolvedDriver(resData.data);
        setStep("confirm");
      } else {
        Alert.alert(
          "Motorist Not Found",
          resData.message ||
            "No registered motorist found with the provided NIC or Driving License.",
        );
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "Unable to contact the server to verify motorist details.",
      );
    } finally {
      setResolvingDriver(false);
    }
  };

  const handleIssueFine = async () => {
    let formattedVehicleNo = "";
    if (plateFormat === "modern") {
      const cleanProvince = vehicleProvince.trim().toUpperCase();
      const cleanLetters = vehicleLetters.trim().toUpperCase();
      const cleanDigits = vehicleDigits.trim();
      if (!cleanProvince || !cleanLetters || !cleanDigits) {
        Alert.alert(
          "Validation Error",
          "Please fill all vehicle plate fields.",
        );
        return;
      }
      formattedVehicleNo = `${cleanProvince} ${cleanLetters}-${cleanDigits}`;
    } else {
      const cleanPrefix = vintagePrefix.trim();
      const cleanSuffix = vintageSuffix.trim();
      if (!cleanPrefix || !cleanSuffix) {
        Alert.alert(
          "Validation Error",
          "Please fill all vehicle plate fields.",
        );
        return;
      }
      formattedVehicleNo = `${cleanPrefix} ශ්රී ${cleanSuffix}`;
    }

    if (!driverIdentifier.trim() || !selectedCategory || !notes.trim()) {
      Alert.alert("Validation Error", "Please fill all required (*) fields.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(`${API_BASE_URL}/fines`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          vehicleNo: formattedVehicleNo,
          driverIdentifier: driverIdentifier.trim().toUpperCase(),
          categoryId: selectedCategory.id,
          notes: notes.trim(),
        }),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        Alert.alert("Success", "Traffic fine issued successfully!");

        // Reset form
        setVehicleProvince("");
        setVehicleLetters("");
        setVehicleDigits("");
        setVintagePrefix("");
        setVintageSuffix("");
        setPlateFormat("modern");
        setDriverIdentifier("");
        setNotes("");
        setSelectedCategory(null);
        setStep("form");
        setResolvedDriver(null);

        // Notify parent to refresh list/dashboard if callback exists
        if (onFineIssued) {
          onFineIssued();
        }
      } else {
        Alert.alert("Error", resData.message || "Failed to create fine.");
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "Unable to contact the server. Please verify your connection.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => {
        setSelectedCategory(item);
        setCategoryModalVisible(false);
      }}
    >
      <View style={styles.categoryInfo}>
        <Text style={styles.categoryName}>{item.name}</Text>
        {item.description && (
          <Text style={styles.categoryDesc}>{item.description}</Text>
        )}
      </View>
      <Text style={styles.categoryAmt}>LKR {item.amount.toLocaleString()}</Text>
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={COMMON_STYLES.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>New Fine Notice</Text>
          <Text style={styles.headerSub}>
            Issue an on-the-spot traffic violation ticket.
          </Text>
        </View>

        <View style={styles.formCard}>
          {step === "form" ? (
            <View>
              {/* Vehicle Plate */}
              <Text style={styles.label}>Vehicle Plate Number *</Text>

              {/* Plate Format Selector */}
              <View style={styles.formatSelectorContainer}>
                <TouchableOpacity
                  style={[
                    styles.formatTab,
                    plateFormat === "modern" && styles.activeFormatTab,
                  ]}
                  onPress={() => setPlateFormat("modern")}
                >
                  <Text
                    style={[
                      styles.formatTabText,
                      plateFormat === "modern" && styles.activeFormatTabText,
                    ]}
                  >
                    Modern (English)
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.formatTab,
                    plateFormat === "vintage" && styles.activeFormatTab,
                  ]}
                  onPress={() => setPlateFormat("vintage")}
                >
                  <Text
                    style={[
                      styles.formatTabText,
                      plateFormat === "vintage" && styles.activeFormatTabText,
                    ]}
                  >
                    Vintage (Sinhala ශ්‍රී)
                  </Text>
                </TouchableOpacity>
              </View>

              {plateFormat === "modern" ? (
                <View style={styles.vehicleNoRow}>
                  {/* Province */}
                  <View style={styles.provinceCol}>
                    <TextInput
                      ref={provinceRef}
                      style={[COMMON_STYLES.input, styles.vehicleInputCenter]}
                      placeholder="WP"
                      placeholderTextColor={COLORS.textLight}
                      value={vehicleProvince}
                      onChangeText={(val) => {
                        const cleaned = val
                          .replace(/[^A-Za-z]/g, "")
                          .toUpperCase()
                          .slice(0, 2);
                        setVehicleProvince(cleaned);
                        if (cleaned.length === 2) {
                          lettersRef.current?.focus();
                        }
                      }}
                      maxLength={2}
                      autoCapitalize="characters"
                      disabled={submitting || resolvingDriver}
                    />
                    <Text style={styles.inputHelperText}>Province</Text>
                  </View>

                  {/* Letters */}
                  <View style={styles.lettersCol}>
                    <TextInput
                      ref={lettersRef}
                      style={[COMMON_STYLES.input, styles.vehicleInputCenter]}
                      placeholder="CAB"
                      placeholderTextColor={COLORS.textLight}
                      value={vehicleLetters}
                      onChangeText={(val) => {
                        const cleaned = val
                          .replace(/[^A-Za-z]/g, "")
                          .toUpperCase()
                          .slice(0, 3);
                        setVehicleLetters(cleaned);
                        if (cleaned.length === 3) {
                          digitsRef.current?.focus();
                        }
                      }}
                      maxLength={3}
                      autoCapitalize="characters"
                      disabled={submitting || resolvingDriver}
                    />
                    <Text style={styles.inputHelperText}>Series</Text>
                  </View>

                  {/* Dash separator */}
                  <View style={styles.separatorCol}>
                    <Text style={styles.separatorText}>-</Text>
                  </View>

                  {/* Digits */}
                  <View style={styles.digitsCol}>
                    <TextInput
                      ref={digitsRef}
                      style={[COMMON_STYLES.input, styles.vehicleInputCenter]}
                      placeholder="1234"
                      placeholderTextColor={COLORS.textLight}
                      value={vehicleDigits}
                      onChangeText={(val) => {
                        const cleaned = val.replace(/[^0-9]/g, "").slice(0, 4);
                        setVehicleDigits(cleaned);
                      }}
                      maxLength={4}
                      keyboardType="number-pad"
                      disabled={submitting || resolvingDriver}
                    />
                    <Text style={styles.inputHelperText}>Numbers</Text>
                  </View>
                </View>
              ) : (
                <View style={styles.vehicleNoRow}>
                  {/* Vintage Prefix */}
                  <View style={styles.vintagePrefixCol}>
                    <TextInput
                      ref={vintagePrefixRef}
                      style={[COMMON_STYLES.input, styles.vehicleInputCenter]}
                      placeholder="1"
                      placeholderTextColor={COLORS.textLight}
                      value={vintagePrefix}
                      onChangeText={(val) => {
                        const cleaned = val.replace(/[^0-9]/g, "").slice(0, 3);
                        setVintagePrefix(cleaned);
                        if (cleaned.length === 3) {
                          vintageSuffixRef.current?.focus();
                        }
                      }}
                      maxLength={3}
                      keyboardType="number-pad"
                      disabled={submitting || resolvingDriver}
                    />
                    <Text style={styles.inputHelperText}>Prefix</Text>
                  </View>

                  {/* Sri separator */}
                  <View style={styles.vintageSriCol}>
                    <View style={styles.sriBadge}>
                      <Text style={styles.sriText}>ශ්‍රී</Text>
                    </View>
                  </View>

                  {/* Vintage Suffix */}
                  <View style={styles.vintageSuffixCol}>
                    <TextInput
                      ref={vintageSuffixRef}
                      style={[COMMON_STYLES.input, styles.vehicleInputCenter]}
                      placeholder="1234"
                      placeholderTextColor={COLORS.textLight}
                      value={vintageSuffix}
                      onChangeText={(val) => {
                        const cleaned = val.replace(/[^0-9]/g, "").slice(0, 4);
                        setVintageSuffix(cleaned);
                      }}
                      maxLength={4}
                      keyboardType="number-pad"
                      disabled={submitting || resolvingDriver}
                    />
                    <Text style={styles.inputHelperText}>Suffix</Text>
                  </View>
                </View>
              )}

              {/* Driver NIC or License */}
              <Text style={styles.label}>Driver NIC or License Number *</Text>
              <TextInput
                style={COMMON_STYLES.input}
                placeholder="e.g. 199912345V / B1234567"
                placeholderTextColor={COLORS.textLight}
                value={driverIdentifier}
                onChangeText={setDriverIdentifier}
                autoCapitalize="characters"
                disabled={submitting || resolvingDriver}
              />

              {/* Offense Category Picker */}
              <Text style={styles.label}>Offense Violation *</Text>
              <TouchableOpacity
                style={styles.pickerSelector}
                onPress={() => setCategoryModalVisible(true)}
                disabled={submitting || loadingCategories || resolvingDriver}
              >
                {loadingCategories ? (
                  <ActivityIndicator color={COLORS.accent} size="small" />
                ) : selectedCategory ? (
                  <View style={COMMON_STYLES.spaceBetween}>
                    <View style={{ flex: 1, marginRight: 8 }}>
                      <Text style={styles.selectedCatName}>
                        {selectedCategory.name}
                      </Text>
                      <Text style={styles.selectedCatAmt}>
                        LKR {selectedCategory.amount.toLocaleString()}
                      </Text>
                    </View>
                    <Ionicons name="create" size={18} color={COLORS.accent} />
                  </View>
                ) : (
                  <View style={COMMON_STYLES.spaceBetween}>
                    <Text style={styles.pickerPlaceholder}>
                      Select offense category...
                    </Text>
                    <Ionicons
                      name="chevron-down"
                      size={18}
                      color={COLORS.textLight}
                    />
                  </View>
                )}
              </TouchableOpacity>

              {/* Notes */}
              <Text style={styles.label}>Additional Officer Notes *</Text>
              <TextInput
                style={[COMMON_STYLES.input, styles.notesInput]}
                placeholder="Enter context, road conditions, or details..."
                placeholderTextColor={COLORS.textLight}
                value={notes}
                onChangeText={setNotes}
                multiline
                numberOfLines={3}
                disabled={submitting || resolvingDriver}
              />

              {/* Review Button */}
              <TouchableOpacity
                style={[
                  COMMON_STYLES.button,
                  resolvingDriver && COMMON_STYLES.buttonDisabled,
                ]}
                onPress={handleReviewFine}
                disabled={resolvingDriver}
              >
                {resolvingDriver ? (
                  <ActivityIndicator color={COLORS.white} size="small" />
                ) : (
                  <>
                    <Ionicons
                      name="search"
                      size={20}
                      color={COLORS.white}
                      style={{ marginRight: 8 }}
                    />
                    <Text style={COMMON_STYLES.buttonText}>Review</Text>
                  </>
                )}
              </TouchableOpacity>
            </View>
          ) : (
            // Confirmation Step
            <View>
              <View style={styles.confirmHeader}>
                <Ionicons
                  name="shield-checkmark"
                  size={28}
                  color={COLORS.accent}
                />
                <Text style={styles.confirmTitle}>
                  Confirm Violation Details
                </Text>
                <Text style={styles.confirmSub}>
                  Please verify motorist info before finalizing.
                </Text>
              </View>

              <View style={styles.infoSection}>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Driver Name</Text>
                  <Text style={styles.infoVal}>{resolvedDriver?.name}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Mobile Number</Text>
                  <Text style={styles.infoVal}>{resolvedDriver?.phone}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>NIC / License</Text>
                  <Text style={styles.infoVal}>
                    {resolvedDriver?.nic || resolvedDriver?.dlNo}
                  </Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Vehicle Plate</Text>
                  <Text style={styles.infoVal}>
                    {plateFormat === "modern"
                      ? `${vehicleProvince.trim()} ${vehicleLetters.trim()}-${vehicleDigits.trim()}`.toUpperCase()
                      : `${vintagePrefix.trim()} ශ්රී ${vintageSuffix.trim()}`}
                  </Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Offense</Text>
                  <Text style={styles.infoVal}>{selectedCategory?.name}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Amount Due</Text>
                  <Text style={[styles.infoVal, { color: COLORS.danger }]}>
                    LKR {selectedCategory?.amount.toLocaleString()}
                  </Text>
                </View>
                <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
                  <Text style={styles.infoLabel}>Officer Notes</Text>
                  <Text style={styles.notesVal}>{notes.trim()}</Text>
                </View>
              </View>

              <View style={styles.confirmActions}>
                <TouchableOpacity
                  style={styles.backBtn}
                  onPress={() => setStep("form")}
                  disabled={submitting}
                >
                  <Ionicons
                    name="arrow-back"
                    size={18}
                    color={COLORS.textSecondary}
                  />
                  <Text style={styles.backBtnText}>Back to Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.submitBtn,
                    submitting && COMMON_STYLES.buttonDisabled,
                  ]}
                  onPress={handleIssueFine}
                  disabled={submitting}
                >
                  {submitting ? (
                    <ActivityIndicator color={COLORS.white} size="small" />
                  ) : (
                    <>
                      <Ionicons
                        name="checkmark-circle"
                        size={18}
                        color={COLORS.white}
                        style={{ marginRight: 6 }}
                      />
                      <Text style={COMMON_STYLES.buttonText}>Confirm</Text>
                    </>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Categories Modal Picker */}
      <Modal
        visible={categoryModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setCategoryModalVisible(false)}
      >
        <View style={styles.modalBg}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Violation Offense</Text>
              <TouchableOpacity onPress={() => setCategoryModalVisible(false)}>
                <Ionicons name="close" size={24} color={COLORS.textPrimary} />
              </TouchableOpacity>
            </View>

            <FlatList
              data={categories}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderCategoryItem}
              contentContainerStyle={styles.modalList}
              ListEmptyComponent={
                <View style={styles.emptyModalContainer}>
                  <Text style={styles.emptyModalText}>
                    No active offenses found.
                  </Text>
                </View>
              }
            />
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: COLORS.primary,
  },
  headerSub: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  formCard: {
    ...COMMON_STYLES.card,
    padding: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.textSecondary,
    marginBottom: 6,
    marginLeft: 2,
  },
  pickerSelector: {
    backgroundColor: COLORS.cardBackground,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    justifyContent: "center",
  },
  pickerPlaceholder: {
    color: COLORS.textLight,
    fontSize: 16,
  },
  selectedCatName: {
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.textPrimary,
  },
  selectedCatAmt: {
    fontSize: 13,
    color: COLORS.accent,
    fontWeight: "600",
    marginTop: 2,
  },
  notesInput: {
    height: 80,
    textAlignVertical: "top",
    paddingTop: 12,
  },
  modalBg: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "flex-end",
  },
  modalCard: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: "80%",
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
  modalList: {
    padding: 10,
    paddingBottom: 30,
  },
  categoryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.background,
  },
  categoryInfo: {
    flex: 1,
    marginRight: 10,
  },
  categoryName: {
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.textPrimary,
  },
  categoryDesc: {
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 2,
  },
  categoryAmt: {
    fontSize: 14,
    fontWeight: "800",
    color: COLORS.danger,
  },
  emptyModalContainer: {
    padding: 30,
    alignItems: "center",
  },
  emptyModalText: {
    color: COLORS.textLight,
  },
  confirmHeader: {
    alignItems: "center",
    marginBottom: 20,
    paddingVertical: 12,
    backgroundColor: COLORS.accentLight,
    borderRadius: 16,
  },
  confirmTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: COLORS.primary,
  },
  confirmSub: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  infoSection: {
    marginBottom: 20,
    backgroundColor: COLORS.cardBackground,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  infoRow: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.background,
  },
  infoLabel: {
    width: 100,
    fontSize: 13,
    color: COLORS.textLight,
    fontWeight: "600",
  },
  infoVal: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textPrimary,
    fontWeight: "700",
  },
  notesVal: {
    flex: 1,
    fontSize: 13,
    color: COLORS.textSecondary,
    fontWeight: "500",
  },
  confirmActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  backBtn: {
    width: "47%",
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  backBtnText: {
    color: COLORS.textSecondary,
    fontWeight: "700",
    fontSize: 15,
    marginLeft: 6,
  },
  submitBtn: {
    width: "47%",
    backgroundColor: COLORS.success,
    borderRadius: 12,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  vehicleNoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  provinceCol: {
    width: "22%",
    alignItems: "center",
  },
  lettersCol: {
    width: "28%",
    alignItems: "center",
  },
  separatorCol: {
    width: "6%",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 16,
  },
  separatorText: {
    fontSize: 24,
    fontWeight: "800",
    color: COLORS.textLight,
  },
  digitsCol: {
    width: "38%",
    alignItems: "center",
  },
  vehicleInputCenter: {
    textAlign: "center",
    width: "100%",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 4,
  },
  inputHelperText: {
    fontSize: 10,
    color: COLORS.textLight,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  formatSelectorContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.background,
    borderRadius: 12,
    padding: 4,
    marginBottom: 15,
  },
  formatTab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  activeFormatTab: {
    backgroundColor: COLORS.white,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  formatTabText: {
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.textSecondary,
  },
  activeFormatTabText: {
    color: COLORS.primary,
    fontWeight: "700",
  },
  vintagePrefixCol: {
    width: "25%",
    alignItems: "center",
  },
  vintageSriCol: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 16,
  },
  vintageSuffixCol: {
    width: "40%",
    alignItems: "center",
  },
  sriBadge: {
    backgroundColor: COLORS.accentLight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.accent,
    minWidth: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  sriText: {
    fontSize: 16,
    fontWeight: "800",
    color: COLORS.accent,
  },
});
