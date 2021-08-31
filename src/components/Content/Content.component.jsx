import React from "react";
import css from "./Content.module.css";

const Content = (props) => {
  return (
    <>
      <div className={css.container}>
        <img src={props.image} alt={props.id} />
      </div>
    </>
  );
};

export default Content;
