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
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "./StepHeader";
import { error } from "console";
import { Data, StepContext } from "../page";
import { Dispatch, SetStateAction, useContext } from "react";

const formSchema = z
  .object({
    Email: z.email("Please provide a valid email address."),
    PhoneNumber: z
      .string()
      .regex(/^\+?\d{8}$/, "Please provide a valid email address."),
    Password: z
      .string()
      .min(8, "The password has more than 8 letters.")
      .max(35, "The password has fewer than 35 letters."),
    ConfirmPassword: z
      .string()
      .min(8, "The confirm password has more than 8 letters.")
      .max(35, "The confirm password has fewer than 35 letters."),
  })
  .refine((data) => data.Password === data.ConfirmPassword, {
    error: "Passwords do not match. Please try again.",
  });
type formSchemaType = z.infer<typeof formSchema>;
export const PageTwo = () => {
  const { data, handleNext, handleBack, setData } = useContext(StepContext);
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Email: data.Email,
      PhoneNumber: data.PhoneNumber,
      Password: data.Password,
      ConfirmPassword: data.ConfirmPassword,
    },
  });

  const onSumbit = (values: z.infer<typeof formSchema>) => {
    setData((prev) => ({
      ...prev,
      Email: values.Email,
      PhoneNumber: values.PhoneNumber,
      Password: values.Password,
      ConfirmPassword: values.ConfirmPassword,
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
                name="Email"
                render={({ field }) => (
                  <FormItem className="h-fit gap-2 mb-3 justify-center items-center">
                    <FormLabel>
                      <p className="font-semibold text-sm text-[#334155]">
                        Email
                      </p>
                      <span className="font-semibold text-sm text-red-500">
                        *
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Placeholder"
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
                name="PhoneNumber"
                render={({ field }) => (
                  <FormItem className="h-fit gap-2 mb-3 justify-center items-center">
                    <FormLabel>
                      <div className="flex gap-1">
                        <p className="font-semibold text-sm text-[#334155]">
                          Phone number
                        </p>
                        <p className="font-semibold text-sm text-red-500">*</p>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Placeholder"
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
                name="Password"
                render={({ field }) => (
                  <FormItem className="h-fit gap-2 mb-3 justify-center items-center">
                    <FormLabel>
                      <div className="flex gap-1">
                        <p className="font-semibold text-sm text-[#334155]">
                          Password
                        </p>
                        <p className="font-semibold text-sm text-red-500">*</p>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Placeholder"
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
                name="ConfirmPassword"
                render={({ field }) => (
                  <FormItem className="h-fit gap-2 mb-3 justify-center items-center">
                    <FormLabel>
                      <div className="flex gap-1">
                        <p className="font-semibold text-sm text-[#334155]">
                          Confirm password
                        </p>
                        <p className="font-semibold text-sm text-red-500">*</p>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Placeholder"
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
          <div className="flex gap-2 w-[416px]">
            <Button
              onClick={handleBack}
              className="w-32 bg-[#FFFFFF] text-[#202124] border border-[#CBD5E1] hover:bg-gray-300 cursor-pointer"
            >
              <ChevronLeft /> Back
            </Button>
            <Button type="submit" className="w-[280px] cursor-pointer">
              Continue 2/3 <ChevronRight />
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};
