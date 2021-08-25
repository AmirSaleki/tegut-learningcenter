import React from "react";
import { useSelector } from "react-redux";

import "./App.css";
import Header from "./components/Header/Header.component";
import Login from "./components/Login/Login.component";
import MainPage from "./components/MainPage/MainPage.component";

function App() {
  const isLoggedIn = useSelector((state) => state.login.isAuthenticated);
  return (
    <>
      <Header />
      {!isLoggedIn && <Login />}
      {isLoggedIn && <MainPage />}
    </>
  );
}

export default App;
