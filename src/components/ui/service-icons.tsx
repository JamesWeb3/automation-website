import React from 'react';

interface IconProps {
  type: 'accomodation' | 'activity' | 'flights' | 'transport' | 'food';
}

const bgColorMap = {
  accomodation: 'bg-[#7EC3F5]',
  activity: 'bg-[#B591E3]',
  flights: 'bg-[#E38B4B]',
  food: 'bg-[#71ED75]',
  transport: 'bg-[#E34B4B]',
};

const textMap = {
  accomodation: 'ACCOMODATION',
  activity: 'ACTIVITY',
  flights: 'FLIGHTS',
  food: 'FOOD',
  transport: 'TRANSPORT',
};

export const ServiceIcon: React.FC<IconProps> = ({ type }) => {
  return (
    <div className={`px-1 text-[8px] font-semibold rounded-full opacity-80 hover:bg-opacity-90 transition-ease ${bgColorMap[type]}`}>
      {textMap[type]}
    </div>
  );
};
