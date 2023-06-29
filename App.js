import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
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

const Stack = createNativeStackNavigator();
export default function App() {
  const { user } = useAuth();

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Bird"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Accessory" component={AccessoryScreen} />
          <Stack.Screen name="AccessoryDetail" component={AccessoryDetail} />
          <Stack.Screen name="Food" component={BirdFoodScreen} />
          <Stack.Screen name="FoodDetail" component={FoodDetail} />
          <Stack.Screen name="Bird" component={BirdScreen} />
          <Stack.Screen name="BirdDetail" component={BirdDetail} />
          <Stack.Screen name="Booking" component={Booking} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SignIn"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
