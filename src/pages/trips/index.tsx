// pages/trip.tsx
import React from 'react';
import { MainLayout } from '@/layouts/main-layout';
import { GridLayout } from '@/layouts/grid-layout';
import { useTripContext } from '@/contexts/TripContext';

import HotelForm from '@/components/trip/hotel-form';
import HotelList from '@/components/trip/hotel-list';
import FlightForm from '@/components/trip/flight-form';
import FlightList from '@/components/trip/flight-list';
import FoodForm from '@/components/trip/food-form';
import FoodList from '@/components/trip/food-list';
import { DealsCarousel } from '@/components/deals-carousel';

const TripContent: React.FC = () => {
  const { tripType } = useTripContext();

  switch (tripType) {
    case 'Hotels':
      return <GridLayout leftChild={<HotelForm />} rightChild={<HotelList />} />;
    case 'Flights':
      return <GridLayout leftChild={<FlightForm />} rightChild={<FlightList />} />;
    case 'Food':
      return <GridLayout leftChild={<FoodForm />} rightChild={<FoodList />} />;
    default:
      return null;
  }
};

const TripPage: React.FC = () => {
  return (
      <MainLayout>
      hi
      </MainLayout>
  );
};

export default TripPage;
