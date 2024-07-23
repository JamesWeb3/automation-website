// contexts/TripContext.tsx
import React, { createContext, useContext, useState } from 'react';

type TripType = 'Hotels' | 'Flights' | 'Food';

interface TripContextProps {
  tripType: TripType;
  setTripType: (type: TripType) => void;
}

const TripContext = createContext<TripContextProps | undefined>(undefined);

export const TripProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tripType, setTripType] = useState<TripType>('Hotels');

    return (
        <TripContext.Provider value={{ tripType, setTripType }}>
            {children}
        </TripContext.Provider>
    );
};

export const useTripContext = () => {
  const context = useContext(TripContext);
  if (context === undefined) {
    throw new Error('useTripContext must be used within a TripProvider');
  }
  return context;
};
