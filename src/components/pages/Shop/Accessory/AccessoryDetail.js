import React, { useEffect } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import CountButton from "../../Shop/CountButton";
import AccessoryCarosel from "./AccessoryCarosel";
import AccessorySuggest from "./AccessorySuggest";
import { useContext } from "react";
import { CartContext } from "../../../provider/CartProvider";
import ProductButton from "../../../ProductButton";

const AccessoryDetail = ({ navigation, route }) => {
  let { product } = route.params;
  const { addToCart } = useContext(CartContext);

  const clearAsyncStorage = async () => {
    AsyncStorage.clear();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text
            onPress={() => navigation.navigate("BirdData")}
            style={styles.name}
          >
            {product.name}{" "}
          </Text>
          <AccessoryCarosel data={product.imageList} />

          <Image source={product.imageThuc} />

          <Text style={styles.status}>Tình trạng: {product.status}</Text>

          <Text style={styles.price}>{product.price} VND</Text>
          <ProductButton navigation={navigation} product={product} />

          <View style={styles.ship}>
            <FontAwesome
              name="car-side"
              size={32}
              color="#F9A529"
              marginRight={7}
            />
            <Text>
              Vận chuyển toàn quốc, miễn phí vận chuyển trong vòng bán kính 15km
            </Text>
          </View>
          <View style={styles.backItem}>
            <FontAwesome
              name="parachute-box"
              size={32}
              color="#F9A529"
              marginRight={14}
            />
            <Text>Hỗ trợ đổi trả: Nếu chim không đúng như hình và mô tả</Text>
          </View>
          <Text style={styles.detailTitle}> Mô tả sản phẩm</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text
            onPress={() => navigation.navigate("Accessory")}
            style={styles.detailTitle}
          >
            {" "}
            Sản phẩm tương tự
          </Text>
        </View>

        <View>
          <AccessorySuggest navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FCF8EE",
  },
  productContainer: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 500,
    marginBottom: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  status: {
    fontSize: 20,
  },
  CountButton: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  price: {
    fontSize: 18,
    marginBottom: 10,
    color: "#FABB55",
    fontWeight: "bold",
    fontSize: 20,
  },
  buttonBuy: {
    backgroundColor: "#F9A529",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonAddCart: {
    backgroundColor: "#00BCD4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  ship: {
    display: "flex",
    flexDirection: "row",
    marginRight: 30,
    marginBottom: 20,
  },
  backItem: {
    flexDirection: "row",
    marginRight: 60,
    marginBottom: 20,
  },
  detailTitle: {
    backgroundColor: "white",
    borderWidth: 1, // Border width
    borderColor: "black", // Border color
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    height: 30,
    color: "#F9A529",
    marginBottom: 10,
  },
  description: {
    textAlign: "justify",
    fontSize: 18,
    marginBottom: 20,
  },
});

export default AccessoryDetail;
