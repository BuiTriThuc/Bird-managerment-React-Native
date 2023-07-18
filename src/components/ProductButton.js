import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import CountButton from './pages/Shop/CountButton';
import { CartContext } from './provider/CartProvider';
import { StyleSheet } from 'react-native';
import { useContext } from 'react';

const ProductButton = ({ navigation, product }) => {
    const { addToCart } = useContext(CartContext)
    const [quantity, setQuantity] = useState(1)
    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
    };

    return (
        <>
            <View style={styles.CountButton}>
                <Text style={{ fontSize: 15 }}>Số lượng:</Text>
                <CountButton style={styles.Count} onChange={(value) => setQuantity(value)} />
            </View>

            <TouchableOpacity style={styles.buttonBuy} onPress={() => { navigation.navigate('Cart'); handleAddToCart() }}>
                <Text style={styles.buttonText}>
                    <FontAwesome name="opencart" size={22} color="white" /> Mua Ngay
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonAddCart} onPress={handleAddToCart}>
                <Text style={styles.buttonText}>
                    <FontAwesome name="cart-plus" size={22} color="white" /> Thêm vào giỏ hàng
                </Text>
            </TouchableOpacity>
        </>
    );
};
const styles = StyleSheet.create({

    buttonBuy: {
        backgroundColor: "#F9A529",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
    },
    CountButton: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
    },
    buttonAddCart: {
        backgroundColor: "#00BCD4",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        marginTop: 5,
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
  
});

export default ProductButton;
