//โลจิกของการไม่ว่าหน้าไหนก้อจะใช้ได้
//คอนเทคเอพีไอมีไว้แชรสเตจให้ทุกไฟลสามารถใช้สเตจนี้ได้
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../App";

export const ProductContext = React.createContext(); //
export const useProduct = () => {
  return React.useContext(ProductContext);
};

function ProductProvider(props) {
  const [text, setText] = useState("Hello world");
  const contextValue = useContext(CartContext); //เรียกใช้คอนเทคเอพีไอ
  //   const { mycart, setmyCart, cartItem, setTotalPrice } = CartContext();//ถ้าเขียนแบบน้ต้องระบุเจาะจง

  const addProductToCart = (value) => {
    //แอดโปรดักทูคราทประกาทตัวแปรขึ้นมา
    const checkProductInCart = contextValue.mycart.find(
      //เก็บค่าที่เป็นเวลูคอนเทคที่สร้างไว้ในตะกร้าสินค้าที่สร้างไว้.findคือหาค่าว่าไอดีตรงไหมถ้าของซ้ำกันก่อบวกเพิ่มเลยไม่ต้องสร้างฟรอมมาใหม่
      (item) => item.product_id === value.product_id
    );

    let itemIndex = contextValue.mycart.findIndex(
      (item) => item.product_id === value.product_id
    );

    if (checkProductInCart) {
      //ถ้าอันเดียวกัยไปบวกเพิ่มเอาแทนจะแยกคนละชิ้น
      let tempCartItems = [...contextValue.mycart];
      // Todo (2nd)
      // tempCartItems[itemIndex].quantity = tempCartItems[itemIndex].quantity + (x is `value.quantity`);
      tempCartItems[itemIndex].quantity =
        tempCartItems[itemIndex].quantity + value.quantity;
      contextValue.setmyCart(tempCartItems);
    } else {
      //ถ่าไม่บวกเพิ่มให้เอาเวลู่ใหม่เพิ่มข่างล่างจะเข้าเงือนไขข้างล่าง
      let tempProduct = {};
      tempProduct = {
        ...value,
        quantity: value.quantity,
      };

      contextValue.setmyCart([...contextValue.mycart, tempProduct]);
    }
  };

  const deleteCartItem = (itemId) => {
    //ลบฟิวเตอรออก
    const newCartItems = contextValue.mycart.filter(
      //เข้าถึงตะกร้าแล้วกรองว่าจะลบอันไหนถ้าไอดีตรงกันก่อจะลบให้
      (item) => item.product_id !== itemId
    );
    contextValue.setmyCart(newCartItems); //พอลบแล้วจะเซทข้อมูบใหม่
    console.log(itemId);
  };

  const getTotalPrice = contextValue.mycart.reduce((acc, value) => {
    //ยอดรวมราคาทั่งหมดโดยใช้รีดิ้วส มีค่าตั้งต้น,ค่าสะสมของมัน
    return acc + value.price * value.quantity; //ค่า accจะสะสมราคาไปเริื่อยๆๆ
  }, 0);

  return (
    <ProductContext.Provider
      value={{ text, addProductToCart, deleteCartItem, getTotalPrice }} //รีเทรนค่าเพื่อให้หน้าอื่นใช้ได้เช่นเพื่อเอาไปใช้ในอินคราท
    >
      {props.children}
      //ชิวเดรนคือของที่อยุ่ข้างในของโปรดักคอนเทคโพรไวเดอรทั้งหมด
    </ProductContext.Provider>
  );

  // const useProduct = () => {
  //   return React.useContext(ProductContext);
  // }
}

export { ProductProvider };
