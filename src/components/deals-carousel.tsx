import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DealsData from "@/data/test-deal-data.json";
import Image from "next/image";
import { PlaneIcon, TrainIcon, BedIcon } from "lucide-react";
import { useRouter } from "next/router";

export function DealsCarousel() {
  const router = useRouter();

  return (
    <>
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 px-2 w-full">
          {DealsData.map((deal, index) => (
            <CarouselItem
              key={deal.id}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div
                onClick={() => router.push(`/deals/${deal.id}`)}
                className="bg-white rounded-xl border-[1.5px] border-transparent hover:border-black/50 transition ease-in-out duration-200 cursor-pointer"
              >
                <Image
                  width={600}
                  height={300}
                  src={deal.thumbnail}
                  alt={deal.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                />

                <div className="p-2 ">
                  <p className="text-xs text-foreground font-medium">
                    {deal.location}
                  </p>
                  <p className="text-sm font-medium">{deal.name}</p>

                  <div className="flex items-center justify-between">
                    <p className="mt-4 text-xl font-semibold">{deal.price}</p>
                    <div className="flex items-center gap-1">
                      <PlaneIcon className="w-4 fill-black " />
                      <TrainIcon className="w-4 " />
                      <BedIcon className="w-4 " />
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition ease-in-out duration-200" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition ease-in-out duration-200" />
      </Carousel>
    </>
  );
}
