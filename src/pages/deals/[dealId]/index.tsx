import React from "react";
import { NextPage } from "next";
import Navbar from "@/layouts/navbar";
import { GridLayout } from "@/layouts/grid-layout";
import { MainLayout } from "@/layouts/main-layout";
import DealsList from "@/components/lists/deals-list";
import DealsForm from "@/components/forms/deals-form";

const Deals: NextPage = () => {
  return (
    <MainLayout>
      <Navbar />

      <GridLayout leftChild={<DealsForm />} rightChild={<DealsList />} />
    </MainLayout>
  );
};

export default Deals;
