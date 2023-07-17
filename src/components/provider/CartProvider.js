// components/CartContext.js

import React, { createContext, useState } from "react";
import Cart from "../pages/Cart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      let flat = 0;
      console.log(prevItems);
      for (let i = 0; i < prevItems.length; i++) {
        const element = prevItems[i];
        if (element.id === item.id) {
          flat = 1;
          element.quantity = element.quantity + item.quantity;
          prevItems[i] = {
            ...element,
            quantity: element.quantity,
          };
        }
      }
      if (flat === 1) return [...prevItems];
      return [...prevItems, item];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };
  const itemQuantity = (itemId, value) => {
    setCartItems((prevItems) => {
      for (let i = 0; i < prevItems.length; i++) {
        const element = prevItems[i];
        if (element.id === itemId) {
          prevItems[i] = {
            ...element,
            quantity: value,
          };
        }
      }
      return [...prevItems];
    });
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        itemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
