import React from "react";
import Image from "next/image";
import { useTripContext } from "@/contexts/TripContext";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CloseSVG } from "@/components/ui/icons";

export const ImageCarousel: React.FC = () => {
  const { trip, loading } = useTripContext();

  if (!trip) {
    return <p>click one of the trips in left column to load the data</p>;
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className="flex gap-2">
        <div className="w-3/5">
          <Image
            alt={trip.name}
            src={trip.thumbnail}
            layout="responsive"
            className="rounded-md"
            width={900}
            height={50}
          />
        </div>
        <div className="flex flex-col gap-4 w-2/5">
          <Image
            alt={trip.name}
            src={trip.images[0]}
            className="rounded-md"
            layout="responsive"
            width={500}
            height={350}
          />
          <Image
            alt={trip.name}
            src={trip.images[1]}
            className="rounded-md"
            layout="responsive"
            width={500}
            height={350}
          />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <Tabs>
          0/5
          <AlertDialogHeader>
            <TabsList className="flex flex-row gap-2">
              <TabsTrigger value="account">Booking 1</TabsTrigger>
              <TabsTrigger value="password">Booking 2</TabsTrigger>
              <TabsTrigger value="password">Booking 2</TabsTrigger>
           
            </TabsList>
            <AlertDialogCancel>
              <CloseSVG />
            </AlertDialogCancel>
          </AlertDialogHeader>
        </Tabs>

        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Image
                    alt={trip.name}
                    src={trip.images[1]}
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
