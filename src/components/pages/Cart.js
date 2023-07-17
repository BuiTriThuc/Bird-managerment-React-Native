// components/Cart.js

import React, { useContext } from "react";
import { View, Text } from "react-native";
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

  const renderItem = ({ item }) => {
    return (
      <View className="flex-row justify-between items-center my-2">
        <Image
          source={{ uri: item.image.uri }}
          className="w-40 h-24 rounded-2xl"
          style={{ resizeMode: "contain" }}
        />
        <View>
          <Text>{item.name}</Text>
          <Text>
            {item.price} {""} VND
          </Text>
        </View>
        <View className="items-center">
          <NumericInput
            totalWidth={80}
            totalHeight={50}
            iconSize={25}
            value={item.quantity}
            onChange={(value) => {
              itemQuantity(item.id, value);
            }}
            minValue={1}
          />
          <TouchableOpacity onPress={() => removeFromCart(item.id)}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1 px-1">
      {cartItems.length > 0 ? (
        <>
          <FlatList data={cartItems} renderItem={renderItem} />
          <View className="mb-2">
            <Text className="text-3xl">
              Tổng:{" "}
              {cartItems
                .reduce(
                  (acc, curr) =>
                    acc +
                    parseFloat(curr.price.replace(/\./g, "")) * curr.quantity,
                  0
                )
                .toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
            </Text>
            <TouchableOpacity
              className="m-auto mx-3 bg-blue-600 py-4"
              onPress={() => navigation.navigate("Checkout", { cartItems })}
            >
              <Text className="text-lg text-white font-bold text-center">
                Checkout
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <Text>(Chưa có sản phẩm nào) nhấn vào cửa hàng để mua hàng </Text>
        </>
      )}
    </View>
  );
};

export default Cart;
