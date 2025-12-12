"use client";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { PageFour } from "./_components/StepFour";
import { PageOne } from "./_components/StepOne";
import { PageTwo } from "./_components/StepTwo";
import { PageThree } from "./_components/StepThree";
type StepContextType = {
  step: number;
  handleNext: () => void;
  handleBack: () => void;
  data: Data;
  setData: Dispatch<SetStateAction<Data>>;
};

export const StepContext = createContext<StepContextType>({} as StepContextType);

export type Data = {
  firstName: string;
  lastName: string;
  userName: string;
  Email: string;
  PhoneNumber: string;
  Password: string;
  ConfirmPassword: string;
  DateOfBirth: Date | undefined;
  ProfileImage: File | undefined;
};
export const Form = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Data>({
    firstName: "",
    lastName: "",
    userName: "",
    Email: "",
    PhoneNumber: "",
    Password: "",
    ConfirmPassword: "",
    DateOfBirth: undefined,
    ProfileImage: undefined,
  });
  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };
  return (
    <StepContext.Provider
      value={{ step, handleNext, handleBack, data, setData }}
    >
      <div className="flex justify-center items-center w-screen h-screen">
        {step === 1 && <PageOne />}
        {step === 2 && <PageTwo />}
        {step === 3 && <PageThree />}
        {step === 4 && <PageFour />}
      </div>
    </StepContext.Provider>
  );
};
export default Form;
