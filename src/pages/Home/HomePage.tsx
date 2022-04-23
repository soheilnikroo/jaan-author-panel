import {
  IonContent,
  IonIcon,
  IonPage,
  IonSkeletonText,
  IonText,
} from "@ionic/react";
import React, { Fragment, useEffect, useState } from "react";

// import css
import classes from "./HomePage.module.css";

import { ticketOutline as discountIcon } from "ionicons/icons";
import Statistic from "../../components/Statistic/Statistic";
import StatisticSkeleton from "../../components/Skeleton/StatisticSkeleton/StatisticSkeleton";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className={classes["home-content"]}>
          <div className={classes["header"]}>
            <IonIcon src={discountIcon} className={classes["header-icon"]} />
            <IonText className={classes["header-text"]}>
              کد‌‌‌‌های تخفیف شما
            </IonText>
          </div>
          <div className={classes["static-container"]}>
            {isLoading ? (
              <Fragment>
                <StatisticSkeleton />
                <StatisticSkeleton />
                <StatisticSkeleton />
              </Fragment>
            ) : (
              data.map((item: any) => {
                return (
                  <Statistic
                    key={item.id}
                    discountCode="abdshg3546"
                    viewPercentage={item.price / 100}
                    paymentPercentage={item.rating.count / 10}
                    viewNumber={item.rating.count}
                    paymentNumber={item.price}
                  />
                );
              })
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
