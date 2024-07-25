import Navbar from "@/components/navbar";
import Globe from "@/components/magicui/globe";
import { Button } from "@/components/ui/button";
import {
  PlaneSVG,
  TrainSVG,
  AccomodationSVG,
  SearchSVG,
} from "@/components/ui/icons";
import { AuthDialogIndex } from "@/components/auth";
import Image from "next/image";
import Greece from "../../public/backgrounds/greece.jpg";
import SanFran from "../../public/backgrounds/sanfran.jpg";
import Turkey from "../../public/backgrounds/turkey.jpg";
import SearchBar from "@/components/search-bar";

const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen h-screen overflow-hidden flex flex-col items-center justify-between">
      <div className="absolute inset-0 z-[-5]">
        <Image alt="Greece" src={SanFran} layout="fill" objectFit="cover" />
      </div>
      <div className="absolute inset-0 bg-custom-gradient"></div>

      <div className="p-8 z-20 w-full">
        <Navbar />

        <div className="flex flex-col items-center gap-8 mt-8 z-20">
          <h1 className="text-8xl font-semibold">Travella</h1>
          <h2 className="">Travel the world, all in one app</h2>
          <div className="max-w-[400px] w-full z-20">
          <SearchBar />
          </div>
         
          <div className="relative w-full">
            <Globe className="top-[-50px] absolute" />
          </div>
        </div>
        <AuthDialogIndex />
        <div className="absolute bottom-8 left-8">
          View Deals
        </div>
        <div className="absolute bottom-8 right-8">
          Terms and Conditions | Privacy Policy
        </div>
      </div>
    </main>
  );
};

export default HomePage;
