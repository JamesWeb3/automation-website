import React from "react";
import { NextPage } from "next";
import Navbar from "@/layouts/navbar";
import { MainLayout } from "@/layouts/main-layout";
import { useTripContext } from "@/contexts/TripContext";
import AccomodationForm from "@/components/forms/bookings/accomodation-form";
import { Card } from "@/components/ui/card";
import AccomodationList from "@/components/lists/bookings/accomodation-list";

const BookingPage: NextPage = () => {
  const { trip } = useTripContext();

  return (
    <MainLayout>
      <Navbar />
      <div className="flex mt-4 h-full gap-4">
        <Card className="w-1/3">
          <AccomodationForm />
        </Card>

        <Card className="w-2/3">
          <AccomodationList />
        </Card>
      </div>
    </MainLayout>
  );
};

export default BookingPage;
