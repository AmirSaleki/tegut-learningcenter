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
  const breadData = dummyData.filter((item) => item.productForm === "bread");
  const falseAnswerArray = useSelector((state) => state.false.falseList);

  const [content, setContent] = useState("landingPage");
  const [showMenu, setShowMenu] = useState(true);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  const clickHandler = (e) => {
    setContent(e.target.value);
    e.target.value = "";
    setShowMenu(false);
  };
  return (
    <>
      <div className={css.container}>
        <Card>
          <div className={css.interior}>
            <div className={css.menu}>
              <div onClick={showMenuHandler} className={css.hamburgerMenu}>
                <i className="fas fa-bars"></i>
              </div>
              <div className={showMenu ? css.menuContent : css.hide}>
                <label htmlFor="learn-plu">PLU Lern-Kategorien:</label>
                <select onChange={clickHandler} name="learn-plu" id="learn-plu">
                  <option value="">Wählen Sie einen Modus</option>
                  <option value="learn">Alles</option>
                  <option value="learn-fruit">Obst</option>
                  <option value="learn-vegetable">Gemüse</option>
                  <option value="learn-bread">Backwaren</option>
                  <option value="learn-meat">Metzgerei</option>
                </select>{" "}
                <label htmlFor="quiz-plu">PLU Quiz-Kategorien:</label>
                <select onChange={clickHandler} name="quiz-plu" id="quiz-plu">
                  <option value="">Wählen Sie einen Modus</option>
                  <option value="quiz">Alles</option>
                  <option value="quiz-fruit">Obst</option>
                  <option value="quiz-vegetable">Gemüse</option>
                  <option value="quiz-bread">Backwaren</option>
                  <option value="quiz-meat">Metzgerei</option>
                  <option value="quiz-false">Fehler Liste</option>
                </select>
              </div>
            </div>
            <div className={css.content}>
              {content === "landingPage" && (
                <h3>
                  Bitte wählen Sie eine Lernmethode aus dem Menü auf der linken
                  Seite
                </h3>
              )}
              {content === "learn" && <Learn data={dummyData} />}
              {content === "learn-fruit" && <Learn data={fruitData} />}
              {content === "learn-vegetable" && <Learn data={vegetableData} />}
              {content === "learn-meat" && <Learn data={meatData} />}
              {content === "learn-bread" && <Learn data={breadData} />}
              {content === "quiz" && <Quiz data={dummyData} />}
              {content === "quiz-fruit" && <Quiz data={fruitData} />}
              {content === "quiz-vegetable" && <Quiz data={vegetableData} />}
              {content === "quiz-meat" && <Quiz data={meatData} />}
              {content === "quiz-bread" && <Quiz data={breadData} />}
              {content === "quiz-false" && falseAnswerArray.length > 0 && (
                <Quiz data={falseAnswerArray} />
              )}
              {content === "quiz-false" && falseAnswerArray.length <= 0 && (
                <h3>
                  Diese Seite funktioniert nur, wenn Sie in einem anderen Quiz
                  eine falsche PLU eingegeben haben
                </h3>
              )}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default MainPage;
