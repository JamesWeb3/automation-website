import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "./ui/separator";
import { Edit2, File } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ServiceIcon } from "@/components/ui/service-icons";
import { useRouter } from "next/router";
import trips from "@/data/test-deal-data.json";
import { useEffect, useState } from "react";

type Trip = {
  id: string;
  name: string;
  thumbnail: string;
  start_date: string;
  end_date: string;
  bookings: any[];
};

const TripSummary: React.FC = () => {
  const router = useRouter();
  const [trip, setTrip] = useState<Trip | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const hardcodedId = "2512-1315-2049-0183";

  useEffect(() => {
    console.log("ID FOUND", hardcodedId);
    const foundTrip = trips.find((trip) => trip.id === hardcodedId);
    setTrip(foundTrip);
    console.log("FOUND TRIP", foundTrip);
    setLoading(false);
  }, []);

  if (!trip) {
    return <p>No trip found</p>;
  }

  return (
    <>
      <div className="flex items-center justify-between bg-red-100">
        <div>
          <h3 className="text-2xl font-medium">{trip.name}</h3>
        </div>

        <div>stuff Print Logic</div>
      </div>

      <div className="flex flex-row items-center justify-between bg-green-100">
        <div>
          <div className="text-xs text-slate-500">ID {trip.id}</div>
          <p>{trip.start_date} -</p>
          <p> {trip.end_date}</p>
        </div>

        <div>
          <Image
            width={300}
            height={200}
            src={trip.thumbnail}
            alt={trip.name}
          />
        </div>
      </div>

      <Separator />

      <Accordion type="single" collapsible className="w-full">
        {trip.bookings.map((booking, bookingIndex) => (
          <AccordionItem
            className="relative"
            key={bookingIndex}
            value={`item-${bookingIndex}`}
          >
            <AccordionTrigger className="text-sm py-2">
              <div className="flex items-center gap-4">
                <ServiceIcon type={booking.type} />
                {booking.name}
              </div>
            </AccordionTrigger>
            <AccordionContent className="relative">
              <p>
                <strong>Location:</strong> {booking.location}
              </p>
              <p>
                <strong>Provider:</strong> {booking.provider}
              </p>
              <p>
                <strong>Paid:</strong> {booking.paid ? "Yes" : "No"}
              </p>
              <div className="flex gap-1 absolute top-0 right-0">
                <Edit2 className="w-4 h-4 text-slate-400" />
                <File className="w-4 h-4 text-slate-400" />
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div>
        <p>Trip Cost $2k</p>
        <p className="text-xs">Unpaid total in trip $359.49</p>
      </div>
      <Button>Book Trip $2,000</Button>
    </>
  );
};

export default TripSummary;
