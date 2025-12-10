"use client";

import { CardHeader } from "@/components/ui/card";
import Image from "next/image";

export const Header = () => {
  return (
    <CardHeader className="p-0">
      <Image src={"/Main 1.svg"} alt="" width={60} height={60} />
      <h1 className="font-semibold text-[26px] text-[#202124]">Join Us! 😎</h1>
      <p className="font-normal text-lg text-[#8E8E8E] pb-8">
        Please provide all current information accurately.
      </p>
    </CardHeader>
  );
};
