import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { RadioButton } from "react-native-radio-buttons-group";
import { useEffect } from "react";
import { getDistrict, getProvide, getWard } from "../../../api";
import useAuth from "../hooks/useAuth";
import { useNavigation, useRoute } from "@react-navigation/native";
import { isValidEmail, isValidPhoneNumber } from "../utils/validation";
import { CartContext } from "../provider/CartProvider";

export default function Checkout() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const [provides, setProvides] = useState([]);
  const [provide, setProvide] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [disctricts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [provideError, setProvideError] = useState("");
  const [districtError, setDistrictError] = useState("");
  const [wardError, setWardError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [isDelivery, setIsDelivery] = useState(false);
  const [deliveryError, setDeliveryError] = useState("");

  const { params } = useRoute();
  const navigation = useNavigation();
  const { clearCart, cartItems } = useContext(CartContext);

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  const handleDelivery = () => {
    setIsDelivery(!isDelivery);
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

  const handleSubmit = () => {
    // Reset error messages
    setEmailError("");
    setPhoneError("");
    setProvideError("");
    setDistrictError("");
    setWardError("");
    setAddressError("");
    setFullNameError("");
    setDeliveryError("");

    // Validation checks
    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    }

    if (!phoneNumber) {
      setPhoneError("Phone number is required");
      isValid = false;
    } else if (!isValidPhoneNumber(phoneNumber)) {
      setPhoneError("Invalid phone number format");
      isValid = false;
    }

    if (!provide) {
      setProvideError("Provide is required");
      isValid = false;
    }

    if (!fullName) {
      setFullNameError("Full name is required");
      isValid = false;
    }

    if (!district) {
      setDistrictError("District is required");
      isValid = false;
    }

    if (!ward) {
      setWardError("Ward is required");
      isValid = false;
    }

    if (!address) {
      setAddressError("Address is required");
      isValid = false;
    }

    if (!isDelivery) {
      setDeliveryError("Please choose a payment method");
      isValid = false;
    }

    // Proceed if the form is valid
    if (isValid) {
      navigation.navigate("Order", {
        cartItems,
        email,
        fullName,
        phoneNumber,
        provide,
        district,
        ward,
        address,
      });
      clearCart();
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
        {emailError !== "" && (
          <Text style={{ color: "red" }}>{emailError}</Text>
        )}
        <TextInput
          placeholder="Họ và tên"
          className="p-4 my-3 w-full border border-gray-400 rounded-full text-base text-black"
          onChangeText={(text) => setFullName(text)}
          value={fullName}
        />
        {fullNameError !== "" && (
          <Text className="text-red-500">{fullNameError}</Text>
        )}
        <TextInput
          placeholder="Số điện thoại"
          className="p-4 my-3 w-full border border-gray-400 rounded-full text-base text-black"
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
        />
        {phoneError !== "" && (
          <Text style={{ color: "red" }}>{phoneError}</Text>
        )}
        <SelectDropdown
          buttonStyle={{
            padding: 12,
            marginVertical: 12,
            borderWidth: 1,
            borderRadius: 100,
            width: "100%",
          }}
          defaultButtonText="Chọn thành phố, tỉnh"
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
        {provideError !== "" && (
          <Text className="text-red-500">{provideError}</Text>
        )}
        <SelectDropdown
          buttonStyle={{
            padding: 12,
            marginVertical: 12,
            borderWidth: 1,
            borderRadius: 100,
            width: "100%",
          }}
          defaultButtonText="Chọn quận, huyện"
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
        {districtError !== "" && (
          <Text className="text-red-500">{districtError}</Text>
        )}

        <SelectDropdown
          buttonStyle={{
            padding: 12,
            marginVertical: 12,
            borderWidth: 1,
            borderRadius: 100,
            width: "100%",
          }}
          defaultButtonText="Chọn phường, xã"
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
        {wardError !== "" && <Text className="text-red-500">{wardError}</Text>}

        <TextInput
          placeholder="Địa chỉ"
          className="p-4 my-3 w-full border border-gray-400 rounded-full text-base text-black"
          onChangeText={(text) => setAddress(text)}
          value={address}
        />
        {addressError !== "" && (
          <Text className="text-red-500">{addressError}</Text>
        )}
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
            onPress={handleDelivery}
            selected={isDelivery}
          />
        </View>
        {deliveryError !== "" && (
          <Text style={{ color: "red" }}>{deliveryError}</Text>
        )}
      </View>

      <TouchableOpacity
        className="p-4 bg-blue-800 mx-2 w-auto rounded-xl mb-4"
        onPress={handleSubmit}
      >
        <Text className="text-lg text-white font-bold text-center">
          Đặt hàng
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
