import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "../ui/separator";
import { Edit2, File } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceIcon } from "@/components/ui/service-icons";
import { ScrollArea } from "../ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { useTripContext } from "@/contexts/TripContext";
import { useRouter } from "next/router";

const BookingsSummary: React.FC = ({}) => {
  const router = useRouter();
  const { toast } = useToast();
  const { trip, loading } = useTripContext();

  if (!trip) {
    return <p>No trip found</p>;
  }

  const handleClone = () => {
    toast({
      title: "Successfully Clone This Deal",
      description: "Your trip has been cloned successfully",
    });
    router.push(`/trips/${trip.id}`);
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <p className="text-sm font-semibold">Booking Summary</p>
      <Separator />
      <ScrollArea>
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

export default BookingsSummary;
