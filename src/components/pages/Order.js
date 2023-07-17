import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { CheckCircleIcon } from "react-native-heroicons/outline";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

export default function Order() {
  const { params } = useRoute();
  const navigation = useNavigation();
  let {
    cartItems,
    email,
    fullName,
    phoneNumber,
    provide,
    disctrict,
    ward,
    address,
  } = params;

  console.log("check email", email);

  return (
    <ScrollView className="flex-1">
      <View className="flex items-center mt-4">
        <CheckCircleIcon size={70} color={"green"} />
        <Text className="text-3xl text-center text-black font-bold">
          Cảm ơn bạn đã đặt hàng
        </Text>
      </View>

      <Text className="text-2xl font-bold text-gray-800 mt-5 mx-5">
        Đơn hàng
      </Text>
      {cartItems?.map((item) => {
        return (
          <View className="flex-row items-center my-2 mx-4 border-b border-gray-400 border-t py-4">
            <Image
              source={{ uri: item.image.uri }}
              className="w-40 h-24 rounded-2xl"
              style={{ resizeMode: "contain" }}
            />
            <View className="ml-3">
              <Text className="text-base font-bold text-black">
                {item.name}
              </Text>
              <Text className="text-base font-medium">
                {item.price} {""} VND x {item.quantity} ={" "}
                {item.price * item.quantity}
              </Text>
            </View>
          </View>
        );
      })}

      <View className="pb-3 border-b border-gray-400 mx-3">
        <View className="flex-row justify-between mx-3">
          <Text className="text-lg mt-2 text-gray-600">Tạm tính</Text>
          <Text className="text-lg font-bold text-black mt-2">100000</Text>
        </View>

        <View className="flex-row justify-between mx-3">
          <Text className="text-lg mt-2 text-gray-600">Phí vận chuyển</Text>
          <Text className="text-lg font-bold text-black mt-2">100000</Text>
        </View>
      </View>

      <View className="flex-row justify-between mx-3 pb-3 border-b border-gray-400">
        <Text className="text-xl mt-2 text-gray-800 font-semibold mx-3">
          Tổng cộng
        </Text>
        <Text className="text-xl font-bold text-black mt-2 mx-3">100000</Text>
      </View>

      <View className="mx-4 w-auto mt-5">
        <Text className="font-bold text-2xl text-gray-900">
          Thông tin mua hàng
        </Text>
        <Text className="text-base text-gray-600">{fullName}</Text>
        <Text className="text-base text-gray-600">{email}</Text>
        <Text className="text-base text-gray-600">{phoneNumber}</Text>
      </View>

      <View className="mx-4 w-auto mt-5">
        <Text className="font-bold text-2xl text-gray-900">
          Địa chỉ nhận hàng
        </Text>
        <Text className="text-base text-gray-600">{fullName}</Text>
        <Text className="text-base text-gray-600">{address}</Text>
        <Text className="text-base text-gray-600">
          {ward}, {disctrict}, {provide}
        </Text>
        <Text className="text-base text-gray-600">{phoneNumber}</Text>
      </View>

      <View className="mx-4 w-auto mt-5">
        <Text className="font-bold text-2xl text-gray-900">
          Phương thức thanh toán
        </Text>
        <Text className="text-base text-gray-600">
          Thanh toán khi nhận hàng (COD)
        </Text>
      </View>

      <View className="mx-4 w-auto mt-5">
        <Text className="font-bold text-2xl text-gray-900">
          Phương thức vận chuyển
        </Text>
        <Text className="text-base text-gray-600">Giao hàng tận nơi</Text>
      </View>

      <TouchableOpacity
        className="p-4 w-auto mx-3 bg-blue-800 mt-4 rounded-2xl"
        onPress={() => navigation.navigate("Home")}
      >
        <Text className="text-2xl text-white font-bold text-center">
          Tiếp tục mua hàng
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
