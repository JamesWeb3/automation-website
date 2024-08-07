import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/router";
import { Trip } from "@/types/types"; // Ensure your types file is correct

interface TripContextProps {
  trip: Trip | undefined;
  loading: boolean;
  id: string | undefined;
}

const TripContext = createContext<TripContextProps | undefined>(undefined);

export const useTripContext = () => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error("useTripContext must be used within a TripProvider");
  }
  return context;
};

interface TripProviderProps {
  children: ReactNode;
  trips: Trip[];
}

export const TripProvider = ({ children, trips }: TripProviderProps) => {
  const router = useRouter();
  const [trip, setTrip] = useState<Trip | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const id = router.query.tripId || router.query.Id || router.query.dealId;

  useEffect(() => {
    console.log("id", id);
    if (id) {
      setLoading(true);
      const foundTrip = trips.find((trip) => trip.id === id);
      setTrip(foundTrip);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [id, trips]);

  return (
    <TripContext.Provider value={{ trip, loading, id: id?.toString() }}>
      {children}
    </TripContext.Provider>
  );
};
