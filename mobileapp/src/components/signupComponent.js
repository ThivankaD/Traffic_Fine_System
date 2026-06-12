import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { API_BASE_URL } from "../config";
import { COLORS, COMMON_STYLES } from "../theme";

export default function SignupComponent({ onLoginPress }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dlNo, setDlNo] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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

  const normalizeAndValidatePhone = (val) => {
    if (!val) return null;
    const clean = val.replace(/[^0-9+]/g, "").trim();
    let normalized = clean;
    if (clean.startsWith("+94") && clean.length === 12) {
      normalized = clean;
    } else if (clean.startsWith("94") && clean.length === 11) {
      normalized = "+" + clean;
    } else if (clean.startsWith("0") && clean.length === 10) {
      normalized = "+94" + clean.substring(1);
    } else if (clean.length === 9) {
      normalized = "+94" + clean;
    }
    if (/^\+94\d{9}$/.test(normalized)) {
      return normalized;
    }
    return null;
  };

  const validateDL = (val) => {
    if (!val) return false;
    const cleaned = val.trim().toUpperCase();
    if (/^\d{9,10}[A-Z]$/.test(cleaned)) return true;
    if (/^[A-Z]\d{7,8}$/.test(cleaned)) return true;
    return false;
  };

  const handleSignup = async () => {
    if (!name.trim() || !email.trim() || !password || !nic.trim() || !dlNo.trim()) {
      Alert.alert("Error", "Please fill all required fields");
      return;
    }

    const normalizedNic = nic.trim().toUpperCase();
    if (!validateNIC(normalizedNic)) {
      Alert.alert(
        "Validation Error",
        "Invalid NIC format. Must be old format (9 digits + V/X) or new format (12 digits) with valid birth day."
      );
      return;
    }

    const normalizedDl = dlNo.trim().toUpperCase();
    if (!validateDL(normalizedDl)) {
      Alert.alert(
        "Validation Error",
        "Invalid Driving License format. Must be 9-10 digits followed by a letter, or a letter followed by 7-8 digits."
      );
      return;
    }

    let normalizedPhone = undefined;
    if (phone.trim()) {
      normalizedPhone = normalizeAndValidatePhone(phone);
      if (!normalizedPhone) {
        Alert.alert(
          "Validation Error",
          "Invalid mobile number format. Please check and try again."
        );
        return;
      }
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          password,
          phone: normalizedPhone,
          nic: normalizedNic,
          dlNo: normalizedDl,
        }),
      });

      const payload = await response.json();

      if (!response.ok || !payload.success) {
        throw new Error(payload.message || "Signup failed");
      }

      Alert.alert("Success", "Account created successfully! Please log in.", [
        {
          text: "OK",
          onPress: () => {
            // Automatically redirect back to login screen
            onLoginPress();
          },
        },
      ]);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>Traffic Fine System</Text>
        <Text style={styles.subtitle}>Create your motorist account</Text>

        <Text style={styles.label}>Full Name *</Text>
        <TextInput
          style={COMMON_STYLES.input}
          placeholder="John Doe"
          placeholderTextColor={COLORS.textLight}
          value={name}
          onChangeText={setName}
          disabled={loading}
        />

        <Text style={styles.label}>Email Address *</Text>
        <TextInput
          style={COMMON_STYLES.input}
          placeholder="email@example.com"
          placeholderTextColor={COLORS.textLight}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          disabled={loading}
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={COMMON_STYLES.input}
          placeholder="e.g. +94771234567"
          placeholderTextColor={COLORS.textLight}
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
          disabled={loading}
        />

        <Text style={styles.label}>NIC Number *</Text>
        <TextInput
          style={COMMON_STYLES.input}
          placeholder="e.g. 199912345V"
          placeholderTextColor={COLORS.textLight}
          value={nic}
          onChangeText={setNic}
          autoCapitalize="characters"
          disabled={loading}
        />

        <Text style={styles.label}>Driving License Number *</Text>
        <TextInput
          style={COMMON_STYLES.input}
          placeholder="e.g. B1234567"
          placeholderTextColor={COLORS.textLight}
          value={dlNo}
          onChangeText={setDlNo}
          autoCapitalize="characters"
          disabled={loading}
        />

        <Text style={styles.label}>Password *</Text>
        <TextInput
          style={COMMON_STYLES.input}
          placeholder="Minimum 6 characters"
          placeholderTextColor={COLORS.textLight}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          disabled={loading}
        />

        <TouchableOpacity
          style={[COMMON_STYLES.button, loading && COMMON_STYLES.buttonDisabled]}
          onPress={handleSignup}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color={COLORS.white} size="small" />
          ) : (
            <Text style={COMMON_STYLES.buttonText}>Sign Up</Text>
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={onLoginPress} disabled={loading}>
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.loginLink}>Login here</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  card: {
    ...COMMON_STYLES.card,
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  title: {
    ...COMMON_STYLES.title,
    color: COLORS.primary,
  },
  subtitle: {
    ...COMMON_STYLES.subtitle,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.textSecondary,
    marginBottom: 6,
    marginLeft: 2,
  },
  loginBtn: {
    marginTop: 20,
    alignSelf: "center",
  },
  loginText: {
    color: COLORS.textSecondary,
    fontSize: 15,
  },
  loginLink: {
    color: COLORS.accent,
    fontWeight: "700",
  },
});
