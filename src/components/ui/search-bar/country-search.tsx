import React, { useRef, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import countryData from "@/data/countries.json";
import { Label } from "@/components/ui/label";

const CountrySearch: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [cityCountryList, setCityCountryList] = useState<string[]>(() => {
    return countryData.countries.flatMap((country) =>
      country.cities.map((city) => `${city}, ${country.name}`)
    );
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = () => setIsOpen(true);

  const handleLocationClick = (location: string) => {
    setSelectedLocation(location);
    setIsOpen(false);
  };

  const handleInputBlur = () => {
    // Delay the close to allow click event to register
    setTimeout(() => setIsOpen(false), 100);
  };

  const handleParentClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className="w-full hover:bg-muted cursor-pointer rounded-l-full p-1"
      onClick={handleParentClick}
    >
      <Command>
        <Label className="ml-3 mb-[-3px] mt-1">Where To</Label>
        <CommandInput
          ref={inputRef}
          value={selectedLocation}
          placeholder="Select a country"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onValueChange={(value: string) => setSelectedLocation(value)}
        />
        {isOpen && (
          <CommandList className="bg-green-100">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup
              heading="Search Location"
              className="z-20 absolute overflow-auto w-[600px] h-96 rounded-md bg-white"
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
