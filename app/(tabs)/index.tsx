import "@/global.css";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styled } from "nativewind";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function Home() {
  return (
    <SafeAreaView className="bg-white h-full p-4">
      {/* Name Header */}
      <View className="flex-row justify-between">
        <View className="flex-row items-center gap-2 justify-center">
          <View className="bg-white/20 border rounded-full w-12 h-12 flex items-center justify-center">
            <FontAwesome name="dot-circle-o" size={24} color="#1DCF9F" />
          </View>
          <Text className="text-xl bg-white uppercase font-bold text-center">
            Hi, <Text className="uppercase">Glory</Text>
          </Text>
        </View>
        <View className="flex-row items-center gap-8">
          <FontAwesome name="headphones" size={24} color="black" />
          <FontAwesome name="barcode" size={24} color="black" />
          <FontAwesome name="bell-o" size={24} color="black" />
        </View>
      </View>
      {/* Balance */}
      <View className="bg-[#1DCF9F] z-10 w-full h-25 rounded-xl mt-4"></View>
      {/* sub-balance */}
      <View className="bg-[#B7B7B7] w-full h-15 rounded-xl mt-[-14]"></View>
      {/* recent transactions */}
      <View className="bg-[#B7B7B7] w-full h-35 rounded-xl mt-4"></View>
      {/* transaction options */}
      <View className="bg-[#B7B7B7] w-full h-25 rounded-xl mt-4"></View>
      {/* offers */}
      <View className="bg-[#B7B7B7] w-full h-45 rounded-xl mt-4"></View>
      {/* recommendations */}
      <View className="bg-[#B7B7B7] w-full h-35 rounded-xl mt-4"></View>
      {/* referral */}
      <View className="bg-[#B7B7B7] w-full h-20 rounded-xl mt-4"></View>
    </SafeAreaView>
  );
}
