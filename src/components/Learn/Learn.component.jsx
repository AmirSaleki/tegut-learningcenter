import React, { useState, useEffect } from "react";

import Numbers from "../UI/Numbers/Numbers.component";
import Input from "../UI/Input/Input.component";
import Content from "../Content/Content.component";
import css from "./Learn.module.css";

const Learn = (props) => {
  const [inputNumbers, setInputNumbers] = useState([]);
  const [nextItem, setNextItem] = useState(0);
  const data = props.data;
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
      inputNumbers.join("").toString() === data[nextItem].ArtikelNr.toString()
    ) {
      setInputNumbers([]);
      if (nextItem < data.length - 1) {
        setNextItem(nextItem + 1);
      } else {
        setNextItem(0);
      }
    }
  };

  useEffect(isCorrect, [inputNumbers, nextItem, data]);

  return (
    <>
      <div className={css.container}>
        <div className={css.content}>
          <div>
            <label htmlFor="progressbar">Fortschrittsanzeige</label>
            <meter
              id="progressbar"
              min="0"
              max={data.length}
              value={nextItem}
            />
          </div>
          <Content image={data[nextItem].img} />
        </div>
        <div className={css.details}>
          <p>Name: {data[nextItem].title}</p>
          <p>Artikel Nummer: {data[nextItem].ArtikelNr}</p>
          <p>Type: {data[nextItem].type}</p>
        </div>
        <div className={css.number}>
          <Input
            placeholder={data[nextItem].ArtikelNr}
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
