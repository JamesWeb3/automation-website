import { NextPage } from "next";
import Navbar from "@/layouts/navbar";
import { PageLayout } from "@/layouts/page-layout";
import TripSummary from "@/components/trip-summary-component";
import { MainLayout } from "@/layouts/main-layout";

const Deals: NextPage = () => {
  return (
    <MainLayout>
      <Navbar />

      <PageLayout children={<TripSummary />} />
    </MainLayout>
  );
};

export default Deals;
