import { Linking } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

const News = () => {
  const handleReadMore = () => {
    Linking.openURL(
      "https://www.bachhoaxanh.com/kinh-nghiem-hay/cac-giong-chim-canh-pho-bien-thuong-duoc-nuoi-tai-viet-nam-1342859"
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>News</Text>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.image}
            source={{
              uri: "https://cdn.tgdd.vn/Files/2021/04/12/1342859/cac-giong-chim-canh-pho-bien-thuong-duoc-nuoi-tai-viet-nam-202104121951172147.jpg",
            }}
          />
          <View style={styles.newsItem}>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 10 }}>
                Các loại chim phổ biến ở Việt Nam
              </Text>
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
                Nuôi chim cảnh không còn xa lạ với nhiều người, đặc biệt là
                những người thích có một con vật nuôi trong nhà...
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "row", marginRight: 10 }}>
                  <AntDesign name="clockcircle" size={20} color="#F9A529" />
                  <Text>13/7/2023</Text>
                </View>
                <TouchableOpacity onPress={handleReadMore}>
                  <Text style={{ color: "blue" }}>Xem thêm</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#FCF8EE",
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
    position: "absolute",
  },
  newsItem: {
    width: 300,
    height: 200,
    backgroundColor: "#ffffff",
    position: "relative",
    marginTop: 100,
    borderRadius: 10,
  },
});

export default News;
