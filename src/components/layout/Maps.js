import React, { useState } from "react";
import MapView, { Marker, Heatmap } from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";

export default function Maps() {
  const [mapLat, setMapLat] = useState(6.841776681);
  const [mapLong, setMapLong] = useState(79.869319);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: mapLat,
          longitude: mapLong,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      ></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
