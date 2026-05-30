"use client";

import {
  createContext,
  useState,
  useEffect,
} from "react";

export const WishlistContext =
  createContext();

export default function WishlistProvider({
  children,
}) {

  const [wishlist, setWishlist] =
    useState([]);

  useEffect(() => {

    const savedWishlist =
      localStorage.getItem("wishlist");

    if (savedWishlist) {
      setWishlist(
        JSON.parse(savedWishlist)
      );
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

  }, [wishlist]);

  const toggleWishlist = (
    product
  ) => {

    const exists =
      wishlist.find(
        (item) =>
          item.id === product.id
      );

    if (exists) {

      setWishlist(
        wishlist.filter(
          (item) =>
            item.id !== product.id
        )
      );

    } else {

      setWishlist([
        ...wishlist,
        product,
      ]);

    }

  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}