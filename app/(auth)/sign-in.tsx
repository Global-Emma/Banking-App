import api from "@/services/api";
import { tokenService } from "../../services/tokenService";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";


export default function SignInScreen() {
  const [identifier, setIdentifier] = useState(""); // Holds either Email or Phone Number
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const isWeb = Platform.OS === 'web';
  const handleSignIn = async () => {
    
  if (!identifier || !password) {
    Alert.alert("Validation Error", "Please enter your login details.");
    return;
  }
console.log(identifier, password)
  setLoading(true);
  try {
    const response = await api.post('/user/login', {
      uniqueIdentifier: identifier.trim(),
      password: password,
    });

    const data = response.data;
    console.log(data)
    if (data.success) {
      await tokenService.saveTokens(data.user.accessToken, data.user.refreshToken);
      if (isWeb){
        alert("Login Successful")
      }
      Alert.alert("Welcome Back! 🎉", "Login successful.");
      router.replace("/");
    } else {
      Alert.alert(
        "Authentication Failed",
        data.message || "Invalid credentials."
      );
    }
  } catch (err: any) {
    const errorMessage =
      err.response?.data?.message ||
      "Unable to reach the server. Please check your connection.";

    Alert.alert("Sign In Failed", errorMessage);
    console.log("Sign In Failed", errorMessage);
  } finally {
    setLoading(false);
  }
};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white px-6"
    >
      {/* Top Header Section */}
      <View className="flex-row items-center justify-between mt-14 h-10">
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
          <Text className="text-2xl font-bold text-[#0E1726] mb-2">
            Log in to your account
          </Text>
          <Text className="text-sm text-gray-500 mb-8 leading-5">
            Securely access your wallet ecosystem.
          </Text>

          {/* Combined Identifier Intake */}
          <TextInput
            className="w-full h-14 border border-gray-200 rounded-lg px-4 text-base text-[#0E1726] mb-4 bg-gray-50"
            placeholder="Enter your Mobile No. / Email"
            placeholderTextColor="#A0AEC0"
            keyboardType="email-address"
            autoCapitalize="none"
            value={identifier}
            onChangeText={(val) => setIdentifier(val)}
          />

          {/* Secure Password Intake */}
          <TextInput
            className="w-full h-14 border border-gray-200 rounded-lg px-4 text-base text-[#0E1726] mb-4 bg-gray-50"
            placeholder="Password"
            placeholderTextColor="#A0AEC0"
            secureTextEntry={true}
            autoCapitalize="none"
            value={password}
            onChangeText={(val) => setPassword(val)}
          />

          {/* Utility Links */}
          <View className="flex-row justify-between items-center mb-6 px-1">
            <TouchableOpacity
              onPress={() =>
                Alert.alert("Help", "Contact support to recover details.")
              }
            >
              <Text className="text-xs text-gray-400">
                Lost Details?{" "}
                <Text className="text-[#00B57A] font-medium">Change Now</Text>
              </Text>
            </TouchableOpacity>
          </View>

          {/* Action Trigger */}
          <TouchableOpacity
            className="w-full h-12 bg-[#00B57A] rounded-full justify-center items-center shadow-sm"
            onPress={handleSignIn}
          >
            <Text className="text-white text-base font-bold tracking-wider">
              NEXT
            </Text>
          </TouchableOpacity>

          {/* Redirect to SignUp Component */}
          <View className="flex-row justify-center items-center mt-8">
            <Text className="text-sm text-gray-500">
              {"Don't have a NovaPay Account yet? "}
            </Text>
            <TouchableOpacity onPress={() => router.replace("/(auth)/sign-up")}>
              <Text className="text-sm text-[#00B57A] font-bold">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}
