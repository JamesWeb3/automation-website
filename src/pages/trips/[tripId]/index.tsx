import React from "react";
import { NextPage } from "next";
import Navbar from "@/layouts/navbar";
import { GridLayout } from "@/layouts/grid-layout";
import TripSummary from "@/components/trips/edit-bookings-component";
import { MainLayout } from "@/layouts/main-layout";
import TripImage from "@/components/trips/edit-trip-highlight";
import { useTripContext } from "@/contexts/TripContext";
import { ScrollArea } from "@/components/ui/scroll-area";

const Deals: NextPage = () => {
  const { trip } = useTripContext();

  return (
    <MainLayout>
      <Navbar />
      <ScrollArea className="h-full space-y-4 pb-10 max-w-[1000px] mx-auto">
        <TripImage /> <TripSummary />
      </ScrollArea>
    </MainLayout>
  );
};

export default Deals;
