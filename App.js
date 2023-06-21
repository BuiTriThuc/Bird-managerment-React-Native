import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import React from "react";
import { enableScreens } from "react-native-screens";
import { Entypo } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/components/pages/Home";
import Contact from "./src/components/pages/Contact";
import News from "./src/components/pages/News";
import Product from "./src/components/pages/Shop/Product";
import SignIn from "./src/components/pages/Account/SignIn";

Entypo.loadFont();

enableScreens();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* ádasdsad ádasdsadádsa */}
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="BirdFood" component={BirdFood} />
        <Stack.Screen name="BirdFoodDetail" component={BirdFoodDetail} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
