import React, { useState } from "react";
import { useSelector } from "react-redux";

import Card from "../UI/Card/Card.component";
import css from "./Profile.module.css";
import dummyData from "../../DUMMY_DATA";
import apiKeys from "../../API_KEYS";
import Button from "../UI/Button/Button.component";
import Input from "../UI/Input/Input.component";

const Profile = (props) => {
  const [showFalseItems, setShowFalseItems] = useState(false);
  const [changePasswordButton, setChangePasswordButton] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const falseInputData = useSelector((state) => state.false.falseList);
  const profileData = useSelector((state) => state.profile.profileData);
  const learnedItemsLength = profileData.learnedItems.length;
  const allItemsLength = dummyData.length;
  const showFalseItemsHandler = () => {
    setShowFalseItems(!showFalseItems);
  };

  const selectNewPasswordHandler = (el) => {
    setNewPassword(el.target.value.trim());
  };

  const tokenID = useSelector((state) => state.login.tokenID);
  const changePasswordVisibilityHandler = () => {
    setChangePasswordButton(!changePasswordButton);
  };

  const changePasswordHandler = () => {
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=" +
      apiKeys.firebaseAuthAPI;
    if (newPassword.length > 6) {
      async function changePassword() {
        await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            idToken: tokenID,
            password: newPassword,
            returnSecureToken: true,
          }),
        });
      }
      changePassword().catch((err) => console.log("error" + err));
    } else {
      alert("Choose a longer password please");
    }
  };

  return (
    <>
      <div className={css.container}>
        <Card>
          <i
            className="fas fa-times fa-2x"
            onClick={props.closeProfileHandler}
          ></i>
          <div className={css.profileContent}>
            <div className={css.proHeader}>
              <img src={props.image} alt="" />
              <div className={css.profileDetails}>
                <h3>{props.name}</h3>
                <h6>{profileData.email}</h6>
                <h6
                  className={css.changePassword}
                  onClick={changePasswordVisibilityHandler}
                >
                  Passwort ändern
                </h6>
                {changePasswordButton && (
                  <div>
                    <Input
                      id="changePasswordInput"
                      type="text"
                      onChange={selectNewPasswordHandler}
                    ></Input>
                    <Button className="salmon" onClick={changePasswordHandler}>
                      Change
                    </Button>
                  </div>
                )}
                <h3>{props.role}</h3>
                <h3 style={{ color: "gray", cursor: "pointer" }}>Wochenplan</h3>
              </div>
            </div>
            <div className={css.proBody}>
              <div className={css.statics}>
                <label htmlFor="learn-progressbar">
                  bereits gelernte PLU-Codes
                </label>
                <meter
                  id="learn-progressbar"
                  min="0"
                  max={allItemsLength}
                  value={learnedItemsLength}
                />
                <label htmlFor="quiz-progressbar">richtige Antworten</label>
                <meter
                  id="quiz-progressbar"
                  min="0"
                  max={learnedItemsLength}
                  value={learnedItemsLength - falseInputData.length}
                />
                <p className={css.bigButton} onClick={showFalseItemsHandler}>
                  Falsch angegebene Artikel
                </p>
              </div>
            </div>
          </div>
        </Card>
        {showFalseItems &&
          (falseInputData.length > 0 ? (
            <Card>
              <div className={css.falseItemsContent}>
                {falseInputData.map((item) => (
                  <div className={css.itemContentContainer} key={item.id}>
                    <img
                      className={css.itemImage}
                      src={item.img}
                      alt={item.id}
                    />
                    <div className={css.itemDetails}>
                      <p>{item.title}</p>
                      <p>{item.ArtikelNr}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ) : (
            <Card>
              <h3
                style={{ color: "black", textAlign: "center", padding: "1rem" }}
              >
                Woohoo! Du hast keine Fehler.
              </h3>
            </Card>
          ))}
      </div>
    </>
  );
};

export default Profile;
