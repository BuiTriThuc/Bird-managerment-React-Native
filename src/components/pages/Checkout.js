import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { RadioButton } from "react-native-radio-buttons-group";
import { useEffect } from "react";
import { getDistrict, getProvide, getWard } from "../../../api";
import useAuth from "../hooks/useAuth";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Checkout() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [provides, setProvides] = useState([]);
  const [provide, setProvide] = useState("");
  const [disctrict, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [disctricts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const { params } = useRoute();
  const navigation = useNavigation();
  let { cartItems } = params;

  console.log("Check cart items", cartItems);

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProvide();
        setProvides(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleOnChangeProvide = async (selectedItem) => {
    const selectedProvide = provides.find(
      (provide) => provide.name === selectedItem
    );
    if (selectedProvide) {
      try {
        const data = await getDistrict(selectedProvide.code);
        setDistricts(data.districts);
        setProvide(selectedProvide.name);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleOnChangeDistrict = async (selectedItem) => {
    const selectedDistrict = disctricts.find(
      (dis) => dis.name === selectedItem
    );
    if (selectedDistrict) {
      try {
        const data = await getWard(selectedDistrict.code);
        setWards(data.wards);
        setDistrict(selectedDistrict.name);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ScrollView className="flex-1">
      <View className="w-auto mx-2 my-3">
        <Text className="text-2xl font-bold text-gray-800">
          Thông tin nhận hàng
        </Text>
        <TextInput
          placeholder="Email"
          className="p-4 my-3 w-full border border-gray-400 rounded-full text-base text-black"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          placeholder="Họ và tên"
          className="p-4 my-3 w-full border border-gray-400 rounded-full text-base text-black"
          onChangeText={(text) => setFullName(text)}
          value={fullName}
        />
        <TextInput
          placeholder="Số điện thoại"
          className="p-4 my-3 w-full border border-gray-400 rounded-full text-base text-black"
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
        />

        <SelectDropdown
          buttonStyle={{
            padding: 12,
            marginVertical: 12,
            borderWidth: 1,
            borderRadius: 100,
            width: "100%",
          }}
          buttonTextStyle={{ fontSize: 16, lineHeight: 24, color: "black" }}
          data={provides.map((pro) => pro.name)}
          onSelect={(selectedItem, index) => {
            handleOnChangeProvide(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />

        <SelectDropdown
          buttonStyle={{
            padding: 12,
            marginVertical: 12,
            borderWidth: 1,
            borderRadius: 100,
            width: "100%",
          }}
          buttonTextStyle={{ fontSize: 16, lineHeight: 24, color: "black" }}
          data={disctricts?.map((dis) => dis.name)}
          onSelect={(selectedItem, index) => {
            handleOnChangeDistrict(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />

        <SelectDropdown
          buttonStyle={{
            padding: 12,
            marginVertical: 12,
            borderWidth: 1,
            borderRadius: 100,
            width: "100%",
          }}
          buttonTextStyle={{ fontSize: 16, lineHeight: 24, color: "black" }}
          data={wards?.map((war) => war.name)}
          onSelect={(selectedItem, index) => {
            setWard(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />

        <TextInput
          placeholder="Địa chỉ"
          className="p-4 my-3 w-full border border-gray-400 rounded-full text-base text-black"
          onChangeText={(text) => setAddress(text)}
          value={address}
        />
      </View>

      <View className="w-auto mx-2 rounded-full">
        <Text className="text-2xl font-bold text-gray-800">Vận chuyển</Text>
        <View className="p-4 my-3 border border-gray-400">
          <RadioButton
            label="Giao hàng tân nơi"
            labelStyle={{ fontSize: 16, lineHeight: 24 }}
            onPress={handleChecked}
            selected={isChecked}
          />
        </View>
      </View>

      <View className="w-auto mx-2 rounded-full">
        <Text className="text-2xl font-bold text-gray-800">Thanh toán</Text>
        <View className="p-4 my-3 border border-gray-400">
          <RadioButton
            label="Thanh toán khi nhận hàng (COD)"
            labelStyle={{ fontSize: 16, lineHeight: 24 }}
            onPress={handleChecked}
            selected={isChecked}
          />
        </View>
      </View>

      <TouchableOpacity
        className="p-4 bg-blue-800 mx-2 w-auto"
        onPress={() =>
          navigation.navigate("Order", {
            cartItems,
            email,
            fullName,
            phoneNumber,
            provide,
            disctrict,
            ward,
            address,
          })
        }
      >
        <Text className="text-lg text-white font-bold text-center">
          Đặt hàng
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
