import { IonContent, IonIcon, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import OTPInput from "../../components/OTPInput/OTPInput";
import TextField from "../../components/TextField/TextField";

import classes from "./VerifyCodePage.module.css";

import VerifyCode from "../../assets/svgs/verification-code.svg";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import { useHistory, useParams } from "react-router";
import useTypedDispatch from "../../hook/useTypedDispatch";
import { setUser } from "../../redux";

// sample code
let code = "1234";

let userEnteredCode = "";

const VerifyCodePage: React.FC = () => {
  const { phone } = useParams<any>();

  const [errorCode, setErrorCode] = useState(false);

  const history = useHistory();
  const dispatch = useTypedDispatch();

  const [timer, setTimer] = useState<number>(60);

  const goToPhoenNumberPage = () => {
    history.replace("/auth");
  };

  useEffect(() => {
    if (timer !== 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [timer]);

  const reSendCode = () => {
    setTimer(60);
  };

  const otpChangeHandler = (code: string) => {
    userEnteredCode = code;
    setErrorCode(false);
  };

  const goToHomePage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userEnteredCode === code) {
      dispatch(
        setUser({ lastLogin: new Date().toISOString(), phoneNumber: phone })
      );
      history.replace(`/${phone}/home`);
    } else {
      setErrorCode(true);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <form onSubmit={goToHomePage} className={classes["verify-content"]}>
          <div className={classes["verify-header"]}>
            <IonIcon src={VerifyCode} className={classes["verify-icon"]} />
            <div className={classes["verify-content_text"]}>
              <TextField
                className={classes["verify-content_text-title"]}
                text="تایید شماره موبایل"
              />
              <TextField
                className={classes["verify-content_text-description"]}
                text={`رمز یک بار مصرف به شماره ${phone} ارسال شد`}
              />
              <div onClick={goToPhoenNumberPage}>
                <TextField
                  className={classes["verify-content_text-changing"]}
                  text="تغییر شماره"
                />
              </div>
            </div>
          </div>
          <div className={classes["verify-otp"]}>
            <OTPInput error={errorCode} onGetCode={otpChangeHandler} />
            <div className={classes["otp-timer"]}>
              <div
                style={timer === 0 ? { fontWeight: "800" } : {}}
                onClick={timer === 0 ? reSendCode : undefined}
              >
                <TextField
                  className={classes["otp-time__text"]}
                  text={`${
                    timer !== 0
                      ? timer + ":00" + " تا ارسال مجدد کد"
                      : "ارسال مجدد کد"
                  }`}
                />
              </div>
            </div>
          </div>
          <div className={classes["verify-button_wrapper"]}>
            <PrimaryButton className={classes["verify-button"]} text="ورود" />
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default VerifyCodePage;
