import { IonText } from "@ionic/react";
import React from "react";
import StaticData from "./StaticData/StaticData";

import classes from "./Statistic.module.css";

import {
  walletOutline as paymentIcon,
  eyeOutline as viewIcon,
} from "ionicons/icons";

interface StatisticProps {
  viewNumber: number;
  paymentNumber: number;
  discountCode: string;
  viewPercentage: number;
  paymentPercentage: number;
}

const Statistic: React.FC<StatisticProps> = ({
  viewNumber,
  paymentNumber,
  discountCode,
  paymentPercentage,
  viewPercentage,
}) => {
  return (
    <div className={classes["statistic"]}>
      <IonText className={classes["statistic-text"]}>
        کد تخفیف:{" "}
        <span className={classes["statistic-code"]}>{discountCode}</span>
      </IonText>
      <div className={classes["statistic-wrapper"]}>
        <StaticData
          title="پرداخت"
          iconSrc={paymentIcon}
          number={paymentNumber}
          color="#7C73E0"
          percentage={paymentPercentage}
        />
        <StaticData
          title="بازدید"
          iconSrc={viewIcon}
          percentage={viewPercentage}
          number={viewNumber}
          color="#37A4E9"
        />
      </div>
    </div>
  );
};

export default Statistic;
