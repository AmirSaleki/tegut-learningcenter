import React from "react";
import "./Input.module.css";

const Input = (props) => {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      >
        {props.children}
      </input>
    </>
  );
};

export default Input;
