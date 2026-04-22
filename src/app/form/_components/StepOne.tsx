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
import { StepContext } from "../page";
import { useContext } from "react";

const formSchema = z.object({
  firstName: z
    .string()
    .min(3, "The first name must be at least 3 characters.")
    .max(35, "The first name must be less than 35 characters."),
  lastName: z
    .string()
    .min(1, "The last name must be at least 1 character.")
    .max(35, "The last name must be less than 35 characters."),
  userName: z
    .string()
    .min(3, "The user name must be at least 3 characters.")
    .max(35, "The user name must be less than 35 characters."),
});

type formSchemaType = z.infer<typeof formSchema>;

export const PageOne = () => {
  const { data, handleNext, setData } = useContext(StepContext);

  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
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
                name="firstName"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 w-full">
                    <FormLabel className="text-sm font-semibold text-[#334155]">
                      First name <span className="text-red-500">*</span>
                    </FormLabel>

                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter your first name"
                        className="w-full h-11"
                      />
                    </FormControl>

                    <FormMessage className="min-h-[18px] text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 w-full">
                    <FormLabel className="text-sm font-semibold text-[#334155]">
                      Last name <span className="text-red-500">*</span>
                    </FormLabel>

                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter your last name"
                        className="w-full h-11"
                      />
                    </FormControl>

                    <FormMessage className="min-h-[18px] text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 w-full">
                    <FormLabel className="text-sm font-semibold text-[#334155]">
                      Username <span className="text-red-500">*</span>
                    </FormLabel>

                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter your username"
                        className="w-full h-11"
                      />
                    </FormControl>

                    <FormMessage className="min-h-[18px] text-sm" />
                  </FormItem>
                )}
              />
            </CardContent>
          </div>

          <div className="w-full max-w-[416px] mt-6">
            <Button type="submit" className="w-full h-11">
              Continue 1/3 <ChevronRight />
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};
