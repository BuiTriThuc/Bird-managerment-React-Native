import React, { useState, useCallback, useRef, useEffect } from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import Carousel from "react-native-snap-carousel";

const exampleItems = [
  {
    uri: "https://image-us.eva.vn/upload/4-2021/images/2021-10-01/image10-1633053501-233-width650height460.jpg",
  },
  {
    uri: "https://afamilycdn.com/150157425591193600/2020/3/23/getty-eagle-58b9d5173df78c353c3a0644-15849024663381412188980.jpg",
  },
  {
    uri: "https://petmaster.vn/petroom/wp-content/uploads/2021/11/402692526c14854adc05-min-e1638149914951.jpg",
  },
  {
    uri: "https://vuongquocloaivat.com/wp-content/uploads/2019/01/chim-ung-an_lg.jpg",
  },
];

const BirdCarousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    setCarouselItems(data);
  }, [data]);

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          source={item}
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
    );
  };

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

export default BirdCarousel;
