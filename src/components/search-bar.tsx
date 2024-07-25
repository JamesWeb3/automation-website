import React, { useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import countryData from "@/data/countries.json";
import { BookTripDialog } from "@/components/book-trip-dialog";

const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
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
    <div className="z-20">
      <Command>
        <CommandInput
          placeholder="Where do you want to go"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {isOpen && (
          <CommandList className="">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Search Location" className="bg-red-100 z-20 absolute overflow-auto w-[400px] h-96 rounded-md">
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
      {!selectedLocation && (
        <BookTripDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          selectedLocation={selectedLocation}
        />
      )}
    </div>
  );
};

export default SearchBar;
