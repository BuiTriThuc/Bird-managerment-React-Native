import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import BirdData from "./Shop/Data/BirdData";
import FoodData from "./Shop/Data/FoodData";
import AccessoryData from "./Shop/Data/AccessoryData";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const [currentTab, setCurrentTab] = useState("birds");
  const carouselData = [
    { image: require("../../img/carousel-1.jpg") },
    { image: require("../../img/carousel-2.jpg") },
    { image: require("../../img/carousel-3.jpg") },
  ];

  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.carouselImage} />
    </View>
  );

  const renderBestSeller = ({ item }) => (
    <View style={styles.bestSellerItem}>
      <Image source={{ uri: item.image.uri }} style={styles.bestSellerImage} />
      <Text style={styles.bestSellerName}>{item.name}</Text>
      <View style={styles.productFooter}>
        <Text style={styles.bestSellerPrice}>{item.price}</Text>
        <Text style={styles.bestSellerStatus}>Bán chạy</Text>
      </View>
    </View>
  );

  const birdRows = BirdData.slice(0, 4);
  const foodRows = FoodData.slice(0, 4);
  const AccessoryRows = AccessoryData.slice(0, 4);

  const NewsSection = () => {
    return (
      <View style={styles.newsContainer}>
        <Text style={styles.newsTitle}>Tin tức</Text>
        <View style={styles.newsItem}>
          <FontAwesome name="phone" style={styles.newsIcon} />
          <View style={styles.newsItemContent}>
            <Text style={styles.newsItemTitle}>Liên hệ</Text>
            <Text style={styles.newsItemText}>0856597778 - 0856597778</Text>
            <Text style={styles.newsItemText}>Email: contact@birdshop.com</Text>
          </View>
        </View>
        <View style={styles.newsItem}>
          <FontAwesome name="building" style={styles.newsIcon} />
          <View style={styles.newsItemContent}>
            <Text style={styles.newsItemTitle}>Văn phòng giao dịch</Text>
            <Text style={styles.newsItemText}>
              Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành
              phố Hồ Chí Minh
            </Text>
            <Text style={styles.newsItemText}>
              Giờ làm việc: Thứ 2 - Thứ 6, 8:00 - 17:00
            </Text>
          </View>
        </View>
        <View style={styles.newsItem}>
          <FontAwesome name="envelope" style={styles.newsIcon} />
          <View style={styles.newsItemContent}>
            <Text style={styles.newsItemTitle}>Bộ phận hỗ trợ khách hàng</Text>
            <Text style={styles.newsItemText}>Buitrithuc1008@gmail.com</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text style={styles.welcomeText}>Chào mừng đến với Bird Shop</Text>
        </View>
        <View>
          <Carousel
            data={carouselData}
            renderItem={renderCarouselItem}
            sliderWidth={width}
            itemWidth={width}
          />
        </View>

        <View style={styles.bestSeller}>
          <View style={styles.buttonContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Các sản phẩm bán chạy</Text>
            </View>
            <View style={styles.buttonList}>
              <TouchableOpacity
                style={[
                  styles.button,
                  currentTab === "birds" && styles.activeButton,
                ]}
                onPress={() => setCurrentTab("birds")}
              >
                <Text
                  style={[
                    styles.buttonText,
                    currentTab === "birds" && { color: "white" },
                  ]}
                >
                  Chim
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  currentTab === "food" && styles.activeButton,
                ]}
                onPress={() => setCurrentTab("food")}
              >
                <Text
                  style={[
                    styles.buttonText,
                    currentTab === "food" && { color: "white" },
                  ]}
                >
                  Thức ăn
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  currentTab === "accessories" && styles.activeButton,
                ]}
                onPress={() => setCurrentTab("accessories")}
              >
                <Text
                  style={[
                    styles.buttonText,
                    currentTab === "accessories" && { color: "white" },
                  ]}
                >
                  Phụ kiện
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.listContainer}>
            {currentTab === "birds" && (
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.gridContainer}>
                  {birdRows.map((item) => (
                    <View key={item.id} style={styles.gridItem}>
                      {renderBestSeller({ item })}
                    </View>
                  ))}
                </View>
              </ScrollView>
            )}

            {currentTab === "food" && (
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.gridContainer}>
                  {foodRows.map((item) => (
                    <View key={item.id} style={styles.gridItem}>
                      {renderBestSeller({ item })}
                    </View>
                  ))}
                </View>
              </ScrollView>
            )}

            {currentTab === "accessories" && (
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.gridContainer}>
                  {AccessoryRows.map((item) => (
                    <View key={item.id} style={styles.gridItem}>
                      {renderBestSeller({ item })}
                    </View>
                  ))}
                </View>
              </ScrollView>
            )}
          </View>
        </View>
        <View style={styles.newsSection}>
          <NewsSection />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fcf8ee",
  },
  carouselItem: {
    width: width,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  carouselImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  titleContainer: {
    marginVertical: 20,
    marginLeft: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bestSellerContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  bestSellerHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bestSellerItem: {
    width: 200,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  bestSellerImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
  bestSellerName: {
    marginVertical: 5,
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  bestSellerPrice: {
    fontSize: 14,
    marginLeft: 5,
    color: "red",
  },
  bestSellerStatus: {
    fontSize: 14,
    color: "green",
    marginRight: 5,
  },

  buttonContainer: {
    flexDirection: "column",
  },
  buttonList: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  activeButton: {
    backgroundColor: "gray",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  listContainer: {
    marginTop: 20,
    // marginRight: 10
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  gridItem: {
    width: "50%",
    marginBottom: 10,
  },
  productFooter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  welcome: {
    alignItems: "center",
    paddingVertical: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 600,
  },
  newsContainer: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 20,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  newsItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  newsIcon: {
    fontSize: 24,
    marginRight: 10,
    color: "green", // Màu biểu tượng
  },
  newsItemContent: {
    flex: 1,
  },
  newsItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  newsItemText: {
    fontSize: 14,
  },
});

export default HomeScreen;