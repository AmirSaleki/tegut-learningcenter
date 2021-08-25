import React from "react";
import Numbers from "../UI/Numbers/Numbers.component";

import css from "./Learn.module.css";

const Learn = () => {
  return (
    <>
      <div className={css.container}>
        <Numbers />
      </div>
    </>
  );
};

export default Learn;
