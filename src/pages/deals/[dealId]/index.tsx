import React from "react";
import { NextPage } from "next";
import Navbar from "@/layouts/navbar";
import { GridLayout } from "@/layouts/grid-layout";
import TripSummary from "@/components/trip-summary-component";
import { MainLayout } from "@/layouts/main-layout";
import TripImage from "@/components/trip-image-componnet";
import { useTripContext } from "@/contexts/TripContext";

const Deals: NextPage = () => {

  const { trip } = useTripContext();

  return (
    <MainLayout>
      <Navbar />

      <GridLayout
        leftChild={<TripImage trip={trip} />}
        rightChild={<TripSummary trip={trip} />}
      />
    </MainLayout>
  );
};

export default Deals;
