import React, { useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  const [loaded] = useFonts({
    InterBlack: require("../assets/fonts/Inter-Black.ttf"),
    InterBold: require("../assets/fonts/Inter-Bold.ttf"),
    InterMedium: require("../assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("../assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("../assets/fonts/Inter-SemiBold.ttf"),
    RobotoLite: require("../assets/fonts/Roboto-Lite.ttf"),
    Dela: require("../assets/fonts/DelaGothicOne-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!loaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

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
