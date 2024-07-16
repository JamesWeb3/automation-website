import React from "react";
import Navbar2 from "@/components/navbar2";
import { MainLayout } from "@/layouts/main-layout";
import { GridLayout } from "@/layouts/grid-layout";

import HotelForm from "@/components/hotel/hotel-form";
import HotelList from "@/components/hotel/hotel-list";

const HotelPage: React.FC = () => {
  return (
    <MainLayout>
      <Navbar2 />
      <GridLayout
        leftChild={<HotelForm />}
        rightChild={<HotelList />}
      ></GridLayout>
    </MainLayout>
  );
};

export default HotelPage;
