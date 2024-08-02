import React, { useState } from "react";
import DealData from "@/data/single-deal.json";
import { TripHighlights } from "@/layouts/trip/trip-highlight";
import { useTripContext } from "@/contexts/TripContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const ItineraryContent: React.FC = () => {
  const { trip, loading } = useTripContext();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!trip) {
    return <p>No trip found bro</p>;
  }

  return (
    <div className="flex flex-col">
      {DealData.map((deal: any, dealIndex: number) => (
        <div key={dealIndex}>
          <TripHighlights />
          <div>
            {trip.bookings.map((booking: any, bookingIndex: number) => (
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem key={bookingIndex} value="item-1">
                  <AccordionTrigger>
                    <div className="text-left">
                      <p>{booking.name}</p>
                      <p className="text-xs">{booking.date}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    yoza
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
