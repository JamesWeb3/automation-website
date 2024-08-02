import React, { useState } from "react";
import { Tabs } from "@/components/ui/tabs";
import DealData from "@/data/test-deal-data.json";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRouter } from "next/router";
import { ScrollArea } from "@/components/ui/scroll-area";

export const ItineraryTab: React.FC = () => {
  const router = useRouter();

  return (
    <ScrollArea className="flex h-[80vh]">
      <div>
        <h3 className="text-lg font-semibold mb-2">Upcoming Trips</h3>
        <Tabs>
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
      <div>
        <h3 className="text-lg font-semibold mb-2 mt-4">Draft Trips</h3>
        <Tabs>
          <Carousel>
            <CarouselContent>
              {DealData.map((deal, index) => (
                <CarouselItem
                  className="max-w-[250px] cursor-pointer  opacity-40"
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

      <div>
        <h3 className="text-lg font-semibold mb-2 mt-4">Expired Trips</h3>
        <Tabs>
          <Carousel>
            <CarouselContent>
              {DealData.map((deal, index) => (
                <CarouselItem
                  className="max-w-[250px] cursor-pointer  opacity-40"
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
    </ScrollArea>
  );
};
