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
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { FontAwesome } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import BirdData from "./Shop/Data/BirdData";
import FoodData from "./Shop/Data/FoodData";
import AccessoryData from "./Shop/Data/AccessoryData";
import NewsData from "./Shop/Data/NewsData";
import NewsDetail from "./News/NewsDetail";
import BirdDetail from "./Shop/Bird/BirdDetail";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const [currentTab, setCurrentTab] = useState("birds");
  const [listFavourite, setListFavourite] = useState([]);
  const [data, setData] = useState([]);
  const navigation = useNavigation(); 
  const carouselData = [
    { image: require("../../img/carousel-1.jpg") },
    { image: require("../../img/carousel-2.jpg") },
    { image: require("../../img/carousel-3.jpg") },
  ];
  const handleNewsPress = (product) => {
    navigation.navigate("NewsDetail", { product });
  };
  const handleBirdPress = (product) => {
    navigation.navigate("BirdDetail", { product });
  };

  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.carouselImage} />
    </View>
  );

  const renderBestSeller = ({ item }) => (
    <TouchableOpacity style={styles.bestSellerItem} onPress={() => handleBirdPress(item)}>
      <Image source={{ uri: item.image.uri }} style={styles.bestSellerImage} />
      <Text style={styles.bestSellerName}>{item.name}</Text>
      <View style={styles.productFooter}>
        <Text style={styles.bestSellerPrice}>{item.price}</Text>
        <Text style={styles.bestSellerStatus}>Bán chạy</Text>
      </View>
    </TouchableOpacity>
  );

  const birdRows = BirdData.slice(0, 4);
  const foodRows = FoodData.slice(0, 4);
  const AccessoryRows = AccessoryData.slice(0, 4);
  const newsRows = data.slice(0, 2);

  useFocusEffect(
    React.useCallback(() => {
      const updatedData = () => {
        const updatedData = NewsData.map((item) => ({
          ...item,
          favorite: listFavourite.some((fav) => fav.id === item.id),
        }));
        setData(updatedData);
      };

      updatedData();
    }, [listFavourite])
  );

  const ContactSection = () => {
    return (
      <View style={styles.contactContainer}>
        <Text style={styles.contactTitle}>Liên hệ</Text>
        <View style={styles.contactItem}>
          <FontAwesome name="phone" style={styles.contactIcon} />
          <View style={styles.contactItemContent}>
            <Text style={styles.contactItemTitle}>Liên hệ</Text>
            <Text style={styles.contactItemText}>0856597778 - 0856597778</Text>
            <Text style={styles.contactItemText}>
              Email: contact@birdshop.com
            </Text>
          </View>
        </View>
        <View style={styles.contactItem}>
          <FontAwesome name="building" style={styles.contactIcon} />
          <View style={styles.contactItemContent}>
            <Text style={styles.contactItemTitle}>Văn phòng giao dịch</Text>
            <Text style={styles.contactItemText}>
              Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành
              phố Hồ Chí Minh
            </Text>
            <Text style={styles.contactItemText}>
              Giờ làm việc: Thứ 2 - Thứ 6, 8:00 - 17:00
            </Text>
          </View>
        </View>
        <View style={styles.contactItem}>
          <FontAwesome name="envelope" style={styles.contactIcon} />
          <View style={styles.contactItemContent}>
            <Text style={styles.contactItemTitle}>
              Bộ phận hỗ trợ khách hàng
            </Text>
            <Text style={styles.contactItemText}>Buitrithuc1008@gmail.com</Text>
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
        <Text
          style={{
            textAlign: "center",
            paddingVertical: 20,
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Tin tức về loài chim
        </Text>
        <View style={{ backgroundColor: "#fff",paddingTop: 20 }}>
          {newsRows.map((product) => (
            <View key={product.id}>
              <View style={{ alignItems: "center", marginBottom: 50 }}>
                <Image style={styles.image} source={{ uri: product.img }} />
                <View style={styles.newsItem}>
                  <View style={{ alignItems: "center" }}>
                    <TouchableOpacity onPress={() => handleNewsPress(product)}>
                      <Text style={styles.title}>{product.title}</Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontWeight: "300",
                        fontSize: 15,
                        marginTop: 20,
                        textAlign: "justify",
                        marginLeft: 10,
                        marginRight: 10,
                      }}
                    >
                      {product.des}
                    </Text>
                    <View style={{ flexDirection: "row", marginTop: 25 }}>
                      <View style={{ flexDirection: "row", marginRight: 10 }}>
                        <AntDesign
                          name="clockcircle"
                          size={20}
                          color="#F9A529"
                          style={{ marginRight: 5 }}
                        />
                        <Text>{product.time}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.contactSection}>
          <ContactSection />
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
  contactContainer: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 20,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  contactIcon: {
    fontSize: 24,
    marginRight: 10,
    color: "green", // Màu biểu tượng
  },
  contactItemContent: {
    flex: 1,
  },
  contactItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  contactItemText: {
    fontSize: 14,
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
    color: "green",
  },
  newsItemContent: {
    flex: 1,
  },
  newsItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  newsItemSummary: {
    fontSize: 14,
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
    position: "absolute",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  newsItem: {
    width: 300,
    height: 200,
    backgroundColor: "#ffffff",
    position: "relative",
    marginTop: 100,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: "white",
  },
});

export default HomeScreen;
