import React from "react";
import { MainLayout } from "@/layouts/main-layout";
import { GridLayout } from "@/layouts/grid-layout";
import { ItineraryTab } from "@/components/itinerary/itinerary-tab";
import { ItineraryContent } from "@/components/itinerary/itinerary-content";

import Navbar from "@/layouts/navbar";
const TripPage: React.FC = () => {
  return (
    <MainLayout>
      <Navbar />
      <GridLayout
        variant="variant2"
        leftChild={<ItineraryTab />}
        rightChild={<ItineraryContent />}
      />
    </MainLayout>
  );
};

export default TripPage;
