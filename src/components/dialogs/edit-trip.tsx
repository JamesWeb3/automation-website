import React, { use, useEffect } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PenIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useTripContext } from "@/contexts/TripContext";

export const EditTripDialog: React.FC = () => {
  const router = useRouter();
  const { id } = useTripContext();

  const handleEditTrip = () => {
    console.log("PULLED TRIP ID", id);
    router.push(`/trips/${id}`);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PenIcon className="hover:text-gray-300 transition-ease cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Your Trip</DialogTitle>
          <DialogDescription>
            Continuing will take you back to the Trip Edit page where you can
            make changes to your trip.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2"></div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button onClick={handleEditTrip} type="button">
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
