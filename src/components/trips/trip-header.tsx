import { useTripContext } from "@/contexts/TripContext";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DropdownMenuSVG } from "@/components/ui/icons";
import { EditTripDialog } from "@/components/dialogs/edit-trip";
import { PrintItinerary } from "@/components/dialogs/print-itineray";

export const TripHighlights: React.FC = () => {
  const { trip, loading } = useTripContext();

  if (!trip) {
    return <p>No trip found</p>;
  }

  return (
    <div className="bg-gradient-to-br from-black to-[#313131]  p-3 rounded-2xl text-white">
      <div className="flex w-full justify-between">
        <h2 className="text-3xl font-semibold">{trip.name}</h2>
       

        <div className="flex items-center gap-4">
        <EditTripDialog/>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">
                {" "}
                <DropdownMenuSVG />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Trip Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <span>Invite Friends</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <PrintItinerary/>
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Share Itinerary</span>
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="text-[10px] p-1 px-2 bg-muted/20 rounded-full w-max">
        ID: {trip.id}
      </div>
    </div>
  );
};
