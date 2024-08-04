import { ReactNode } from "react";

export type Trip = {
  bio?: string;
  location: string;
  images?: string[];
  id: string;
  name: string;
  thumbnail: string;
  start_date: string;
  end_date: string;
  bookings: any[];
  price?: string;
  persons?: number;
};

export type Booking = {
  type: "flights" | "accommodation" | "activity" | "transport" | "food";
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
};

