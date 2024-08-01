import React from 'react';
import { Hotel, Bike, PlaneIcon, Utensils, Train } from 'lucide-react';

interface IconProps {
  type: 'accomodation' | 'activity' | 'flights' | 'transport' | 'food';
}

const iconMap = {
  accomodation: <Hotel className="w-4 text-[#7EC3F5]" strokeWidth={2} />,
  activity: <Bike className="w-4 text-[#B591E3]" />,
  flights: <PlaneIcon className="w-4 text-[#E38B4B] " />,
  food: <Utensils className="w-4 text-[#71ED75] " />,
  transport:  <Train className="w-4 text-[#E34B4B] " />,
  
};

export const ServiceIcon: React.FC<IconProps> = ({ type }) => {
  return <div>{iconMap[type]}</div>;
};
