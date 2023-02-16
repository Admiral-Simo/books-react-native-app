import { View, Animated, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useRef } from "react";
import Svg, { Circle, G } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default NextButton = ({ percentage, scrollTo }) => {
  const size = 128;

  const strokeWidth = 2;

  const center = size / 2;

  const radius = size / 2 - strokeWidth * 2;

  const circumference = radius * 2 * Math.PI;

  const progressAnimation = useRef(new Animated.Value(0)).current;

  const progressRef = useRef(null);

  const animation = (toValue) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(
      (value) => {
        const strokeDashoffset =
          circumference - (circumference * value.value) / 100;

        if (progressRef?.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [percentage]
    );

    return () => {
        progressAnimation.removeAllListeners();
        }

  },[]);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <Circle
          stroke="#374985"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />

        <Circle
          ref={progressRef}
          stroke="#4a50d4"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
        />
      </Svg>

      <LinearGradient
        colors={["#503e9e", "#3005e8"]}
        style={styles.button}
      >
        <TouchableOpacity onPress={scrollTo} activeOpacity={0.6}>
          <AntDesign name="arrowright" size={32} color="#fff" />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    position: "absolute",
    backgroundColor: "#6443f0",
    borderRadius: 100,
    padding: 20,
  },
});
