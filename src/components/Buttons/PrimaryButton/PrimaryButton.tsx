import { IonButton } from "@ionic/react";
import React from "react";

interface PrimaryButtonType {
  text: string;
  className?: string;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonType> = ({
  text,
  className,
  disabled,
}) => {
  return (
    <IonButton disabled={disabled} type="submit" className={className}>
      {text}
    </IonButton>
  );
};

export default PrimaryButton;
