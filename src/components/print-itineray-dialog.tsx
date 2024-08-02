"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "./ui/input";
import { createTripSchema } from "@/schemas/index";
import { CloseSVG } from "./ui/icons";
import { useRouter } from "next/router";
import { Printer } from "lucide-react";

type CreateTripSchema = z.infer<typeof createTripSchema>;

export const PrintItinerary: React.FC = ( ) => {
  const router = useRouter();

  const form = useForm<CreateTripSchema>({
    resolver: zodResolver(createTripSchema),
  });

  const onSubmit: SubmitHandler<CreateTripSchema> = async (data) => {
    router.push("/trip");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Printer className="text-muted-foreground hover:text-muted-foreground/70 transition-ease cursor-pointer" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Would you like to Download this Entire Trip Itinerary?
          </AlertDialogTitle>
          <AlertDialogCancel>
            <CloseSVG />
          </AlertDialogCancel>
        </AlertDialogHeader>
        <AlertDialogDescription>
            This will send an email containing a PDF document of the entire trip including all booking information.
        </AlertDialogDescription>
        <AlertDialogFooter>
            <Button>Yes</Button>
            <Button>No</Button>
        </AlertDialogFooter>
        
      </AlertDialogContent>
    </AlertDialog>
  );
};
