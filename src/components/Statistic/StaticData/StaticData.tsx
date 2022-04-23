import { IonIcon, IonProgressBar, IonText } from "@ionic/react";
import React from "react";

import classes from "./StaticData.module.css";

import { personOutline as clientIcon } from "ionicons/icons";

interface StaticDataProps {
  iconSrc: string;
  number: number;
  color: string;
  percentage: number;
  title: string;
}

const StaticData: React.FC<StaticDataProps> = ({
  iconSrc,
  color,
  number,
  percentage,
  title,
}) => {
  return (
    <div className={classes["data"]}>
      <div className={classes["header"]}>
        <IonIcon
          style={{ color: color }}
          src={iconSrc}
          className={classes["header-icon"]}
        />
        <IonText className={classes["header-text"]}>{title}</IonText>
      </div>
      <div className={classes["static"]}>
        <div className={classes["static-client"]}>
          <IonIcon src={clientIcon} className={classes["static-client-icon"]} />
          <IonText className={classes["static-client-text"]}>کاربر</IonText>
        </div>
        <div className={classes["static-number"]}>
          <IonText
            style={{ color: color }}
            className={classes["static-number__text"]}
          >
            {number}
          </IonText>
        </div>
      </div>
      <IonProgressBar
        value={percentage}
        color="primary"
        className={classes["static-bar"]}
      />
    </div>
  );
};

export default StaticData;
