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
import News from "./src/components/pages/News/News";
import NewsDetail from "./src/components/pages/News/NewsDetail";
import Profile from "./src/components/pages/Account/Profile";
import AdressAPI from "./src/components/AdressAPI";

Entypo.loadFont();

enableScreens();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? (
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let iconColor = focused ? "#000000" : "#bb9457";

              if (route.name === "Home") {
                iconName = "home";
              } else if (route.name === "BirdScreens") {
                iconName = "shop";
              } else if (route.name === "Contact") {
                iconName = "megaphone";
              } else if (route.name === "News") {
                iconName = "news";
              } else if (route.name === "Food") {
                iconName = null;
              } else if (route.name = "Profile"){
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
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{ tabBarLabel: "", headerShown: false }}
          />
          <Tab.Screen name="BirdScreens" options={{ tabBarLabel: "" }}>
            {() => (
              <Stack.Navigator>
                <Stack.Screen
                  name="BirdScreen"
                  component={BirdScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="Accessory" component={AccessoryScreen} />
                <Stack.Screen
                  name="BirdDetail"
                  component={BirdDetail}
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="Food" component={BirdFoodScreen} />
                <Stack.Screen name="Bird" component={BirdScreen} />
                <Stack.Screen name="FoodDetail" component={FoodDetail} />
                <Stack.Screen name="AdressAPI" component={AdressAPI} />
              </Stack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen
            name="Contact"
            component={Contact}
            options={{ tabBarLabel: "" }}
          />
          <Tab.Screen name="News" options={{ tabBarLabel: "" }}>
            {() => (
              <Stack.Navigator>
                <Stack.Screen
                  name="Newss"
                  component={News}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="NewsDetail"
                  component={NewsDetail}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: "" }}/>
            
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ tabBarLabel: "" }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ tabBarLabel: "" }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
