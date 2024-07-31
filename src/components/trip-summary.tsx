import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "./ui/separator";
import dummydata from "@/data/dummy-trip-data.json";
import { Edit2, File } from "lucide-react";
interface TripSummaryProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TripSummary: React.FC<TripSummaryProps> = ({ open, setOpen }) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger></SheetTrigger>
      <SheetContent className="min-w-[500px] rounded-l-2xl">
        {dummydata.map((trip, tripIndex) => (
          <div key={tripIndex} className="space-y-2">
            <SheetHeader>
              <div>
                <SheetTitle>{trip.name}</SheetTitle>
                <div className="text-[10px] mt-[-3px] text-slate-500">
                  ID {trip.id}
                </div>
              </div>
            </SheetHeader>
            <div className="flex gap-2 text-sm">
              <p>{trip.start_date} -</p>
              <p> {trip.end_date}</p>
            </div>

            <Separator />

            <Accordion type="single" collapsible className="w-full">
              {trip.bookings.map((booking, bookingIndex) => (
                <AccordionItem
                className="relative"
                  key={bookingIndex}
                  value={`item-${bookingIndex}`}
                >
                  {/* <div className="absolute w-2 h-full left-[-10px] border-l-2 border-dotted border-gray-300" /> */}
                  <AccordionTrigger className="text-sm py-2">
                    {booking.name}
                  </AccordionTrigger>
                  <AccordionContent className="relative">
                   
                    <p>
                      <strong>Location:</strong> {booking.location}
                    </p>
                    <p>
                      <strong>Provider:</strong> {booking.provider}
                    </p>
                    <p>
                      <strong>Paid:</strong> {booking.paid ? "Yes" : "No"}
                    </p>
                    <div className="flex gap-1 absolute top-0 right-0">
                      <Edit2 className="w-4 h-4 text-slate-400"/>
                      <File className="w-4 h-4 text-slate-400"/>

                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-4">
              <p>Trip Cost ${trip.cost}</p>
              <p className="text-xs">Unpaid total in trip $359.49</p>
            </div>
          </div>
        ))}
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default TripSummary;
