import React, { useState } from "react";
import languages from "@/data/languages.json";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ScrollArea } from "../ui/scroll-area";
import { FlagIcon } from "react-flag-kit";

export const LanguageSelector: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredLanguages = languages.filter((language) =>
    language.language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Command className="rounded-lg border">
        <CommandInput
          placeholder="Search Languages"
          value={searchTerm}
          onValueChange={(value: string) => setSearchTerm(value)}
        />
        <CommandList></CommandList>
      </Command>
      <ScrollArea className="h-[400px]">
        <div className="grid grid-cols-3">
          {filteredLanguages.map((language, index) => (
            <div
              className=" m-1 flex gap-2 p-2 rounded-md space-y-1 hover:bg-muted transition-ease cursor-pointer"
              key={index}
            >
              <p className="text-sm mt-1">{language.language}</p>
              <FlagIcon code={language.icon} size={25} />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
