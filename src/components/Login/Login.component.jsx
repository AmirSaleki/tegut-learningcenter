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
      if (enteredUserName.includes("@") && enteredPassword.length > 5) {
        dispatch(loginActions.login(true));
        window.localStorage.setItem("isLoggedIn", true);
      } else {
        alert("enter the right one!");
      }
    } else {
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
                type="password"
                placeholder="password"
                onChange={passwordHandler}
                required
              />
              {!currentlyUser && (
                <Input
                  type="password"
                  placeholder="retype your password"
                  onChange={secondPasswordHandler}
                />
              )}
              <Button className={currentlyUser ? "primary" : "salmon"}>
                {currentlyUser ? "Login" : "Create new Account"}
              </Button>
              <p onClick={userManagerHandler}>
                {currentlyUser
                  ? "Don't have an Account? Sign up"
                  : "Already a member? Sign in"}
              </p>
            </form>
          </Card>
        </animated.div>
      </div>
    </>
  );
};

export default Login;
