import { NextPage } from "next";
import Navbar from "@/layouts/navbar";
import { GridLayout } from "@/layouts/grid-layout";
import TripSummary from "@/components/trip-summary-component";
import { MainLayout } from "@/layouts/main-layout";
import { useEffect, useState } from "react";
import trips from "@/data/test-deal-data.json";
import { Trip } from "@/types/trip";
import TripImage from "@/components/trip-image-componnet";

const Deals: NextPage = () => {
  const [trip, setTrip] = useState<Trip | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const hardcodedId = "2512-1315-2049-0183";

  useEffect(() => {
    console.log("ID FOUND", hardcodedId);
    const foundTrip = trips.find((trip) => trip.id === hardcodedId);
    setTrip(foundTrip);
    console.log("FOUND TRIP", foundTrip);
    setLoading(false);
  }, []);

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
