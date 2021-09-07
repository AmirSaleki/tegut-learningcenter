import React from "react";
import css from "./Intro.module.css";
import Card from "../UI/Card/Card.component";

const Intro = (props) => {
  return (
    <>
      <div className={css.container}>
        <Card>
          <div className={css.content}>
            <div
              id="PLU"
              onClick={props.appSectionHandler}
              className={css.section1}
            >
              <span id="PLU" onClick={props.appSectionHandler}>
                <h2 id="PLU" onClick={props.appSectionHandler}>
                  PLU-Codes
                </h2>
              </span>
            </div>
            <div
              id="PRODUCT"
              onClick={props.appSectionHandler}
              className={css.section2}
            >
              <span id="PRODUCT" onClick={props.appSectionHandler}>
                <h2 id="PRODUCT" onClick={props.appSectionHandler}>
                  Produktsuche
                </h2>
              </span>
            </div>
            <div
              id="KASSE"
              onClick={props.appSectionHandler}
              className={css.section3}
            >
              <span id="KASSE" onClick={props.appSectionHandler}>
                <h2 id="KASSE" onClick={props.appSectionHandler}>
                  Kassenprogramm
                </h2>
              </span>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Intro;
