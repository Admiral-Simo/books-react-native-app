import React from "react";
import { Text, View } from "react-native";
import BookCards from "../BookCards/BookCards";

const History = () => {
  return (
    <View className="mt-8">
      <View className="py-4 bg-white items-center">
        <Text className="font-inter text-2xl">History</Text>
      </View>
      <BookCards />
    </View>
  );
};

export default History;
