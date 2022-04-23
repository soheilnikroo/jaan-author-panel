import { AutocompleteTypes, TextFieldTypes } from "@ionic/core";
import { IonInput } from "@ionic/react";
import React from "react";
import { InputChangeEventDetail } from "@ionic/react";

interface InputFieldType {
  type?: TextFieldTypes;
  placeholder?: string;
  onChange?: (event: CustomEvent<InputChangeEventDetail>) => void;
  className?: string;
  inputMode?:
    | "search"
    | "text"
    | "email"
    | "tel"
    | "url"
    | "none"
    | "numeric"
    | "decimal"
    | undefined;
  havePadding?: true | false;
  autofocus?: boolean;
  autocomplete?: AutocompleteTypes;
  pattern?: string;
}

const InputField: React.FC<InputFieldType> = ({
  type = "text",
  placeholder = "",
  onChange,
  className,
  inputMode,
  havePadding,
  autofocus,
  pattern,
  autocomplete,
}) => {
  return (
    <IonInput
      autocomplete={autocomplete}
      pattern={pattern}
      autofocus={autofocus}
      className={className}
      onIonChange={onChange}
      placeholder={placeholder}
      type={type}
      inputMode={inputMode}
      style={havePadding ? { "--padding-start": "1rem" } : {}}
    />
  );
};

export default InputField;
