import React, { useState } from "react";

import css from "./MainPage.module.css";
import Card from "../UI/Card/Card.component";
import Learn from "../Learn/Learn.component";
import Quiz from "../Quiz/Quiz.component";

const MainPage = () => {
  const [content, setContent] = useState("");
  const learnHandler = () => {
    setContent("learn");
  };
  const quizHandler = () => {
    setContent("quiz");
  };
  return (
    <>
      <div className={css.container}>
        <Card>
          <div className={css.interior}>
            <div className={css.menu}>
              <span onClick={learnHandler}>Lernen</span>
              <span onClick={quizHandler}>Quiz</span>
            </div>
            <div className={css.content}>
              {content === "learn" && <Learn />}
              {content === "quiz" && <Quiz />}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default MainPage;
