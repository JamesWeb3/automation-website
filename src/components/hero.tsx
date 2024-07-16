import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {

  return (
    <div className="flex justify-centerbg-red-100 p-8 rounded-2xl w-full h-full grid grid-cols-2">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl">We Automate Anything</h1>
        <p>Connecting the dots so you dont have to</p>
        <div className="flex gap-2">
          <Button>Contact Us</Button>
          <Button variant="secondary">Start Trial</Button>
        </div>

        <div className="p-4 custom-shadow rounded-lg w-max">
          <Suspense fallback={<div>Loading...</div>}>
           
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Hero;