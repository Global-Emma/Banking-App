import { COLORS } from "@/utils/data";
import {
    Feather,
    FontAwesome5,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Finance = () => {
  const [activeTab, setActiveTab] = useState<"savings" | "loan">("savings");
  const [hideBalance, setHideBalance] = useState(true);

  const QUICK_PRODUCTS = [
    { label: "OWealth", icon: "chart-line", color: "#00B57A", badge: null },
    { label: "Targets", icon: "target", color: "#00B57A", badge: null },
    {
      label: "SafeBox",
      icon: "safe-square-outline",
      color: "#00B57A",
      badge: null,
    },
    { label: "Fixed", icon: "lock-clock", color: "#00B57A", badge: "New" },
    {
      label: "Spend & Save",
      icon: "sack-percent",
      color: "#00B57A",
      badge: null,
    },
  ];

  return (
    <SafeAreaView className="bg-app-bg flex-1" edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row justify-between items-center px-4 pt-4 pb-2">
          <Text className="text-charcoal text-3xl font-black">Finance</Text>
          <Pressable className="h-9 w-9 rounded-full items-center justify-center active:opacity-60">
            <Ionicons
              name="settings-outline"
              size={22}
              color={COLORS.charcoal}
            />
          </Pressable>
        </View>

        {/* Interactive Tab Switcher */}
        <View className="flex-row items-center gap-6 px-4 mb-4">
          <Pressable
            onPress={() => setActiveTab("savings")}
            className="relative pb-1 active:opacity-75"
          >
            <Text
              className={`font-black text-base ${activeTab === "savings" ? "text-charcoal" : "text-gray-400 font-bold"}`}
            >
              Savings
            </Text>
            {activeTab === "savings" && (
              <View className="absolute bottom-0 left-0 right-0 h-0.75 bg-brand rounded-full" />
            )}
          </Pressable>

          <Pressable
            onPress={() => setActiveTab("loan")}
            className="relative pb-1 flex-row items-center gap-1 active:opacity-75"
          >
            <Text
              className={`font-black text-base ${activeTab === "loan" ? "text-charcoal" : "text-gray-400 font-bold"}`}
            >
              Loan
            </Text>
            <View className="bg-[#FF4D4D] px-1.5 py-0.5 rounded-full">
              <Text className="text-white text-[8px] font-black tracking-tighter">
                Hot
              </Text>
            </View>
            {activeTab === "loan" && (
              <View className="absolute bottom-0 left-0 right-0 h-0.75 bg-brand rounded-full" />
            )}
          </Pressable>
        </View>

        {/* Conditional View Rendering based on active tab state */}
        {activeTab === "savings" ? (
          <>
            {/* Primary Balance Container */}
            <View className="mx-4 bg-[#EBF8F5] rounded-3xl overflow-hidden pb-2.5 shadow-sm">
              <View className="bg-brand p-5 rounded-3xl">
                <View className="flex-row justify-between items-center">
                  <View className="flex-row items-center gap-1.5">
                    <Text className="text-white/80 text-[11px] font-semibold">
                      Total Balance
                    </Text>
                    <Pressable
                      onPress={() => setHideBalance(!hideBalance)}
                      hitSlop={12}
                    >
                      <Ionicons
                        name={hideBalance ? "eye-off-outline" : "eye-outline"}
                        size={14}
                        color="white"
                      />
                    </Pressable>
                  </View>
                  <Text className="text-white/80 text-[11px] font-semibold">
                    Interest Credited Today
                  </Text>
                </View>

                <View className="flex-row justify-between items-center mt-2.5">
                  <Text className="text-white text-3xl font-black tracking-tight">
                    {hideBalance ? "****" : "₦140,580.00"}
                  </Text>
                  <Pressable className="flex-row items-center gap-0.5 active:opacity-80">
                    <Text className="text-white text-sm font-black">
                      {hideBalance ? "****" : "₦38.45"}
                    </Text>
                    <MaterialIcons
                      name="chevron-right"
                      size={16}
                      color="white"
                    />
                  </Pressable>
                </View>

                <Pressable className="bg-white/15 self-start px-3 py-1.5 rounded-full mt-4 flex-row items-center gap-1 active:opacity-90">
                  <Text className="text-white text-[10px] font-semibold">
                    Estimate interest {hideBalance ? "₦**" : "₦2,400"}/month,
                    Beats {hideBalance ? "**%" : "95%"} of others
                  </Text>
                  <MaterialIcons name="chevron-right" size={12} color="white" />
                </Pressable>
              </View>

              <Pressable className="flex-row items-center justify-center gap-1 pt-3 pb-1 active:opacity-60">
                <Text className="text-brand font-extrabold text-xs">
                  View Assets Breakdown
                </Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={16}
                  color={COLORS.brand}
                />
              </Pressable>
            </View>

            {/* Savings Products Row */}
            <View className="flex-row justify-between px-4 py-6 bg-white mt-4 shadow-sm">
              {QUICK_PRODUCTS.map((prod, idx) => (
                <Pressable
                  key={idx}
                  className="items-center relative flex-1 active:opacity-75"
                >
                  {prod.badge && (
                    <View className="absolute -top-3.5 right-1 z-10 bg-[#FF4D4D] px-1 rounded-md">
                      <Text className="text-white text-[8px] font-extrabold">
                        {prod.badge}
                      </Text>
                    </View>
                  )}
                  <View className="bg-brand/5 w-11 h-11 rounded-full items-center justify-center mb-1.5">
                    <MaterialCommunityIcons
                      name={prod.icon as any}
                      size={22}
                      color={prod.color}
                    />
                  </View>
                  <Text className="text-charcoal text-[10px] font-bold text-center tracking-tight">
                    {prod.label}
                  </Text>
                </Pressable>
              ))}
            </View>

            {/* Exclusive Rewards Section */}
            <View className="mx-4 mt-4 bg-[#EBF8F5] rounded-3xl p-4 border border-brand/5 shadow-sm">
              <View className="flex-row justify-between items-center mb-1">
                <Text className="text-charcoal font-black text-sm">
                  Your Exclusive Rewards !
                </Text>
                <Pressable className="flex-row items-center active:opacity-60">
                  <Text className="text-gray-400 text-xs font-bold mr-0.5">
                    View All
                  </Text>
                  <MaterialIcons
                    name="chevron-right"
                    size={14}
                    color="#9CA3AF"
                  />
                </Pressable>
              </View>
              <Text className="text-gray-500 text-[10px] font-medium mb-3">
                Complete tasks and earn cash rewards.
              </Text>

              <View className="bg-white rounded-2xl p-3 flex-row items-center justify-between border border-brand/5 shadow-sm">
                <View className="flex-row items-center flex-1 pr-2">
                  <View className="bg-[#EFF6FF] h-9 w-9 rounded-xl items-center justify-center mr-2.5">
                    <FontAwesome5
                      name="money-bill-wave"
                      size={16}
                      color={COLORS.brand}
                    />
                  </View>
                  <View className="gap-0.5 flex-1">
                    <View className="flex-row items-center gap-1 flex-wrap">
                      <Text className="text-charcoal font-black text-xs">
                        Make a Spend & Save Deposit
                      </Text>
                      <Feather name="help-circle" size={12} color="#9CA3AF" />
                    </View>
                    <Text className="text-brand font-black text-xs">
                      Reward: ₦100
                    </Text>
                  </View>
                </View>

                <View className="items-end gap-1">
                  <Text className="text-brand text-[9px] font-black">
                    To be Signed-up
                  </Text>
                  <Pressable className="bg-brand px-4 py-2 rounded-full active:opacity-90 shadow-sm">
                    <Text className="text-white text-xs font-black">
                      Sign-up Now
                    </Text>
                  </Pressable>
                </View>
              </View>

              <View className="flex-row justify-center gap-1 mt-3">
                <View className="h-1.5 w-3 rounded-full bg-brand" />
                <View className="h-1.5 w-1.5 rounded-full bg-gray-300" />
              </View>
            </View>

            {/* Promo Banner Card */}
            <View className="mx-4 mt-4 bg-linear-to-r from-neutral-900 to-emerald-950 rounded-3xl p-5 shadow-md relative overflow-hidden">
              <View className="flex-row justify-between items-start z-10">
                <View className="flex-1 pr-4">
                  <Text className="text-[#FFD875] text-lg font-black tracking-wide">
                    Saving Challenge 2026
                  </Text>
                  <Text className="text-white text-xs font-semibold mt-1">
                    Start small daily, finish big in 2026
                  </Text>
                  <Pressable className="bg-[#FFE39A] px-5 py-2 rounded-full mt-4 self-start active:opacity-90">
                    <Text className="text-neutral-900 text-[10px] font-black tracking-tight">
                      START SAVING NOW
                    </Text>
                  </Pressable>
                </View>
                <View className="items-center relative w-20">
                  <View className="bg-brand/10 h-16 w-16 rounded-full items-center justify-center border border-[#FFE39A]/20">
                    <FontAwesome5 name="coins" size={28} color="#FFE39A" />
                  </View>
                </View>
              </View>
              <View className="border-t border-white/10 mt-5 pt-3 flex-row items-center justify-between">
                <View className="flex-row items-center gap-1">
                  <MaterialCommunityIcons
                    name="shield-check"
                    size={10}
                    color="white"
                  />
                  <Text className="text-white/60 text-[7px] font-medium">
                    Licensed by CBN
                  </Text>
                </View>
                <Text className="text-white/60 text-[7px] font-medium">
                  Insured by the NDIC
                </Text>
                <Text className="text-white/60 text-[7px] font-medium">
                  Powered by OPay MFB
                </Text>
              </View>
            </View>

            {/* Grid Card Section */}
            <View className="mx-4 mt-4 mb-6 flex-row gap-3">
              <View className="flex-1 bg-white rounded-3xl p-4 shadow-sm justify-between min-h-42.5">
                <View>
                  <Text className="text-brand font-black text-lg leading-tight">
                    10,000,000{"\n"}
                    <Text className="text-charcoal font-black">
                      Savers Here
                    </Text>
                  </Text>
                  <Text className="text-gray-400 text-[10px] font-semibold mt-2 leading-tight">
                    Save with OPay and fulfil your dreams with ease
                  </Text>
                </View>
                <View className="mt-4">
                  <Pressable className="bg-brand px-4 py-2 rounded-full self-start active:opacity-85 shadow-sm">
                    <Text className="text-white text-xs font-black">
                      Join Now
                    </Text>
                  </Pressable>
                </View>
              </View>

              <View className="flex-1 gap-3">
                <View className="bg-white rounded-3xl p-4 shadow-sm flex-1 justify-center">
                  <Text className="text-brand font-black text-sm">SafeBox</Text>
                  <Text className="text-gray-400 text-[10px] font-semibold mt-1">
                    Flexible savings with 15% p.a.
                  </Text>
                </View>
                <View className="bg-white rounded-3xl p-4 shadow-sm flex-1 justify-center relative overflow-hidden">
                  <View className="flex-row items-center gap-1.5 flex-wrap">
                    <Text className="text-brand font-black text-sm">
                      Big Friday
                    </Text>
                    <View className="bg-[#FF4D4D] px-1 rounded-md">
                      <Text className="text-white text-[7px] font-extrabold tracking-tighter">
                        NEW
                      </Text>
                    </View>
                  </View>
                  <Text className="text-gray-400 text-[10px] font-semibold mt-1">
                    Get 25% p.a. every Friday!
                  </Text>
                </View>
              </View>
            </View>
          </>
        ) : (
          /* Loan Section Screen View */
          <View className="px-4 gap-4 mt-1">
            {/* EaseMoni Primary Card */}
            <View className="bg-linear-to-br from-emerald-400 to-emerald-500 rounded-3xl p-5 shadow-sm overflow-hidden relative bg-brand">
              <View className="flex-row justify-between items-center mb-3">
                <View className="flex-row items-center gap-1.5">
                  <View className="bg-white/20 p-1.5 rounded-lg">
                    <MaterialCommunityIcons
                      name="flash"
                      size={16}
                      color="white"
                    />
                  </View>
                  <Text className="text-white text-2xl font-black tracking-tight">
                    EaseMoni
                  </Text>
                </View>
                <FontAwesome5 name="coins" size={26} color="#FFE39A" />
              </View>

              <View className="bg-white rounded-2xl p-4 flex-row items-center justify-between shadow-sm">
                <View className="gap-0.5">
                  <Text className="text-gray-400 text-[10px] font-bold">
                    Get a loan up to(₦)
                  </Text>
                  <Text className="text-brand font-black text-2xl">
                    3,000,000
                  </Text>
                </View>
                <Pressable className="bg-brand px-6 py-2.5 rounded-full active:opacity-90 shadow-sm">
                  <Text className="text-white font-black text-xs">Apply</Text>
                </Pressable>
              </View>
            </View>

            {/* EaseMoni+ Buy Now Pay Later Card */}
            <View className="bg-linear-to-r from-amber-100 to-amber-50 rounded-3xl p-5 shadow-sm border border-amber-200/50 bg-[#FFFBEB]">
              <View className="flex-row items-center gap-1 mb-2">
                <MaterialCommunityIcons
                  name="card-account-details-outline"
                  size={18}
                  color="#92400E"
                />
                <Text className="text-[#92400E] font-black text-base">
                  EaseMoni+
                </Text>
              </View>

              <View className="flex-row items-center justify-between my-2">
                <View className="gap-0.5">
                  <Text className="text-[#451A03] font-black text-2xl leading-tight">
                    Buy Now
                  </Text>
                  <Text className="text-[#451A03] font-black text-2xl leading-tight">
                    Pay Later.
                  </Text>
                </View>
                <Pressable className="bg-[#593005] px-6 py-2.5 rounded-full active:opacity-90 shadow-sm">
                  <Text className="text-white font-black text-xs">Apply</Text>
                </Pressable>
              </View>

              <View className="bg-brand rounded-2xl p-3 mt-3 flex-row items-center justify-around">
                <Text className="text-white font-extrabold text-[11px] mr-2">
                  WHAT CAN{"\n"}YOU BUY ?
                </Text>
                {[
                  { label: "Airtime", icon: "signal" },
                  { label: "Data", icon: "phone-portrait" },
                  { label: "Tv", icon: "tv" },
                  { label: "More", icon: "grid" },
                ].map((item, idx) => (
                  <View key={idx} className="items-center gap-0.5">
                    <View className="bg-white/20 p-2 rounded-full">
                      <Ionicons
                        name={item.icon as any}
                        size={14}
                        color="white"
                      />
                    </View>
                    <Text className="text-white text-[9px] font-semibold">
                      {item.label}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Regulatory Footer */}
            <View className="items-center justify-center py-6">
              <Text className="text-gray-400 text-[10px] font-semibold">
                All loans services are powered by OPay Microfinance Bank Ltd.
              </Text>
            </View>
          </View>
        )}

        {/* Regulatory footer for savings view */}
        {activeTab === "savings" && (
          <View className="flex-row items-center justify-center gap-1 mb-10 mt-1 px-4">
            <MaterialCommunityIcons
              name="shield-check"
              size={14}
              color={COLORS.brand}
            />
            <Text className="text-gray-400 text-[9px] font-semibold text-center">
              OWealth and Savings are Powered by OPay MicroFinance Bank Ltd.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Finance;
