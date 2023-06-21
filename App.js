import { StatusBar } from "expo-status-bar";
// <<<<<<< HEAD
// import { StyleSheet, View } from "react-native";
// import React from "react";
// import { enableScreens } from "react-native-screens";
// import { Entypo } from "@expo/vector-icons";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Home from "./src/components/pages/Home";
// import Contact from "./src/components/pages/Contact";
// import News from "./src/components/pages/News";
// import Product from "./src/components/pages/Shop/Product";
// import SignIn from "./src/components/pages/Account/SignIn";

// Entypo.loadFont();

// enableScreens();
// const Tab = createBottomTabNavigator();
// =======
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./src/components/pages/Account/SignIn";
import Product from "./src/components/pages/Shop/Product";
import BirdFood from "./src/components/pages/Shop/BirdFood";
import ProductDetail from "./src/components/pages/Shop/ProductDetail/ProductDetail";
import BirdFoodDetail from "./src/components/pages/Shop/BirdFoodDetail/BirdFoodDetail";
// >>>>>>> main

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconColor = focused ? "#000000" : "#999999";

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Product") {
              iconName = "shop";
            } else if (route.name === "Contact") {
              iconName = "megaphone";
            } else if (route.name === "News") {
              iconName = "news";
            } else if (route.name === "SignIn") {
              iconName = "user";
            }

            return (
              <Entypo
                name={iconName}
                size={size}
                color={iconColor}
                style={{ marginTop: 10 }}
              />
            );
          },
        })}
        tabBarStyle={{
          paddingVertical: 10, // Thêm khoảng cách giữa biểu tượng và đường ngang
        }}
        tabBarOptions={{
          activeTintColor: "#000000", // Màu sắc biểu tượng khi được nhấn vào
          inactiveTintColor: "#999999", // Màu sắc biểu tượng khi không được nhấn vào
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: "" }} />
        <Tab.Screen name="Product" component={Product} options={{ tabBarLabel: "" }} />
        <Tab.Screen name="Contact" component={Contact} options={{ tabBarLabel: "" }} />
        <Tab.Screen name="News" component={News} options={{ tabBarLabel: "" }} />
        <Tab.Screen name="SignIn" component={SignIn} options={{ tabBarLabel: "" }} />
      </Tab.Navigator>

      <Stack.Navigator>
        {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="BirdFood" component={BirdFood} />
        <Stack.Screen name="BirdFoodDetail" component={BirdFoodDetail} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

