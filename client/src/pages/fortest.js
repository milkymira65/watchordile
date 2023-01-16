import React from "react";
// import { useContext } from "react";
import { CartContext } from "../App";

export const useFortest = () => {
  const contextValue = useContext(CartContext);
    const { mycart, setmyCart, cartItem, setTotalPrice } =
      useContext(CartContext);
  console.log(contextValue.mycart);
  console.log("Hello world");
    const addProductToCart = (value) => {
      const checkProductInCart = contextValue.mycart.find(
        (item) => item.id === value.id
      );
      if (checkProductInCart) {
        let itemIndex = contextValue.mycart.findIndex(
          (item) => item.id === value.id
        );
        let tempCartItems = [...contextValue.mycart];
        tempCartItems[itemIndex].quantity = tempCartItems[itemIndex].quantity + 1;
        contextValue.setmyCart(tempCartItems);
      } else {
        let tempProduct = {};
        tempProduct = {
          ...value,
          quantity: 1,
        };
        contextValue.setmyCart([...contextValue.mycart, tempProduct]);
      }
      window.alert("sucessfully");
    };

  const deleteCartItem = (itemId) => {
    const newCartItems = contextValue.mycart.filter(
      (item) => item.id !== itemId
    );
    setmyCart(newCartItems);
  };

  const addProductQuantity = (itemId) => {
    let itemIndex = contextValue.mycart.findIndex((item) => item.id === itemId);
    let tempCartItems = [...contextValue.mycart];
    tempCartItems[itemIndex].quantity = tempCartItems[itemIndex].quantity + 1;
    contextValue.setmyCart(tempCartItems);
  };

  const subtractProductQuantity = (itemId) => {
    let itemIndex = contextValue.mycart.findIndex((item) => item.id === itemId);
    let tempCartItems = [...contextValue.mycart];

    // If quantity is 1 then remove item out of the cart
    if (tempCartItems[itemIndex].quantity === 1) {
      const newCartItems = tempCartItems.filter((item) => item.id !== itemId);
      contextValue.setmyCart(newCartItems);
    } else {
      tempCartItems[itemIndex].quantity = tempCartItems[itemIndex].quantity - 1;
      contextValue.setmyCart(tempCartItems);
    }
  };

  // Calculate cart total price
  const cartTotalPrice = contextValue.mycart.reduce((acc, value) => {
    return acc + value.price * value.quantity;
  }, 0);

  return (
    addProductToCart,
    deleteCartItem,
    addProductQuantity,
    subtractProductQuantity,
    cartTotalPrice
  );
};
