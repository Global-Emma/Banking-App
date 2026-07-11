import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const SignIn = () => {
  return (
    <View className="m-auto">
      <Text>SignIn</Text>
      <Link href="/(auth)/sign-up" asChild>
        <Pressable className="bg-blue-500 mt-4 px-4 py-2 rounded active:bg-blue-600 items-center">
          <Text className="text-white font-medium">Go to Sign Up</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default SignIn;
