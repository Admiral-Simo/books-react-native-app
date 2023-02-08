import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Cathegories from "../components/Cathegories/Cathegories";
import { FontAwesome } from "@expo/vector-icons";

<FontAwesome name="search" size={24} color="black" />;

const HomeScreen = () => {
  const [query, setQuery] = useState("");

  const searchHandler = () => {
    // TODO fileter active books by title
    setQuery('');
  };

  return (
    <View className="pt-12 px-3 bg-white flex-1">
      {/* Welcome User */}
      <View className="flex-row justify-between items-center mb-8">
        <View>
          <Text className="text-xl text-red-500">Good</Text>
          <Text className="text-xl text-red-500">Afternoon,</Text>
          <Text className="text-3xl">Diane Lane</Text>
        </View>
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/2363879?v=4",
          }}
          className="w-10 h-10 rounded-xl"
        />
      </View>

      {/* TODO put search Icon left to the text input */}
      <View className="bg-gray-100 flex-row items-center px-4 rounded-lg mb-8">
        <TextInput
          className="py-3 bg-gray-100 rounded-lg flex-1 text-gray-400"
          placeholder="search books..."
          onChangeText={setQuery}
          value={query}
        />
        <TouchableOpacity onPress={searchHandler}>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Cathegories />
    </View>
  );
};

export default HomeScreen;
