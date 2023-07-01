import React from "react";
import { Image, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import Maps from "../layout/Maps";

export default function Contact() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>LIÊN HỆ</Text>
        <Image source={require("../../img/Circle-call.jpg")} />
        <Text>Hỗ trợ tư vấn</Text>
        <Text>0856597778 - 0856597778</Text>
        <Image source={require("../../img/Circle-adress.jpg")} />
        <Text>Văn phòng giao dịch</Text>
        <Text style={{ textAlign: "center", marginHorizontal: 30 }}>
          Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố
          Hồ Chí Minh
        </Text>
        <Image source={require("../../img/Circle-mail.jpg")} />
        <Text>Bộ phận hỗ trợ bán hàng</Text>
        <Text>Buitrithuc1008@gmail.com</Text>
        <Maps />
        <View style={styles.input}>
          <View
            style={{
              backgroundColor: "white",
              width: 331,
              height: 40,
              borderWidth: 0.5,
              borderRadius: 8,
              borderColor: "#F9A529",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <FontAwesome name="users" size={20} color="#F9A529" margin={5} />
            <TextInput
              style={{ width: 331, height: 40 }}
              type="text"
              placeholder=" Họ tên:"
            />
          </View>
          <View
            style={{
              backgroundColor: "white",
              width: 331,
              height: 40,
              borderWidth: 0.5,
              borderRadius: 8,
              borderColor: "#F9A529",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <FontAwesome
              name="phone-alt"
              size={20}
              color="#F9A529"
              margin={5}
            />
            <TextInput
              style={{ width: 331, height: 40 }}
              keyboardType="numeric"
              placeholder=" Số điện thoại:"
            />
          </View>
          <View
            style={{
              backgroundColor: "white",
              width: 331,
              height: 40,
              borderWidth: 0.5,
              borderRadius: 8,
              borderColor: "#F9A529",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <MaterialCommunityIcons
              name="gmail"
              size={20}
              color="#F9A529"
              margin={5}
            />
            <TextInput
              style={{ width: 331, height: 40 }}
              keyboardType="email-address"
              placeholder="Email:"
            />
          </View>
          <View
            style={{
              backgroundColor: "white",
              width: 331,
              height: 40,
              borderWidth: 0.5,
              borderRadius: 8,
              borderColor: "#F9A529",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <FontAwesome
              name="notes-medical"
              size={20}
              color="#F9A529"
              margin={5}
            />
            <TextInput
              style={{ width: 331, height: 40 }}
              type="text"
              placeholder="Chủ đề:"
            />
          </View>
          <Text
            style={{
              marginTop: 244,
              position: "absolute",
              zIndex: 1,
              fontWeight: 300,
              paddingBottom: 20,
            }}
          >
            {" "}
            <Entypo name="message" size={20} color="#F9A529" margin={5} /> Nội
            dung:
          </Text>
          <View
            style={{
              backgroundColor: "white",
              width: 331,
              height: 100,
              borderWidth: 0.5,
              borderRadius: 8,
              borderColor: "#F9A529",
              display: "flex",
              flexDirection: "row",
              marginBottom: 20,
              position: "relative",
            }}
          >
            <TextInput
              style={{ width: 531, height: 100, paddingLeft: 20 }}
              type="text"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.buttonBook} onPress={() => {}}>
          <Text style={styles.buttonTextBook}>
            <Feather name="send" size={20} color="white" /> Đặt lịch
          </Text>
        </TouchableOpacity>

        <Image
          style={{ width: "100%", height: 400 }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/642/642019.png",
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FCF8EE",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20,
  },
  description: {
    textAlign: "justify",
    marginHorizontal: 30,
    fontSize: 20,
    marginBottom: 20,
  },
  buttonBook: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9A529",
    width: 100,
    height: 50,
    borderRadius: 10,
    marginLeft: -230,
  },
  buttonTextBook: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
