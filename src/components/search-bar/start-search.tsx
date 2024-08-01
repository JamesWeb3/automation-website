import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FlightsIcon } from "@/components/ui/services/flights";
import { AccomodationIcon } from "@/components/ui/services/accomodation";
import { FoodIcon } from "@/components/ui/services/food";
import { ActivityIcon } from "../ui/services/activity";
import { TransportIcon } from "@/components/ui/services/transport";

const StartSearch: React.FC = () => {
  return (
    <Select>
      <SelectTrigger className="border-none hover:bg-muted transition-ease w-full">
        <SelectValue placeholder="How to start" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="flights">
            <div className="flex flex-row items-center gap-2">
              <FlightsIcon />
              Book Flights
            </div>
          </SelectItem>
          <SelectItem value="accomodation">
            <div className="flex flex-row items-center gap-2">
              <AccomodationIcon />
              Book Accomodation
            </div>
          </SelectItem>
          <SelectItem value="transport">
          
            <div className="flex flex-row items-center gap-2">
            <TransportIcon />
              Book Transport
            </div>
          </SelectItem>
          <SelectItem value="activities">
            {" "}
            <div className="flex flex-row items-center gap-2">
            <ActivityIcon />
              Book Activity
            </div>
          </SelectItem>
          <SelectItem value="Food">
            <div className="flex flex-row items-center gap-2">
              <FoodIcon />
              Book Resturaunt
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default StartSearch;
