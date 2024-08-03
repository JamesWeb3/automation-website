import React from "react";
import Image from "next/image";
import { useTripContext } from "@/contexts/TripContext";

export const ImageCarousel: React.FC = () => {
  const { trip, loading } = useTripContext();

  if (!trip) {
    return <p>click one of the trips in left column to load the data</p>;
  }

  return (
    <div className="flex gap-2">
      <div className="w-2/3">
        <Image
          alt={trip.name}
          src={trip.thumbnail}
          layout="responsive"
          className="rounded-xl"
          width={500}
          height={350}
        />
      </div>
      <div className="flex flex-col gap-4 w-1/3">
        {/* <Image
          alt={trip.name}
          src={trip.images[0]}
          className="rounded-xl"
          layout="responsive"
          width={500}
          height={350}
        />
        <Image
          alt={trip.name}
          src={trip.images[1]}
          className="rounded-xl"
          layout="responsive"
          width={500}
          height={350}
        /> */}
      </div>
    </div>
  );
};
