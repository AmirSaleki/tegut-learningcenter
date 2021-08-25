import React, { useState } from "react";
import css from "./Numbers.module.css";
import Input from "../Input/Input.component";

const Numbers = () => {
  const [inputNumbers, setInputNumbers] = useState([]);
  const numberHandler = (e) => {
    if (e.target.id === "C") {
      setInputNumbers([]);
    }
    if (inputNumbers.length <= 3 && e.target.id !== "C") {
      setInputNumbers([...inputNumbers, e.target.id]);
    }
    console.log(inputNumbers);
  };
  return (
    <>
      <div className={css.container}>
        <span onClick={numberHandler} id={1}>
          1
        </span>
        <span onClick={numberHandler} id={2}>
          2
        </span>
        <span onClick={numberHandler} id={3}>
          3
        </span>
        <span onClick={numberHandler} id={4}>
          4
        </span>
        <span onClick={numberHandler} id={5}>
          5
        </span>
        <span onClick={numberHandler} id={6}>
          6
        </span>
        <span onClick={numberHandler} id={7}>
          7
        </span>
        <span onClick={numberHandler} id={8}>
          8
        </span>
        <span onClick={numberHandler} id={9}>
          9
        </span>
        <Input>5</Input>
        <span onClick={numberHandler} id={0}>
          0
        </span>
        <span onClick={numberHandler} id={"C"}>
          C
        </span>
      </div>
    </>
  );
};

export default Numbers;
