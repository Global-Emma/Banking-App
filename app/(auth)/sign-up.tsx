import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const SignUp = () => {
  return (
    <View className="m-auto">
      <Text>Sign Up</Text>
      <Link href="/(auth)/sign-in" asChild>
        <Pressable className="bg-blue-500 mt-4 px-4 py-2 rounded active:bg-blue-600 items-center">
          <Text className="text-white font-medium">Go to Sign In</Text>
        </Pressable>
      </Link>
      <Link href="/" asChild>
        <Pressable className="bg-blue-500 mt-4 px-4 py-2 rounded active:bg-blue-600 items-center">
          <Text className="text-white font-medium">Go to Home</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default SignUp;
