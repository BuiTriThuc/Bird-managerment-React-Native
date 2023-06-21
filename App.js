import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./src/components/pages/Account/SignIn";
import Product from "./src/components/pages/Shop/Product";
import BirdFood from "./src/components/pages/Shop/BirdFood";
import ProductDetail from "./src/components/pages/Shop/ProductDetail/ProductDetail";
import BirdFoodDetail from "./src/components/pages/Shop/BirdFoodDetail/BirdFoodDetail";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* asdasd
      asdas  */}
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
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
