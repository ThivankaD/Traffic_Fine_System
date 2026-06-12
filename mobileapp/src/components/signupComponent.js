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

  const handleSignup = async () => {
    if (!name || !email || !password || !nic || !dlNo) {
      Alert.alert("Error", "Please fill all required fields");
      return;
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
          phone: phone.trim() || undefined,
          nic: nic.trim().toUpperCase(),
          dlNo: dlNo.trim().toUpperCase(),
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
