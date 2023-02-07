// New User Page
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const LandingScreen = () => {
  return (
    <View className="flex-1">
      <Image
        style={styles.backgroundImage}
        source={require("../assets/images/fadi.png")}
        className='h-full w-full absolute'
      />
      <View>
        <View className="font-bold">
          <Text className="text-white">Learn Freely with Bookly</Text>
          <Text className="text-red-500">Your way to unlimited knowledge</Text>
          <Text className="text-red-500">Your way to unlimited knowledge</Text>
          <Text className="text-red-500">Your way to unlimited knowledge</Text>
          <Text className="text-red-500">Your way to unlimited knowledge</Text>
          <Text>
            This App Allows you to read full screen and tracks your book
            progress So You Don't have to worry about yourself losing focus.
          </Text>
        </View>
        <View>
          <Text>Get Started </Text>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: "stretch",
  },
});
