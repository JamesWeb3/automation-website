import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import FlightsData from "@/data/flights.json";
import { Button } from "@/components/ui/button";

const FlightsList: React.FC = () => {
  return (
    <ScrollArea className="h-full">
      <div className="gap-4">
        {FlightsData.map((flights, index) => (
          <div
            key={index}
            className="flex justify-between items-center gap-4 px-4 rounded-lg hover:bg-gray-100 transition-ease cursor-pointer"
          >
            <Image
              src={flights.provider_logo}
              alt="hotel"
              width={200}
              height={200}
              objectFit="cover"
              className="w-20 h-16"
            />

            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <p>13:50</p>
                <p className="text-sm">AMS</p>
              </div>
              <div className="h-0.5 bg-black w-28" />
              <div className="flex flex-col items-center">
                <p>17:30</p>
                <p className="text-sm">MAD</p>
              </div>
            </div>

            <Button>Book</Button>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default FlightsList;
