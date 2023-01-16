import React, { Component } from "react";
import Script from "react-load-script";
import { Box, Button } from "@chakra-ui/react";
import { useProduct } from "../../contexts/productContext";
import  Success from "../successresult"

// import { publicKey } from "../../../confidential/keys";
import { useNavigate } from "react-router-dom";


let OmiseCard;
const CreditCard = () => {
  const Navigate = useNavigate()
  const { getTotalPrice } = useProduct();
  console.log(getTotalPrice);
  const handleScriptLoad = () => {
    OmiseCard = window.OmiseCard;
    console.log(window.OmiseCard);
    OmiseCard.configure({
      publicKey: "pkey_test_5turkfvw55ji6lozzqq",
      frameLabel: "Watchodile Shop",
      submitLabel: "PAY NOW",
      currency: "thb",
    });
  };
  
  


  const creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: "credit_card",
      otherPaymentMethods: [],
    });
    OmiseCard.configureButton("#credit-card");
    OmiseCard.attach();
  };

  const omiseCardHandler = () => {
    // const { value, createCreditCardCharge } = this.props;

    OmiseCard.open({
      frameDescription: "Invoice #3847",
      amount: getTotalPrice + "00",
      // amount: 5000000,
      onCreateTokenSuccess: (token) => {
        // createCreditCardCharge(value.email, value.name, value.amount, token);
        console.log("milk");
        Navigate("/address")
      },
       
      onFormClosed: () => {},
    
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    creditCardConfigure();
    omiseCardHandler();
  };

  return (
    <Box  className="own-form">
      <Script url="https://cdn.omise.co/omise.js" onLoad={handleScriptLoad} />

      <form>
        <Button
        bg="#DBA39A"
        _hover={{bg:"white",fontSize:"20",color:"#DBA39A"}}

          id="credit-card"
          className="btn"
          type="button"
          disabled={0}
          w="100%"
          color="white"
          h="10"
            
          Text="4rem"
         
          onClick={handleClick}
        >
          Pay With Credit Card
        </Button>
      </form>
    </Box>
  );
};

export default CreditCard;