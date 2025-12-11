"use c;ient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Image } from "lucide-react";

<Button className="bg-[#7F7F800D] text-[#09090B] flex flex-col h-[180px] w-[416px] hover:bg-inherit">
  <div className="bg-[#FFFFFF] h-7 w-7 flex justify-center items-center rounded-full">
    <Image size={12} />
  </div>
  Add Image
</Button>;

//   <Input
//     type="file"
//     placeholder="aaaa"
//     {...field}
//     className="w-[416px] h-[180px] font-normal text-[16px] text-[#8B8E95]"
//   ></Input>

// ("use client");

// import { useState } from "react";
// import { FormPage1 } from "./step1";
// import { FormPage2 } from "./step2";
// import { FormPage3 } from "./step3";
// import { FormPage4 } from "./success";
// export default function Home() {
//   const [step, setStep] = useState(1);
//   return (
//     <div className="bg-gray-300 w-screen h-screen flex justify-center items-center">
//       <>
//         {step === 1 && <FormPage1 />}
//         {step === 2 && <FormPage2 />}
//         {step === 3 && <FormPage3 />}
//         {step === 4 && <FormPage4 />}
//       </>
//     </div>
//   );
// }
("First name cannot contain special characters or numbers.");
("The first name has more than 3 letters.");
("The first name has fewer than 35 letters.");

("Last name cannot contain special characters or numbers.");
("The last name has more than 1 letters.");
("The last name has fewer than 35 letters.");

("This username is already taken. Please choose another one.");
("The user name has more than 3 letters.");
("The user name has fewer than 35 letters.");
