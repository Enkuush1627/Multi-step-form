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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from "lucide-react";
import { Header } from "./StepHeader";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Data, StepContext } from "../page";

const formSchema = z.object({
  DateOfBirth: z.date("Please select a date."),
  ProfileImage: z.file("Image cannot be blank"),
});
type formSchemaType = z.infer<typeof formSchema>;
export type StepProps = {
  handleNext: () => void;
  handleBack: () => void;
  data: Data;
  setData: Dispatch<SetStateAction<Data>>;
};

export const PageThree = () => {
  const { data, handleNext, handleBack, setData } = useContext(StepContext);
  const [open, setOpen] = useState(false);
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      DateOfBirth: data.DateOfBirth,
      ProfileImage: data.ProfileImage,
    },
  });

  const onSumbit = (values: z.infer<typeof formSchema>) => {
    setData((prev) => ({
      ...prev,
      DateOfBirth: values.DateOfBirth,
      ProfileImage: values.ProfileImage,
    }));

    handleBack();
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
                      <p className="font-semibold text-sm text-[#334155]">
                        Date of birth
                      </p>
                      <span className="font-semibold text-sm text-red-500">
                        *
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            id="date"
                            className="w-[416px] justify-between font-normal"
                          >
                            {field.value
                              ? field.value.toLocaleDateString()
                              : "--/--/--"}
                            <CalendarIcon />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto overflow-hidden p-0"
                          align="start"
                        >
                          <Calendar
                            mode="single"
                            selected={field.value}
                            captionLayout="dropdown"
                            onSelect={(date) => {
                              field.onChange(date);
                              setOpen(false);
                            }}
                          />
                        </PopoverContent>
                      </Popover>
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
                      <p className="font-semibold text-sm text-[#334155]">
                        Profile image
                      </p>
                      <span className="font-semibold text-sm text-red-500">
                        *
                      </span>
                    </FormLabel>
                    <FormControl className="justify-center items-center w-[416px]">
                      <div className="relative">
                        <Input
                          placeholder="Placeholder"
                          type="file"
                          className="absolute w-full h-full top-0 left-0  z-10 opacity-0 cursor-pointer"
                          onChange={(e) => {
                            const files = e.target.files;
                            if (!files) return;
                            const [file] = files;
                            field.onChange(file);
                          }}
                        />

                        {field.value && (
                          <div className="absolute w-full h-full top-0 left-0 rounded-xl overflow-hidden">
                            <Image
                              src={URL.createObjectURL(field.value)}
                              alt="Profile"
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}

                        <div
                          className="w-full h-40 rounded-xl flex
                         justify-center items-center bg-[#7F7F800D]"
                        >
                          <div className="flex flex-col items-center gap-2">
                            <ImageIcon className="text-[#8E8E8E]" />
                            Add Image
                          </div>
                        </div>
                      </div>
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
