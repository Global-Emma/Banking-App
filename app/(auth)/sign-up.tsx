import api from "@/services/api";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

export default function SignUpScreen() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  // Unified Registration State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    pin: "",
  });

  const handleInputChange = (key: any, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // --- API HANDLERS ---
 const handleRequestOTP = async () => {
  const { fullName, email, phoneNumber } = formData;
  if (!fullName || !email || !phoneNumber) {
    Alert.alert("Validation Error", "Please fill in all identity fields.");
    return;
  }

  setLoading(true);
  try {
    const response = await api.post('/user/send-otp', {
      email: email.trim(),
      phoneNumber: phoneNumber.trim(),
    });

    const data = response.data;

    if (data.success) {
      setStep(2);
    } else {
      Alert.alert("Error", data.message || "Failed to dispatch OTP.");
    }
  } catch (err: any) {
    const errorMessage =
      err.response?.data?.message || "Unable to reach the server. Please check your connection.";
    Alert.alert("Network Error", errorMessage);
  } finally {
    setLoading(false);
  }
};

const handleVerifyOTP = async () => {
  const { email } = formData;
  const cleanOtp = otp?.trim();

  if (!cleanOtp || cleanOtp.length < 6) {
    Alert.alert(
      "Validation Error",
      "Please enter a valid 6-digit verification code."
    );
    return;
  }

  setLoading(true);
  try {
    const response = await api.post('/user/verify-otp', {
      email: email.trim(),
      otp: cleanOtp,
    });

    const data = response.data;

    if (data.success) {
      setStep(3); // Moves step counter forward cleanly
    } else {
      Alert.alert(
        "Verification Failed",
        data.message || "Incorrect OTP code."
      );
    }
  } catch (err: any) {
    const errorMessage =
      err.response?.data?.message || "Unable to complete verification.";
    Alert.alert("Verification Error", errorMessage);
  } finally {
    setLoading(false);
  }
};

const handleFinalRegistration = async () => {
  if (!formData.pin || formData.pin.length < 4) {
    Alert.alert(
      "Validation Error",
      "Please choose a secure 4-digit transaction PIN."
    );
    return;
  }

  setLoading(true);
  try {
    const response = await api.post('/user/register', {
      ...formData,
      email: formData.email.trim(),
      phoneNumber: formData.phoneNumber.trim(),
    });

    const data = response.data;

    if (data.success) {
      Alert.alert("Success 🎉", "Account created successfully!", [
        {
          text: "Login Now",
          onPress: () => router.replace("/(auth)/sign-in"),
        },
      ]);
    } else {
      Alert.alert(
        "Registration Failed",
        data.message || "Error completing registration."
      );
    }
  } catch (err: any) {
    const errorMessage =
      err.response?.data?.message || "Failed to register account.";
    Alert.alert("Registration Error", errorMessage);
  } finally {
    setLoading(false);
  }
};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white px-6"
    >
      {/* Top Header Controls */}
      <View className="flex-row items-center justify-between mt-14 h-10">
        {step > 1 && (
          <Pressable onPress={() => setStep(step - 1)}>
            <Text className="text-base text-gray-500 font-medium">← Back</Text>
          </Pressable>
        )}
        <Text className="text-2xl font-bold text-[#00B57A] text-right flex-1">
          NovaPay
        </Text>
      </View>

      {loading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#00B57A" />
        </View>
      ) : (
        <View className="flex-1 justify-center pb-16">
          {/* SCREEN 1: Identity Data Intake */}
          {step === 1 && (
            <View>
              <Text className="text-2xl font-bold text-[#0E1726] mb-2">
                Create your account
              </Text>
              <Text className="text-sm text-gray-500 mb-8 leading-5">
                Enter your legal details to start setup.
              </Text>

              <TextInput
                className="w-full h-14 border border-gray-200 rounded-lg px-4 text-base text-[#0E1726] mb-4 bg-gray-50"
                placeholder="Full Name"
                placeholderTextColor="#A0AEC0"
                value={formData.fullName}
                onChangeText={(val) => handleInputChange("fullName", val)}
              />
              <TextInput
                className="w-full h-14 border border-gray-200 rounded-lg px-4 text-base text-[#0E1726] mb-4 bg-gray-50"
                placeholder="Email Address"
                placeholderTextColor="#A0AEC0"
                keyboardType="email-address"
                autoCapitalize="none"
                value={formData.email}
                onChangeText={(val) => handleInputChange("email", val)}
              />
              <TextInput
                className="w-full h-14 border border-gray-200 rounded-lg px-4 text-base text-[#0E1726] mb-4 bg-gray-50"
                placeholder="Mobile Number"
                placeholderTextColor="#A0AEC0"
                keyboardType="phone-pad"
                value={formData.phoneNumber}
                onChangeText={(val) => handleInputChange("phoneNumber", val)}
              />

              <Pressable
                className="w-full h-12 bg-[#00B57A] rounded-full justify-center items-center mt-6 shadow-sm"
                onPress={handleRequestOTP}
              >
                <Text className="text-white text-base font-bold tracking-wider">
                  NEXT
                </Text>
              </Pressable>
            </View>
          )}

          {/* SCREEN 2: Verification Code Entry */}
          {step === 2 && (
            <View>
              <Text className="text-2xl font-bold text-[#0E1726] mb-2">
                Verify Your Email
              </Text>
              <Text className="text-sm text-gray-500 mb-8 leading-5">
                A 6-digit verification code was sent to {formData.email}.
              </Text>

              <TextInput
                className="w-full h-14 border border-gray-200 rounded-lg px-4 text-2xl text-[#0E1726] mb-4 bg-gray-50 text-center font-bold tracking-[6px]"
                placeholder="000000"
                placeholderTextColor="#A0AEC0"
                keyboardType="number-pad"
                maxLength={6}
                value={otp}
                onChangeText={(val) => setOtp(val)}
              />

              <Pressable
                className="w-full h-12 bg-brand rounded-full justify-center items-center mt-6 shadow-sm"
                onPress={handleVerifyOTP}
              >
                <Text className="text-white text-base font-bold tracking-wider">
                  VERIFY CODE
                </Text>
              </Pressable>

              <Pressable className="" onPress={handleRequestOTP}>
                <Text className="text-brand font-semibold">Resend Code</Text>
              </Pressable>
            </View>
          )}

          {/* SCREEN 3: Password Entry */}
          {step === 3 && (
            <View>
              <Text className="text-2xl font-bold text-[#0E1726] mb-2">
                Set Login Password
              </Text>
              <Text className="text-sm text-gray-500 mb-8 leading-5">
                Choose a strong password to safeguard access to your wallet.
              </Text>

              <TextInput
                className="w-full h-14 border border-gray-200 rounded-lg px-4 text-base text-[#0E1726] mb-4 bg-gray-50"
                placeholder="New Password"
                placeholderTextColor="#A0AEC0"
                secureTextEntry={true}
                autoCapitalize="none"
                value={formData.password}
                onChangeText={(val) => handleInputChange("password", val)}
              />

              <Pressable
                className="w-full h-12 bg-[#00B57A] rounded-full justify-center items-center mt-6 shadow-sm"
                onPress={() => {
                  if (!formData.password || formData.password.length < 6) {
                    Alert.alert(
                      "Validation Error",
                      "Password must contain at least 6 characters.",
                    );
                    return;
                  }
                  setStep(4);
                }}
              >
                <Text className="text-white text-base font-bold tracking-wider">
                  CONTINUE
                </Text>
              </Pressable>
            </View>
          )}

          {/* SCREEN 4: Security Transaction PIN */}
          {step === 4 && (
            <View>
              <Text className="text-2xl font-bold text-[#0E1726] mb-2">
                Create Transaction PIN
              </Text>
              <Text className="text-sm text-gray-500 mb-8 leading-5">
                Set a secure 4-digit PIN required to process payments and
                transfers.
              </Text>

              <TextInput
                className="w-full h-14 border border-gray-200 rounded-lg px-4 text-2xl text-[#0E1726] mb-4 bg-gray-50 text-center font-bold tracking-[10px]"
                placeholder="****"
                placeholderTextColor="#A0AEC0"
                keyboardType="number-pad"
                maxLength={4}
                secureTextEntry={true}
                value={formData.pin}
                onChangeText={(val) => handleInputChange("pin", val)}
              />

              <Pressable
                className="w-full h-12 bg-[#00B57A] rounded-full justify-center items-center mt-6 shadow-sm"
                onPress={handleFinalRegistration}
              >
                <Text className="text-white text-base font-bold tracking-wider">
                  COMPLETE REGISTRATION
                </Text>
              </Pressable>
            </View>
          )}
        </View>
      )}
      {/* Redirect to SignUp Component */}
      <View className="flex-row justify-center items-center mb-4 mt-8">
        <Text className="text-sm text-gray-500">
          {"Have a NovaPay Account? "}
        </Text>
        <Pressable onPress={() => router.replace("/(auth)/sign-in")}>
          <Text className="text-sm text-[#00B57A] font-bold">Sign In</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
