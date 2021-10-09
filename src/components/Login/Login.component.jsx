import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useDispatch } from "react-redux";

import apiKeys from "../../API_KEYS";
import { loginActions } from "../../store/login-slice";
import { profileActions } from "../../store/profile";
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
  const [secondPassword, setSecondPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [signupError, setSignupError] = useState(false);
  const [signupErrorMessage, setSignupErrorMessage] = useState("");

  const firebaseAPI = apiKeys.firebaseAuthAPI;

  const userManagerHandler = () => {
    setCurrentlyUser(!currentlyUser);
  };

  const userNameHandler = (el) => {
    setEnteredUserName(el.target.value);
    dispatch(profileActions.addEmail(el.target.value.trim()));
  };

  const passwordHandler = (el) => {
    setEnteredPassword(el.target.value);
    setSignupError(false);
  };

  const secondPasswordHandler = (el) => {
    setSecondPassword(el.target.value);
    setSignupError(false);
  };

  const logoutHandler = () => {
    const fortyMinutes = 3000000;
    setTimeout(() => {
      dispatch(loginActions.logout());
      console.log("The time has arrived");
    }, fortyMinutes);
  };

  const submitHandler = (el) => {
    el.preventDefault();
    let url;
    if (currentlyUser) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
        firebaseAPI;
    } else {
      if (enteredPassword === secondPassword) {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
          firebaseAPI;
      } else {
        alert("Please enter your password twice!");
      }
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredUserName,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          dispatch(loginActions.login());
          logoutHandler();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            setSignupError(true);
            setSignupErrorMessage(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(" dataaaa    " + data);
      });
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
                  required
                />
              )}
              {signupError && (
                <p style={{ color: "red" }}>{signupErrorMessage}</p>
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
