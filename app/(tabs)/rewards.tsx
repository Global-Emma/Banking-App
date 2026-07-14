import { COLORS } from "@/utils/data";
import {
    Feather,
    FontAwesome5,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

const Rewards = () => {
  return (
    <View className="bg-app-bg flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Rewards Header */}
        <View className="bg-brand-muted pb-16 pt-6 rounded-b-[40px] px-4">
          {/* Top Title Bar */}
          <View className="flex-row justify-between items-center py-3">
            <Text className="text-charcoal text-4xl font-black tracking-tight">
              Rewards
            </Text>
            <Pressable className="h-9 w-9 rounded-full border border-charcoal/20 items-center justify-center bg-white/40 active:opacity-60">
              <Ionicons
                name="ellipsis-horizontal"
                size={18}
                color={COLORS.charcoal}
              />
            </Pressable>
          </View>

          {/* Cashback & Voucher Metrics Grid */}
          <View className="flex-row justify-between mt-4">
            {/* Cashback Status */}
            <View className="flex-1 pr-4">
              <View className="flex-row items-center gap-1">
                <Text className="text-gray-500 text-xs font-semibold">
                  Cashback
                </Text>
                <Feather name="help-circle" size={12} color="#9CA3AF" />
              </View>
              <Pressable className="flex-row items-center gap-1.5 mt-2 active:opacity-75">
                <FontAwesome5 name="coins" size={18} color="#FFB01D" />
                <Text className="text-charcoal text-2xl font-black">
                  ₦ 1.80
                </Text>
                <MaterialIcons name="chevron-right" size={18} color="#9CA3AF" />
              </Pressable>
            </View>

            {/* Vertical Divider */}
            <View className="w-px bg-charcoal/10 my-1" />

            {/* Voucher Status */}
            <View className="flex-1 pl-6">
              <View className="flex-row items-center gap-1.5">
                <Text className="text-gray-500 text-xs font-semibold">
                  Voucher
                </Text>
                <View className="bg-brand px-1.5 py-0.5 rounded-full">
                  <Text className="text-white text-[9px] font-black">₦270</Text>
                </View>
              </View>
              <Pressable className="flex-row items-center gap-1.5 mt-2 active:opacity-75">
                <MaterialCommunityIcons
                  name="ticket-percent-outline"
                  size={20}
                  color={COLORS.charcoal}
                />
                <Text className="text-charcoal text-2xl font-black">5</Text>
                <MaterialIcons name="chevron-right" size={18} color="#9CA3AF" />
              </Pressable>
            </View>
          </View>
        </View>

        {/* Available Rewards Quick Floating Row */}
        <View className="flex-row justify-between items-center px-4 gap-2.5 -mt-10">
          {[
            {
              label: "Friday Bonus",
              icon: "calendar-star",
              color: "#60A5FA",
              bg: "#EFF6FF",
              lib: "MaterialCommunityIcons",
            },
            {
              label: "Refer Friends",
              icon: "heart-circle-outline",
              color: "#F87171",
              bg: "#FEF2F2",
              lib: "MaterialCommunityIcons",
            },
            {
              label: "Play4aChild",
              icon: "star",
              color: "#FBBF24",
              bg: "#FFFBEB",
              lib: "Feather",
            },
            {
              label: "Voucher Pack",
              icon: "ticket-confirmation-outline",
              color: "#34D399",
              bg: "#ECFDF5",
              lib: "MaterialCommunityIcons",
            },
          ].map((card, index) => (
            <Pressable
              key={index}
              className="bg-white rounded-2xl p-2.5 flex-1 items-center justify-center shadow-sm active:scale-[0.98]"
            >
              <View
                style={{ backgroundColor: card.bg }}
                className="w-12 h-12 rounded-2xl items-center justify-center mb-2"
              >
                {card.lib === "Feather" ? (
                  // @ts-ignore
                  <Feather name={card.icon} size={22} color={card.color} />
                ) : (
                  // @ts-ignore
                  <MaterialCommunityIcons
                    // cast to any to satisfy icon name union type
                    name={card.icon as any}
                    size={24}
                    color={card.color}
                  />
                )}
              </View>
              <Text
                className="text-charcoal text-[10px] font-bold text-center tracking-tight"
                numberOfLines={1}
              >
                {card.label}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Hot Vouchers Section */}
        <View className="px-4 mt-6">
          <View className="flex-row items-center gap-1.5 pb-3">
            <Text className="text-charcoal font-black text-base">
              Hot Vouchers
            </Text>
            <View className="bg-brand/10 p-0.5 rounded">
              <MaterialCommunityIcons
                name="ticket"
                size={14}
                color={COLORS.brand}
              />
            </View>
          </View>

          {/* Card Container */}
          <View className="bg-white rounded-3xl p-4 shadow-sm">
            {/* Tab Toggles */}
            <View className="flex-row items-center gap-5 border-b border-gray-100 pb-3 mb-3">
              <Pressable className="relative pb-1">
                <Text className="text-brand font-bold text-sm">🔥 Hot</Text>
                <View className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand rounded-full" />
              </Pressable>
              <Pressable className="pb-1">
                <Text className="text-gray-400 font-semibold text-sm">
                  Betting
                </Text>
              </Pressable>
            </View>

            {/* Dynamic Coupon Ticket (With dashed border separator styling) */}
            <View className="flex-row bg-[#EBF8F5] rounded-2xl overflow-hidden items-center border border-brand/10">
              {/* Left Value Slot */}
              <View className="w-18.75 py-5 items-center justify-center border-r border-dashed border-brand/30">
                <Text className="text-brand font-extrabold text-lg">₦30</Text>
              </View>

              {/* Right Content Slot */}
              <View className="flex-1 px-4 flex-row items-center justify-between">
                <View className="gap-0.5">
                  <Text className="text-charcoal font-bold text-xs">
                    Betting Voucher
                  </Text>
                  <Text className="text-gray-400 text-[10px]">
                    ₦300 available
                  </Text>
                </View>

                {/* Call To Action */}
                <Pressable className="bg-charcoal px-5 py-1.5 rounded-full active:bg-charcoal/80">
                  <Text className="text-white text-xs font-bold">Use</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>

        {/* Daily Bonus List Directory */}
        <View className="px-4 mt-6">
          <Text className="text-charcoal font-black text-base mb-3">
            Daily Bonus
          </Text>

          <View className="bg-white rounded-3xl p-4 shadow-sm">
            {[
              {
                provider: "Glo Airtime",
                bonus: "+Up to 6%",
                sub: "Buy Airtime and get up to 6% Cashback",
              },
              {
                provider: "9 Mobile Airtime",
                bonus: "+Up to 5%",
                sub: "Buy Airtime and get up to 5% Cashback",
              },
              {
                provider: "MTN/Airtel Airtime",
                bonus: "+Up to 3.5%",
                sub: "Buy Airtime and get up to 3.5% Cashback",
              },
            ].map((item, idx) => (
              <View
                key={idx}
                className={`flex-row items-center py-3 ${idx !== 2 ? "border-b border-gray-100" : ""}`}
              >
                {/* Illustration Stack Placeholder */}
                <View className="bg-gray-50 h-10 w-10 rounded-xl items-center justify-center mr-3">
                  <MaterialIcons name="smartphone" size={20} color="#9CA3AF" />
                </View>

                {/* Middle Info */}
                <View className="flex-1 gap-0.5">
                  <View className="flex-row items-center gap-1">
                    <Text className="text-charcoal font-bold text-sm">
                      {item.provider}
                    </Text>
                    <View className="flex-row items-center gap-0.5 bg-brand/10 px-1 py-0.5 rounded">
                      <FontAwesome5 name="coins" size={8} color="#FFB01D" />
                      <Text className="text-brand font-black text-[9px]">
                        {item.bonus}
                      </Text>
                    </View>
                  </View>
                  <Text className="text-gray-400 text-[10px]" numberOfLines={1}>
                    {item.sub}
                  </Text>
                </View>

                {/* Direct Action Button */}
                <Pressable className="bg-brand px-5 py-1.5 rounded-full active:opacity-80">
                  <Text className="text-white text-xs font-bold">Go</Text>
                </Pressable>
              </View>
            ))}

            {/* Expand Footer View */}
            <Pressable className="flex-row items-center justify-center gap-1 pt-3 border-t border-gray-100 active:opacity-60">
              <Text className="text-charcoal font-bold text-xs">View All</Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={16}
                color={COLORS.charcoal}
              />
            </Pressable>
          </View>
        </View>

        {/* Dynamic Interactive Offer Ad-Banner */}
        <View className="mx-4 mt-6 mb-10 bg-brand-muted rounded-4xl p-6 flex-row items-center justify-between overflow-hidden relative">
          <View className="flex-1 pr-6 z-10">
            <Text className="text-charcoal text-lg font-bold">
              Claim 15 Discounts with
            </Text>
            <Text className="text-brand text-2xl font-black mt-1">
              ₦ 99{" "}
              <Text className="text-charcoal text-lg font-bold">
                on any Bill
              </Text>
            </Text>
            <Pressable className="bg-brand px-5 py-3 rounded-full mt-4 self-start shadow-sm active:opacity-90">
              <Text className="text-white font-extrabold text-xs">
                Claim 15 Discounts
              </Text>
            </Pressable>
          </View>

          {/* Right illustration replica using custom elements */}
          <View className="w-24 h-24 bg-brand/20 rounded-full items-center justify-center relative rotate-12">
            <View className="bg-white w-14 h-20 rounded-xl shadow-md border border-brand/10 p-2 items-center justify-center">
              <Text className="text-[8px] font-bold text-gray-400">
                VOUCHER
              </Text>
              <Text className="text-brand text-base font-black mt-1">530</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Rewards;
