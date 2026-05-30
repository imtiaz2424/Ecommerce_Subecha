"use client";

import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  // Add To Cart

  const addToCart = (product) => {

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);

    }
  };

  // Increase Quantity

  const increaseQuantity = (id) => {

    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease Quantity

  const decreaseQuantity = (id) => {

    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove Product

  const removeFromCart = (id) => {

    setCart(
      cart.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}