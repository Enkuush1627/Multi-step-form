"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { ChevronLeft, ChevronRight, Image } from "lucide-react";
import { Header } from "./cardHeader";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  DateOfBirth: z.string().min(1),
  ProfileImage: z.file(),
});
type formSchemaType = z.infer<typeof formSchema>;

export const FormPage3 = () => {
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      DateOfBirth: "",
      ProfileImage: undefined,
    },
  });

  const onSumbit = (values: z.infer<typeof formSchema>) => {
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
                name="DateOfBirth"
                render={({ field }) => (
                  <FormItem className="h-fit gap-2 mb-3 justify-center items-center">
                    <FormLabel>
                      <div className="flex gap-1">
                        <p className="font-semibold text-sm text-[#334155]">
                          Date of birth
                        </p>
                        <p className="font-semibold text-sm text-red-500">*</p>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        placeholder=""
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
                name="ProfileImage"
                render={({ field }) => (
                  <FormItem className="h-fit gap-2 mb-3 justify-center items-center">
                    <FormLabel>
                      <div className="flex gap-1">
                        <p className="font-semibold text-sm text-[#334155]">
                          Profile image
                        </p>
                        <p className="font-semibold text-sm text-red-500">*</p>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="placeholder"
                        type="file"
                        {...field}
                        className="bg-[#7F7F800D] text-[#09090B] flex flex-col h-[180px] w-[416px] hover:bg-inherit"
                      >
                        <div className="bg-[#FFFFFF] h-7 w-7 flex justify-center items-center rounded-full">
                          <Image size={12} />
                        </div>
                        Add Image
                      </Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
            </CardContent>
          </div>
          <div className="flex gap-2 w-[416px]">
            <Button className="w-32 bg-[#FFFFFF] text-[#202124] border border-[#CBD5E1] hover:bg-gray-300">
              <ChevronLeft /> Back
            </Button>
            <Button type="submit" className="w-[280px]">
              Continue 3/3 <ChevronRight />
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};
