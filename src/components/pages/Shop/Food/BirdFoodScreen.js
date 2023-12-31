import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import FoodData from "../Data/FoodData";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { Button } from "react-native";
import { TouchableHighlight } from "react-native";

export default function BirdFoodScreen({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const [listFavourite, setListFavourite] = useState([]);
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();

  const handlePress = (product) => {
    navigation.navigate("FoodDetail", { product });
  };

  useFocusEffect(
    React.useCallback(() => {
      const updatedData = () => {
        const updatedData = FoodData.map((item) => ({
          ...item,
          favorite: listFavourite.some((fav) => fav.id === item.id),
        }));
        setData(updatedData);
      };

      updatedData();
    }, [listFavourite])
  );

  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableHighlight
          onPress={() => navigation.navigate("Accessory")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Phụ kiện</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate("Bird")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Chim cảnh</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.container}>
        {data.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={[styles.productContainer, { width: windowWidth / 2 - 20 }]}
            onPress={() => handlePress(product)}
            activeOpacity={0.7}
          >
            <Image source={product.image} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "#FCF8EE",
    padding: 10,
  },
  button: {
    backgroundColor: "#F9A529",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  productContainer: {
    marginBottom: 20,
    backgroundColor: "#ECEEF5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: "white",
  },

  image: {
    borderRadius: 5,
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
