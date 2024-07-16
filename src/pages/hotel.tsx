import Navbar from '@/components/navbar';
import React from 'react';
import { MainLayout } from '@/layouts/main-layout';
import { Card } from '@/components/ui/card';

const HotelPage: React.FC = () => {
  return (
    <MainLayout>
      <Navbar/>
            <div className="flex w-full h-full gap-8 mt-4 pb-20">

              <Card className="w-1/3">
              </Card>

              <Card className="w-2/3">
              </Card>


            </div>
    </MainLayout>
  );
};

export default HotelPage;
