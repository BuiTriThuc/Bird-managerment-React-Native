import React, { useState, useCallback, useRef } from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import Carousel from "react-native-snap-carousel";

const exampleItems = [
  {
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9KNx9Cd9_zxKtZlHDv9b4frFFUADuXWns6g&usqp=CAU",
    },
  },
  {
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9KNx9Cd9_zxKtZlHDv9b4frFFUADuXWns6g&usqp=CAU",
    },
  },
  {
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9KNx9Cd9_zxKtZlHDv9b4frFFUADuXWns6g&usqp=CAU",
    },
  },
  {
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9KNx9Cd9_zxKtZlHDv9b4frFFUADuXWns6g&usqp=CAU",
    },
  },
  {
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9KNx9Cd9_zxKtZlHDv9b4frFFUADuXWns6g&usqp=CAU",
    },
  },
];

const FoodCarosel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(exampleItems);
  const ref = useRef(null);

  const renderItem = useCallback(
    ({ item, index }) => (
      <View>
        <Image
          source={item.image}
          style={{
            backgroundColor: "floralwhite",
            borderRadius: 5,
            height: 250,
            padding: 50,
            marginLeft: 10,
            marginRight: 10,
          }}
        />
      </View>
    ),
    []
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FCF8EE",
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <Carousel
          layout="default"
          ref={ref}
          data={carouselItems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </View>
    </SafeAreaView>
  );
};

export default FoodCarosel;
