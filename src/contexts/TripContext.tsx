import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { Trip } from '@/types/trip';


interface TripContextProps {
  trip: Trip | undefined;
  loading: boolean;
}

const TripContext = createContext<TripContextProps | undefined>(undefined);

export const useTripContext = () => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error('useTripContext must be used within a TripProvider');
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

  useEffect(() => {
    const { id } = router.query;
    if (id && typeof id === 'string') {
      const foundTrip = trips.find((trip) => trip.id === id);
      setTrip(foundTrip);
    }
    setLoading(false);
  }, [router.query]);

  return (
    <TripContext.Provider value={{ trip, loading }}>
      {children}
    </TripContext.Provider>
  );
};
