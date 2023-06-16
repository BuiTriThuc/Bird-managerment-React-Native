import React from "react";
import Carousel, { PaginationLight } from "react-native-x-carousel";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const DATA = [
  {
    coverImageUri:
      "https://tantam.vn/Web/Resources/Uploaded/images/sanpham/2019/cam_trung_moi_cau.jpg",
    cornerLabelColor: "#FFD300",
    cornerLabelText: "GOTY",
  },
  {
    coverImageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT02vsoxcYi8cegtIgSoqDe8M2Jsvl7xgOM5LAx8qAWUqm7kUHMDhQRuh0JnOWBFhXKDBY&usqp=CAU",
    cornerLabelColor: "#0080ff",
    cornerLabelText: "NEW",
  },
  {
    coverImageUri:
      "https://dogily.vn/wp-content/uploads/2019/06/Cam-chim-trung-cao-cap.jpg",
    cornerLabelColor: "#2ECC40",
    cornerLabelText: "-75%",
  },
  {
    coverImageUri:
      "https://top247.vn/wp-content/uploads/2021/10/dia-chi-ban-cam-chim-1.jpg",
    cornerLabelColor: "#2ECC40",
    cornerLabelText: "-20%",
  },
];

const BirdFoodCarosel = () => {
  const renderItem = (data) => (
    <View key={data.coverImageUri} style={styles.cardContainer}>
      <View style={styles.cardWrapper}>
        <Image style={styles.card} source={{ uri: data.coverImageUri }} />
        <View
          style={[
            styles.cornerLabel,
            { backgroundColor: data.cornerLabelColor },
          ]}
        ></View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        pagination={PaginationLight}
        renderItem={renderItem}
        data={DATA}
        loop
        autoplay
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    width,
  },
  cardWrapper: {
    borderRadius: 8,
    overflow: "hidden",
  },
  card: {
    width: width * 0.9,
    height: width * 0.5,
  },
  cornerLabel: {
    position: "absolute",
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 8,
  },
  cornerLabelText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
});
export default BirdFoodCarosel;
