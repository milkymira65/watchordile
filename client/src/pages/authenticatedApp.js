import React from "react";
import { AuthProvider } from "../contexts/authentication";
import { ChakraProvider } from "@chakra-ui/react";
import { Landingpage } from "../pages/landingpage";
import { LoginPage } from "../pages/loginPage";
import { Register } from "../pages/Registerpage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Authentication() {
  return (
    <>
      <Routes>
        {/* <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </>
  );
}

export default Authentication;
