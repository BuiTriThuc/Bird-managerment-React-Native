// components/Cart.js

import React, { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { CartContext } from "../provider/CartProvider";
import { FlatList } from "react-native";
import { Image } from "react-native";
import NumericInput from "react-native-numeric-input";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

const Cart = () => {
  const { cartItems, itemQuantity, removeFromCart } = useContext(CartContext);

  const renderItem = ({ item }) => {
    return (
      <ScrollView>
        <View
          style={{
            marginTop: 20,
            marginLeft: 10,
            backgroundColor: "#FCF8EE",
            justifyContent: "space-around",
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
              style={{ fontSize: 20, marginHorizontal: 10, marginBottom: 10 }}
            >
              {item.name}
            </Text>
            <Text style={{ fontSize: 15, marginHorizontal: 10 }}>
              {item.price} {""} VND
            </Text>
          </View>
          <View
            style={{ justifyContent: "space-evenly", flexDirection: "column" }}
            className="items-center"
          >
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
      </ScrollView>
    );
  };

  return (
    <ScrollView>
      <View style={{ backgroundColor: "#FCF8EE" }} className="px-1">
        {cartItems.length > 0 ? (
          <>
            <FlatList data={cartItems} renderItem={renderItem} />
            <View className="mb-2">
              <Text
                style={{ marginTop: 10, marginBottom: 10 }}
                className="text-3xl"
              >
                Tổng:
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
              <Button title={"Checkout"}></Button>
            </View>
          </>
        ) : (
          <>
            <Text>(Chưa có sản phẩm nào) nhấn vào cửa hàng để mua hàng </Text>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default Cart;
