import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EnglishIcon from "../../../public/english.png";
import Image from "next/image";
import { CurrencySelector } from "@/components/preference-modal/currency-selector";
import { LanguageSelector } from "@/components/preference-modal/language-selector";
import { X } from "lucide-react";

export const PreferenceModal: React.FC = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="p-2 flex items-center gap-1 text-sm font-medium hover:bg-muted rounded-full ">
          <p>Eur</p> /{" "}
          <Image width={15} height={15} alt="icon" src={EnglishIcon} />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Select Your Currency</AlertDialogTitle>
          <AlertDialogCancel><X/></AlertDialogCancel>
        </AlertDialogHeader>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
        <Tabs defaultValue="account">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Currency</TabsTrigger>
            <TabsTrigger value="password">Language</TabsTrigger>
          </TabsList>

          <TabsContent value="account">
            <CurrencySelector />
          </TabsContent>
          <TabsContent value="password">
            <LanguageSelector />
          </TabsContent>
        </Tabs>
      </AlertDialogContent>
    </AlertDialog>
  );
};
