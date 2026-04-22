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
import { StepContext } from "../page";
import { useContext } from "react";

const formSchema = z
  .object({
    Email: z.string().email("Please provide a valid email address."),
    PhoneNumber: z
      .string()
      .regex(/^\+?\d{8}$/, "Please enter a valid phone number"),
    Password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .max(35, "Password must be less than 35 characters."),
    ConfirmPassword: z
      .string()
      .min(8, "Confirm password must be at least 8 characters.")
      .max(35, "Confirm password must be less than 35 characters."),
  })
  .refine((data) => data.Password === data.ConfirmPassword, {
    message: "Нууц үг таарахгүй байна",
    path: ["ConfirmPassword"],
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

  const onSubmit = (values: formSchemaType) => {
    setData((prev) => ({
      ...prev,
      ...values,
    }));
    handleNext();
  };

  return (
    <Card className="w-full max-w-[480px] min-h-[655px] bg-white flex flex-col items-center py-6 px-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center w-full"
        >
          {/* CONTENT */}
          <div className="w-full max-w-[416px]">
            <Header />

            <CardContent className="flex flex-col gap-4 mt-4 p-0">
              <FormField
                control={form.control}
                name="Email"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 w-full">
                    <FormLabel className="text-sm font-semibold text-[#334155]">
                      Email <span className="text-red-500">*</span>
                    </FormLabel>

                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter your email address"
                        className="w-full h-11"
                      />
                    </FormControl>

                    <FormMessage className="min-h-[18px]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="PhoneNumber"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 w-full">
                    <FormLabel className="text-sm font-semibold text-[#334155]">
                      Phone number <span className="text-red-500">*</span>
                    </FormLabel>

                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter your phone number"
                        className="w-full h-11"
                      />
                    </FormControl>

                    <FormMessage className="min-h-[18px]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Password"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 w-full">
                    <FormLabel className="text-sm font-semibold text-[#334155]">
                      Password <span className="text-red-500">*</span>
                    </FormLabel>

                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        placeholder="Enter your password"
                        className="w-full h-11"
                      />
                    </FormControl>

                    <FormMessage className="min-h-[18px]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ConfirmPassword"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 w-full">
                    <FormLabel className="text-sm font-semibold text-[#334155]">
                      Confirm password <span className="text-red-500">*</span>
                    </FormLabel>

                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        placeholder="Confirm your password"
                        className="w-full h-11"
                      />
                    </FormControl>

                    <FormMessage className="min-h-[18px]" />
                  </FormItem>
                )}
              />
            </CardContent>
          </div>

          <div className="w-full max-w-[416px] mt-6 flex gap-2">
            <Button
              type="button"
              onClick={handleBack}
              className="w-1/3 bg-white text-[#202124] border border-[#CBD5E1] hover:bg-gray-100"
            >
              <ChevronLeft /> Back
            </Button>

            <Button type="submit" className="w-2/3">
              Continue 2/3 <ChevronRight />
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};
