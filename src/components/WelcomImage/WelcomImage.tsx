import { IonImg } from "@ionic/react";
import React from "react";

import classes from "./WelcomImage.module.css";

import backgroundImage from "../../assets/svgs/background-mobile.svg";
import jaanOutlinedImage from "../../assets/images/jaan-logo-outline.png";

const WelcomImage: React.FC = () => {
  return (
    <div className={classes["welcom"]}>
      <IonImg
        className={classes["welcome__background"]}
        src={backgroundImage}
      />
      <IonImg src={jaanOutlinedImage} className={classes["welcome__logo"]} />
    </div>
  );
};

export default WelcomImage;
