import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import birdFoods from "../Shop/Data/BirdFoodData";

const Product = ({ navigation }) => {
  const windowWidth = Dimensions.get("window").width;

  return (
    <ScrollView>
      <View style={styles.container}>
        {birdFoods.map((birdFood) => (
          <View
            key={birdFood.id}
            style={[styles.productContainer, { width: windowWidth / 2 - 20 }]}
          >
            <Image source={birdFood.image} style={styles.image} />
            <Text
              onPress={() =>
                navigation.navigate("BirdFoodDetail", { birdFood })
              }
              style={styles.name}
            >
              {birdFood.name}{" "}
            </Text>
            <Text style={styles.price}>{birdFood.price} VND</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 1280,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "#FCF8EE",
    padding: 10,
  },
  productContainer: {
    marginBottom: 20,
    backgroundColor: "#ffff",
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
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderRadius: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  price: {
    fontSize: 18,
    marginBottom: 10,
    color: "red",
  },
});

export default Product;
