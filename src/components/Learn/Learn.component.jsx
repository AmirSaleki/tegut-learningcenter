import React, { useState } from "react";
import Numbers from "../UI/Numbers/Numbers.component";
import Input from "../UI/Input/Input.component";

import css from "./Learn.module.css";

const Learn = () => {
  const [inputNumbers, setInputNumbers] = useState([]);
  const numberHandler = (e) => {
    if (e.target.id === "C") {
      setInputNumbers([]);
    }

    if (
      inputNumbers.length <= 3 &&
      e.target.id !== "C" &&
      e.target.id !== "B"
    ) {
      setInputNumbers([...inputNumbers, e.target.id]);
    }
  };
  return (
    <>
      <div className={css.container}>
        <Input readOnly value={inputNumbers.join("")} />

        <Numbers numberHandler={numberHandler} />
      </div>
    </>
  );
};

export default Learn;
