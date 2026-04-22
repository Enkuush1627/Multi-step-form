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
import { useContext, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { StepContext } from "../page";

const formSchema = z.object({
  DateOfBirth: z.date("Please select a date."),
  ProfileImage: z.any().refine((file) => file, "Image cannot be blank"),
});

type formSchemaType = z.infer<typeof formSchema>;

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
              {/* DATE */}
              <FormField
                control={form.control}
                name="DateOfBirth"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 w-full">
                    <FormLabel className="text-sm font-semibold text-[#334155]">
                      Date of birth <span className="text-red-500">*</span>
                    </FormLabel>

                    <FormControl>
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full h-11 justify-between"
                          >
                            {field.value
                              ? field.value.toLocaleDateString()
                              : "--/--/--"}
                            <CalendarIcon />
                          </Button>
                        </PopoverTrigger>

                        <PopoverContent align="start" className="p-0">
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

                    <FormMessage className="min-h-[18px]" />
                  </FormItem>
                )}
              />

              {/* IMAGE */}
              <FormField
                control={form.control}
                name="ProfileImage"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 w-full">
                    <FormLabel className="text-sm font-semibold text-[#334155]">
                      Profile image <span className="text-red-500">*</span>
                    </FormLabel>

                    <FormControl>
                      <div className="relative w-full">
                        <Input
                          type="file"
                          className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) field.onChange(file);
                          }}
                        />

                        {field.value && (
                          <div className="absolute inset-0 rounded-xl overflow-hidden">
                            <Image
                              src={URL.createObjectURL(field.value)}
                              alt="preview"
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}

                        <div className="w-full h-40 rounded-xl flex items-center justify-center bg-[#7F7F800D]">
                          <div className="flex flex-col items-center gap-2 text-[#8E8E8E]">
                            <ImageIcon />
                            Add Image
                          </div>
                        </div>
                      </div>
                    </FormControl>

                    <FormMessage className="min-h-[18px]" />
                  </FormItem>
                )}
              />
            </CardContent>
          </div>

          {/* BUTTONS */}
          <div className="w-full max-w-[416px] mt-6 flex gap-2">
            <Button
              type="button"
              onClick={handleBack}
              className="w-1/3 bg-white border text-black border-[#CBD5E1] hover:bg-gray-100"
            >
              <ChevronLeft /> Back
            </Button>

            <Button type="submit" className="w-2/3">
              Continue 3/3 <ChevronRight />
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};
