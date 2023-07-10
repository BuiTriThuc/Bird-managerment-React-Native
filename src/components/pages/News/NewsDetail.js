import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Image } from "react-native";

export default function NewsDetail({ navigation, route }) {
  let { product } = route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{product.title}</Text>
          <View
            style={{ flexDirection: "row", marginLeft: 10, marginVertical: 10 }}
          >
            <AntDesign
              name="clockcircle"
              size={20}
              color="#F9A529"
              style={{ marginRight: 5 }}
            />
            <Text>{product.time}</Text>
          </View>

          <Text style={styles.desDetail}>{product.desDetail}</Text>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 10 }}>
              {product.name1}
            </Text>
            <Text
              style={{
                flexDirection: "row",
                marginLeft: 10,
              }}
            >
              {product.des1}
            </Text>
            <Image style={styles.image} source={{ uri: product.img1 }} />
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20, margin: 10 }}>
              {product.name2}
            </Text>
            <Text
              style={{
                flexDirection: "row",
                marginLeft: 10,
              }}
            >
              {product.des2}
            </Text>
            <Image style={styles.image} source={{ uri: product.img2 }} />
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20, margin: 10 }}>
              {product.name3}
            </Text>
            <Text
              style={{
                flexDirection: "row",
                marginLeft: 10,
              }}
            >
              {product.des3}
            </Text>
            <Image style={styles.image} source={{ uri: product.img3 }} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCF8EE",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  desDetail: {
    marginHorizontal: 10,
    textAlign: "justify",
    fontSize: 15,
  },
  image: {
    marginHorizontal: 10,
    height: 300,
  },
});
