import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";

// import Colors from "../../constants/Colors";

const CountButton = () => {
  const [value, setValue] = useState(0);

  const minusValue = () => {
    if (value > 0) {
      setValue(value - 1);
    } else {
      setValue(0);
    }
  };

  const plusValue = () => {
    setValue(value + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonLeft} onPress={minusValue}>
        <FontAwesome name="minus" size={15} color="#F9A529" />
      </TouchableOpacity>
      <Text style={styles.quantity}> {value}</Text>

      <TouchableOpacity style={styles.buttonRight} onPress={plusValue}>
        <FontAwesome name="plus" size={15} color="#F9A529" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    height: 37,
    overflow: "hidden",
    margin: 10,
    borderColor: "#F9A529",
  },
  quantity: {
    paddingHorizontal: 10,
    marginRight: 3,
  },

  buttonLeft: {
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#F9A529",
    padding: 10,
  },

  buttonRight: {
    alignItems: "center",
    borderLeftWidth: 1,
    borderLeftColor: "#F9A529",
    padding: 10,
  },
});

export default CountButton;
