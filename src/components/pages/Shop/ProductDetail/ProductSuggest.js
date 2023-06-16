import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import productSuggest from "../Data/ProductSuggestData";

const ProductSuggest = ({ navigation }) => {
  const windowWidth = Dimensions.get("window").width;
  const itemWidth = windowWidth / 2 - 20; // Width calculation for each item

  return (
    <View style={styles.container}>
      {productSuggest.map((productSuggest) => (
        <View
          key={productSuggest.id}
          style={[styles.productSuggestContainer, { width: itemWidth }]}
        >
          <Image source={productSuggest.image} style={styles.image} />
          <Text
            onPress={() => navigation.navigate("ProductDetail")}
            style={styles.name}
          >
            {productSuggest.name}
          </Text>
          <Text style={styles.price}>{productSuggest.price} VND</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "#FCF8EE",
  },
  productSuggestContainer: {
    backgroundColor: "#ffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: -10,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
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
export default ProductSuggest;
