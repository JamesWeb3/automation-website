// pages/trip.tsx
import React, { useEffect, useState } from "react";
import { MainLayout } from "@/layouts/main-layout";
import { GridLayout } from "@/layouts/grid-layout";
import { useRouter } from "next/router";

import HotelForm from "@/components/trip/hotel-form";
import HotelList from "@/components/trip/hotel-list";
import FlightForm from "@/components/trip/flight-form";
import FlightList from "@/components/trip/flight-list";
import FoodForm from "@/components/trip/food-form";
import FoodList from "@/components/trip/food-list";
import { DealsCarousel } from "@/components/deals-carousel";
import TripImage from "@/components/trip-image-componnet";
import TripSummary from "@/components/trip-summary-component";
import { Trip } from "@/types/types";
import trips from "@/data/test-deal-data.json";
import Navbar from "@/layouts/navbar";
const TripContent: React.FC = () => {
  const router = useRouter();
  const { accomodation, flights, food } = router.query;

  if (accomodation) {
    return <GridLayout leftChild={<HotelForm />} rightChild={<HotelList />} />;
  } else if (flights) {
    return (
      <GridLayout leftChild={<FlightForm />} rightChild={<FlightList />} />
    );
  } else if (food) {
    return <GridLayout leftChild={<FoodForm />} rightChild={<FoodList />} />;
  } else {
    return <DealsCarousel />;
  }
};

const TripPage: React.FC = () => {
  const router = useRouter();
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
        <Navbar/>
     <TripContent/>
    </MainLayout>
  );
};

export default TripPage;
