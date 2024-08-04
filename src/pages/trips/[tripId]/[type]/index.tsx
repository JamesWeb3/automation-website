import React from "react";
import { NextPage } from "next";
import Navbar from "@/layouts/navbar";
import { MainLayout } from "@/layouts/main-layout";
import { useTripContext } from "@/contexts/TripContext";
// FORMS
import AccomodationForm from "@/components/forms/bookings/accomodation-form";
import FlightsForm from "@/components/forms/bookings/flight-form";
import { Card } from "@/components/ui/card";
// LISTS
import AccomodationList from "@/components/lists/bookings/accomodation-list";
import FlightsList from "@/components/lists/bookings/flight-list";
import { useRouter } from "next/router";

const BookingPage: NextPage = () => {
  const { trip } = useTripContext();
  const router = useRouter();
  const type = router.query.type as string;

  return (
    <MainLayout>
      <Navbar />
      <div className="flex mt-4 h-[88vh] gap-4">
        <Card className="w-1/3">
          {type === "accomodation" && <AccomodationForm />}
          {type === "flights" && <FlightsForm />}
          {type === "activity" && <FlightsForm />}
          {type === "transport" && <FlightsForm />}
          {type === "food" && <FlightsForm />}
        </Card>

        <Card className="w-2/3">
        {type === "accomodation" && <AccomodationList />}
        {type === "flights" && <FlightsList />}
          {type === "activity" && <FlightsForm />}
          {type === "transport" && <FlightsForm />}
          {type === "food" && <FlightsForm />}
        </Card>
      </div>
    </MainLayout>
  );
};

export default BookingPage;
