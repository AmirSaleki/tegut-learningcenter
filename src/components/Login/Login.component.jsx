import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/login-slice";

import css from "./Login.module.css";
import Input from "../UI/Input/Input.component";
import Card from "../UI/Card/Card.component";
import Button from "../UI/Button/Button.component";

const Login = () => {
  const spring = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  const dispatch = useDispatch();
  const [currentlyUser, setCurrentlyUser] = useState(true);
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const userManagerHandler = () => {
    setCurrentlyUser(!currentlyUser);
  };

  const userNameHandler = (el) => {
    setEnteredUserName(el.target.value);
  };

  const passwordHandler = (el) => {
    setEnteredPassword(el.target.value);
  };

  const secondPasswordHandler = (el) => {};

  const submitHandler = (el) => {
    el.preventDefault();
    if (currentlyUser) {
      if (
        enteredUserName.toLowerCase().trim() === "admin@tlc.com" &&
        enteredPassword === "tegut1234"
      ) {
        dispatch(loginActions.login(true));
        window.localStorage.setItem("isLoggedIn", true);
      } else {
        alert("enter the right one!");
      }
    } else {
    }
  };
  const showPasswordHandler = (e) => {
    if (e.target.checked) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };
  return (
    <>
      <div className={css.background}>
        <animated.div style={spring} className={css.container}>
          <Card>
            <form className={css.form} onSubmit={submitHandler}>
              <h2>tegut-Lernzentrum</h2>
              <h4>
                erfahre alles was du brauchst um deine Karriere bei uns zu
                starten
              </h4>
              <Input
                type="text"
                placeholder="username"
                onChange={userNameHandler}
                required
              />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                onChange={passwordHandler}
                required
              />
              {!currentlyUser && (
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="retype your password"
                  onChange={secondPasswordHandler}
                />
              )}
              <span className={css.showPassword}>
                <input
                  onChange={showPasswordHandler}
                  id="show-password"
                  type="checkbox"
                />
                <label id="sp-label" htmlFor="show-password">
                  Passwort anzeigen
                </label>
              </span>
              <Button className={currentlyUser ? "primary" : "salmon"}>
                {currentlyUser ? "Einloggen" : "Benutzerkonto erstellen"}
              </Button>
              <p onClick={userManagerHandler}>
                {currentlyUser
                  ? "Noch kein Konto? Hier Anmelden"
                  : "Schon ein Mitglied? Einloggen"}
              </p>
            </form>
          </Card>
        </animated.div>
      </div>
    </>
  );
};

export default Login;
