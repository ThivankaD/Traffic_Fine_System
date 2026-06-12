import React, { useState, useEffect } from "react";
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
  const [vehicleNo, setVehicleNo] = useState("");
  const [driverIdentifier, setDriverIdentifier] = useState("");
  const [notes, setNotes] = useState("");
  
  // Categories Picker
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(false);
  
  // Submitting state
  const [submitting, setSubmitting] = useState(false);

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

  const handleIssueFine = async () => {
    if (!vehicleNo.trim() || !driverIdentifier.trim() || !selectedCategory || !notes.trim()) {
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
          vehicleNo: vehicleNo.trim().toUpperCase(),
          driverIdentifier: driverIdentifier.trim().toUpperCase(),
          categoryId: selectedCategory.id,
          notes: notes.trim(),
        }),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        Alert.alert("Success", "Traffic fine issued successfully!");
        
        // Reset form
        setVehicleNo("");
        setDriverIdentifier("");
        setNotes("");
        setSelectedCategory(null);

        // Notify parent to refresh list/dashboard if callback exists
        if (onFineIssued) {
          onFineIssued();
        }
      } else {
        Alert.alert("Error", resData.message || "Failed to create fine.");
      }
    } catch (error) {
      Alert.alert("Error", "Unable to contact the server. Please verify your connection.");
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
        {item.description && <Text style={styles.categoryDesc}>{item.description}</Text>}
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
          <Text style={styles.headerSub}>Issue an on-the-spot traffic violation ticket.</Text>
        </View>

        <View style={styles.formCard}>
          {/* Vehicle Plate */}
          <Text style={styles.label}>Vehicle Plate Number *</Text>
          <TextInput
            style={COMMON_STYLES.input}
            placeholder="e.g. WP CAB-1234"
            placeholderTextColor={COLORS.textLight}
            value={vehicleNo}
            onChangeText={setVehicleNo}
            autoCapitalize="characters"
            disabled={submitting}
          />

          {/* Driver NIC or License */}
          <Text style={styles.label}>Driver NIC or License Number *</Text>
          <TextInput
            style={COMMON_STYLES.input}
            placeholder="e.g. 199912345V / B1234567"
            placeholderTextColor={COLORS.textLight}
            value={driverIdentifier}
            onChangeText={setDriverIdentifier}
            autoCapitalize="characters"
            disabled={submitting}
          />

          {/* Offense Category Picker */}
          <Text style={styles.label}>Offense Violation *</Text>
          <TouchableOpacity
            style={styles.pickerSelector}
            onPress={() => setCategoryModalVisible(true)}
            disabled={submitting || loadingCategories}
          >
            {loadingCategories ? (
              <ActivityIndicator color={COLORS.accent} size="small" />
            ) : selectedCategory ? (
              <View style={COMMON_STYLES.spaceBetween}>
                <View style={{ flex: 1, marginRight: 8 }}>
                  <Text style={styles.selectedCatName}>{selectedCategory.name}</Text>
                  <Text style={styles.selectedCatAmt}>LKR {selectedCategory.amount.toLocaleString()}</Text>
                </View>
                <Ionicons name="create" size={18} color={COLORS.accent} />
              </View>
            ) : (
              <View style={COMMON_STYLES.spaceBetween}>
                <Text style={styles.pickerPlaceholder}>Select offense category...</Text>
                <Ionicons name="chevron-down" size={18} color={COLORS.textLight} />
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
            disabled={submitting}
          />

          {/* Submit Button */}
          <TouchableOpacity
            style={[COMMON_STYLES.button, submitting && COMMON_STYLES.buttonDisabled]}
            onPress={handleIssueFine}
            disabled={submitting}
          >
            {submitting ? (
              <ActivityIndicator color={COLORS.white} size="small" />
            ) : (
              <>
                <Ionicons name="checkbox-outline" size={20} color={COLORS.white} style={{ marginRight: 8 }} />
                <Text style={COMMON_STYLES.buttonText}>Submit Violation Fine</Text>
              </>
            )}
          </TouchableOpacity>
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
                  <Text style={styles.emptyModalText}>No active offenses found.</Text>
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
});
