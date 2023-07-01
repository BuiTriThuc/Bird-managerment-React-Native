import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";
import { Entypo } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./src/components/pages/Account/SignIn";
import BirdScreen from "./src/components/pages/Shop/Bird/BirdScreen";
import BirdDetail from "./src/components/pages/Shop/Bird/BirdDetail";
import BirdFoodScreen from "./src/components/pages/Shop/Food/BirdFoodScreen";
import FoodDetail from "./src/components/pages/Shop/Food/FoodDetail";
import useAuth from "./src/components/hooks/useAuth";
import SignUp from "./src/components/pages/Account/SignUp";
import "./src/ignoreWarnings";
import Booking from "./src/components/layout/Booking";
import AccessoryScreen from "./src/components/pages/Shop/Accessory/AccessoryScreen";
import AccessoryDetail from "./src/components/pages/Shop/Accessory/AccessoryDetail";
import Home from "./src/components/pages/Home";
import Contact from "./src/components/pages/Contact";
import News from "./src/components/pages/News";

Entypo.loadFont();

enableScreens();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  const { user } = useAuth();

  if (user) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let iconColor = focused ? "#000000" : "#bb9457";

              if (route.name === "Home") {
                iconName = "home";
              } else if (route.name === "BirdScreen") {
                iconName = "shop";
              } else if (route.name === "Contact") {
                iconName = "megaphone";
              } else if (route.name === "News") {
                iconName = "news";
              } else if (route.name === "Food") {
                iconName = null;
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
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{ tabBarLabel: "" }}
          />
          <Tab.Screen name="Booking" options={{ tabBarLabel: "" }}>
            {() => (
              <Stack.Navigator>
                <Stack.Screen
                  name="Bird"
                  component={Booking}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="BirdDetail"
                  component={BirdDetail}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Accessory"
                  component={AccessoryScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="AccessoryDetail"
                  component={AccessoryDetail}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Food"
                  component={BirdFoodScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="FoodDetail"
                  component={FoodDetail}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen
            name="Contact"
            component={Contact}
            options={{ tabBarLabel: "" }}
          />
          <Tab.Screen
            name="News"
            component={News}
            options={{ tabBarLabel: "" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let iconColor = focused ? "#000000" : "#bb9457";
              if (route.name === "SignIn") {
                // iconName = "user";
              } else if (route.name === "SignUp") {
                iconName = null;
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
        >
          <Tab.Screen
            name="SignIn"
            component={SignIn}
            options={{ tabBarLabel: "" }}
          />
          <Tab.Screen
            name="SignUp"
            component={SignUp}
            options={{ tabBarLabel: "" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
