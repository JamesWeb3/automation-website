import React, { useState } from "react";
import rawlanguages from "@/data/languages.json";
import {
  Command,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FlagIcon } from "react-flag-kit";
import { FlagIconCode, isFlagIconCode } from '@/types/FlagIconCode';

type Language = {
  language: string;
  icon: FlagIconCode;
};

export const LanguageSelector: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");


  const languages: Language[] = rawlanguages.map(lang => {
    if (isFlagIconCode(lang.icon)) {
      return lang as Language;
    } else {
      throw new Error(`Invalid flag icon code: ${lang.icon}`);
    }
  });

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
          {languages.map((language, index) => (
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
