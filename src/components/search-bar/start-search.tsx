import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ServiceIcon } from "@/components/ui/service-icons";

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
              <ServiceIcon type="flights" />
              Book Flights
            </div>
          </SelectItem>
          <SelectItem value="accomodation">
            <div className="flex flex-row items-center gap-2">
            <ServiceIcon type="accomodation" />
              Book Accomodation
            </div>
          </SelectItem>
          <SelectItem value="transport">
          
            <div className="flex flex-row items-center gap-2">
            <ServiceIcon type="transport" />
              Book Transport
            </div>
          </SelectItem>
          <SelectItem value="activity">
            {" "}
            <div className="flex flex-row items-center gap-2">
            <ServiceIcon type="activity" />
              Book Activity
            </div>
          </SelectItem>
          <SelectItem value="Food">
            <div className="flex flex-row items-center gap-2">
            <ServiceIcon type="food" />
              Book Resturaunt
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default StartSearch;
