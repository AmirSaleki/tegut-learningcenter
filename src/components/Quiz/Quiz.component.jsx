import React from "react";
import Numbers from "../UI/Numbers/Numbers.component";
import css from "./Quiz.module.css";

const Quiz = () => {
  return (
    <>
      <div className={css.container}>
        <Numbers />
      </div>
    </>
  );
};

export default Quiz;
