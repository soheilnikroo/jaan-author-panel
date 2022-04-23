import { IonIcon } from "@ionic/react";
import React, { useEffect, useRef } from "react";
import TextField from "../TextField/TextField";

import classes from "./OTPInput.module.css";

import { lockClosedOutline as otpIcon } from "ionicons/icons";

interface OTPInputProps {
  className?: string;
  onGetCode?: (code: string) => void;
  error?: boolean;
}

const OTPInput: React.FC<OTPInputProps> = ({ className, onGetCode, error }) => {
  const firstInput = useRef<any>(null);
  const secondInput = useRef<any>(null);
  const thirdInput = useRef<any>(null);
  const fourthInput = useRef<any>(null);

  const clickEvent = (
    event: any,
    nextElement?: React.MutableRefObject<HTMLInputElement>,
    prevElement?: React.MutableRefObject<HTMLInputElement>
  ) => {
    console.log(event);

    if (
      event.target.value.length &&
      event.nativeEvent.inputType !== "deleteContentBackward"
    ) {
      event.target.value = event.nativeEvent.data;
      if (nextElement) {
        nextElement.current.focus();
      }
    }

    if (
      event.nativeEvent.inputType === "deleteContentBackward" &&
      event.target.value.length === 0
    ) {
      prevElement?.current.focus();
    }

    passCodeEnteredToParent();
  };

  const passCodeEnteredToParent = () => {
    let code =
      firstInput.current.value.trim() +
      secondInput.current.value.trim() +
      thirdInput.current.value.trim() +
      fourthInput.current.value.trim();
    onGetCode?.(code);
  };

  return (
    <div className={classes["container"]}>
      <div className={classes["otp-header"]}>
        <IonIcon className={classes["otp-icon"]} src={otpIcon} />
        <TextField
          className={classes["otp-header__title-text"]}
          text="رمز یکبار مصرف"
        />
      </div>
      <div className={classes["otp"]}>
        <input
          ref={firstInput}
          className={classes[`otp-input${error ? "-error" : ""}`]}
          type="text"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          autoFocus
          id="ist"
          maxLength={1}
          inputMode="numeric"
          onChange={(event) => clickEvent(event, secondInput, undefined)}
        />
        <input
          ref={secondInput}
          className={classes[`otp-input${error ? "-error" : ""}`]}
          type="text"
          id="sec"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          maxLength={1}
          inputMode="numeric"
          onChange={(event) => clickEvent(event, thirdInput, firstInput)}
        />
        <input
          ref={thirdInput}
          className={classes[`otp-input${error ? "-error" : ""}`]}
          type="text"
          id="third"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          inputMode="numeric"
          maxLength={1}
          onChange={(event) => clickEvent(event, fourthInput, secondInput)}
        />
        <input
          ref={fourthInput}
          className={classes[`otp-input${error ? "-error" : ""}`]}
          type="text"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          id="fourth"
          inputMode="numeric"
          maxLength={1}
          onChange={(event) => clickEvent(event, undefined, thirdInput)}
        />
      </div>
    </div>
  );
};

export default OTPInput;
