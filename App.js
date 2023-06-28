import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./src/components/pages/Account/SignIn";

import BirdScreen from "./src/components/pages/Shop/Bird/BirdScreen";
import BirdDetail from "./src/components/pages/Shop/Bird/BirdDetail";
import BirdFoodScreen from "./src/components/pages/Shop/Food/BirdFoodScreen";
import FoodDetail from "./src/components/pages/Shop/Food/FoodDetail";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        {/* thức fix test */}
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Bird" component={BirdScreen} />
        <Stack.Screen name="BirdDetail" component={BirdDetail} />
        <Stack.Screen name="Food" component={BirdFoodScreen} />
        <Stack.Screen name="FoodDetail" component={FoodDetail} />
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
