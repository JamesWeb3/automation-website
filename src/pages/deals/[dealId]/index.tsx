import React from "react";
import { NextPage } from "next";
import Navbar from "@/layouts/navbar";
import { MainLayout } from "@/layouts/main-layout";
import { useTripContext } from "@/contexts/TripContext";
import { BreadcrumbComponent } from "@/components/breadcrumb-component";
import { ImageCarousel } from "@/layouts/trip/image-carousel";
import { MapPin } from "lucide-react";
import TripSummary from "@/components/trips/edit-bookings-component";
import DisplayBookingSummary from "@/components/deals/display-bookings-component";
import { ScrollArea } from "@/components/ui/scroll-area";

const Deals: NextPage = () => {
  const { trip, loading } = useTripContext();

  if (!trip) {
    return <p>click one of the trips in left column to load the data</p>;
  }

  return (
    <MainLayout>
      <Navbar />
      <ScrollArea className="h-full space-y-4 pb-10 max-w-[1000px] mx-auto">
        <div className="flex  w-full justify-between">
          <BreadcrumbComponent />
          <div className="flex gap-2 flex-row text-sm">
            <p>99 People Viewed </p>
            <p>Share Deal</p>
            <p>Save Deal Trip</p>
          </div>
        </div>

        <ImageCarousel />

        <div className="flex justify-between">
          <div className="py-2 mb-6">
            <div className="flex gap-1 text-xs items-center">
              <MapPin className="w-4 h-4" />
              {trip.location}
            </div>
            <p className="text-2xl font-semibold"> {trip.name}</p>
            <p className="text-sm max-w-lg"> {trip.bio}</p>

            <div className="flex gap-1 items-center text-sm w-max">
              <div className="flex items-center bg-red-100 justify-center rounded-sm w-6 h-6">
                9.4
              </div>
              <p className="text-xs">Exceptional</p>
              <p className="text-xs underline">Reviews</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center bg-black w-96 rounded-lg text-white p-2">
            <p className="text-sm">10 nights from</p>
            <p className="text-xl text-semibold">$ 3,400</p>
            <p className="text-xs font-semibold">Valued up to $6,000</p>
          </div>
        </div>

        <DisplayBookingSummary />
      </ScrollArea>
    </MainLayout>
  );
};

export default Deals;
