import { useEffect, useState } from "react";

interface useFormProps {
  intialValue: string;
  minLengthValue?: { value: number; error: string };
  maxLengthValue?: { value: number; error: string };
  haveDigitValue?: { value: number; error: string };
  startWithCapitalCharValue?: { value: boolean; error: string };
  emailValue?: { value: boolean; error: string };
  timeCheck?: number;
}

const minLength = (input: string, value: number, error: string) => {
  if (input.trim().length < value) {
    return error;
  } else {
    return true;
  }
};

const maxLength = (input: string, value: number, error: string) => {
  if (input.trim().length > value) {
    return error;
  } else {
    return true;
  }
};

const useForm: (
  props: useFormProps
) => [
  inputEntered: string,
  setInputEntered: React.Dispatch<any>,
  inputError: string,
  setInputError: React.Dispatch<React.SetStateAction<string>>
] = ({
  intialValue,
  minLengthValue,
  maxLengthValue,
  haveDigitValue,
  startWithCapitalCharValue,
  emailValue,
  timeCheck,
}) => {
  const [inputEntered, setInputEntered] = useState(intialValue);
  const [inputError, setInputError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputEntered !== "") {
        if (minLengthValue) {
          let result = minLength(
            inputEntered,
            minLengthValue.value,
            minLengthValue.error
          );
          if (result !== true) {
            setInputError(result);
          }
        }
        if (maxLengthValue) {
          let result = maxLength(
            inputEntered,
            maxLengthValue.value,
            maxLengthValue.error
          );
          if (result !== true) {
            setInputError(result);
          }
        }
      }
    }, timeCheck);
    return () => {
      setInputError("");
      clearTimeout(timer);
    };
  }, [inputEntered]);

  return [inputEntered, setInputEntered, inputError, setInputError];
};

export default useForm;
