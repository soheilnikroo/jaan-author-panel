import { InputChangeEventDetail, IonIcon } from "@ionic/react";
import React from "react";
import InputField from "../InputField/InputField";
import TextField from "../TextField/TextField";
import { call as PhoneIcon } from "ionicons/icons";

import classes from "./PhoneNumberInput.module.css";

interface PhoneNumberInputProps {
  onChange?: ((event: CustomEvent<InputChangeEventDetail>) => void) | undefined;
  error?: string | undefined;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  onChange,
  error,
}) => {
  return (
    <div className={classes[`${error ? "phone-error" : "phone"}`]}>
      <div className={classes["phone-header"]}>
        <div className={classes["phone-header__title"]}>
          <div>
            <IonIcon src={PhoneIcon} />
            <TextField
              className={classes["phone-header__title-text"]}
              text="شماره تلفن"
            />
          </div>
        </div>
        <div className="phone-header__change"></div>
      </div>
      <div className="phone-input">
        <InputField
          onChange={onChange}
          havePadding
          type="number"
          inputMode="numeric"
          className={classes["phone-input__field"]}
          placeholder="094xxxxxx569"
        />
      </div>
    </div>
  );
};

export default PhoneNumberInput;
