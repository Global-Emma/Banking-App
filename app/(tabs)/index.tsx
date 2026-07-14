import "@/global.css";
import { COLORS, DynamicIcon } from "@/utils/data";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { styled } from "nativewind";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

// ==========================================
// 2. CONFIGURATION DATA ARRAYS
// ==========================================
const HEADER_ACTIONS = [
  { id: "support", library: "FontAwesome" as const, name: "headphones" },
  { id: "scan", library: "MaterialCommunityIcons" as const, name: "line-scan" },
  { id: "alerts", library: "FontAwesome" as const, name: "bell-o" },
];

const TRANSACT_OPTIONS = [
  {
    id: "send",
    label: "To Opay",
    library: "MaterialIcons" as const,
    name: "account-box",
  },
  {
    id: "bank",
    label: "To Bank",
    library: "FontAwesome" as const,
    name: "bank",
  },
  {
    id: "cashout",
    label: "Withdraw",
    library: "MaterialCommunityIcons" as const,
    name: "arrow-top-right-bold-box",
  },
];

const SERVICES_GRID = [
  { label: "Airtime", library: "FontAwesome5" as const, name: "signal" },
  {
    label: "Data",
    library: "FontAwesome6" as const,
    name: "arrow-down-up-across-line",
  },
  {
    label: "Betting",
    library: "MaterialCommunityIcons" as const,
    name: "soccer",
  },
  {
    label: "TV",
    library: "MaterialCommunityIcons" as const,
    name: "television-play",
  },
  { label: "SafeBox", library: "Ionicons" as const, name: "wallet-sharp" },
  {
    label: "Loan",
    library: "FontAwesome6" as const,
    name: "hands-holding-circle",
  },
  { label: "Invitation", library: "Ionicons" as const, name: "megaphone" },
  { label: "More", library: "Ionicons" as const, name: "grid" },
];

// safe area view for nativewind styling
const SafeAreaView = styled(RNSafeAreaView);

// ==========================================
// 3. MAIN WORKSPACE COMPONENT
// ==========================================
export default function Home() {
  const [hideBalance, setHideBalance] = useState(false);

  return (
    <SafeAreaView className="bg-app-bg flex-1">
      <ScrollView showsVerticalScrollIndicator={false} className="p-4">
        {/* Name Header */}
        <View className="flex-row justify-between items-center px-2 py-3">
          <View className="flex-row items-center gap-3">
            <View className="bg-brand-muted rounded-full w-12 h-12 items-center justify-center">
              <FontAwesome name="dot-circle-o" size={24} color={COLORS.brand} />
            </View>
            <Text className="text-xl font-bold text-gray-800">
              Hi, <Text className="font-extrabold text-brand">Glory</Text>
            </Text>
          </View>

          {/* Top Header Icons */}
          <View className="flex-row items-center gap-6">
            {HEADER_ACTIONS.map((action) => (
              <Pressable key={action.id} className="active:opacity-60">
                <DynamicIcon
                  library={action.library}
                  name={action.name}
                  size={22}
                  color={COLORS.charcoal}
                />
              </Pressable>
            ))}
          </View>
        </View>

        {/* Balance Wrapper Container */}
        <View className="mt-4">
          <View className="bg-brand p-5 rounded-2xl flex-row justify-between items-center z-10 shadow-sm">
            <View className="gap-2">
              <View className="flex-row items-center gap-2">
                <Ionicons
                  name="shield-checkmark-sharp"
                  size={16}
                  color="white"
                />
                <Text className="text-white/90 text-xs font-medium tracking-wide">
                  Available Balance
                </Text>
                <Pressable
                  onPress={() => setHideBalance(!hideBalance)}
                  hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                  className="p-1"
                >
                  <Ionicons
                    name={hideBalance ? "eye-off-outline" : "eye-outline"}
                    size={18}
                    color="white"
                  />
                </Pressable>
              </View>

              <Pressable className="flex-row items-center gap-1.5 active:opacity-80">
                <Text className="text-white text-2xl font-bold tracking-tight">
                  {hideBalance ? "****" : "₦20,189.85"}
                </Text>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={12}
                  color="white"
                />
              </Pressable>
            </View>

            <View className="items-end gap-3">
              <Pressable className="flex-row items-center gap-1 active:opacity-70">
                <Text className="text-white/90 text-xs font-medium">
                  Transaction History
                </Text>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={10}
                  color="white"
                />
              </Pressable>

              <Pressable className="bg-white px-4 py-2 rounded-full shadow-sm active:bg-gray-50">
                <Text className="text-brand font-bold text-xs">
                  + Add Money
                </Text>
              </Pressable>
            </View>
          </View>
          {/* Visual sub-balance shadow card accent overlay */}
          <View className="bg-brand/20 w-full h-15 rounded-b-2xl mx-auto -mt-4 z-0" />
        </View>

        {/* Primary Transaction Options */}
        <View className="bg-white rounded-2xl flex-row justify-around items-center p-4 mt-4 shadow-sm shadow-white/20">
          {TRANSACT_OPTIONS.map((option) => (
            <Pressable
              key={option.id}
              className="items-center gap-1.5 p-2 active:opacity-60"
            >
              <DynamicIcon
                library={option.library}
                name={option.name}
                size={28}
                color={COLORS.brand}
              />
              <Text className="text-gray-600 text-xs font-semibold">
                {option.label}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Services & Offers Flex Grid */}
        <View className="bg-white rounded-2xl flex-row flex-wrap p-2 mt-4 shadow-sm shadow-white/20">
          {SERVICES_GRID.map((item) => (
            <Pressable
              key={item.name}
              className="w-1/4 items-center justify-center py-3 active:opacity-60"
            >
              <View className="bg-app-bg p-3 rounded-full mb-1.5 items-center justify-center">
                <DynamicIcon
                  library={item.library}
                  name={item.name}
                  size={22}
                  color={COLORS.brand}
                />
              </View>
              <Text
                className="text-gray-700 text-[11px] font-medium text-center tracking-tight px-1"
                numberOfLines={1}
              >
                {item.label}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Secondary Modules placeholders */}
        <View className="bg-white w-full py-8 rounded-2xl mt-4 border-none justify-center items-center shadow-sm shadow-white/20">
          <Text className="text-gray-400 font-medium text-xs">
            Recommendations Box
          </Text>
        </View>

        <View className="bg-white w-full py-6 rounded-2xl mt-4 mb-8 border-none justify-center items-center shadow-sm shadow-white/20">
          <Text className="text-gray-400 font-medium text-xs">
            Referral Program
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
