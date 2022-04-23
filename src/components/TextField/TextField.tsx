import { IonText } from "@ionic/react";
import React from "react";

interface TextFieldTypes {
  text: string;
  className?: string;
}

const TextField: React.FC<TextFieldTypes> = ({ text, className }) => {
  return <IonText className={className}>{text}</IonText>;
};

export default TextField;
