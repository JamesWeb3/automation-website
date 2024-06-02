import React, { Suspense } from 'react';
import { Button } from '@/ui/button';
import { IconCloudDemo } from '@/ui/icon-cloud/icon-cloud-component';
import NumberTicker from '@/ui/number-ticker';

const Hero: React.FC = () => {

  const NumberTicker = React.lazy(() => import('@/ui/number-ticker'));
  

    return (
<div className="bg-white p-8 rounded-2xl w-full h-full grid grid-cols-2">

<div className="flex flex-col gap-6">
  <h1 className="text-4xl">We Automate Anything</h1>
  <p>Connecting the dots so you dont have to</p>
  <div className="flex gap-2">
    <Button>Contact Us</Button>
    <Button variant="secondary">Start Trial</Button>
  </div>

  <div className="p-4 custom-shadow rounded-lg w-max">
<Suspense fallback={<div>Loading...</div>}>
  <div className="flex gap-6">
    <div>
    <NumberTicker value={50} />
    <p>Projects completed</p>
    </div>

    <div>
    <NumberTicker value={300000} />
    <p>Saved from clients</p>
    </div>
  
  <div>
  <NumberTicker value={100} />
  <p>??</p>
  </div>
 
  </div>
 
</Suspense>

  </div>
</div>

<div>
  <IconCloudDemo/>
</div>


</div>
    );
};

export default Hero;