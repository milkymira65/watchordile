import axios from "axios";
import React from "react";
import { json, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useState } from "react";

const AuthContext = React.createContext();
function AuthProvider(props) {
  const [state, setState] = useState({
    loading: null,
    error: null,
    user: null,
  });
  const navigate = useNavigate();

  const register = async (data) => {
    await axios.post("http://localhost:4000/auth/register", data);
    navigate("/login");
  };

  const login = async (data) => {
    const result = await axios.post("http://localhost:4000/auth/login", data);
    const token = result.data.token;
    localStorage.setItem("token", token);
    const userDataFromToken = jwtDecode(token);
    window.localStorage.setItem("user", JSON.stringify(userDataFromToken));
    // console.log(userDataFromToken);
    setState({ ...state, user: userDataFromToken });
    navigate("/");
  };

  // const address = async (data) => {
  //   const address = await axios.post("http://localhost:4000/address", data);
  //   navigate("/address");
  // };
  const logout = () => {
    localStorage.removeItem("token");
    setState({ ...state, user: null, error: null });
  };

  const isAuthenticated = Boolean(localStorage.getItem("token"));
  if (isAuthenticated && !state.user) {
    //มีtokenรึยัง &&มีข้อมุลในstate รึยัง
    const token = localStorage.getItem("token");
    const userDataFromToken = jwtDecode(token);
    // window.localStorage.setItem("user", JSON.stringify(userDataFromToken));
    setState({ ...state, user: userDataFromToken });
  }
  return (
    <AuthContext.Provider
      value={{ register, login, logout, state, isAuthenticated }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
