import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import birdFoodDetail from "../Data/BirdFoodDetailData";
import BirdFoodSuggest from "./BirdFoodSuggest";
import BirdFoodCarosel from "../Data/BirdFoodCaroselData";
const BirdFoodDetail = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {birdFoodDetail.map((birdFoodDetail) => (
          <View key={birdFoodDetail.id} style={[styles.productContainer]}>
            {/* <Image source={productDetail.image} style={styles.image} /> */}
            <BirdFoodCarosel />
            <Text
              onPress={() => navigation.navigate("ProductDetail")}
              style={styles.name}
            >
              {birdFoodDetail.name}{" "}
            </Text>
            <Text style={styles.status}>
              Tình trạng: {birdFoodDetail.stattus}
            </Text>
            <Text style={styles.price}>{birdFoodDetail.price} VND</Text>
            <TouchableOpacity style={styles.buttonBuy} onPress={() => {}}>
              <Text style={styles.buttonText}>Mua Ngay</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonAddCart} onPress={() => {}}>
              <Text style={styles.buttonText}>Thêm vào giỏ hàng</Text>
            </TouchableOpacity>
            <View style={styles.ship}>
              <FontAwesome
                name="car-side"
                size={32}
                color="#F9A529"
                marginRight={7}
              />
              <Text>
                Vận chuyển toàn quốc, miễn phí vận chuyển trong vòng bán kính
                15km
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
            <Text style={styles.description}>{birdFoodDetail.description}</Text>
            <Text
              onPress={() => navigation.navigate("BirdFood")}
              style={styles.detailTitle}
            >
              {" "}
              Sản phẩm tương tự
            </Text>
          </View>
        ))}
        <View>
          <BirdFoodSuggest navigation={navigation} />
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
    borderWidth: 0.2, // Border width
    borderColor: "black", // Border color
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    height: 30,
    color: "#F9A529",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    textAlign: "justify",
    marginBottom: 20,
  },
});

export default BirdFoodDetail;