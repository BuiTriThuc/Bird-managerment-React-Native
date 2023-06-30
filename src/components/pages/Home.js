import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const Home = () => {
  return (
    <View>
      <Image style={styles.banner} source={require("../../img/bird-banner.jpg")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    banner: {
        width: "100%",
        resizeMode: "contain"
    }
})

export default Home