import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { auth } from "../../../../config/firebase";
import { signOut } from "firebase/auth";

const Profile = () => {
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/283773185_1348806798940727_4935567954136181658_n.jpg?stp=dst-jpg_s206x206&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=TyKJ9m0LCYAAX8IfEsY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQzIqBGTaIrNMgFr3eIUa8Curqfbnq3paBq5OOOwE_FHA&oe=64D4AAC6",
          }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 6 }}>
          Bùi Trí Thức
        </Text>
        <Text style={{ fontSize: 15 }}>Thứn Bùi Béo Khỏe Đẹp</Text>
      </View>
      <ScrollView style={styles.containerBottom}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <View
            style={{
              marginBottom: 30,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 40,
                height: 40,
                marginRight: 10,
              }}
              source={require("../../../img/editprofile.jpg")}
            />
            <Text style={{ marginRight: 130 }}>Edit profile</Text>
            <AntDesign
              name="arrowright"
              size={20}
              color="#F9A529"
              style={{ marginRight: 5 }}
            />
          </View>
          <View
            style={{
              marginBottom: 30,

              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 40,
                height: 40,
                marginRight: 10,
              }}
              source={require("../../../img/search.jpg")}
            />
            <Text style={{ marginRight: 130 }}>Edit profile</Text>
            <AntDesign
              name="arrowright"
              size={20}
              color="#F9A529"
              style={{ marginRight: 5 }}
            />
          </View>
          <View
            style={{
              marginBottom: 30,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 40,
                height: 40,
                marginRight: 10,
              }}
              source={require("../../../img/settings.jpg")}
            />
            <Text style={{ marginRight: 130 }}>Edit profile</Text>
            <AntDesign
              name="arrowright"
              size={20}
              color="#F9A529"
              style={{ marginRight: 5 }}
            />
          </View>
          <View>
            <Text
              style={{ backgroundColor: "black", width: "100%", height: 2 }}
            ></Text>
          </View>
          <View
            style={{
              marginBottom: 30,

              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 40,
                height: 40,
                marginRight: 10,
              }}
              source={require("../../../img/addfr.jpg")}
            />
            <Text style={{ marginRight: 130 }}>Edit profile</Text>
            <AntDesign
              name="arrowright"
              size={20}
              color="#F9A529"
              style={{ marginRight: 5 }}
            />
          </View>
          <View
            style={{
              marginBottom: 30,

              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 40,
                height: 40,
                marginRight: 10,
              }}
              source={require("../../../img/help.jpg")}
            />
            <Text style={{ marginRight: 130 }}>Edit profile</Text>
            <AntDesign
              name="arrowright"
              size={20}
              color="#F9A529"
              style={{ marginRight: 5 }}
            />
          </View>
          <View
            style={{
              backgroundColor: "#E68186",
              width: "70%",
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
              marginBottom: 30,
            }}
          >
            <TouchableOpacity onPress={handleLogout}>
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCF8EE",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerBottom: {
    backgroundColor: "#ffff",
    width: "100%",
    height: 350,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 2, height: 2 },
    elevation: 3,
  },
  image: {
    borderColor: "#ffff",
    borderWidth: 7,
    width: 150,
    height: 150,
    borderRadius: 100,
  },
});
export default Profile;
