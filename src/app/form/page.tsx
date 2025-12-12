"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { PageOne } from "./_components/PageOne";
import { PageTwo } from "./_components/PageTwo";
import { PageThree } from "./_components/PageThree";
import { PageFour } from "./_components/PageFour";
type StepContextType = {
  step: number;
  handleNext: () => void;
  handleBack: () => void;
  dataP: Data;
  setData: Dispatch<SetStateAction<Data>>;
};
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
    <div className="flex justify-center items-center w-screen h-screen">
      {step === 1 && (
        <PageOne
          handleNext={handleNext}
          handleBack={handleBack}
          data={data}
          setData={setData}
        />
      )}
      {step === 2 && (
        <PageTwo
          handleNext={handleNext}
          handleBack={handleBack}
          data={data}
          setData={setData}
        />
      )}
      {step === 3 && (
        <PageThree
          handleNext={handleNext}
          handleBack={handleBack}
          data={data}
          setData={setData}
        />
      )}
      {step === 4 && <PageFour />}
    </div>
  );
};
export default Form;
