import React from "react";
import Image from "next/image";
import { useTripContext } from "@/contexts/TripContext";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CloseSVG } from "@/components/ui/icons";

export const ImageCarousel: React.FC = () => {
  const { trip } = useTripContext();

  if (!trip) {
    return <p>click one of the trips in left column to load the data</p>;
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className="flex gap-2">
        <div className="w-3/5 h-full">
          <Image
            alt={trip.name}
            src={trip.thumbnail}
            layout="responsive"
            className="rounded-md h-full object-cover"
            width={900}
            height={50}
          />
        </div>
        <div className="flex flex-col gap-4 w-2/5 h-full">
          <div className="flex-1">
            <Image
              alt={trip.name}
              src={trip.images?.[0] ?? ""}
              className="rounded-md h-full object-cover"
              layout="responsive"
              width={500}
              height={350}
            />
          </div>
          <div className="flex-1">
            <Image
              alt={trip.name}
              src={trip.images?.[1] ?? ""}
              className="rounded-md h-full object-cover"
              layout="responsive"
              width={500}
              height={350}
            />
          </div>
        </div>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-[1000px]">
        <Tabs>
          <div className="text-center text-xs mx-auto mb-2">0/5</div>

          <AlertDialogHeader className="mx-auto justify-between">
            <div />
            <TabsList className="flex flex-row gap-2">
              <TabsTrigger value="account">Booking 1</TabsTrigger>
              <TabsTrigger value="password">Booking 2</TabsTrigger>
              <TabsTrigger value="password">Booking 3</TabsTrigger>
              <TabsTrigger value="password">Booking 4</TabsTrigger>
            </TabsList>
            <AlertDialogCancel>
              <CloseSVG />
            </AlertDialogCancel>
          </AlertDialogHeader>
        </Tabs>

        <Carousel>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Image
                    alt={trip.name}
                    src={trip.images?.[1] ?? ""}
                    className="rounded-xl"
                    layout="responsive"
                    width={500}
                    height={350}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </AlertDialogContent>
    </AlertDialog>
  );
};
