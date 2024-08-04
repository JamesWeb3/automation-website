import Image from "next/image";
import { useTripContext } from "@/contexts/TripContext";

const TripImage: React.FC = () => {
  const { trip, loading } = useTripContext();
  if (!trip) {
    return <p>No trip found</p>;
  }

  return (
    <div>
      yazadsx
      <Image width={400} height={300} src={trip.thumbnail} alt={trip.name} />
    </div>
  );
};

export default TripImage;
