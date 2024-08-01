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
import { Edit2, File } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ServiceIcon } from "./ui/service-icons";

interface TripSummaryProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedDeal: any;
}

const TripSummary: React.FC<TripSummaryProps> = ({
  open,
  setOpen,
  selectedDeal,
}) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger></SheetTrigger>
      <SheetContent className="min-w-[500px] rounded-l-2xl pb-20">
        {selectedDeal ? (
          <div className="flex flex-col justify-between h-full">
            <SheetHeader>
              <div>
                <SheetTitle>{selectedDeal.name}</SheetTitle>
                <div className="text-[10px] mt-[-3px] text-slate-500">
                  ID {selectedDeal.id}
                </div>
              </div>
            </SheetHeader>
            <div className="h-60 w-full">
              <Image
                width={300}
                height={200}
                src={selectedDeal.thumbnail}
                alt={selectedDeal.name}
              />
            </div>
            <div className="flex gap-2 text-sm">
              <p>{selectedDeal.start_date} -</p>
              <p> {selectedDeal.end_date}</p>
            </div>

            <Separator />

            <Accordion type="single" collapsible className="w-full">
              {selectedDeal.bookings.map((booking: any, bookingIndex: any) => (
                <AccordionItem
                  className="relative"
                  key={bookingIndex}
                  value={`item-${bookingIndex}`}
                >
                  <AccordionTrigger className="text-sm py-2">
                    <div className="flex items-center gap-4">
                      <ServiceIcon type={booking.type} />

                      {booking.name}
                    </div>
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
                      <Edit2 className="w-4 h-4 text-slate-400" />
                      <File className="w-4 h-4 text-slate-400" />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
           
          </div>
        ) : (
          <div>Loading...</div>
        )}
        <SheetFooter>
        <div >
              <p>Trip Cost $2k</p>
              <p className="text-xs">Unpaid total in trip $359.49</p>
            </div>
            <Button>Book Trip $2,000</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default TripSummary;
