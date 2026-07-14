import { COLORS } from "@/utils/data";
import {
    AntDesign,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MeScreen = () => {
  const [hideBalance, setHideBalance] = useState(true);

  // Group 1 Options Data
  const ACCOUNT_OPTIONS = [
    {
      title: "Transaction History",
      subtext: "",
      icon: "file-document-outline",
      iconColor: "#00B57A",
      badge: null,
    },
    {
      title: "Account Limits",
      subtext: "View your transaction limits",
      icon: "speedometer",
      iconColor: "#00B57A",
      badge: null,
    },
    {
      title: "Bank Card/Account",
      subtext: "1 linked card/account",
      icon: "credit-card-outline",
      iconColor: "#00B57A",
      badge: null,
    },
    {
      title: "My BizPayment",
      subtext: "Receive payment for business",
      icon: "storefront-outline",
      iconColor: "#00B57A",
      badge: "Fast TFR",
    },
    {
      title: "OJunior",
      subtext: "Create an account for your child/ward",
      icon: "account-child-outline",
      iconColor: "#00B57A",
      badge: null,
    },
    {
      title: "EaseMoni+",
      subtext: "Buy Now Pay Later",
      icon: "wallet-outline",
      iconColor: "#00B57A",
      badge: "Enjoy ₦0",
    },
  ];

  // Group 2 Options Data
  const SUPPORT_OPTIONS = [
    {
      title: "Security Center",
      subtext: "Protect your funds",
      icon: "shield-checkmark-outline",
      iconColor: "#00B57A",
      isIonicons: true,
    },
    {
      title: "Customer Service Center",
      subtext: "",
      icon: "headset-outline",
      iconColor: "#00B57A",
      isIonicons: true,
    },
    {
      title: "Invitation",
      subtext: "Invite friends and earn up to ₦6,300 Bonus",
      icon: "party-popper",
      iconColor: "#00B57A",
    },
    {
      title: "OPay USSD",
      subtext: "",
      icon: "phone-star",
      iconColor: "#00B57A",
    },
    {
      title: "Rate Us",
      subtext: "",
      icon: "star-face",
      iconColor: "#00B57A",
    },
  ];

  return (
    <SafeAreaView className="bg-gray-50 flex-1" edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Dynamic Header Section with Minty Gradient Background */}
        <View className="bg-linear-to-b from-[#E6F7F4] via-[#F1FAF8] to-gray-50 px-4 pt-4 pb-6 relative">
          {/* Top Row: User Meta Info & Settings icon */}
          <View className="flex-row justify-between items-start">
            <View className="flex-row items-center gap-3">
              {/* Profile Avatar Frame */}
              <View className="w-14 h-14 rounded-full bg-white border border-brand/20 items-center justify-center shadow-sm">
                <View className="w-10 h-10 rounded-full bg-brand/5 items-center justify-center">
                  <MaterialCommunityIcons
                    name="face-man-profile"
                    size={28}
                    color={COLORS.brand}
                  />
                </View>
              </View>

              {/* Greeting Name & Tier Level */}
              <View className="gap-1">
                <Text className="text-charcoal text-xl font-black">
                  Hi, GLORY
                </Text>
                <View className="bg-[#FFF6E6] border border-[#FFE7C2] px-2 py-0.5 rounded-full flex-row items-center gap-1 self-start">
                  <View className="bg-[#E5A93C] w-3 h-3 rounded-full items-center justify-center">
                    <Text className="text-white text-[7px] font-black">3</Text>
                  </View>
                  <Text className="text-[#92400E] text-[10px] font-black">
                    Tier 3
                  </Text>
                </View>
              </View>
            </View>

            {/* Config Hexagon button */}
            <Pressable className="h-9 w-9 rounded-full items-center justify-center active:opacity-60 mt-1">
              <Ionicons
                name="settings-outline"
                size={22}
                color={COLORS.charcoal}
              />
            </Pressable>
          </View>

          {/* Interactive Balance Panel Row */}
          <View className="flex-row justify-between items-center mt-6">
            <View className="gap-1">
              <View className="flex-row items-center gap-1.5">
                <Text className="text-gray-500 text-xs font-bold">
                  Total Balance
                </Text>
                <Pressable
                  onPress={() => setHideBalance(!hideBalance)}
                  hitSlop={12}
                >
                  <Ionicons
                    name={hideBalance ? "eye-off-outline" : "eye-outline"}
                    size={14}
                    color={COLORS.charcoal}
                  />
                </Pressable>
              </View>
              <Text className="text-charcoal text-3xl font-black tracking-tight">
                {hideBalance ? "****" : "₦140,580.00"}
              </Text>

              <View className="flex-row items-center mt-1">
                <Text className="text-gray-400 text-[10px] font-semibold">
                  Interest Credited Today{" "}
                  <Text className="text-brand font-black">
                    {hideBalance ? "****" : "₦38.45"}
                  </Text>
                </Text>
              </View>
            </View>

            {/* Concentric Glow Shield Security Badge */}
            <View className="items-center justify-center relative w-20 h-20">
              <View className="absolute w-20 h-20 rounded-full bg-[#00B57A]/10 border border-[#00B57A]/20" />
              <View className="absolute w-16 h-16 rounded-full bg-[#00B57A]/15 items-center justify-center">
                <View className="w-12 h-12 rounded-full bg-brand items-center justify-center shadow-md">
                  <Ionicons name="shield-checkmark" size={24} color="white" />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Dynamic Safety Banner Section */}
        <View className="mx-4 bg-brand px-4 py-3.5 rounded-3xl flex-row items-center justify-between shadow-sm">
          <View className="flex-row items-center gap-2.5 flex-1 pr-2">
            <View className="bg-yellow-400 p-1.5 rounded-xl">
              <AntDesign name="warning" size={14} color="white" />
            </View>
            <View className="gap-0.5">
              <Text className="text-white font-black text-xs">
                7 Safety Tips
              </Text>
              <Text className="text-white/80 text-[10px] font-medium">
                Make your account more secure.
              </Text>
            </View>
          </View>
          <Pressable className="bg-white px-4 py-1.5 rounded-full active:opacity-90">
            <Text className="text-brand font-black text-xs">View</Text>
          </Pressable>
        </View>

        {/* Group 1 Option Card Container */}
        <View className="mx-4 mt-4 bg-white rounded-3xl p-4 shadow-sm border border-gray-100/50">
          {ACCOUNT_OPTIONS.map((item, idx) => (
            <Pressable
              key={idx}
              className={`flex-row items-center py-4 active:opacity-60 ${
                idx !== ACCOUNT_OPTIONS.length - 1
                  ? "border-b border-gray-100"
                  : ""
              }`}
            >
              {/* Left Side Icon Frame */}
              <View className="bg-[#EBF8F5] w-9 h-9 rounded-xl items-center justify-center mr-3">
                <MaterialCommunityIcons
                  name={item.icon as any}
                  size={18}
                  color={item.iconColor}
                />
              </View>

              {/* Label Titles */}
              <View className="flex-1 gap-0.5">
                <Text className="text-charcoal font-black text-xs">
                  {item.title}
                </Text>
                {item.subtext !== "" && (
                  <Text className="text-gray-400 text-[10px] font-semibold">
                    {item.subtext}
                  </Text>
                )}
              </View>

              {/* Right Side Accessories (Badges / Chevron) */}
              <View className="flex-row items-center gap-1">
                {item.badge && (
                  <View className="bg-[#FF4D4D] px-2 py-1 rounded-full">
                    <Text className="text-white text-[8px] font-black uppercase tracking-tight">
                      {item.badge}
                    </Text>
                  </View>
                )}
                <MaterialIcons name="chevron-right" size={18} color="#D1D5DB" />
              </View>
            </Pressable>
          ))}
        </View>

        {/* Group 2 Option Card Container */}
        <View className="mx-4 mt-4 mb-10 bg-white rounded-3xl p-4 shadow-sm border border-gray-100/50">
          {SUPPORT_OPTIONS.map((item, idx) => (
            <Pressable
              key={idx}
              className={`flex-row items-center py-4 active:opacity-60 ${
                idx !== SUPPORT_OPTIONS.length - 1
                  ? "border-b border-gray-100"
                  : ""
              }`}
            >
              {/* Left Side Icon Frame */}
              <View className="bg-[#EBF8F5] w-9 h-9 rounded-xl items-center justify-center mr-3">
                {item.isIonicons ? (
                  <Ionicons
                    name={item.icon as any}
                    size={18}
                    color={item.iconColor}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name={item.icon as any}
                    size={18}
                    color={item.iconColor}
                  />
                )}
              </View>

              {/* Label Titles */}
              <View className="flex-1 gap-0.5">
                <Text className="text-charcoal font-black text-xs">
                  {item.title}
                </Text>
                {item.subtext !== "" && (
                  <Text className="text-gray-400 text-[10px] font-semibold leading-3">
                    {item.subtext}
                  </Text>
                )}
              </View>

              {/* Right Side Accessories */}
              <MaterialIcons name="chevron-right" size={18} color="#D1D5DB" />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MeScreen;
