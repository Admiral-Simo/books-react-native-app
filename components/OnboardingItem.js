import React, { useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";

import { useFonts } from "expo-font";

export default OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />

      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    flex: 0.6,
    justifyContent: "center",
  },

  title: {
    fontSize: 25,
    marginBottom: 40,
    color: "#fff",
    textAlign: "center",
    fontFamily: "Dela",
  },

  description: {
    color: "#6573ae",
    fontFamily: "RobotoLite",
    fontSize: 15,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
