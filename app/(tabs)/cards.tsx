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

const CardsScreen = () => {
  const [activeTab, setActiveTab] = useState<"physical" | "virtual">(
    "physical",
  );

  // Options configuration for Virtual Card section
  const GRID_OPTIONS = [
    {
      label: "Details",
      icon: "card-bulleted-settings-outline",
      color: "#00B57A",
      badge: false,
    },
    {
      label: "Card Settings",
      icon: "credit-card-cog-outline",
      color: "#00B57A",
      badge: false,
    },
    {
      label: "Manage Dispute",
      icon: "alert-octagon-outline",
      color: "#00B57A",
      badge: false,
    },
    {
      label: "Customize Card",
      icon: "palette-outline",
      color: "#00B57A",
      badge: true,
    },
    {
      label: "Manage Online Merchant",
      icon: "store-cog-outline",
      color: "#00B57A",
      badge: true,
    },
    {
      label: "Transactions",
      icon: "script-text-outline",
      color: "#00B57A",
      badge: false,
    },
  ];

  return (
    <SafeAreaView className="bg-app-bg flex-1" edges={["top"]}>
      {/* Scrollable Container */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {/* Header */}
        <View className="flex-row justify-between items-center px-4 pt-4 pb-2">
          <Text className="text-charcoal text-3xl font-black">Cards</Text>
          <Pressable className="active:opacity-60">
            <Text className="text-brand font-black text-sm">Q&A</Text>
          </Pressable>
        </View>

        {/* Dynamic Tab Selector */}
        <View className="flex-row justify-center items-center relative py-4 px-4 gap-12">
          {/* Physical Card Tab */}
          <Pressable
            onPress={() => setActiveTab("physical")}
            className="items-center relative pb-2 min-w-25"
          >
            {/* Promo Badge */}
            <View className="absolute -top-3.5 bg-[#FF4D4D] px-2 py-0.5 rounded-full z-10">
              <Text className="text-white text-[8px] font-black tracking-wider">
                30% OFF
              </Text>
            </View>
            <Text
              className={`font-black text-base ${activeTab === "physical" ? "text-charcoal" : "text-gray-400 font-bold"}`}
            >
              Physical Card
            </Text>
            {activeTab === "physical" && (
              <View className="absolute bottom-0 h-0.75 w-12 bg-charcoal rounded-full" />
            )}
          </Pressable>

          {/* Virtual Card Tab */}
          <Pressable
            onPress={() => setActiveTab("virtual")}
            className="items-center relative pb-2 min-w-25"
          >
            <Text
              className={`font-black text-base ${activeTab === "virtual" ? "text-charcoal" : "text-gray-400 font-bold"}`}
            >
              Virtual Card
            </Text>
            {activeTab === "virtual" && (
              <View className="absolute bottom-0 h-0.75 w-12 bg-charcoal rounded-full" />
            )}
          </Pressable>
        </View>

        {/* 1. PHYSICAL CARD TAB VIEW */}
        {activeTab === "physical" && (
          <View className="flex-1 px-4 pb-24">
            {/* Card Preview Area */}
            <View className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 items-center">
              {/* Product Type Label Badge */}
              <View className="bg-[#EBF8F5] px-4 py-1 rounded-full mb-4">
                <Text className="text-brand text-[10px] font-black">
                  OPay Verve Classic
                </Text>
              </View>

              {/* Physical Card Visual Mockup */}
              <View className="w-full aspect-[1.58/1] bg-slate-50 border border-slate-100 rounded-2xl p-4 justify-between relative overflow-hidden">
                {/* Simulated geometric landscape background */}
                <View className="absolute bottom-0 left-0 right-0 h-2/5 flex-row items-end justify-center opacity-80">
                  <View className="w-12 h-16 bg-[#00B57A]/10 rounded-t-full mx-1 border border-[#00B57A]/20" />
                  <View className="w-16 h-20 bg-[#00B57A]/20 rounded-t-full mx-1 border border-[#00B57A]/30" />
                  <View className="w-10 h-12 bg-[#00B57A]/15 rounded-t-full mx-1 border border-[#00B57A]/25" />
                </View>

                {/* Top Row: Logos */}
                <View className="flex-row justify-between items-center z-10">
                  <View className="flex-row items-center gap-1">
                    <View className="w-5 h-5 rounded-full bg-[#00B57A] items-center justify-center">
                      <View className="w-2.5 h-2.5 rounded-full bg-white" />
                    </View>
                    <Text className="text-[#0e1726] text-xl font-black italic">
                      OPay
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-1">
                    <View className="w-5 h-5 rounded-full bg-red-500 opacity-90" />
                    <View className="w-5 h-5 rounded-full bg-blue-700 -ml-3 opacity-90" />
                    <Text className="text-slate-800 text-[10px] font-extrabold italic">
                      Verve
                    </Text>
                  </View>
                </View>

                {/* Card Chip & Micro-graphics */}
                <View className="z-10 mt-2">
                  <View className="w-8 h-6 bg-[#E5A93C]/80 rounded-md border border-[#D4982B]" />
                </View>

                {/* Bottom Graphic Lines */}
                <View className="z-10 flex-row justify-between items-end">
                  <Text className="text-slate-400 text-[8px] font-bold">
                    Classic Debit
                  </Text>
                  <Text className="text-slate-400 text-[8px] font-bold">
                    •••• 5214
                  </Text>
                </View>
              </View>
            </View>

            {/* Benefits Feature List */}
            <View className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mt-4 gap-5">
              {/* Feature 1 */}
              <View className="flex-row gap-4">
                <View className="w-10 h-10 rounded-2xl bg-brand/5 items-center justify-center">
                  <MaterialCommunityIcons
                    name="credit-card-outline"
                    size={20}
                    color={COLORS.brand}
                  />
                </View>
                <View className="flex-1">
                  <Text className="text-charcoal font-black text-sm">
                    Free Application and Usage
                  </Text>
                  <Text className="text-gray-400 text-[11px] font-bold mt-0.5">
                    <Text className="text-brand font-black">Free</Text>{" "}
                    application and{" "}
                    <Text className="text-brand font-black">Zero</Text>{" "}
                    maintenance fees
                  </Text>
                </View>
              </View>

              {/* Feature 2 */}
              <View className="flex-row gap-4">
                <View className="w-10 h-10 rounded-2xl bg-brand/5 items-center justify-center">
                  <Feather name="globe" size={20} color={COLORS.brand} />
                </View>
                <View className="flex-1">
                  <Text className="text-charcoal font-black text-sm">
                    Works Everywhere
                  </Text>
                  <Text className="text-gray-400 text-[11px] font-bold mt-0.5 leading-4">
                    Accepted globally for online payments, POS, and ATM
                    transactions, including{" "}
                    <Text className="text-brand font-black">Google Play</Text>,{" "}
                    <Text className="text-brand font-black">Netflix</Text>,{" "}
                    <Text className="text-brand font-black">SHEIN</Text>,{" "}
                    <Text className="text-brand font-black">Uber</Text> and more
                  </Text>
                </View>
              </View>

              {/* Feature 3 */}
              <View className="flex-row gap-4">
                <View className="w-10 h-10 rounded-2xl bg-brand/5 items-center justify-center">
                  <MaterialCommunityIcons
                    name="gift-outline"
                    size={20}
                    color={COLORS.brand}
                  />
                </View>
                <View className="flex-1">
                  <Text className="text-charcoal font-black text-sm">
                    Exclusive Benefits
                  </Text>
                  <Text className="text-gray-400 text-[11px] font-bold mt-0.5">
                    Enjoy{" "}
                    <Text className="text-brand font-black">
                      special offers and discounts
                    </Text>{" "}
                    at selected merchants
                  </Text>
                </View>
              </View>

              {/* Feature 4 */}
              <View className="flex-row gap-4">
                <View className="w-10 h-10 rounded-2xl bg-brand/5 items-center justify-center">
                  <Ionicons
                    name="shield-checkmark-outline"
                    size={20}
                    color={COLORS.brand}
                  />
                </View>
                <View className="flex-1">
                  <Text className="text-charcoal font-black text-sm">
                    Maximum Security
                  </Text>
                  <Text className="text-gray-400 text-[11px] font-bold mt-0.5">
                    <Text className="text-brand font-black">CBN</Text> licensed,{" "}
                    <Text className="text-brand font-black">NDIC</Text> Insured
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}

        {/* 2. VIRTUAL CARD TAB VIEW */}
        {activeTab === "virtual" && (
          <View className="flex-1 px-4 pb-6">
            {/* Card & Details Pill Container */}
            <View className="items-center mb-6">
              {/* Premium Gold Virtual Card Mockup */}
              <View className="w-full aspect-[1.58/1] bg-linear-to-tr from-amber-500 via-yellow-400 to-amber-300 rounded-3xl p-5 justify-between relative shadow-md overflow-hidden border border-yellow-200/40">
                {/* Dynamic metallic landmarks watermark lines */}
                <View className="absolute bottom-0 left-0 right-0 h-1/2 opacity-25 flex-row items-end justify-center">
                  <View className="w-14 h-24 bg-amber-950 border-t border-amber-950 mx-1" />
                  <View className="w-20 h-28 bg-amber-950 border-t border-amber-950 mx-1" />
                  <View className="w-12 h-16 bg-amber-950 border-t border-amber-950 mx-1" />
                </View>

                {/* Top Row: OPay Logo */}
                <View className="flex-row justify-between items-center z-10">
                  <Text className="text-white text-2xl font-black italic tracking-tighter">
                    OPay
                  </Text>
                </View>

                {/* Middle Row: Label */}
                <View className="z-10 mt-4">
                  <Text className="text-yellow-900/60 text-xs font-black uppercase tracking-widest">
                    Virtual Card
                  </Text>
                </View>

                {/* Bottom Row: Verve branding */}
                <View className="flex-row justify-between items-end z-10">
                  <Text className="text-yellow-900/60 text-sm font-black">
                    DEBIT
                  </Text>
                  <View className="flex-row items-center gap-1 bg-white/20 px-2 py-1 rounded-lg">
                    <View className="w-4 h-4 rounded-full bg-red-600 opacity-90" />
                    <View className="w-4 h-4 rounded-full bg-blue-800 -ml-2.5 opacity-90" />
                    <Text className="text-white text-[10px] font-black italic">
                      Verve
                    </Text>
                  </View>
                </View>
              </View>

              {/* Masked Card Identifier Pill */}
              <Pressable className="flex-row items-center justify-center gap-1 bg-white border border-gray-100 rounded-full px-4 py-2 mt-4 shadow-sm active:opacity-80">
                <Text className="text-charcoal font-black text-xs">
                  507872******9298
                </Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={16}
                  color={COLORS.charcoal}
                />
              </Pressable>
            </View>

            {/* Quick Actions Control Grid (2x3 Layout) */}
            <View className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex-row flex-wrap gap-y-6">
              {GRID_OPTIONS.map((opt, idx) => (
                <Pressable
                  key={idx}
                  className="w-[33.33%] items-center relative active:opacity-75"
                >
                  {/* Badge */}
                  {opt.badge && (
                    <View className="absolute -top-1.5 right-[10%] bg-[#FF4D4D] px-1 rounded-md z-10">
                      <Text className="text-white text-[7px] font-black uppercase">
                        New
                      </Text>
                    </View>
                  )}
                  {/* Action Icon */}
                  <View className="bg-brand/5 w-11 h-11 rounded-full items-center justify-center mb-1.5">
                    <MaterialCommunityIcons
                      name={opt.icon as any}
                      size={20}
                      color={opt.color}
                    />
                  </View>
                  {/* Action Text Label */}
                  <Text className="text-charcoal text-[10px] font-bold text-center px-2">
                    {opt.label}
                  </Text>
                </Pressable>
              ))}
            </View>

            {/* Premium Dynamic Promo Banner */}
            <View className="bg-linear-to-r from-emerald-500 to-teal-600 rounded-3xl p-5 mt-4 shadow-sm relative overflow-hidden flex-row items-center justify-between">
              <View className="flex-1 pr-4 z-10">
                <Text className="text-white text-base font-black">
                  Global Online Payments
                </Text>
                <Text className="text-white/80 text-[10px] font-semibold mt-1 leading-4">
                  Pay for your SHEIN, Glovo, and Codashop orders easily with
                  your OPay card
                </Text>
                <Pressable className="bg-neutral-900 px-4 py-1.5 rounded-full mt-3 self-start active:opacity-90">
                  <Text className="text-white text-[10px] font-black">
                    Explore Now
                  </Text>
                </Pressable>
              </View>

              {/* Floating stylized background decorations */}
              <View className="w-16 h-16 rounded-2xl bg-white/10 rotate-45 absolute -right-4 top-2" />
              <View className="w-8 h-8 rounded-full bg-yellow-400 items-center justify-center absolute right-6 bottom-4">
                <FontAwesome5 name="coins" size={14} color="white" />
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Floating Sticky Bottom Bar for Physical Card Tab */}
      {activeTab === "physical" && (
        <View className="absolute bottom-0 left-0 right-0 bg-white/95 border-t border-gray-100 p-4 items-center gap-1.5">
          <View className="bg-[#EBF8F5] px-3 py-1 rounded-full">
            <Text className="text-brand text-[9px] font-black">
              30% Discount expires in{" "}
              <Text className="text-emerald-500 font-extrabold">
                18 Days 12h
              </Text>
            </Text>
          </View>
          <Pressable className="w-full bg-[#00B57A] py-3.5 rounded-full flex-row justify-center items-center gap-2 active:opacity-95 shadow-md">
            <View className="bg-[#FFE39A] w-4 h-4 rounded-full items-center justify-center">
              <FontAwesome5 name="coins" size={8} color="#92400E" />
            </View>
            <Text className="text-white font-black text-sm">Get It Now</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CardsScreen;
