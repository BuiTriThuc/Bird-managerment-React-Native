import { Linking } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import NewsData from "../Shop/Data/NewsData";
import { Dimensions } from "react-native";
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
const News = () => {
  const windowWidth = Dimensions.get("window").width;
  const [listFavourite, setListFavourite] = useState([]);
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();
  const navigation = useNavigation(); // Use useNavigation to access the navigation object

  const handlePress = (product) => {
    navigation.navigate("NewsDetail", { product });
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

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

  const handleReadMore = () => {
    Linking.openURL(
      "https://www.bachhoaxanh.com/kinh-nghiem-hay/cac-giong-chim-canh-pho-bien-thuong-duoc-nuoi-tai-viet-nam-1342859"
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", fontSize: 30, margin: 5 }}>
          News
        </Text>
        {data.map((product) => (
          <TouchableOpacity onPress={() => handlePress(product)} key={product.id}>
            <View style={{ alignItems: "center", marginBottom: 50 }}>
              <Image style={styles.image} source={{ uri: product.img }} />
              <View style={styles.newsItem}>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.title}>{product.title}</Text>
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
                    <Text>|</Text>
                    <TouchableOpacity onPress={handleReadMore}>
                      <Text style={{ marginLeft: 10 }}>Xem thêm</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
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

export default News;
