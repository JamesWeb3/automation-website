import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DealData from "@/data/test-deal-data.json";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const ItineraryTab: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Upcoming Trips</h3>
      <Tabs defaultValue="account">
        <Carousel>
          <CarouselContent>
            {DealData.map((deal, index) => (
              <CarouselItem
                className="max-w-[250px] cursor-pointer"
                key={index}
              >
                <div className="rounded-xl border">
                  <Image
                    alt="hotel thumbnail"
                    src={deal.thumbnail}
                    layout="responsive"
                    width={300}
                    height={200}
                    className="w-full rounded-tl-xl rounded-tr-xl"
                  />
                  <div className="p-1">
                    <p className="font-semibold text-sm">{deal.name}</p>
                    <div className="flex mt-1">
                      <p className="bg-green-200 w-max px-2 rounded-full text-[10px]">
                        7/7
                      </p>
                      <p className="w-max text-green-400 px-2 rounded-full text-[10px]">
                        Trip Paid In Full
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />

          <CarouselNext />
        </Carousel>
      </Tabs>
    </div>
  );
};
