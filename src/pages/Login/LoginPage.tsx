import { IonContent, IonPage } from "@ionic/react";
import React, { Fragment, useEffect, useState } from "react";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import PhoneNumberInput from "../../components/PhoneNumberInput/PhoneNumberInput";
import TextField from "../../components/TextField/TextField";
import WelcomImage from "../../components/WelcomImage/WelcomImage";
import { InputChangeEventDetail } from "@ionic/react";

import "./LoginPage.css";
import Loader from "../../components/Loader/Loader";
import useForm from "../../hook/useForm";
import { useHistory } from "react-router";

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean | null>(false);
  const [buttonDisable, setButtonDisable] = useState<boolean>(true);

  const [phoneNumber, setPhoneNumber, phoneError, setPhoneError] = useForm({
    intialValue: "",
    minLengthValue: { value: 11, error: "شماره تلفن باید 11 رقم باشد" },
    maxLengthValue: { value: 11, error: "شماره تلفن باید 11 رقم باشد" },
    timeCheck: 1000,
  });

  const history = useHistory();

  const phoneSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.push(`/auth/code/${phoneNumber}`);
  };

  const phoneNumberChangeHandler = (
    event: CustomEvent<InputChangeEventDetail>
  ) => {
    setPhoneError("");
    setPhoneNumber(event.detail.value);
  };

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      setLoading(false);
      window.clearTimeout();
    };
  }, []);

  useEffect(() => {
    if (phoneNumber === "" || phoneError !== "") {
      setButtonDisable(true);
    } else {
      setButtonDisable(false);
    }
  }, [phoneNumberChangeHandler, phoneError]);

  return (
    <IonPage className="login">
      <IonContent fullscreen>
        {loading ? (
          <Loader
            spinner={"crescent"}
            keyboardClose={true}
            animated={true}
            isOpen={loading}
            message={"Please wait..."}
          />
        ) : (
          <Fragment>
            <WelcomImage />
            <div className="login__content">
              <div className="login__content-text">
                <TextField className="login__title" text="ورود به پنل جآن" />
                <TextField
                  className="login__description"
                  text="برای ورود به پنلتان در جآن، شماره موبایل خود را وارد کنید."
                />
              </div>
              <form onSubmit={phoneSubmitHandler} className="login__form">
                <div className="login__inputs">
                  <PhoneNumberInput
                    error={phoneError}
                    onChange={phoneNumberChangeHandler}
                  />
                  {<p className="error-text">{phoneError}</p>}
                </div>
                <div className="login-button">
                  <PrimaryButton
                    disabled={buttonDisable}
                    className="login__button"
                    text="تایید"
                  />
                </div>
              </form>
            </div>
          </Fragment>
        )}
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
