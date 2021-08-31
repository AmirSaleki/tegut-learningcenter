import React, { useState, useEffect } from "react";

import Numbers from "../UI/Numbers/Numbers.component";
import Input from "../UI/Input/Input.component";
import Content from "../Content/Content.component";
import css from "./Learn.module.css";
import dummyData from "../../DUMMY_DATA";

const Learn = () => {
  const [inputNumbers, setInputNumbers] = useState([]);
  const [nextItem, setNextItem] = useState(0);
  const numberHandler = (e) => {
    if (e.target.id === "C") {
      setInputNumbers([]);
    }
    if (e.target.id === "B") {
      const removeLastItem = inputNumbers.slice(0, -1);
      setInputNumbers(removeLastItem);
    }

    if (
      inputNumbers.length <= 3 &&
      e.target.id !== "C" &&
      e.target.id !== "B"
    ) {
      setInputNumbers([...inputNumbers, e.target.id]);
    }
  };
  const isCorrect = () => {
    if (
      inputNumbers.join("").toString() ===
      dummyData[nextItem].ArtikelNr.toString()
    ) {
      setInputNumbers([]);
      if (nextItem < dummyData.length - 1) {
        setNextItem(nextItem + 1);
      } else {
        setNextItem(0);
      }
    }
  };

  useEffect(isCorrect, [inputNumbers, nextItem]);

  return (
    <>
      <div className={css.container}>
        <div className={css.content}>
          <Content image={dummyData[nextItem].img} />
        </div>
        <div className={css.number}>
          <div>
            <p>Name: {dummyData[nextItem].title}</p>
            <p>Artikel Nummer: {dummyData[nextItem].ArtikelNr}</p>
            <p>Type: {dummyData[nextItem].type}</p>
          </div>
          <Input
            placeholder={dummyData[nextItem].ArtikelNr}
            readOnly={true}
            value={inputNumbers.join("")}
          />
          <Numbers numberHandler={numberHandler} />
        </div>
      </div>
    </>
  );
};

export default Learn;
