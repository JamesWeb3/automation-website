import { ReactNode } from "react";

export type Trip = {
  bio: ReactNode;
  location: ReactNode;
  images: any;
  id: string;
  name: string;
  thumbnail: string;
  start_date: string;
  end_date: string;
  bookings: any[];
};

export type Booking = {
  type: string;
  name: string;
  location: string;
  provider: string;
  paid: boolean;
  id: string;
  date: string;
  booking_url: string;
};

export type Accomodation = {
  title: string;
  bathrooms: number;
  bedrooms: number;
  sqMtr: number;
  image?: string;
}