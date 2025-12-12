"use client";
import { Card, CardHeader } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import Image from "next/image";

const formSchema = z.object({
  firstName: z.string().min(3).max(35),
  lastName: z.string().min(1).max(35),
  userName: z.string().min(3).max(35),
});
type formSchemaType = z.infer<typeof formSchema>;
export const PageFour = () => {
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
    },
  });

  const onSumbit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Card className="w-[480px] h-fit bg-[#FFFFFF] flex flex-col p-8 items-center">
      <Form {...form}>
        <form className="" onSubmit={form.handleSubmit(onSumbit)}>
          <div className="w-[416px] h-fit gap-7">
            <CardHeader className="p-0">
              <Image src={"/Main 1.svg"} alt="" width={60} height={60} />
              <h1 className="font-semibold text-[26px] text-[#202124]">
                You're All Set 🔥
              </h1>
              <p className="font-normal text-lg text-[#8E8E8E]">
                We have received your submission. Thank you!
              </p>
            </CardHeader>
          </div>
        </form>
      </Form>
    </Card>
  );
};
