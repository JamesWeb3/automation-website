import Navbar from "@/components/navbar";
import React, { useState } from "react";
import { MainLayout } from "@/layouts/main-layout";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import HotelImage from "../../public/hotel.jpg";
import Image from "next/image";
import { BookingComSVG } from "@/components/ui/icons";
import { BedSVG, BathroomSVG } from "@/components/ui/icons";

type CreateTripSchema = z.infer<typeof createTripSchema>;

interface Hotel {
  title: string;
  bathrooms: number;
  bedrooms: number;
  sqMtr: number;
  image?: string;
}

const hotels: Hotel[] = [
  {
    title: "Beautfiul Apartment located 5 minutes from Central Station.",
    bathrooms: 2,
    bedrooms: 3,
    sqMtr: 100,
    image: "../../public/hotel.jpg",
  },
  {
    title: "Beautfiul Apartment located 5 minutes from Central Station.",
    bathrooms: 2,
    bedrooms: 3,
    sqMtr: 100,
    image: "../../public/hotel.jpg",
  },
  {
    title: "Beautfiul Apartment located 5 minutes from Central Station.",
    bathrooms: 2,
    bedrooms: 3,
    sqMtr: 100,
    image: "../../public/hotel.jpg",
  },
  {
    title: "Beautfiul Apartment located 5 minutes from Central Station.",
    bathrooms: 2,
    bedrooms: 3,
    sqMtr: 100,
    image: "../../public/hotel.jpg",
  },
  {
    title: "Beautfiul Apartment located 5 minutes from Central Station.",
    bathrooms: 2,
    bedrooms: 3,
    sqMtr: 100,
    image: "../../public/hotel.jpg",
  },
];

const createTripSchema = z.object({
  trip_name: z.string(),
  people_count: z.number(),
});

const HotelPage: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const form = useForm({
    resolver: zodResolver(createTripSchema),
  });

  const onSubmit: SubmitHandler<CreateTripSchema> = async (data) => {
    console.log(data);
  };

  return (
    <MainLayout>
      <Navbar />
      <div className="flex w-full h-full gap-8 mt-4 pb-20">
        <Card className="w-1/3">
          <div className="flex gap-2 justify-center mb-4">
            <div className="bg-[#5DA8DF] w-3 h-3 rounded-full cursor-pointer" />
            <div className="bg-[#8EED91] w-3 h-3 rounded-full" />
            <div className="bg-[#FFA767] w-3 h-3 rounded-full" />
            <div className="bg-[#B998E3] w-3 h-3 rounded-full" />
            <div className="bg-muted w-3 h-3 rounded-full" />
          </div>
          <div className="text-[#5DA8DF] text-sm font-semibold">
            Accomodation
          </div>

          <h2 className="text-3xl font-medium">Book your stay in Bucharest</h2>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 mt-4"
            >
              <FormField
                control={form.control}
                name="trip_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex justify-between font-semibold">
                      Set Your Budget Per Night
                      <div>$</div>
                    </FormLabel>
                    <FormControl>
                      <>
                        <Progress className="cursor-pointer" value={33} />
                      </>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="flex justify-between font-semibold">
                      How long will you stay for?
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="flex justify-between font-semibold">
                      How many people are coming?
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            1 adult, 2 children
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-1 text-sm"
                        align="start"
                      >
                        <div>
                          <div className="flex w-full justify-between items-center gap-8 p-1">
                            Adults
                            <div className="flex items-center gap-3">
                              <div className="bg-muted p-1 px-2 rounded-md cursor-pointer">
                                -
                              </div>
                              <div>1</div>
                              <div className="bg-muted p-1 px-2 rounded-md cursor-pointer">
                                +
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-8 p-1">
                            Children
                            <div className="flex w-full justify-between items-center gap-3">
                              <div className="bg-muted p-1 px-2 rounded-md cursor-pointer">
                                -
                              </div>
                              <div>1</div>
                              <div className="bg-muted p-1 px-2 rounded-md cursor-pointer">
                                +
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Search</Button>
            </form>
          </Form>
        </Card>

        <Card className="w-2/3 p-0 bg-transparent">
          <ScrollArea className="h-screen">
            <div className="flex grid grid-cols-2 gap-4">
              {hotels.map((hotel, index) => (
                <div key={index} className="rounded-lg bg-white">
                  <Image
                    alt="hotel thumbnail"
                    src={HotelImage}
                    className="rounded-tl-xl rounded-tr-xl"
                  />
                  <div className="p-2 rounded-bl-xl rounded-br-xl">
                    <p className="text-lg font-semibold leading-6">
                      {hotel.title}
                    </p>

                    <div className="flex justify-between items-center">
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <BedSVG /> {hotel.bedrooms}
                        </div>

                        <div className="flex flex-col items-center">
                          <BathroomSVG /> {hotel.bedrooms}
                        </div>
                      </div>
                      <div className="text-blue-600 font-medium">
                        7.8
                        <BookingComSVG />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </Card>
      </div>
    </MainLayout>
  );
};

export default HotelPage;
