import React from "react";
import { NextPage } from "next";
import Navbar from "@/layouts/navbar";
import { GridLayout } from "@/layouts/grid-layout";
import TripSummary from "@/components/trips/edit-bookings-component";
import { MainLayout } from "@/layouts/main-layout";
import TripImage from "@/components/trips/edit-trip-highlight";
import { useTripContext } from "@/contexts/TripContext";

const BookingPage: NextPage = () => {
  const { trip } = useTripContext();

  return (
    <MainLayout>
      <Navbar />

      <GridLayout leftChild={<TripImage />} rightChild={<TripSummary />} />
    </MainLayout>
  );
};

export default BookingPage;
