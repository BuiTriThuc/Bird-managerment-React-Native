// components/Cart.js

import React, { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { CartContext } from "../provider/CartProvider";
import { FlatList } from "react-native";
import { Image } from "react-native";
import NumericInput from "react-native-numeric-input";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const { cartItems, itemQuantity, removeFromCart } = useContext(CartContext);
  const navigation = useNavigation();
  const handlePress = (item) => {
    navigation.navigate("BirdDetail", { product: item });
  };
  const handlePressBuy = () => {
    navigation.navigate("BirdScreen");
  };

  const renderItem = ({ item }) => {
    return (
      <ScrollView>
        <TouchableOpacity onPress={() => handlePress(item)}>
          <View
            style={{
              marginTop: 20,
              marginLeft: 10,
              backgroundColor: "#FCF8EE",
              justifyContent: "space-around",
              borderRadius: 10,
              shadowColor: "black",
              elevation: 2,
              backgroundColor: "white",
            }}
            className="flex-row j my-2"
          >
            <Image
              source={{ uri: item.image.uri }}
              className="w-40 h-24 rounded-2xl"
              style={{ resizeMode: "contain", width: 140, height: 100 }}
            />
            <View>
              <Text
                style={{ fontSize: 20, marginHorizontal: 10, marginBottom: 5 }}
              >
                {item.name}
              </Text>
              <Text style={{ fontSize: 15, marginHorizontal: 10 }}>
                Giá: <Text style={{ fontWeight: "bold" }}>{item.price}</Text> đ
              </Text>
            </View>
            <View
              style={{
                justifyContent: "space-evenly",
                flexDirection: "column",
              }}
              className="items-center"
            >
              <NumericInput
                totalWidth={80}
                totalHeight={30}
                iconSize={25}
                value={item.quantity}
                onChange={(value) => {
                  itemQuantity(item.id, value);
                }}
                minValue={1}
              />
              <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                <Text style={{ marginTop: -10 }}>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  return (
    <ScrollView>
      <View style={{ backgroundColor: "#FCF8EE" }} className="px-1">
        {cartItems.length > 0 ? (
          <>
            <FlatList data={cartItems} renderItem={renderItem} />
            <View
              className="mb-2"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Text
                style={{ marginTop: 10, marginBottom: 10, fontSize: 20 }}
                className="text-3xl"
              >
                Tổng tiền:
                <Text style={{ color: "orange", fontWeight: "bold" }}>
                  {" "}
                  {cartItems
                    .reduce(
                      (acc, curr) =>
                        acc +
                        parseFloat(curr.price.replace(/\./g, "")) *
                          curr.quantity,
                      0
                    )
                    .toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                </Text>
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#F9A529",
                  alignItems: "center",
                  width: "80%",
                  borderRadius: 10,
                  height: 40,
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 25 }}>Thanh toán</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#A3E9A3",
                  alignItems: "center",
                  width: "80%",
                  borderRadius: 10,
                  height: 40,
                  justifyContent: "center",
                  marginVertical: 10,
                }}
              >
                <Text style={{ fontSize: 25 }}>Tiếp tục mua hàng</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            <View
              style={{
                marginTop: 200,
              }}
              className="flex-1 items-center justify-center"
            >
              <Image
                source={require("../../../assets/empty-box.png")}
                className="h-64 w-64"
              />
              <TouchableOpacity
                style={{
                  backgroundColor: "#F9A529",
                  width: 120,
                  height: 50,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => handlePressBuy()}
              >
                <Text style={{ fontSize: 25 }}>Mua sắm</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default Cart;
