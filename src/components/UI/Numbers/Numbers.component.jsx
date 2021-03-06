import React from "react";
import css from "./Numbers.module.css";

const Numbers = (props) => {
  return (
    <>
      <div className={css.container}>
        <span onClick={props.numberHandler} id={1}>
          1
        </span>
        <span onClick={props.numberHandler} id={2}>
          2
        </span>
        <span onClick={props.numberHandler} id={3}>
          3
        </span>
        <span onClick={props.numberHandler} id={4}>
          4
        </span>
        <span onClick={props.numberHandler} id={5}>
          5
        </span>
        <span onClick={props.numberHandler} id={6}>
          6
        </span>
        <span onClick={props.numberHandler} id={7}>
          7
        </span>
        <span onClick={props.numberHandler} id={8}>
          8
        </span>
        <span onClick={props.numberHandler} id={9}>
          9
        </span>
        <span onClick={props.numberHandler} id={"C"}>
          C
        </span>
        <span onClick={props.numberHandler} id={0}>
          0
        </span>
        <span onClick={props.numberHandler} id={"B"}>
          <i
            onClick={props.numberHandler}
            id={"B"}
            className="fas fa-backspace"
          ></i>
        </span>
      </div>
    </>
  );
};

export default Numbers;
