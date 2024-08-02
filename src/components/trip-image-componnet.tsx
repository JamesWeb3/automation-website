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
import { ServiceIcon } from "@/components/ui/service-icons";
import { Trip } from "@/types/trip";

type TripImageProps = {
  trip: Trip | undefined;
};

const TripImage: React.FC<TripImageProps> = ({ trip }) => {
  if (!trip) {
    return <p>No trip found</p>;
  }

  return (
    <div>
      <Image width={400} height={300} src={trip.thumbnail} alt={trip.name} />
    </div>
  );
};

export default TripImage;
