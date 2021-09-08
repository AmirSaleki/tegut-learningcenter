import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./App.css";
import dummyData from "./DUMMY_DATA";
import Header from "./components/Header/Header.component";
import Login from "./components/Login/Login.component";
import Intro from "./components/Intro/Intro.component";
import MainPage from "./components/MainPage/MainPage.component";
import Products from "./components/Products/Products.component";

function App() {
  const isLoggedIn = useSelector((state) => state.login.isAuthenticated);
  const [appSection, setAppSection] = useState("initialState");
  const [showMenu, setShowMenu] = useState(true);
  if (isLoggedIn) {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", function (event) {
      window.history.pushState(null, document.title, window.location.href);
    });
  }
  const appSectionHandler = (e) => {
    setAppSection(e.target.id);
    setShowMenu(false);
  };
  const homePageHandler = () => {
    setShowMenu(true);
    setAppSection("");
  };
  return (
    <>
      <Header homePageHandler={homePageHandler} />
      {!isLoggedIn && <Login />}
      {isLoggedIn && showMenu && (
        <Intro appSectionHandler={appSectionHandler} />
      )}
      {isLoggedIn && appSection === "PLU" && <MainPage />}
      {isLoggedIn && appSection === "PRODUCT" && <Products data={dummyData} />}
      {isLoggedIn && appSection === "KASSE" && (
        <h1 style={{ backgroundColor: "white" }}>
          Diese Seite befindet sich noch im Aufbau
        </h1>
      )}
    </>
  );
}

export default App;
