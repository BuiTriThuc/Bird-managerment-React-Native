import React, { useState } from "react";
import MapView, { Marker, Heatmap } from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";
import { Dimensions } from "react-native";

export default function Maps() {
  const [mapLat, setMapLat] = useState(10.841328);
  const [mapLong, setMapLong] = useState(106.810473);

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 10.841328,
          longitude: 106.810473,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={styles.map}
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: 10.841328,
            longitude: 106.810473,
          }}
          title="Thức đẹp trai"
          description="Bird Shop"
          pinColor={"red"}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  map: {
    width: Dimensions.get("window").width,
    height: 300,
  },
});
