// In App.js in a new project

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens Import
import { HomeScreen, LandingScreen, ReadScreen } from "./screens";

const Stack = createNativeStackNavigator();

// !!!!! TODO if new user redirect(LandingPage) else redirect(HomePage);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Read" component={ReadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
