import React, { useState } from "react";
import { useSelector } from "react-redux";

import dummyData from "../../DUMMY_DATA";
import css from "./MainPage.module.css";
import Card from "../UI/Card/Card.component";
import Learn from "../Learn/Learn.component";
import Quiz from "../Quiz/Quiz.component";

const MainPage = () => {
  const fruitData = dummyData.filter((item) => item.productForm === "fruit");
  const vegetableData = dummyData.filter(
    (item) => item.productForm === "vegetable"
  );
  const meatData = dummyData.filter((item) => item.productForm === "meat");
  const falseAnswerArray = useSelector((state) => state.false.falseList);
  const [content, setContent] = useState("learn");

  const clickHandler = (e) => {
    setContent(e.target.id);
  };

  return (
    <>
      <div className={css.container}>
        <Card>
          <div className={css.interior}>
            <div className={css.menu}>
              <span>Lernen</span>
              <ul>
                <li id="learn" onClick={clickHandler}>
                  Alles
                </li>
                <li onClick={clickHandler} id="learn-fruit">
                  Obst
                </li>
                <br />
                <li onClick={clickHandler} id="learn-vegetable">
                  Gemüse
                </li>
                <br />
                <li onClick={clickHandler} id="learn-meat">
                  Metzgerei
                </li>
              </ul>
              <span>Quiz</span>
              <ul>
                <li id="quiz" onClick={clickHandler}>
                  Alles
                </li>
                <li onClick={clickHandler} id="quiz-fruit">
                  Obst
                </li>
                <br />
                <li onClick={clickHandler} id="quiz-vegetable">
                  Gemüse
                </li>
                <br />
                <li onClick={clickHandler} id="quiz-meat">
                  Metzgerei
                </li>
                <li onClick={clickHandler} id="quiz-false">
                  Fehler Liste
                </li>
              </ul>
            </div>
            <div className={css.content}>
              {content === "learn" && <Learn data={dummyData} />}
              {content === "learn-fruit" && <Learn data={fruitData} />}
              {content === "learn-vegetable" && <Learn data={vegetableData} />}
              {content === "learn-meat" && <Learn data={meatData} />}
              {content === "quiz" && <Quiz data={dummyData} />}
              {content === "quiz-fruit" && <Quiz data={fruitData} />}
              {content === "quiz-vegetable" && <Quiz data={vegetableData} />}
              {content === "quiz-meat" && <Quiz data={meatData} />}
              {content === "quiz-false" && <Quiz data={falseAnswerArray} />}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default MainPage;
