import React, { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import countryData from "@/data/countries.json";
import { Label } from "../ui/label";

const CountrySearch: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [cityCountryList, setCityCountryList] = useState<string[]>(() => {
    return countryData.countries.flatMap((country) =>
      country.cities.map((city) => `${city}, ${country.name}`)
    );
  });

  const handleInputFocus = () => setIsOpen(true);

  const handleInputBlur = () => {
    // Delay closing to allow click event to register
    setTimeout(() => setIsOpen(false), 200);
  };

  const handleLocationClick = (location: string) => {
    console.log(location);
    setSelectedLocation(location);
    setDialogOpen(true);
  };

  return (
    <div className="z-20 w-full">
      <Command>
      <Label className="ml-3 mb-[-5px]">Where To</Label>
        <CommandInput
          placeholder="Select a country"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {isOpen && (
          <CommandList className="">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup
              heading="Search Location"
              className="z-20 absolute overflow-auto w-[600px] h-96 rounded-md"
            >
              {cityCountryList.map((location, index) => (
                <CommandItem
                  key={index}
                  onClick={() => handleLocationClick(location)}
                >
                  {location}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        )}
      </Command>
    </div>
  );
};

export default CountrySearch;
