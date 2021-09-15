import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../../store/login-slice";

import css from "./Header.module.css";

const Header = (props) => {
  const isLoggedIn = useSelector((state) => state.login.isAuthenticated);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(loginActions.logout());
  };
  return (
    <>
      <div className={css.header}>
        <div className={css.container}>
          <div className={css.navbar}>
            {isLoggedIn && (
              <ul>
                <li onClick={logoutHandler}>Abmelden</li>
                <li onClick={props.profileHandler}>Profil</li>
                <li onClick={props.homePageHandler}>Startseite</li>
              </ul>
            )}
          </div>
          <div onClick={props.homePageHandler} className={css.logo}>
            <p onClick={props.homePageHandler} className={css.logoText}>
              TLC
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
