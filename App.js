// In App.js in a new project

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens Import
import { HomeScreen, LandingScreen, ReadScreen } from "./screens";
import store from './app/store'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator();

// !!!!! TODO if new user redirect(LandingPage) else redirect(HomePage);

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          initialRouteName="Landing"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Read" component={ReadScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
