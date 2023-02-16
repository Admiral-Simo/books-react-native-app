import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveCathegory } from "../../app/features/cathegorySlice";
import { setActiveCathegory } from "../../app/features/cathegorySlice";

const Cathegories = () => {
  const dispatch = useDispatch();
  const activeCathegory = useSelector(selectActiveCathegory);

  const changeCathegory = (input) => {
    dispatch(setActiveCathegory(input));
  };

  return (
    <View className="justify-around flex-row">
      <TouchableOpacity
        className="pb-3"
        onPress={() => changeCathegory("toread")}
      >
        <Text className="font-inter" style={{fontFamily: 'InterBlack'}}>To Read</Text>
        {activeCathegory === "toread" && (
          <View className="absolute bottom-0 w-full bg-red-500 h-0.5" />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        className="pb-3"
        onPress={() => changeCathegory("reading")}
      >
        <Text className="font-inter" style={{fontFamily: 'InterBlack'}}>Reading</Text>
        {activeCathegory === "reading" && (
          <View className="absolute bottom-0 w-full bg-red-500 h-0.5" />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        className="pb-3"
        onPress={() => changeCathegory("completed")}
      >
        <Text className="font-inter" style={{fontFamily: 'InterBlack'}}>Completed Read</Text>
        {activeCathegory === "completed" && (
          <View className="absolute bottom-0 w-full bg-red-500 h-0.5" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Cathegories;
