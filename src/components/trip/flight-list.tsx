import HotelImage from "../../../public/hotel.jpg";
import Image from "next/image";
import { z } from "zod";
import { BedSVG, BathroomSVG, BookingComSVG } from "@/components/ui/icons";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Hotel {
  title: string;
  bathrooms: number;
  bedrooms: number;
  sqMtr: number;
  image?: string;
}

const hotels: Hotel[] = [
  {
    title: "Beautfiul Apartment located 5 minutes from Central Station.",
    bathrooms: 2,
    bedrooms: 3,
    sqMtr: 100,
    image: "../../public/hotel.jpg",
  },
  {
    title: "Beautfiul Apartment located 5 minutes from Central Station.",
    bathrooms: 2,
    bedrooms: 3,
    sqMtr: 100,
    image: "../../public/hotel.jpg",
  },
  {
    title: "Beautfiul Apartment located 5 minutes from Central Station.",
    bathrooms: 2,
    bedrooms: 3,
    sqMtr: 100,
    image: "../../public/hotel.jpg",
  },
  {
    title: "Beautfiul Apartment located 5 minutes from Central Station.",
    bathrooms: 2,
    bedrooms: 3,
    sqMtr: 100,
    image: "../../public/hotel.jpg",
  },
  {
    title: "Beautfiul Apartment located 5 minutes from Central Station.",
    bathrooms: 2,
    bedrooms: 3,
    sqMtr: 100,
    image: "../../public/hotel.jpg",
  },
];

const createTripSchema = z.object({
  budget: z.number(),
  date: z.date(),
  people_count: z.number(),
});

const FlightList: React.FC = () => {
  return (
    <ScrollArea className="h-screen">
      <div className="flex grid grid-cols-2 gap-4">
        {hotels.map((hotel, index) => (
          <div key={index} className="rounded-lg bg-white">
            <Image
              alt="hotel thumbnail"
              src={HotelImage}
              className="rounded-tl-xl rounded-tr-xl"
            />
            <div className="p-2 rounded-bl-xl rounded-br-xl">
              <p className="text-lg font-semibold leading-6">{hotel.title}</p>

              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <BedSVG /> {hotel.bedrooms}
                  </div>

                  <div className="flex flex-col items-center">
                    <BathroomSVG /> {hotel.bedrooms}
                  </div>
                </div>
                <div className="text-blue-600 font-medium">
                  7.8
                  <BookingComSVG />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default FlightList;
