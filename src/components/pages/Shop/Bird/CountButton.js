import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

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
        <Text>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantity}> {value}</Text>

      <TouchableOpacity style={styles.buttonRight} onPress={plusValue}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    height: 35,
    overflow: "hidden",
    borderColor: "black",
    margin: 6,
  },
  quantity: {
    paddingHorizontal: 10,
    marginRight: 3,
  },

  buttonLeft: {
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "black",
    padding: 6,
  },

  buttonRight: {
    alignItems: "center",
    borderLeftWidth: 1,
    borderLeftColor: "black",
    padding: 6,
  },
});

export default CountButton;
