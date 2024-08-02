import React, { useState } from "react";
import DealData from "@/data/single-deal.json";
import Image from "next/image";

export const ItineraryContent: React.FC = () => {
  return (
    <div className="flex flex-col bg-red-100">
     
        {DealData.map((deal: any, dealIndex: number) => (
          <div className="cursor-pointer" key={dealIndex}>
            <div className="rounded-xl border">
             
              <div>{deal.name}</div>
              <div>{deal.location}</div>
              <div>{deal.start_date} - {deal.end_date}</div>
              <div>{deal.price}</div>
              <div>
                {deal.bookings.map((booking: any, bookingIndex: number) => (
                  <div key={bookingIndex}>
                    <div>{booking.name}</div>
                    <div>{booking.location}</div>
                    <div>{booking.provider}</div>
                    <div>{booking.paid ? "Paid" : "Unpaid"}</div>
                    <div>{booking.date}</div>
                    <a href={booking.booking_url} target="_blank">View Booking</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
     
    </div>
  );
};
