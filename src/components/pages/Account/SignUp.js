import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { auth } from "../../../../config/firebase";

export default function SignUp() {
  const navigation = useNavigation();
  const iconFacebook = (
    <FontAwesome5 name={"facebook"} size={20} solid color={"#fff"} />
  );
  const iconGoogle = (
    <FontAwesome5 name={"google"} size={20} solid color={"#fff"} />
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    if (email && password && confirmPassword && password === confirmPassword) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.log("Error: ", error.message);
      }
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "#FCF8EE" }} className="w-full">
      <StatusBar animated={true} backgroundColor="#474747" />
      <View className="flex-1 w-full h-44 mb-8">
        <Image
          source={require("../../../img/bannerSignUp.jpg")}
          className="absolute h-full w-full top-0 left-0 object-cover"
        />

        <View className="relative z-[1] self-center text-center mt-20">
          {/* <Text className="text-2xl h-full text-orange-600 font-bold uppercase">
            Đăng ký
          </Text> */}
        </View>
      </View>

      <Text className="uppercase text-xl font-extrabold text-orange-500 m-4">
        Đăng ký
      </Text>
      <Text className="m-4 text-base mr-10">
        Nếu bạn chưa tài khoản, xin vui lòng đăng ký để trở thành thành viên
        cùng chúng tôi
      </Text>
      <View>
        <Text className="m-4 text-base font-bold">
          Email <Text className="text-red-700">*</Text>
        </Text>

        <TextInput
          className="p-3 my-3 mx-3 h-16 text-lg border border-[#e1e1e1] rounded-xl "
          placeholder="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
          placeholderTextColor={"#e1e1e1"}
        />

        <Text className="m-4 text-base font-bold">
          Mật khẩu <Text className="text-red-700">*</Text>
        </Text>

        <TextInput
          className="p-3 my-3 mx-3 h-16 text-lg border border-[#e1e1e1] rounded-xl "
          placeholder="Mật khẩu"
          value={password}
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true}
          placeholderTextColor={"#e1e1e1"}
        />

        <Text className="m-4 text-base font-bold">
          Xác nhận mật khẩu <Text className="text-red-700">*</Text>
        </Text>

        <TextInput
          className="p-3 my-3 mx-3 h-16 text-lg border border-[#e1e1e1] rounded-xl "
          placeholder="Xác nhận mật khẩu"
          value={confirmPassword}
          onChangeText={(value) => setConfirmPassword(value)}
          secureTextEntry={true}
          placeholderTextColor={"#e1e1e1"}
        />
      </View>

      <Pressable
        className="rounded-lg m-4 h-16 border-none justify-center items-center bg-[#f4b915]"
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#363025" : "#f4b915" },
        ]}
        onPress={handleSignUp}
      >
        <Text className="text-white font-bold text-xl">Đăng ký</Text>
      </Pressable>

      <View className="flex flex-row justify-center w-full my-4">
        <Text className="text-base font-light">Bạn có tài khoản</Text>
        <Text
          onPress={() => navigation.navigate("SignIn")}
          className="text-base ml-2 font-light underline text-red-600"
        >
          Đăng nhập tại đây
        </Text>
      </View>

      <View className="flex flex-row justify-center w-full my-1">
        <Text className="text-base font-light">Bạn quên mật khẩu</Text>
        <Text className="text-base ml-2 font-light text-red-600">
          Lấy lại tại đây
        </Text>
      </View>

      <View className="my-8">
        <Text className="flex text-center text-sm font-light">
          Hoặc đăng nhập bằng
        </Text>
      </View>

      <View className="flex flex-row justify-center">
        <Pressable
          className="rounded-lg m-2 h-14 w-28 border-none justify-center items-center bg-[#007bff]"
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#363025" : "#f4b915" },
          ]}
          onPress={() => Alert.alert("Button Pressed!")}
        >
          {iconFacebook}
          <Text className="text-white">Facebook</Text>
        </Pressable>

        <Pressable
          className="rounded-lg m-2 h-14 w-28 border-none justify-center items-center bg-[#DB4437]"
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#363025" : "#f4b915" },
          ]}
          onPress={() => Alert.alert("Button Pressed!")}
        >
          {iconGoogle}
          <Text className="text-white">Google</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
