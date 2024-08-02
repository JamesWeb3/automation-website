import React, { useEffect, useState } from "react";
import DealData from "@/data/single-deal.json";
import { TripHighlights } from "@/layouts/trip/trip-highlight";
import { useTripContext } from "@/contexts/TripContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "../ui/scroll-area";
import { Plus } from "lucide-react";

export const ItineraryContent: React.FC = () => {
  const { trip, loading } = useTripContext();

  useEffect(() => {
    console.log("CONSOLE", trip);
  }, [trip]);

  if (!trip) {
    return <p>click one of the trips in left column to load the data</p>;
  }

  return (
    <div className="flex flex-col justify-betweenh-full">
      {DealData.map((deal: any, dealIndex: number) => (
        <div key={dealIndex}>
          <TripHighlights />
          <ScrollArea className="h-[60vh] overflow-auto">
            {trip.bookings.map((booking: any, bookingIndex: number) => (
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem key={bookingIndex} value="item-1">
                  <AccordionTrigger>
                    <div className="text-left">
                      <p>{booking.name}</p>
                      <p className="text-xs">{booking.date}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>yoza</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
            <div className="flex justify-center hover:bg-muted rounded-lg my-1 py-1 cursor-pointer transition-ease">
              <Plus className="text-muted-foreground" />
            </div>
          </ScrollArea>
          <div>
            <p className="text-lg font-semibold">Total Price</p>
            <p>{deal.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
