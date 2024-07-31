import React, { useState } from "react";
import currencies from "@/data/currencies.json";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { ScrollArea } from "../ui/scroll-area";

export const CurrencySelector: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredCurrencies = currencies.filter(
    (currency) =>
      currency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      currency.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Command className="rounded-lg border">
        <CommandInput
          placeholder="Type to search..."
          value={searchTerm}
          onValueChange={(value: string) => setSearchTerm(value)}
        />
        <CommandList/>
      </Command>
      <ScrollArea className="h-[400px]">
        <div className="grid grid-cols-3">
          {filteredCurrencies.map((currency, index) => (
            <div
              className=" m-1 p-2 rounded-md hover:bg-muted transition-ease cursor-pointer"
              key={index}
            >
              <p className="text-sm">{currency.name} </p>
              <p>{currency.label}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
