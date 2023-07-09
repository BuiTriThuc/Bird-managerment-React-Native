import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";

export default function NewsDetail({ navigation, route }) {
  let { product } = route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text>{product.title}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 40,
  },
});
