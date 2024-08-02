import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "./ui/separator";
import { Edit2, File, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceIcon } from "@/components/ui/service-icons";
import { Trip } from "@/types/trip";
import { PrintItinerary } from "./print-itineray-dialog";
import { useRouter } from "next/router";
import { ScrollArea } from "./ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

type TripSummaryProps = {
  trip: Trip | undefined;
};

const TripSummary: React.FC<TripSummaryProps> = ({ trip }) => {
  const { toast } = useToast();
  const router = useRouter();

  const handleClone = () => {
    toast({
      title: "Successfully Clone This Deal",
      description: "Your trip has been cloned successfully",
    });
    // router.push(`/trip}`);
  };

  const handleAddBooking = () => {
    router.push(`/trips/2512-1315-2049-0183?accomodation=true`);
  };

  if (!trip) {
    return <p>No trip found</p>;
  }

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-3xl font-medium">{trip.name}</h3>
        </div>

        <div>
          <PrintItinerary />
        </div>
      </div>

      <div className="flex flex-row items-center justify-between my-2">
        <div>
          <div className="text-xs text-slate-500">ID {trip.id}</div>
          <p>{trip.start_date} -</p>
          <p> {trip.end_date}</p>
        </div>

        <div></div>
      </div>

      <Separator />
      <ScrollArea>
        <>
          <Accordion type="single" collapsible className="w-full">
            {trip.bookings.map((booking, bookingIndex) => (
              <AccordionItem
                className="relative"
                key={bookingIndex}
                value={`item-${bookingIndex}`}
              >
                <AccordionTrigger className="text-sm py-2">
                  <div className="items-left text-left ">
                    <div className="flex items-center gap-4 font-">
                      {booking.name}
                      <ServiceIcon type={booking.type} />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {booking.date}
                    </p>
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
          <div
            onClick={handleAddBooking}
            className="flex justify-center hover:bg-muted rounded-lg my-1 py-1 cursor-pointer transition-ease"
          >
            <Plus className="text-muted-foreground" />
          </div>
        </>
      </ScrollArea>

      <div>
        <p>Total Trip Cost Cost</p>
        <p className="text-3xl font-semibold">$2,499 USD</p>
      </div>

      <div className="flex w-full justify-between gap-4">
        <Button variant="outline" className="w-full">
          Confirm & Pay Now ($2,499 USD)
        </Button>
        <Button onClick={handleClone} className="w-full">
         Use & Edit Trip
        </Button>
      </div>
    </div>
  );
};

export default TripSummary;
