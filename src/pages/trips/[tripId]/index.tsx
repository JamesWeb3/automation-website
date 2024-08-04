import React from "react";
import { NextPage } from "next";
import Navbar from "@/layouts/navbar";
import TripSummary from "@/components/trips/edit-bookings-component";
import { MainLayout } from "@/layouts/main-layout";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ImageCarousel } from "@/layouts/trip/image-carousel";

const Deals: NextPage = () => {

  return (
    <MainLayout>
      <Navbar />
      <ScrollArea className="h-full space-y-4 pb-10 max-w-[1000px] mx-auto">
        <ImageCarousel /> <TripSummary />
      </ScrollArea>
    </MainLayout>
  );
};

export default Deals;
