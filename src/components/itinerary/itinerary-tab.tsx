import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DealData from "@/data/test-deal-data.json";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/router";
import { Plus } from "lucide-react";

export const ItineraryTab: React.FC = () => {
  const router = useRouter();

  const handleItemClick = (dealId: string) => {
    const currentQuery = { ...router.query, Id: dealId };
    router.push(
      {
        pathname: router.pathname,
        query: currentQuery,
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <ScrollArea className="flex h-[80vh]">
      <Tabs>
        <TabsList className="flex w-full gap-3 bg-black rounded-lg p-1">
          <TabsTrigger
            className="text-white border border-white/40  font-medium rounded-md"
            value="upcoming"
          >
            Upcoming
          </TabsTrigger>
          <TabsTrigger
            className="text-white border border-white/40  font-medium rounded-md"
            value="draft"
          >
            Draft
          </TabsTrigger>
          <TabsTrigger
            className="text-white border border-white/40 font-medium "
            value="expired"
          >
            Expired
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <Carousel>
            <CarouselContent className="flex flex-col gap-3">
              {DealData.map((deal, index) => (
                <CarouselItem
                className={`cursor-pointer ${router.query.id === deal.id ? 'opacity-50' : ''}`}
                  onClick={() => handleItemClick(deal.id)}
                  key={index}
                >
                  <div className="rounded-xl border ">
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

           
          </Carousel>
        </TabsContent>

        <TabsContent value="draft">
          <Carousel>
            <CarouselContent className="flex flex-col gap-3">
              {DealData.map((deal, index) => (
                <CarouselItem className="cursor-pointer opacity-40" key={index}>
                  <div className="bg-muted w-full h-28 rounded-xl items-center flex justify-center relative group">
                    <Plus className="w-12 h-12 text opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

          
          </Carousel>
        </TabsContent>

        <TabsContent value="expired">
          <Carousel>
            <CarouselContent className="flex flex-col gap-3">
              {DealData.slice(3).map((deal, index) => (
                <CarouselItem className="cursor-pointer opacity-40" key={index}>
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

          </Carousel>
        </TabsContent>
      </Tabs>
    </ScrollArea>
  );
};
