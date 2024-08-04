import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DockDemo } from "@/components/ui/magicui/dock-component";
import { Plus } from "lucide-react"
export function AddBookingPopup() {
  return (
    <Popover>
      <PopoverTrigger className="flex gap-2 hover:bg-blue-100 transition-ease py-2"><Plus/>Add Booking</PopoverTrigger>
      <PopoverContent>
        <DockDemo />
      </PopoverContent>
    </Popover>
  );
}
