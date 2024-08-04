import Image from "next/image";
import { BedSVG, BathroomSVG, BookingComSVG } from "@/components/ui/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import HotelData from "@/data/accomodation.json"

const AccomodationList: React.FC = () => {
  return (
    <ScrollArea className="h-full">
      <div className="grid grid-cols-2 gap-4">
        {HotelData.map((hotel, index) => (
          <div key={index} className="rounded-lg bg-white">
            <Image
              alt="hotel thumbnail"
              src={hotel.image}
              width={400}
              height={300}
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

export default AccomodationList;
