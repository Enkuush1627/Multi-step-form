"use client";

import { useState } from "react";
import { FormPage1 } from "./_components/step1";
import { FormPage2 } from "./_components/step2";
import { FormPage3 } from "./_components/step3";
import { FormPage4 } from "./_components/success";

export default function Home() {
  const [step, setStep] = useState(1);
  return (
    <div className="bg-gray-300 w-screen h-screen flex justify-center items-center">
      <>
        {step === 1 && <FormPage1 />}
        {step === 2 && <FormPage2 />}
        {step === 3 && <FormPage3 />}
        {step === 4 && <FormPage4 />}
      </>
    </div>
  );
}
