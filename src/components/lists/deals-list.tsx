import Image from "next/image";
import { z } from "zod";
import { BedSVG, BathroomSVG, BookingComSVG } from "@/components/ui/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import DealData from "@/data/test-deal-data.json";

const DealsList: React.FC = () => {
  return (
    <ScrollArea className="h-screen">
      <div className="grid grid-cols-2 gap-4">
        {DealData.map((deal: any, index: any) => (
          <div key={index} className="rounded-lg bg-white">
            <Image
              alt="hotel thumbnail"
              src={deal.thumbnail}
              layout="responsive"
              width={500}
              height={350}
              className="w-full aspect-w-16 aspect-h-9 rounded-tl-xl rounded-tr-xl"
            />
            <div className="p-2 rounded-bl-xl rounded-br-xl">
              <p className="text-lg font-semibold leading-6">{deal.name}</p>

              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <BedSVG />
                    no beds
                  </div>

                  <div className="flex flex-col items-center">
                    <BathroomSVG /> no beds
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default DealsList;
