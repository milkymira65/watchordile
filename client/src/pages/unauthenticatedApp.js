import React from "react";
import { AuthProvider } from "../contexts/authentication";
import { ChakraProvider } from "@chakra-ui/react";
import { Landingpage } from "../pages/landingpage";
import { LoginPage } from "../pages/loginPage";
import { Register } from "../pages/Registerpage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Unauthentication() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </>
  );
}

export default Unauthentication;

// import { Routes, Route } from "react-router-dom";

// import loginPage from "./loginpage";
// import RegisterPage from "./registerpage";
// import "../App.css";

// function UnauthenticatedApp() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="*" element={<LoginPage />} />
//       </Routes>
//     </div>
//   );
// }

// export default UnauthenticatedApp;
