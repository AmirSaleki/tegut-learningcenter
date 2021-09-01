import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { falseActions } from "../../store/falseItems";

import Numbers from "../UI/Numbers/Numbers.component";
import Input from "../UI/Input/Input.component";
import css from "./Quiz.module.css";
import Content from "../Content/Content.component";

const Quiz = (props) => {
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(0);
  const [inputNumbers, setInputNumbers] = useState([]);
  const [nextItem, setNextItem] = useState(0);

  const dispatch = useDispatch();
  const currentFalseArray = useSelector((state) => state.false.falseList);

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
    const currentArtikel = props.data[nextItem].ArtikelNr.toString();
    if (
      inputNumbers.join("").toString() ===
      props.data[nextItem].ArtikelNr.toString()
    ) {
      setIsCorrectAnswer(1);
      setTimeout(() => {
        setIsCorrectAnswer(0);
      }, 500);
      setInputNumbers([]);

      if (nextItem < props.data.length - 1) {
        setTimeout(() => {
          setNextItem(nextItem + 1);
        }, 500);
      } else {
        setNextItem(0);
      }
    } else if (
      inputNumbers.join("").length === currentArtikel.length &&
      inputNumbers.join("").toString() !==
        props.data[nextItem].ArtikelNr.toString()
    ) {
      setIsCorrectAnswer(2);
      setTimeout(() => {
        setIsCorrectAnswer(0);
      }, 500);
      const falseItem = props.data[nextItem];
      if (!currentFalseArray.find((item) => item === falseItem)) {
        dispatch(falseActions.addItem(falseItem));
      }
    }
  };
  useEffect(isCorrect, [
    inputNumbers,
    nextItem,
    props,
    dispatch,
    currentFalseArray,
  ]);

  return (
    <>
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.logos}>
            <i
              className="fas fa-check-circle fa-4x"
              style={isCorrectAnswer === 1 ? { color: "green" } : { color: "" }}
            ></i>
            <i
              className="fas fa-times-circle fa-4x"
              style={isCorrectAnswer === 2 ? { color: "red" } : { color: "" }}
            ></i>
          </div>
          <Content image={props.data[nextItem].img} />
        </div>
        <div className={css.numpad}>
          <Input readOnly={true} value={inputNumbers.join("")} />
          <Numbers numberHandler={numberHandler} />
        </div>
      </div>
    </>
  );
};

export default Quiz;
