export type Trip = {
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
