import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../../store/login-slice";

import css from "./Header.module.css";

const Header = () => {
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
              </ul>
            )}
          </div>
          <div className={css.logo}>
            <p className={css.logoText}>tegut</p>
            <p>gute Lebensmittel</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
