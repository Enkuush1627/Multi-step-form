"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { ChevronRight } from "lucide-react";
import { Header } from "./StepHeader";
import { Data, StepContext } from "../page";
import { Dispatch, SetStateAction, useContext } from "react";

const formSchema = z.object({
  firstName: z
    .string("First name cannot contain special characters or numbers.")
    .min(3, "The first name has more than 3 letters.")
    .max(35, "The first name has fewer than 35 letters."),
  lastName: z
    .string("Last name cannot contain special characters or numbers.")
    .min(1, "The last name has more than 1 letters.")
    .max(35, "The last name has fewer than 35 letters."),
  userName: z
    .string("This username is already taken. Please choose another one.")
    .min(3, "The user name has more than 3 letters.")
    .max(35, "The user name has fewer than 35 letters."),
});
type formSchemaType = z.infer<typeof formSchema>;
export const PageOne = () => {
  const { data, handleNext, handleBack, setData } = useContext(StepContext);
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
    },
  });

  const onSumbit = (values: z.infer<typeof formSchema>) => {
    setData((prev) => ({
      ...prev,
      firstName: values.firstName,
      lastName: values.lastName,
      userName: values.userName,
    }));
    handleNext();
    console.log(values);
  };

  return (
    <Card className="w-[480px] h-[655px] bg-[#FFFFFF] flex flex-col items-center">
      <Form {...form}>
        <form className="space-y-44" onSubmit={form.handleSubmit(onSumbit)}>
          <div className="w-[416px] h-[385px] gap-7">
            <Header />
            <CardContent className="flex justify-between flex-col">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="h-fit gap-2 mb-3 justify-center items-center">
                    <FormLabel>
                      <p className="font-semibold text-sm text-[#334155]">
                        First name
                      </p>
                      <span className="font-semibold text-sm text-red-500">
                        *
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your first name"
                        {...field}
                        className="w-[416px] h-11 font-normal text-[16px] text-[#8B8E95]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="h-fit gap-2 mb-3 justify-center items-center">
                    <FormLabel>
                      <div className="flex gap-1">
                        <p className="font-semibold text-sm text-[#334155]">
                          Last name
                        </p>
                        <p className="font-semibold text-sm text-red-500">*</p>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your last name"
                        {...field}
                        className="w-[416px] h-11 font-normal text-[16px] text-[#8B8E95]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                  <FormItem className="h-fit gap-2 mb-3 justify-center items-center">
                    <FormLabel>
                      <div className="flex gap-1">
                        <p className="font-semibold text-sm text-[#334155]">
                          Username
                        </p>
                        <p className="font-semibold text-sm text-red-500">*</p>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your username"
                        {...field}
                        className="w-[416px] h-11 font-normal text-[16px] text-[#8B8E95]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
            </CardContent>
          </div>
          <div className="flex flex-col ">
            <Button type="submit" className="cursor-pointer">
              Continue 1/3 <ChevronRight />
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};
