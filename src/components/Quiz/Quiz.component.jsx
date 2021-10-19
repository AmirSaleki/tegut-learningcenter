import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { falseActions } from "../../store/falseItems";

import Numbers from "../UI/Numbers/Numbers.component";
import Input from "../UI/Input/Input.component";
import css from "./Quiz.module.css";
import Content from "../Content/Content.component";
import Button from "../UI/Button/Button.component";

const Quiz = (props) => {
  const [isCorrectAnswer, setIsCorrectAnswer] = useState("");
  const [inputNumbers, setInputNumbers] = useState([]);
  const [nextItem, setNextItem] = useState(0);

  const dispatch = useDispatch();
  const currentFalseArray = useSelector((state) => state.false.falseList);
  // Handling the input numbers
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
  //Handling the correctness of the answer
  const isCorrect = () => {
    // to check the length of answer with the input
    const currentArtikel = props.data[nextItem].ArtikelNr.toString();
    //checking if it's true
    if (
      inputNumbers.join("").toString() ===
      props.data[nextItem].ArtikelNr.toString()
    ) {
      setIsCorrectAnswer("true");
      setTimeout(() => {
        setIsCorrectAnswer("");
      }, 500);
      setInputNumbers([]);

      if (nextItem < props.data.length - 1 && !props.troubleshooting) {
        setTimeout(() => {
          setNextItem(nextItem + 1);
        }, 500);
      } else {
        setNextItem(0);
      }

      if (props.troubleshooting) {
        dispatch(falseActions.removeItem(props.data[nextItem].ArtikelNr));
        setNextItem(0);
      }
      //checking if it's false
    } else if (
      inputNumbers.join("").length === currentArtikel.length &&
      inputNumbers.join("").toString() !==
        props.data[nextItem].ArtikelNr.toString()
    ) {
      setIsCorrectAnswer("false");
      setTimeout(() => {
        setIsCorrectAnswer("");
      }, 500);
      const falseItem = props.data[nextItem];
      if (!currentFalseArray.find((item) => item === falseItem)) {
        dispatch(falseActions.addItem(falseItem));
      }
    }
  };

  const skipHandler = () => {
    setIsCorrectAnswer("false");
    setTimeout(() => {
      setIsCorrectAnswer("");
    }, 500);
    setInputNumbers([]);

    const falseItem = props.data[nextItem];
    if (!currentFalseArray.find((item) => item === falseItem)) {
      dispatch(falseActions.addItem(falseItem));
    }
    setTimeout(() => {
      setNextItem(nextItem + 1);
    }, 500);
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
          <div>
            <label htmlFor="progressbar">Fortschrittsanzeige</label>
            <meter
              id="progressbar"
              min="0"
              max={props.data.length}
              value={nextItem}
            />
          </div>
          <div className={css.logos}>
            <i
              className="fas fa-check-circle fa-4x"
              style={
                isCorrectAnswer === "true" ? { color: "green" } : { color: "" }
              }
            ></i>
            <i
              className="fas fa-times-circle fa-4x"
              style={
                isCorrectAnswer === "false" ? { color: "red" } : { color: "" }
              }
            ></i>
          </div>
          {props.data.length > 0 && (
            <Content image={props.data[nextItem].img} />
          )}
        </div>
        <div className={css.numpad}>
          <Input readOnly={true} value={inputNumbers.join("")} />
          <Numbers numberHandler={numberHandler} />
          {!props.troubleshooting && (
            <Button onClick={skipHandler} className="secondary">
              Überspringen
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
